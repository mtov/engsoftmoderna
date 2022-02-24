# Product Discovery: Uma Breve Introdução {.unnumbered}

## Contexto {.unnumbered}

Em certos cenários, o sistema de software que devemos construir 
está bem definido e claro. Por isso, nesses cenários, faz sentido 
usar a palavra **requisito**, pois o cliente consegue expressar 
muito bem "o que" o sistema deve fazer.

No entanto, em outros cenários, essa clareza não existe. Por exemplo, 
muitas vezes não temos nem certeza de que o software -- ou alguma
funcionalidade importante dele -- será necessário 
e possuirá mercado. Então, nesse tipo de cenário, costuma-se usar 
o termo **discovery** para designar um conjunto de atividades 
realizadas com o objetivo de "descobrir" o que de fato deve ser 
implementado.

Em cenários de discovery, costuma-se usar o termo **hipótese**, 
no lugar da palavra requisito. O objetivo é deixar claro que 
primeiro precisamos realizar alguns experimentos para então chegar 
naquilo que, de fato, será implementado.

Normalmente, o processo de discovery é liderado por profissionais como 
Product Owners (PO), Product Managers (PM) ou UX Researchers. 
No entanto, é importante contar com a participação também de 
desenvolvedores e outros stakeholders.

## Exemplo {.unnumbered}

Suponha que trabalhamos em uma empresa que desenvolve um sistema de 
ensino a distância. Os clientes são universidades que pagam uma 
assinatura mensal. Então, queremos implementar uma nova funcionalidade
nesse sistema: um chat para comunicação entre professores e alunos 
de forma direta e privativa.

A nossa hipótese é a seguintes: 

> Um mecanismo de chat vai melhorar a experiência de aprendizado dos 
alunos. Consequentemente, o nosso sistema será melhor avaliado pelos gestores 
das universidades. E, por isso, mais universidades vão assinar o sistema 
e menos universidades vão solicitar o seu cancelamento. Isso vai ajudar a
atingir nossos principais objetivos de negócio neste trimestre.

Então, para validar essa hipótese temos que verificar os seguintes itens:

* Se a falta de um mecanismo para comunicação privativa com os
professores é uma "dor" real que incomoda os alunos.

* Se os professores estão dispostos a responder a dúvidas individuais dos 
alunos. Ou, então, se as universidades estão dispostas a instruir os 
professores a responder tais dúvidas.

* Se existe algum problema legal relacionado com a implementação
dessa nova funcionalidade. Por exemplo, só para fins hipotéticos, 
devemos avaliar se existe algum risco trabalhista caso os professores 
respondam as dúvidas fora do horário de trabalho. 

* Se a nossa empresa possui capacidade técnica e recursos humanos, no 
momento, para implementar essa nova funcionalidade. E também se 
conseguimos fazer isso em um período de tempo razoável.

Uma vez que a hipótese tenha sido validada, ela deve ser transformada
em uma ou mais histórias de usuário.

## Entrevistas com Clientes {.unnumbered}

A principal técnica usada em processos de discovery são **entrevistas**
com os clientes. Ou seja, é importante ouvir os clientes do sistema para
entender profundamente seus problemas, hábitos e rotinas. E, assim, 
confirmar (ou não) se nossas hipóteses fazem sentido e, portanto, vão
agregar valor para eles.

No entanto, é importante evitar um erro comum nessas entrevistas: perguntar
para os clientes, diretamente, se nossa ideia é boa e se eles iriam usá-la,
caso fosse disponibilizada no sistema. Quando fazemos esse tipo de 
pergunta, o mais comum é receber uma resposta afirmativa, mas apenas por 
uma questão de educação ou gentileza. Ou, simplesmente, porque os clientes 
querem encerrar logo a conversa.

Em vez disso, uma entrevista deve focar nos problemas e rotinas dos clientes. 
E também focar na experiência passada deles, em vez de perguntar como eles 
gostariam que fosse o futuro. No sistema de exemplo, as perguntas 
poderiam ser as seguintes:

* Qual foi a última vez que você precisou contactar um professor fora da 
  sala de aula?
* Qual era o problema que você estava enfrentando?
* Como você fez para resolver esse problema? Usou o nosso sistema de ensino 
  a distância? Se sim, como?

## Outras Técnicas {.unnumbered}

Em certos cenários, no entanto, nós não temos nem mesmo ideia de como resolver 
um certo problema. Ou seja, são cenários diferentes daquele do nosso 
exemplo, no qual já tínhamos uma funcionalidade em mente e que pretendíamos 
implementar no sistema. 

Em cenários nos quais nem mesmo as ideias e hipóteses estão claras, podemos 
usar técnicas mais abrangentes de discovery, tais como:

* Design Sprints, que estudamos no [Capítulo 3](../cap3.html#construindo-o-primeiro-mvp). 
* Design Thinking, que tratamos no seguinte [artigo didático](./design-thinking.html).
* Jobs to be Done (JTBD), que também tratamos em um [artigo didático](./jobs-to-be-done.html) específico.

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


## Exercícios {.unnumbered}

1. Qual problema pode ocorrer quando se adota Scrum ou 
Kanban (de forma tradicional) e que atividades de discovery podem 
ajudar a resolver?



* * * 

Voltar para a lista de [artigos](./artigos.html).