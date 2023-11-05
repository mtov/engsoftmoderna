### Configuration Management 

\index{Configuration Management}
Currently, it is inconceivable to develop software without a version
control system, such as git. These systems store all the versions
of software, not just the source code, but also documentation,
manuals, web pages, reports, etc. They also allow you to restore
a particular version. For example, if a change was made in
the code that introduced a critical bug, you can relatively easily
recover and return to the old version, prior to the bug's introduction.

\index{Semantic Versioning}
However, configuration management is more than just using a
system like git. It includes defining a set of policies
for managing the various versions of a system. For example,
it is concerned with the schema used to identify the releases of a
software; that is, the versions of a system that will be released to its
end customers. A development team can define that the releases
of a certain library they are developing will be
identified in the format *x*.*y*.*z*, where *x*, *y* and *z* are integers.
An increase in *z* occurs when a new release is launched with only
bug fixes (commonly called a *patch*); an increment in *y* occurs when a release of the library with small
features is launched (commonly called a *minor* version); and finally, an
increment in *x* occurs when a release with features
very different from those of the last release is launched (commonly,
called a *major* version). This numbering scheme for releases is
known as **semantic versioning**.

### Project Management 

\index{Project Management}
\index{Stakeholders}
Software development requires the use of project management practices and activities
such as negotiating contracts with
clients (defining deadlines, values, schedules, etc.), human resource management (including hiring, training, promotion policies, remuneration, etc.), risk management, monitoring competition, marketing, finance, etc. In a project, the term **stakeholder** is typically used to designate all parties
interested in it; that is, stakeholders are those who affect
or are affected by the project, whether they be individuals or
organizations. For example, common stakeholders in software projects
include, obviously, its developers and its customers; but also,
development team managers, subcontracted companies,
suppliers of any nature, possibly some level of government, etc.

\index{Brooks, Frederick}
There is a very well-known phrase, also by Frederick Brooks, that
captures a peculiarity of software projects. According to Brooks:

> "Adding manpower to a late software project makes it later."

\index{Brooks' Law}
\index{Project Management!Brooks' Law}
This phrase has become so famous that it is now known as **Brooks' Law**. Basically, this effect happens because the new
developers will first need to understand and comprehend the entire system, its architecture and its design, before they start
to produce useful code. In addition, larger teams require greater
communication and coordination efforts to make and explain decisions. For
example, if a team has 3 developers (d~1~, d~2~, d~3~), there are 3
possible communication channels (d~1~-d~2~, d~1~-d~3~ and d~2~-d~3~); if
it grows to 4 developers, the number of channels doubles, making 6
channels. If the team grows to 10 developers, there then exist 45
communication channels. For this reason, modern software is typically
developed in small teams, with about a dozen engineers, if that.

**Translation Note:** In Portuguese, the word *projeto* can refer to both 
*design* and *project*. For example, in a previous subsection,
we introduced software design issues, i.e., *software design*,
dealing with concepts such as interfaces, dependencies, architecture, etc.
We just discussed software project management issues in the current section, i.e., *software project management*, such as deadlines,
contracts, Brooks' Law, etc. In the remainder of this book, we will translate
only the most common use in each chapter and keep the less common use in
English. For example, in Chapter 2 (Development Processes),
we will use the project to translate *project*, as it is the most common
use in this chapter. In Chapter 5 (Design Principles) and Chapter 6
(Design Patterns), *design* will translate to the project, as it is the most common use in
those chapters, even appearing in the title of them.

```{=latex}
\begin{esmbox}
```

**In-Depth Look:** Brooks' Law was proposed in a classic book by the author on software project management called *The
Mythical Man-Month*, whose first edition was published in 1975
([link](https://dl.acm.org/citation.cfm?id=207583)). In this
book, Brooks reports the lessons he learned early in his career
as a manager responsible for IBM's first operating systems.
In 1995, a second edition of the book was released to commemorate its
20th anniversary. This edition included a new chapter with the article *No
Silver Bullet — Essence and Accidents of Software Engineering*, originally published
in 1987 (and which we have already discussed in this Introduction). In 1999,
Frederick Brooks won the Turing Award, considered the Nobel Prize of
Computing.

```{=latex}
\end{esmbox}
```

### Software Development Processes 

\index{Software Processes}
A development process defines what activities and stages should
be followed to build and deliver a software system. An
analogy can be made, for example, with the construction of buildings, which
takes place according to certain stages: foundation, masonry, roofing,
plumbing installations, electrical installations, finishing, painting,
etc.

Historically, there are two main types of processes that can be
adopted in the construction of software systems:

*  **Waterfall processes**

*  **Agile processes** (or incremental or iterative).

\index{Waterfall}
Waterfall processes were the first to be proposed, way back in
the '70s, when Software Engineering was beginning to gain
prominence. Understandably, they were inspired by the processes
used in traditional engineering, which are largely sequential,
as illustrated in the building example, used in the opening paragraph of this
section. Waterfall processes were widely used until the 1990s and
much of that success is due to a standardization issued by the
US Department of Defense in 1985. Basically, they
stipulated that all software purchased or contracted by the Department
of Defense had to be built using Waterfall.

Waterfall processes — also called **plan-driven processes** — propose that the construction of a
system should be done in sequential stages, like a waterfall,
in which the water flows from one level to another. These stages
are: requirement gathering, analysis (or high-level
design), detailed design, coding, and testing. After this
pipeline is complete, the system is released for production, that is, for effective use
by its users, as illustrated in the next figure.

![Phases of a Waterfall process.](figs/cap1/waterfall){width=87%}

\index{Agile Methods}
\index{Agile Manifesto}
However, from the late '90s, Waterfall processes were heavily criticized due to the repeated delays and issues
with software projects, which were occurring frequently at that
time. The main issue is that Waterfall presupposes a complete requirement gathering phase, followed by a detailed design phase, followed by a
complete implementation phase, etc. To only then validate the system with the
users, which may happen years after the beginning of the project. By
then, the world may have changed, as well as the
needs of the customers, who may no longer need the system they
helped specify years before. So, gathered in a city in
Utah, United States, in February 2001, a group of 17 Software Engineers proposed an alternative way to construct software, which
they called Agile — the name of the manifesto they produced at that
meeting ([link](https://agilemanifesto.org/)).
In contrast to Waterfall processes, the idea of Agile processes is that
a system should be built incrementally and iteratively. Small
increments of functionality are produced, at intervals of about
one month, and immediately validated by the users. Once the
produced increment is approved, the cycle repeats.

Agile processes have had a profound impact on the software industry.
Today, they are used by a wide variety of organizations that produce
software, from small companies to large Internet companies.
Various methods that operationalize Agile principles have been proposed,
such as **XP**, **Scrum**, **Kanban** and **Lean Development**. 

These methods have also helped spread various software development practices, 
such as **automated testing**, **test-driven development** (i.e., writing 
the tests first, before the actual code), and **continuous integration**. 
Continuous integration recommends that developers integrate the code that
they produce immediately if possible, every day. The goal is to avoid 
developers working locally, on their machine, without integrating the code they 
are producing into the main project repository for a long 
time. When the development team is larger, this increases 
the chances of integration conflicts, which occur when two 
developers alter the same code in parallel. The first developer to 
integrate their code will be successful; while the second 
developer will be informed that the section has already been 
modified by the first developer.