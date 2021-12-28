# Perguntas Frequentes sobre Arquitetura de Software {.unnumbered}

Neste artigo, respondemos perguntas sobre temas relacionados com 
arquitetura de software e que não são abordados no 
[Capítulo 7](../cap7.html) do livro. 

Segue a lista atual de perguntas:

1. [O que é uma camada de domínio?](#o-que-%C3%A9-uma-camada-de-dom%C3%ADnio)
2. [O que é um sistema multi-tenant?](#o-que-%C3%A9-um-sistema-multi-tenant)
3. [O que é um servidor stateless?](#o-que-%C3%A9-um-servidor-stateless)


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


* * * 

Voltar para a lista de [artigos](./artigos.html).
