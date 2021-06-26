# Perguntas Frequentes sobre Projeto de Software {.unnumbered}

O objetivo deste artigo é responder perguntas 
sobre temas relacionados com projeto de software e que não são
abordados nos capítulos [5](https://engsoftmoderna.info/cap5.html) e [6](https://engsoftmoderna.info/cap6.html) do livro. 

### 1. Qual a diferença entre os padrões de projeto Proxy e Adaptador? {.unnumbered}

Suponha um objeto que tenha uma interface `I`, com métodos `f1`, `f2`, `f3` e `f4`.

* Um **proxy** implementa a interface`I`, isto é, implementa `f1`, `f2`, `f3` e `f4`.

* Já um **adaptador** implementa uma outra interface, digamos que `I'` e fica responsável por adaptá-la para a interface `I`. Para melhor ilustrar, lembre-se do adaptador de tomadas do padrão novo para o antigo ou vice-versa.

Quando eu uso caso um desses padrões?

* Proxy: para implementar requisitos não-funcionais, tais como segurança, persistência, distribuição, etc.

* Adaptador: para "compatibilizar" interfaces diferentes.

* * * 

Voltar para a lista de [artigos](./artigos.html).
