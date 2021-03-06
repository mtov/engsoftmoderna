# Perguntas Frequentes sobre Métodos Ágeis {.unnumbered}

O objetivo deste artigo é responder algumas perguntas frequentes que são 
feitas sobre o [Capítulo 2](https://engsoftmoderna.info/cap2.html) do livro. 

### O que é um Líder Técnico (Tech Lead) ? {.unnumbered}

Os métodos ágeis não fazem distinção entre os desenvolvedores 
de um time. Por exemplo, o Guia do Scrum diz explicitamente que não devem existir sub-times ou 
hierarquias em um time. Porém, na prática, sabemos que os desenvolvedores têm 
níveis de experiência e conhecimento diferentes sobre o sistema que estão 
implementando ou mantendo. Além disso, sempre existem tarefas que exigem maior 
responsabilidade, tais como: 

* Implementar histórias mais complexas ou críticas
* Definir e evoluir a arquitetura do sistema
* Treinar e prover mentoria para desenvolvedores júnior
* Monitorar o montante de débito técnico no sistema
* Escolher novas tecnologias, incluindo bibliotecas, frameworks, linguagens 
de programação, etc
* Explicar as decisões técnicas adotadas pelo time para os níveis superiores 
da empresa (por exemplo, CTO, CEO, etc)
* Ajudar na contratação de novos desenvolvedores


Então, para assumir essas tarefas de maior responsabilidade, algumas empresas 
têm em seus times de desenvolvimento a figura de um **Líder Técnico (Tech Lead)**. 
No entanto, como o próprio nome diz, o Líder Técnico não é o chefe do time e, 
portanto, ele não deve ser o controlador de todas as tarefas do time.

### O que é o Modelo Spotify? {.unnumbered}

Trata-se de um modelo proposto pela Spotify para organização de times ágeis em
uma empresa, principalmente quando ela cresce e passa a ter dezenas ou mesmo 
centenas de times. Quando isso começou a aconteceer na Spotify, eles adotaram
uma estrutura organizacional em forma de matriz, conforme ilustrado na seguinte
figura:

![Figura copiada do artigo Scaling Agile @ Spotify
with Tribes, Squads, Chapters & Guilds.
Henrik Kniberg & Anders Ivarsson, 2012](./figs/modelo-spotify.jpg){width=80%}


Nesta estutura matricial temos:

* **Squads**: que são os times, com todas as características típicas de times
ágeis, isto é: multi-disciplinares, auto-organizáveis, autônomos, etc. 

* **Tribos**: são conjuntos de squads que trabalham em sistemas ou sub-sistemas semelhantes.
Ou seja, são equivalentes a divisões ou departamentos em uma nomenclatura tradicional.
Recomenda-se que um tribo tenha no máximo 100 pessoas.

* **Chapters**: agrupam, de forma horizontal, profissionais que realizam
as mesmas atividades. Por exemplo, podem existir chapters de desenvolvedores 
front-end, de cientistas de dados, de especialistas em UI/UX. Esses profissionais 
no dia-a-dia estão espalhados pelos squads. Porém, com uma frequência bem
definida e planejada, eles se reunuem para trocar ideias, definir práticas 
comuns, etc. Normalmente, como mostrado na figura acima, os chapters congregam 
profissionais de uma mesma tribo.

* **Guildas**: são chapters informais e, às vezes, temporários. Isto é,
são grupos de pessoas que compartilham interesses comuns, como em uma tecnologia, 
processo, etc. Eles não precisam pertencer à mesma tribo.

* * * 

Voltar para a lista de [artigos](./artigos.html).
