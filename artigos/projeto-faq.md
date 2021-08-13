# Perguntas Frequentes sobre Projeto de Software {.unnumbered}

Neste artigo, respondemos perguntas sobre temas relacionados com projeto 
de software e que não são abordados nos capítulos 
[5](https://engsoftmoderna.info/cap5.html) e 
[6](https://engsoftmoderna.info/cap6.html) do livro. 


### 1. O que significa DRY (Don't Repeat Yourself)? {.unnumbered}

Este princípio de projeto foi enunciado pela primeira vez no 
livro *The Pragmatic Programmer*, de David Thomas e Andrew Hunt, 
de 1999. Ele recomenda o seguinte: 

> Qualquer tipo de conhecimento deve ter uma representação única, 
inequívoca e oficial em um sistema.

A forma mais fácil de entender DRY é pensando em termos
de código. Por exemplo, em um sistema nunca devemos ter duas funções
X e Y duplicadas, isto é, com exatamente o mesmo propósito. Isso é 
ruim por dois motivos principais: 

* Suponha que X tenha sido implementada primeiro; logo, o esforço para 
implementar Y foi desnecessário, pois já existia uma função idêntica 
no sistema. 

* Suponha que temos que realizar uma manutenção em X; logo, teremos 
que repetir esse esforço em Y. 

Porém, DRY não vale apenas para código, mas para qualquer conhecimento.
Por exemplo, às vezes temos um comentário (ou outra forma de documentação)
que apenas repete o que está no código. Nesse caso, talvez a refatoração
do código, com nomes e intenções mais claras, pode torná-lo auto-explicativo. 
Se isso acontecer, podemos remover o comentário.

Na verdade, na escrita do nosso livro procuramos praticar esse 
princípio. O livro tem três versões (HTML, e-book e PDF). Todas elas, 
no entanto, são geradas a partir de um mesmo arquivo fonte, escrito 
em Markdown. Se não fosse assim, qualquer pequena correção de português 
teria que ser repetida nos três formatos do livro.

Existem outros nomes para DRY. Por exemplo, no livro *The Art of Unix 
Programming*, Eric Raymond usa o termo SPOT (*Single Point of Truth*).

### 2. O que significa Separação entre Comandos e Queries? {.unnumbered}

Este princípio foi proposto por Bertrand Meyer, o mesmo autor do
princípio Aberto/Fechado (Open/Closed), que dá origem à letra "O"
dos princípios SOLID.

O Princípio da Separação entre Comandos e Queries advoga que devem 
existir duas categorias de métodos em uma classe:

* Comandos, que são métodos que não retornam valor (isto é,
retornam `void`), mas que possuem efeito colateral. Ou seja, 
eles *alteram* o estado do sistema. Por exemplo, eles gravam 
alguma informação no banco de dados, alteram um atributo da 
classe ou uma variável global, etc.

* Queries, que são métodos que apenas retornam valores, sem 
mudar o estado do sistema.

Então, o princípio recomenda que um método: (1) ou deve
ser um comando; (2) ou deve ser uma query. O que não é 
recomendável é que um método desempenhe ambos os papeis.

Ou seja, para ficar ainda mais claro: (1) um comando não
deve retornar valores; (2) uma query não deve ter efeitos
colaterais.

O objetivo do princípio é fomentar uma divisão clara entre 
essas duas categorias de métodos, pois é mais "seguro" e 
simples você chamar uma query do que chamar um comando. Por 
exemplo, ao chamar uma query a desenvolvedora tem certeza de 
que não vai alterar nada no sistema. O mesmo, no entanto, 
não acontece com comandos.

Bertrand Meyer justifica assim o seu princípio:

> O ato de fazer uma pergunta não deve mudar a sua resposta.

Nessa frase, "fazer uma pergunta" significa chamar uma
query. Isso não deve influenciar a resposta dessa query 
(caso a gente faça a pergunta de novo, por exemplo) ou 
a resposta de uma outra query (que, por exemplo, a gente 
faça logo a seguir).

### 3. O que é ortogonalidade? {.unnumbered}

Dois componentes de um projeto são ortogonais se mudanças em um deles 
não afetam o outro. Logo, eles podem ser livremente combinados 
ou trocados.

No livro *The Pragmatic Programmer*, o seguinte exemplo explica o 
conceito:

> Em um sistema bem projetado, o banco de dados é ortogonal 
à interface do usuário: pode-se alterar a interface sem afetar 
o banco de dados e trocar o banco de dados sem alterar a interface.

Para explicar melhor, suponha um sistema no qual podemos usar um 
conjunto de interfaces com o usuário X e um conjunto de bancos de dados Y. 
Em um sistema ortogonal, a escolha da interface X não impacta ou 
restringe a escolha do banco de dados Y. Qualquer combinação de X e Y 
é possível. Por isso, podemos imaginar X e Y como duas retas 
ortogonais, que formam um plano, no qual qualquer coordenada (x,y) 
representa uma configuração possível do sistema.

Portanto, ortogonalidade é uma propriedade que costuma estar 
presente, de graça, em sistemas bem projetados, cujos módulos possuem 
alta coesão e baixo acoplamento, tal como estudamos no 
Capítulo [5](https://engsoftmoderna.info/cap5.html).

### 4. O que é uma dependência circular? {.unnumbered}

Suponha dois pacotes P1 e P2. Existe uma dependência circular 
entre eles quando P1 usa P2 e vice-versa.

Nessa explicação, "usar" significa que P1 declara variáveis, 
chama métodos, lança exceções ou estende classes implementadas 
em P2, dentre outros usos possíveis.

Uma dependência circular pode ser indireta também, isto é:

P1 usa P2, que usa P3, que usa P4,..., que usa Pn, que volta a usar P1.

Dependências circulares entre pacotes devem ser evitadas, pois elas
tornam o entendimento, manutenção e teste do sistema mais complexo.

O próximo diagrama -- extraída do seguinte 
[artigo](https://hal.archives-ouvertes.fr/hal-01203525) -- ilustra uma
dependência circular entre classes dos pacotes `awt` e `swing` de Java:

![Dependência circular entre dois pacotes da biblioteca de Java. Os retângulos
maiores são pacotes (ou módulos) e os menores são classes.](./figs/dep-circular.png){width=70%}

O interessante nesse exemplo é que `swing` é um pacote para construção
de interfaces gráficas mais novo do que `awt`. De certo modo, seria 
então esperado que ele usasse código antigo, para facilitar a sua
implementação. Mas, por outro lado, o que o diagrama revela é que
manutenções no pacote antigo (`awt`) introduziram também
dependências para o pacote novo (`swing`).

<!---
### 4. Qual a diferença entre os padrões de projeto Proxy e Adaptador? {.unnumbered}

Suponha um objeto que tenha uma interface `I`. 

* Um **proxy** implementa a interface`I`, isto é, implementa todos os seus métodos.

* Já um **adaptador** implementa uma outra interface, digamos que `I'` e 
fica responsável por adaptá-la para a interface `I`. Para ilustrar, 
lembre-se de um adaptador de tomadas do padrão novo para o antigo 
ou vice-versa.

Quando eu devo usar cada um desses padrões?

* Proxy: para implementar requisitos não-funcionais, tais como segurança, 
persistência, distribuição, etc.

* Adaptador: para compatibilizar interfaces diferentes.

-->
* * * 

Voltar para a lista de [artigos](./artigos.html).
