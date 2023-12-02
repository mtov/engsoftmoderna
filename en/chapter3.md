
# Requirements

> *The hardest single part of building a software system is deciding precisely what to build.* -- Frederick Brooks

\index{Requirements}
This chapter begins with a presentation on the importance of software 
requirements and their different types (Section 3.1). Next, we characterize 
and present the activities that comprise what we call Requirements Engineering 
(Section 3.2). The next four sections (Sections 3.3 to 3.6) present a variety 
of techniques and documents used in the specification and validation of 
requirements. Section 3.3 focuses on user stories which are the principal 
tools for defining requirements in agile methods. Following that, Section 3.4 
elaborates on use cases, which are more detailed documents for expressing 
requirements. In Section 3.5, we explore the concept of Minimum Viable Product 
(MVP), a popular technique for validating requirements. To wrap up, 
Section 3.6 provides insights on A/B testing, a common practice 
for selecting the requirements of software products.

## Introduction

\index{Requirements!Functional}
**Requirements** define what a system should do and the constraints under 
which it should operate. "What a system should do" or its functions 
fall under **Functional Requirements**. On the other hand, the constraints 
part is described by **Non-Functional Requirements**.

\index{Requirements!Non-Functional}
To better illustrate the dichotomy between these two types of requirements, 
let's revisit the home-banking system example from Chapter 1. For such a system, 
the functional requirements include features like reporting the balance and 
statement of an account, processing transfers between accounts, executing 
bank slip payments, canceling debit cards, among others. In contrast, 
the non-functional requirements are tied to the quality attributes of 
the system, including performance, availability, security, portability, 
privacy, memory and disk usage, and more. Essentially, 
non-functional requirements refer to operational constraints. For example, 
it is not enough for our home-banking system to provide all the functionalities 
required by the bank. It also needs to have 99.9% availability---which thus 
acts as a constraint on its operation.

\index{Brooks, Frederick}
As Fredrick Brooks emphasizes in the opening quote of this chapter, 
requirements specification is a critical stage in software development processes. 
For example, it is pointless to have a system with the best design, implemented 
in a modern programming language, using the best development process, 
with high test coverage if it does not meet the needs of the users. 
Problems in the specification of requirements also have a high cost. 
The reason is that a major rework might be required when we discover---after 
the system is implemented and deployed---that some requirements were 
specified incorrectly or that important requirements were not implemented. 
At worst, there is a risk of delivering a system that will be rejected 
by users because it does not solve their problems.

Functional requirements are frequently specified in natural language (i.e.,
in English, for example). Conversely, non-functional requirements are  
specified using metrics, as illustrated in the following table:

| **Non-Functional Requirement** |  **Metric**
| ------------- | ------------- |
| Performance | Transactions per second, response time, latency, throughput |
| Space | Disk usage, RAM, cache usage |
| Reliability | % of availability, Mean Time Between Failures (MTBF) |
| Robustness | Time to recover the system after a failure (MTTR); probability of data loss after a failure |
| Usability | User training time |
| Portability | % of portable lines of code |

Using metrics for defining non-functional requirements avoid nebulous 
specifications like "the system should be fast and have high availability". 
Instead, it is recommended to specify, for example, that the system should 
ensure 99.99% availability and 99% of the transactions conducted in 
any 5-minute window should have a maximum response time of 1 second.

\index{Sommerville, Ian}
Some authors, such as Ian Sommerville 
([link](https://dl.acm.org/doi/book/10.5555/2851535)), 
also divide requirements into **user requirements** and **system requirements**. 
User requirements are high-level, non-technical, and usually written 
by users in natural language. Conversely, system requirements are more 
technical, precise and defined by developers. Often, a single user 
requirement expands into a set of system requirements. As an example, in our 
banking system, a user requirement like "the system should allow funds 
transfer to another bank's checking account via wire transfers" would 
result in system requirements specifying the detailed protocol that should be
used for such transactions. Essentially, user requirements are closer to the 
problem while system requirements lean towards the solution.

## Requirements Engineering

\index{Requirements!Requirements Engineering}
**Requirements Engineering** refers to activities such as the 
identification, analysis, specification, and maintenance of a system's 
requirements. The term engineering is used to emphasize that these 
activities should be performed systematically throughout a system's 
lifecycle, using well-defined techniques whenever possible.

\index{Requirements!Elicitation}
The process of identifying, discovering, and understanding a system's 
requirements is termed **Requirements Elicitation**. Elicitation, in 
this context, implies drawing out the main requirements of the system 
from discussions and interactions with developers and its stakeholders.

We can use various techniques for requirements elicitation, 
including conducting stakeholder interviews, issuing questionnaires, 
reviewing organizational documents, organizing user workshops, 
creating prototypes, and analyzing usage scenarios. Other 
techniques rely on ethnographic studies. Ethnography, a term 
whose roots trace back to Anthropology, refers to studying a culture 
in its natural environment (*ethnos*, in Greek, means people 
or culture). For instance, to study a newly discovered indigenous tribe 
in Amazon, an anthropologist might move to the tribe's location and spend 
months living amongst them and understanding their habits, customs, 
language, etc. Similarly, in the context of Requirements Engineering, 
ethnography is a technique for requirements elicitation that recommends 
developers to integrate into the work environment of the stakeholders 
and observe---typically for several days---how they perform their tasks. 
Note that this observation is silent, meaning that the developer should 
not interfere with or express personal views about the observed 
tasks and events.

Once requirements are elicited, they should be (1) documented, (2) 
validated, and (3) prioritized.

In Agile development, requirements are documented using 
**user stories** as previously discussed in Chapter 2. However, 
in some projects, a **Requirements Specification Document** might be 
necessary. This document describes all requirements of the software to be 
built---including functional and non-functional requirements---
normally in natural language. In the 90s, the **IEEE 830 Standard**, 
was proposed for writing such documents. This standard was 
suggested within the context of Waterfall-based models, which, as we
studied in Chapter 2, has a separated phase for requirements 
specification. The main sections of the IEEE 830 standard are 
presented in the next figure.

![Template of a requirement specification document following the IEEE 830 standard](figs/cap3/ieee-830-standard){width=70%}

\index{Requirements!Properties}
After specification, requirements should be checked and validated to 
ensure they are correct, precise, complete, consistent, and verifiable, 
as described below:

* Requirement should be **correct**. For example, an incorrect computation 
for the savings account returns in a banking system could result in 
either bank or client losses.

*  Requirements should be **precise** to avoid ambiguity. In fact, ambiguity 
occurs more frequently than we'd like when using natural language. For 
example, consider the following condition: to be approved, a student needs to score 
60 points during the semester or score 60 points in the Special Exam and 
attend the classes regularly. Observe that it admits two different 
interpretations. Firstly: (60 points during the semester or 60 points 
in the Special Exam) and attend classes regularly. But it can also be 
interpreted as: 60 points during the semester or (60 points in the 
Special Exam and regular attendance). As shown, parentheses were 
used to remove ambiguity in the combination of the "and" and "or" 
operations

*  Requirements should be **complete** to ensure all necessary 
features, especially the most relevant ones, are considered and are not 
forgotten.

*  Requirements must be **consistent**. Inconsistency arises when different 
stakeholders have distinct expectations---for example, if one stakeholder 
expects an availability of 99.9%, but another believes 90% suffices.

*  Requirements should be **verifiable**, implying we can check their 
implementations. For example, just stating that a system should be 
user-friendly is vague; how can developers verify if they've met the 
clients' expectations in this case?

Lastly, requirements must be prioritized. At times, the term requirements 
is taken literally, i.e., as a list of mandatory features and constraints 
in software systems. However, not everything specified by clients will be 
implemented in the initial releases. For instance, budget and time constraints 
might cause the delay of certain requirements.

Furthermore, requirements can change, as the world changes. For example, 
in the banking system mentioned earlier, the rules for savings account 
returns should be updated every time they are changed by the responsible 
federal agency. Thus, if a requirements specification document exists,
it should be updated, just like the source code. The ability to identify 
the requirements implemented by a given piece of code and vice versa 
(i.e., to map a particular requirement to the code implementing it) 
is called **traceability**.

Before concluding, it's important to mention that Requirements Engineering 
is a multi-disciplinary activity. For instance, political 
factors might motivate certain stakeholders to do not cooperate with 
requirement elicitation, particularly when this will threaten their status 
and power within the organization. Other stakeholders may simply not have 
time to meet with developers to explain the system's requirements.
Moreover, a cognitive barrier between stakeholders and developers may 
also impact the elicitation of requirements. For example, since 
stakeholders are typically seasoned experts, they might use a specialized 
language, unfamiliar to developers.


```{=latex}
\begin{esmbox}
```
**Real World Insight**: To understand the challenges faced in Requirements
Engineering, in 2016, about two dozen researchers organized a survey with 
228 software-developing companies spread across 10 countries 
([link](https://arxiv.org/abs/1611.10288)). 
When asked about the main problems faced in requirements specification, 
the ten most common answers were as follows (including the percentage of 
companies that cited each problem):

* Incomplete or undocumented requirements (48%)
* Communication flaws between developers and customers (41%)
* Constantly changing requirements (33%)
* Abstractly specified requirements (33%)
* Time constraints (32%)
* Communication flaws among team members (27%)
* Difficulty to distinguish requirements from solutions (25%)
* Insufficient support by customers(20%)
* Inconsistent requirements (19%)
* Weak access to customers' or business information (18%)
```{=latex}
\end{esmbox}
```

### Topics of Study

The following figure summarizes our studies on requirements so far, 
showing how requirements act as a bridge that links a real-world problem
with a software that solves. We will use this figure to motivate 
and introduce the topics we will study for the rest of this chapter.

![Requirements are the bridge between real-world problems and their software solutions](figs/cap3/requirements){width=65%}

First, the figure is useful for illustrating a common situation in Requirements
Engineering: systems whose requirements change frequently or whose users 
cannot accurately specify what they want in the system. In fact, 
we've already studied such systems in Chapter 2, when we discussed 
Agile Methods. As the reader may recall, when requirements change 
frequently, and the system is a non-mission-critical one, it is not
recommended to invest years drafting a detailed requirements document. 
There's a risk the requirements become outdated before the system 
is finalized---or a competitor can anticipate and build an equivalent 
system and dominate the market. In such cases, as we also commented
in Chapter 2, we should use lightweight requirement specification 
documents---such as **user stories**---and incorporate a representative 
of the customers into the development team, to clarify and explain 
the requirements to the developers. Given the importance of 
such scenarios---systems with constantly evolving, but non-critical 
requirements--we will start by studying user stories in Section 3.3.

On the other hand, some systems have relatively stable requirements. 
In these cases, it might be worth to invest in detailed requirement 
specifications. Certain companies, for instance, prefer to document all 
the system's requirements before starting the development. Lastly, 
requirements can be demanded by certification organizations, especially 
for systems that deal with human lives, such as systems in the medical, 
transportation, or military fields. In Section 3.4, we will study 
**use cases**, which are comprehensive documents for specifying 
requirements.

A third scenario arises when we do not know if the proposed "problem" truly 
warrants a solution. That is, we might collect all the requirements of 
this "problem" and implement a system that solves it. However, the uncertainty 
remains whether the system will succeed and attract users. In these scenarios, 
an interesting procedure is to take a step back and first test the relevance 
of the problem we intend to solve by software. A possible test 
involves building a **Minimal Viable Product** (**MVP**). An MVP is a functional 
system that can be used by real clients. However, it only includes the features 
necessary to prove its market feasibility, i.e, its ability to solve a 
problem faced by some clients. Given the contemporary importance of such 
scenarios---software for solving problems in unknown or uncertain 
markets---we will study more about MVPs in Section 3.5.

## User Stories

\index{User Stories}
Requirement documents, produced during waterfall development processes, can 
amount to hundreds of pages that sometimes require more than a year to 
complete. These documents often run into following problems: (1) they may 
become obsolete as requirements change during development; (2) descriptions 
in natural language tend to be ambiguous and incomplete; thus developers 
have to go back and talk to the customers during development to clarify 
doubts; (3) when these  conversations do not happen, the risks are even 
higher: at the end of the implementation, customer mays conclude they do 
want the system anymore, as their priorities changed, their vision of 
the business changed, the internal processes of their company changed, 
and so on. Therefore, a long initial phase of requirements specification 
is increasingly rare, at least in the case of commercial systems, 
like those being discussed in this book.

The industry professionals who proposed agile methods recognized---or 
suffered from---such problems and proposed a pragmatic technique to solve 
them, known as **User Stories**. As described by Ron Jeffries in his book 
on Agile Development ([link](https://dl.acm.org/citation.cfm?id=557459)), 
a user story constitutes three parts, termed the three Cs:

> User Story = Card + Conversations + Confirmation

Next, we explore each of these parts of a story:

* **Card**, used by customers to write, in their language and in a few 
sentences, a feature they hope to see implemented in the system.

* **Conversations** between customers and developers, facilitating 
understanding of what is detailed on each card. As stated before, agile 
methods view on requirements is pragmatic: as textual specifications 
of requirements are subjected to problems, they have been eliminated 
and replaced by verbal communication between developers and customers. 
Moreover, agile methods---as we already studied in Chapter 2---define 
that a representative of the customers, also known as Product Owner 
or Product Manager should be part of the team.

* **Confirmation**, which is essentially a high-level test--- specified by 
the customer---to verify whether the story was implemented as expected. 
Therefore, it is not an automated test, like an unit test, for example. But 
the description of scenarios, examples, and test cases that the customer 
will use to confirm the implementation of the story. These tests are 
also called **acceptance tests**. They should be written as soon as 
possible, preferably at the beginning of a sprint. Some authors recommend 
writing them on the back of the user story cards.

For this reason, requirement specifications via stories are not just 
two or three sentences, as some critics of agile methods may claim. 
The correct way to interpret a user story is as follows: the story 
written on the card is a "reminder" from the customer's representative 
to the developers. By creating this "reminder", the representative 
declares they would like to see a certain feature implemented in 
the next sprints. In addition, they agree to be available during the
sprints to refine the story, and explain it to the developers. 
Lastly, they also will consider the story implemented as long as it 
meets the confirmation tests they have also specified.

From a developer's standpoint,, the process works like this:
the customer's representative is asking us to implement the story
summarized on this card. Therefore, we will have to implement it in the next
sprint. However, we can count on the full support of the customer representative
to discuss and clarify any doubts about the story. Additionally,
the representative has already defined the tests they will use at
the sprint review meeting to consider the story implemented. Finally, we
further agree that the representative cannot change their mind at
the end of the sprint and use an entirely different test to
assess our implementation.

In essence, when employing user stories, requirements engineering 
becomes a continuous activity occurring daily during development. 
The traditional requirements document with hundreds of pages is 
replaced by regular conversations between developers and the 
customer representative. User stories emphasize verbal engagement 
over written communication, thus aligning with the following 
principles of the Agile Manifesto: (1) individuals and interactions 
over processes and tools; (2) working software over comprehensive 
documentation; (3) customer collaboration over contract negotiation; 
(4) responding to change over following a plan.

\index{User Stories!Properties}
User stories should have the following characteristics (whose initials 
in English form the acronym INVEST):

* Stories must be **independent**: given two stories X and Y, it should be 
possible to implement them in any order. Ideally, there should no 
have dependencies between them.

* Stories must be **negotiable**. As we mentioned before, stories (the card) 
are  invitations for conversations between customers and developers 
during a sprint. Therefore, both parties should be open to change and
adapt their opinions as result of these discussions. Developers should be open 
to implement details not expressed or that do not fit on the story cards. 
Customers should accept technical arguments from developers, for example 
about the complexity of implementing some aspect of the story as initially 
planned.

* Stories must add **value** to the customers' business. Stories are proposed, 
written, and ranked by the customers according to the value they add to 
their business. For this reason, the idea of a technical story doesn't exist, 
such as this one: "the system has to be implemented in JavaScript, using 
React on the front-end and Node.js on the backend".

* It should be possible to **estimate** the size of a story, i.e., to define
how many days will be necessary to implement it. Normally, this requires the 
story to be small, which we will discuss next, and for the developers to 
have experience in the system's domain.

* Stories must be **small**. In fact, complex and large stories---also known 
as **epics**---can exist but they should be placed at the bottom of 
the backlog, meaning they will not be implemented soon. On the contrary, 
stories at the top of the backlog should be short and small to 
facilitate understanding and estimating them. Assuming that a sprint has a 
maximum duration of one month, it should be possible to implement such 
stories in less than one week, for example.

* Stories must be **testable**, that is, they should have clear acceptance 
tests. For example, "the customer may pay with credit cards" is testable, assuming
we know the credit card brands that can be used. On the other hand, the following 
story is a counter-example: "a customer should not wait too long to have 
their purchase confirmed." This is a vague story and, therefore, it does not
have a clear acceptance criterion.

It is also recommended to list the main users who will interact with 
the system before starting to write stories in order to avoid 
stories that only serve certain users. Once you have defined 
these **user roles** (or **personas**), stories are commonly written 
in the following format:

> As a [user role], I want to [do something with the system]

\index{User Stories!Writing Workshop}
We will show examples of stories in this format in the next section. 
But first, we would like to mention that a **story writing workshop** 
is usually carried out at the inception of a software project. This 
workshop gathers the the system's main users in a room, who then discuss
the system's objectives, its main features, and so on. At the end of the 
workshop, which can last a week depending on the size and relevance of 
the project, we should have a valuable list of user stories for implementation 
over multiple sprints.

### Example: Library Management System 

In this section, we give examples of user stories for a library management 
system. They are associated with three types of users: typical users, 
professors, and library staff.

First, we show stories suggested by regular users (see below). Any library 
user fits this role and therefore can perform the operations described 
in these stories. Note that the stories are just a sentence and do not 
elaborate on how each operation will be implemented. For example, 
a story defines that users should search for books. However, many details 
are omitted, including the search criteria, available filters, limits on 
the number of search results, the layout of search and results screens, etc.
But we should remember that a story is essentially a commitment: the customer 
representative assures that they will be available to clarify these details 
in discussions with the developers during the sprint in which the story 
will be implemented. When working with user stories, this verbal interaction 
between developers and the customer representative is key for successful 
requirements specification.

> As a regular user, I want to borrow books
>
> As a regular user, I want to return a book I borrowed
>
> As a regular user, I want to renew my book loans
>
> As a regular user, I want to search for books
>
> As a regular user, I want reserve borrowed books
>
> As a regular user, I want to receive emails about new acquisitions

Next, we show the stories suggested by professors:

> As a professor, I want borrow books for an extended period of time
>
> As a professor, I want to recommend books for acquisition
>
> As a professor, I want to donate books to the library
>
> As a professor, I want to return books to other libraries


\index{User Stories!Epic}
Even though these stories originate from professor users, this doesn't 
mean they are exclusive for this user group. During the sprint's, 
the customer representative (or Product Owner) may consider making the 
donation feature available to all users. The final story proposed by
professor---allowing books to be returned at any university library---can 
be classified as an **epic**, i.e., a complex story. This story refer 
to a scenario where a professor borrows a book from the main library 
but want to return it to the library of a given department, or vice versa. 
Implementing this functionality is more complex because it requires 
integrating different library systems and having staff to transport the 
books back to their original location.

Lastly, we share the stories proposed by library staff, typically 
concerning library organization and ensuring the library's 
seamless operation:

> As a staff member, I want to register new users
>
> As a staff member, I want to add new books to the system
>
> As a staff member, I want to discard damaged books
>
> As a staff member, I want to access statistics about the collection
>
> As a staff member, I want the system to send reminder emails to students with overdue books
>
> As a staff member, I want the system to apply fines in the case of late book returns

To confirm the implementation of this story, the customer representative 
specified that they would like to successfully perform the following 
searches. 

> Search for books using the ISBN
>
> Search for books using the author's name, returning books whose author matches the search string
>                                 
> Search for books using the title, returning books with titles containing the search string
>
> Search for books added to the library from a specific date onwards

The execution of these types of search will be demonstrated during the 
Sprint Review meeting, assuming the team is using Scrum.

Acceptance tests should be specified by the customer representative.
(or Product Owner). This practice prevents a scenario known as 
**gold plating**. In Requirements Engineering, the expression describes the 
situation where developers decide on their own to elaborate some 
stories---or requirements, more generally---without the customer's input. 
In a literal translation, developers are embellishing stories with layers 
of gold, when this won't generate value for users.

### Frequently Asked Questions

Before we wrap up, and as usual in this book, let's answer some questions 
about user stories:

**How do we specify non-functional requirements using stories?** This is a
challenging issue when using agile methods. Indeed, the customer 
representative (or Product Owner) may write a story stating that "the system's 
maximum response time should be 1 second." However, it doesn't make sense 
to allocate this story to a given sprint as it should be a concern in 
each sprint of the project. Therefore, the best solution is to allow (and ask) 
the PO to write stories about non-functional requirements, but use 
them primarily to reinforce the "done criteria" for stories. For example, 
for the implementation of a story to be considered complete, it should 
pass a code review aimed at detecting performance problems. Before the 
code moves to production, a performance test can also be executed to 
ensure that the non-functional requirements are being met. In short, 
one can---and should—--write stories about non-functional requirements, 
but they do not go into the product backlog. Instead, they are used to 
refine the "done criteria for stories.
