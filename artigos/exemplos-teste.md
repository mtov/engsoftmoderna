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
  assertTrue(fResult.runCount() == 1);          // asserts
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


