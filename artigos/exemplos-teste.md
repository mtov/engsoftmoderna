

# Alguns Exemplos Reais e Interessantes de Testes

## Introdução

No [Capítulo 8](https://engsoftmoderna.info/cap8.html), 
explicamos os principais conceitos de testes de software 
e mostramos pelo menos uma dezena de exemplos de código.

Neste artigo, vamos ampliar essa lista de exemplos, **mostrando 
e explicando exemplos reais de testes implementados em sistemas 
de código aberto**. Achamos isso relevante, pois conhecer, ler 
e entender esses exemplos pode ajudá-lo na escrita de seus 
próprios testes.

Para ir direto para os exemplos de cada sistema, use os seguintes 
links:

* [Google Guava](#guava)
* [Spring PetClinic](#spring-petclinic)
* [JUnit](#junit)
* [Vue.js](#vue.js)
* [PowerToys](#powertoys)

## Guava

[Guava](https://github.com/google/guava) é uma biblioteca de código aberto -- 
implementada pelo Google -- que oferece um conjunto de funções básicas para 
concorrência, cache, E/S e grafos. Ela inclui também funções utilitárias 
para trabalhar com tipos primitivos. Logo, o sistema pode ser visto como
um complemento para a biblioteca padrão de Java. 

Já mostramos um exemplo de teste do Guava no 
[Capítulo 8](https://engsoftmoderna.info/cap8.html#n%C3%BAmero-de-assert-por-teste), mas vamos aqui mostrar mais três exemplos.

#### Exemplo 1: Ints.contains {.unnumbered}

Guava implementa uma classe chamada 
[`Ints`](https://guava.dev/releases/snapshot-jre/api/docs/) que oferece
métodos estáticos para trabalhar com valores inteiros. Dentre eles,
temos o seguinte método:

```
public static boolean contains(int[] array, int target)
```

Ele verifica se um vetor de inteiros (`array`) contem um determinado
inteiro (`target`).

O teste desse método é o seguinte:

```
public void testContains() {
  assertFalse(Ints.contains(EMPTY, (int) 1));
  assertFalse(Ints.contains(ARRAY1, (int) 2));
  assertFalse(Ints.contains(ARRAY234, (int) 1));
  assertTrue(Ints.contains(new int[] {(int) -1}, (int) -1));
  assertTrue(Ints.contains(ARRAY234, (int) 2));
  assertTrue(Ints.contains(ARRAY234, (int) 3));
  assertTrue(Ints.contains(ARRAY234, (int) 4));
}
```

Esse teste é quase que auto-explicativo. Na verdade, basta entender que
os identificadores em maiúsculo são constantes definidas na classe
de teste, chamada [IntsTest](https://github.com/google/guava/blob/master/guava-tests/test/com/google/common/primitives/IntsTest.java), 
da seguinte forma:

```
private static final int[] EMPTY = {};
private static final int[] ARRAY1 = {(int) 1};
private static final int[] ARRAY234 = {(int) 2, (int) 3, (int) 4};

```

#### Exemplo 2: Ints.reverse {.unnumbered}

Vamos aproveitar e mostrar mais um teste da classe `Ints`, desta
vez do método `reverse`, que inverte um vetor de inteiros.

```
public void testReverse() {
  testReverse(new int[] {}, new int[] {});
  testReverse(new int[] {1}, new int[] {1});
  testReverse(new int[] {1, 2}, new int[] {2, 1});
  testReverse(new int[] {3, 1, 1}, new int[] {1, 1, 3});
  testReverse(new int[] {-1, 1, -2, 2}, new int[] {2, -2, 1, -1});
}
```

Esse método de teste sempre chama um segundo método, também
chamado `testReverse`, mas que recebe como parâmetro dois 
vetores de inteiros, sendo que um é o inverso do outro. 
Veja seu código:

```
private static void testReverse(int[] input, int[] expectedOutput) {
  input = Arrays.copyOf(input, input.length);
  Ints.reverse(input);
  assertTrue(Arrays.equals(expectedOutput, input));
}
```  

O código é bem simples: primeiro cria-se uma cópia do vetor `input`
(basicamente, para o teste não alterar seus elementos quando retornar);
depois chama-se o método de teste (`Ints.reverse`) e verifica-se
se o resultado é aquele esperado, isto é, `expectedOutput`.

#### Exemplo 3: Files.copy {.unnumbered}

Guava disponibiliza uma classe `Files`, com métodos utilitários
para trabalhar com arquivos. Dentre eles, temos um método 
`copy(File from, File to)` que copia todos os bytes de um arquivo
para outro.

Um dos testes desse método é o seguinte:

```
public void testCopyFile() throws IOException {
  File i18nFile = getTestFile("i18n.txt"); // setup
  File temp = createTempFile();

  Files.copy(i18nFile, temp); // método que está sendo testado

  assertEquals(I18N, Files.toString(temp, Charsets.UTF_8));
}
```

Primeiro, abre-se um arquivo que já existe no
diretório de teste, chamado `i18n.txt`. Em seguida, cria-se um arquivo
vazio, também no diretório de teste. Ambas as tarefas são
realizadas por funções utilitárias: `getTestFile` e `createTempFile`.

Depois, o método `copy` é chamado para copiar o conteúdo de um dos
arquivos (`i18nFile`) para o outro arquivo (`temp`). 

Por fim, temos um `assert`. Ele verifica se o conteúdo do arquivo 
`temp` de fato passou a ser o conteúdo previamente lido de `i18n.txt`. 
Esse conteúdo já é conhecido e está armazenado em uma constante 
string chamada `I18N`.

Em tempo, a função `Files.toString` usada no `assertEquals` lê o
conteúdo de um arquivo e retorna-o em uma string.

Antes de terminar, queremos ressaltar que esse é um **teste de 
integração**, pois ele faz acesso ao disco para ler e gravar 
arquivos.


## Spring PetClinic

[Spring PetClinic](https://github.com/spring-projects/spring-petclinic) 
é uma aplicação de demonstração do 
[Spring](https://spring.io/projects/spring-framework), 
um framework para desenvolvimento Web para Java. A PetClinic
implementa um sistema simples para controle de uma clínica veterinária.
Por exemplo, o sistema armazena informações sobre os animais internados
na clínica e seus respectivos donos.

O sistema tem alguns **testes de integração** interessantes, que se beneficiam
de funcionalidades oferecidas de forma transparente pelo Spring.

Por exemplo, a classe 
[ClinicServiceTests](https://github.com/mtov/spring-petclinic/blob/main/src/test/java/org/springframework/samples/petclinic/service/ClinicServiceTests.java) 
implementa um método que testa o serviço de atualização do nome do 
dono de um animal:

```
@Test
@Transactional
void shouldUpdateOwner() {
  Owner owner = this.owners.findById(1);
  String oldLastName = owner.getLastName();  // setup
  String newLastName = oldLastName + "X";
  owner.setLastName(newLastName);

  this.owners.save(owner);  // método que está sendo testado

  owner = this.owners.findById(1);
  assertThat(owner.getLastName()).isEqualTo(newLastName);
}
```

Esse teste recupera o nome do dono cujo ID é 1.
Em seguida, ele altera esse nome acrescentando um "X" no final
e salva a alteração no banco de dados. Para finalizar, ele 
recupera de novo o mesmo nome e verifica se ele agora 
termina com um "X".

Esse teste é um teste de integração, pois ele recupera e salva dados 
no banco de dados da aplicação. Além disso, ele usa dois serviços 
interessantes do Spring:

* O valor do atributo `owners` -- com métodos para recuperar e salvar dados 
de donos de animais -- é injetado automaticamente pelo Spring,
que também implementa um serviço de **injeção de dependências**. Para
isso, a declaração desse atributo na classe `ClinicServiceTests`
possui uma anotação `@Autowired`:

```
class ClinicServiceTests {
  ...
  @Autowired     // Spring vai injetar essa dependência
  protected OwnerRepository owners;
  ...
}
```

Para saber mais sobre injeção de dependência, você pode
consultar esse [artigo](https://engsoftmoderna.info/artigos/injecao-dependencia.html) 
do nosso site.

* O teste é também anotado com `@Transactional` 
para garantir uma semântica de transações na sua execução. No caso
de testes de integração, essa anotação está configurada para
realizar automaticamente um rollback ao final de cada transação.
Veja o que diz um comentário na própria classe de teste:

> each test method is executed in its own transaction, which is 
automatically rolled back by default. Thus, even if tests
insert or otherwise change database state, there is no need 
for a teardown or cleanup script.


## JUnit

O JUnit também possui testes, que, evidentemente, são executados 
pelo próprio JUnit. As primeiras versões desses testes foram 
implementadas por Kent Beck e Erich Gamma, criadores do JUnit 
e, em grande  medida, do próprio conceito de testes de unidade
 automatizados. 

Os testes do JUnit -- versão 4 -- ficam em um diretório chamado
[test](https://github.com/mtov/junit4/tree/main/src), que fica
"ao lado" do diretório principal (*main*) com o código do sistema.

Alguns testes interessantes estão implementados em 
[SuiteTest.java](https://github.com/mtov/junit4/blob/main/src/test/java/junit/tests/framework/SuiteTest.java). 
A primeira versão dessa classe foi implementada por Erich Gamma, 
em dezembro de 2000 (confira o 
[commit](https://github.com/mtov/junit4/commit/b6a0693454ac8ded32b3a1ea7c859c5a840169dc)). 
Os testes implementados nela funcionam conforme descrito a seguir.

Primeiro, no mesmo diretório de `SuiteTest.java`, existem arquivos que 
implementam alguns casos de teste. Vamos mostrar um deles 
(os comentários foram acrescentados por nós mesmos):

```
// OneTestCase.java
public class OneTestCase extends TestCase {
  public void noTestCase() { // não começa com test
  }

  public void testCase() { // ok, método de teste!
  }

  public void testCase(int arg) { // possui parâmetro
  }
}

```

Esse arquivo declara um `TestCase` simples, que usa a convenção 
antiga do JUnit para implementação de testes. Segundo essa convenção:
(1) casos de teste devem ser implementados em subclasses
de `TestCase`; (2) cada teste deve começar com o prefixo `test`, não
possuir parâmetro e retornar `void`. 

Logo, `OneTestCase` é um caso de teste que possui apenas um método de 
teste válido (`testCase()`), cujo corpo é vazio. Essa propriedade de 
`OneTestCase` é testada pelo seguinte método de `SuiteTest`:

```
public void testOneTestCase() {
  TestSuite t = new TestSuite(OneTestCase.class); // setup

  t.run(fResult);         // método que está sendo testado
  
  assertTrue(fResult.runCount() == 1);          
  assertTrue(fResult.failureCount() == 0);
  assertTrue(fResult.errorCount() == 0);
  assertTrue(fResult.wasSuccessful());
}
```    

Para ficar bem claro: como JUnit é um framework de teste, os seus
métodos de teste rodam testes implementados em algum outro arquivo 
e verificam se o resultado é aquele esperado. Esses testes são 
interessantes porque neles o JUnit tem um duplo papel: ele é tanto 
o framework de testes como o SUT, isto é, o sistema que está sendo 
testado.

Como mostrado no código acima, `testOneTestCase` executa 
o teste implementado na classe `OneTestCase` (duas primeiras 
linhas). Ao executar o teste, passa-se como parâmetro um 
objeto (`fResult`) que vai armazenar o resultado da execução.
Para ficar mais claro, `fResult` é do tipo `TestResult` e foi 
inicializado no `setUp` do teste.

Por fim, são usados quatro comandos `assert` para assegurar que:

* A suíte de teste que foi executada possui um único caso de 
teste (subclasse de `TestCase`); 

* Dentre os métodos de teste executados, nenhum deles falhou.

* E, também, não ocorreu nenhum erro ou exceção;

* Por fim, o teste como um todo foi bem sucedido.


## Vue.js

[Vue.js](https://vuejs.org/) 
é um framework JavaScript para implementação de
[single-page applications](https://engsoftmoderna.info/cap7.html#exemplo-single-page-applications).
 O sistema permite criar componentes que possuem dados, operações 
 e também uma apresentação em HTML, isto é, a parte visual do componente
 que será vista no browser.

Veja um teste do Vue.js, implementado usando o framework de testes Jest.

```
it('chained usage', () => {
   const vm = new Vue({
   template: '<div>{{ msg | upper | reverse }}</div>',
   data: {
     msg: 'hi'
   },
   filters: {
     upper: v => v.toUpperCase(),
     reverse: v => v.split('').reverse().join('')
   }
   }).$mount()
   expect(vm.$el.textContent).toBe('IH')
}) 
 ```

 Primeiro, instancia-se (`new`) e exibe-se (`mount`) um componente Vue, que 
 possui um `template` HTML, dados (`msg`) e dois filtros. O primeiro filtro
 (`upper`) converte uma string para maiúsculo e o segundo (`reverse`)
 converte uma string para um vetor de caracteres, inverte a ordem deles e 
 concatena de volta os resultados. 

 Esses filtros são usados no template do componente da 
 seguinte forma (a qual lembra *pipes* de linhas de comando do Unix):

 `msg | upper | reverse`

 Como `msg` é a string `hi`, o teste espera (`expect`), na sua última linha,
 que o texto exibido pelo componente seja igual a `IH`.



## PowerToys

PowerToys é um conjunto de utilitários Windows. Por exemplo,
um dos utilitários permite fixar uma janela para que ela
apareça "por cima" de qualquer outra janela do sistema.

O código desses utilitários, implementados em C#, está público em um 
[repositório](https://github.com/microsoft/PowerToys) do GitHub.
E eles possuem um conjunto interessante de **testes end-to-end**
implementados usando dois frameworks: Apium e WinAppDriver.

#### Exemplo 1: FancyZones {.unnumbered}

Primeiro, mostramos um teste do utilitário FancyZones, 
que "é um gerenciador de janelas que facilita a criação de 
layouts de janela complexos e o posicionamento rápido de janelas 
nesses layouts".

```
private void SaveChanges() {
  string isEnabled = _saveButton.GetAttribute("IsEnabled");
  Assert.AreEqual("True", isEnabled);

  _saveButton.Click();

  isEnabled = _saveButton.GetAttribute("IsEnabled");
  Assert.AreEqual("False", isEnabled);
}
```        

Inicialmente, testa-se se o botão "Save" do utilitário está disponível
 (*enabled*). Então, simula-se um click no mesmo. Feito isso, o botão 
não deve estar mais habilitado, pois acabamos de realizar um salvamento 
e, portanto, não faz sentido salvar de novo.

#### Exemplo 2: Menu de Configuração {.unnumbered}

O segundo teste simula a abertura do menu de configuração
do PowerToys, o qual fica na barra de ícones do Windows.
Os comentários presentes no teste já ajudam bastante a
entender o seu funcionamento.

```
[TestMethod]
public void SettingsOpenWithContextMenu() {
  //open tray
  trayButton.Click();
  WaitSeconds(1);
  isTrayOpened = true;

  //open PowerToys context menu
  AppiumWebElement pt = PowerToysTrayButton();
  Assert.IsNotNull(pt);

  new Actions(session).MoveToElement(pt).ContextClick().Perform();

  //open settings
  session.FindElementByXPath("//MenuItem[@Name=\"Settings\"]").Click();

  //check settings window opened
  WindowsElement settingsWindow = 
     session.FindElementByName("PowerToys Settings");
  Assert.IsNotNull(settingsWindow);

  isSettingsOpened = true;
}
```

 
## Exercícios {.unnumbered}

1\. Spring PetClinic: estude e documente o funcionamento do método de teste
[shouldInsertOwner()](https://github.com/mtov/spring-petclinic/blob/main/src/test/java/org/springframework/samples/petclinic/service/ClinicServiceTests.java#L102), também da
classe `ClinicServiceTests`.

2\. JUnit: estude e documente o funcionamento do teste 
[testInheritedTests](https://github.com/mtov/junit4/blob/main/src/test/java/junit/tests/framework/SuiteTest.java#L44),
que testa a execução do seguinte 
[teste](https://github.com/mtov/junit4/blob/main/src/test/java/junit/tests/framework/InheritedTestCase.java).




* * * 


```{=html}
<p>Voltar para a lista de <a href="./artigos.html">artigos</a>.</p>
```
