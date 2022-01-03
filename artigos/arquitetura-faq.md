# Perguntas Frequentes sobre Arquitetura de Software {.unnumbered}

Neste artigo, respondemos perguntas sobre temas relacionados com 
arquitetura de software e que não são abordados no 
[Capítulo 7](../cap7.html) do livro. 

Segue a lista atual de perguntas:

1. [O que é uma camada de domínio?](#o-que-%C3%A9-uma-camada-de-dom%C3%ADnio)
2. [O que é um sistema multi-tenant?](#o-que-%C3%A9-um-sistema-multi-tenant)
3. [O que é um servidor stateless?](#o-que-%C3%A9-um-servidor-stateless)
4. [O que é o Teorema CAP?](#o-que-%C3%A9-o-teorema-cap)

* * * 

### 1. O que é uma camada de domínio? {.unnumbered}

Esse termo, na prática, é usado para referenciar a camada de um 
sistema que trata da sua lógica de negócio. Por exemplo, se um 
sistema seguir uma [arquitetura com três camadas](../cap7.html#arquitetura-em-tr%C3%AAs-camadas), o domínio corresponde 
à camada do meio. Isto é, a camada que fica entre a camada
de interface com o usuário e a camada de persistência.

Muitas vezes, usa-se também o termo **modelo de domínio** 
(*domain model*), principalmente quando queremos focar no projeto 
da camada de domínio, por exemplo, quando queremos ressaltar
quais são as suas principais classes e interfaces. 

Se quiser saber mais sobre o camadas e modelos de domínio, você pode 
consultar nosso artigo sobre [Domain-Driven Design (DDD)](./ddd.html).

### 2. O que é um sistema multi-tenant? {.unnumbered}

Um sistema multi-tenant ("multi-inquilino") é aquele que pode 
atender simultaneamente a diversos clientes. Por exemplo, suponha 
que você desenvolve um sistema para controle acadêmico de escolas. 
Então, naturalmente, você quer atender a diversas escolas, as quais 
vão pagar uma assinatura mensal para uso do seu sistema. Porém, você 
gostaria também de desenvolver, manter e colocar em produção uma 
única instância do sistema, a qual será acessada por todas as escolas. 
Quando isso ocorre, dizemos que o sistema possui uma arquitetura 
multi-tenant.

Por outro lado, se você tiver que manter instâncias de execução 
diferentes para cada cliente, o seu sistema é single-tenant.

Por que o conceito de multi-tenant é importante? Em muitos casos,
é fácil perceber que um sistema, desde o primeiro dia, deverá
ser multi-tenant. No entanto, em outros casos, isso não é tão claro. 
Por isso, quando for planejar a arquitetura de um sistema, 
sempre vale a pena avaliar a adoção de uma solução multi-tenant, 
mesmo que ela não seja necessária nos seus primeiros anos 
de vida.

Arquiteturas multi-tenant são apenas úteis em sistemas SaaS
("Software as a Service")? Não necessariamente. Um exemplo é
o Stack Overflow, que além do site principal, possui outros
sites de perguntas e respostas, por exemplo sobre Matemática,
Estatística, Teoria da Computação, Engenharia de Software, etc.
No entanto, as perguntas e respostas de todos eles são 
tratadas pela mesma instância do sistema. 


### 3. O que é um servidor stateless? {.unnumbered}

Antes de responder, é importante explicar que esse conceito se 
aplica a aplicações distribuídas construídas de acordo com uma
arquitetura cliente/servidor. Mais especificamente, aos servidores 
de tais aplicações.

Dizemos que um servidor é stateless quando ele não armazena 
qualquer informação sobre o estado de seus clientes. 
Consequentemente, as requisições dos clientes devem incluir 
todas as informações necessárias para o seu devido processamento 
pelo servidor.

Recomenda-se, por exemplo, que aplicações Web sejam stateless. 
Os motivos são pelo menos os seguintes: escalabilidade e 
confiabilidade, as quais são propriedades mais fáceis de serem 
conseguidas quando os servidores são stateless. A confiabilidade 
dos servidores melhora pelo simples fato de eles não terem que 
restaurar qualquer informação sobre os clientes após uma 
possível falha ou queda. A escalabilidade aumenta pelo fato de 
eles não precisarem armazenar nada sobre seus clientes. 
Por exemplo, após atender a uma requisição pode-se liberar 
todos os recursos que foram alocados durante o seu processamento.


### 4. O que é o Teorema CAP? {.unnumbered}

Esse teorema trata de cenários envolvendo bancos de dados 
distribuídos, como é comum, por exemplo, em arquiteturas baseadas 
em [microsserviços](../cap7.html#microsservi%C3%A7os).

Nesses cenários, sempre vai haver partições (P) entre os bancos de 
dados (BD). Por exemplo, suponha dois BDs, A e B, localizados 
em seus seus respectivos microsserviços. Logo, um problema de rede, 
pode fazer com que A não consiga se comunicar com B ou vice-versa.

Assumindo que partições vão ocorrer, o teorema CAP, de forma 
simplificada, diz que arquitetos de sistemas distribuídos têm que 
fazer uma escolha:

* Priorizar disponibilidade (*availabliliy* ou A), abrindo mão de 
consistência (C), pelo menos em certos casos. Explicando melhor, 
suponha que a versão mais nova de um dado está em A, mas uma partição 
na rede impede que ela seja propagada para B. Como o primeiro objetivo 
é  disponibilidade, o sistema vai entregar para os clientes de B a versão 
desatualizada do dado.

* Priorizar consistência (C) e abrir mão, quando for inevitável, 
de disponibilidade (A). O motivo é que para garantir consistência 
temos que adotar um protocolo (ou algoritmo) para propagar dados de A 
para B e vice-versa. Isto é, esse protocolo vai manter os dois BDs 
sincronizados. Mas, para isso, ele tem que "travar" um BD quando 
o outro não estiver disponível. Consequentemente, o BD travado não vai 
responder requisições de seus clientes para não entregar dados 
desatualizados ou inconsistentes.

Em resumo, o Teorema CAP afirma que, em um sistema com BDs distribuídos, 
vamos sempre ter partições de comunicação (P). Por isso, ao definir uma 
arquitetura distribuída, temos que fazer uma escolha: priorizar 
consistência (C) ou disponibilidade (A). Portanto, sistemas com dados 
distribuídos são AP ou CP, mas nunca CAP.

Sempre que possível, devemos optar por sistemas AP, pois eles são
mais fáceis de implementar e são também mais escaláveis. Por outro 
lado, em alguns cenários não podemos prescindir de consistência,
como pode ser o caso de sistemas bancários e financeiros.

* * * 

Voltar para a lista de [artigos](./artigos.html).
