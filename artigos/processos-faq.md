# Perguntas Frequentes sobre Métodos Ágeis {.unnumbered}

O objetivo deste artigo é responder perguntas 
sobre temas relacionados com métodos ágeis e que não são
abordados no [Capítulo 2](https://engsoftmoderna.info/cap2.html) do livro. 

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

### 2. O que é Grooming? {.unnumbered}

O termo grooming designa as atividades realizadas com o propósito de "cuidar" do backlog do
produto. Portanto, são atividades que devem ser lideradas pelo Product 
Owner (PO), mas com a colaboração dos demais membros do time. Dentre essas
atividades, podemos mencionar as seguintes: descobrir, criar, estimar, 
priorizar, remover, refinar, entender, especificar ou particionar 
histórias de usuários. 
Alguns autores, como Kenneth Rubim, no livro Scrum Essencial, sugerem 
que 10% do tempo dos membros de um time Scrum deve ser alocado para 
atividades de grooming. Ou seja, cerca de 4 horas semanais. No entanto, não 
existe um evento ou momento específico para realização do grooming. 
Ele pode ser realizado, por exemplo, em reuniões específicas 
convocadas pelo PO.

### 3. O que são personas? {.unnumbered}

No contexto de Engenharia de Software, persona é uma técnica usada para 
aproximar os desenvolvedores de um sistema de seus usuários finais. 
Suponha o sistema de bibliotecas que usamos no 
[Capítulo 3](https://engsoftmoderna.info/cap3.html) do livro. 
Nele, assumimos três papéis de usuários: usuário típico, professor e 
funcionário. A técnica de personas propõe representar esses papéis 
de uma forma mais "humana" por meio de nomes e de uma breve descrição. 
Por exemplo, podemos criar a seguinte persona:

> **Mariana**: Estudante do segundo ano de Sistemas de Informação, 20 anos, cursa normalmente cinco disciplinas em cada semestre. Usa a biblioteca para estudar e para acessar os principais livros 
dessas disciplinas.  Durante as férias, gosta de realizar empréstimos de livros de literatura.

Uma persona é um usuário fictício e hipotético. Ou seja, no sistema 
de bibliotecas não existe necessariamente um usuário chamado Mariana.
A descrição de uma persona é também acompanhada de uma foto.
Normalmente, define-se um número pequeno de personas para um sistema. 
Por exemplo, menos de cinco ou seis personas. E então as histórias de 
usuários são pensadas e escritas para cada uma das personas definidas.

Como dissemos, o principal objetivo da técnica de personas é criar uma
relação empática entre os desenvolvedores de um sistema e os seus 
usuários. Com isso, pretende-se evitar que os desenvolvedores projetem
o sistema pensando neles mesmos, isto é, apenas com as características 
que eles julgam importantes, caso tivessem que usar o sistema. 

Para definição das personas podem ser realizadas pesquisas
com os potenciais usuários do sistema, por exemplo, por meio de questionários.
Além de perguntas tradicionais (nome, sexo, idade, etc.) é importante que esses
questionários revelem também os hábitos e comportamentos dos usuários,
principalmente aqueles relacionados com o sistema que se pretende
implementar. A partir das respostas dos questionários, deve-se agrupar 
usuários semelhantes e então criar uma persona para cada grupo.

Antes de concluir, é importante mencionar que personas são usadas
também em outras áreas, como projeto de interface
com o usuário, marketing, vendas, etc.

### 4. Qual a diferença entre times orientados por projeto e por produto? {.unnumbered}

Vamos responder discorrendo sobre cada um dessas formas de organização de times.

**Times orientados por projeto**

Recomenda-se ter times orientados por projeto quando 
o escopo e as funcionalidades do sistema que será desenvolvido 
estão bem definidos. Ou seja, "o que" o sistema deve fazer está 
claro. Logo, a função principal do time é implementar as 
funcionalidades requeridas pelos clientes. Isso não impede que 
exista um PO ("Product Owner") que vai funcionar como uma ponte 
entre os clientes e os desenvolvedores do time.

Os projetos têm sempre uma duração bem definida. Após o seu 
término, o sistema é entregue ao contratante, que assume sua 
manutenção e evolução. O time pode então migrar para
outro projeto.

**Times orientados por produto**

Recomenda-se ter times orientados por produto quando os 
requisitos do sistema que será desenvolvido não são claros. 
Um time orientado por produto recebe como entrada um problema 
e deve "descobrir" o melhor sistema que vai solucioná-lo. 
Assim, o time tem autonomia para definir as funcionalidades 
do sistema. 

Técnicas como [Design Thinking](./design-thinking.html),
[MVPs](./mvp.html) e Testes A/B são frequentemente usadas por times orientados por produto. Também já está acordado que os times
vão manter e evoluir o sistema desenvolvido, normalmente 
por anos, até que ele seja descontinuado.

Normalmente, um time orientado por produto desenvolve um sistema 
para clientes externos. No entanto, os clientes podem ser também 
internos à organização. Por exemplo, suponha que uma empresa 
desenvolve um produto X para clientes externos. Porém, um time 
dessa organização pode ser responsável por desenvolver internamente 
um produto Y, que facilita a implantação de X em plataformas de 
computação em nuvem.

**Resumo**

Não existe uma organização de times melhor do que a outra. No 
entanto, times orientados por projeto devem ser usados quando
o problema a ser resolvido é bem conhecido, assim como a 
solução (sistema) a ser implementada. É importante também que 
essa solução demande poucas manutenções, principalmente 
manutenções evolutivas.

Normalmente, os times de fábricas ou agências de software são 
orientados por projeto. Já empresas de tecnologia -- cujo 
principal negócio são sistemas ou serviços de software -- 
possuem times orientados por produto.

### 5. Posso estimar histórias de usuários em horas? {.unnumbered}

Sim, histórias podem ser estimadas em unidades de tempo, 
tais como horas ou homens/hora, por exemplo.

Por outro lado, os defensores de story points argumentam 
que o maior problema de usar medidas de tempo é que existem 
sempre dois "tempos": o tempo ideal e o tempo consumido (*elapsed*). 
Explicando melhor, quando alguém afirma que vai implementar 
uma história em um dia (tempo ideal), ele pode na verdade 
levar um pouco mais. O motivo é que sempre vão ocorrer 
interrupções, tais como reuniões, bugs críticos para corrigir, 
compromissos pessoais, idas ao médico, etc. Muitas vezes, 
essa diferença entre tempo ideal e tempo consumido pode acabar 
gerando um mal-entendido. Algo assim: você prometeu que ia 
fazer isso em um dia, mas já se passaram dois dias e você 
não entregou ainda!

Por exemplo, em seu livro Scrum Essencial, Kenneth Rubin 
afirma o seguinte:

> Não há uma resposta certa ou errada sobre o uso de story 
points e dias ideais. No entanto, um argumento importante 
contra o uso do tempo ideal consiste no risco de 
mal-entendidos.

E o autor conclui com o exemplo de um jogo de futebol 
americano, que tem quatro tempos de 15 minutos, ou seja, 
uma hora ideal. Apesar disso, uma partida de futebol 
americano dura, quase sempre, mais de três horas.

### 6. O que é Upstream e Downstream Kanban? {.unnumbered}

O quadro Kanban, tal como explicamos no 
[Capítulo 2](https://engsoftmoderna.info/cap2.html), começa à 
sua esquerda com um backlog de tarefas.

No entanto, se os times não tomarem cuidado, esse backlog pode 
crescer muito e passar a incluir tarefas complexas, que não
foram devidamente entendidas pelo time ou que não vão agregar 
valor ao produto. Pode ser então que o time não consiga escolher 
as tarefas certas para implementar, já que o backlog 
transformou-se em uma extensa lista não-priorizada de tarefas 
obscuras.

Para isso, defende-se que o uso de Kanban seja dividido em 
dois fluxos:

* **Upstream Kanban**: fluxo de atividades para cuidar do backlog, 
evitando que ele fique grande e confuso. Por exemplo, pode-se 
prever atividades para entender as demandas dos clientes e 
priorizá-las. Com isso, somente vão entrar no backlog as 
tarefas que, de fato, deverão ser implementadas pelo time.

* **Downstream Kanban**: fluxo principal de Kanban, tal como 
explicamos no [Capítulo 2](https://engsoftmoderna.info/cap2.html), 
que começa com o backlog e prossegue com os passos de 
implementação das tarefas, tais como especificação, 
codificação e revisão.

Para fixar o entendimento desses dois fluxos, costuma-se usar a
imagem de um funil, como na seguinte figura:

![](./figs/upstream-kanban.svg){width=80%}

Resumindo: no upstream, especificamos e decidimos o que deve 
ser implementado; no downstream, implementa-se o que foi 
decidido.



* * * 

Voltar para a lista de [artigos](./artigos.html).
