

# O que é -- e também o que não é -- um MVP?  

## Introdução 

**Produto Mínimo Viável (MVP)** é um conceito popularizado por Eric Ries 
no seu livro Lean Startup. E é impressionante o sucesso e o
alcance que ele alcançou. Hoje, o conceito é usado por
diversos empreendedores, sejam eles de produtos digitais ou
mesmo de produtos físicos. O conceito de MVP já faz parte também do
vocabulário de desenvolvedores de software, tal como estudamos no
[Capítulo 3](https://engsoftmoderna.info/cap3.html#produto-m%C3%ADnimo-vi%C3%A1vel-mvp).

No entanto, na área de software, o termo MVP é algumas vezes usado 
de uma forma que não é totalmente fiel à sua definição original. 
Por isso, neste artigo didático, vamos tentar esclarecer o significado 
mais preciso desse conceito.

## Primeiro, o que é um MVP?  

Para entender para que serve um MVP, temos que lembrar que 
o conceito foi proposto para o contexto de startups, isto é, 
empreendimentos que operam em um ambiente de grande 
risco e cujas chances de insucesso são enormes.

Em tais contextos, é importante testar rapidamente as hipóteses 
mais arriscadas do empreendimento. A **metodologia lean** 
para criação de startups defende que duas perguntas
fundamentais devem ser respondidas o quanto antes:

1. Qual a hipótese mais arriscada do meu empreendimento? 
Isto é, qual a hipótese que se não for verdade vai resultar 
no seu fracasso?

2. Qual o menor experimento (isto é, MVP) que eu posso construir
para validar essa hipótese?

Normalmente, a primeira hipótese que deve ser testada é a 
capacidade da empresa atrair clientes dispostos a pagar 
pelo seu produto ou serviço. Dizendo de outro modo, essa
hipótese pode ser enunciada da seguinte forma: existem 
clientes dispostos a pagar por uma solução X para um 
problema Y?

Desse modo, o primeiro MVP de uma startup não costuma ser um 
sistema, pois o custo de desenvolver um sistema -- mesmo que 
mínimo -- pode ser alto. Em vez disso, costuma-se usar como
primeiro MVP apenas uma *landing page*, um vídeo de demonstração ou 
sketches de telas em papel. Ou seja, algo que pode ser 
construído em poucos dias. Feito isso, esse primeiro MVP 
deve ser apresentado a potenciais clientes, para obter 
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

Ou seja, viável, na sigla MVP, significa um produto que 
atrai clientes -- em vez de um produto que você consegue 
implementar.

Continuando com o exemplo anterior, se ninguém se cadastrar
na sua lista de mails, mesmo após algum esforço de promoção, 
você deve avaliar se vale a pena continuar com a sua ideia.

Por outro lado, se os primeiros experimentos forem bem 
sucedidos, você deve começar a construir seus
primeiros MVPs na forma de sistemas. Algumas recomendações
nesse momento são as seguintes:

* Mesmo quando o MVP é um sistema, continue focando em adotantes 
iniciais (*early adopters*), pois é mais difícil criar um produto 
para um grupo amplo e genérico de usuários.

* Passe a exigir algum pagamento, pois é importante validar se 
seus clientes estão dispostos a pagar pelo sistema. Se eles 
não quiserem pagar, isso será uma ameaça à sobrevivência do 
negócio.

* Não tente automatizar tudo ainda. Como você vai ter
poucos clientes, várias tarefas -- incluindo pagamentos,
devoluções, cancelamentos, mudanças de planos de pagamento, 
etc -- podem ser feitas de modo manual. Esse tipo de MVP 
é chamado de **MVP Mágico de Oz**.

* Sempre reuse bibliotecas ou serviços de terceiros. 
Os exemplos clássicos são serviços de autenticação de 
usuários e de cobrança por cartões de crédito. 

* Preste atenção também em alguns requisitos não-funcionais,
como desempenho, usabilidade, segurança e privacidade. Esses
requisitos -- se não tratados de forma adequada -- podem causar 
o fracasso do seu projeto. Por fim, avalie se seu projeto
possui algum risco legal ou jurídico.

Por outro lado, **otimização prematura** é algo que deve
ser evitado na construção de MVPs. Veja, como o MVP pode
falhar, não devemos nos preocupar em usar a última 
tecnologia da moda. Em vez disso, tente usar linguagens 
e frameworks conhecidos e robustos. A seguinte frase resume 
essa recomendação:

> Ame o problema e não a solução ou tecnologia que você está usando.

Escalabilidade é outro aspecto que não é tão importante. 
Se o MVP der certo, você terá tempo e dinheiro para resolver 
problemas de escala. Da mesma forma, preocupações com 
uma arquitetura de software extensível e com uma alta cobertura de 
testes não são fundamentais neste momento inicial.

## E o que não é um MVP? 

Suponha agora que você seja contratado para fazer um sistema 
conhecido para uma certa empresa. Por sistema conhecido 
estamos nos referindo a um sistema cujos requisitos
são claros e delimitados. Pode ser, inclusive, que
você já tenha feito um sistema parecido para outras empresas.
O importante aqui são dois pontos:

* Não existe risco de o sistema -- à medida que ele for
sendo desenvolvido -- se revelar mais complexo e desafiador.

* Não existe risco financeiro, pois o sistema já tem um 
cliente que está pagando pelo seu desenvolvimento.

Então, você resolve usar um método como 
[Scrum](https://engsoftmoderna.info/cap2.html#scrum) ou 
[XP](https://engsoftmoderna.info/cap2.html#extreme-programming) para 
implementar esse sistema (imagine, para ficar mais realista,
que você é dono de uma empresa de desenvolvimento e vai contar com 
ajuda de alguns desenvolvedores nesse projeto). 

Mais precisamente, o projeto será dividido em sprints 
de duas semanas. Assim, após o primeiro sprint, você já terá 
um sistema com alguma funcionalidade para mostrar para o cliente. 

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

Por isso, os incrementos de produto produzidos nos sprints 
iniciais desse projeto não têm características de um experimento, 
isto é, de um MVP. O seguinte tweet, de um consultor de software, 
reforça e resume essa visão:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">An MVP is an experiment that tests the hypothesis that something’s worth building. It is NOT Version 1 of a product.</p>&mdash; Allen Holub (@allenholub) <a href="https://twitter.com/allenholub/status/1479181061938503688?ref_src=twsrc%5Etfw">January 6, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## Pivôs vs Restarts 

Às vezes, também usamos o termo **pivô** de forma imprecisa.
Para ficar claro, após criar um MVP, recebemos feedback de potenciais 
clientes. Podem então ocorrer três situações:

1. O experimento foi bem sucedido e, por isso, alcançamos o que 
se chama de **product-market fit**. Vamos então começar a 
implementar um sistema de verdade.

2. O experimento foi um fracasso! Portanto, talvez seja melhor 
desistir enquanto o prejuízo é pequeno.

3. Com o que aprendemos com o experimento, a gente consegue 
criar um novo MVP, dessa vez com mais chances de sucesso. Ou 
seja, vamos realizar um **pivô**!

Em um pivô podemos realizar as seguintes mudanças:

* Tentar atrair um outro tipo de cliente ou adotante inicial. Por
exemplo, focar em empresas em vez de pessoas físicas.

* Realizar mudanças importantes nas funcionalidades do MVP. Por
exemplo, o Instagram começou como um aplicativo de *check-in*,
chamado de Burbn, que permitia avisar seus amigos que você estava
em um determinado local e, então, compartilhar fotos com eles. No 
entanto, essa última funcionalidade -- compartilhamento de fotos com 
amigos -- fez tanto sucesso que se transformou em um 
novo produto, que os fundadores renomearam para Instagram.

* Migrar para uma nova tecnologia. Por exemplo, focar em
aplicativos para celulares em vez de um sistema Web.

Porém, não podemos confundir um pivô com um **restart**. Um restart 
ocorre quando os fundadores abandonam, por completo, o propósito 
da empresa e recomeçam o empreendimento do zero. Ou seja, um restart 
é uma desistência seguida por um recomeço em uma área nova.

**Exemplo**: antes de criarem o Twitter, os seus fundadores 
trabalharam em uma plataforma de distribuição de podcasts, chamada 
Odeo. Como a iniciativa não deu certo, eles desistiram da Odeo e 
começaram a trabalhar em um novo sistema, dessa vez uma rede social 
para compartilhamento de mensagens de texto com 140 caracteres, 
a qual chamaram de Twitter.

![Exemplo de recomeço no caso do Twitter](./figs/odeo-twitter-restart.jpg){width=95%}

Essa mudança completa de objetivo -- de um sistema para distribuição 
de podcasts para uma rede social baseada em mensagens de texto -- 
não foi um pivô, mas um recomeço do zero.

## Conclusão 

Quando falamos de MVP, o mais importante não é o produto em si, mas a
hipótese de risco que procuramos testar. Se alguém comentar com você 
sobre um MVP, não se esqueça então de perguntar sobre a hipótese 
de risco que está sendo testada.


## Exercícios {.unnumbered}

1\. Qual a diferença entre um MVP e uma pesquisa de mercado?

2\. O seguinte artigo do blog da incubadora de startups YCombinador
tem um título interessante: 
[A Minimum Viable Product Is Not a Product, It's a Process](https://www.ycombinator.com/library/4Q-a-minimum-viable-product-is-not-a-product-it-s-a-process).
Por que o artigo defende essa tese? Isto é, por que, segundo o artigo,
um MVP não é um produto, mas sim um processo?

3\. Nos seus primeiros dez anos de vida (1997-2007), a Netflix era
uma empresa que entregava DVDs fisicamente pelo correio, já tendo 
nessa época centenas de milhares de assinantes. Então, em 2007, a
empresa migrou para o serviço de streaming, tal qual conhecemos e
usamos hoje. Você classificaria essa mudança como um pivô? Sim ou
não? Justifique e argumente a favor de sua resposta.

4\. Suponha que você planeja abrir uma empresa para entrega de
comida pela Internet, em uma cidade como Belo Horizonte, e
pretende concorrer com empresas estabelecidas do ramo. A criação 
de um MVP seria recomendada nesse contexto? Sim ou Não? Justifique 
e argumente  a favor de sua resposta.

5\. Descreva um domínio no qual é mais desafiador criar um MVP. 
Justifique sua resposta.

* * * 

```{=html}
<p>Voltar para a lista de <a href="./artigos.html">artigos</a>.</p>
```
