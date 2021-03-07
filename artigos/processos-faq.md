# Perguntas Frequentes sobre Métodos Ágeis {.unnumbered}

O objetivo deste artigo é responder algumas perguntas frequentes que são 
feitas sobre o [Capítulo 2](https://engsoftmoderna.info/cap2.html) do livro. 

### 1. O que faz um Líder Técnico (Tech Lead) ? {.unnumbered}

Métodos ágeis não fazem distinção entre os desenvolvedores de um time. 
Por exemplo, o Guia do Scrum diz explicitamente que não devem existir sub-times ou 
hierarquias em um time. Porém, na prática, sabemos que os desenvolvedores têm 
níveis de experiência e conhecimento diferentes sobre o sistema que estão 
implementando ou mantendo. Além disso, existem tarefas que exigem maior 
responsabilidade, tais como: 

* Implementar histórias mais complexas ou críticas.
* Definir e evoluir a arquitetura do sistema.
* Treinar e prover mentoria para desenvolvedores júnior.
* Monitorar o montante de débito técnico no sistema.
* Escolher novas tecnologias, como bibliotecas e frameworks.
* Explicar as decisões técnicas adotadas para os níveis superiores 
da empresa (por exemplo, CTO, CEO, etc).
* Ajudar na contratação de novos desenvolvedores.

Então, para assumir essas tarefas de maior responsabilidade, algumas empresas 
têm em seus times a figura de um **Líder Técnico (Tech Lead)**. 
No entanto, como o próprio nome diz, o Líder Técnico não é o chefe do time e, 
portanto, ele não deve ser o controlador de todas as tarefas dos demais 
desenvolvedores.

### 2. O que é o Modelo Spotify? {.unnumbered}

É um modelo proposto pela Spotify para organização de times ágeis, principalmente 
quando uma empresa cresce e passa a ter dezenas ou centenas de times. Quando isso 
aconteceu na Spotify, eles adotaram uma estrutura organizacional em forma de matriz, 
conforme ilustrado a seguir:

![Figura copiada do artigo Scaling Agile @ Spotify
with Tribes, Squads, Chapters & Guilds.
Henrik Kniberg & Anders Ivarsson, 2012.](./figs/modelo-spotify.jpg){width=80%}

Nessa **estrutura matricial** temos:

* **Squads**, que são os times, com todas as características típicas de times
ágeis, isto é, multi-disciplinares, auto-organizáveis e autônomos. 
Tipicamente, um squad tem menos de 10 profissionais, que seguem os eventos
de um determinado método ágil. Por exemplo, eles devem realizar reuniões de 
planejamento, reuniões diárias, retrospectivas e revisões, no caso de Scrum.

* **Tribos**, que são conjuntos de squads que trabalham em sistemas ou sub-sistemas 
semelhantes. Ou seja, as tribos são equivalentes a divisões ou departamentos em uma 
nomenclatura tradicional. Recomenda-se que um tribo tenha no máximo 100 membros. 
Se esse limite começa a ser ultrapassado, deve-se criar mais um nível, constituído 
por **Alianças** ou **Unidades de Negócio**, isto é, conjunto de tribos.

* **Chapters**, que agrupam, de forma horizontal, profissionais que realizam
as mesmas atividades. Por exemplo, podem existir chapters de desenvolvedores 
front-end, de cientistas de dados, de especialistas em UI/UX, etc. Esses profissionais 
no dia-a-dia estão espalhados pelos squads. Porém, com uma frequência bem
definida e planejada, eles se reunem para trocar ideias, definir práticas 
comuns, etc. Normalmente, como mostrado na figura acima, os chapters congregam 
profissionais de uma mesma tribo. Eles costumam possuir também um líder
formal.

* **Guildas**, que são comunidades informais e, às vezes, temporárias. Isto é,
são grupos de funcionários que se reunem, voluntariamente, para compartilhar 
interesses comuns, como uma tecnologia, processo, etc. Os participantes
de uma guilda não precisam pertencer à mesma tribo.

Antes de concluir, é importante lembrar que o Modelo Spotify foi proposto em
2012. Desde lá, a sua adoção, mesmo na Spotify, já passou por evoluções e
adaptações importantes.


* * * 

Voltar para a lista de [artigos](./artigos.html).
