
# Consistência de Dados em Microsserviços usando-se Sagas

## Introdução

Como discutimos no [Capítulo 7](https://engsoftmoderna.info/cap7.html#microsservi%C3%A7os),
em arquiteturas baseadas em microsserviços, recomenda-se que cada 
microsserviço possua sua própria base de dados. Ou seja, recomenda-se 
uma arquitetura como a seguinte.

![Microsserviços devem ter sua própria base de dados](../figs/cap7/dados2){width=35%}

Por outro lado, ao adotar essa recomendação, frequentemente surge 
o seguinte problema: *como garantir a consistência dos dados do sistema 
quando eles estão distribuídos em vários microsserviços?*

Para ilustrar, vamos usar um exemplo de uma loja virtual. Nessa loja,
para concluir uma venda temos que realizar duas operações:

* `op1`: dar baixa nos itens vendidos (no microsserviço de estoque)
* `op2`: processar o pagamento (no microsserviço de pagamento)

Essas duas operações devem constituir uma **transação**, o que vai 
garantir que elas serão executadas de forma atômica. Mais especificamente, 
atomicidade significa que apenas dois resultados são possíveis: 

* Ou ambas as operações executam com sucesso 
* Ou nenhuma das operações é executada 

Nessa explicação, *executar* significa ter seus efeitos registrados no 
banco de dados. Portanto, o que não pode ocorrer é executar uma operação e 
não executar a outra, pois isso deixaria o sistema em um estado 
inconsistente.

## Garantindo Atomicidade
 
A seguir, vamos discutir as maneiras tradicionais para garantir
atomicidade. Primeiro, em bancos de dados centralizados. Depois,
em bancos de dados distribuídos.

### Bancos de Dados Centralizados {.unnumbered}

Quando um sistema possui uma arquitetura monolítica, normalmente temos 
um único banco de dados. Nesses casos, a própria implementação do banco 
garante a execução atômica de transações, por meio de comandos 
`commit` e `rollback`. 

Podemos então usar um código como o seguinte:

```
try {
    op1();
    op2();
    commit();
} catch (Failure) {
    rollback();
}
```

Se `op1` e `op2` terminarem suas execuções com sucesso, chamamos `commit`
para persistir os resultados no banco de dados.
Por outro lado, se qualquer uma das operações falhar, chamamos `rollback` para
retornar o banco ao seu estado inicial.

### Bancos de Dados Distribuídos {.unnumbered}

Suponha, no entanto, que `op1` executa em um banco de dados e `op2` executa 
em um outro banco de dados, como tipicamente ocorre no caso de arquiteturas 
baseadas em microsserviços. Nesse novo cenário, não existe mais garantia 
automática de atomicidade. 

Uma possível solução requer o uso de um protocolo que garanta atomicidade 
na execução de operações distribuídas. O mais conhecido deles é chamado de 
**Two Phase Commit (2PC)**. Apenas para ficar um pouco mais claro, esse
protocolo normalmente é implementado e disponibilizado pelo próprio 
banco de dados distribuído.

No entanto, os problemas de 2PC são bem conhecidos. Por exemplo,
o protocolo tem um custo e uma latência altos. Isso ocorre porque os processos 
participantes de uma transação distribuída têm que trocar diversas mensagens, 
antes de chegarem a um consenso sobre o seu resultado. E, no limite, pode-se 
chegar a uma situação de impasse. Isto é, a transação pode ficar bloqueada 
por um tempo indeterminado no caso de queda do processo coordenador do protocolo.

Por isso, alguns autores recomendam explicitamente que microsserviços não
devem usar 2PC. Veja, por exemplo, a recomendação de Sam Newman 
([link](https://www.oreilly.com/library/view/building-microservices/9781491950340)):

> Eu recomendo fortemente que você evite o uso de transações distribuídas e
> de 2PC para coordenar mudanças de estado em microsserviços.

Por isso, começou-se a procurar alternativas mais viáveis para consistência 
dos dados de microsserviços. Uma delas é o conceito de sagas, que descreveremos 
a seguir.

## Sagas

**Sagas** é um conceito antigo de bancos  de dados, proposto em 1987 por 
Hector Garcia-Molina e Kenneth Salem. Se quiser, veja 
o [artigo](https://doi.org/10.1145/38713.38742) original, 
que é muito claro e fácil de ler. 

Originalmente, o conceito foi proposto para tratar transações de longa duração. 
No entanto, modernamente, ele está sendo aplicado também no contexto de 
arquiteturas baseadas em microsserviços.

Uma saga é definida por meio de dois conjuntos:

* Um conjunto de transações T1, T2,..., Tn (que devem ser executadas nesta ordem).

* Um conjunto de **compensações** para cada transação, que vamos chamar de C1, C2,..., Cn. 
Ou seja, toda transação tem uma segunda transação que a reverte. Por exemplo, 
uma transação de crédito de *x* reais é compensada por uma transação de 
débito do mesmo valor.

Idealmente, desejamos que todas as transações Ti sejam executadas com sucesso e 
sequencialmente, começando em T1 e terminando em Tn. Esse é o caminho feliz de
uma saga.

Porém, principalmente em ambientes distribuídos (como é o caso de microsserviços), 
pode ser que uma transação intermediária Tj falhe, isto é:

T1 (sucesso), T2 (sucesso),..., Tj (falha)

Quando isso ocorre, temos então que executar as devidas compensações 
para as transações anteriores. Ou seja, continuamos assim:

T1 (sucesso), T2 (sucesso),..., Tj (falha), Cj-1,..., C2, C1.

Estamos assumindo que quando Tj falha ela não registrou seus efeitos no 
banco de dados. Logo, não precisamos chamar Cj, mas apenas as compensações 
de Cj-1 até C1.

Para concluir, vamos mostrar como seria o código para implementar uma
saga formada por três transações:

```
try {
  T1();
  T2();
  T3();
}
catch (FailureT1) {
   // sem compensação
}
catch (FailureT2) {
   C1();
}
catch (FailureT3) {
   C2();
   C1();
}
```

## Exercícios {.unnumbered}

1\. Por que microsserviços não devem compartilhar um único banco de dados?
Para responder, você pode consultar a Seção 7.4.1 do 
[Capítulo 7](https://engsoftmoderna.info/cap7.html#gerenciamento-de-dados)
e também o início da Seção 7.4.

2\. Qual a diferença entre uma transação distribuída e uma saga? Mais especificamente:

   (a) Quando consideradas individualmente, as transações de uma saga são
   atômicas?
   
   (b) Se não houvesse compensações, as transações de uma saga, quando consideradas 
   em conjunto, seriam sempre atômicas?
   
   (c) Suponha uma transação Ti de uma saga. Uma transação T’ que não faz parte 
   da saga pode observar os resultados de Ti antes da execução completa da saga?
   
   (d) Suponha uma transação distribuída T. Uma segunda transação T' pode observar os 
   resultados ainda intermediários de T?
   
   (e) Com sagas, temos que escrever a lógica de rollback, isto é, o código 
   das compensações. O mesmo acontece com transações distribuídas? Sim 
   ou não? Justifique.  

3\. Como um desenvolvedor deve proceder quando uma compensação Ci falhar (isto é, não puder ser executada com sucesso)?

4\. Qual problema de transações de longa duração é resolvido
por meio de sagas? Se necessário, consulte o segundo parágrafo da 
Introdução do [artigo](https://doi.org/10.1145/38713.38742) que definiu o conceito.

* * * 

```{=html}
<p>Voltar para a lista de <a href="./artigos.html">artigos</a>.</p>
```