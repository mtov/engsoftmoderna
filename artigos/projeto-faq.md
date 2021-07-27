# Perguntas Frequentes sobre Projeto de Software {.unnumbered}

Neste artigo, respondemos perguntas sobre temas relacionados com projeto 
de software e que não são abordados nos capítulos 
[5](https://engsoftmoderna.info/cap5.html) e 
[6](https://engsoftmoderna.info/cap6.html) do livro. 

### 1. Qual a diferença entre os padrões de projeto Proxy e Adaptador? {.unnumbered}

Suponha um objeto que tenha uma interface `I`. 

* Um **proxy** implementa a interface`I`, isto é, implementa todos os seus métodos.

* Já um **adaptador** implementa uma outra interface, digamos que `I'` e 
fica responsável por adaptá-la para a interface `I`. Para ilustrar, 
lembre-se de um adaptador de tomadas do padrão novo para o antigo 
ou vice-versa.

Quando eu devo usar cada um desses padrões?

* Proxy: para implementar requisitos não-funcionais, tais como segurança, 
persistência, distribuição, etc.

* Adaptador: para compatibilizar interfaces diferentes.

### 2. O que significa DRY (Don't Repeat Yourself)? {.unnumbered}

Este princípio de projeto foi enunciado pela primeira vez no 
livro *The Pragmatic Programmer*, de David Thomas e Andrew Hunt, 
de 1999. Ele recomenda o seguinte: 

> Qualquer tipo de conhecimento deve ter uma representação única, 
inequívoca e oficial em um sistema.

A forma mais fácil de entender DRY é pensando em termos
de código. Por exemplo, em um sistema nunca devemos ter duas funções
X e Y duplicadas, isto é, com exatamente o mesmo propósito. Isso é 
ruim por dois motivos principais: 

* Suponha que X tenha sido implementada primeiro; logo, o esforço para 
implementar Y foi desnecessário, pois já existia uma função idêntica 
no sistema. 

* Suponha que temos que realizar uma manutenção em X; logo, teremos 
que repetir esse esforço em Y. 

Porém, DRY não vale apenas para código, mas para qualquer conhecimento.
Por exemplo, às vezes temos um comentário (ou outra forma documentação)
que apenas repete o que está no código. Nesse caso, talvez a refatoração
do código, com nomes e intenções mais claras, pode torná-lo auto-explicativo. 
Se isso acontecer, podemos remover o comentário.

Na verdade, na escrita do nosso livro procuramos praticar esse 
princípio. O livro tem três versões (HTML, e-book e PDF). Todas elas, 
no entanto, são geradas a partir de um mesmo arquivo fonte, escrito 
em Markdown. Se não fosse assim, qualquer pequena correção de português 
teria que ser repetida nos três formatos do livro.

Existem outros nomes para DRY. Por exemplo, no livro *The Art of Unix 
Programming*, Eric Raymond usa o termo SPOT (*Single Point of Truth*).

* * * 

Voltar para a lista de [artigos](./artigos.html).
