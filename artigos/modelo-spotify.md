# Organização de Times Ágeis usando o Modelo Spotify {.unnumbered}

Neste artigo, iremos apresentar o famoso Modelo Spotify, que define
um modelo de organização para empresas de software. Iremos, 
em seguida, apresentar os principais tipos de squads (isto é, 
times ágeis) que podem existir em tais empresas.

## Modelo Spotify {.unnumbered}

O Modelo Spotify define uma organização para times ágeis, principalmente 
quando uma empresa cresce e passa a ter dezenas ou centenas de times. Quando isso 
aconteceu na Spotify, eles adotaram uma estrutura organizacional em forma 
de matriz, ilustrada na seguinte figura:

![Figura copiada do artigo Scaling Agile @ Spotify
with Tribes, Squads, Chapters & Guilds.
Henrik Kniberg & Anders Ivarsson, 2012.](./figs/modelo-spotify.jpg){width=75%}

Nessa **estrutura matricial** temos estruturas verticais (squads e tribos)
e também horizontais (chapter e guildas), conforme iremos detalhar a seguir.

#### Squads {.unnumbered}

Squads são os times ágeis, isto é, times multidisciplinares, auto-organizáveis e 
autônomos. Tipicamente, um squad tem menos de 10 profissionais, que seguem um 
determinado método ágil. Por exemplo, eles podem realizar reuniões de 
planejamento, reuniões diárias, retrospectivas e revisões, no caso de 
adotarem Scrum. 

Um squad deve possuir autonomia para colocar suas histórias de usuário em 
produção. Na verdade, esse é um objetivo central do modelo: criar condições 
para que cada squad funcione como uma "microempresa", com bastante autonomia 
dentro da organização. Para que isso seja possível, é importante que as 
dependências entre squads sejam minimizadas.

#### Tribos  {.unnumbered}

Tribos são conjuntos de squads que trabalham em sistemas ou subsistemas 
semelhantes. Toda tribo possui um líder, responsável por garantir que os 
squads estão trabalhando de forma coordenada e de acordo com as prioridades 
do negócio. Recomenda-se que uma tribo tenha no  máximo 100 membros. Se esse 
limite for ultrapassado, deve-se criar mais um nível, constituído por 
**Alianças** ou **Unidades de Negócio**, isto é, conjuntos de tribos.

#### Chapters {.unnumbered}

Chapters são estruturas que agrupam, de forma horizontal, profissionais que 
possuem as mesmas competências. Por exemplo, podem existir chapters de desenvolvedores 
front-end, de cientistas de dados, de especialistas em UI/UX, etc. Esses profissionais 
no dia a dia estão espalhados pelos squads. Porém, com uma frequência definida, 
eles se reunem para trocar ideias, definir práticas comuns, etc. Como mostrado 
na figura acima, os chapters congregam profissionais de uma mesma tribo. 
Eles possuem um líder formal, que é responsável -- junto com o setor de RH da 
empresa -- por questões como contratação, treinamento e promoções.

#### Guildas  {.unnumbered}

Guildas são comunidades informais e, às vezes, temporárias. Isto é,
são grupos de funcionários que se reunem, voluntariamente, para compartilhar 
interesses comuns, como uma tecnologia, arquitetura, processo, etc. Os 
participantes de uma guilda não precisam pertencer à mesma tribo. 

O conceito de guilda já existia antes do Modelo Spotify ser proposto, com 
nomes como comunidade de prática ou grupos de interesse.


## Tipos de Squads {.unnumbered}

Existem cinco tipos principais de squads voltados para desenvolvimento 
de software: 

* Squads responsáveis por funcionalidades
* Squads responsáveis por componentes 
* Squads responsáveis por plataformas
* Squads responsáveis por boas práticas
* Squads responsáveis por objetivos de negócio

Iremos explicar cada um deles a seguir. Antes de começar a fazer isso, 
gostaríamos de ressaltar que em uma mesma empresa podem co-existir os quatro 
tipos de squads que foram mencionados.

#### Squads responsáveis por funcionalidades  {.unnumbered}

Como o próprio nome diz, são squads que ficam responsáveis por desenvolver e 
manter funcionalidades específicas do sistema. Por exemplo, em um sistema 
de comércio eletrônico, podem existir squads responsáveis pelo processo de 
compra (checkout), pelo pagamento, pela recomendação de produtos, pelo 
catálogo de produtos, etc. 

Para tornar essa missão mais clara, alguns squads de funcionalidades são 
inclusive responsáveis por personas específicas do sistema. Por exemplo,
um sistema com três personas X, Y e X pode ser desenvolvido por três
squads, cada um deles responsáveis por uma das referidas personas.

No livro Team Topologies, os autores Manuel Pais e Matthew Skelton preferem 
chamar esses squads de **times alinhados a fluxos de negócio** 
(*stream-aligned teams*). Ou seja, são squads que têm como missão resolver 
problemas que facilitam a vida dos clientes e, ao mesmo tempo, geram valor 
para a organização. 

Eles afirmam que esses squads são largamente o tipo mais comum de squad
em "organizações que são bem-sucedidas em entregar software com qualidade
e rapidez". Especificamente, a proporção de squads alinhados a fluxos 
em relação aos demais squads costuma variar entre 6:1 (isto é, de cada 
sete squads, seis são alinhados a fluxos, enquanto um não é) 
a 9:1 (nove squads alinhados a fluxos, para um squad de um outro tipo).


#### Squads responsáveis por componentes  {.unnumbered}

Esses squads são responsáveis por um componente da arquitetura  do sistema.
O exemplo clássico são squads responsáveis pelos clientes móveis de um sistema, 
incluindo Android, iOS, etc. Ou seja, a empresa pode ter squads para 
desenvolver e manter cada um desses clientes. Como um segundo exemplo,
em empresas menores, podemos ter squads para componentes front-end e back-end. 

No livro Team Topologies, os autores também possuem uma visão e nomenclatura 
diferentes para tais squads, optando por chamá-los de **times responsáveis 
por subsistemas complexos** (*complicated-subsystem teams*), isto é, 
subsistemas -- ou componentes -- cujo desenvolvimento requer um 
conhecimento específico. Como exemplo, os autores citam subsistemas para 
processamento de vídeos, que usam modelos matemáticos sofisticados, 
para reconhecimento facial, etc.

#### Squads responsáveis por plataformas  {.unnumbered}

Esses squads desenvolvem ferramentas e plataformas internas que são usadas 
pelos demais squads, sejam eles de funcionalidades ou de componentes. Ou seja,
são squads que implementam serviços para os outros squads da organização. 
Por exemplo, eles podem desenvolver e manter ferramentas ou scripts para 
facilitar a instalação do sistema na máquina local dos desenvolvedores, 
para facilitar o deployment do sistema em serviços de cloud, para 
implementar serviços de logging ou monitoramento, etc. Em última
instância, o objetivo é liberar os demais squads das preocupações 
relacionadas com a implementação de tais funcionalidades técnicas,
ou seja, não diretamente relacionadas com a finalidade do negócio. 

#### Squads responsáveis por boas práticas  {.unnumbered}

Em organizações maiores, podem existir squads cuja finalidade é prestar
consultoria e capacitação para os demais times da organização sobre
boas práticas para desenvolvimento de software, incluindo automação de testes, 
implementação de front end, qualidade de software, arquitetura, performance 
de bancos de dados, etc. Eles costumam ser chamados também de 
**times capacitadores** (*enabling teams*).

Adicionalmente, esses squads podem prospectar e recomendar novas tecnologias 
para a empresa. 


#### Squads responsáveis por objetivos de negócio   {.unnumbered}

Esses squads focam em um problema ou desafio específico que a empresa esteja 
enfrentando. Por exemplo, pode-se criar um squad para melhorar a retenção de 
clientes de um sistema SaaS (*Software as a Service*). As soluções desenhadas e implementadas por esse squad podem incluir programas de fidelidade, cupons de 
desconto, etc. Como um segundo exemplo, um squad pode ficar responsável por 
implantar o produto de software em um outro país.

Desenvolvedores são maioria nos tipos anteriores de squads. Já em squads 
voltados para um objetivo de negócio existe um maior equilíbrio entre 
desenvolvedores e outros papéis, como gerentes de produto, vendedores, 
pesquisadores de UX, analistas de marketing, cientistas de dados, etc.

## Comentário Final {.unnumbered}

O Modelo Spotify foi proposto em 2012. Em 2014, 
dois [vídeos](https://blog.crisp.se/2014/03/27/henrikkniberg/spotify-engineering-culture-part-1),
com o formato de animação, viralizaram e ajudaram a tornar o modelo 
largamente conhecido.

Desde essa época, a sua adoção, mesmo na Spotify, passou por evoluções e 
adaptações importantes. Isso é reconhecido, inclusive, pelos próprios 
autores do artigo que descreve o modelo:

> A Spotify (como qualquer boa empresa ágil) está evoluindo rapidamente. Este artigo
é apenas uma fotografia de nossa forma atual de trabalhar -- uma jornada em andamento, 
não uma jornada concluída. Quando você estiver lendo o artigo, provavelmente
as coisas já mudaram.

Por isso, como é normal quando o assunto são processos, a adoção do 
Modelo Spotify não deve ocorrer cegamente de acordo com o manual. 
Adaptações ao contexto são sempre necessárias. 

<!--
Por isso, gostamos de dizer que o principal benefício do Modelo Spotify 
consiste em adicionar algumas ferramentas conceituais na sua 
"caixa de ferramentas" sobre processos e organização de times de desenvolvimento
de software. Nem todas as ferramentas dessa caixa podem ser úteis no contexto atual 
da sua empresa. Porém, é importante conhecer todas elas, pois amanhã seu contexto 
pode mudar e uma ferramenta que antes parecia inútil pode agora 
desempenhar um papel importante.
-->

## Exercícios {.unnumbered}

1. Para fixar as principais ideias do Modelo Spotify, responda ao seguinte [exercício](../exercicios/exvf.html#/cap/Spotify) de V ou F, com correção online.

2. Suponha que você trabalha em um organização que segue o modelo Spotify. Então, você possui "dois chefes" (ou líderes). Explique quais são esses líderes e qual o papel de cada um deles.

3. Por que o Modelo Spotify é considerado uma estrutura matricial?

4. Descreva uma desvantagem do Modelo Spotify.

5. No artigo sobre o Modelo Spotify, são citados os seguintes exemplos de 
squads: (a) para implementar e manter o cliente Android do Spotify; (b) para 
criar uma "experiência de rádio" ao usar o Spotify; (c) para escalar os componentes
de backend da arquitetura do Spotify; (d) para prover funcionalidades de pagamento. 
Como você classificaria cada um desses squads de acordo com os tipos de squads que comentamos neste artigo.

6. Suponha uma organização que organiza seus squads em componentes arquiteturais. Especificamente, ela possui *n* squads que implementam componentes front-end e 
outros *m* squads que implementam componentes back-end. Discorra sobre o principal 
problema desse tipo de organização de squads.

* * * 

Voltar para a lista de [artigos](./artigos.html).
