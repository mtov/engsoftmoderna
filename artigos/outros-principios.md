# Mais Alguns Princípios de Projeto: CQS, DRY, YAGNI e KISS {.unnumbered}

Neste artigo, vamos complementar os princípios de projeto, estudados 
no [Capítulo 5](../cap5.html), com quatro novos princípios:

* [CQS](#cqs-command-query-separation): Command-Query Separation
* [DRY](#dry-dont-repeat-yourself): Don't Repeat Yourself
* [YAGNI](#yagni-you-arent-gonna-need-it): You Aren't Gonna Need It
* [KISS](#kiss-keep-it-simple-stupid): Keep It Simple, Stupid 

Para finalizar, vamos falar sobre 
[ortogonalidade](#ortogonalidade), 
que é uma propriedade importante em projetos de projeto

## CQS: Command-Query Separation {.unnumbered}

Este princípio foi proposto por Bertrand Meyer, o mesmo autor do
princípio Aberto/Fechado (Open/Closed), que dá origem à letra "O"
dos princípios SOLID.

O Princípio da Separação entre Comandos e Queries (ou então  
*Command-Query Separation*, CQS) advoga que devem existir duas 
categorias de métodos em uma classe:

* Comandos, que são métodos que não retornam valor (isto é,
retornam `void`), mas que possuem efeito colateral. Ou seja, 
eles *alteram* o estado do sistema. Por exemplo, eles gravam 
alguma informação no banco de dados, alteram um atributo da 
classe ou uma variável global, etc.

* Queries, que são métodos que apenas retornam valores, sem 
mudar o estado do sistema.

Então, o princípio recomenda que um método: (1) ou deve
ser um comando; (2) ou deve ser uma query. O que não é 
recomendável é que um método desempenhe ambos os papéis.

Ou seja, para ficar ainda mais claro: (1) um comando não
deve retornar valores; (2) uma query não deve ter efeitos
colaterais.

Bertrand Meyer justifica assim o seu princípio:

> O ato de fazer uma pergunta não deve mudar a sua resposta.

Nessa frase, "fazer uma pergunta" significa chamar uma
query. Isso não deve influenciar a resposta dessa query 
(caso a gente faça a pergunta de novo, por exemplo) ou 
a resposta de uma outra query (que, por exemplo, a gente 
faça logo a seguir).

O objetivo do princípio é fomentar uma divisão clara entre 
essas duas categorias de métodos, pois é mais seguro e 
simples você chamar uma query do que chamar um comando. Por 
exemplo, ao chamar uma query temos certeza de 
que não vamos alterar nada no sistema. O mesmo, no entanto, 
não acontece com comandos.

Em outras palavras, e tentando dar uma interpretação mais
ampla para o princípio, ao projetar um sistema devemos
nos esforçar para separar a parte imperativa (comandos) 
da parte funcional (queries). E, melhor ainda, devemos 
procurar maximizar a parte funcional e minimizar o número de
comandos. Isso é importante porque queries (funções) são 
mais fáceis de entender, de chamar e de testar.

## DRY: Don't Repeat Yourself {.unnumbered}

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
Por exemplo, às vezes temos um comentário (ou outra forma de documentação)
que apenas repete o que está no código. Nesse caso, talvez a refatoração
do código, com nomes e intenções mais claras, pode torná-lo auto-explicativo. 
Se isso acontecer, podemos remover o comentário.

Na verdade, na escrita do nosso livro procuramos praticar esse 
princípio. O livro tem três versões (HTML, e-book e PDF). Todas elas, 
no entanto, são geradas a partir de um mesmo arquivo fonte escrito 
em Markdown. Se não fosse assim, qualquer pequena correção de português 
teria que ser repetida nos três formatos do livro.

Existem outros nomes para DRY. Por exemplo, no livro *The Art of Unix 
Programming*, Eric Raymond usa o termo SPOT (*Single Point of Truth*).

## YAGNI: You Aren't Gonna Need It {.unnumbered}

Este princípio é muito comentado entre adotantes de Extreme
Programming (XP). Na verdade, já falamos rapidamente sobre
ele no [Capítulo 2](https://engsoftmoderna.info/cap2.html#pr%C3%A1ticas-de-programa%C3%A7%C3%A3o).

Mas, explicando com um pouco mais de calma, a motivação do 
princípio é o fato de que desenvolvedores, muitas vezes,
projetam e implementam funcionalidades que não serão usadas ou 
que não são relevantes no atual momento de vida de um 
sistema.

Em outras palavras, como é sempre fácil pedir, os clientes de 
um sistema podem demandar uma lista enorme de funcionalidades, 
sendo que algumas delas não são tão importantes. Inclusive, 
pode ser que elas nunca sejam fato usadas.

Por isso, o princípio YAGNI (ou "você não vai precisar disso")
diz o seguinte:

> Somente implemente uma funcionalidade quanto tiver fortes
evidências de que ela será de fato usada. Ou seja, evite
implementar funcionalidades que serão úteis a 
médio e longo prazo. Pode ser que, antes disso, elas
perderão importância.

Para dar um exemplo, suponha que você esteja implementando um 
aplicativo para entrega de comida online. E que o cliente --
que está solicitando o aplicativo -- sugira que as mensagens
estejam em Português e, também, em Espanhol, pois ele pretende, 
no futuro, expandir seu negócio para outros países da 
América Latina. Nesse contexto, pode ser interessante argumentar
com o cliente se mensagens em espanhol são mesmo importantes,
pelo menos nessa primeira versão do sistema.


## KISS: Keep It Simple, Stupid {.unnumbered}

Esta sigla é usada em diversos contextos e domínios. 
Mas, especificamente no caso de projeto de software,
ela diz respeito à tendência de desenvolvedores complicarem
o projeto de um software para além do necessário.

Por exemplo, muitas vezes os desenvolvedores propõem uma
arquitetura super complexa, baseada em padrões elaborados,
tais como 
[microsserviços](https://engsoftmoderna.info/cap7.html#microsservi%C3%A7os), 
[Arquitetura Hexagonal](https://engsoftmoderna.info/artigos/arquitetura-hexagonal.html), 
[Arquitetura Limpa](https://engsoftmoderna.info/artigos/arquitetura-limpa.html), etc. Ou então optam por implementações que 
fazem um uso exagerado de  
[padrões de projeto](https://engsoftmoderna.info/cap6.html).
Não que esses padrões sejam inúteis... Mas 
em algumas aplicações -- menores e menos sujeitas a mudanças -- 
eles simplesmente não se "pagam". Ou seja, é como usar um 
"canhão para matar uma formiga".

Por isso, ao projetar um sistema, tente conter sua 
veia por adotar soluções tecnicamente sofisticadas. E 
somente as use quando for necessário.

Quando não seguimos o princípio KISS, costuma-se dizer que 
solução complexa adotada no lugar é um exemplo de 
**overengineering**, ou seja, um uso superestimado 
e injustificado de técnicas e princípios de engenharia
(no nosso caso, de Engenharia de Software).

Antes de concluir, é interessante correlacionar YAGNI com
KISS. O primeiro princípio recomenda que devemos postergar
qualquer implementação até o momento em que ela seja,
de fato, necessária. Quando tal momento chegar, KISS
recomenda que a implementação seja feita da forma mais
simples possível. 

## Ortogonalidade {.unnumbered}

Dois componentes de um projeto são ortogonais se mudanças em um deles 
não afetam o outro. Logo, eles podem ser livremente combinados 
ou trocados.

No livro *The Pragmatic Programmer*, o seguinte exemplo explica essa
propriedade de projeto:

> Em um sistema bem projetado, o banco de dados é ortogonal 
à interface do usuário: pode-se alterar a interface sem afetar 
o banco de dados e trocar o banco de dados sem alterar a interface.

Para explicar melhor, suponha um sistema no qual podemos usar um 
conjunto de interfaces com o usuário X e um conjunto de bancos de dados Y. 
Em um sistema ortogonal, a escolha da interface X não impacta ou 
restringe a escolha do banco de dados Y. Qualquer combinação de X e Y 
é possível. Por isso, podemos imaginar X e Y como duas retas 
ortogonais, que formam um plano, no qual qualquer coordenada (x,y) 
representa uma configuração possível do sistema.

Em geral, ortogonalidade é uma propriedade que costuma estar 
presente, de graça, em sistemas bem projetados, cujos módulos possuem 
alta coesão e baixo acoplamento, tal como estudamos no 
[Capítulo 5](../cap5.html#coes%C3%A3o).

## Exercícios {.unnumbered}

1. Seja uma aplicação CRUD (*Create*, *Read*, *Update*, *Delete*). 
Quais dessas operações devem ser implementadas como Comandos? 
E quais devem ser Queries?

2. Seja a classe `Stack` implementada no 
seguinte [arquivo](https://gist.github.com/mtov/3601acd0b32a1d0a85b4a81a43af4284). (1) Qual método dessa implementação viola o princípio de Separação 
de Comandos e Queries (CQS)? (2) Como você reimplementaria esse método
de forma compatível com CQS? (3) Você acha que valeria a pena adotar 
a solução compatível com CQS nesse caso?



* * * 

Voltar para a lista de [artigos](./artigos.html).
