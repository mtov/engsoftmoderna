# Alguns Exemplos Reais e Interessantes de Testes {.unnumbered}

### Este artigo está em andamento; em breve, iremos adicionar mais exemplos, de outros sistemas {.unnumbered}

## Introdução  {.unnumbered}

No [Capítulo 8](https://engsoftmoderna.info/cap8.html), 
explicamos os principais conceitos de testes de software 
e mostramos pelo menos uma dezena de exemplos de código.

Neste artigo, vamos ampliar essa lista de exemplos, **mostrando 
e explicando exemplos reais de testes implementados em 
sistemas de código aberto de sucesso**. Achamos isso relevante, 
pois conhecer, ler e entender esses exemplos pode ajudar 
o leitor na escrita de seus próprios testes.

Vamos começar estudando os testes do JUnit. Ou seja, o JUnit
possui alguns testes, que, evidentemente, são executados pelo
próprio JUnit. Portanto, nada melhor do que começar estudando
esses testes, cujas primeiras versões foram implementadas 
por Kent Beck e Erich Gamma, criadores do JUnit e, em grande 
medida, criadores também do próprio conceito de testes de 
unidade automatizados. 

## JUnit {.unnumbered}

Os testes do JUnit -- versão 4 -- ficam em um diretório chamado
[test](https://github.com/mtov/junit4/tree/main/src), que fica
"ao lado" do diretório principal (*main*) com o código do sistema.

Alguns testes interessantes estão implementados em 
[SuiteTest.java](https://github.com/mtov/junit4/blob/main/src/test/java/junit/tests/framework/SuiteTest.java). 
Para ter uma ideia, a primeira versão dessa classe foi
implementada por Erich Gamma, em dezembro de 2000 (confira o 
[commit](https://github.com/mtov/junit4/commit/b6a0693454ac8ded32b3a1ea7c859c5a840169dc)). 

Os testes implementados nessa classe funcionam conforme descrito a seguir.

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
teste, cujo corpo é vazio. Essa propriedade de `OneTestCase` é testada 
pelo seguinte método de `SuiteTest`:

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
métodos de teste chamam testes implementados em algum outro arquivo 
e verificam se o resultado é aquele esperado. Esses testes são 
interessantes porque neles o JUnit tem um duplo papel: ele é tanto 
o framework de testes como o SUT, isto é, o sistema que está sendo testado.

Especificamente, como mostrado no código acima, `testOneTestCase` executa 
o teste implementado na classe `OneTestCase` (duas primeiras 
linhas). Ao executar o teste, passa-se como parâmetro um 
objeto (`fResult`) que vai armazenar o resultado da execução.
Para ficar mais claro, `fResult` é do tipo `TestResult` e foi 
inicializado no `setUp` do teste.

Por fim, são usados quatro comandos `assert` para assegurar que:

* A suíte de teste que foi executada possui um único caso de teste (subclasse de `TestCase`); 
* Dentre os métodos de teste executados, nenhum deles falhou.
* E, também, não ocorreu nenhum erro ou exceção;
* Por fim, o teste como um todo foi bem sucedido.

**Exercício:** Estude o funcionamento do teste 
[testInheritedTests](https://github.com/mtov/junit4/blob/main/src/test/java/junit/tests/framework/SuiteTest.java#L44),
que testa a execução do seguinte 
[teste](https://github.com/mtov/junit4/blob/main/src/test/java/junit/tests/framework/InheritedTestCase.java).

## Sprint PetClinic {.unnumbered}

[Spring PetClinic](https://github.com/spring-projects/spring-petclinic) 
é uma aplicação de demonstração do 
[Spring](https://spring.io/projects/spring-framework), 
um conhecido framework para desenvolvimento Web para Java. A PetClinic
implementa um sistema simples para controle de uma clínica veterinária.
Por exemplo, o sistema armazena informações sobre os animais internados
na clínica e seus respectivos donos.

O sistema tem alguns **testes de integração** interessantes, que se beneficiam
de funcionalidades oferecidas de forma "transparente" pelo Spring.

Por exemplo, a classe 
[ClinicServiceTests](https://github.com/mtov/spring-petclinic/blob/main/src/test/java/org/springframework/samples/petclinic/service/ClinicServiceTests.java) 
testa o serviço de atualização do nome do dono de um animal:

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
  @Autowired
  protected OwnerRepository owners;
  ...
}
```

Para saber mais sobre injeção de dependência, você pode
consultar esse [artigo](https://engsoftmoderna.info/artigos/injecao-dependencia.html) 
do nosso site.

* O teste é também anotado com uma anotação do Spring chamada `@Transactional`, 
que garante uma semântica de transações na sua execução. No caso
de testes de integração, essa anotação está configurada para
realizar automaticamente um rollback ao final de cada transação.
Veja o que diz um comentário na própria classe de teste:
*each test method is executed in its own transaction, which is 
automatically rolled back by default. Thus, even if tests
insert or otherwise change database state, there is no need 
for a teardown or cleanup script.*

**Exercício**: Estude o funcionamento do método de teste
[shouldInsertOwner()](https://github.com/mtov/spring-petclinic/blob/main/src/test/java/org/springframework/samples/petclinic/service/ClinicServiceTests.java#L102), também da
classe `ClinicServiceTests`.

## Como Contribuir {.unnumbered}

Estamos interessados em ampliar a nossa lista de exemplos de testes 
de software. Se você quiser então sugerir algum exemplo, favor
preencher o seguinte [formulário](https://forms.gle/KbzvMx5RLnqPR7uq7). 
E informe o sistema de código aberto do teste, classe e nome do método
de teste, URLs, se possível uma breve descrição, etc.


* * * 

Voltar para a lista de [artigos](./artigos.html).
