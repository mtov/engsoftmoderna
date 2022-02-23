# Product Discovery: Uma Breve Introdução {.unnumbered}

## Contexto {.unnumbered}

Em certos cenários, o sistema de software que devemos construir 
está bem definido e claro. Por isso, nesses cenários, faz sentido 
usar a palavra **requisito**, pois o cliente consegue expressar 
muito bem "o que" o sistema deve fazer.

No entanto, em outros cenários, essa clareza não existe. Por exemplo, 
muitas vezes não temos nem certeza de que o software será necessário 
e possuirá mercado. Então, nesse tipo de cenário, costuma-se usar 
o termo **discovery** para designar um conjunto de atividades 
realizadas com o objetivo de "descobrir" o que de fato deve ser 
implementado.

Em cenários de discovery, costuma-se usar o
termo **hipótese**, no lugar da palavra requisito. O objetivo é
deixar claro que primeiro precisamos realizar alguns experimentos
para então chegar naquilo que, de fato, será implementado.

Hoje em dia, o termo discovery é muito comum na comunidade de criadores 
de produtos digitais, incluindo software. Normalmente, o processo 
é liderado por profissionais como Product Owners (PO), Product 
Managers (PM) ou UX Researchers. No entanto, é importante ouvir também 
os desenvolvedores e outros stakeholders.

## Técnicas {.unnumbered}

Dentre as técnicas que podem ser usadas para apoiar processos de 
discovery, podemos citar:

* Design Thinking, que tratamos no seguinte [artigo didático](./design-thinking.html).
* Jobs to be Done (JTBD), que também tratamos em um [artigo didático](./jobs-to-be-done.html) específico.
* Design Sprints, que estudamos no [Capítulo 3](../cap3.html#construindo-o-primeiro-mvp). 
* MVPs, que também estudamos no [Capítulo 3](../cap3.html#produto-m%C3%ADnimo-vi%C3%A1vel-mvp).

## Discovery com Scrum {.unnumbered}

Para incluir atividades de discovery em Scrum, costuma-se adotar um 
sistema com duas trilhas de trabalho (ou **dual track**), que rodam 
em paralelo, conforme mostrado na seguinte figura.

![Sistema de duas trilhas (dual track) com Scrum](./figs/discovery-dual-track.svg)

A primeira trilha inclui atividades de discovery, lideradas por POs e 
PMs, e seu objetivo é descobrir histórias de usuários para o backlog do 
produto. 

Já a segunda trilha inclui sprints de **delivery**, que são os
sprints que seguem Scrum de forma tradicional, conforme explicamos
no [Capítulo 2](../cap2.html). O objetivo dessa trilha é implementar 
e entregar histórias de usuários. 

## Discovery com Kanban {.unnumbered}

Também podemos adaptar Kanban para incluir atividades de discovery. 
Normalmente, isso envolve o uso de dois fluxos de trabalho:

* **Upstream Kanban**: esse é um novo fluxo (com seu respectivo quadro 
Kanban) que é criado para incluir apenas atividades de discovery. Por 
exemplo, ele pode incluir atividades para entender as demandas dos 
clientes e priorizá-las. Assim, somente vão entrar no backlog do 
produto as tarefas que, de fato, devem ser implementadas pelo time.

* **Downstream Kanban**: representa o fluxo principal de Kanban, 
tal como estudamos no [Capítulo 2](../cap2.html#kanban), 
que começa com o backlog e prossegue com os passos de 
implementação das tarefas, tais como especificação, 
codificação e revisão.

Para ilustrar esses dois fluxos, costuma-se usar a imagem de um funil, 
como na seguinte figura:

![](./figs/upstream-kanban.svg){width=80%}

O Upstream Kanban corresponde à parte do funil que vai se estreitando
para deixar claro que nem toda demanda proposta pelos stakeholders
precisa chegar ao backlog.

Achamos importante comentar também sobre a origem
dos termos upstream e downstream. Uma possível tradução seria
montante (upstream) e jusante (downstream). Especificamente,
quando se constrói uma barragem em um rio, a parte do
seu leito que foi represada, dando origem ao repositório ou lago,
chama-se montante do rio; a parte do rio após a barragem
é chamada de jusante.


* * * 

Voltar para a lista de [artigos](./artigos.html).