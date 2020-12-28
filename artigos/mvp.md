# O que é -- e também o que não é -- um MVP?  {.unnumbered}

## Introdução  {.unnumbered}

**Produto Mínimo Viável (MVP)** é um conceito cunhado por Eric Eries 
no seu livro Lean Startup. E é impressionante o sucesso e o
alcance que ele alcançou. Hoje, o conceito é usado pelos mais
diversos empreendedores, sejam eles de produtos digitais ou
mesmo de produtos físicos. O conceito de MVP já faz parte também do
vocabulário de desenvolvedores de software (como estudamos no
[Capítulo 3](https://engsoftmoderna.info/cap3.html)), 
profissionais de marketing, consultores, analistas de negócio, etc.

No entanto, principalmente na área de software, o conceito de
MVP é algumas vezes usado de uma forma que não é totalmente fiel 
à sua definição original. Então, neste pequeno artigo, vamos
tentar esclarecer o significado mais preciso do conceito.

## Primeiro, o que é um MVP?  {.unnumbered}

Para entender para que serve um MVP, temos que começar lembrando que 
o conceito foi proposto no contexto de startups, isto é, 
empreendimentos que operam em um ambiente de grande 
risco e cujas chances de insucesso são grandes.

Nesse contexto, é importante testar o mais rapidamente possível 
as hipóteses mais arriscadas do empreendimento. A **metodologia
lean** para criação de startups, empresas e produtos possui então
dois passos principais:

1. Qual a hipótese mais arriscada do meu projeto? Isto é, qual a
hipótese que se não for verdade vai resultar no fracasso 
do projeto?

2. Qual o menor experimento (isto é, MVP) que eu posso construir
para validar essa hipótese?

Normalmente, a primeira hipótese que deve ser testada é a 
capacidade da empresa atrair clientes dispostos a pagar 
pelo seu produto ou serviço. Dizendo de outro modo, essa
hipótese pode ser anunciada da seguinte forma: existem 
clientes dispostos a pagar por uma solução X para um 
problema Y.

Desse modo, o primeiro MVP de uma startup não costuma ser um 
sistema, pois o custo de desenvolver um sistema -- mesmo que 
mínimo -- pode ser alto. Em vez disso, costuma-se usar como
primeiro MVP apenas uma *landing page*, um vídeo de demonstração ou 
sketches de telas em papel. Ou seja, um produto que pode ser 
construído em poucos dias. Feito isso, ele deve ser 
apresentado a potenciais clientes, para obter 
uma primeira ideia do potencial de sucesso do empreendimento.

Por exemplo, suponha que seu primeiro MVP seja apenas uma
página Web, descrevendo o sistema que pretende desenvolver,
suas principais funcionalidades e benefícios. Nessa página,
você pode pedir que potenciais clientes deixem seu e-mail 
para receber notícias sobre o sistema à medida que ele
for ficando pronto. E então passa a valer a seguinte
frase famosa sobre metodologias lean:

> Em um MVP, você decide o que é mínimo, mas é o cliente quem
decide se o produto é viável.

Ou seja, viável, na sigla MVP, significa um produto que atende 
e atrai clientes -- em vez de significar um produto que você
consegue implementar.

Continuando com o exemplo anterior, se ninguém se cadastrar
na sua lista de mails, mesmo após algum esforço de promoção, 
você deve avaliar com calma se vale a pena continuar com a 
sua ideia.

Por outro lado, se os primeiros experimentos forem bem 
sucedidos, você vai ter que começar a construir seus
primeiros MVPs na forma de sistemas. Algumas recomendações
nesse momento são as seguintes:

* Mesmo quando o MVP passa a ser um sistema, continue 
focando em adotantes iniciais (*early adopters*), pois
é mais difícil criar um produto para um grupo 
amplo e genérico de usuários.

* Passe a exigir algum pagamento dos clientes, por exemplo,
após um período de experimentação de 30 dias.
Ou seja, é importante validar se seus clientes estão 
dispostos a pagar pelo sistema. Se eles não quiserem pagar,
isso costuma ser uma ameaça séria à sobrevivência do negócio.

* Não tente automatizar tudo ainda. Como você vai ter
poucos clientes, várias tarefas -- incluindo pagamentos,
devoluções, cancelamentos, mudanças de planos de pagamento, 
entregas, etc -- podem ser feitas de modo manual. 
Esse tipo de MVP é chamado de **MVP Mágico de Oz**.

* Sempre reuse bibliotecas ou serviços de terceiros. 
Os exemplos clássicos são serviços de autenticação de 
usuários e de cobrança por cartões de crédito. 

* Preste atenção também em alguns requisitos não-funcionais,
como desempenho, usabilidade, segurança e privacidade. Esses
requisitos -- se não tratados de forma adequada -- podem causar 
o fracasso do seu projeto.

## E o que não é um MVP? {.unnumbered}

Suponha agora que você seja contratado 
para fazer um sistema conhecido para uma certa empresa. Por sistema
conhecido estamos nos referindo a um sistema cujos requisitos
são claros e bem entendidos e delimitados. Pode ser, inclusive, que
você já tenha feito um sistema parecido para outras empresas.
O importante aqui são dois fatores:

* Não existe risco de o sistema -- à medida que for
sendo desenvolvido -- se revelar mais complexo e desafiador.

* Não existe risco financeiro, pois o sistema já tem um 
cliente, que está pagando pelo seu desenvolvimento.

Então, você resolve usar um método como Scrum ou XP para 
implementar esse sistema (imagine, para ficar mais realista,
que você é dono de uma empresa de desenvolvimento e vai contar com 
ajuda de alguns desenvolvedores nesse projeto). Mais precisamente, 
o projeto será dividido em sprints com duração de duas semanas. 
Assim, após o primeiro sprint, você já terá um sistema com alguma 
funcionalidade para mostrar para seu cliente. 

A pergunta então é a seguinte: esse primeiro sistema é um MVP?

Não queremos ser dogmáticos e puristas quanto ao uso
de termos, mas a resposta é **negativa**.

Conforme definimos, um MVP é um experimento para testar 
uma ameaça importante ao sucesso de um projeto. No exemplo
que acabamos de apresentar, no entanto, não existem ameaças ou riscos
relevantes. Conforme afirmamos: os requisitos e o escopo do
sistema estão claros, você tem competência e experiência
para desenvolvê-lo e o sistema já tem um cliente garantido, que vai
pagar pelo seu desenvolvimento.

## Pivôs vs Restarts {.unnumbered}

Às vezes, costumamos usar o termo **pivô** também de forma imprecisa.
Para ficar claro, após criar um MVP, recebemos feedback e
dados de potenciais clientes. Podem então ocorrer três situações:

1. O experimento foi bem sucedido! Vamos então começar a implementar
um sistema de verdade.

2. O experimento foi um fracasso! Portanto, talvez seja melhor 
desistir, enquanto o prejuízo é pequeno.

3. Com o que aprendemos com o experimento, a gente consegue 
criar um novo MVP, dessa vez com mais chances de sucesso. Ou 
seja, vamos realizar um **pivô**!

Por exemplo, em um pivô podemos reformular a interface
do MVP, tentar atrair um outro tipo de cliente ou adotante
inicial, tentar uma nova forma de divulgação ou promoção do experimento,
acrescentar ou remover uma funcionalidade no MVP, etc.

Porém, não podemos confundir um pivô com um **restart**. Um 
restart (ou reboot) ocorre quando os fundadores abandonam 
o produto e a visão original da empresa e recomeçam 
o empreendimento com um novo propósito e visão. 

**Exemplo**: antes de criarem o Twitter, os seus fundadores 
trabalharam em uma plataforma de distribuição de podcasts, chamada Odeo. 
Como a iniciativa não deu certo, eles desistiram da Odeo e começaram a trabalhar em um novo 
sistema, dessa vez uma rede social para compartilhamento de mensagens 
de texto com 140 caracteres, a qual chamaram de Twitter (veja figura)

![](./figs/odeo-twitter-restart.jpg){width=95%}

Essa mudança 
de rota -- de um sistema para distribuição de podcasts para uma rede 
social -- não foi apenas um
pivô, mas sim um recomeço do zero.

## Comentário Final {.unnumbered}

Quando falamos de MVP, o mais importante não é o
produto em si, mas a hipótese de risco (ou a preocupação
ou ameaça) que procuramos testar. Se alguém comentar
com você sobre um MVP, não se esqueça então de perguntar 
sobre a hipótese de risco que está sendo testada.


## Exercícios {.unnumbered}

1. O seguinte artigo do blog da incubadora de startups YCombinador
tem um título interessante: 
[A Minimum Viable Product Is Not a Product, It's a Process](https://www.ycombinator.com/library/4Q-a-minimum-viable-product-is-not-a-product-it-s-a-process).
Por que o artigo defende essa tese? Isto é, por que, segundo o artigo,
um MVP não é um produto, mas sim um processo?

2. Nos seus primeiros dez anos de vida (1997-2007), a Netflix era
uma empresa que entregava DVDs fisicamente pelo correio, já tendo 
nessa época centenas de milhares de assinantes. Então, em 2007, a
empresa migrou para o serviço de streaming, tal qual conhecemos e
usamos hoje. Você classificaria essa mudança como um pivô? Sim ou
não? Justifique a sua resposta.

* * * 

Voltar para a lista de [artigos](./artigos.html).
