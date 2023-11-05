### Gerência de Configuração 

\index{Gerência de Configuração}
Atualmente, é inconcebível desenvolver um software sem um sistema de
controle de versões, como git. Esses sistemas armazenam todas as versões
de um software, não só do código fonte, mas também de documentação,
manuais, páginas web, relatórios, etc. Eles também permitem restaurar
uma determinada versão. Por exemplo, se foi realizada uma mudança no
código que introduziu um bug crítico, pode-se com relativa facilidade
recuperar e retornar para a versão antiga, anterior à introdução do bug.

\index{Versionamento Semântico}
No entanto, gerência de configuração é mais do que apenas usar um
sistema como git. Ela inclui a definição de um conjunto de políticas
para gerenciar as diversas versões de um sistema. Por exemplo,
preocupa-se com o esquema usado para identificar as releases de um
software; isto é, as versões de um sistema que serão liberadas para seus
clientes finais. Um time de desenvolvedores pode definir que as releases
de uma determinada biblioteca que eles estão desenvolvendo serão
identificadas no formato *x*.*y*.*z*, onde *x*, *y* e *z* são inteiros.
Um incremento em *z* ocorre quando se lança uma nova release com apenas
correções de bugs (normalmente, chamada de *patch*); um incremento em
*y* ocorre quando se lança uma release da biblioteca com pequenas
funcionalidades (normalmente, chamada de versão *minor*); por fim, um
incremento em *x* ocorre quando se lança uma release com funcionalidades
muito diferentes daquelas da última release (normalmente,
chamada de versão *major*). Esse esquema de numeração de releases é
conhecido como **versionamento semântico**.

### Gerência de Projetos 

\index{Gerência de Projetos}
\index{Stakeholders}
Desenvolvimento de software requer o uso de práticas e atividades de
gerência de projetos, por exemplo, para negociação de contratos com
clientes (com definição de prazos, valores, cronogramas, etc.), gerência
de recursos humanos (incluindo contratação, treinamento, políticas de
promoção, remuneração, etc.), gerência de riscos, acompanhamento da
concorrência, marketing, finanças, etc. Em um projeto, normalmente
usa-se o termo **stakeholder** para designar todas as partes
interessadas no mesmo; ou seja, os stakeholders são aqueles que afetam
ou que são afetados pelo projeto, podendo ser pessoas físicas ou
organizações. Por exemplo, stakeholders comuns em projetos de software
incluem, obviamente, seus desenvolvedores e seus clientes; mas, também,
gerentes da equipe de desenvolvimento, empresas subcontratadas,
fornecedores de qualquer natureza, talvez algum nível de governo, etc.

\index{Brooks, Frederick}
Existe uma frase muito conhecida, também de Frederick Brooks, que
captura uma peculiaridade de projetos de software. Segundo Brooks:

> "A inclusão de novos desenvolvedores em um projeto que está atrasado contribui para torná-lo ainda mais atrasado."

\index{Lei de Brooks}
\index{Gerência de Projetos!Lei de Brooks}
Essa frase ficou tão famosa que ela é hoje conhecida como **Lei de
Brooks**. Basicamente, esse efeito acontece porque os novos
desenvolvedores terão primeiro que entender e compreender todo o
sistema, sua arquitetura e seu projeto (*design*), antes de começarem
a produzir código útil. Além disso, equipes maiores exigem um maior
esforço de comunicação e coordenação para tomar e explicar decisões. Por
exemplo, se um time tem 3 desenvolvedores (d~1~, d~2~, d~3~), existem 3
canais de comunicação possíveis (d~1~-d~2~, d~1~-d~3~ e d~2~-d~3~); se
ele cresce para 4 desenvolvedores, o número de canais duplica, para 6
canais. Se ele cresce para 10 desenvolvedores, passam a existir 45
canais de comunicação. Por isso, modernamente, software é
desenvolvido em times pequenos, com uma dezena de engenheiros, se tanto.

**Tradução**: Em português, a palavra *projeto* pode se referir tanto
a *design* como a *project*. Por exemplo, em uma subseção anterior
introduzimos questões de projeto de software, isto é, *software design*,
tratando de conceitos como interfaces, dependências, arquitetura, etc.
Na presente seção, acabamos de discutir questões de gerência de projetos
de software, isto é, *software project management*, tais como prazos,
contratos, Lei de Brooks, etc. No restante deste livro, iremos traduzir
apenas o uso mais comum em cada capítulo e manter o uso menos comum em
inglês. Por exemplo, no Capítulo 2 (Processos de Desenvolvimento),
usaremos projeto com tradução de *project*, pois é o uso mais comum
neste capítulo. Já no Capítulo 5 (Princípios de Projeto) e no Capítulo 6
(Padrões de Projeto), *design* será traduzido para projeto, pois é o uso
mais comum nesses capítulos, aparecendo inclusive no título dos mesmos.

```{=latex}
\begin{esmbox}
```

**Aprofundamento:** A Lei de Brooks foi proposta em um livro clássico
do autor sobre gerenciamento de projetos de software, chamado *The
Mythical Man-Month*, cuja primeira edição foi publicada em 1975
([link](https://dl.acm.org/citation.cfm?id=207583)). Nesse
livro, Brooks reporta as lições que aprendeu no início da sua carreira
como gerente responsável pelos primeiros sistemas operacionais da IBM.
Em 1995, uma segunda edição do livro foi lançada, em comemoração aos
seus 20 anos. Essa edição incluiu um novo capítulo, com o artigo *No
Silver Bullet — Essence and Accidents of Software Engineering*, publicado
originalmente em 1987 (e que já comentamos nesta Introdução). Em 1999,
Frederick Brooks ganhou o Prêmio Turing, considerado o Prêmio Nobel da
Computação.

```{=latex}
\end{esmbox}
```

### Processos de Desenvolvimento de Software 

\index{Processos de Software}
Um processo de desenvolvimento define quais atividades e etapas devem
ser seguidas para construir e entregar um sistema de software. Uma
analogia pode ser feita, por exemplo, com a construção de prédios, que
ocorre de acordo com algumas etapas: fundação, alvenaria, cobertura,
instalações hidráulicas, instalações elétricas, acabamento, pintura,
etc.

Historicamente, existem dois grandes tipos de processos que podem ser
adotados na construção de sistemas de software:

*  **Processos Waterfall** (ou em cascata)

*  **Processos Ágeis** (ou incrementais ou iterativos).

\index{Waterfall}
Processos Waterfall foram os primeiros a serem propostos, ainda na
década de 70, quando a Engenharia de Software começava a ganhar
envergadura. De forma compreensível, eles foram inspirados nos processos
usados em engenharias tradicionais, os quais são largamente sequenciais,
como ilustrado no exemplo do prédio, usado no parágrafo inicial desta
seção. Processos Waterfall foram muito usados até a década de 1990 e
grande parte desse sucesso deve-se a uma padronização lançada pelo
Departamento de Defesa Norte-Americano, em 1985. Basicamente, eles
estabeleceram que todo software comprado ou contratado pelo Departamento
de Defesa deveria ser construído usando Waterfall.

Processos Waterfall — também chamados de **processos dirigidos por
planejamento** (*plan-driven*) — propõem que a construção de um
sistema deve ser feita em etapas sequenciais, como em uma cascata de
água, na qual a água vai escorrendo de um nível para o outro. Essas etapas
são as seguintes: levantamento de requisitos, análise (ou projeto de
alto nível), projeto detalhado, codificação e testes. Finalizado esse
pipeline, o sistema é liberado para produção, isto é, para uso efetivo
pelos seus usuários, conforme ilustrado na próxima figura.

![Fases de um processo Waterfall.](figs/cap1/waterfall){width=87%}

\index{Métodos Ágeis}
\index{Manifesto Ágil}
No entanto, processos Waterfall, a partir do final da década de 90,
passaram a ser muito criticados, devido aos atrasos e problemas
recorrentes em projetos de software, que ocorriam com frequência nessa
época. O principal problema é que Waterfall pressupõe um levantamento
completo de requisitos, depois um projeto detalhado, depois uma
implementação completa, etc. Para só então validar o sistema com os
usuários, o que pode acontecer anos após o início do projeto. No
entanto, nesse período, o mundo pode ter mudado, bem como as
necessidades dos clientes, que podem não mais precisar do sistema que
ajudaram a especificar anos antes. Assim, reunidos em uma cidade de
Utah, Estados Unidos, em fevereiro de 2001, um grupo de 17 Engenheiros
de Software propôs um modo alternativo para construção de software, que
eles chamaram de Ágil — nome do manifesto que eles produziram nessa
reunião ([link](https://agilemanifesto.org/)).
Contrastando com processos Waterfall, a ideia de processos ágeis é que
um sistema deve ser construído de forma incremental e iterativa. Pequenos
incrementos de funcionalidade são produzidos, em intervalos de cerca de
um mês e, logo em seguida, validados pelos usuários. Uma vez que o
incremento produzido seja aprovado, o ciclo se repete.

Processos ágeis tiveram um profundo impacto na indústria de software.
Hoje, eles são usados pelas mais diferentes organizações que produzem
software, desde pequenas empresas até as grandes companhias da Internet.
Diversos métodos que concretizam os princípios ágeis foram propostos,
tais como **XP**, **Scrum**, **Kanban** e **Lean Development**. 

Esses métodos também ajudaram a disseminar diversas práticas de
desenvolvimento de software, como **testes automatizados**,
**test-driven development** (isto é, escrever os testes primeiro, antes
do próprio código) e **integração contínua** (*continuous integration*).
Integração contínua recomenda que desenvolvedores integrem o código que
produzem imediatamente, se possível todo dia. O objetivo é evitar que
desenvolvedores fiquem muito tempo trabalhando localmente, em sua
máquina, sem integrar o código que estão produzindo no repositório
principal do projeto. Quando o time de desenvolvimento é maior, isso
aumenta as chances de conflitos de integração, que ocorrem quando dois
desenvolvedores alteram em paralelo os mesmos trechos de código. O
primeiro desenvolvedor a integrar seu código será bem sucedido; enquanto
o segundo desenvolvedor será informado de que o trecho já foi
modificado pelo primeiro.
