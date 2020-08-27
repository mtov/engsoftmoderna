
# Teoria das Janelas Quebradas & Regra dos Escoteiros {.unnumbered}

Neste artigo, vamos apresentar uma teoria e uma regra, propostas
originalmente para outras áreas, mas que
aplicam-se a desenvolvimento de software. São
elas:

* Teoria das Janelas Quebradas
* Regra dos Escoteiros

Além de apresentar ambos os conceitos, vamos mostrar 
que existe uma conexão entre eles.

## Teoria das Janelas Quebradas {.unnumbered}

A Teoria das Janelas Quebradas é famosa entre criminologistas, 
policiais e autoridades da área de segurança. Proposta em 1982 
por dois criminologistas -- James Wilson e George Kelling --, 
ela defende o seguinte:

> Se uma das janelas de uma casa for quebrada e não for consertada, 
as pessoas que passam na rua podem achar que a casa está abandonada 
e que ninguém se importa com ela. Então, alguém pode decidir jogar 
uma pedra e quebrar mais alguns vidros... Depois de um tempo,
muitas janelas podem estar quebradas, o telhado pode também 
começar a ter problemas e uma sensação de abandono vai tomar conta da casa 
e até mesmo de sua vizinhança.

![](./figs/broken-windows.jpg)

A mensagem que a teoria tenta passar é que devemos ter "tolerância zero" 
com problemas aparentemente pequenos. Caso contrário, eles podem 
se acumular, criando uma espiral de abandono e descontrole.

Apesar de mais discutida entre psicólogos sociais, a Teoria
das Janelas Quebradas aplica-se também a sistemas de software. Um dos
primeiros livros a fazer essa conexão foi "O Programador Pragmático",
de Andrew Hunt e David Thomas. Veja o que os autores dizem:

> Não deixe "janelas quebradas" (projetos ruins, decisões erradas ou código ruim) 
sem reparos. Conserte cada um desses problemas assim que ele for descoberto. 
Nós já vimos sistemas bem projetados e funcionais se deteriorarem rapidamente 
quando as janelas começam a quebrar. Existem diversos fatores que podem 
contribuir para a deterioração de um sistema de software, mas a 
negligência acelera esse processo mais rapidamente do que 
qualquer outro fator.

A seguir, listamos mais alguns exemplos de "janelas quebradas" 
que não devem ser toleradas quando almeja-se produzir software 
com qualidade:

* código com bugs conhecidos e graves, mas que mesmo assim entram em 
produção.
* código que não segue convenções de indentação e regras de nomes 
para identificadores.
* código que não possui testes.
* código que viola a arquitetura planejada do sistema; por exemplo, 
que faz chamadas SQL fora do módulo de persistência.
* código com *code smells*, tais como métodos longos, uso injustificado 
de variáveis globais, código duplicado, etc.
* código com problemas relevantes de desempenho.
* código com vulnerabilidades graves de segurança.
* etc

## Regra dos Escoteiros {.unnumbered}

A Regra do Escoteiro foi descrita por Robert Martin no seu livro "Código Limpo". 
Segundo ele, os escoteiros norte-americanos têm uma regra simples que pode 
ser adaptada para o contexto de desenvolvimento de software. A regra é a seguinte:

> Deixe o acampamento mais limpo do que você o encontrou.

Ou seja, se você está corrigindo um bug em um sistema 
ou implementando uma nova funcionalidade e se depara com uma "janela quebrada" -- 
isto é, com algum código de má qualidade -- você não deve simplesmente fechar os 
olhos. Em vez disso, procure refatorar esse código, para entregá-lo mais "limpo" 
do que o encontrou. Você deve fazer isso mesmo que não seja o autor 
do código com problema.

A Regra do Escoteiro relaciona-se com o conceito de **refactorings oportunistas** que
estudamos no <a href="https://engsoftmoderna.info/cap9.html">Capítulo 9</a> do livro. 
A ideia é que refactorings devem ser uma atividade contínua, 
realizada "no meio" de atividades de correção de bugs e de implementação de 
novas funcionalidades. 

De fato, em um trabalho que publicamos em 2016 sobre motivações para refactorings 
(<a href="https://arxiv.org/abs/1607.02459">link</a>), diversos desenvolvedores 
nos reportaram que têm a preocupação de deixar o código mais limpo, 
após uma tarefa de manutenção. Eles não mencionaram explicitamente a Regra
dos Escoteiros, mas suas respostas estão perfeitamente alinhadas com o
propósito da regra. Veja exemplos de respostas:

> Quando eu estava corrigindo uma exceção, eu percebi que deveria adicionar o mesmo código
em dois lugares. Em vez de fazer isso, eu extraí esse código para um método e
apliquei a correção apenas nele.

> O método [em que eu estava trabalhando] era muito grande e não cabia 
na minha tela. Então eu extraí uma parte dele.

> Esses refactorings foram aplicados para reusar código. Eu sempre tento
fazer isso, porque quando existe muita redundância torna-se
terrivelmente mais complicado manter o código no futuro.

## Exercícios {.unnumbered}

1. Qual o nome do refactoring aplicado nas duas primeiras respostas de 
desenvolvedores mencionadas na seção sobre a Regra dos Escoteiros.



* * * 

Voltar para a lista de [artigos](./artigos.html).
