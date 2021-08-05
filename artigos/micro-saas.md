
# Microempresas de Software como Serviço {.unnumbered}

## Introdução {.unnumbered}

Existem diversos caminhos na área de empreendedorismo envolvendo Engenharia
de Software. Hoje em dia, talvez, o caminho mais desejado seja criar uma 
startup de sucesso, obter financiamento via capital de risco e virar um 
unicórnio. No entanto, evidentemente, esse não é um caminho trivial, pois 
são pouquíssimas empresas que alçam esse nível de sucesso. Além disso, 
já existe uma vasta literatura sobre a criação e administração de startups 
financiadas por meio de capital de risco.

Por outro lado, existe um caminho oposto, que se costuma chamar 
de auto-financiado (*bootstrapped*), no qual a empresa é criada com recursos
próprios e mantida com os resultados de seu faturamento. 
Como ele é menos comentado, pelo menos na literatura, resolvemos escrever esse 
pequeno artigo sobre o assunto.

Quando adotam um modelo de assinatura, essas empresas são chamadas 
de micro-SaaS. Podemos definir esse conceito da seguinte forma:

> Micro-SaaS é um pequeno empreendimento de software, 
> auto-financiado, completamente administrado por 1-2 desenvolvedores 
> e que atende a uma necessidade específica. 
> Um micro-SaaS segue um modelo de serviços (*Software as a Service*), 
> com pagamentos recorrentes (assinaturas) por parte
> de centenas ou alguns milhares de clientes globais.

## Exemplos {.unnumbered}

Para ficar mais claro, vamos dar alguns exemplos de sistemas micro-SaaS:

* [Saber Feedback](https://saberfeedback.com/) é uma aplicação que possibilita 
adicionar um pequeno botão "Feedback" na lateral direita de todas as páginas 
de um site Web. Usuários podem usar esse botão para dar feedback sobre o site 
e suas páginas, reportando desde erros ortográficos até bugs de lógica ou de 
interface. O sistema é mantido por um único fundador, mais alguns freelancers. 

* [Transistor](https://transistor.fm/) é um sistema para hospedagem e 
distribuição de podcasts, que é mantido por dois fundadores.

* [Permanentlink](https://permanent.link/) é um sistema que se propõe a resolver 
um problema enfrentado por autores de livros digitais: esses livros incorporam 
diversos links (URLs), que com o tempo podem "quebrar". A ideia então é 
disponibilizar uma URL permanente para os documentos referenciados. 
Enquanto um link estiver ativo, o sistema redireciona a conexão para ele; se o link 
quebrar, retorna-se uma cópia da página armazenada localmente pelo sistema. 

* [Reform](https://www.reform.app/) é um sistema para criação de formulários.
Ou seja, o sistema tem que competir com concorrentes importantes, tal como 
sumarizado na seguinte [página](Comparison_of_survey_software) da Wikipédia. 
Apesar disso, os fundadores estão tentando criar um sistema alternativo 
que propicie uma experiência mais agradável para criação de formulários.

De forma interessante, esses sistemas são tanto B2B (*Business-to-Business*) 
como B2C (*Business-to-Customers*). Isto é, eles podem ter clientes que são
empresas ou consumidores finais.

## Desafios e Riscos {.unnumbered}

O grande **desafio de uma microempresa de software é achar um segmento 
de mercado**, que tenha um problema real que possa ser resolvido por meio 
de um sistema relativamente pequeno. E, mais importante, esse problema 
tem que ser relevante para **atrair clientes dispostos a pagar uma assinatura 
mensal** para ter acesso a um sistema que o resolva. 

Adicionalmente, os fundadores de uma microempresa de software são responsáveis 
não apenas por desenvolver e manter o sistema, mas também por outras funções, 
tais como:

* Cuidar da parte de operação. No entanto, essa tarefa ficou mais simples, 
devido à disponibilidade de sistemas de computação em nuvem que permitem 
criar máquinas virtuais com todo o software básico instalado.

* Cuidar da parte de cobrança e recebimento das assinaturas. Porém, hoje existem
serviços de terceiros para isso.

* Cuidar da parte de atendimento e suporte a clientes. Para isso é importante 
automatizar e documentar todos os processos e, também, usar sistemas de 
low-code, como Zapier.

* Cuidar da parte de marketing e divulgação, que hoje em dia pode se beneficiar 
de marketing de conteúdo e de técnicas de SEO (*Search Engine Optimization*). Além disso, um modelo freemium pode ajudar a atrair clientes. Neste modelo, os clientes podem testar o sistema por um tempo de forma gratuita.

## Crescendo a Empresa  {.unnumbered}

Quando uma microempresa de software faz sucesso e atrai um número maior de 
clientes, é natural que o empreendimento também cresça, principalmente em termos de estrutura de atendimento a clientes. E isso pode ser feito de forma também auto-financiada, com os recursos das próprias assinaturas do serviço.

Um caso interessante é o sistema 
[Less Annoying CRM](https://www.lessannoyingcrm.com), para gerenciamento de 
dados de clientes. Como o próprio nome diz, seu objetivo é ser um sistema de CRM 
(*Customer Relationship Management*) mais simples do que os sistemas concorrentes 
de grandes empresas, como Salesforce. Em contrapartida, a assinatura do sistema 
é também mais barata. A Less Annoying CRM foi criada em 2009, por dois fundadores. 
Em 2013, a empresa chegou a 1.5K clientes, com apenas mais um colaborador. 
Em 2021, ela possui quase 24 mil clientes e 19 colaboradores, a maior parte 
atuando em atendimento a clientes.

Um segundo exemplo de empresa de SaaS que começou pequena e cresceu 
bastante, mas mantendo o modelo de auto-financiamento, é a 
[Balsamiq](https://balsamiq.com), que faz uma ferramenta para criação de 
wireframes de baixa fidelidade. A empresa, localizada na Itália,
foi fundada em 2008 e, em 2020, obteve um faturamento de mais de 
US$ 9 milhões, com 33 colaboradores.

## Métricas {.unnumbered}

Antes de concluir, gostaríamos de comentar sobre algumas métricas usadas 
para avaliar o sucesso de sistemas SaaS:

* **Custo de Aquisição de Clientes (CAC)** (ou *Customer Acquisition Cost*): 
custos com propaganda, vendas, etc em um mês / número de novos assinantes no mês.

* **Receita Mensal Recorrente (MRR)** (ou *Monthly Recurring Revenue*):
Somatório do valor das assinaturas recebidas no mês. Ou seja, é o faturamento
mensal obtido com o sistema. Existe também o termo Receita Anual Recorrente (ARR).

* **Taxa de Cancelamentos** (*Churn Rate*): número de cancelamentos no mês /
total de clientes no início do mês.

* **Valor do Tempo de Vida do Cliente** (LTV) (*Customer Lifetime Value*): 
assinatura média no mês / taxa de cancelamentos. Exemplo: se a assinatura
média é de R$ 100 e a taxa de cancelamento for de 25%, temos que LTV =
100 / 0.25 = R$ 400.

Para um SaaS ser viável, LTV > CAC. Na verdade,
costuma-se recomendar que LTV / CAC > 3.0.

### Artigo Relacionado {.unnumbered}

Veja também este outro [artigo](https://engsoftmoderna.info/artigos/como-monetizar.html) sobre monetização de software.

## Exercícios {.unnumbered}

1. Pesquise e descreva pelo menos um sistema micro-SaaS, de forma semelhante 
àquela que fizemos no artigo.

2. Do ponto de vista de monetização, qual a vantagem de micro-Saas em 
relação a uma pequena app para celulares (comercializada em lojas como 
Google Play e Apple Store)?


* * * 

Voltar para a lista de [artigos](./artigos.html).
