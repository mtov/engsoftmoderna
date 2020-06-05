# ShapeUp: Uma possível alternativa a Scrum? {.unnumbered}

Shape Up é um novo método para desenvolvimento de software, que
está sendo proposto pela [Basecamp](https://basecamp.com/), 
a empresa por trás do
software de gerenciamento de projetos de mesmo nome.
O método é descrito em um [livro](https://basecamp.com/shapeup)
aberto, de autoria de Ryan Singer, que é um dos principais 
gerentes de produto da empresa.

Para comentar sobre Shape Up, vamos usar diversas analogias com
outros métodos ágeis, principalmente com Scrum.

Um ciclo de desenvolvimento em Shape Up
é composto por três etapas, conforme descrito a seguir.

Primeiro, temos uma fase de projeto *up front*, chamada de **shape**.
Claro, esse projeto é mais simples do que em Waterfall (isto é,
não é um *big design up front*). Porém,
a ideia é que todo projeto de desenvolvimento de software
precisa de uma coordenação de mais alto nível, que defina
as features que serão implementadas, crie limites para as
mesmas e avalie os riscos e benefícios. Tudo isso é feito
nessa fase de *shape*. Como ela é central no método
-- e dá nome para ele -- iremos comentar mais sobre ela
daqui a pouco, em uma seção separada.

Depois da fase de *shape* começa um
sprint propriamente dito, que eles chamam de **ciclos**.
Porém, esses ciclos são mais longos do que os
sprints de Scrum, tendo uma duração de seis semanas.
Veja como o autor justifica a duração dos ciclos:

> First, we work in six-week cycles. Six weeks is long enough to build something meaningful start-to-finish and short enough that everyone can feel the deadline looming from the start, so they use the time wisely. The majority of our new  features are built and released in one six-week cycle. 

Finalizado um ciclo, segue um período de calmaria,
de duas semanas, que os autores chamam de **cool-down period**.
A ideia é que os desenvolvedores devem usar esse período para
respirar um pouco. E aproveitar para realizar outras tarefas,
como corrigir bugs, aplicar refactorings, estudar um nova
tecnologia, implementar uma prova de conceito, etc. O autor
justifica a necessidade desse período da seguinte forma:

> If we were to run six-week cycles back to back, there wouldn’t be any time to breathe and think
about what’s next. The end of a cycle is the worst time to meet and plan because everybody is
too busy finishing projects and making last-minute decisions in order to ship on time.
Therefore, after each six-week cycle, we schedule two weeks for cool-down . This is a period with
no scheduled work where we can breathe, meet as needed, and consider what to do next. 

Apesar de mais longo, um ciclo tem um time-box bem definido: 6 meses. 
Os autores usam o conceito de "tempo fixo, escopo variável" para
ressaltar a importância de deadlines:

> This principle, called "fixed time, variable scope" is key to successfully defining and shipping
projects. Take this book for an example. It’s hard to ship a book when you can always add more,
explain more, or improve what’s already there. When you have a deadline, all of a sudden you
have to make decisions. 

Existem mais duas diferenças importantes para Scrum:

* Shape Up não inclui, pelo menos explicitamente, 
outros eventos de Scrum, como reuniões diárias, revisões
e retrospectivas.

* Os times são menores do que os times Scrum, sendo formados por um designer
de UI e um ou dois desenvolvedores.


## Shape  {.unnumbered}

Shape é a fase principal do método e que dá nome a ele. 
Ela é motivada da seguinte forma (veja também próxima figura):

> We shape the work before giving it to a team. A small senior group works in parallel to
> the cycle teams. They define the key elements of a solution before we consider a project ready to
> bet on. Projects are defined at the right level of abstraction: concrete enough that the teams
> know what to do, yet abstract enough that they have room to work out the interesting details
> themselves. 

![Fase de Shape](/img/shapeup-fig1.png)

Ou seja, a ideia parece ser atender um meio termo, entre um planejamento detalhado
(como em Waterfall) ou um planejamento mas vago (como pode acontecer,
por exemplo, com Scrum).


