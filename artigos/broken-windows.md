
# Teoria das Janelas Quebradas & Regra do Escoteiros {.unnumbered}

Neste artigo, vamos apresentar uma teoria e uma regra, propostas
originalmente para outras áreas e contextos, mas que
aplicam-se diretamente a desenvolvimento de software. São
elas:

* Teoria das Janelas Quebradas
* Regra dos Escoteiros

Além de apresentar ambos conceitos, vamos tentar mostrar 
que existe uma conexão entre eles.

## Teoria das Janelas Quebradas {.unnumbered}

A Teoria das Janelas Quebradas é famosa entre criminologistas, 
policiais e autoridades da área de segurança. Proposta em 1982 
por dois criminologistas -- James Wilson e George Kelling --, 
ela defende resumidamente o seguinte:

> Se uma das janelas de uma casa for quebrada e não for consertada, 
as pessoas que passam na rua podem achar que a casa está abandonada 
e que ninguém se importa com ela. Então, alguém pode decidir jogar 
uma pedra e quebrar mais alguns vidros ... Depois de um tempo,
muitas janelas podem estar quebradas e uma sensação de abandono 
vai tomar conta da casa e até mesmo de sua vizinhança.

![](./figs/broken-windows.jpg)

A mensagem que a teoria tenta passar é que devemos ter "tolerância zero" 
com problemas aparentemente pequenos. Caso contrário, eles podem se acumular, 
criando uma espiral crescente de abandono e de total descontrole.

Apesar de mais ser discutida no meio de psicólogos sociais, a Teoria
das Janelas Quebradas aplica-se também a sistemas de software. Um dos
primeiros livros a fazer essa conexão foi "O Programador Pragmático",
de Andrew Hunt e David Thomas. Veja o que os autores dizem:

> Não deixe "janelas quebradas" (projetos ruins, decisões erradas ou código ruim) 
sem reparos. Conserte cada um desses problemas assim que ele for descoberto. 
... Já vimos sistemas bem projetados e funcionais se deteriorarem rapidamente 
quando as janelas começam a quebrar. Existem diversos fatores que podem 
contribuir para a deterioração de um sistema de software, mas a 
negligência acelera esse processo mais rápido do que qualquer outro fator.

Para finalizar, vamos citar mais alguns exemplos de "janelas quebradas" que não
devem ser toleradas quando almeja-se produzir um código com qualidade:

* código com bugs conhecidos e graves.
* código que não segue convenções de indentação e regras de nomes para identificadores.
* código que não possui testes.
* código que viola a arquitetura planejada do sistema; por exemplo, que usa chamadas SQL fora do módulo de persistência.
* código com "bad smells", tais como métodos muito longos, uso injustificado de variáveis globais, código duplicado, etc.
* código com problemas de desempenho.
* código com vulnerabilidades de segurança.
* etc

## Regra do Escoteiro {.unnumbered}

A Regra do Escoteiro foi descrita por Robert Martin no seu livro "Código Limpo". 
Segundo ele, os os escoteiros norte-americanos têm uma regra simples que pode 
ser adaptada para o contexto de desenvolvimento de software. A regra é a seguinte:

> Deixe o acampamento mais limpo do que você o encontrou

Fazendo a conexão com a teoria anterior, se você está corrigindo um bug em um sistema 
ou implementando uma nova funcionalidade e se depara com uma "janela quebrada" -- 
isto é, com algum código de má qualidade -- você não deve fechar os olhos. Em vez disso, 
você deve procurar refatorar esse código, para entregá-lo mais "limpo" do que o encontrou.
Você deve fazer isso mesmo que você não seja o autor do código com problema.

A Regra do Escoteiro relaciona-se com o contexto de refactorings oportunistas que
estudamos no <a href="https://engsoftmoderna.info/cap9.html">Capítulo 9</a> do livro. A ideia é que refactoring deve ser uma atividade
contínua, realizada "no meio" de atividades de correção de bugs e de implementação
de novas funcionalidades. 

* * * 

Voltar para a lista de [artigos](./artigos.html).
