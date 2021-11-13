# Estudo de Caso: PIX no Banco X {.unnumbered}

## Introdução {.unnumbered}

Neste artigo, iremos descrever a organização de um time 
ágil -- ou [squad](./squads.html) -- que segue um método semelhante a 
[Scrum](../cap2.html#scrum). Nosso objetivo é explicar a composição 
desse squad hipotético, isto é, comentar sobre os principais profissionais 
que fazem parte dele e sobre as suas responsabilidades e tarefas.

**Contexto:** Vamos assumir que o squad trabalha em um banco hipotético,
chamado Banco X. Após a regulamentação do PIX pelo Banco Central,
o Banco X deseja implementar e disponibilizar esse serviço de transferência 
online. E nosso squad ficou responsável por essa implementação, já que 
ele cuida dos demais tipos de transferência do banco, tais como 
TED e DOC.

**Importante:** objetivo deste artigo é didático. Portanto, o Banco X
e o nosso squad são hipotéticos. Além disso, fizemos algumas
simplificações para tornar o exemplo compacto e mais fácil de entender.

## Composição do Squad {.unnumbered}

Vamos assumir que o squad de exemplo é formado por:

* 1 Project Owner (PO)
* 1 UI/UX Designer
* 1 Desenvolvedor Frontend
* 1 Desenvolvedor Mobile 
* 2 Desenvolvedores Backend
* 1 Scrum Master

A seguir comentamos sobre as responsabilidades e tarefas desses 
profissionais, sempre no contexto da implementação do nosso serviço 
de PIX no Banco X.

#### Product Owner (PO) {.unnumbered}

Às vezes chamado também de 
[Product Manager (PM)](./processos-faq.html#qual-a-diferen%C3%A7a-entre-product-owner-po-e-product-manager-pm),
cabe a esse profissional estudar e entender os requisitos para operação do 
PIX, definidos pelo Banco Central. Para isso, o PO conta com o apoio das 
áreas de negócio do banco, incluindo analistas financeiros, analistas 
bancários, contadores, pessoal de marketing, etc. 

Em seguida, o PO deve explicar para o time como o PIX funciona e "o que" 
deve ser implementado. Deve também explicar o cronograma do projeto,
pois existe uma data para o PIX entrar no ar.

Adicionalmente, deve propor e escrever as principais 
[histórias de usuários](../cap3.html#hist%C3%B3rias-de-usu%C3%A1rios)
e também, muito importante, definir os testes de aceitação
das mesmas.

Por fim, deve tirar dúvidas dos desenvolvedores durante a implementação 
do projeto.

#### UI/UX Designer {.unnumbered}

Esse profissional também deve entender bem os requisitos do PIX. Uma fez 
feito isso, ele deve observar e entrevistar possíveis usuários, incluindo 
clientes do banco e, talvez, também aqueles que ainda não são clientes.

Como resultado, ele deve criar um protótipo de interface com o usuário (UI),
usando mockups, wireframes, etc e ferramentas como Figma. Por fim, deve 
testar e validar esses protótipos, sempre com usuários.

#### Desenvolvedores Frontend e Mobile {.unnumbered}

Esses desenvolvedores vão implementar a interface projetada pelo UI/UX 
designer. Para isso, podem usar frameworks como React (no caso da versão
Web) e React Native ou Flutter (no caso da versão mobile).

Eles podem também sugerir e participar de testes com usuários, os quais
serão mais uma vez acompanhados pelo  UI/UX designer. E, não menos 
importante, podem implementar 
[testes end-to-end](../cap8.html#testes-de-sistema), usando frameworks 
como o Cypress.

#### Desenvolvedores Backend {.unnumbered}

Esses desenvolvedores vão implementar a "lógica" do PIX no Banco X,
incluindo regras de negócio, persistência em bancos de dados, protocolos de 
comunicação com o Banco Central e outros bancos, etc.

Eles devem pensar e garantir que essa implementação atende a 
[requisitos não-funcionais](../cap3.html#introdu%C3%A7%C3%A3o), 
tais como segurança, privacidade, disponibilidade, desempenho, etc. 
E também implementar 
[testes de unidade](../cap8.html#testes-de-unidade) e de 
[integração](../cap8.html#testes-de-integra%C3%A7%C3%A3o).

#### Scrum Master {.unnumbered}

Às vezes chamado de Agile Master ou Agile Coach, cabe a esse profissional 
acompanhar a implementação do PIX e ajudar o time a seguir o processo 
de desenvolvimento do banco.

Ele deve organizar e facilitar os eventos de um sprint, tais como 
reuniões de planejamento, reuniões diárias, revisão e retrospectiva. E, 
sempre, atuar como um 
[líder servidor](./processos-faq.html#em-scrum-o-que-%C3%A9-um-l%C3%ADder-servidor), ajudando o time a remover impedimentos não-técnicos que, inevitavelmente, 
vão surgir durante a implementação.

#### Outros Profissionais {.unnumbered}

Além daqueles mencionados, outros profissionais podem contribuir com a 
implementação do PIX no Banco X, incluindo:

* Engenheiro de Infraestrutura (ou 
[DevOps](../cap10.html)): cabe a esse profissional
definir onde o serviço de transferência vai rodar. Por exemplo, na nuvem 
ou localmente. Ele deve também garantir, planejar e cuidar para que o 
Banco X tenha infraestrutura adequada para operar o serviço com segurança, 
desempenho, disponibilidade, etc. 

* QA ("Quality Assurance"): algumas empresas possuem profissionais 
dedicados para garantia de qualidade. Eles podem ajudar o PO a 
escrever testes de aceitação e também executar tais testes e 
validações ao final dos sprints.

## Como Começar? Workshop de Inception {.unnumbered}

Antes de começar a rodar os sprints, pode-se realizar um workshop
com todos os membros do time e alguns stakeholders importantes 
do projeto. Em um projeto dessa complexidade, esse 
workshop -- normalmente chamado de inception -- pode durar alguns 
dias.

Os principais objetivos do encontro são os seguintes: definir o 
escopo e cronograma do projeto; definir as principais tarefas e 
histórias de usuários; identificar e mapear riscos e obstáculos; 
criar a primeira versão do 
[backlog do produto](../cap2.html#principais-artefatos-e-eventos)
e definir os objetivos dos primeiros sprints.

Terminado o workshop de inception, os sprints podem começar!

## Exercícios {.unnumbered}

1. Defina três histórias de usuários do projeto PIX no Banco X.

2. Suponha que o projeto PIX no Banco X foi concluído com sucesso. 
Meses depois, o Banco Central baixou a seguinte regra: transferências 
via PIX entre 20:00 e 06:00 devem obedecer ao limite de R$ 1.000,00. 
Qual seria o papel de cada membro do time na implementação dessa 
nova regra? Descreva de forma simplificada. 

* * * 

Voltar para a lista de [artigos](./artigos.html).