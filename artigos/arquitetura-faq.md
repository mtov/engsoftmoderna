# Perguntas Frequentes sobre Arquitetura de Software {.unnumbered}

Neste artigo, respondemos perguntas sobre temas relacionados com 
arquitetura de software e que não são abordados no 
[Capítulo 7](../cap7.html) do livro. 

Segue a lista atual de perguntas:

1. [O que é uma camada de domínio?](#o-que-%C3%A9-uma-camada-de-dom%C3%ADnio)
2. [O que é um sistema multi-tenant?](#o-que-%C3%A9-um-sistema-multi-tenant)
3. [O que é servidor stateless?](#o-que-%C3%A9-um-servidor-stateless)
4. [O que é uma arquitetura serverless?](#o-que-%C3%A9-uma-arquitetura-serverless)


* * * 

### 1. O que é uma camada de domínio? {.unnumbered}

Esse termo, na prática, é usado para referenciar a camada de um 
sistema que trata da sua lógica de negócio. Por exemplo, se um 
sistema seguir uma [arquitetura com três camadas](../cap7.html#arquitetura-em-tr%C3%AAs-camadas), o domínio corresponde 
à camada do meio.

Muitas vezes, usa-se também o termo modelo de domínio 
(*domain model*). Isso ocorre quando o interesse principal está no 
projeto da camada de domínio, por exemplo, na interface pública de 
suas principais classes. 


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


### 4. O que é uma arquitetura serverless? {.unnumbered}

Para responder, vamos começar com um pouco de história:

* Até a década de 1990, as empresas tinham que comprar servidores 
físicos para hospedar seus sistemas. E também tinham que dispor de 
um espaço físico para acomodá-los.

* Então, surgiram datacenters que hospedavam servidores físicos 
para terceiros. Com isso, não era mais preciso ter espaços próprios
para instalar máquinas e, consequentemente, não era preciso se 
preocupar com instalações elétricas, refrigeração, acesso à 
Internet, etc.

* Então, no início dos anos 2000, surgiram os sistemas de cloud 
oferecendo máquinas virtuais para as empresas contratantes. Assim,
a compra ou aluguel de máquinas físicas deixou de ser obrigatória. 
Isso passou a ser responsabilidade das empresas de cloud, que 
começaram a alugar máquinas virtuais que executam "em cima" de suas 
máquinas físicas. 

O conceito de serverless pode ser visto como a próxima evolução 
desse processo. Basicamente, a empresa contratante agora apenas 
implementa um conjunto de funções e faz o seu deployment em um 
sistema de cloud. Portanto, não existe mais aluguel de 
máquinas, sejam elas virtuais ou físicas. Em vez disso, paga-se apenas 
pelo tempo de execução das funções mencionadas. Apenas quando ocorre um 
determinado evento ou chamada é que essas funções são 
carregadas, executadas e encerradas.

Logo, esse modelo de pagamento é semelhante ao de certos serviços 
utilitários, como energia elétrica. Por exemplo, você somente paga o 
que usa de eletricidade. Se não tiver nenhum uso no mês, sua conta 
também é zero. E se precisar aumentar o seu consumo, dentro de certos 
limites, você tem certeza de que a companhia de eletricidade irá 
conseguir prover a energia necessária.

Funções serverless têm, pelo menos, as seguintes características:
(1) elas são stateless, isto é, elas não guardam qualquer estado entre 
uma execução e outra; (2) elas somente podem executar por um intervalo de
tempo máximo, normalmente, da ordem de alguns minutos (após esse 
intervalo elas são automaticamente encerradas pela plataforma de cloud); 
(3) e elas podem ser implementadas em uma variedade de linguagens de 
programação.

O nome serverless explica-se então pelo fato de que os desenvolvedores
não precisam se preocupar com instalação, configuração e 
escalabilidade de servidores, sejam eles físicos ou virtuais.
Essas preocupações ficam delegadas para a plataforma de 
cloud.

Por fim, as principais desvantagens de serverless são as seguintes:
(1) a complexidade de gerenciar uma arquitetura constituída por um
grande número de pequenas funções autônomas; (2) os riscos de alto
acoplamento com uma determinada plataforma de cloud, tornando
difícil uma mudança para uma outra plataforma. Esse último 
problema é chamado de *vendor lock-in*.

* * * 

Voltar para a lista de [artigos](./artigos.html).
