# Perguntas Frequentes sobre Projeto de Software {.unnumbered}

Neste artigo, respondemos perguntas sobre temas relacionados com projeto 
de software e que não são abordados no [Capítulo 5](../cap5.html) do 
livro. 

Segue a lista atual de perguntas:

1. [Princípios de projeto são leis que sempre devem ser seguidas?](#princ%C3%ADpios-de-projeto-s%C3%A3o-leis-que-sempre-devem-ser-seguidas)
2. [O que significa DRY (Don't Repeat Yourself)?](#o-que-significa-dry-dont-repeat-yourself)
3. [O que significa Separação entre Comandos e Queries?](#o-que-significa-separa%C3%A7%C3%A3o-entre-comandos-e-queries)
4. [O que é ortogonalidade?](#o-que-%C3%A9-ortogonalidade)
5. [O que é uma dependência circular?](#o-que-%C3%A9-uma-depend%C3%AAncia-circular)
6. [Existe diferença entre os conceitos de Ocultamento de Informação e Encapsulamento?](#existe-diferen%C3%A7a-entre-os-conceitos-de-ocultamento-de-informa%C3%A7%C3%A3o-e-encapsulamento)

* * * 

### 1. Princípios de projeto são leis que sempre devem ser seguidas? {.unnumbered}

Princípios de projeto, como SOLID e outros princípios que estudamos no 
[Capítulo 5](../cap5.html#solid-e-outros-princ%C3%ADpios-de-projeto) são 
recomendações ou diretrizes (ou "dicas"). Ou seja, geralmente, eles são 
úteis e válidos, mas não necessariamente devem ser usados em toda e 
qualquer situação.

Vamos dar dois exemplos para ilustrar melhor:

* Prefira Interfaces a Classes Concretas (ou Princípio da Inversão de 
Dependências): a ideia desse princípio é que quando usamos uma interface 
depois podemos trocar a sua implementação, ou seja, mudar a 
classe concreta que implementa a interface. Porém, podem existir 
situações -- principalmente, em sistemas pequenos e menos relevantes --
nas quais sabemos, com grande certeza, de que isso nunca irá ocorrer. 
Ou seja, como nunca vamos precisar de uma outra classe concreta, 
não vale a pena investir tempo criando uma estrutura intermediária, 
no caso, uma interface.

* Princípio Aberto/Fechado: esse princípio recomenda que devemos, já no 
momento da implementação de uma classe, pensar nos seus pontos de 
extensão. No [livro](../cap5.html#princ%C3%ADpio-abertofechado), para ilustrar 
o princípio, usamos o exemplo de um método `sort` com duas implementações: 
na primeira implementação, o método ordena uma lista em ordem lexicográfica; 
na segunda implementação, ele recebe como parâmetro um objeto cuja 
função é comparar dois elementos da lista segundo um outro critério. 
Logo, esse método `sort` está "aberto" a novos critérios de comparação. 
Porém, suponha que você seja responsável por implementar um método 
como `sort` em um contexto no qual sabemos, com grande certeza, que critérios 
de ordenação alternativos não serão necessários. Logo, nesse caso, não vale 
a pena investir tempo em uma versão mais aberta, flexível e 
extensível de `sort`.


### 2. O que significa DRY (Don't Repeat Yourself)? {.unnumbered}

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


### 3. O que significa Separação entre Comandos e Queries? {.unnumbered}

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


### 4. O que é ortogonalidade? {.unnumbered}

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
[Capítulo 5](../cap5.html#coes%C3%A3o).


### 5. O que é uma dependência circular? {.unnumbered}

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

### 6. Existe diferença entre os conceitos de Ocultamento de Informação e Encapsulamento? {.unnumbered}

Na prática, os dois conceitos são muito similares. Por exemplo, o livro 
*Object-Oriented Software Construction*, de Bertrand Meyer, 
inclui um glossário de termos sobre orientação a objetos. 
Nesse glossário, a entrada destinada a encapsulamento simplesmente
redireciona o leitor para a entrada sobre ocultamento de informação.

Dito isso, gostaríamos de comentar que o termo ocultamento 
de informação costuma ser mais usado quando estamos tratando de
projeto de software, tal como fizemos no 
[Capítulo 5](../cap5.html#ocultamento-de-informa%C3%A7%C3%A3o).
Ou seja, ocultamento de informação é uma propriedade de 
mais alto nível, por assim dizer. Já encapsulamento costuma 
ser mais usado em textos sobre linguagens de programação. 


* * * 

Voltar para a lista de [artigos](./artigos.html).
