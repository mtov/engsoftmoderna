

# Perguntas Frequentes sobre Arquitetura de Software {.unnumbered}

Neste artigo, respondemos perguntas sobre temas relacionados com 
arquitetura de software e que não são abordados no 
[Capítulo 7](https://engsoftmoderna.info/cap7.html) do livro. 

Segue a lista atual de perguntas:

1. [O que é uma camada de domínio?](#o-que-%C3%A9-uma-camada-de-dom%C3%ADnio)
2. [O que é um sistema multi-tenant?](#o-que-%C3%A9-um-sistema-multi-tenant)
3. [O que é um servidor stateless?](#o-que-%C3%A9-um-servidor-stateless)
4. [O que é o Teorema CAP?](#o-que-%C3%A9-o-teorema-cap)
5. [O que é o padrão Strangler Fig?](#o-que-%C3%A9-o-padr%C3%A3o-strangler-fig)
6. [O que é um orquestrador?](#o-que-%C3%A9-um-orquestrador)
7. [O que é escalabilidade vertical e horizontal?](#o-que-%C3%A9-escalabilidade-vertical-e-horizontal)

* * * 

### 1. O que é uma camada de domínio? {.unnumbered}

Esse termo, na prática, é usado para referenciar a camada de um 
sistema que trata da sua lógica de negócio. Por exemplo, se um 
sistema seguir uma [arquitetura com três camadas](https://engsoftmoderna.info/cap7.html#arquitetura-em-tr%C3%AAs-camadas), o domínio corresponde 
à camada do meio. Isto é, a camada que fica entre a camada
de interface com o usuário e a camada de persistência.

Muitas vezes, usa-se também o termo **modelo de domínio** 
(*domain model*), principalmente quando queremos focar no projeto 
da camada de domínio, por exemplo, quando queremos ressaltar
quais são as suas principais classes e interfaces. 

Se quiser saber mais sobre o camadas e modelos de domínio, você pode 
consultar nosso artigo sobre [Domain-Driven Design (DDD)](https://engsoftmoderna.info/artigos/ddd.html).

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

Esse teorema, conforme proposto por Eric Brewer, trata de cenários 
envolvendo bancos de dados distribuídos, como é comum, por exemplo, 
em arquiteturas baseadas em [microsserviços](https://engsoftmoderna.info/cap7.html#microsservi%C3%A7os).

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

### 5. O que é o padrão Strangler Fig? {.unnumbered}

Strangler Fig é um padrão para migração de sistemas legados para uma
nova tecnologia ou arquitetura. Especificamente, quando precisamos
"aposentar" um sistema X, podemos fazer isso de duas maneiras: 

* De uma só vez, isto é, podemos implementar um sistema substituto Y e 
então, em uma data definida, desligar X e ativar Y. Evidentemente, os
riscos dessa "virada única de chave" costumam ser altos.

* De forma gradativa. Por exemplo, suponha que o sistema X implementa 
funcionalidades X1, X2,..., Xn. Então, iremos implementar gradativamente 
funcionalidades equivalentes Y1, Y2,..., Yn, as quais serão ativadas de 
forma também gradual. Por exemplo, em um determinado momento, o sistema 
poderá ter a seguinte configuração: 

    [Y1, Y2, Y3]  [X4, X5, .., Xn]. 

     Ou seja, nesse momento da migração, Y1, Y2 e Y3 já são funcionalidades 
desenvolvidas na nova tecnologia ou arquitetura  e X4 a Xn ainda estão na 
versão legada.

O padrão de migração gradual, que comentamos acima, é chamado de 
**Strangler Fig**, pois a nova tecnologia ou arquitetura vai gradativamente 
"estrangulando" o sistema legado. O nome, proposto por Martin Fowler, é 
inspirado em um tipo específico de figueira, isto é, a árvore que produz 
a fruta figo. Dentre as várias espécies de figueira, existe uma que cresce 
em volta de uma árvore hospedeira e que vai gradativamente estrangulando-a. 
Você pode ver algumas fotos desse tipo de figueira na 
[Wikipédia](https://en.wikipedia.org/wiki/Strangler_fig).

Strangler Fig pode ser útil, por exemplo, quando planejamos migrar um
monolito para uma arquitetura baseada em microsserviços. O padrão,
também nesse caso, advoga que a migração deve ser gradual, isto é,
um microsserviço de cada vez.

### 6. O que é um orquestrador? {.unnumbered}

Frequentemente, uma operação de negócio deve ser executada em múltiplos
serviços ou microsserviços. Nesse contexto, chama-se de **orquestrador** 
o módulo que dispara essa execução e monitora os seus resultados.

Por exemplo, suponha que para cadastrar um aluno em uma faculdade temos
que cadastrá-lo em dois sistemas: acadêmico e financeiro. O programa 
responsável por disparar esses dois cadastros, monitorar se eles foram
concluídos com sucesso e tratar eventuais erros é chamado então de 
orquestrador da operação de cadastro de alunos.

### 7. O que é escalabilidade vertical e horizontal? {.unnumbered}

Suponha que você desenvolve um sistema que está fazendo
sucesso e atraindo cada vez mais usuários. Uma solução 
para melhorar o desempenho desse sistema consiste em 
migrar sua execução para uma máquina mais poderosa. 
Isso se chama de **escalabilidade vertical**.

Porém, pode ser que você já esteja rodando o sistema em uma 
máquina muito poderosa e que não seja mais possível 
ou economicamente viável aumentar o poder de processamento 
dessa máquina. Então, uma segunda solução consiste em 
dividir a execução do sistema em duas ou mais máquinas. 
E isso se chama de **escalabilidade horizontal**.

Se o sistema for um monolito, em um contexto de escalabilidade
horizontal, você deve ter a mesma instância do sistema 
rodando nas diversas máquinas. Por outro lado, se o sistema 
tiver sido desenvolvido usando microsserviços, você pode 
dividir os microsserviços pelas máquinas disponíveis. 
Ou seja, em uma determinada máquina você não executa todos 
os microsserviços, mas apenas alguns deles.



* * * 

```{=html}
<p>Voltar para a <a href="https://engsoftmoderna.info">página principal</a>.</p>
```
