# Alguns Exemplos Reais e Interessantes de Testes {.unnumbered}

## Introdução  {.unnumbered}

No [Capítulo 8](https://engsoftmoderna.info/cap8.html), 
explicamos os principais conceitos de testes de software 
e mostramos pelo menos uma dezena de exemplos de código.

Neste artigo, vamos **ampliar essa lista de exemplos, mostrando 
e explicando exemplos reais de testes implementados em 
sistemas de código aberto de sucesso**. Achamos isso relevante, 
pois conhecer, ler e entender esses exemplos pode ajudar 
na escrita de seus próprios testes depois.

Vamos começar estudando os testes do JUnit. 
Ou seja, nada melhor do que começar conhecendo os testes do framework 
pioneiro de testes automatizados. As primeiras versões desses testes
foram implementadas por Kent Beck e Erich Gamma, criadores
do JUnit e, em grande medida, da própria ideia de testes 
automatizados.

## JUnit {.unnumbered}

Os testes do JUnit -- versão 4 -- ficam em um diretório chamado
[test](https://github.com/mtov/junit4/tree/main/src), que fica
"do lado" do diretório principal (*main*) com o código do sistema.

Alguns testes interessantes estão implementados em 
[SuiteTest.java](https://github.com/mtov/junit4/blob/main/src/test/java/junit/tests/framework/SuiteTest.java). Para ter uma ideia, a primeira versão de tais testes foi
implementada por Erich Gamma, em dezembro de 2000 (confira o 
[commit](https://github.com/mtov/junit4/commit/b6a0693454ac8ded32b3a1ea7c859c5a840169dc)). 

Os testes implementados nessa classe funcionam conforme descrito a seguir.

Primeiro, no mesmo diretório de `SuiteTest.java`, existem arquivos que implementam alguns
casos de teste. Vamos mostrar um deles (os comentários foram acrescentados por nós mesmos):

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

Logo, `OneTestCase` é um caso de teste que possui apenas um método de teste. 
Essa propriedade de `OneTestCase` é testada pelo seguinte método de 
`SuiteTest`:

```
public void testOneTestCase() {
  TestSuite t = new TestSuite(OneTestCase.class);
  t.run(fResult);
  assertTrue(fResult.runCount() == 1);
  assertTrue(fResult.failureCount() == 0);
  assertTrue(fResult.errorCount() == 0);
  assertTrue(fResult.wasSuccessful());
}
```    

Para ficar bem claro: como JUnit é um framework de teste, os seus
métodos de teste chamam testes implementados em algum outro arquivo 
e verificam se o resultado é aquele esperado. Essencialmente, então,
`testOneTestCase` é um meta-teste, isto é, um teste de um outro teste!

Especificamente, como mostrado no código acima, `testOneTestCase` executa 
o teste implementado na classe `OneTestCase` (duas primeiras 
linhas). Ao executar o teste, passa-se como parâmetro um 
objeto (`fResult`) que vai armazenar o resultado da execução.
Para ficar mais claro, `fResult` é do tipo `TestResult` e foi 
inicializado no `setUp` do teste.

Por fim, são executados quatro `assert` para assegurar que:

* `OneTestCase` possui um único um método de teste; 
* nenhum método de teste falhou, isto é, todos os `assert` foram 
confirmados;
* e, também, não ocorreu nenhum erro ou exceção;
* por fim, o teste como um todo foi bem sucedido.

**Exercício:** Estude o funcionamento do teste 
[testInheritedTests](https://github.com/mtov/junit4/blob/main/src/test/java/junit/tests/framework/SuiteTest.java#L44),
o qual testa a execução do seguinte 
[teste](https://github.com/mtov/junit4/blob/main/src/test/java/junit/tests/framework/InheritedTestCase.java).


