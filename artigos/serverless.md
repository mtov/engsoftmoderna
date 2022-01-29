# O que é uma Arquitetura Serverless?  {.unnumbered}

## Introdução {.unnumbered}

Neste artigo, iremos descrever o conceito de arquiteturas 
serverless, que tem sido cada vez mais adotado por empresas 
de software.

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
dados, que era inclusive o termo mais comum nessa época. 
Atualmente, costuma-se também chamar esse modelo de **on-premises**, 
pois os servidores estão localizados nas próprias instalações da 
empresa que vai usar o sistema (em inglês, a expressão 
*on premises* designa os terrenos e as edificações de propriedade 
de uma empresa).

Em seguida, mas ainda na década de 1990, começaram a surgir 
data centers que hospedavam servidores físicos para terceiros. 
Com isso, não era mais preciso ter espaços próprios para instalar 
máquinas e, consequentemente, não era preciso se preocupar com 
instalações elétricas, climatização, no-breaks, acesso à Internet, 
controle de acesso físico às máquinas, etc. Esses data centers são 
chamados de **colocation**, pois no mesmo local são instalados 
servidores de várias empresas.


Prosseguindo, no início dos anos 2000, surgiram as **plataformas 
de cloud** oferecendo servidores virtuais para as empresas contratantes. 
Assim, a compra ou aluguel de servidores físicos deixou de ser obrigatória. 
Isso passou a ser responsabilidade das empresas de cloud, que 
alugam servidores virtuais que executam "em cima" de suas máquinas 
físicas. 

O conceito de serverless pode ser visto como a próxima evolução 
desse processo. Basicamente, a empresa que precisa desenvolver
um sistema implementa um conjunto de funções -- normalmente,
chamadas de **funções serverless** ou **funções lambda** -- e 
copia as mesmas para um sistema de cloud. Portanto, não existe 
mais aluguel de servidores, sejam eles virtuais ou físicos. 
E as funções serverless podem ser invocadas por aplicações
clientes do sistema ou então serem automaticamente chamadas após 
a ocorrência de determinados eventos.

A próxima figura compara essas alternativas para uso de servidores 
e construção de aplicações.

![Comparando On-Premises, Colocation, Cloud e Serverless](./figs/serverless.svg){width=95%}

O nome serverless explica-se pelo fato de que os desenvolvedores
não precisam se preocupar com instalação, configuração e 
escalabilidade de servidores, sejam eles físicos ou virtuais.
Ou seja, para ficar bem claro, continuam existindo servidores, 
mas eles são mantidos e configurados pelas empresas de cloud.

## Modelo de Cobrança {.unnumbered}

Com serverless, paga-se pelo tempo de execução das funções 
serverless. Ou seja, apenas quando ocorre um determinado evento 
ou chamada é que as funções são carregadas, executadas, encerradas
e cobradas do cliente.

Esse modelo de pagamento é semelhante ao de serviços utilitários, 
como energia elétrica. Por exemplo, você somente paga o que usa de 
eletricidade. Se não tiver nenhum uso no mês, sua conta será zero ou
então igual a um valor mínimo. E se precisar aumentar o seu consumo, 
dentro de certos limites, você tem certeza de que a companhia de 
eletricidade irá prover a energia necessária.

Porém, mesmo não havendo pagamento pelo tempo 
de ociosidade das funções, uma solução baseada em serverless não é 
sempre mais barata. Isso vai depender também dos preços cobrados pelo 
provedor de cloud para execução de funções serverless e para aluguel de 
servidores virtuais. E também do preço para comprar servidores físicos 
e mantê-los em data centers ou em espaços de colocation.

## Funções Serverless {.unnumbered}

Funções serverless têm as seguintes características principais:

* Elas são stateless, isto é, elas não guardam qualquer estado entre 
uma execução e outra. No entanto, elas podem acessar serviços
externos, como bancos de dados e serviços de envio de e-mail.

* Elas executam por um intervalo de tempo máximo, normalmente, da 
ordem de alguns minutos. Após esse intervalo, elas são automaticamente
encerradas pela plataforma de cloud.

* Elas podem ser implementadas em uma variedade de linguagens de 
programação.

##### Exemplo {.unnumbered}

A Netlify é uma empresa de cloud que oferece um serviço serverless.
A seguir mostramos um exemplo de função serverless para a
plataforma de cloud dessa empresa:

```
exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: "Hello, World"
  };
};
```

Como pode ser visto, a função retorna um objeto com dois campos:
o primeiro é o código de status da chamada, no caso igual a 200,
o que sinaliza que a requisição foi processada com sucesso; o segundo
é o corpo da resposta, o qual corresponde à string "Hello, World"

Pode-se chamar essa função por meio da seguinte URL:

[https://functions.netlify.com/.netlify/functions/hello](https://functions.netlify.com/.netlify/functions/hello)

Concluindo, para adotar uma arquitetura serverless, um cliente da 
Netlify deve implementar um conjunto de funções semelhantes a essa 
que acabamos de mostrar e copiá-las para sua conta na plataforma. 

Na seguinte [página](https://functions.netlify.com/playground/), 
você encontra outros exemplos de funções serverless.


## Comentários Finais {.unnumbered}

Para explicar as vantagens de serverless, os autores de um 
[artigo](https://m-cacm.acm.org/magazines/2021/5/252179-what-serverless-computing-is-and-should-become/fulltext)
publicado em maio de 2021 na revista Communications da ACM
fazem uma comparação interessante entre esse tipo de arquitetura
e linguagens de programação de alto nível:

> Assim como linguagens de programação de alto nível ocultam os detalhes 
de como uma CPU opera, arquiteturas serverless ocultam diversos detalhes 
relativos à construção de sistemas distribuídos confiáveis, escalonáveis
e seguros.

Por outro lado, uma arquitetura serverless também possui 
desvantagens, tais como:

* Complexidade de gerenciar uma arquitetura constituída por um
grande número de pequenas funções. Na verdade, cada função
serverless é uma aplicação autônoma, no sentido de que ela
deve importar todas as dependências necessárias para a sua 
execução. Isso inclui bibliotecas de terceiros e também
outros módulos da aplicação, como módulos de domínio.

* Maior latência, principalmente na primeira execução de uma 
função serverless. Essa latência adicional deve-se à necessidade
de criar um container para executar uma função serverless
e, em seguida, copiar o código da função para o container criado. 
Só então a função é executada. A literatura de serverless refere-se 
a esse problema como **problema da partida a frio** (*cold start 
problem*). Ele é mais crítico na primeira execução de uma função, 
pois depois o container pode ser mantido em cache por um certo tempo.

* Riscos de alto acoplamento com a plataforma de cloud, tornando mais 
difícil uma mudança para uma outra plataforma. Esse  problema é 
chamado de **dependência de fornecedores** (*vendor lock-in*).
Analisando a função de exemplo acima, esse problema pode não ficar 
claro, pois seu código parece bastante com uma função normal 
em JavaScript. Porém, o acoplamento com a plataforma 
de cloud surge quando a função serverless faz uso de outros serviços 
oferecidos pela plataforma, como autenticação, filas de mensagens, 
logging, bancos de dados, etc.

Antes de concluir, é importante mencionar que é possível, também, 
ter uma arquitetura híbrida, na qual apenas alguns serviços são
implementados por meio de funções serverless.

## Exercícios  {.unnumbered}

1. Quando usamos serverless não precisamos nos preocupar com 
   as questões abaixo, EXCETO:

   a. Planejamento de capacidade
   b. Balanceamento de carga
   c. Escalabilidade
   d. Tolerância a falhas
   e. Persistência de dados
 
2. Por que o termo serverless não deve ser interpretado de forma literal, 
isto é, como sendo sinônimo de computação "sem servidores"?

3. Suponha uma agenda de compromissos construída usando-se uma arquitetura
baseada em funções serverless. Mostra-se abaixo uma das funções dessa
aplicação, a qual retorna todos os compromissos inseridos na agenda
(esse código foi copiado do seguinte
[repositório](https://github.com/pmuens/serverless-book)). Qual a 
desvantagem de serverless, conforme discutido na seção final do artigo, 
fica mais clara ao analisarmos o código dessa função? Justifique brevemente 
sua resposta.

```
'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports = (event, callback) => {
  const params = {
    TableName: 'todos',
  };

  return dynamoDb.scan(params, (error, data) => {
    if (error) {
      callback(error);
    }
    callback(error, data.Items);
  });
};
```

4. Analise e estude os diagramas de sequência mostrados nas figuras 
1 e 2 da página 4 do seguinte 
[artigo](https://www.doc.ic.ac.uk/~rbc/papers/fse-serverless-17.pdf).
Eles são de uma aplicação que inicialmente estava implementada 
usando uma arquitetura monolítica (figura 1) e que então foi migrada 
para usar funções serverless (figura 2). Basicamente, a funcionalidade 
mostrada permite que um usuário faça o upload de um arquivo e solicite 
a sua conversão para um outro formato (pdf, svg, etc). Em seguida,
responda:

    (a) Qual dos dois diagramas é mais simples e fácil de entender? 
    Justifique sua resposta.

    (b) Descreva uma diferença importante entre os dois diagramas. Ou seja, 
    descreva uma  mudança relevante que teve que ser realizada na estrutura 
    original da aplicação (mostrada na figura 1) para torná-la adequada 
    para  uma arquitetura baseada em serverless (conforme mostrado na 
    figura 2). Justifique sua resposta. 

  
* * * 

Voltar para a lista de [artigos](./artigos.html).
