
# Process

> In software development, perfect is a verb, not an adjective. 
There is no perfect process. There is no perfect design. There 
are no perfect stories. You can, however, perfect your 
process, your design, and your stories.* -- Kent Beck

\index{Software Process}
This chapter starts with an exploration of the importance of
software process (Section 2.1). Next, we discuss general and 
foundational aspects of agile software development process 
(Section 2.2), including a discussion into the historical context 
that motivated the emergence of these processes. The next sections 
focus on three agile methods: Extreme Programming (Section 2.3), 
Scrum (Section 2.4), and Kanban (Section 2.5). Following that, 
we comment on scenarios where agile methods might not be the
most recommended process (Section 2.6). Lastly, in Section 2.7, 
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

Analogously, software production follows a **process**, 
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
and "What process did Linus Torvalds or Donald Knuth 
used when implementing the Linux operating system or the 
TeX text formatter?" 

In reality, the second questions above do not  apply to 
our context as both Linux (in its initial versions) and TeX 
were individual projects led by a single developer. In such 
scenarios, following a process is less important. Stated in
better terms, the process followed in those projects was a
personal one, reflecting the principles, practices, and 
decisions of a single developer.

However, contemporary software systems are too complex to be 
developed by a single person. Thus, systems implemented by 
solitary heroes are increasingly rare. In practice, modern 
systems — the focus of this book — are developed by **teams**.

These teams require a minimal set of rules to produce quality 
software with efficiency. That's why software companies invest 
so much in software processes. They serve as instruments for
companies to coordinate, motivate, organize, and evaluate 
their developers, ensuring at the same time productivity 
and alignment with the organization's goals. Without a 
process — even a light and simplified one, such as the 
agile methods we will study in this chapter — there is a 
risk that teams will operate in a uncoordinated way, 
creating products with no business value. Finally, processes 
not only benefit the company, but they also serve developers by 
clarifying expected tasks and outcomes, thus reducing misalignment 
among team members.

In this chapter, we explore various software processes. 
In fact, in Chapter 1, we've already presented a first introduction
to Waterfall and Agile methods. In the following sections, we will 
continue this discussion and present the details of three well-known 
Agile methods.

## Agile Manifesto

\index{Agile Manifesto}
The earliest software development process — Waterfall, proposed 
in the 1970s — used a sequential approach. It began 
with a requirement specification and ended with the 
implementation, testing, deployment, and maintenance stages.

Given the historical context, this strictly sequential approach 
was understandable. Traditional engineering projects are also 
developed sequentially and using detailed planning. Therefore, 
it's not a surprise that the emerging Software Engineering field 
mirrored the processes of longer-established domains like 
Electronics, Civil, Mechanical, and Aeronautical Engineering, 
among others.

However, by the 80s, the industry began to recognize that 
software is different from other engineering products. The 
recurrent problems faced by software projects from the 
70s to the 90s reinforced this conclusion. For instance, 
projects at this time routinely overshot schedules and budgets. 
Some were even abandoned after years of effort without 
delivering a functioning system to customers.

\index{CHAOS Report}
The 1994 CHAOS Report from the Standish Group consulting 
firm offered more details about the state of software 
projects at the time. This report
([link](https://www.standishgroup.com/sample_research_files/chaos_report_1994.pdf)),
revealed that over 55% of projects surpassed their planned 
deadlines by 51% to 200%; and at least 12% exceeded the 
deadlines by over 200%, as shown in the next figure.

![CHAOS Report (1994): percentage of projects exceeding 
their deadlines (for each range of overrun).](figs/cap2/chaos2){width=95%}

In terms of costs, almost 40% of the studied projects overshot 
their budget by 51% to 200%, as indicated in the following 
figure:

![CHAOS Report (1994): percentage of projects exceeding their **budgets** (for each range of overrun).](figs/cap2/chaos1){width=95%}

Therefore, in 2001, several industry professionals gathered in 
Snowbird, Utah, to discuss and propose an alternative to the 
prevailing Waterfall-based processes. They argued that, being 
different from traditional engineering products, software requires 
a distinct development process.

For instance, software requirements change more frequently 
than those of a laptop, airplane, or bridge. Moreover, 
customers often lack a clear understanding of their needs. 
There is always a risk of designing a product that will be 
obsolete by the time it's finished due to changing circumstances 
or distinct customer needs. The group that met at Utah also 
identified issues with the document-centric approach followed
by Waterfall. At the time, requirements documents were detailed, 
heavy, and dense, which contributes to making them quickly 
obsolete as the developers would not update the documentation 
to reflect requirement changes.

In response, the group proposed a new type of software process, 
which was describe in a document they named the 
**Agile Manifesto**. The manifesto reads:


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
with the features considered most relevant by customers. Initially, 
a first version of the system is created, which implements only 
high-priority functionalities. This version is then validated 
by the customer. If approved, a new cycle — or **sprint** — begins, 
adding a few more features as prioritized by the customer. 
Typically, these cycles are short, usually having two weeks, 
which allows the system to be incrementally built, with each 
software increment receiving explicit approval by the customer. 
The development ends when all the customer's requests have been 
implemented.

\index{Waterfall}
The following figures present a comparison between Waterfall and 
Agile development methods:

![Development using a Waterfall Process. The software is finished 
only at the end.](figs/cap2/waterfall2-en){width=90%}

![Development using an Agile Process. Each iteration (represented by the rectangles) produces a product increment (S++), which is validated and 
tested by end-users.](figs/cap2/agile-en){width=90%}

However, the previous figures may suggest that in agile development, 
each iteration replicates a mini-Waterfall process, encompassing 
all the Waterfall phases. This isn't accurate; generally, iterations 
in agile methods aren't a series of tasks like in Waterfall (more 
details in the following sections). The figure may also suggest 
that a system must be put into production for end-user use at the 
end of each iteration. This is also incorrect. The objective is 
to deliver a functional system that performs useful tasks. 
However, the decision to launch it into production involves 
other variables such as business risks, hardware resources 
availability, marketing campaigns, user training, etc.

Other agile process characteristics include:

*  Minimal emphasis on documentation: Only vital information should be documented.

* Less emphasis on detailed plans: At the start of a project, often 
neither the customer nor the software engineers have a clear 
understanding of all requirements that should be implemented. Such
understanding gradually unfolds as product iterations are created and
validated. In other words, the essence of agile development is to 
advance even in settings with incomplete, partial, and changing 
information.

*  No dedicated design phase (*Big Design Up Front*): The design of
the system is also incremental, evolving  the end of each iteration.

*  Small team development: Teams typically comprise about a dozen 
developers or, as Amazon CEO Jeff Bezos phrased it, "teams that 
can be fed with two pizzas. We also like to say that the size of 
agile teams varies between the size of a basketball team 
(5 members) and of a soccer team (11 members).

*  Emphasis on novel development practices (in the early 2000s), 
such as pair programming, automated testing, and continuous integration.

These characteristics render agile processes **light processes**, 
marked by few prescriptions and documents.

Since the characteristics above are generic and broad, several 
methods were proposed to help developers more tangibly 
adopt agile principles. Interestingly, they were all initially 
proposed before the 2001 Agile Manifesto's Utah meeting. 

In this chapter, we will study three agile methods:

*  Extreme Programming (XP): Kent Beck proposed this method in 
a 1999 book ([link](https://dl.acm.org/citation.cfm?id=318762)). 
A second and heavily revised edition of the book was released 
in 2004.

*  Scrum: This agile method was introduced by Jeffrey Sutherland
 and Ken Schwaber in a 1995 article 
 ([link](https://dl.acm.org/citation.cfm?id=260274)).

*  Kanban: This method originated from a production control 
system implemented in Toyota's factories in the 1950s 
([link](https://hbr.org/1986/01/the-new-new-product-development-game)). 
Over the past years, Kanban has been gradually adapted for software 
development.

```{=latex}
\begin{esmbox}
```
**In-Depth**: The terms process and methods are often used
interchangeably. However, there is also subtle differences between
them. A process is a set of steps, events, and tasks used to 
construct software. Every organization employs a process to develop 
its systems, which can be  agile, waterfall, or even chaotic. However, 
the fact is that a process always exists. On the other hand, 
a method defines and specifies a particular development process 
(the term originates from Greek, meaning "the means to achieve a 
goal"). Therefore, XP, Scrum, and Kanban are agile methods or, 
put another way, they outline practices, activities, events, 
and techniques compatible with agile principles. 

```{=latex} 
\begin{esmbox} 
```

**Notice**: It's essential to understand that all development 
methods include essentially a set of recommendations. Every 
organization should analyze each one and decide if it's suitable 
for their particular context. Consequently, organizations might 
need to adapt these recommendations to their needs. Therefore, 
it's rare to see two organizations that follow exactly the 
same development process. For instance, even if they say 
they're using Scrum.
  
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
rely on agile principles to varying degrees. Here's an interesting 
statistic: in 2018, the Stack Overflow survey included a question 
about the most used development methods
([link](https://insights.stackoverflow.com/survey/2018/#career-values)).
Over 57 thousand professional developers responded, and a majority 
identified with agile methods or practices. This includes 
methodologies we will explore in this chapter - such as Scrum 
(63% responses), Kanban (36%) and Extreme Programming (16%). 
Only 15% of participants chose Waterfall as their development 
method.

```{=latex}
\end{esmbox}
```