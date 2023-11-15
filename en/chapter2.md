
# Process

> In software development, perfect is a verb, not an adjective. 
There is no perfect process. There is no perfect design. There 
are no perfect stories. You can, however, perfect your 
process, your design, and your stories. -- Kent Beck

\index{Software Process}
This chapter starts with a discussion on the importance of
software process (Section 2.1). Next, we discuss general and 
foundational aspects of agile software development processes 
(Section 2.2), including a discussion into the historical context 
that motivated the emergence of these processes. The next sections 
focus on three agile methods: Extreme Programming (Section 2.3), 
Scrum (Section 2.4), and Kanban (Section 2.5). Following that, 
we comment on scenarios where agile methods might not be the
most recommended processes (Section 2.6). Lastly, in Section 2.7, 
we briefly present some traditional processes, such as the 
Unified Process.

## Importance of Process

Consider the production of a car in an automobile factory, 
which follows a well-defined process. In simple terms, sheets 
of steel are initially cut and pressed to shape doors, roofs, 
and hoods. Next, the car is painted and components like the 
dashboard, seats, seat belts, and wiring are installed. 
Finally, the mechanical parts, including the engine, 
suspension, and brakes, are fitted.

Analogously, software production also follows a **process**, 
although less mechanized and more dependent on intellectual 
endeavor. A software development process defines a series 
of steps, tasks, events, and practices that developers must 
observe while developing a software system.

\index{Torvalds, Linus}
\index{Knuth, Donald}
\index{TeX}
\index{Linux}
There are some who critique software processes and question 
their need, often asking: "Why must I follow a process?" 
or "What process did Linus Torvalds or Donald Knuth 
used when implementing the Linux operating system or the 
TeX text formatter?" 

In reality, the second questions above do not apply to 
our context as both Linux (in its initial versions) and TeX 
were individual projects led by a single developer. In such 
scenarios, following a process is less important. Stated in
better terms, the process followed in those projects was a
personal one, reflecting the principles, practices, and 
experience of a single developer.

However, contemporary software systems are too complex to be 
developed by a single developer. Thus, systems implemented by 
solitary heroes are increasingly rare nowadays. In practice, 
modern systems — the focus of this book — are developed 
by **teams**.

However, these teams require a minimal set of rules to produce 
quality software efficiently. That's why software companies invest 
so much in software processes. They serve as instruments for
companies to coordinate, motivate, organize, and evaluate 
their developers, ensuring at the same time productivity 
and alignment with the organization's goals. Without a 
process — even a light and simplified one, such as the 
agile methods we will study in this chapter — there is a 
risk that teams will work in a uncoordinated way, 
creating products with no business value. Finally, processes 
not only benefit the company, but they also serve developers by 
clarifying expected tasks and outcomes, thus reducing misalignment 
among team members.

In this chapter, we explore various software processes. 
In fact, in Chapter 1, we already presented a first introduction
to Waterfall and Agile methods. In the following sections, we will 
continue this discussion and present three well-known Agile methods.

## Agile Manifesto

\index{Agile Manifesto}
The earliest software development process — as the Waterfall
process, proposed in the 1970s — followed a sequential approach. 
Usually, projects began with a requirement specification phase 
and ended with the implementation, testing, deployment, and 
maintenance phases.

Given the historical context, this strictly sequential approach 
was understandable. Traditional engineering projects are  
developed sequentially and are based on detailed and upfront
planning. Therefore, it's not a surprise that the emerging 
Software Engineering field mirrored the processes of 
longer-established domains like Electronics, Civil, Mechanical, 
and Aeronautical Engineering, among others.

However, by the 80s, the industry began to recognize that 
software is different from other engineering products. The 
recurrent problems faced by software projects at his time 
reinforced this conclusion. For instance, such projects 
routinely overshot schedules and budgets. Some were even 
abandoned after years of effort without delivering a functioning 
system to customers.

\index{CHAOS Report}
The CHAOS Report published in 1994 by the Standish Group 
consulting firm provided more details about the state of 
software projects at the time. This report
([link](https://www.standishgroup.com/sample_research_files/chaos_report_1994.pdf)),
revealed that over 55% of projects surpassed their  
deadlines by 51% to 200%; and at least 12% exceeded the 
deadlines by more than 200%, as shown in the next figure.

![CHAOS Report (1994): percentage of projects exceeding their deadlines (for each range of overrun).](figs/cap2/chaos2-en){width=90%}

In terms of costs, almost 40% of the studied projects overshot 
their budgets by 51% to 200%, as indicated in the following 
figure:

![CHAOS Report (1994): percentage of projects exceeding their budgets (for each range of overrun).](figs/cap2/chaos1-en){width=90%}

Therefore, in 2001, some industry professionals gathered in 
Snowbird, Utah, to discuss and propose an alternative to the 
prevailing Waterfall-based processes. They argued that, being 
different from traditional engineering products, software requires 
a distinct development process.

For instance, software requirements change more frequently 
than those of a computer, airplane, or bridge. Moreover, 
customers often lack a clear understanding of their needs. 
Thus, there is always a risk of designing a product that will 
be obsolete by the time it's finished due to changing circumstances 
or customer needs. The professionals that met at Utah also 
identified issues with the document-centric approach advocated
by Waterfall. At the time, requirements documents were detailed, 
heavy, and dense, which contributes to making them obsolete 
very quickly as developers would not update the documentation 
to reflect requirement changes.

In response, the group proposed a new type of software process, 
which was described in a document they named the **Agile 
Manifesto**. The manifesto reads:

> Through this work, we have come to value:
>
> **Individuals and interactions** over processes and tools
>
> **Working software** over comprehensive documentation
>
> **Customer collaboration** over contract negotiation
>
> **Responding to change** over following a plan.

\index{Agile Methods}
Agile processes are characterized by short and iterative 
development cycles. Systems are built incrementally, starting 
with the most relevant features, according to customers. Initially, 
a first version of the system is created, which implements only 
high-priority functionalities. This version is then validated 
by the customer. If approved, a new cycle — also callled **iteration** 
or **sprint** — begins, adding a few more features as 
prioritized by the customer. Typically, these cycles are short, 
having two weeks, for example. This allows the systems to be 
incrementally built, with each feature increment receiving 
explicit approval by the customer. The development ends when 
all the customer's requests have been implemented.

\index{Waterfall}
The following figures present a comparison between Waterfall and 
Agile methods:

![Development using a Waterfall process. The software is finished 
only at the end.](figs/cap2/waterfall2-en){width=90%}

![Development using an Agile process. Each iteration (represented by the rectangles) produces a product increment (S++), which is validated and 
tested by customers.](figs/cap2/agile-en){width=90%}

However, the previous figures may suggest that in agile development, 
each iteration replicates a mini-Waterfall process, encompassing 
all the Waterfall phases. This isn't accurate; generally, iterations 
in agile methods aren't a series of tasks like in Waterfall (more 
details in the following sections). The figure may also suggest 
that a system must be put into production at the end of each 
iteration. This is also incorrect. Indeed, the objective is to 
deliver a functional system that performs useful tasks. However, 
the decision to launch the software involves other variables such 
as business risks, hardware resources availability, marketing 
campaigns, user training, etc.

Other agile process characteristics include:

*  Minimal emphasis on documentation: Only vital information should 
be documented.

* Less emphasis on detailed plans: At the start of a project, often 
neither the customer nor the developers have a clear understanding 
of all requirements that should be implemented. Such understanding 
gradually unfolds as sprints are finished and validated. In other 
words, the essence of agile development is to advance even when 
we have incomplete, partial, and changing requirements.

* No dedicated design phase (*Big Design Up Front*): The design of
the software system is also incremental, evolving on each iteration.

*  Small team development: Teams typically comprise about a dozen 
developers or, as Amazon CEO Jeff Bezos phrased it, "teams that 
can be fed with two pizzas". We also like to say that the size of 
agile teams varies between the size of a basketball team 
(5 members) to the one of a soccer team (11 members).

*  Emphasis on novel programming practices (as in the early 2000s), 
such as pair programming, automated testing, refactoring, and 
continuous integration.

As result, agile processes are considered **light processes**, 
having few prescriptions and documents.

However, the characteristics we presented above are still generic 
and broad. Thus, to make agile principles more concrete and 
actionable, several methods were proposed. Interestingly, they 
were all initially proposed before the 2001 Agile Manifesto's 
meeting. Particularly, in this chapter, we will study three 
agile methods:

*  Extreme Programming (XP): Kent Beck proposed this method in 
a 1999 book ([link](https://dl.acm.org/citation.cfm?id=318762)). 
A second and heavily revised edition was also released in 2004.

*  Scrum: This agile method was introduced by Jeffrey Sutherland
 and Ken Schwaber in a 1995 article 
 ([link](https://dl.acm.org/citation.cfm?id=260274)).

*  Kanban: This method originated from a production control 
system implemented in Toyota's factories in the 1950s 
([link](https://hbr.org/1986/01/the-new-new-product-development-game)). 
Over the past years, Kanban has been gradually adapted for 
software development.

It's also important to understand that all development methods 
are essentially a set of recommendations. Every organization should 
analyze each one and decide if it's suitable for their particular 
context. Consequently, organizations might need to adapt any
existing method to their needs. For this reason, it's rare to see two 
organizations that follow exactly the same development process. 
For instance, even if they say they're using Scrum.

```{=latex}
\begin{esmbox}
```
**In-Depth**: The terms process and methods are often used
interchangeably. However, there are also subtle differences between
them. In our context, a process is a set of steps, events, and tasks 
used to construct software. Every organization employs a process 
to develop its systems, which can be  agile, Waterfall, or even 
a "chaotic" one. However, a process always exists. On the other hand, 
a method specifies a particular development process (the term 
originates from Greek, meaning "the means to achieve a 
goal"). Therefore, XP, Scrum, and Kanban are agile methods or, 
put another way, they define practices, activities, events, 
and techniques compatible with agile principles. 
```{=latex} 
\end{esmbox} 
```

\index{Stack Overflow survey}
```{=latex} 
\begin{esmbox} 
```
**Real World Insight**: The widespread success and impact of agile 
methods are noteworthy. At present, an overwhelming majority of 
organizations, irrespective of their size or business domain, 
follow agile principles to varying degrees. Here's an interesting 
statistic: in 2018, the Stack Overflow survey included a question 
about the most used development methods
([link](https://insights.stackoverflow.com/survey/2018/#career-values)).
Over 57 thousand professional developers responded, and a majority 
identified with agile methods or practices. This includes 
methodologies we will study in this chapter — such as Scrum 
(63% responses), Kanban (36%), and Extreme Programming (16%). 
Only 15% of participants answered Waterfall as their development 
method.
```{=latex}
\end{esmbox}
```
## Extreme Programming

\index{Extreme Programming}
Extreme Programming (XP) is a lightweight method proposed for 
developing software with ever-changing or unclear requirements, 
such as the Type B systems (Business), according to the classification
described in Chapter 1. As an agile method, XP embodies 
characteristics like short iterative development cycles, 
less emphasis on comprehensive documentation, incremental 
design, and small development teams. 

In other words, XP is not a prescriptive method providing a 
detailed step-by-step plan for software construction. Instead, 
XP is defined by a set of **values**, **principles**, and **practices**. 
This means XP is initially defined abstractly, using values and principles that should be part of the culture and habits of software 
development teams. Then, these values and principles are materialized 
into a list of development practices. Often, when deciding to adopt 
XP, developers and organizations focus on the practices. However, 
the values and principles are also key components of the method, as 
they give meaning to the proposed XP practices. To be clear, 
if an organization is unprepared to embrace the XP mindset—represented 
by its values and principles—it's also advisable to avoid adopting 
its practices.

In this chapter, we will first present the values and principles 
of XP. Here is a list of them:

* **Values**: Communication, simplicity, feedback, courage, 
respect, and quality of life. 

* **Principles**: Humanity, economics, mutual benefits, 
continuous improvements, acknowledging failures, baby steps, 
and personal responsibility.

Next, we will describe the practices. To ease their explanation, 
we decided to group them into three categories: practices about 
development process, programming practices, and project management 
practices. Here is a list of the practices within each group:

* **Development Process Practices**: Customer representative, 
user stories, iterations, releases, release planning, 
iteration planning, planning poker, slack.

* **Programming Practices**: Incremental design, pair programming, test-driven development (TDD), automated build, continuous 
integration.

* **Project Management Practices**: Metrics, working environment, 
open-scope contracts.

### Values

\index{Extreme Programming!Values}
XP strongly aligns software development with three core societal values: communication, simplicity, and feedback. Good **communication** fosters learning from mistakes in every project while **simplicity** underlines the existence of simpler subsystems within complex systems. Lastly, **feedback** from stakeholders counterbalances risks like changing requirements and technology alterations. To quote Frederick Brooks:

> "Plan to throw away parts of your system, because you will."

Effective feedback helps identify disposable components or versions early, preventing delays and cost overruns. Additional XP values include **courage**, **respect**, and **quality of life**. 

### Principles

\index{Extreme Programming!Principles}
While XP's values are abstract, its practices are concrete and pragmatic. To bridge this gap, XP encourages following specific principles. Picture it as a river with values on one side and practices on the other. Principles act as a bridge:

* **Humanity**: Software development primarily draws from human resources rather than physical assets. Successfully managing people—encompassing expectations, growth, motivation, transparency, and responsibility—is critical for project success. 
 
* **Economics**: Software development requires substantial financial investment. Hence, it's not merely an intellectual pursuit; it must deliver economic results. 

* **Mutual Benefits**: XP asserts all decisions should mutually benefit stakeholders. For instance, good working environments benefit software clients and the developing team, and writing tests benefits the initial coder and other developers working on the project.

* **Continuous Improvements**: Constant improvement trumps aiming for perfection in software development. XP encourages routinely refining the system with iteration-by-iteration feedback and does not advocate extensive initial planning. Building time for reflection on practices is essential.

* **Failures Happen**: Accepting failures, such as bugs and feature mismatches, is integral to quick software delivery; XP advises not to punish developers for failures. 

* **Baby Steps**: Secure and validated small progressions are preferable to extensive implementations with high discard potential. 

* **Personal Responsibility**: Developers should clearly comprehend their roles and responsibilities in XP, indicating that the implementer of a requirement, or a *story*, should handle its testing and maintenance as well.

\index{Chrysler}
```{=latex}
\begin{esmbox}
```
**Real World**: One of the first systems to embrace XP was the Chrysler Comprehensive Compensation (C3), a payroll system for the automaker Chrysler ([link](https://doi.org/10.1109/2.796139)). The project initiated in 1995 but was rebooted the following year by Kent Beck due to a lack of tangible results. Renowned agile community member Martin Fowler served as a consultant. While building the C3 system, many facets of the soon-to-be-named XP method were implemented and experimented with.
```{=latex}
\end{esmbox}
```