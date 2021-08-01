# Escalando Times Ágeis com o Modelo Spotify {.unnumbered}

### Visão Geral {.unnumbered}

O Modelo Spotify define uma organização para times ágeis, principalmente 
quando uma empresa cresce e passa a ter dezenas ou centenas de times. Quando isso 
aconteceu na Spotify, eles adotaram uma estrutura organizacional em forma 
de matriz, ilustrada na seguinte figura:

![Figura copiada do artigo Scaling Agile @ Spotify
with Tribes, Squads, Chapters & Guilds.
Henrik Kniberg & Anders Ivarsson, 2012.](./figs/modelo-spotify.jpg){width=75%}

Nessa **estrutura matricial** temos:

* **Squads**, que são os times, com todas as características de times
ágeis, isto é, multidisciplinares, auto-organizáveis e autônomos. 
Tipicamente, um squad tem menos de 10 profissionais, que seguem um determinado 
método ágil. Por exemplo, eles podem realizar reuniões de 
planejamento, reuniões diárias, retrospectivas e revisões, no caso de 
adotarem Scrum. Um squad deve possuir autonomia para colocar suas histórias
de usuário em produção. Na verdade, esse é um objetivo central do modelo:
criar condições para que cada squad funcione como uma "microempresa", com 
bastante autonomia dentro da organização. Para que isso seja possível, 
é importante que as dependências entre squads sejam minimizadas.

* **Tribos**, que são conjuntos de squads que trabalham em sistemas ou subsistemas 
semelhantes. Ou seja, as tribos são equivalentes a divisões ou departamentos em uma 
estrutura tradicional. Toda tribo possui um líder, responsável por garantir que os 
squads estão trabalhando de forma coordenada. Recomenda-se que uma tribo tenha no 
máximo 100 membros. Se esse limite for ultrapassado, deve-se criar mais um nível, 
constituído por **Alianças** ou **Unidades de Negócio**, isto é, conjuntos de tribos.

* **Chapters**, que agrupam, de forma horizontal, profissionais que realizam
as mesmas atividades. Por exemplo, podem existir chapters de desenvolvedores 
frontend, de cientistas de dados, de especialistas em UI/UX, etc. Esses profissionais 
no dia a dia estão espalhados pelos squads. Porém, com uma frequência definida, 
eles se reunem para trocar ideias, definir práticas comuns, etc. Como mostrado 
na figura acima, os chapters congregam profissionais de uma mesma tribo. 
Eles possuem um líder formal, que é responsável por questões como contratação,
treinamento e promoções.

* **Guildas**, que são comunidades informais e, às vezes, temporárias. Isto é,
são grupos de funcionários que se reunem, voluntariamente, para compartilhar 
interesses comuns, como uma tecnologia, processo, etc. Os participantes
de uma guilda não precisam pertencer à mesma tribo. O conceito de guilda 
já existia antes, com nomes como comunidade de prática ou grupos
de interesse.


### Tipos de Squads {.unnumbered}

Existem três tipos principais de squads voltados para desenvolvimento 
de software:

* Squads responsáveis por componentes arquiteturais: o exemplo clássico 
são squads responsáveis pelos clientes móveis de um sistema, incluindo 
Android, iOS, etc. Ou seja, a empresa pode ter squads para 
desenvolver e manter cada um desses clientes. Como um segundo exemplo,
em empresas menores, podemos ter squads de frontend e backend.

* Squads responsáveis por requisitos funcionais: por exemplo, em um sistema 
de comércio eletrônico, podem existir squads responsáveis pelo processo 
de compra (checkout), pelo pagamento, pela recomendação de produtos, 
pela pesquisa de produtos, etc. 

* Squads responsáveis por desafios de negócio: por exemplo, pode-se criar 
um squad para melhorar a retenção de clientes de um sistema SaaS 
(*Software as a Service*). As soluções desenhadas e implementadas por esse 
squad podem incluir programas de fidelidade, cupons de desconto, etc. 

Assim, os squads de funcionalidade tratam de serviços bem conhecidos e 
quase que obrigatórios em um sistema. Já os squads voltados para resolver
um desafio do negócio têm maior liberdade para desenhar seus serviços.

Desenvolvedores são maioria nos dois primeiros tipos de squads.
Já em squads voltados para um desafio de negócio existe um 
equilíbrio entre desenvolvedores e outros papéis, como gerentes 
de produto, vendedores, analistas de marketing, cientistas de 
dados, etc.

É importante ressaltar que em uma mesma empresa podem co-existir squads 
de componentes arquiteturais, de funcionalidades e associados a 
desafios de negócio.


### Comentário Final {.unnumbered}

O Modelo Spotify foi proposto em 2012. Em 2014, 
dois [vídeos](https://blog.crisp.se/2014/03/27/henrikkniberg/spotify-engineering-culture-part-1),
com o formato de animação, viralizaram e ajudaram a tornar o modelo 
largamente conhecido.

Desde essa época, a sua adoção, mesmo na Spotify, passou por evoluções e 
adaptações importantes. E, como qualquer assunto relacionado 
com processos, sua adoção não deve ocorrer cegamente de acordo com o manual. 
Adaptações ao **contexto** quase sempre são necessárias.

## Exercícios {.unnumbered}

1. Por que o Modelo Spotify é considerado uma estrutura matricial?

2. Descreva um exemplo de um quarto tipo de squad. Isto é, um squad cuja finalidade não se encaixa em nenhuma das três categorias discutidas no artigo.

* * * 

Voltar para a lista de [artigos](./artigos.html).
