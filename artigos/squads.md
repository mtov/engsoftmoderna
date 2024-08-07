

# Organizando Times Ágeis em Squads

## Introdução

Neste artigo, iremos começar explicando o que é um squad. Em seguida,
iremos apresentar os principais tipos de squads que existem em 
empresas de software. Por fim, vamos concluir apresentando o famoso 
Modelo Spotify, que define um modelo matricial para organização de 
empresas de software em squads, mas que também inclui outras 
estruturas, como tribos, chapters e guildas. 

## O que é um Squad? 

Squads são os times ágeis, isto é, times multidisciplinares, 
auto-organizáveis e autônomos. Tipicamente, um squad tem menos de 10 
profissionais, que seguem um determinado método ágil. Por exemplo, 
eles podem realizar reuniões de planejamento, reuniões diárias, 
retrospectivas e revisões, no caso de adotarem Scrum. 

Um squad deve possuir autonomia para colocar suas histórias de usuário 
em produção. Na verdade, esse é um objetivo central do conceito: criar 
condições para que cada time funcione como uma microempresa com 
bastante autonomia dentro da organização. Para que isso seja possível, 
é importante minimizar as dependências entre squads.

Portanto, em uma organização baseada em squads não existem silos 
funcionais, tais como o time de banco de dados, o time de qualidade, 
o time de testadores, o time de implantação (deployment), etc. Em vez 
disso, esses profissionais -- com diferentes formações e 
responsabilidades -- estão distribuídos pelos diferentes squads, que assim 
transformam-se em células autônomas de desenvolvimento, manutenção e 
entrega de software.

## Tipos de Squads 

Em organizações que desenvolvem software,  podem existir os 
seguintes tipos de squad:

* Squads de produto
* Squads responsáveis por componentes 
* Squads responsáveis por plataformas
* Squads facilitadores de boas práticas
* Squads responsáveis por objetivos de negócio

Iremos explicar cada um deles a seguir. 

#### Squads de produto  {.unnumbered}

Squads de produto são o **tipo mais comum de squad**. Como o nome sugere, 
esses squads são responsáveis por funcionalidades específicas do produto 
de software que está sendo desenvolvido pela organização. Por exemplo, em uma 
loja online, podem existir squads responsáveis pelo processo de compra 
(checkout), pelo pagamento, pela recomendação de produtos, pelo catálogo 
de produtos, etc. 

Para tornar sua missão mais clara, alguns squads de produto são 
responsáveis por personas específicas do sistema. Por exemplo,
um sistema com três personas X, Y e Z pode ser desenvolvido por três
squads de produto, sendo cada um deles responsável por uma persona.

No livro Team Topologies, os autores Manuel Pais e Matthew Skelton optam
por chamar tais squads de **times alinhados a fluxos de negócio** 
(*stream-aligned teams*). Independentemente do nome, o objetivo é o mesmo: 
esses squads têm como missão resolver problemas que facilitam a vida dos 
clientes e que, ao mesmo tempo, geram valor para a organização. 

Conforme já afirmamos, squads de produto são o tipo mais comum de squad.
Segundo Pais e Skelton, a proporção de squads de produto em relação aos 
demais squads costuma variar entre 6:1 (isto é, de cada sete squads, 
seis são de produto, enquanto um não é) até 9:1 (**nove squads de produto, 
para um squad de um outro tipo**).

#### Squads responsáveis por componentes  {.unnumbered}

Esses squads são responsáveis por componentes específicos da arquitetura  do sistema.
O exemplo clássico são squads responsáveis pelos clientes móveis de um sistema, 
incluindo Android, iOS, etc. Como um segundo exemplo, em empresas menores, 
podemos ter squads para componentes front-end e back-end. 

Os autores de Team Topologies também usam um nome 
diferente para tais squads, optando por chamá-los de **times responsáveis 
por subsistemas complexos** (*complicated-subsystem teams*), isto é, 
subsistemas -- ou componentes -- cujo desenvolvimento requer um 
conhecimento específico. Como exemplo, podemos mencionar subsistemas para 
processamento de vídeos, subsistemas que usam modelos matemáticos sofisticados, 
subsistemas para detecção de fraudes, etc. Porém, eles afirmam que tais times são 
opcionais e somente devem ser usados quando for claramente necessário.


#### Squads responsáveis por plataformas  {.unnumbered}

Esses squads desenvolvem ferramentas e plataformas internas que são usadas 
pelos demais squads. Ou seja, são squads que implementam serviços para os 
outros squads da organização. Por exemplo, eles podem desenvolver 
ferramentas para facilitar a instalação do sistema na máquina 
local dos desenvolvedores, para facilitar o deployment do sistema em 
serviços de cloud, para implementar serviços de autenticação, segurança, 
logging ou monitoramento, para realizar testes A/B, etc.  

Em última instância, o objetivo é liberar os demais squads das preocupações 
relacionadas com a implementação de tais funcionalidades técnicas,
ou seja, não diretamente relacionadas com o negócio. 


#### Squads facilitadores de boas práticas  {.unnumbered}

Em organizações maiores, podem existir squads cuja finalidade é prestar
consultoria e capacitação para os demais times da organização sobre
boas práticas para desenvolvimento de software, incluindo automação de testes, 
implementação de front end, qualidade de software, arquitetura, performance 
de bancos de dados, etc. Eles costumam ser chamados também de 
**times facilitadores** (*enabling teams*).

Adicionalmente, esses squads podem prospectar e recomendar novas 
tecnologias para a empresa. E também recomendar a aposentadoria
de algumas tecnologias ou a atualização da versão de outras.


#### Squads responsáveis por objetivos de negócio   {.unnumbered}

Esses squads miram em um problema específico que a empresa esteja 
enfrentando. Por exemplo, pode-se criar um squad para melhorar a retenção de 
clientes de um sistema SaaS (*Software as a Service*). As soluções 
desenhadas e implementadas por esse squad podem incluir programas de 
fidelidade, cupons de desconto, etc. Como um segundo exemplo, um squad 
pode ficar responsável por implantar o produto de software em um outro país.

Desenvolvedores são maioria nos tipos anteriores de squads. Já em squads 
voltados para um objetivo de negócio existe um maior equilíbrio entre 
desenvolvedores e outros papéis, como gerentes de produto, vendedores, 
pesquisadores de UX, analistas de marketing, cientistas de dados, etc.


## Modelo Spotify 

O Modelo Spotify define uma organização para times ágeis, principalmente 
quando uma empresa cresce e passa a ter dezenas ou centenas de squads. 
Quando isso aconteceu na Spotify, eles adotaram uma estrutura organizacional 
em forma de matriz, ilustrada na seguinte figura:

![Figura reproduzida do artigo Scaling Agile @ Spotify
with Tribes, Squads, Chapters & Guilds.
Henrik Kniberg & Anders Ivarsson, 2012.](./figs/modelo-spotify.jpg){width=75%}

Nesse **modelo matricial** temos dois tipos principais de estruturas:

* Estruturas verticais, representadas pelos squads e, também, por tribos.
* Estruturas horizontais, representadas por chapters e guildas.

A seguir, iremos detalhar cada uma dessas estruturas (com exceção de
squads, que já foram explicados antes).

#### Tribos  {.unnumbered}

Tribos são conjuntos de squads que trabalham em sistemas ou subsistemas 
semelhantes. Toda tribo possui um líder, responsável por garantir que os 
squads estão trabalhando de forma coordenada e de acordo com as prioridades 
do negócio. Recomenda-se que uma tribo tenha no  máximo 100 membros. Se esse 
limite for ultrapassado, deve-se criar mais um nível, constituído por 
**Alianças** ou **Unidades de Negócio**, isto é, conjuntos de tribos.

#### Chapters {.unnumbered}

Chapters são estruturas que agrupam, de forma horizontal, profissionais que 
possuem as mesmas competências. Por exemplo, podem existir chapters de 
desenvolvedores front-end, de cientistas de dados, de especialistas em UI/UX, 
etc. Esses profissionais no dia a dia estão espalhados pelos squads. Porém, 
com uma frequência definida, eles se reúnem para trocar ideias, definir 
práticas comuns, etc. Como mostrado na figura acima, os chapters congregam 
profissionais de uma mesma tribo. Eles possuem um líder formal, que é 
responsável -- junto com o setor de RH da empresa -- por questões como 
contratação, treinamento e promoções.

#### Guildas  {.unnumbered}

Guildas são comunidades informais e, às vezes, temporárias. Isto é,
são grupos de funcionários que se reúnem, voluntariamente, para compartilhar 
interesses comuns, como uma tecnologia, arquitetura, processo, etc. Os 
participantes de uma guilda não precisam pertencer à mesma tribo. 

O conceito de guilda já existia antes do Modelo Spotify ser proposto, com 
nomes como comunidade de prática ou grupos de interesse.


#### Adoção do Modelo Spotify {.unnumbered}

O Modelo Spotify foi proposto em 2012. Em 2014, 
dois [vídeos](https://blog.crisp.se/2014/03/27/henrikkniberg/spotify-engineering-culture-part-1),
com o formato de animação, viralizaram e ajudaram a tornar o modelo 
conhecido. 

Desde essa época, a adoção do modelo, mesmo na Spotify, passou por 
evoluções e  adaptações importantes. Isso é reconhecido, inclusive, 
pelos próprios autores do artigo que descreve o modelo:

> A Spotify (como qualquer boa empresa ágil) está evoluindo rapidamente. 
Este artigo é apenas uma fotografia de nossa forma atual de 
trabalhar -- uma jornada em andamento, não uma jornada concluída. 
Quando você estiver lendo o artigo, provavelmente as coisas já mudaram.

Por isso, como é normal quando o assunto são processos, a adoção de squads,
tribos, chapters e guildas não deve ocorrer cegamente de acordo com o manual. 
Adaptações ao contexto serão sempre necessárias. 


## Exercícios {.unnumbered}

1\. Para fixar as principais ideias do artigo, responda ao seguinte [exercício](https://engsoftmoderna.info/exercicios/exvf.html#/cap/Squads) de V ou F, com correção online.

2\. Descreva um problema de estruturas baseadas em silos funcionais, 
isto é, times separados de desenvolvedores, administradores de bancos de 
dados, testadores, operação, designers, etc.

3\. No artigo sobre a adoção de squads na Spotify, são citados os seguintes exemplos 
de squads: (a) para implementar o cliente Android do Spotify; (b) para 
criar uma "experiência de rádio" ao usar o Spotify; (c) para escalar os componentes
de backend da arquitetura do Spotify; (d) para prover funcionalidades de pagamento. 
Como você classificaria cada um desses squads de acordo com os tipos de 
squads que comentamos neste artigo.

4\. Suponha uma organização que organiza seus squads em componentes arquiteturais. Especificamente, ela possui squads que implementam componentes front-end e 
outros squads que implementam componentes back-end. Discorra sobre o principal 
problema desse tipo de organização de squads.

5\. Qual a principal semelhança entre squads de plataformas e squads facilitadores 
de boas práticas? E também qual é a diferença principal entre esses squads?

6\. Suponha que você trabalha em uma empresa organizada em squads, tribos, 
chapters e guildas. Então, você possui "dois chefes" (ou líderes). Explique 
quais são esses líderes e qual o papel de cada um deles.

7\. Por que o Modelo Spotify é considerado uma estrutura matricial?

8\. Descreva uma desvantagem do Modelo Spotify.

9\. Suponha uma grande empresa de entrega de comida online. Descreva 
pelo menos três tribos que essa empresa poderia usar para organizar 
seus squads. Basta descrever brevemente o objetivo de cada tribo.

* * * 

```{=html}
<p>Voltar para a lista de <a href="./artigos.html">artigos</a>.</p>
```
