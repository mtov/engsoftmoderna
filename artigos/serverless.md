# O que é uma Arquitetura Serverless?  {.unnumbered}

## Introdução {.unnumbered}

Neste artigo, iremos descrever o conceito de arquiteturas serverless,
que é um tipo de arquitetura que tem sido cada vez mais adotado por 
algumas empresas de software.

Iremos começar descrevendo o contexto histórico, pois achamos que 
para entender os conceitos de serverless é importante conhecer
a evolução dos procedimentos de compra, aluguel, instalação, 
configuração e disponibilização de servidores de software. 

Em seguida, iremos apresentar o conceito de funções serverless
e mostrar um exemplo desse tipo de função. Por fim, iremos 
listar algumas desvantagens de arquiteturas serverless.

## Histórico {.unnumbered}

Até a década de 1990, as empresas tinham que comprar 
servidores físicos para hospedar seus sistemas. E também tinham 
que dispor de um espaço físico para acomodá-los, chamado
de **data center** ou então de centro de processamento de
dados, que era o termo mais comum nessa época. 
Atualmente, costuma-se também chamar esse modelo de **on-premises**, pois os 
servidores estão localizados nas próprias instalações da 
empresa que vai usar um sistema (em inglês, a expressão 
*on premises* designa os terrenos e as edificações que são
de propriedade de uma empresa).

Então, também na década de 1990, começaram a surgir data centers 
que hospedavam servidores físicos para terceiros. Com isso, não 
era mais preciso ter espaços próprios para instalar máquinas e, 
consequentemente, não era preciso se preocupar com instalações 
elétricas, climatização, no-breaks, acesso à Internet, controle
de acesso físico às máquinas, etc. Esses data centers são 
chamados de **colocation**, pois no mesmo local são instalados 
servidores de empresas diferentes.


Prosseguindo, no início dos anos 2000, surgiram as **plataformas 
de cloud** oferecendo máquinas virtuais para as empresas contratantes. 
Assim, a compra ou aluguel de máquinas físicas deixou de ser obrigatória. 
Isso passou a ser responsabilidade das empresas de cloud, que 
alugam máquinas virtuais que executam "em cima" de suas 
máquinas físicas. 

O conceito de serverless pode ser visto como a próxima evolução 
desse processo. Basicamente, a empresa que precisa desenvolver
um sistema implementa um conjunto de funções -- normalmente,
chamadas de **funções serverless** ou **funções lambda** -- e 
copia as mesmas para um sistema de cloud. Portanto, não existe 
mais aluguel de máquinas, sejam elas virtuais ou físicas. 

A próxima figura resume essa linha do tempo que acabamos de
descrever:

    até 1990:  datacenters próprios  
                    ⇓
    1990-2000: colocation (compartilhamento de infraestrutura)
                    ⇓
    2000-hoje: plataformas de cloud (com aluguel de servidores virtuais)
                    ⇓
    2010-hoje: arquiteturas serverless (sem aluguel de servidores físicos ou virtuais)

O nome serverless explica-se pelo fato de que os desenvolvedores
não precisam se preocupar com instalação, configuração e 
escalabilidade de servidores, sejam eles físicos ou virtuais.
Ou seja, continuam existindo servidores, mas eles são mantidos e 
configurados pelas empresas de cloud.

## Modelo de Pagamento {.unnumbered}

Com serverless, paga-se pelo tempo de execução das **funções 
serverless**. Apenas quando ocorre um determinado evento 
ou chamada é que as funções são carregadas, executadas, encerradas
e cobradas do cliente.

Esse modelo de pagamento é semelhante ao de serviços utilitários, 
como energia elétrica. Por exemplo, você somente paga o que usa de 
eletricidade. Se não tiver nenhum uso no mês, sua conta será zero. 
E se precisar aumentar o seu consumo, dentro de certos limites, 
você tem certeza de que a companhia de eletricidade irá prover a 
energia necessária.

No entanto, mesmo não havendo pagamento pelo tempo em que as funções
ficaram ociosas, não pode-se afirmar que uma solução baseada em 
serverless é sempre mais barata. Isso vai depender também dos preços 
cobrados pelo provedor de cloud para execução de funções serverless 
e para aluguel de máquinas virtuais. E também do preço para comprar 
servidores físicos e mantê-los em data centers particulares ou em 
espaços de colocation.

## Funções Serverless {.unnumbered}

Funções serverless -- também chamadas, dependendo da plataforma de 
cloud, de funções lambda ou  
-- têm as seguintes características principais:

* Elas são stateless, isto é, elas não guardam qualquer estado entre 
uma execução e outra.

* Elas executam por um intervalo de tempo máximo, normalmente, da 
ordem de alguns minutos. Após esse intervalo, elas são  encerradas 
pela plataforma de cloud.

* Elas podem ser implementadas em uma variedade de linguagens de 
programação.

#### Exemplo {.unnumbered}

A Netlify é uma empresa de cloud que oferece um serviço serverless.
A seguir mostramos um exemplo de função serverless para a
plataforma de cloud da Netlify:
```
exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: "Hello, World"
  };
};
```

Como pode ser visto, a função retorna um objeto com dois campos:
o primeiro é o código de status da chamada, no caso igual a 200 
que indica que a requisição foi processada com sucesso; o segundo
é o corpo da resposta, o qual corresponde à string "Hello, World"

Para adotar uma arquitetura serverless, um cliente da Netlify deve 
implementar um conjunto de funções semelhantes a essa que acabamos 
de mostrar e copiá-las para uma determinada pasta de sua conta na 
plataforma. Feito isso, pode-se chamar a função por meio da 
seguinte URL:

[https://functions.netlify.com/.netlify/functions/hello](https://functions.netlify.com/.netlify/functions/hello)

Na seguinte [página](https://functions.netlify.com/playground/), 
você encontra outros exemplos de funções serverless, podendo
também chamá-las a partir de seu browser.


## Desvantagens {.unnumbered}

As principais desvantagens de serverless são as seguintes:

* Complexidade de gerenciar uma arquitetura constituída por um
grande número de pequenas funções autônomas; 

* Riscos de alto acoplamento com a plataforma de cloud, tornando mais 
difícil uma mudança para uma outra plataforma. Esse  problema é 
chamado de *vendor lock-in*.


* * * 

Voltar para a lista de [artigos](./artigos.html).
