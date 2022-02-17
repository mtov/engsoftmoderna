# Perguntas Frequentes sobre Requisitos {.unnumbered}

O objetivo deste artigo é responder perguntas sobre temas relacionados 
com requisitos de software, isto é, sobre o 
[Capítulo 3](../cap3.html) do livro. 

Segue a lista atual de perguntas:

1. [O que são personas?](#o-que-s%C3%A3o-personas)
2. [O que é dogfooding?](#o-que-%C3%A9-dogfooding)
3. [O que é "discovery" de produtos?](#o-que-%C3%A9-discovery-de-produtos)

### 1. O que são personas? {.unnumbered}

No contexto de Engenharia de Software, persona é uma técnica usada para 
aproximar os desenvolvedores de um sistema de seus usuários finais. 
Suponha o sistema de bibliotecas que usamos no 
[Capítulo 3](../cap3.html#exemplo-sistema-de-controle-de-bibliotecas) do livro. 
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


### 2. O que é dogfooding? {.unnumbered}

Dogfooding é uma outra técnica usada para aproximar desenvolvedores dos 
produtos de software que eles desenvolvem. No entanto, no caso de 
dogfooding, a aproximação é total: ou seja, além de desenvolver um sistema, 
desenvolvedores devem também usá-lo com frequência. O nome tem origem em uma 
frase comum em inglês: "comer a mesma comida do seu cachorro"  (*eat you own dog food*).

O objetivo é simples: fazer com os que os desenvolvedores experimentem os 
benefícios e, principalmente, os problemas e dificuldades relacionados com 
o uso de um sistema. 

Dogfooding é adotado pela maioria das grandes empresas de tecnologia. 
Por exemplo, no Facebook, "os engenheiros também são usuários da rede social, 
portanto, eles têm conhecimento em primeira mão do que o sistema faz e de 
quais serviços ele oferece." 
([link](https://research.fb.com/wp-content/uploads/2016/11/development-and-deployment-at-facebook.pdf)). 

Como um segundo exemplo, veja o seguinte tweet do CEO do Google:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Have been dogfooding the new <a href="https://twitter.com/gmail?ref_src=twsrc%5Etfw">@Gmail</a> for a while now - very excited for this new redesign! <a href="https://t.co/Z7xcHwZTjO">https://t.co/Z7xcHwZTjO</a></p>&mdash; Sundar Pichai (@sundarpichai) <a href="https://twitter.com/sundarpichai/status/989236143613820928?ref_src=twsrc%5Etfw">April 25, 2018</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


No entanto, dogfooding é mais complicado no caso de sistemas para domínios de 
negócio que requerem usuários especializados. Por exemplo, um 
sistema para cálculo e geração de apólices de seguros para navios. Mesmo que um 
desenvolvedor implemente uma parte desse sistema, ele pode não conseguir usá-lo 
tal como um analista de seguros navais.

### 3. O que é "discovery" de produtos? {.unnumbered}

Vamos dividir a resposta em dois cenários:

* Em alguns cenários, o sistema de software que devemos construir 
é bem definido e claro. Por isso, faz sentido usar a 
palavra **requisito**, pois o cliente consegue expressar muito bem
"o que" o sistema deve fazer.

* No entanto, em outros cenários, essa clareza simplesmente não existe. 
Por exemplo, muitas vezes não temos nem certeza de que o software será
necessário e possuirá mercado. Então, nesse segundo cenário, 
costuma-se usar o termo **discovery** para designar um conjunto de 
atividades realizadas com o objetivo de "descobrir" o que de fato 
deve ser implementado.

Em cenários que envolvem discovery, costuma-se usar o
termo **hipótese**, no lugar da palavra requisito. O objetivo é
deixar claro que primeiro precisamos realizar alguns experimentos
para então chegar naquilo que, de fato, será implementado.

Hoje em dia, o termo discovery é muito comum na comunidade de criadores 
de produtos digitais, incluindo software. Normalmente, o processo 
é liderado por profissionais como Product Owners (PO), Product 
Managers (PM) ou UX Researchers. No entanto, é importante ouvir também 
os desenvolvedores e outros stakeholders.

**Técnicas**

Dentre as técnicas 
que podem ser usadas para apoiar um processo de discovery, podemos citar:

* Design Thinking, que tratamos no seguinte [artigo didático](./design-thinking.html).
* Jobs to be Done (JTBD), que também tratamos em um [artigo didático](./jobs-to-be-done.html) específico.
* Design Sprints, que estudamos no [Capítulo 3](../cap3.html#construindo-o-primeiro-mvp). 
* MVPs, que também estudamos no [Capítulo 3](../cap3.html#produto-m%C3%ADnimo-vi%C3%A1vel-mvp).

**Uso Conjunto com Scrum e Kanban**

Para incluir atividades de discovery em Scrum, costuma-se adotar um 
sistema com duas trilhas de trabalho (ou **dual track**), que rodam 
em paralelo, conforme mostrado na seguinte figura.

![Sistema de duas trilhas (dual track) com Scrum](./figs/discovery-dual-track.svg)

A primeira trilha inclui atividades de 
discovery, lideradas por POs e PMs, e seu objetivo é descobrir 
histórias de usuários para o backlog do produto.
Já a segunda trilha inclui sprints de **delivery**, que são os
sprints que seguem Scrum de forma tradicional, conforme explicamos
no [Capítulo 2](../cap2.html). O objetivo dessa trilha é implementar 
e entregar histórias de usuários. 

Já quando se usa Kanban, discovery é uma atividade que deve ser 
realizada na parte 
[upstream](./processos-faq.html#o-que-%C3%A9-upstream-e-downstream-kanban)
do fluxo de trabalho. 


* * * 

Voltar para a lista de [artigos](./artigos.html).
