
# Consistência de Dados em Microsserviços usando-se Sagas {.unnumbered}

## Introdução {.unnumbered}

Conforme discutido no [Capítulo 7](https://engsoftmoderna.info/cap7.html),
em arquiteturas baseadas em microsserviços, recomenda-se que cada 
microsserviço possua sua própria base de dados. Ou seja, recomenda-se 
uma configuração como a seguinte.

![microsserviços devem ter sua própria base de dados](../figs/cap7/dados2.svg){width=35%}

Por outro lado, ao adotar tal recomendação, frequentemente surge um 
problema: *como garantir a consistência de dados quando eles estão 
distribuídos em vários pontos da rede?*

Para ficar mais claro, vamos usar um exemplo de uma loja virtual. 
Para concluir uma venda temos que realizar duas operações:

* `op1`: dar baixa nos itens vendidos (no microsserviço de estoque)
* `op2`: processar pagamento (no microsserviço de pagamento)

Essas duas operações devem constituir uma uma *transação*, o que vai 
garantir que elas serão executadas de forma atômica. Mais especificamente, 
atomicidade significa que apenas dois resultados são possíveis: 

* Ou ambas as operações executam com sucesso 
* Ou nenhuma das operações é executada 

Nesta explicação, "executar" significa ter seus efeitos
registrados no banco de dados. Logo, o que não pode ocorrer
é executar uma operação e não executar a outra, pois isso
deixaria o sistema em um estado inconsistente.

## Garantindo Atomicidade {.unnumbered}
 
A seguir, vamos discutir as maneiras tradicionais de garantir
atomicidade. Primeiro, em bancos de dados centralizados. A
seguir, em bancos de dados distribuídos.

### Bancos de Dados Centralizados {.unnumbered}

Quando a arquitetura é monolítica, normalmente temos um único
bancos de dados. Então, a própria implementação do banco 
garante a execução atômica de transações, por meio de comandos 
`commit` e `rollback`. 

Ou seja, podemos usar um código como o seguinte:

```
try {
    op1();
    op2();
    commit();
} catch (Failure) {
    rollback();
}
```

### Bancos de Dados Distribuídos {.unnumbered}

Porém, quando `op1` executa em um banco de dados e `op2` executa em um outro banco
de dados -- como ocorre no nossos exemplo -- não temos mais garantia automática
de atomicidade. 

Por isso, existem protocolos que devem ser implementados por bancos de dados distribuídos 
para garantir atomicidade na execução de operações. O mais famoso deles é 
chamado de **Two Phase Commit (2PC)**.

No entanto, os problemas do protocolo 2PC são também bastante conhecidos. Por exemplo,
ele têm um custo e uma latência altos. E, no limite, pode-se chegar a uma 
situação de impasse. Isto é, a transação pode ficar bloqueada por tempo indeterminado
no caso de queda do nodo coordenador do protocolo.

Por isso, alguns autores recomendam explicitamente que 2PC **não** devem ser usados
como microsserviços. Veja, por exemplo, a recomendação de Sam Newman:

> Eu recomendo fortemente que você evite o uso de transações distribuídas e
> de 2PC para coordenar mudanças de estado em microsserviços.


## Sagas {.unnumbered}

Com a popularidade recente de microsserviços, começou-se a procurar alternativas 
mais viáveis para  consistência de dados do sistema e que fossem baseadas
em transações distribuídas e 2PC.

Uma dessas alternativas é o conceito de **Sagas**, que, na realidade, é um conceito 
antigo de bancos  de dados, proposto em 1987 por Hector Garcia-Molina e Kenneth
Salem. Se quiser, veja o [artigo](https://doi.org/10.1145/38713.38742) original, 
que é muito claro e fácil de ler. 

O conceito de sagas foi proposto originalmente para tratar transações de longa duração. 
No entanto, o conceito está sendo aplicado também no contexto de arquiteturas 
baseadas em microsserviços.

Uma saga é definida por meio de dois conjuntos:

* Um conjunto de transações T1, T2, ..., Tn (que devem ser executadas nesta ordem).

* Um conjunto de **compensações** para cada transação, que vamos chamar de C1, C2, …, Cn. 
Ou seja, toda transação tem uma segunda transação que a reverte. Por exemplo, 
uma transação de crédito de x reais é "compensada" por uma transação de débito do mesmo valor.

Idealmente, desejamos que todas a transações Ti sejam executadas com sucesso e 
sequencialmente, começando em T1 e terminando em Tn.

Porém, principalmente em um ambiente distribuído (como é o caso de microsserviços), 
pode ser que uma transação intermediária Tj falhe, isto é:

T1 (sucesso), T2 (sucesso), ..., Tj (falha)

Quando isso ocorre, temos então que executar as devidas compensações 
para as transações anteriores, isto é, continuamos assim:

T1 (sucesso), T2 (sucesso), ..., Tj (falha), C1, C2, Cj-1.

Veja que estamos assumindo que quando Tj falha ela não registrou
seus efeitos no banco de dados. Logo, não precisamos chamar
Cj. Ou seja, só precisamos chamar as compensações até Cj-1.

Para concluir, vamos mostrar como seria o código para implementar uma
saga composta por três transações:

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
   C1();
   C2();
}
```

## Exercícios {.unnumbered}

1. Por que recomenda-se que microsserviços não compartilhem um banco de dados único?
Para responder, leia a Seção 7.4.1 do [Capítulo 7](https://engsoftmoderna.info/cap7.html). 
Se quiser, você pode ler também o início da Seção 7.4.

2. Qual diferença entre uma transação distribuída e uma saga? Mais especificamente:

* Quando consideradas individualmente, as operações T1, T2,..., Tn de uma saga podem ser
  atômicas?
* Quando consideradas em conjunto, as operações T1, T2,..., Tn de uma saga são 
  atômicas?
* Suponha uma transação Ti de uma saga. Uma outra transação T', que não
faz parte da saga, pode observar os resultados de Ti? 
* Suponha uma transação distribuída T. Uma outra transação T' pode observar os 
resultados intermediários de T?

3. Como deve-se proceder quando uma compensação Ci de uma saga não puder ser executada 
com sucesso?

4. Qual problema de transações de longa duração (*long lived transactions*) é resolvido
por meio de sagas? Se necessário, para responder leia o segundo parágrafo da seção de
Introdução do [artigo](https://doi.org/10.1145/38713.38742) que introduziu o conceito de sagas.

* * * 

Voltar para a lista de [artigos](./artigos.html).
