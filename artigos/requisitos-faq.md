# Perguntas Frequentes sobre Requisitos {.unnumbered}

O objetivo deste artigo é responder perguntas sobre temas relacionados 
com requisitos de software, isto é, sobre o 
[Capítulo 3](../cap3.html) do livro. 

Segue a lista atual de perguntas:

1. [O que são personas?](#o-que-s%C3%A3o-personas)
2. [O que é dogfooding?](#o-que-%C3%A9-dogfooding)

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

* * * 

Voltar para a lista de [artigos](./artigos.html).
