

# Perguntas Frequentes sobre Métodos Ágeis {.unnumbered}

O objetivo deste artigo é responder perguntas 
sobre temas relacionados com métodos ágeis e que não são
abordados no [Capítulo 2](https://engsoftmoderna.info/cap2.html) do livro. 

A lista atual de perguntas está organizada em quatro grandes temas:

##### Perguntas gerais sobre métodos ágeis {.unnumbered}

 1. [Quando surgiram os conceitos de métodos ágeis?](#quando-surgiram-os-conceitos-de-m%C3%A9todos-%C3%A1geis)
 2. [O que é mob programming?](#o-que-%C3%A9-mob-programming)
 
##### Perguntas sobre Scrum {.unnumbered}

 3. [Além de histórias, quais outros itens podem fazer parte do backlog do produto?](#al%C3%A9m-de-hist%C3%B3rias-quais-outros-itens-podem-fazer-parte-do-backlog-do-produto)
 4. [Histórias devem ser sempre estimadas em story points?](#hist%C3%B3rias-devem-ser-sempre-estimadas-em-story-points)
 5. [Story points devem sempre seguir os valores de uma sequência de Fibonacci?](#story-points-devem-sempre-seguir-os-valores-de-uma-sequ%C3%AAncia-de-fibonacci)
 6. [Posso estimar histórias de usuários em horas? ](#posso-estimar-hist%C3%B3rias-de-usu%C3%A1rios-em-horas)
 7. [O que é grooming?](#o-que-%C3%A9-grooming)
 8. [ Em Scrum, o que é um líder servidor?](#em-scrum-o-que-%C3%A9-um-l%C3%ADder-servidor)
 9. [Qual a diferença entre Product Owner (PO) e Product Manager (PM)?](#qual-a-diferen%C3%A7a-entre-product-owner-po-e-product-manager-pm)
10. [Qual a diferença entre *Definition of Ready* e *Definition of Done*?](#qual-a-diferen%C3%A7a-entre-definition-of-ready-e-definition-of-done)

##### Perguntas sobre Kanban {.unnumbered}

 11. [É possível voltar com o cartão em um quadro Kanban?](#%C3%A9-poss%C3%ADvel-voltar-com-o-cart%C3%A3o-em-um-quadro-kanban)
 12. [Em Kanban, o que são classes de serviços?](#em-kanban-o-que-s%C3%A3o-classes-de-servi%C3%A7os)
 13. [O que é um fluxo de valor?](#o-que-%C3%A9-um-fluxo-de-valor)

##### Perguntas sobre Organização de Times Ágeis {.unnumbered}
 
 14. [O que faz um Líder Técnico?](#o-que-faz-um-l%C3%ADder-t%C3%A9cnico-tech-lead)
 15. [Qual a diferença entre times orientados por projeto e por produto?](#qual-a-diferen%C3%A7a-entre-times-orientados-por-projeto-e-por-produto)

Segue a lista de perguntas e suas respostas.

* * * 

### 1. Quando surgiram os conceitos de métodos ágeis? {.unnumbered}

Usualmente, costuma-se dizer que foi em fevereiro de 2001, com o
lançamento do [Manisfesto Ágil](http://agilemanifesto.org/).

Porém, não podemos achar que tudo foi inventado na
reunião realizada em uma estação de esqui no estado de
Utah (EUA), com duração de três dias.

Mesmo antes de 2001, existiram trabalhos importantes
na área, conforme datado a seguir:

- 1989: primeiro framework de testes de unidade, chamado SUnit, implementado por Kent Beck para Smalltalk.
- 1992: primeira tese de doutorado sobre refactoring, de autoria de William Opdyke.
- 1995: primeira versão de Scrum (veja o [paper](http://www.jeffsutherland.org/oopsla/schwapub.pdf), de autoria de Ken Schwaber).
- 1999: primeira edição do livro sobre XP, por Kent Beck.

E após fevereiro de 2001 também temos trabalhos importantes que influenciaram
na difusão das ideias ágeis, tais como:

- 2001: primeiro servidor de integração contínua, chamado CruiseControl, implementado por desenvolvedores da ThoughWorks.
- 2002: primeira edição do livro sobre TDD, por Kent Beck.
- 2004: primeira vez que Kanban foi usado em desenvolvimento 
de software, por David J. Anderson, na época trabalhando na Microsoft.
- 2009: primeira conferência sobre DevOps, organizada por Patrick Dubois.
- 2011: publicação do livro Lean Startup, de Eric Ries.


### 2. O que é mob programming? {.unnumbered}

*Mob programming* pode ser vista como uma extensão da ideia de
programação em pares. Ou seja, em vez de duas pessoas programarem
juntas, em *mob programming* temos um time inteiro trabalhando 
em uma mesma tarefa de programação. No entanto, recomenda-se que o
tamanho desse time seja limitado a quatro ou cinco pessoas,
incluindo desenvolvedores, mas também POs e outros profissionais.
Um deles é chamado de piloto (*driver*) e comanda o teclado; os demais são os 
navegadores. Cabe aos navegadores propor e discutir ideias e 
auxiliar o piloto a codificá-las. 

Veja como Woody Zuill -- um dos principais proponentes do conceito de 
*mob programming* -- descreve a iteração entre navegadores e piloto:

> É importante que os navegadores se expressem no nível de abstração
mais alto que o piloto (e o resto da equipe) seja capaz de entender. 
Às vezes, isso pode ocorrer de forma genérica, quando o piloto já 
entendeu o conceito que será codificado e pode prosseguir sem 
necessidade de instruções detalhadas. Por outro lado,
se necessário, os navegadores devem ser capazes de se expressar de 
forma detalhada, praticamente ditando os comandos que deverão 
ser digitados pelo piloto.

Se a sessão for realizada de forma presencial, um projetor 
multimídia deve ser usado para facilitar a participação dos navegadores.
Esses últimos podem usar também laptops próprios para realizar 
pesquisas ou outras tarefas em paralelo. Já no caso de sessões
de *mob programming* remotas, o piloto pode compartilhar sua 
tela com os navegadores.

Assim como em programação em pares, deve-se periodicamente fazer um 
rodízio do piloto. Normalmente, esse rodízio ocorre em intervalos
curtos, por exemplo, de 15 minutos. 

*Mob programming* pode ser usada para integrar o time, para aprendizado 
em grupo, para disseminação de conhecimento e evitar a formação de
silos, etc. 

### 3. Além de histórias, quais outros itens podem fazer parte do backlog do produto? {.unnumbered}

Quando se usa Scrum, histórias de usuários -- ou seja, 
features ou requisitos funcionais do sistema -- são o principal 
item do backlog do produto.

No entanto, outros itens também podem ser incluídos no 
backlog do produto, tais como:

* Solicitações de correção de bugs, principalmente bugs 
importantes e que levarão mais tempo para serem corrigidos.

* Manutenções adaptativas, como, por exemplo, migrar o 
sistema para uma versão mais nova de um framework, banco 
de dados ou linguagem de programação.

* Refatorações grandes e importantes, bem como outras 
atividades para pagamento de Débito Técnico.

* Instalação ou configuração de algum sistema ou framework
mais complexo, como um banco de dados.

Resumindo, conforme afirmado no Scrum Guide, qualquer 
trabalho que é "necessário para melhorar o produto" pode 
ser incluído no backlog do produto. 

Por outro lado, se temos uma tarefa técnica, como as descritas
acima, mas que tem uma complexidade pequena, ela pode ir direto 
para o backlog de um determinado sprint. Por último, se a tarefa 
é bastante simples, nem para o backlog do sprint ela precisa ir...
Basta que algum desenvolvedor a realize e pronto.

### 4. Histórias devem ser sempre estimadas em story points? {.unnumbered}

Não necessariamente. Por exemplo, o Guia do Scrum não inclui 
menção explícita ao uso de story points e apenas afirma o 
seguinte:

> Os desenvolvedores que farão o trabalho são responsáveis pelo 
seu dimensionamento.

Logo, um time pode optar por outras escalas, por exemplo:

* Uma escala com apenas três tamanhos, isto é, histórias pequenas, 
médias e grandes.
* Uma escala com cinco tamanhos, isto é, histórias super pequenas, 
pequenas, médias, grandes e super grandes.
* etc

### 5. Story points devem sempre seguir os valores de uma sequência de Fibonacci? {.unnumbered}

Não precisamos obrigatoriamente usar Fibonacci para a escala de 
valores de story points, isto é: 1,2,3,5,8,13,21...

Por outro lado, é importante dizer que uma escala com incrementos
de 1 também não é recomendável, isto é: 1,2,3,4,5,6,7,8,9,... O motivo 
é que as estimativas de histórias não são totalmente precisas. 
Logo, é difícil justificar que uma história tem tamanho 9, por 
exemplo, em vez de 8 ou 10. Essa diferença é muito pequena, 
considerando o nível de conhecimento e de informações que 
temos sobre as histórias no início de um sprint.

### 6. Posso estimar histórias de usuários em horas? {.unnumbered}

Sim, histórias podem ser estimadas em unidades de tempo, 
tais como horas ou homens/hora, por exemplo.

Por outro lado, os defensores de story points argumentam 
que o maior problema de usar medidas de tempo é que existem 
sempre dois "tempos": o tempo ideal e o tempo consumido (*elapsed*). 
Explicando melhor, quando alguém afirma que vai implementar 
uma história em um dia (tempo ideal), ele pode na verdade 
levar um pouco mais. O motivo é que sempre vão ocorrer 
interrupções, tais como reuniões, bugs críticos para corrigir, 
compromissos pessoais, idas ao médico, etc. Muitas vezes, 
essa diferença entre tempo ideal e tempo consumido pode acabar 
gerando um mal-entendido. Algo assim: você prometeu que ia 
fazer isso em um dia, mas já se passaram dois dias e você 
não entregou ainda!

Por exemplo, em seu livro Scrum Essencial, Kenneth Rubin 
afirma o seguinte:

> Não há uma resposta certa ou errada sobre o uso de story 
points e dias ideais. No entanto, um argumento importante 
contra o uso do tempo ideal consiste no risco de 
mal-entendidos.

E o autor conclui com o exemplo de um jogo de futebol 
americano, que tem quatro tempos de 15 minutos, ou seja, 
uma hora ideal. Apesar disso, uma partida de futebol 
americano dura, quase sempre, mais de três horas.


### 7. O que é grooming? {.unnumbered}

O termo grooming designa as atividades realizadas com o propósito de "cuidar" do backlog do
produto. Portanto, são atividades que devem ser lideradas pelo Product 
Owner (PO), mas com a colaboração dos demais membros do time. Dentre essas
atividades, podemos mencionar as seguintes: descobrir, criar, estimar, 
priorizar, remover, refinar, entender, especificar ou particionar 
histórias de usuários. 
Alguns autores, como Kenneth Rubim, no livro Scrum Essencial, sugerem 
que 10% do tempo dos membros de um time Scrum deve ser alocado para 
atividades de grooming. Ou seja, cerca de 4 horas semanais. No entanto, não 
existe um evento ou momento específico para realização do grooming. 
Ele pode ser realizado, por exemplo, em reuniões específicas 
convocadas pelo PO.


### 8. Em Scrum, o que é um líder servidor? {.unnumbered}

Scrum usa esse termo para descrever o estilo de liderança que deve ser
exercido por um Scrum Master. Ou seja, o Scrum Master não é o "chefe"
de um time Scrum, que lidera dando ordens, cobrando tarefas e prazos, etc.
Em vez disso, ele é apenas mais um membro do time, que procura prestar 
serviços para o PO, para os desenvolvedores e também para a organização. 
Na versão mais recente do Scrum Guide (2020), o papel de um Scrum Master é 
assim resumido: "eles são líderes verdadeiros, que servem tanto o time 
Scrum, quanto a organização maior [na qual o time está inserido]."


### 9. Qual a diferença entre Product Owner (PO) e Product Manager (PM)? {.unnumbered}

Esta é uma pergunta difícil, pois o uso dos termos varia de empresa 
para empresa e também evolui rapidamente com o tempo.

Mas, primeiro, vamos comentar sobre o que os dois cargos têm em comum: 
tanto um PO como um PM devem entender profundamente dos problemas 
e das "dores" dos clientes. E devem ser capazes de definir, 
priorizar e explicar para os desenvolvedores "o que" deve ser 
implementado. Devem também estar sempre disponíveis para tirar dúvidas.

Sobre as diferenças, gostamos de explicá-las destacando as origens 
dos termos. Conforme estudamos no [Capítulo 2](https://engsoftmoderna.info/cap2.html#scrum), 
PO é um termo de Scrum e ele tem responsabilidades muito claras nesse 
framework. Já PM é um termo que tem suas origens e maior uso em empresas 
que desenvolvem produtos digitais, incluindo software. Nelas, 
o PM deve se preocupar também com o posicionamento estratégico 
do produto no mercado e com variáveis como número de clientes, 
engajamento, taxas de cancelamento, etc.

### 10. Qual a diferença entre *Definition of Ready* e *Definition of Done*? {.unnumbered}

Essas definições dizem respeito ao estado de uma história de usuário. E a diferença entre elas é a seguinte:

* *Ready*: quando a história está pronta para ser implementada em um sprint. Por exemplo, ela já foi refinada pelo PO, discutida com as áreas de negócio, os  testes de aceitação foram especificados, etc.

* *Done*: quando a implementação de uma história está concluída, isto é, ela já passou pelos testes, revisão de código, etc. Na verdade, o time deve definir internamente quais são os critérios para considerar uma história *done*, conforme
discutimos no [Capítulo 2](https://engsoftmoderna.info/cap2.html#principais-artefatos-e-eventos).

Ou seja, *ready* indica que estamos prontos para começar a implementação de uma história, se o PO assim desejar. E *done* indica que essa implementação foi integralmente terminada e, portanto, já pode entrar em produção, se o PO assim desejar.

### 11. É possível voltar com o cartão em um quadro Kanban? {.unnumbered}

Explicando melhor: suponha um quadro com passos Especificação,
Implementação e Revisão. Suponha ainda que -- no passo de revisão
-- detectou-se que uma tarefa foi especificada (e implementada)
de forma errada. O que deve-se fazer?

Nesse caso, e principalmente se o erro foi grave e demandará
um bom tempo para ser corrigido, não existe alternativa, 
a não ser voltar com o cartão que descreve a tarefa para o 
passo de especificação, para que ela seja re-especificada e 
re-implementada, agora de forma correta.


### 12. Em Kanban, o que são classes de serviços? {.unnumbered}

Classes de serviços é um conceito de Kanban que possibilita
que tarefas diferentes sejam trabalhadas de forma diferente. Por exemplo, 
costuma-se definir quatro classes de serviços: (1) normal, (2) com deadline, 
(3) urgente e (4) intangível. Feito isso, toda tarefa que chega para 
o time deve ser alocada em uma dessas classes de serviço. Se 
pensarmos nos cartões que descrevem a tarefa, eles devem ter cores 
diferentes, em função de suas classes de serviço.

Cada classe de serviço pode ter seu próprio fluxo de trabalho. 
Particularmente, os limites WIP podem ser específicos para cada 
classe de serviço. E algumas classes de serviços podem "pular" 
certos passos do fluxo. Por exemplo, uma tarefa classificada como 
urgente pode dispensar o passo de revisão. 

Para entender melhor o conceito, você pode imaginar que 
classes de serviço são "pistas horizontais" em um quadro Kanban. 
Ou seja, o conceito lembra as pistas exclusivas que existem 
em determinadas avenidas para ônibus, ambulâncias, bicicletas, etc.

### 13. O que é um fluxo de valor? {.unnumbered}

Fluxo de valor (*value stream*) é um termo que tem sua origem 
e inspiração em princípios de Manufatura Lean. Suponha, por 
exemplo, uma fábrica que produz um produto X. Os passos necessários 
para produzir X nessa fábrica -- ou seja, para gerar valor para a 
fábrica e para seus clientes -- constituem um fluxo de valor.

O conceito pode ser adaptado para o contexto de processos de 
software. Nesse caso, um fluxo de valor inclui os passos necessários 
para desenvolver uma determinada funcionalidade em um sistema, 
começando do momento em que ela foi requisitada  até o momento em 
que ela de fato tornou-se disponível para uso.

Adeptos de Kanban e de processos de desenvolvimento Lean
recomendam um mapeamento cuidadoso de fluxos de valores.
Argumenta-se que isso permite entender bem o processo de
desenvolvimento de uma organização, para então otimizá-lo e 
também para evitar desperdícios de tempo e recursos.

Após terem sido mapeados, entendidos e otimizados, os passos
de um fluxo de valor devem corresponder, então, aos passos
de um Quadro Kanban. Isso é sugerido, por exemplo, por
Mary Poppendieck em um tutorial sobre desenvolvimento Lean: 
"em um sistema Kanban, o fluxo de valor é mapeado em um quadro 
com colunas para cada um dos seus passos" (veja 
[artigo](https://doi.org/10.1109/MS.2012.107)).

### 14. O que faz um Líder Técnico (Tech Lead)? {.unnumbered}

Métodos ágeis não fazem distinção entre os desenvolvedores de um time. 
Por exemplo, o Guia do Scrum diz explicitamente que não devem existir sub-times ou 
hierarquias em um time. Porém, na prática, sabemos que os desenvolvedores têm 
níveis de experiência e conhecimento diferentes sobre o sistema que estão 
implementando ou mantendo. Além disso, existem tarefas que exigem maior 
responsabilidade, tais como: 

* Implementar histórias mais complexas ou críticas.
* Definir e evoluir a arquitetura do sistema.
* Treinar e prover mentoria para desenvolvedores júnior.
* Monitorar o montante de débito técnico no sistema.
* Escolher novas tecnologias, como bibliotecas e frameworks.
* Explicar as decisões técnicas adotadas para os níveis superiores 
da empresa (por exemplo, CTO, CEO, etc).
* Ajudar na contratação de novos desenvolvedores.

Então, para assumir essas tarefas de maior responsabilidade, algumas empresas 
têm em seus times a figura de um **Líder Técnico (Tech Lead)**. 
No entanto, como o próprio nome diz, o Líder Técnico não é o chefe do time e, 
portanto, ele não deve ser o controlador de todas as tarefas dos demais 
desenvolvedores.

### 15. Qual a diferença entre times orientados por projeto e por produto? {.unnumbered}

Vamos responder discorrendo sobre cada um dessas formas de organização de times.

**Times orientados por projeto**

Recomenda-se ter times orientados por projeto quando 
o escopo e as funcionalidades do sistema que será desenvolvido 
estão bem definidos. Ou seja, "o que" o sistema deve fazer está 
claro. Logo, a função principal do time é implementar as 
funcionalidades requeridas pelos clientes. Isso não impede que 
exista um PO ("Product Owner") que vai funcionar como uma ponte 
entre os clientes e os desenvolvedores do time.

Os projetos têm sempre uma duração bem definida. Após o seu 
término, o sistema é entregue ao contratante, que assume sua 
manutenção e evolução. O time pode então migrar para
outro projeto.

**Times orientados por produto**

Recomenda-se ter times orientados por produto quando os 
requisitos do sistema que será desenvolvido não são claros. 
Um time orientado por produto recebe como entrada um problema 
e deve "descobrir" o melhor sistema que vai solucioná-lo. 
Assim, o time tem autonomia para definir as funcionalidades 
do sistema. 

Técnicas como [Design Thinking](https://engsoftmoderna.info/artigos/design-thinking.html),
[MVPs](https://engsoftmoderna.info/artigos/mvp.html) e 
[Testes A/B](https://engsoftmoderna.info/cap3.html#testes-ab) são frequentemente usadas por 
times orientados por produto. Também já está acordado que 
os times vão manter e evoluir o sistema desenvolvido, 
normalmente por anos, até que ele seja descontinuado.

Normalmente, um time orientado por produto desenvolve um sistema 
para clientes externos. No entanto, os clientes podem ser também 
internos à organização. Por exemplo, suponha que uma empresa 
desenvolve um produto X para clientes externos. Porém, um time 
dessa organização pode ser responsável por desenvolver internamente 
um produto Y, que facilita a implantação de X em plataformas de 
computação em nuvem.

**Resumo**

Não existe uma organização de times melhor do que a outra. No 
entanto, times orientados por projeto devem ser usados quando
o problema a ser resolvido é bem conhecido, assim como a 
solução (sistema) a ser implementada. É importante também que 
essa solução demande poucas manutenções, principalmente 
manutenções evolutivas.

Normalmente, os times de fábricas ou agências de software são 
orientados por projeto. Já empresas de tecnologia -- cujo 
principal negócio são sistemas ou serviços de software -- 
possuem times orientados por produto.


* * * 

```{=html}
<p>Voltar para a <a href="https://engsoftmoderna.info">página principal</a>.</p>
```
