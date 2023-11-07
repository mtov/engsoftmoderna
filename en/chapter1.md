
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

> Software testing can show the presence of bugs, but not 
their absence.

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

> Adding manpower to a late software project makes it later.

\index{Brooks' Law}
\index{Project Management!Brooks' Law}
This comment became so famous that it is known 
as **Brooks' Law**. Basically, this effect happens because the new
developers need first to understand and comprehend the entire 
codebase, its architecture and design, before they start
to produce useful code. In addition, larger teams increase the
communication and coordination efforts to make and explain 
decisions. For example, if a team has three developers
 (d~1~, d~2~, d~3~), there are three communication channels 
(d~1~-d~2~, d~1~-d~3~ and d~2~-d~3~); if it grows to four developers, 
the number of channels doubles to six channels. If the team 
grows to 10 developers, there are now 45 communication 
channels. For this reason, modern software is typically
developed in small teams, with about a dozen engineers, 
if that.


```{=latex}
\begin{esmbox}
```

**In-Depth:** Brooks' Law was proposed in a classic book 
on software project management called *The
Mythical Man-Month*, whose first edition was published in 1975
([link](https://dl.acm.org/citation.cfm?id=207583)). In the
book, Brooks reports the lessons he learned early in his career
as a manager responsible for IBM's first operating systems.
In 1995, a second edition of the book was released to 
commemorate its 20th anniversary. This edition includes a new 
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
A development process defindes the activities and events that should 
be followed to build and deliver software. An analogy can be made, 
for example, with the construction of buildings, which takes 
place according to certain activities, such as : foundation, masonry, 
roofing, plumbing installations, electrical installations, painting, 
among others.

There are two main types of processes that are used in the construction 
of software systems:

*  **Waterfall processes**

*  **Agile processes**

\index{Waterfall}
Waterfall processes were the first to be proposed, way back in
the '70s, when software engineering was beginning to gain
prominence. They were inspired by the processes used in 
traditional engineering, which are largely sequential, 
as illustrated in the building example before. Waterfall 
processes were widely used until the 1990s and much of the 
reason is due to a standardization issued by the US Department 
of Defense in 1985. As a result, around that time, all software 
 contracted by the Department of Defense had to be built 
using Waterfall.

Waterfall processes — also called **plan-driven processes** — 
propose that the construction of a system should follow sequential
stages, like a waterfall, in which the water flows from one level 
to another. As illustrated in the next figure, these stages are 
requirement specification, analysis (or high-level design), detailed 
design, coding, and testing. At the end of this "waterfall", 
the system is released for production, that is, for effective 
use by its users.

![Phases of a Waterfall process.](./figs/cap1/waterfall-en){width=87%}

\index{Agile Methods}
\index{Agile Manifesto}
However, around the late '90s, Waterfall processes started to be 
criticized due to the repeated delays and issues with the projects. 
which were occurring frequently. The main problem is 
that Waterfall assumes a complete requirement gathering phase, 
followed by a detailed design phase, which followed by a complete 
implementation and testing phase. Therefore, the system is validated with
users only after finishing these phases, which may occur years after
the beginning. By then, the world may have changed, as well as the 
needs of the customers, who no longer need the system they demanded 
years before. So, gathered in a Utah city, in the United States, 
in February 2001, a group of 17 software engineers proposed an 
alternative way to construct software, called Agile, which is also 
the name of the manifesto they published at that meeting ([link](https://agilemanifesto.org/)).
In contrast to Waterfall processes, in Agile a system 
is built incrementally and iteratively. Small increments of 
functionality are produced at intervals of about one month (or less 
than that) and they are immediately validated by the users. Once the
software increment is approved, the cycle repeats.

Agile principles had a profound impact on the industry. Today, they are 
followed by a wide variety of organizations that produce software, 
from small companies to large tech companies. Various methods based 
on these principles were also proposed, such as **XP**, **Scrum**, 
and **Kanban**. 

These agile methods also helped to spread various development practices, 
such as **automated testing**, **test-driven development** (i.e., writing 
the tests first, before the actual code), and **continuous integration**. 
Continuous integration recommends that developers integrate the code 
they produce immediately. If possible, every day, for example. The 
goal is to avoid integration conflicts, which occur when two developers 
change the same lines of code in parallel. The first developer to integrate 
their lines will be successful; while the second one will be informed 
that the lines of code have been modified by the first developer.

### Software Models 

\index{Software Models}
A model provides a higher level representation of a system than its 
source code. The goal is to allow developers to analyze essential 
properties and characteristics of a system, in an easier and faster way, 
without diving into the details of the code. Models can be created 
before the code, for example, during the design phase. In this case, 
they are used to support **Forward Engineering**. That is, first you 
create a model to have a higher level understanding of a system, 
before moving on to coding. On the other hand, models can also 
be created to help understand an existing code base. In this case, 
they are an instrument of **Reverse Engineering**. 

\index{UML}
Usually, software models use graphical notations. For example, 
**UML** (*Unified Modeling Language*) is a notation that
defines more than a dozen graphical diagrams to model
structural and behavioral properties of a system. The next
figure shows a UML diagram — called a Class Diagram
— for the code used in the section on Software Design .
In this diagram, the rectangular boxes represent classes,
including their attributes and methods. Arrows are used 
to denote relationships between classes. There are editors 
for creating UML diagrams, which can be used, for example, 
in a Forward Engineering scenario.

![Example of UML Class Diagram](figs/cap1/uml-intro-en){width=80%}


### Software Quality

\index{Software Quality}
Quality is a recurring goal when engineering products. For example,
automobile manufacturers, cell phone makers, computer companies, 
construction always claim they have quality products. This fact 
is no different when the product is software. According to a 
classification proposed by Bertrand Meyer
([link](https://dl.acm.org/citation.cfm?id=261119)),
software quality can be evaluated in two dimensions: 
**external quality** or **internal quality**.

\index{Software Quality!External}
External quality considers factors that can be assessed without 
analyzing the code. Thus, external quality factors can be evaluated 
even by end-users, who are not experts in Software Engineering. 
As an example, we have the following external quality 
factors (or attributes):

*  Correctness: Does the software meet its specification? In normal
   situations, does it work as expected?

*  Robustness: Does the software continue to work when exceptional 
   events occur? For example, after a communication or disk failure. 
   Indeed, a robust software must not crash when such events occur. 
   Instead, it should at least warn users on the reasons leading 
   to the abnormal behavior.

*  Efficiency: Does the software make the best use of computational 
   resources? 

*  Portability: Can this software be ported to other platforms and 
   operating systems? Does it have versions for the major operating 
   systems, such as Windows, Linux, and macOS? Or, assuming it is 
   a mobile app, does it have versions for Android and iOS?

*  Ease of Use: Does the software have a user-friendly interface,
   clear error messages, support more than one language, etc? Can
   it be used by people with a disability, such as visual or 
   auditory difficulty?

*  Compatibility: Is the software compatible with the main data 
   formats in its area? For example, assuming the software is a 
   spreadsheet, does it import files in XLS and CSV formats?

\index{Software Quality!Internal}
On the other hand, internal quality considers properties and
characteristics related to the implementation of a system.
Therefore, internal quality can only be assessed by experts 
in Software Engineering and not by any user. Examples of 
internal quality factors (or attributes) include: modularity, 
code readability, maintainability, and testability.

To ensure software quality, various strategies can be used. 
First, **metrics** can be used to monitor the development of a 
software product, including source code metrics and process 
metrics. An example of a code metric is the number of lines 
in a program, which can be used to give an idea of its
size. Process metrics include, for example, the number of 
defects reported in production by end-users over a certain 
period of time.

\index{Code Review}
There are also practices that can be followed to ensure the 
production of quality software. Modernly, for example, many
organizations use **code reviews**, that is, the code 
implemented by a developer only goes into production after 
being reviewed and inspected by another developer of 
the team. The goal is to detect *bugs* in advance, before 
the system goes into production. In addition, code reviews 
serve to ensure the internal quality of the code, i.e., 
its maintainability, readability, modularity, among others.
It also disseminates good software engineering practices 
among the team members.

The next figure shows an example of code review, referring 
to an example we commented in the Software Testing section. 
when an organization uses code reviews, this code will be 
reviewed by another developer, called the reviewer, before
being put into production. This reviewer could notice the 
bug and tag the code with a question, before approving it.
Then, the developer responsible for the code could agree 
that, in fact, there is a bug, fix the code, and resubmit 
it for review. Finally, it would be approved by the reviewer. 
There are several tools to support code review processes. 
In the example, we used the tool provided by GitHub.

![Example of code review](figs/cap1/github.jpg){width=60%}

### Professional Practice

\index{Professional Practice}
As stated in Bjarne Stroustrup's opening quote of this chapter,
*our civilizagion runs software*. This generates many
opportunities for professionals in the field, but also generates 
responsibilities and concerns. Issues about the professional practice 
of software engineering start to arise when defining the curricula of 
undergraduate courses, which should foster a solid
background in the fundamental aspects of Computer Science, such as
algorithms and data structures. However, it is also important to
have courses covering the key aspects of software engineering, 
including the most important concepts, methods, and techniques. 
However, this study should be accompanied by practical examples 
and case studies, implemented using widely used technologies. 

\index{Professional Ethics}
Lastly, but very relevant and timely, there are questions about the 
role and **ethical responsibility** of software engineers, 
particularly in a society where human relationships are increasingly 
mediated by algorithms and software systems. In this sense, 
the main scientific societies in the area have codes that 
try to help Computing professionals — not necessarily 
just Software Engineers — to practice their profession 
ethically. As examples, we have the Code of Ethics of the ACM 
([link](https://www.acm.org/code-of-ethics)) and the IEEE 
Computer Society
([link](https://www.computer.org/education/code-of-ethics)).
The latter is interesting because it is specific to the practice of 
Software Engineering. For example, it recommends that:

> Software engineers shall commit themselves to making the 
analysis, specification, design, development, testing 
and maintenance of software a beneficial and respected 
profession. 

```{=latex}
\begin{exmbox}
```
**Real World:** Stack Overflow conducts an annual survey with
users of the platform. In 2018, this survey was answered by more 
than 100,000 developers, from the most varied countries. Among 
the questions, a group referred to ethical issues 
([link](https://insights.stackoverflow.com/survey/2018#ethics)). 
One of them asked if developers have an obligation to consider the 
ethical implications of the code they produce. Almost 80% of the 
respondents answered yes. Another question was the following: 
who is ultimately responsible for code that contributes to 
unethical behavior? In this case, 57.5% answered that it is 
the company's top management, while 23% said are the developer 
themselves. When asked if they would agree to write code with 
ethical concerns, 58% answered that no, and 37% said that it 
would depend on the required code.
```{=latex}
\end{exmbox}
```

### Economic Aspects

\index{Software Economics}
Several decisions and economic issues intertwine with
system development. For example, a software startup must 
decide which monetization model it wants to adopt, whether based on 
subscriptions or advertisements. Mobile app developers have
to decide on the price they will charge for their application, which, 
among other variables, requires knowledge about the price of the 
competitive apps. That's why it's no surprise that large software companies currently employ economists to assess the economic 
aspects of the systems they produce.

To discuss a more concrete case, in economics there is a frequent concern 
with the opportunity costs of a decision. That is, every 
decision has an opportunity cost, which are the missed opportunities 
when discarding one of the alternative decisions. In other words, when decision Y is discarded and decision 
X is made instead, the eventual benefits of Y become missed opportunities. 
For example, suppose that your company's main system has a 
list of bugs B to be corrected. Are there benefits in correcting B? 
Sure, this will make current customers happier; they won't 
think about switching to competitive systems, etc. However, there is also 
an opportunity cost in this decision. Specifically, instead of 
correcting B, the company could invest in new functionalities F, which
could help to expand the customer base. Which is better? To fix 
the bugs or to implement new functionalities? In the end, this is an 
economic decision.

## Classification of Software Systems

\index{ABC Systems}
Currently, as we are emphasizing in this Introduction, software permeates 
the most diverse human activities. In other words, we have software of all 
sizes, in all activities, with the most different functional and non-functional
requirements, developed by 1-2 developers or 
by large Internet corporations, etc. The risk is then to think that
there is only one way to develop software. In other words, that 
all software must be built using the same development process, the same design principles,
the same quality assurance mechanisms, etc.

\index{Meyer, Bertrand}
A classification proposed by Bertrand Meyer 
([link](https://bertrandmeyer.com/2013/03/25/the-abc-of-software-engineering/)) 
helps to distinguish and understand the different software systems that 
can be built and the Software Engineering principles 
most recommended for each of the proposed categories. According to this 
classification, there are three main types of software:

*  **A Systems** (*Acute*)

*  **B Systems** (*Business*)

*  **C Systems** (Casual)

We will first discuss C and A Systems (i.e., the systems at each 
end of the classification) and then B Systems.

\index{Over-engineering}
\index{Casual Systems}
C Systems (Casual) do not have pressure to have high levels of 
quality. They are systems that can have some bugs, which will not 
fundamentally compromise their operation. As an example, we 
can cite a script made for an academic work, a data 
conversion program (which will be used only once, to convert the 
data for a new database being purchased by the company), a system to manage the members of the University's Academic Directorate, a system to manage the meeting rooms available to a company, etc. Therefore, C Systems do not need to have high levels of internal quality; for example, they can have part of the 
duplicated code. They also do not need to have performance or a good 
interface. In general, they are developed by 1-2 programmers; in other words, 
they are small and not critical systems. For all these reasons, they do not 
benefit much from the practices, techniques, and processes studied in this 
book. On the contrary, in the case of C Systems, the greatest risk is 
**over-engineering***,* or in other words*,* the use of more sophisticated
resources in a context that does not demand such concerns. As it is commonly 
said, Software Engineering in this context is equivalent to "using a cannon ball to kill ants."

\index{Mission-Critical Systems}
At the other extreme, we have the A Systems (from *acute*, or mission 
critical). These are systems where any failure can cause immense 
damage, including the loss of human lives. They are systems to 
control an autonomous car, a nuclear power plant, an airplane, the 
equipment of an ICU, a subway train, etc. The example of the control system for the Ariane 5 rocket, used in the Software Testing section, is 
an example of an A System. The development of these systems should be 
done according to rigid processes, including rigorous code review and certification by external organizations. It's common to require 
redundancies not only in hardware, but also in the software itself. For 
example, the system runs in parallel on two machines and a decision 
is only made if both instances come to the same result. Finally, A Systems are often specified in a formal 
language, based on set theory or logic.

```{=latex}
\begin{alert}
```
**Alert:** Given all that was stated in the previous paragraph,
**A Systems (i.e., mission-critical systems) will not be addressed in this
book**.

```{=latex}
\end{alert}
```
 
What remains are B Systems (*Business*), which are exactly the ones that will benefit from the concepts studied in this book. These systems include 
the most diverse corporate applications (financial, human resources, logistics, sales, accounting, etc.), Web systems of various 
types, from systems with few pages to large social networks or 
search systems. Other applications include software libraries and frameworks, general usage applications (such as text editors, spreadsheets, image editors, etc.) and basic software systems (like 
compilers, database managers, IDEs, etc.). In these 
systems, the principles and practices of Software Engineering studied in this book 
can contribute with two main benefits: (1) they can make 
the development of B Systems more productive; (2) they can lead 
to the construction of B Systems with better quality, both internal (for 
example, systems that are easier to maintain) and external (for 
example, systems with fewer bugs in production).