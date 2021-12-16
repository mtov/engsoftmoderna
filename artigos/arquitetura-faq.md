# Perguntas Frequentes sobre Arquitetura de Software {.unnumbered}

Neste artigo, respondemos perguntas sobre temas relacionados com 
arquitetura de software e que não são abordados no 
[Capítulo 7](../cap7.html) do livro. 

Segue a lista atual de perguntas:

1. [O que significa o conceito de servidor stateless?](#o-que-significa-o-conceito-de-servidor-stateless)
2. [2. O que é uma arquitetura serverless?]()


* * * 


### 1. O que significa o conceito de servidor stateless? {.unnumbered}

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


### 2. O que é uma arquitetura serverless? {.unnumbered}

Para explicar, vamos começar com uma recapitulação histórica:

* Décadas atrás, as empresas tinham que ter servidores físicos para 
hospedar seus sistemas. Ou seja, além de comprar máquinas, elas
tinham que dispor de um espaço físico para elas.

* Em seguida, surgiram datacenters que hospedavam servidores físicos 
para terceiros. Com isso, não era preciso ter espaços próprios
para instalar máquinas e, consequentemente, não era preciso se 
preocupar com instalações elétricas, refrigeração, etc.

* Então, surgiram os sistemas de cloud oferecendo máquinas virtuais 
para as empresas contratantes. A partir desse momento, não era mais 
preciso comprar ou alugar máquinas físicas. Isso passou a ser 
uma responsabilidade das empresas de cloud, que alugavam (e alugam)
máquinas virtuais que rodam "em cima" de suas máquinas físicas. 

O conceito de serverless pode ser visto como a próxima evolução 
desse processo. Basicamente, a empresa contratante agora apenas 
implementa um conjunto de funções e faz o seu deployment em um 
sistema de cloud. Cada uma dessas funções possui um endpoint que é 
usado por aplicações clientes para solicitar a sua execução. 
Consequentemente, não existe mais aluguel de máquinas virtuais ou 
físicas e paga-se apenas pelo tempo de execução das funções 
mencionadas.

Funções serverless são stateless, isto é, elas não guardam qualquer 
estado entre uma execução e outra. E elas podem ser implementadas
em uma variedade de linguagens de programação.

* * * 

Voltar para a lista de [artigos](./artigos.html).
