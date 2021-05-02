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

* * * 

Voltar para a lista de [artigos](./artigos.html).
