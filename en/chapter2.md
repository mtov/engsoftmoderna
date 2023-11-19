
# Process

> *In software development, perfect is a verb, not an adjective. 
There is no perfect process. There is no perfect design. There 
are no perfect stories. You can, however, perfect your 
process, your design, and your stories.* -- Kent Beck

\index{Software Process}
This chapter starts with a discussion on the importance of
software process (Section 2.1). Next, we discuss general and 
foundational aspects of agile processes 
(Section 2.2), including a discussion into the historical context 
that motivated the emergence of these processes. The next sections 
focus on three agile methods: Extreme Programming (Section 2.3), 
Scrum (Section 2.4), and Kanban (Section 2.5). Following that, 
we comment on scenarios where agile methods might not be the
most recommended processes (Section 2.6). Lastly, in Section 2.7, 
we briefly present some traditional processes, such as the 
Unified Process.

## Importance of Process

The production of a car in an automobile factory follows a 
well-defined process. In simple terms, sheets 
of steel are initially cut and pressed to shape doors, roofs, 
and hoods. Next, the car is painted and components like the 
dashboard, seats, seat belts, and wiring are installed. 
Finally, the mechanical parts, including the engine, 
suspension, and brakes, are fitted.

Analogously, software production should follow a **process**, 
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

In reality, the second question above do not apply to 
our context as both Linux (in its initial versions) and TeX 
were individual projects led by a single developer. In such 
scenarios, following a process is less important. Stated in
better terms, the process followed in those projects was a
personal one, reflecting the principles, practices, and 
experience of a single developer.

However, contemporary software systems are too complex to be 
developed by a single developer. Thus, systems implemented by 
solitary heroes are increasingly rare nowadays. In practice, 
modern systems---the focus of this book---are developed 
by **teams**.

However, these teams require at least a minimal set of rules to produce 
quality software efficiently. That's why software companies invest 
so much in software processes. They serve as tools for
companies to coordinate, motivate, organize, and evaluate 
their developers, ensuring at the same time productivity 
and alignment with the organization's goals. Without a 
process---even a light and simplified one, such as the 
agile methods we will study in this chapter---there is a 
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
The earliest software development process---as the Waterfall
process, proposed in the 1970s---followed a sequential approach. 
Usually, projects began with a requirement specification phase 
and ended with the implementation, testing, deployment, and 
maintenance phases.

Given the historical context, this strictly sequential approach 
was understandable. Indeed, traditional engineering projects are  
developed sequentially and are based on detailed and upfront
planning. Therefore, it's not a surprise that the emerging 
Software Engineering field mirrored the processes of 
longer-established domains like Electronics, Civil, Mechanical, 
and Aeronautical Engineering, among others.

However, by the 80s, the industry began to recognize that 
software is different from other engineering products. The 
recurrent problems faced by software projects at this time 
reinforced this conclusion. For instance, such projects 
routinely overshot schedules and budgets. Some were even 
abandoned after years of effort without delivering a functioning 
system to customers.

\index{CHAOS Report}
The CHAOS Report published in 1994 by the Standish Group 
consulting firm provided more details about the state of 
software projects at the time. This report
([link](https://www.standishgroup.com/sample_research_files/chaos_report_1994.pdf))
revealed that over 55% of projects surpassed their  
deadlines by 51% to 200%; and at least 12% exceeded the 
deadlines by more than 200%, as shown in the next figure.

![CHAOS Report (1994): percentage of projects exceeding their deadlines (for each range of overrun)](figs/cap2/chaos2-en){width=90%}

In terms of costs, almost 40% of the studied projects overshot 
their budgets by 51% to 200%, as indicated in the following 
figure:

![CHAOS Report (1994): percentage of projects exceeding their budgets (for each range of overrun)](figs/cap2/chaos1-en){width=90%}

Therefore, in 2001, some industry professionals gathered in 
Snowbird, Utah, to discuss and propose an alternative to the 
prevailing Waterfall-based processes. They argued that, being 
different from traditional engineering products, software requires 
a distinct development process.

For instance, software requirements change more frequently 
than those of a computer, airplane, or bridge. Moreover, 
customers often lack a clear understanding of their needs. 
As a result, there is always a risk of designing a product that will 
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
by the customer. If approved, a new cycle---also callled **iteration** 
or **sprint**---begins, adding a few more features.  Typically, 
these cycles are short, having two weeks, for example. This 
allows the systems to be incrementally built, with each feature 
increment receiving explicit approval by the customer. The 
development ends when all the customer's requests have been 
implemented.

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

* No dedicated design phase, i.e., no Big Design Up Fron (BDUF): 
The design of the software system is also incremental, evolving 
on each iteration.

*  Small teams: Teams typically comprise about a dozen 
developers or, as Amazon CEO Jeff Bezos phrased it, "teams that 
can be fed with two pizzas". We also like to say that the size of 
agile teams varies between the size of a basketball team 
(5 members) to the one of a soccer team (11 members).

*  Emphasis on novel programming practices (as in the early 2000s), 
such as pair programming, automated testing, refactoring, and 
continuous integration.

Due to such characteristics, agile processes are considered 
**light processes**, having few prescriptions and documents.

However, the characteristics we presented above are still generic 
and broad. Thus, to make agile principles more concrete and 
actionable, several methods were proposed and defined. Interestingly, 
they were all initially proposed before the 2001 Agile Manifesto's 
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
to develop its systems, which can be Agile, Waterfall, or even 
a "chaotic" one. However, a process always exists. On the other hand, 
a method specifies a particular process (the term 
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
methodologies we will study in this chapter---such as Scrum 
(63% responses), Kanban (36%), and Extreme Programming (16%). 
Only 15% of participants answered Waterfall as their development 
method.
```{=latex}
\end{esmbox}
```

## Extreme Programming

\index{Extreme Programming}
Extreme Programming (XP) is a lightweight method for developing 
software with ever-changing or unclear requirements, such as the 
Type B systems (Business), according to the classification described 
in Chapter 1. As any agile method, XP embodies characteristics like 
short iterative development cycles, less emphasis on comprehensive 
documentation, incremental design, and development in small teams. 

In other words, XP is not a prescriptive method that defines a 
detailed step-by-step plan for software construction. Instead, 
XP is defined by a set of **values**, **principles**, and **practices**. 
This means XP is initially defined abstractly, using values and 
principles that should be part of the culture of software development 
teams. Then, these values and principles are materialized into a list 
of development practices. Often, when deciding to adopt XP, 
developers and organizations tend to focus on the practices. However, 
the values and principles are also key components of the method, as 
they give meaning to the practices proposed by XP. To be clear, 
if an organization is unprepared to embrace the XP 
mindset---as represented by its values and principles---it's also 
advisable to avoid adopting its practices.

In this chapter, we will first present the values and principles 
defended by XP. Here is a list of them:

* **Values**: Communication, simplicity, feedback, courage, 
respect, and quality of life. 

* **Principles**: Humanity, economics, mutual benefits, 
continuous improvements, acknowledging failures, baby steps, 
and personal responsibility.

Next, we'll explain the practices, which are categorized into 
three groups: process practices, programming practices, and 
project management practices. Here is a list of the practices 
within each group:

* **Process Practices**: Customer representative, user stories, 
iterations, releases, release planning, iteration planning, 
planning poker, and slacks.

* **Programming Practices**: Incremental design, pair programming, test-driven development (TDD), automated build, continuous 
integration.

* **Project Management Practices**: Metrics, working environment, 
open-scope contracts.

### Values

\index{Extreme Programming!Values}
XP advocates that software projects should be guided by three main 
values: communication, simplicity, and feedback. Indeed, it is argued 
that these values are important in any human collaboration effort. 
Good **communication** is important in every project, not only to 
avoid mistakes but also to learn from them. The second XP value 
is **simplicity**, as in every complex and challenging software 
system there is a simpler system or subsystem that is sometimes 
overlooked. Lastly, **feedback** from stakeholders counterbalances 
risks like changing requirements and technologies. 

In fact, it is difficult to develop the "right" software system 
at the first and only attempt. Frederick Brooks has a well-known 
recommendation to face this problem:

> *Plan to throw away parts of your system, because you will.*

Thus, feedback is an essential value to ensure that the software 
parts or versions that will be discarded are identified as early as 
possible, to reduce waste and rework. Besides the three mentioned 
values, XP also defends other values such as **courage**, 
**respect**, and **quality of life**.

### Principles

\index{Extreme Programming!Principles}
While XP's values are abstract, its practices are concrete and 
pragmatic. To bridge this gap between abstract practices and 
concrete practices, XP encourages following a set of principles. 
Picture it as a river with the values on one side and the practices 
on the other. Principles act as a bridge between both sides:
The main XP principles are:

**Humanity**. Software is a activity that depends on human capital. 
The main resource of software companies are not physical 
assets---computers, buildings, chairs, or Internet connections, 
for example---but their developers. A term that reflects this 
principle well is *peopleware*, which was coined by Tom DeMarco 
in a book with the same title 
([link](https://dl.acm.org/citation.cfm?id=2505459)). 
The idea is that managing people---including factors such as 
expectations, growth, motivation, transparency, and 
responsibility---is essential for the success of software 
projects.
 
**Economics**: Software development requires substantial 
financial investment. Hence, it's not merely an intellectual pursuit; 
it must deliver economic results, particularly in the case of
Type B (Business) systems, according to the classification we
studied in Chapter 1. 

**Mutual Benefits**: XP advocates that decisions taken in a 
software project should benefit multiple stakeholders. For example, 
a software company should ensure a good work environment; in return, 
the team should deliver a system that adds value to its business. 
Another example: by writing tests a developer benefits, as tests 
help detect bugs in her code; but tests also help other developers, 
who will be more confident that their code will not introduce 
regressions, i.e., bugs—in working code. A third and last example: 
refactoring makes code cleaner and easier to understand, both for 
the developer who wrote it and for the developer who in the future
will have to maintain it. The phrase "every deal should be good 
for both sides" summarizes this third XP principle well.

**Continuous Improvements**: As expressed in the quote by Kent 
Beck opening this chapter, no software development process is 
perfect. Therefore, what we should aim is a software system that is 
under continuous improvement, at each iteration, with feedback from 
clients and team members. For the same reason, XP does not recommend 
investing a large amount of time in an initial and complete design. 
Instead, the software's design is also incremental, improving with 
each iteration. Finally, the programming practices themselves 
can be improved; for this, the team should set aside time to 
discuss and reflect on them.

**Failures Happen**: Software development is not a risk-free 
endeavor. As discussed in Chapter 1, software is one of the most 
complex human constructions. Thus, failures are expected in software
projects, including bugs, features that did not attracted users, 
and inability to attend non-functional requirements, such as 
performance, usability, privacy, availability, etc. Evidently, 
XP does not advocate covering up these failures. However, they should 
not be used to punish team members. On the contrary, failures are 
part of the game if a team aims to deliver software quickly.

**Baby Steps**: A secure, tested, and validated progress, albeit 
small, is better than large implementations with risks of being 
discarded by the users. The same applies to tests (which are useful 
even when the units under test are small, such as individual methods), 
code integration (it's better to integrate daily, than to go through 
the stress of a major integration after weeks of work) and 
refactorings (which should occur in small steps intercalated with
running the tests). In summary, it's important to focus on continuous improvements, no matter how small, as long as they're in the right 
direction. Improvements in the form of "baby steps" are better than 
major changes, which usually are risky and may not lead to positive 
results, at least when it comes to software development.

**Personal Responsibility** (or accepted responsibility): According 
to this principle, developers should have a clear idea of their role and responsibility in the team. The reason is that responsibility cannot be transferred without the other party accepting it. For a similar reason,
XP advocates that the developer who implements a *user story*---i.e., 
a small feature increment---must also be also the one who will test 
and maintain it.

\index{Chrysler}
```{=latex}
\begin{esmbox}
```
**Real World Insight**: One of the first systems to adopt XP was a 
payroll system for the car manufacturer Chrysler, called Chrysler 
Comprehensive Compensation (C3) ([link](https://doi.org/10.1109/2.796139)). 
The system's project began in early 1995 and, as it failed to 
deliver concrete results, it was restarted the following year 
under the leadership of Kent Beck. Another well-known member of 
the agile community, Martin Fowler, participated in the project 
as a consultant. While building the C3 system, many facets of the soon-to-be-named XP method were implemented and experimented with.
```{=latex}
\end{esmbox}
```

### Process Practices

\index{Extreme Programming!Practices}
\index{Extreme Programming!Customer Representative}
\index{User Stories}

Just like other agile methodologies, XP recommends direct client 
involvement in the project, not limiting the team members to 
developers only. When using XP, teams should include one 
**customer representative** who is an expert on the domain of the 
system under development. This representative should propose and 
write the **user stories**, which are XP's version of requirement 
documents. However, user stories are rather short and lightweight
documents, comprising two to three sentences, in which the 
customer representative describes the features the system should 
implement.

We'll examine user stories more closely in Chapter 3. For now, we 
should note that they are usually written on cards, by hand or using
project management tools. As we mentioned, they are also simple 
documents focusing on the key features of the system from a user 
perspective, as opposed to complex requirement documents, which are 
used for example with Waterfall-based approaches. Here's an example 
story for a Question & Answer (Q&A) forum application---similar to Stack 
Overflow---which we'll use to present XP in this chapter.

--------------------------------------------------------------  
**Post Question**

*A logged-in user should be able to post questions. Since 
it's a programming forum, questions may incorporate code blocks, 
which must be presented in a differentiated layout.*
--------------------------------------------------------------  

Note that the story has a title (Post Question) and a brief description 
in two to three sentences. These stories serve as reminders for 
subsequent detailed verbal specifications by the customer 
representative. In other words, developers can at any time consult 
the customer representative to clarify issues about user stories.

After creation by the customer representative, developers should
estimate the effort required for implementing the stories. This 
estimation is often performed in **story points**, instead of 
hours or man-days. An integer scale is used in these cases
to label stories as having a certain number of story points. 
The simplest stories are marked as having one story point. If a 
story is twice as complex, it is marked with two story points, 
and so on. Indeed, story points are commonly defined by a 
Fibonacci sequence, such as 1, 2, 3, 5, 8, 13. The goal is to 
use a scale that makes the stories progressively harder and also 
allows the team to make comparisons similar to the following
one: in terms of effort, is a task that has 8 story points 
equivalent to a task with 5 story points plus a task with 3 
points (i.e., the two previous values in the scale)? If yes, 
8 story points is a good estimate. If not, it is better to estimate 
the story with 5 story points.

\index{Planning Poker}
\index{User Stories!Planning Poker}
```{=latex}
\begin{esmbox}
```
**In-Depth**: A popular technique for estimating story points is 
called **Planning Poker**. Here's how it works: the customer 
representative selects a story, reads it to the developers, who 
can discuss it with the representative to clarify any doubts. 
After that, each developer independently estimates the story's 
size in story points, and then everyone simultaneously reveals 
their estimates using previously distributed cards with numbers 
1, 2, 3, 5, etc. If there is consensus, the team moves to the next 
story. If not, there is a discussion and further voting until 
common ground is found.
```{=latex}
\end{esmbox}
```

\index{Extreme Programming!Releases}
The user stories are implemented in **iterations**---which 
have a fixed duration, usually ranging between one to three weeks. 
These iterations are also organized in longer cycles, referred to 
as **releases**, typically lasting two to three months. 
A team's **velocity** is the number of story points it can 
implement within an iteration. The customer representative should 
create stories that take at least one release to implement. Hence, 
in XP, the planning horizon is one release, which may span a 
few months.

**Note**: The term release in XP differs from its usage in 
configuration management where it refers to a version of a 
system that is available for usage. However, the version produced 
at the end of a release in XP does not necessarily need to go 
into production.

To summarize, to initiate the use of XP, one should:

*   Define the duration of an iteration.
*   Define the number of iterations in a release.
*   Set a list of stories, as proposed the customer representative.
*   Get estimates for each story from the developers.
*   Define the team's velocity, that is, the number of story points that
   it can implement per iteration

Upon defining the above aspects, the customer representative must 
prioritize the stories. To do this, he must define the stories 
to be implemented in each iteration of the first release. In this
prioritization, the team's velocity should be taken into account.
For example, assume that a team has a velocity of 25 story points
per iteration. In this case, the customer representative cannot allocate
stories to an iteration whose combined story points exceed this limit.
The process of assigning stories to iterations and releases is 
known as **release planning** or planning game, which is the term 
used in the first edition of the XP book.

For example, consider the Q&A forum we used earlier. The next table 
summarizes the outcome of a possible release planning. In this table, 
we are assuming that the customer representative wrote 8 stories, 
that each release has two iterations, and that the team's velocity 
is 21 story points per iteration (note that the sum of the story 
points of each iteration is exactly 21).

 **Story**                                  **Story Points**   **Iteration**  **Release**
 ----------------------------------------- ------------------ -------------- -------------
 Register user                              8                  1              1
 Post questions                             5                  1              1
 Post answers                               3                  1              1
 Opening screen                             5                  1              1
 Gamify questions/answers                   5                  2              1
 Search questions/answers                   8                  2              1
 Add tags                                   5                  2              1
 Comment on questions/answers               3                  2              1


The table emphasizes two points: (1) the stories in XP represent 
the main features of the intended system; meaning, the system's 
implementation is directed by its features. (2) Developers have 
no control on the order of story implementation; this is decided by 
the customer's representative, who must be someone capable and 
with authority to define what is most urgent and important for 
the organization contracting the development.

With the conclusion of release planning, the iterations start.
At the beginning of each iteration, the development team must meet 
to conduct an **iteration planning**. The purpose of this planning is
to decompose the stories of an iteration into tasks, which should
correspond to programming activities that can be assigned to one
of the team's developers. For example, *Post questions* story can
be decomposed into the following tasks:

*   Design and test the web interface, including layout, CSS templates, etc.
*   Install the database, design, and create tables.
*   Implement the data access layer.
*   Install and test the web server framework.
*   Implement the control layer, with endpoints to register, remove, and update questions.
*   Implement the Web interface.

Generally, tasks should not be complex and should be completed in a few days.

So, an XP project encompasses:

*   Releases, which are groups of iterations spanning a few months
*   Iterations, which are groups of tasks resulting from story breakdowns, lasting a few weeks
*   Tasks, which take a few days to complete

Generally, tasks should not be complex and should be completed in a few days.

So, an XP project encompasses:

*   Releases, which are groups of iterations spanning a few months
*   Iterations, which are sets of tasks resulting from story breakdowns, lasting a few weeks
*   Tasks, which take a few days to complete

Once the tasks are created, the team should also decide who is 
responsible for each one. With that, the iteration begins with task implementation.

An iteration concludes when all its stories have been implemented 
and validated by the customer representative. Therefore, at an 
iteration's end, the stories should be demonstrated to the customer representative, who must check and confirm their implementations.

\index{Slacks}
XP also proposes that teams should program some **slack** tasks, 
or tasks that can be postponed, during an iteration. Examples include 
studying a new technology, taking an online course, improving 
documentation or manuals, or even developing a side project. 
In fact, companies like Google are renowned for allowing developers 
to use 20% of their time for personal project development 
([link](https://arxiv.org/abs/1702.01715)). In XP, slack tasks 
have two primary objectives: (1) create a safety buffer 
which can be used should a task require more time 
than estimated and (2) allow developers some downtime from the 
demanding and intense project pace.

#### Frequently Asked Questions {.unnumbered}

Now let's answer some questions about the XP practices we have 
just explained.

**What is the ideal length of an iteration?** It's hard to say 
because it depends on the characteristics of the team, the contracting 
company, the complexity of the system under development, etc. 
Short iterations---for example, of one week---provide quicker feedback. 
But they require a greater commitment from clients, as a new software 
increment must be validated every week. Also, they require stories
to be simpler. On the other hand, longer iterations---for example, one 
month---allow the team to plan and complete the tasks more calmly. 
However, it takes a bit longer to receive client feedback, which can 
be important when requirements are not clear. Therefore, a compromise 
would be something like 2 or 3 weeks. Another recommended alternative 
is to experiment, that is, to test and evaluate different durations 
before deciding.

**What does the customer representative do during the iterations?** 
At the start of a release, it is up to the customer representative 
to write the stories of the iterations that will be part of that release. 
Then, at the end of each iteration, the representative validates and 
approve the implementation of such stories. However, during the 
iterations, the representative must be available to answer the team's 
questions. Note that a story is has only a few sentences, so it is natural 
for doubts to arise during its implementation. Therefore, the customer 
representative must be available to meet with developers to answer 
doubts and explain details about the stories.

**How to choose the customer representative?** First and foremost, 
it must be someone who knows the system's domain and who has 
authority to prioritize the user stories. There are at least three
profiles for customer representatives:

* Suppose internal development of a system, i.e., the IT department of a 
company is developing a system for a department X of the same company. 
In this case, the customer representative can be an employee from 
department X.

* Suppose the development team was hired to develop a system 
for another company X. That is, we are discussing outsourced development. 
In this case, the customer representative should be an employee 
of company X, who has a deep knowledge of the system domain and 
who will be one of its main users.

* Suppose the development team of company X was assigned to make
a system for an audience external to the company. For example, 
the Q&A forum application used as example in this chapter. So the 
clients are not employees of X, but external customers. In this case, 
the customer representative should be someone from the company X's 
marketing, sales, or business areas. In other words, it should be a person 
close to the problem and as far away from the solution as possible. 
For this reason, it should not be a developer. This type of customer 
representative is sometimes referred to as a **user proxy**.

\index{Velocity}
\index{User Stories!Velocity}
**How to define the team's velocity?** There is no silver bullet for
this issue. This definition depends on the team's experience. If the team
members have already participated in projects similar to the one
they are starting, this is certainly a less difficult question.
Otherwise, you have to experiment and calibrate the velocity in the
following iterations.

**Can stories include software infrastructure installation tasks?** 
No, stories are specified by the customer representative, who is not an 
expert in Software Engineering. However, a story can give rise to a 
task such as "install and test the database". In summary, stories refer to
functional requirements. However, to implement them tasks are required, 
which can be associated with functional requirements, non-functional 
requirements, or technical tasks, such as the installation of databases, 
frameworks, etc.

**Story X depends on Story Y, but the customer representative
prioritized X before Y. What should I do?** For example, suppose that in the
system example the customer representative allocated the story
"Post Question" for iteration 2 and the story "Post Answer"
for iteration 1. The question then is as follows: Should the team respect
this allocation? Yes, because the rule is clear: the customer representative 
is the final authority when it comes to defining the order of story 
implementation. So, you can ask the following: How can we post responses without 
having the questions? For this, you can implement some placeholder questions 
that cannot be modified by users. In iteration 1, after running the system,
these questions will appear by default, perhaps with a very simple layout, 
and then we will be able to only to answer these pre-defined questions.

**When does an XP project end?** When the customer representative decides 
that the already implemented stories are sufficient and that there is
no more relevant stories to be implemented.

### Programming Practices

The name Extreme Programming was chosen because XP proposes a set of innovative 
programming practices, considering the time they were proposed, at the 
end of the 90s. In fact, XP is a method that gives great importance to programming 
practices and production of running code. This importance has to be understood in 
the context of the 90s, when there was a clear distinction between analysts 
and programmers roles. Analysts were responsible for designing a system at a 
high level, defining its main components, classes, and interfaces. For this, 
they used graphical modeling languages, like UML, as we will study in Chapter 4. 
Once the analysis and design phase was completed, the coding phase began, 
under the responsibility of programmers. Thus, in practice, there was a 
hierarchy in these roles, with the analysts being the most prestigious team members. 
However, agile methods---and particularly XP---abolished this hierarchy and 
began to advocate for writing code right at the start of a project.

Indeed, XP did not just abolish the initial design and analysis phases. The method 
also proposed a new set of programming practices, including pair programming, 
automated testing, test-driven development (TDD), automated builds, continuous 
integration, etc. Most of these practices found wide acceptance within the 
software industry. Nowadays, they are widely used, even by projects that do not
follow agile methods.

In this section, we will study XP's programming practices.

Let's now look at XP's programming practices. 

\index{Incremental Design}
\index{Big Design Upfront}
**Incremental Design.** XP rejects a heavyweight design and analysis phases, 
famously known as *Big Design Up Front* (BDUF), which is a significant 
facet of Waterfall-based processes. Of course, time should be allocated 
for defining the design of the system under development. However, this should 
be a continuous and incremental activity, rather than concentrated at the 
beginning of the project, prior to any coding. Simplicity is the XP value 
that justifies this decision for using an incremental design approach. 
XP argues that when the design is confined to the beginning of the project, 
several risks can occur since the requirements are not fully clear to the 
team, and not even to the clients. For example, requirements may be 
overvalued or undervalued. Not to mention that new requirements can emerge 
throughout the project, making the initial design outdated and obsolete.

Therefore, XP argues that the ideal time to think about design is when it 
becomes important. Two frequently phrases motivate and justify this 
practice: *do the simplest thing that could possibly work* and 
*you aren't going to need it*, the latter known by the acronym YAGNI.

Two points are also important for better understanding the proposal for 
incremental design. First, experienced teams usually already have an 
design approximation before the first iteration. For example, they might 
know that the system will have a web interface, with backend components 
for implementing non-trivial business logic and for accessing a relational
database. In other words, just this information already conveys much of 
the design that should be adopted. As a second point, the team can also 
define a technical task in the first iteration to discuss and refine the 
design to be adopted in the project.

Last but not least, incremental design is only possible if used along 
with other XP practices, primarily **refactoring**. XP argues that 
refactoring must be continuously used to improve the quality of the design. 
Therefore, every opportunity for refactoring cannot be postponed.

\index{Pair Programming}
**Pair Programming**. Along with incremental design, pair programming is one 
of the most controversial practices of XP. Despite the controversy, the 
idea is simple: every coding task---despite being the implementation of 
a user story, a test, or fixing a bug---should be performed by two developers 
working together, sharing the same keyboard and monitor. One of the developers 
is the **leader** (or *driver*) of the session, managing the keyboard and 
mouse. The second developer takes on the role of reviewer of the leader's work
and is often called the **navigator**. The name comes from car rallies in 
which drivers are accompanied by a navigator.

With pair programming, the goal is to improve the quality of the code and design 
since "two heads think better than one." Besides this, pair programming 
contributes to disseminating knowledge about the code, which therefore doesn’t 
end up in the hands and mind of just one developer. For example, it isn't rare 
to find systems in which some developers struggle to take a vacation because 
only they know a critical part of the code. As a third advantage, 
pair programming can be used to train less experienced developers in 
programming technologies, algorithms and data structures, design patterns 
and principles,implementation of tests, debugging techniques, etc.

On the other hand, there are also economic consequences derived from 
pair programming since two programmers are being allocated to perform 
a task that, in principle, could be performed by just one. Also, 
many developers do not feel comfortable with this practice. For them, 
it is emotionally and cognitively uncomfortable to discuss each line 
of code and each implementation decision with a colleague. To alleviate 
this discomfort, XP proposes to switch pairs every session. These sessions
can last, for example, 50 minutes, followed by a 10-minute break. 
In the next session, the pairs and roles (leader vs. navigator) are 
switched. So, if in one session you served as the reviewer, in the next 
session you become the leader, but with a different developer as 
the reviewer.

\index{Microsoft Research}
```{=latex}
\begin{esmbox}
```
**Real World Insight:** In 2008, two researchers from Microsoft Research, 
Andrew Begel and Nachiappan Nagappan, conducted a survey with 106 
developers of the company to reveal their perception regarding 
pair programming 
([link](https://doi.org/10.1145/1414004.1414026)). 
Nearly 65% of developers positively answered the first question about 
whether pair programming is working well for them. When asked about 
the benefits of pair programming, the answers were as follows: fewer 
bugs (62%), better code quality (45%), knowledge dissemination 
(40%), and learning opportunity with peers (40%). On the other hand, 
the cost associated to the practice was pointed out as the main 
problem (75%). Regarding the ideal pair characteristics, the most common 
answer was complementary skills (38%). That is, developers prefer to 
pair with a person that helps in overcoming their weaknesses.
```{=latex}
\end{esmbox}
```

\index{Code Review}
More recently, several companies have also adopted the practice of 
**code review**. The idea is that all code produced by a developer must
be reviewed and inspected by another developer, but in an asynchronous 
manner. Thus, in these cases, the reviewer will not be physically next 
to the leader.

\index{Collective Code Ownership}
**Collective Code Ownership**. The idea is that any developer---or pair 
of developers working together---can modify any part of the code, 
whether to implement a new feature, fix a bug, or apply a refactoring. 
For example, if you discover a bug in some part of the code, go ahead 
and fix it. For that, you do not need permission from whoever implemented 
that code or from whoever carried out the last maintenance on it.

\index{Software Testing}
**Automated Testing**. This is one of the programming practices advocated
by XP that reached the greatest success. The rationale is that manual 
testing---a tester running the program, providing inputs and checking the 
outputs produced---is a costly procedure that cannot be reproduced at 
every moment. Therefore, XP proposes the implementation of 
programs---called tests---that call small units of a system, such as methods, 
and verify if the outputs produced are the ones expected. This practice 
thrived because, around the same time it was proposed, the first unit 
testing frameworks were created---such as JUnit, whose first version, 
implemented by Kent Beck and Erich Gamma, is from 1997. We will not 
extend the discussion about automated tests here because we have a 
whole chapter dedicated to this topic (Chapter 8).