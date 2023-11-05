
# Introduction

> *Our civilization runs on software.* -- Bjarne Stroustrup

In this first chapter, we describe the goals and problems 
investigated  in Software Engineering (Section 1.1). We also 
provide an overview of the main topics studied in this area 
of the Computer Science (Section 1.2). Our intention is to give the
reader a broad perspective of the area before delving into specific
problems and solutions. Furthermore, since Software
Engineering is a very broad area, we also characterize the types of
software systems that benefit from the techniques and concepts 
presented in this book (Section 1.3). The objective is to avoid 
false expectations regarding the content of our work. 
Finally, we present the structure and the topics covered in the 
remaining chapters of the book (Section 1.4).

## Definition, Context, and History

In the modern world, everything is software. For instance, 
companies of any size depend on software systems to fulfill their
mission. Governments also interact with citizens through software, for
example, to provide public services or collect taxes. Companies sell 
an immense range of products directly to consumers through e-commerce
platforms. Software is also embedded in  many physical products and devices, such as cars, airplanes, satellites, and robots.
Finally, software is revitalizing traditional industries and services
such as telecommunications, transportation in large urban centers, and
advertising.

Thus, due to the relevance of software in our world, it is 
not a surprise that there is a field in Computer Science that 
investigates solutions for the development of software systems---particularly the more complex and larger ones.
This field is called **Software Engineering**.

Software Engineering deals with the application of systematic,
disciplined, and quantifiable approaches to implementing, operating,
maintaining, and evolving software systems. As we said, it is the 
field of Computer Science that is concerned with proposing and applying 
engineering principles in software construction.

Historically, the field emerged in the late '60s of the last century.
Around this time, the first modern computers were designed and began to
be used for solving problems. However, at that time software
was not a central concern, but rather building machines that could 
solve a limited number of scientific or mathematical problems.

However, progress in hardware technologies quickly changed this 
scenario. By the end of the '60s, computers were more popular, 
they were present in many universities and they also started to 
be used by major companies. Thus, computer scientists began 
to face a new challenge, since users started to demand more 
complex and diverse applications, including commercial systems
 in areas such as payroll, accounting, and inventory management.

\index{NATO Conference}
**NATO Conference**: In October of 1968, a group of around 50
renowned Computer Scientists gathered for a week in
Garmisch, Germany, for a conference sponsored by a scientific committee
of NATO, the military organization that congregates the countries
of the North Atlantic (see a picture of the meeting in the next 
figure). The meeting's goal was to draw attention to a "crucial 
problem of computer usage, the so-called software". The conference 
produced a report with over 130 pages, stating the need to 
construct software based on practical and theoretical principles, 
as happens in well-established branches of engineering. To make 
this proposal clearer, the participants decided to coin the term Software
Engineering. For this reason, the NATO Conference is considered the
historical landmark for the creation of the Software Engineering
research area in Computer Science.

![Scientists at the 1968 NATO conference on Software Engineering.
Reproduction kindly authorized by Prof. Robert McClure.](figs/cap1/otan.jpg){width=45%}

The following comment, from one of the participants of the NATO 
Conference, illustrates the challenges faced by the newly-created
research area:

> The basic problem is that certain classes of systems are 
placing demands on us which are beyond our capabilities and 
our theories and methods of design and production at this time. 
There are many areas where there is no such thing as a 
crisis---sort routines, payroll applications, for example. 
It is large systems that are encountering great difficulties. 
We should not expect the production of such systems to be easy.

More than half a century after the NATO Conference, the achievements
in techniques and methods for software construction are notable. 
Today, it is already known that software---most of the time---should not 
be built in strictly sequential phases, as occurs with 
traditional engineering products, such as Civil Engineering,
Mechanical Engineering or Electrical Engineering. There are 
also many patterns that can be used by software engineers in their 
systems, so that they do not need to "reinvent the wheel" 
every time they face a new design problem. Libraries and frameworks for 
various purposes are widely available, so that software developers 
can reuse code without worrying about details inherent to tasks like
implementing graphical interfaces, manipulating data
structures, accessing databases, encrypting messages, among others. 
A variety of testing techniques can (and should) be used to assert 
that that failures do not occur when the code is put into 
production and used by real customers. It is also known 
that software systems age, like other
engineering products. Therefore, software also needs maintenance, 
not only corrective, to fix bugs reported by users, but also 
to ensure that the systems remain easy to maintain and understand
over the years.

### No Silver Bullet {.unnumbered}

\index{Brooks, Frederick}
Software 
development is inherently different from other engineering products,
especially when we compare software with hardware. Frederick
Brooks, Turing Award in Computing (1999) and one of the pioneers 
of the field of Software Engineering, was one of the first 
to draw attention to this fact. In 1987, in an essay titled 
*No Silver Bullet: Essence and Accident in Software Engineering*
([link](https://doi.org/10.1109/MC.1987.1663532)), he
discussed the peculiarities of the Software Engineering field.

\index{Difficulties!Essential}
\index{Difficulties!Accidental}
According to Brooks, there are two types of difficulties in 
software engineering: **essential difficulties** and 
**accidental difficulties**. The essential ones are part of
the nature of the field and thus they probably will not
be solved by any new technology or method that might 
be invented.

In general terms, the term silver bullet -- that is part of 
the essay title -- designates a magical solution to a 
complicated problem. Indeed, in folklore, a silver bullet is the 
only way to kill a werewolf, provided it is used on a full 
moon night. According to Brooks, because of the essential
difficulties that characterize the area, we should not assume the
existence of silver bullets in Software Engineering.
Despite, even after Brooks's essay, new software technologies 
are often promoted and sold as if they were silver bullets.

According to Brooks, the essential difficulties are:

1. **Complexity**: among the constructions that man can build, 
   software is one of the most challenging and most complex
   one. As a matter of fact, even  traditional engineering
   constructions, like satellites, nuclear power plants, or 
   rockets, are increasingly dependent on software.

2. **Conformity**: due to its nature, software has to adapt to its 
   environment, which changes all the time in our world. For example, 
   if a tax collection rule changes, all software in the related domain 
   needs to quickly adapted to it. Brooks notes that this does not 
   occur, for example, in Physics, as the laws of nature do not change
   according to men's decisions.

3. **Changeability**: in the case of software, there is a pressure 
   for constant evolution, for example to incorporate new features. 
   In fact, the more successful a software system is, the more demand 
   for changes it receives.

4. **Invisibility**: due to its abstract nature, it is difficult
   to visualize the size and consequently estimate the effort required
   to construct software systems.

Difficulties (2), (3) and (4) are specific to software systems,
that is, they do not occur in other engineering products, at least 
not at the same intensity. For example, when environmental 
legislation changes, car manufacturers have years to comply with 
the new rules. Additionally, cars are not changed, at least essentially, 
with new functionalities, after being produced. Finally, a car is 
a physical product with weight, height, width, seats, and
a geometric shape, which facilitates its valuation and pricing 
by final consumers.

On the other hand, software development also faces accidental 
difficulties. However, they are associated with technological
problems that engineers can solve, if properly trained and
assuming they have access to the necessary technologies and 
resources. As an example, we can mention the following 
accidental difficulties: a compiler that produces obscure error 
messages, an IDE that has many bugs and frequently crashes, 
a framework that lacks documentation or a Web application with an 
unintuitive interface. However, these problems 
are not an inherent characteristic of the mentioned systems. With
time, resources, and expertise, they can be adequately tackled.

\index{Linux}
\index{Google}

```{=latex}
\begin{esmbox}
```

**Real World**: To illustrate the complexity involved in 
building software systems, we give some numbers about 
the size of these systems, in lines of code. For example, the Linux
operating system , in its version 4.1.3, from 2017, has about 25 
million lines of code and contributions from almost 1,700 engineers 
([link](https://www.linuxfoundation.org/2017-linux-kernel-report-landing-page)). 
As a second example, Google's systems, in total, have more than 2 
billion lines of code, distributed across 9 million files, as in 
January 2015 ([link](https://doi.org/10.1145/2854146)).
At that time, an average of about 40,000 code change requests 
(commits) were performed, per day, by the company's software 
engineers.

```{=latex}
\end{esmbox}
```
## What is Studied in Software Engineering?

\index{SWEBOK}
To answer this question, we rely on the *Guide to the
Software Engineering Body of Knowledge*, also known by the acronym
SWEBOK ([link](http://www.swebok.org)). This 
report is organized by the IEEE Computer Society (an international
scientific society) with the support of various researchers 
and industry professionals. The purpose of the report is to
document the body of knowledge that characterizes the area 
that we call Software Engineering today.

The SWEBOK defines twelve knowledge areas in Software Engineering:

1.  Requirements Engineering

2.  Software Design

3.  Software Construction

4.  Software Testing

5.  Software Maintenance

6.  Configuration Management

7.  Project Management

8.  Software Processes

9.  Software Models

10. Software Quality

11. Professional Practice

12. Software Economics

In fact, the SWEBOK includes three other knowledge areas: 
Computing Foundations, Mathematical Foundations, and 
Engineering Foundations. However, as they are located in the 
frontier with other scientific areas, they are not
covered in this chapter. 

In the rest of this section, we briefly comment on each 
of the areas listed above. Our goal is to provide an 
overview of the knowledge developed over the years 
in Software Engineering and, thus, inform the reader 
about *what* is studied in this area.

### Requirements Engineering

\index{Requirements Engineering}
\index{Requirements!Requirements Engineering}

Requirements define *what* a system should do and *how* it
should operate. Thus, Requirements Engineering designates the 
activities carried out to analyze, document, and validate 
a system's requirements. Requirements can be **functional** 
or **non-functional**.

\index{Requirements!Functional}
\index{Requirements!Non-Functional}
Functional requirements define *what* a system should do; 
that is, which functionalities or services it should 
implement. Non-functional requirements, on the other hand, define 
*how* a system should operate, under which constraints, 
and with what quality of service. Examples of
non-functional requirements are performance, availability, 
fault tolerance, security, privacy, interoperability, capacity, maintainability, and usability.

For example, consider a banking application. In this case, 
the functional requirements include providing account balance, 
showing the statement, transferring values between accounts,
canceling a debit card, among others. Non-functional 
requirements, for example, include:

* Performance: it must provide account balance in under 
two seconds.

* Availability: it must be online 99% of the time.

* Fault tolerance: it must continue operating even if a certain 
data center fails.

* Security: it must encrypt all data exchanged with branches.

* Privacy: customer data should not be leaked to third parties.

* Interoperability: it must integrate with systems of 
the Central Bank.

* Capacity: it should be able to store and handle data for one 
million banking customers.

* Usability: it must have a version for visually impaired 
people.


### Software Design

\index{Software Design}
During design, the main code units of a software system
are defined, but only at the level of interfaces, 
including **provided interfaces** and **required interfaces**.
Provided interfaces are those services that a code unit 
makes public for use by the rest of the system. Required 
interfaces are those interfaces upon which a code unit 
depends to operate.

Therefore, during the design of a software system, we do 
not get into implementation details of each code unit, 
such as method implementation details, in case the system 
is implemented in an object-oriented language. For example, 
during the design of a banking system,  we can define 
a class to represent bank accounts, like the following one:

```
class BankAccount {
   private Customer customer;
   private double balance;
   public double getBalance() { ... }
   public String getCustomerName() { ... }
   public String getStatement (Date start) { ... }
   ...
}
```

First, it is important to note that the implementation above 
is quite simple, as our goal is only to explain the difference 
between software design and implementation. Thus, it is 
important to mention that `BankAccount` offers an interface to 
the other system classes, in the form of its public methods, 
which constitute the interface provided by the class. But
`BankAccount` also depends on another class, `Customer`; 
thus, the `Customer` interface is a required interface 
for `BankAccount`. Often, required interfaces are 
called dependencies. That is, `BankAccount` has a dependency 
on `Customer`.

\index{Software Architecture}
When the design is performed at a higher level and the code 
units have a coarser granularity---they are packages or folders, 
for example---it is classified as an architectural design. 
In other words, **software architecture** deals with the 
organization of a system at a level of abstraction higher than th
e one involving classes or similar constructs.

### Software Construction

\index{Software Construction}
Construction deals with implementation, that is, coding the 
system. At this point, there are many decisions that need to 
be made, such as defining the algorithms and data structures 
to be used, defining the third-party frameworks and libraries 
to be used; defining techniques for exception handling; defining
standards for names, layout, and code documentation and, last 
but not least, defining the tools to be used in development, 
including compilers, integrated development environments (IDEs),
debuggers, database managers, and tools for building interfaces.

### Software Testing 

\index{Software Testing}
\index{Dijkstra, Edsger W.}
Testing involves executing a program with a finite set of
cases and verifying whether it produces the expected behavior. 
This quote from Edsger W. Dijkstra---who also won 
the Turing Award in Computing (1982)---summarizes the benefits 
of testing, but also its limitations:

> "Software testing can show the presence of bugs, but not 
their absence."

We think that least three points should be discussed about 
testing  in this first chapter of our book. First, there are many 
types of tests. For example, **unit tests** (when we test a 
small unit of code, such as a class), **integration tests** 
(when we test a larger unit, such as a set of classes), 
**performance tests** (when we submit the system to a 
given load to check its performance), and **usability 
tests** (when we aim to check the usability of the 
system's user interface).

Second, tests can be used both for verification and for
validation. Verification aims to ensure that a system 
complies with its specification. With validation, 
the objective is to ensure that the system meets the 
customers needs. The difference between the concepts only exists 
because a system's specification might not attend the needs 
of its customers. This mismatch can be caused by an error in 
the requirements specification phase. For example, developers 
might have not understood the requirements or the client 
might have not explained them precisely.

Two sentences are often used to synthesize the differences 
between verification and validation:

*  **Verification**: are we implementing the system correctly? 
    That is, in accordance with its requirements.

*  **Validation**: are we implementing the correct system? That is,
    the one the customers or the market demands.

Thus, when we run a method to check whether it returns the 
specified results, we are performing a verification activity. 
On the other hand, when we perform a acceptance meeting with 
clients, presenting them the system results and features, 
we are conducting a validation activity.

\index{Defects}
\index{Bugs}
\index{Failures}
Third, it is also important to define and distinguish three 
terms related to tests: **defects**, **bugs**, and **failures**. 
To illustrate the difference between them, consider the following 
code that calculates the area of a circle, depending on a certain
condition:

```
 if (condition)
    area = pi * radius * radius * radius; 
```

This code has a defect because the area of a circle is "pi times
radius squared", not cubed. Bug is a more informal term, used
with different purposes. But the most common one is as a synonym
for defect. Finally, a failure occurs when a defective code is
executed — for example, when the `if` condition  above evaluates 
to true — and, as a result, causes the program to show an incorrect result. Therefore, not every defect or bug leads to failures, since 
the defective code may never be executed.

In summary: defective (or a buggy) code is a code that does not 
comply with its specification. If this code is executed and 
actually causes the program to produce an incorrect output, 
we say that a failure has occurred.

```{=latex}
\begin{esmbox}
```

**In-Depth:** In the literature on testing, the terms **error** 
and **fault** are sometimes mentioned. When this happens, the
meaning is the same as we adopt for *defect* before.
For example, the *IEEE Standard Glossary of Software Engineering
Terminology*
([link](https://doi.org/10.1109/IEEESTD.1990.101064))
defines a fault as an "incorrect step, process, or data definition
in a computer program; the terms error and bug are \[also\] used
to express this meaning". In summary, *defect*, *error*, *fault*
and *bug* are usually synonyms.

```{=latex}
\end{esmbox}
```

\index{Ariane, Explosion}
```{=latex}
\begin{esmbox}
```
**Real World**: There is a long list of software failures with
serious consequences both in financial terms and in terms of 
human lives. One of the most famous examples is the explosion 
of the French rocket Ariane 5, when launched in 1996, from Kourou 
in French Guiana. About 30 seconds after launch, the rocket 
exploded due to an unexpected behavior of one of the onboard 
systems, causing a financial loss of about half a billion dollars. 
Interestingly, the defect that caused the failure in
Ariane 5's onboard system was very specific, relatively simple,
and limited to a few lines of code, implemented in the ADA 
programming language, which is widely used in the development of 
military and space software. The buggy lines were responsible for
converting a 64-bit floating-point value to a 16-bit integer. 
During the tests and, probably, during previous rocket launches,
the conversion was always successful: the real number always
"fit" into an integer. However, on the date of the explosion, 
a condition that was never tested before required the conversion 
of a real larger than the largest integer that fits in 16 bits. 
Hence, a spurious result was generated, causing the rocket's 
control system to function erratically and leading to the explosion.
```{=latex}
\end{esmbox}
```

### Software Maintenance and Evolution 

\index{Software Maintenance}

Just like traditional engineering systems, software also needs
maintenance. In this book, we will use the following 
classification for the types of maintenance that can be carried 
out on software systems: **corrective**, **preventive**, 
**adaptive**, **refactoring**, and **evolutionary**.

\index{Software Maintenance!Corrective}
Corrective maintenance aims to correct bugs reported by
users or other developers.

\index{Software Maintenance!Preventive}
On the other hand, preventive maintenance aims to correct 
latent bugs in the code that have not yet caused failures 
visible to the system's users.

\index{Millennium Bug}
```{=latex}
\begin{esmbox}
```
**Real World**: The maintenance activities carried out by 
several companies before the turn of the last millennium, from 
1999 to 2000, are an example of preventive maintenance. At that 
time, many software applications were using two digits to 
store the year of a date, that is, dates were in the DD-MM-AA 
format. Thus, the companies were afraid that in 2000 and 
subsequent years some operations with dates would return 
incorrect values. For example, a subtraction 00 - 99 could 
result to an unexpected result. For this reason, companies 
set up special task groups to carry out maintenance on 
their systems and convert all date values to the 
DD-MM-YYYY format. As these activities were carried out before 
the turn of the millennium, they are an example of preventive 
maintenance.
```{=latex}
\end{esmbox}
```

\index{Software Maintenance!Adaptive}
Adaptive maintenance aims to adapt a system to a change
in its environment, including technology, legislation, 
rules for integration with other systems or requests from 
new customers. As examples of adaptive maintenance, 
we can mention:

* The migration of a system from Python 2.7 to Python 3.0.

* The customization of a system to meet the requirements 
  of a new client — that is, before deploying a system in 
  new a client it is common to make changes to accommodate 
  for specifics of their business.

* The adaptation of a system to comply with changes in 
  legislation or other contextual changes.

Refactorings are changes made to code that preserve its
external behavior but improve its design and maintainability. 
Examples of refactoring operations include renaming a
method or variable (to a more intuitive and easy-to-remember 
name), breaking a large method into smaller methods (to 
facilitate understanding) or moving a method to a more
appropriate class.

\index{Software Maintenance!Evolutionary}
Evolutionary Maintenance is performed to include new features 
in a system or to introduce significant improvements in existing
features. Software Systems can be used for decades exactly 
because they undergo evolutionary maintenance, which preserve 
their value to the customers. For example, many banking systems 
were created in the 70s and 80s in programming languages such 
as COBOL. However, they have undergone various changes and
improvements, including the implementation of several new
features.

\index{Legacy Systems}
**Legacy Systems** are old systems, based on languages,
operating systems, and databases that are technologically outdated.
For this reason, the maintenance of these systems is more 
costly and risky. However, it is important to note that legacy 
does not mean irrelevant, because often these systems perform
critical operations for their customers.

```{=latex}
\begin{esmbox}
```
**In-Depth:** In the literature, there are alternative 
classifications for software maintenance types. One of them, 
proposed by Lientz & Swanson, in 1978
([link](https://dl.acm.org/citation.cfm?id=601062)),
classifies maintenance into the following categories: (1) Corrective,
exactly as we defined before; (2) Perfective, refers
to the addition of new functionalities; in this book, we 
decided to call it evolutionary maintenance; (3) Adaptive, 
refers to changes in the operational environment of the 
software, such as supporting a new hardware or operating 
system; therefore, it does not include, for example, 
customizations demanded by new clients, as proposed in this book; 
(4) Preventive, refers to changes aimed at increasing a system's maintainability; in this book, we opted for the more common 
term today, which is refactoring.
```{=latex}
\end{esmbox}
```

### Configuration Management 

\index{Configuration Management}
Currently, it is inconceivable to develop software without 
a version control system, such as git. These systems store all 
the versions of software, covering not just the source code, 
but also documentation, manuals, web pages, and reports. 
They also allow you to restore a particular version. 
For example, if you change the code and this changes results
in a critical bug, you can easily return to the previous 
version, prior to the bug's introduction.

\index{Semantic Versioning}
However, configuration management is more than just using a
system like git. It includes defining a set of policies
for managing the versions of a system. For example, 
a development team can decide that the releases of a library 
they are implementing will be identified in the format 
*x*.*y*.*z*, where *x*, *y* and *z* are integers. 
An increment in *z* occurs when a new release is launched 
with only bug fixes (commonly called a *patch*); an 
increment in *y* occurs when a release with small 
features is launched (commonly called a *minor* version); 
and finally, an increment in *x* occurs when a release 
with relevant new features is launched (commonly, 
called a *major* version). This scheme for identifying releases 
is known as **semantic versioning**.

### Project Management 

\index{Project Management}
\index{Stakeholders}
Software development requires the use of project management 
practices and activities such as negotiating contracts with
clients (for defining deadlines, prices, schedules, etc.), 
human resource management (including hiring, training, 
defining promotion policies, and remuneration values), 
risk management, monitoring competition, marketing, finance, 
among others. In a project, the term **stakeholder** 
designates all parties that have interest in it. That is, 
the stakeholders are those who affect or are affected by the 
project, whether they are individuals or organizations. For 
example, common stakeholders in software projects
include its developers and its users, but also, project 
managers, subcontracted companies, suppliers of any 
nature, possibly some level of government, among others.

\index{Brooks, Frederick}
There is a well-known quote, also by Frederick Brooks, 
that captures a peculiarity of software projects. 
According to Brooks:

> "Adding manpower to a late software project makes it later."

\index{Brooks' Law}
\index{Project Management!Brooks' Law}
This comment became so famous that it is known 
as **Brooks' Law**. Basically, this effect happens because the new
developers need first to understand and comprehend the entire 
system, its architecture and design, before they start
to produce useful code. In addition, larger teams increase the
communication and coordination efforts to make and explain 
decisions. For example, if a team has three developers
 (d~1~, d~2~, d~3~), there are three possible communication channels 
(d~1~-d~2~, d~1~-d~3~ and d~2~-d~3~); if it grows to four developers, 
the number of channels doubles to six channels. If the team 
grows to 10 developers, there are 45 communication 
channels. For this reason, modern software is typically
developed in small teams, with about a dozen engineers, 
if that.


```{=latex}
\begin{esmbox}
```

**In-Depth Look:** Brooks' Law was proposed in a classic book 
on software project management called *The
Mythical Man-Month*, whose first edition was published in 1975
([link](https://dl.acm.org/citation.cfm?id=207583)). In the
book, Brooks reports the lessons he learned early in his career
as a manager responsible for IBM's first operating systems.
In 1995, a second edition of the book was released to 
commemorate its 20th anniversary. This edition included a new 
chapter with the article *No Silver Bullet — Essence and Accidents 
of Software Engineering*, originally published in 1987 (and which
we have already commented in this chapter). In 1999, Frederick Brooks
won the Turing Award, considered the Nobel Prize of Computer 
Science.

```{=latex}
\end{esmbox}
```

### Software Development Processes 

\index{Software Processes}
A development process the activities and events that should be 
followed to build and deliver software. An analogy can be made, 
for example, with the construction of buildings, which takes 
place according to certain activities: foundation, masonry, 
roofing, plumbing installations, electrical installations, 
finishing, painting, among others.

There are two main types of processes that can be used in the construction of software systems:

*  **Waterfall processes**

*  **Agile processes**

\index{Waterfall}
Waterfall processes were the first to be proposed, way back in
the '70s, when software engineering was beginning to gain
prominence. They were inspired by the processes used in 
traditional engineering, which are largely sequential, 
as illustrated in the building example, used in the 
first paragraph of this section. Waterfall processes were 
widely used until the 1990s and much of the reason is due to 
a standardization issued by the US Department of Defense in 1985.
As a result, around that time, all software purchased or 
contracted by the Department of Defense had to be built 
using Waterfall.

Waterfall processes — also called **plan-driven processes** — 
propose that the construction of a system should follow sequential
stages, like a waterfall, in which the water flows from one level 
to another. These stages are requirement specification, analysis 
(or high-level design), detailed design, coding, and testing. 
At the end of this "waterfall" is complete, the system is released 
for production, that is, for effective use by its users, as 
illustrated in the next figure.

![Phases of a Waterfall process.](./figs/cap1/waterfall-en){width=87%}

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