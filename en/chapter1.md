
# Introduction

> *Our civilization runs on software.* -- Bjarne Stroustrup

In this initial chapter, we outline the objectives and 
challenges tackled in Software Engineering (see Section 1.1). 
We additionally provide an overview of the primary subjects 
investigated in this field of Computer Science (see Section 1.2). 
Our goal is to provide a comprehensive understanding of 
the field before diving into specific issues and techniques. As 
Software Engineering is a broad domain, we also discuss the 
types of software systems that can make use of the 
principles and practices presented in this book (see Section 1.3). 
This is done to avoid any misconceptions concerning the scope 
of our work. In conclusion, we present the topics addressed 
in the remaining chapters of the book (see Section 1.4).

## Definition, Context, and History

In today's world, virtually everything operates via software. 
Various organizations, including businesses of every scale 
and governmental entities, depend on software systems to 
deliver their services effectively. Governments often interact 
with citizens through software applications like public service 
delivery platforms and tax collection systems. Many businesses 
sell a wide range of products directly to consumers via 
e-commerce platforms. Software is also in physical products and 
devices including cars, airplanes, satellites, and robots. 
Furthermore, software is revitalizing traditional industries 
and services such as telecommunications, transportation in 
large urban centers, and advertising.

Given the crucial role software plays in our society, 
it's unsurprising that a subfield of Computer Science focuses 
on finding solutions for the development of software systems, 
particularly large and complex ones. This subfield is 
known as **Software Engineering**.

Software Engineering is concerned with the systematic, disciplined, 
and quantifiable approaches to develop, operate, maintain, and 
evolve software systems. As mentioned, this field is central to 
Computer Science and is engaged with applying engineering 
principles in software construction. 

Historically, Software Engineering as a field emerged in the 
late 1960s when the first generation of computers began to be 
used for problem-solving. However, at that time, software 
took a back seat, as the primary focus was building 
machines capable of solving a limited set of scientific or 
mathematical problems.

However, advancements in hardware technologies changed this 
scenario. By the end of the '60s, computers had become more 
common, were present in many universities, and businesses were 
beginning to reap the benefits of their use. Consequently, 
a new set of challenges surfaced, as users demanded more complex 
and diverse applications, including commercial systems for 
tasks such as payroll, accounting, and inventory management.

\index{NATO Conference}
**NATO Conference**: In October 1968, around 50 eminent 
Computer Scientists gathered for a week in Garmisch, Germany, 
for a NATO-sponsored conference. The purpose of this meeting 
was to discuss a "crucial problem of computer usage, the so-called software". The conference concluded with a 130-page report 
advocating the construction of software based on practical 
and theoretical principles, similar to other branches of 
engineering. In light of this proposition, the participants 
coined the term Software Engineering, effectively establishing 
this field in Computer Science. For this reason, the NATO 
Conference is considered the historical genesis of 
the Software Engineering research field.

![Scientists at the 1968 NATO conference on Software Engineering.
Reproduction kindly authorized by Prof. Robert McClure.](figs/cap1/otan.jpg){width=45%}

One of the participants of the NATO Conference summarized 
the challenges faced by the newly created research field:

> The basic problem is that certain classes of systems are 
placing demands on us which are beyond our capabilities and 
our theories and methods of design and production at this time. 
There are many areas where there is no such thing as a 
crisis---sort routines, payroll applications, for example. 
It is large systems that are encountering great difficulties. 
We should not expect the production of such systems to be easy.

More than half a century after the NATO Conference, 
techniques and methods for software construction have improved 
remarkably. It's now widely recognized that software, 
in most instances, should not be built in strictly sequential 
phases as happens with traditional engineering products. Many 
patterns can assist software engineers in their work, avoiding 
the need to reinvent the wheel for every new design problem. 
Libraries and frameworks for various purposes are 
available, allowing developers to reuse code without 
delving into the details of tasks such as implementing graphical 
interfaces, manipulating data structures, accessing databases, 
and encrypting messages. A multitude of testing techniques 
can—and should—be deployed to ensure that the produced code 
functions as expected when used by actual customers. 
Like other engineering products, software also 
deteriorates over time and therefore require maintenance, 
not only for bug fixing but also to ensure their long-term 
maintainability and comprehension.

### No Silver Bullet {.unnumbered}

\index{Brooks, Frederick}
Software development has inherent characteristics when compared to 
other engineering products, especially hardware. Frederick 
Brooks, a 1999 Turing Award recipient and a pioneer in Software 
Engineering, was among the first to underscore this uniqueness. 
In 1987, he wrote an essay titled *No Silver Bullet: Essence 
and Accident in Software Engineering* ([link](https://doi.org/10.1109/MC.1987.1663532)) where he highlighted 
the peculiarities of Software Engineering.

According to Brooks, there are two key types of challenges 
in software engineering: **essential difficulties** and 
**accidental difficulties**. Essential ones are intrinsic 
to the field and are unlikely to be solved by any novel 
technology or method.

The term silver bullet, as used in Brooks's essay title, 
refers to a magical solution to a complex problem. Brooks 
argued that due to the innate challenges of Software 
Engineering, we should not anticipate the existence of 
silver bullets in the field. Nonetheless, many new software 
technologies are often marketed as if they were, 
in fact, silver bullets.

Brooks described the following essential difficulties:

1. **Complexity**: Of all human-made constructions, 
software stands out as one of the most intricate and 
complex. Even traditional engineering constructs, 
like satellites, nuclear power plants, or rockets, 
are increasingly relying on software.

2. **Conformity**: Software must adapt continuously 
to its ever-changing environment. For instance, 
changes in tax legislation require prompt adaptations by all 
related software. This level of adaptability is not 
required in other fields like Physics where natural 
laws do not change due to human decisions.

3. **Changeability**: There is constant pressure for 
software to evolve and incorporate new features. 
In fact, the more successful a software system, the more 
it is likely to attract demands for modifications.

4. **Invisibility**: It is inherently challenging to visualize
the size and effort required to create software due to 
its abstract nature.

Challenges (2), (3), and (4) are exclusive to software 
systems. They do not exist in other engineering products, 
at least not with the same intensity. When environmental 
laws change, car manufacturers have years to comply with 
new legislation. Also, cars, once manufactured, do 
not usually receive new functionalities. Furthermore, 
a car's physical properties, such as weight, height, 
width, seats, and geometric shape, facilitate valuation 
by consumers.

Software development also faces accidental difficulties, 
which can typically be solved by engineers given adequate 
training and access to existing technologies and resources. 
Examples of such difficulties include an IDE that frequently 
crashes, a compiler that produces cryptic error messages, 
a framework missing documentation, or a web application 
with a confusing interface.

\index{Linux}
\index{Google}
```{=latex}
\begin{esmbox}
```
**Real World Insight**: The complexity involved in building software 
systems can be illustrated by considering their scale. 
For instance, as of 2017, the Linux operating system 
(version 4.1.3) comprised about 25 million lines of code, 
which were produced by nearly 1,700 engineers ([link](https://www.linuxfoundation.org/2017-linux-kernel-report-landing-page)). Another example is Google's applications which, as of January 
2015, contained over two billion lines of code, 
distributed across nine 
million files ([link](https://doi.org/10.1145/2854146)). 
At that time, Google's software engineers submitted 
about 40,000 code change requests per day on average.
```{=latex}
\end{esmbox}
```

## Topics of Study in Software Engineering

\index{SWEBOK}
To discuss the core areas of study in software engineering, 
we refer to the *Guide to the Software Engineering Body 
of Knowledge*, also known as the SWEBOK 
([link](http://www.swebok.org)). 
This comprehensive report is organized by the IEEE Computer 
Society, an internationally recognized scientific society. 
It is crafted with the expertise of multiple researchers 
and industry professionals. The aim of the SWEBOK is to 
document and compile the body of knowledge indicative of 
the field we now recognize as Software Engineering.

The SWEBOK identifies and categorizes the following twelve 
key areas of Software Engineering:

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

The SWEBOK also outlines three additional knowledge areas: 
Computing Foundations, Mathematical Foundations, and 
Engineering Foundations. However, given that they 
overlap with other scientific domains, they 
won't be featured in this book.

In the remainder of this section, we provide a summary of 
each of the twelve key areas identified above. Our objective
is to give an overview of the knowledge accumulated over 
the years in Software Engineering and, consequently, shed 
light on what is studied in this field.

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
Functional requirements provide a detailed definition of 
the functionalities or services a system should provide. 
On the other hand, non-functional requirements outline *how* 
a system should operate, including any constraints and 
the expected quality of service. Examples of non-functional 
requirements include, but are not limited to, performance, 
availability, fault tolerance, security, privacy, 
interoperability, capacity, maintainability, and 
usability.

Let's consider a banking application as an example. The 
functional requirements of this application may include 
account balance display, statement generation, transfers 
between accounts, and debit card cancellation, among others. 
Meanwhile, the non-functional requirements might be as 
follows:

* **Performance**: The application must be able to provide an 
account balance within two seconds.
* **Availability**: The application must be online 99% of 
the time.
* **Fault tolerance**: The application must continue 
functioning even if a specific data center fails.
* **Security**: The application must encrypt all data to 
be exchanged with branches.
* **Privacy**: Customer data must be maintained confidential 
and not be leaked to third parties.
* **Interoperability**: The application has to integrate 
with Central Bank systems.
* **Capacity**: The application should have the capacity 
to store and handle data for one million banking customers.
* **Usability**: The application must be accessible for 
visually impaired individuals.


### Software Design

\index{Software Design}
Software design involves determining the primary code 
units of a software system. However, this process only gets 
to the level of interfaces, which include **provided 
interfaces** and **required interfaces**. Provided interfaces 
are the services that a code unit makes public for other parts 
of the system, while required interfaces are those that a 
code unit depends on for operation.

Therefore, during software system design, implementation 
details of each code unit, such as the specifics of method 
implementations, are not addressed. For instance, in 
designing a banking system, a class to represent bank 
accounts might be defined as follows:

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

It's crucial to note that this is a simplified 
implementation, used only for illustrative purposes. The 
`BankAccount` class provides an interface to other 
system classes through its public methods, thus constituting 
the provided interface. However, `BankAccount` also relies 
on the `Customer` class, making the `Customer` interface 
a required one for `BankAccount`. This dependency on 
required interfaces is often referred to as 'dependencies'. 
In this case, `BankAccount` depends on `Customer`.

\index{Software Architecture}
When design gets more abstract and involves larger units 
like packages or folders, it steps into the domain of 
architectural design. Essentially, **software architecture** 
refers to the organization of a system at a higher level of 
abstraction than the one involving classes or comparable 
constructs.

### Software Construction

Construction refers to the implementation phase, otherwise 
known as coding the system. This involves making crucial 
choices, such as deciding on the algorithms and data structures 
to use, installing and configuring third-party frameworks and 
libraries, defining exception handling policies, reaching a
consensus on standards for names, indentation, and code 
documentation, and also selecting the development tools, such as 
compilers, integrated development environments (IDEs), debuggers, 
database managers, and interface building tools.

### Software Testing 

Testing involves executing a program with a finite set of cases 
and checking whether it delivers the expected outcomes. 
As 1982 Turing Award recipient Edsger W. Dijkstra succinctly 
put it:

> Software testing can reveal the presence of bugs, but not their absence.

There are at least three critical points to address about 
testing in this introductory chapter. First, there are many types 
of tests, including **unit tests** (testing small code units like 
a class), **integration tests** (testing larger units like a 
set of classes), **performance tests** (checking system performance 
under specific loads), and **usability tests** (evaluating the 
system's user interface's usability).

Second, testing serves both verification and validation purposes. 
Verification ensures a system conforms to its specifications, while
validation checks if the system meets customer needs. The two 
concepts are distinct because specifications may at times fail to 
meet customer needs. This might be due to an error during the 
requirements specification phase. Misunderstandings between 
developers and users, or simply poor explanations by users, are 
typical causes.

Two commonly used phrases succinctly differentiate verification and validation:

* **Verification**: Are we correctly implementing the system as per its requirements?
* **Validation**: Are we implementing the correct system—the one that meets customer or market needs?

For instance, running a method to check its return of specified 
results is a verification activity, while conducting an acceptance 
meeting to demonstrate the system to clients is a validation 
activity.

It's also necessary to distinguish between three important 
testing-related terms: **defects**, **bugs**, and **failures**. For illustration purposes, take the following code that computes the 
area of a circle depending on a certain condition:

```
if (condition)
    area = pi * radius * radius * radius; 
```

This code contains a defect, as the area of a circle should be 
"pi times radius squared," not cubed. The term *bug* is frequently 
used informally and often the same meaning as defects. However, 
a failure occurs when the defective code is executed––for instance, 
when the `if` condition above is true, and as a result, the 
program delivers an incorrect result. Consequently, not every 
defect or bug results in a failure since the defective code 
might never be executed.

In summary: defective (or buggy) code is the one that fails to 
conform to its specification. If this code is executed and 
yields incorrect output, it is then that we state that 
a failure has happened.

```{=latex}
\begin{esmbox}
```
**For Further Exploration:** Literature on testing may sometimes mention 
**error** and **fault** terms. These terms carry the same 
meaning we attributed to *defect*. For instance, the 
*IEEE Standard Glossary of Software Engineering Terminology*([link](https://doi.org/10.1109/IEEESTD.1990.101064)) defines a 
fault as an "incorrect step, process, or data definition in a computer
program; the terms error and bug are [also] used to express this 
meaning." In essence, *defect*, *error*, *fault*, and *bug* 
are synonymous.
```{=latex}
\end{esmbox}
```

```{=latex}
\begin{esmbox}
```
**Real World Insight:** There are many software failures that have had 
serious financial and human consequences. A prominent example 
is the 1996 explosion of French rocket Ariane 5 shortly 
after its launch from Kourou, French Guiana. About 30 seconds 
after the launch, the rocket exploded thanks to an unexpected 
behavior of one of its onboard systems. This resulted in a 
financial loss of approximately half a billion dollars. 
Curiously, the defect that caused the failure was minor, 
specific, and confined only to a few lines of an ADA code (which 
is a programming language extensively used in military and 
space software development). The defective lines were responsible
for converting a 64-bit floating-point value to a 
16-bit integer. During testing and likely previous rocket launches, 
the conversion always succeeded––the real number always fit into 
an integer. However, on the fatal launch day, an untested 
condition required the conversion of a larger real number 
than the largest 16-bit integer could accommodate. This 
generated an erroneous result, causing the rocket's control 
system to malfunction and subsequently result in its explosion.
```{=latex}
\end{esmbox}
```
### Software Maintenance and Evolution 

\index{Software Maintenance}
Software systems, like traditional engineering systems, require 
maintenance. In this book we categorize the types of maintenance 
that may need to be carried out on a software system into 
**corrective**, **preventive**, **adaptive**, **refactoring**, 
and **evolutionary**.

\index{Software Maintenance!Corrective}
Corrective maintenance aims to address bugs reported by users or 
other developers.

\index{Software Maintenance!Preventive}
Preventive maintenance, on the other hand, focuses on addressing 
latent bugs in the code that haven’t yet caused noticeable 
failures for the system's users.

\index{Millennium Bug}
```{=latex}
\begin{esmbox}
```
**Real World Insight**: An example of preventive maintenance can 
be seen in the actions taken by many companies before the turn 
of the millennium, from 1999 to 2000. At this time, a significant 
number of software applications used two digits to represent the 
year in date values, i.e., dates were in the DD-MM-AA format. 
This led to concerns that date operations in the year 2000 
and beyond could produce incorrect results. For instance, 
the calculation 00 - 99 might return an unexpected result. 
To prevent this, companies created special task groups to 
convert all date values in their systems to the DD-MM-YYYY 
format, an action that was a prime example of preventive 
maintenance.
```{=latex}
\end{esmbox}
```

\index{Software Maintenance!Adaptive}
Adaptive maintenance aims to adjust a system in response to 
changes in its environment, including technological changes, 
new legislative rules, integration requirements with 
other systems, or customization requests from new users. 
Examples include:

* Updating a system from Python 2.7 to Python 3.0.
* Customizing a system to meet the requirements of a new user.
* Modifying a system to comply with changes in legislation or 
other contextual changes.

Refactorings are changes in the code that don't change its external 
behavior but improve its design and ease of maintenance. 
Refactoring operations include renaming a method or variable, 
breaking a large method into smaller ones, or moving a method 
to a more suitable class.

\index{Software Maintenance!Evolutionary}
Evolutionary Maintenance is performed to add new features to 
a system or to significantly improve existing ones. Its 
purpose is to preserve the system's value to the customers. 
Many banking systems developed in the 70s and 80s, for instance, 
have been continually updated and improved, ensuring their 
ongoing relevance and value.

\index{Legacy Systems}
**Legacy Systems** are older systems built on outdated 
languages, operating systems, and databases. Despite being 
obsolete in technological terms, these systems remain vital due 
to the critical operations they perform.

```{=latex}
\begin{esmbox}
```
**For Further Exploration:**: Some alternative classifications 
for software maintenance types can be found in the literature. 
One proposed by Lientz & Swanson in 1978 
([link](https://dl.acm.org/citation.cfm?id=601062)), 
organizes maintenance activities into four categories: corrective, 
perfective (adding new functionalities), adaptive (concerning 
changes in the software's operational environment), and 
preventive (changes aimed at enhancing a system's 
maintainability).
```{=latex}
\end{esmbox}
```

### Configuration Management 

\index{Configuration Management}
Version control systems, such as Git, are an integral part 
of modern software development. These systems store all versions 
of a software project, whether it's source code, documentation, 
manuals, web pages, or reports. If a change introduces a critical 
bug, these systems facilitate the easy restoration of a 
specific previous version.

\index{Semantic Versioning}
Configuration management, however, is more extensive than just 
using a system like Git. It encompasses the definition of 
policies to handle system versions. For example, a team might 
decide on an *x*.*y*.*z* format to identify the versions of a 
library they're working on, with *x*, *y*, and *z* being 
integers. A change in *x* indicates a major version launch 
with substantial new features, *y* denotes a minor version 
with small updates, while *z* points to a patch release 
for bug fixes. This identification scheme is often referred 
to as **semantic versioning**.

### Project Management 

\index{Project Management}
\index{Stakeholders}
Project management plays a crucial role in software development. 
It involves activities ranging from negotiating contracts 
(which define deadlines, prices, schedules, etc.) with clients, 
human resource management (hiring, training, and setting 
promotion policies and remuneration values), to risk management, 
monitoring competition, finance, and marketing. 
In this context, **stakeholders** refer to all entities with a 
vested interest in the project. This usually includes individuals 
or organizations that affect or are affected by the project, 
such as developers, project managers, contracted companies, 
supply vendors, and in some cases, government entities.

\index{Brooks, Frederick}
\index{Brooks' Law}
\index{Project Management!Brooks' Law}
Brooks' Law, stated by Frederick Brooks, is a well-known 
adage in the are of software projects:

> Adding manpower to a late software project makes it later.

New developers need time to understand the codebase, architecture, 
and design before becoming productive. Moreover, larger teams 
need more communication and coordination to facilitate 
decision-making. For instance, a team with three developers 
(d~1~, d~2~, d~3~) would have three communication channels 
(d~1~-d~2~, d~1~-d~3~, and d~2~-d~3~). If the team expands to 
four members, the channels double to six. With ten developers, 
the communication channels increase to 45. For this reason, 
software is typically developed in small teams of at most 
a dozen engineers.

```{=latex}
\begin{esmbox}
```
**For Further Exploration:** Brooks' Law is drawn from a classic 
software project management book, *The Mythical Man-Month*. 
The first edition was published in 1975 
([link](https://dl.acm.org/citation.cfm?id=207583)), 
with Brooks documenting the lessons 
learned from his time as an IBM project manager. The 20th-anniversary 
edition includes a new chapter featuring the article, 
*No Silver Bullet — Essence and Accidents of Software Engineering*,
originally published in 1987. In 1999, Frederick Brooks 
received the Turing Award, the highest honor in Computer Science, 
akin to a Nobel Prize.
```{=latex}
\end{esmbox}
```

### Software Development Processes 

\index{Software Processes}
A software development process outlines the sequence of 
activities and events necessary to build and deliver 
software. This process can be compared to the construction 
of buildings, which follow a particular sequence of activities:
foundation, masonry, roofing, plumbing installations, electrical installations, painting, among others.

There are two main types of processes that are used in the 
construction of software

*  Waterfall processes
*  Agile processes

\index{Waterfall}
Originating in the 70s as software engineering began to gain 
recognition, Waterfall processes were the first to be proposed. 
Taking inspiration from traditional engineering processes, 
they are centered on sequential activities, similar to the order 
of activities in the building construction analogy. Usage 
of Waterfall was very common until the 1990s, largely due to a standardization issued by the US Department of Defense in 
1985. Around this period, all software contracted by the 
Department of Defense had to be built using Waterfall.

Also known as **plan-driven processes**, Waterfall processes 
propose a system construction sequence where each stage 
flows sequentially like a waterfall. As illustrated in the 
next figure, the stages include requirement specification, 
analysis, detailed design, coding, and testing. The system 
is released for production use upon the waterfall's completion. 

![Phases of a Waterfall process.](./figs/cap1/waterfall-en){width=87%}

\index{Agile Methods}
\index{Agile Manifesto}
However, Waterfall processes encountered criticism in the late 
90s due to frequent project delays and costs overruns. These 
issues usually happen because Waterfall assumes a full requirements 
gathering phase, a complete design phase, followed by a a full 
implementation and testing phase before validating the 
system with users. Therefore, the system is validated with
users only after finishing these phases, which may occur years after
the beginning. By then, the world may have changed, as well as the 
needs of the customers, who no longer need the system they demanded 
years before. 

To address these challenges, a group of 17 software engineers 
proposed an alternative approach, Agile, at a meeting in 
Utah, United States, in February 2001. They also published a 
manifesto detailing the new approach, called the 
[Agile Manifesto](https://agilemanifesto.org/). 
Contrary to the Waterfall approach, Agile involves 
building a system incrementally and iteratively with 
immediate validation by users at every stage.

The concepts behind Agile have significantly impacted the 
software industry and are used widely across organizations 
of many sizes. Various methods derived from these principles, 
such as **XP**, **Scrum**, and **Kanban**. Agile methods 
have also promoted the adoption of various development 
practices, such as **automated testing**, 
**test-driven development** (i.e., writing 
the tests before the actual code), and **continuous integration**. 
Continuous integration recommends that developers integrate the code 
they produce immediately. If possible, every day, for example. The 
goal is to avoid integration conflicts, which occur when two developers 
change the same lines of code in parallel. 

### Software Models 

\index{Software Models}
Software models provide a higher-level representation of a system 
than its source code, enabling developers to analyze a system's 
essential properties and characteristics more easily and quickly 
without deep-diving into the code details. These models can 
either be created before the code, when they are used to support 
**Forward Engineering**, or created for understanding an 
existing code base, in which case they aid in **Reverse 
Engineering**. 

\index{UML}
Many software models use graphical notations - for instance, 
**UML** (Unified Modeling Language), a notation featuring 
more than a dozen graphical diagrams to model a system's 
structural and behavioral properties. The next
figure shows a UML diagram — called a Class Diagram
— for the code used in the section on Software Design .
In this diagram, the rectangular boxes represent classes,
including their attributes and methods. Arrows denote 
relationships between classes. There are also editors 
for creating UML diagrams, which can be used, for example, 
in Forward Engineering scenarios.

![Example of UML Class Diagram](figs/cap1/uml-intro-en){width=80%}


### Professional Practice

\index{Professional Practice}
As stated in Bjarne Stroustrup's opening quote of this chapter,
*our civilization runs software*. This results in many
opportunities for professionals in this area, but also generates 
responsibilities and concerns. Issues about the professional practice 
of software engineering start to arise when defining the curricula of 
undergraduate courses, which should foster a solid
background in the fundamental aspects of Computer Science, such as
algorithms and data structures. However, it is also important to
have courses covering the key aspects of the profession, including 
the most important concepts, methods, and techniques. 

\index{Professional Ethics}
Lastly, but very relevant, there are questions about the 
role and **ethical responsibility** of software engineers, 
particularly in a society where human relationships are increasingly 
mediated by algorithms and software. In this sense, the scientific 
societies in the area have codes to help Computing professionals — not necessarily just Software Engineers — to practice their profession 
ethically. As examples, we have the Code of Ethics of the ACM 
([link](https://www.acm.org/code-of-ethics)) and the IEEE 
Computer Society
([link](https://www.computer.org/education/code-of-ethics)).
The latter has its focus on the practice of Software Engineering. 
For example, it recommends that:

> Software engineers shall commit themselves to making the 
analysis, specification, design, development, testing 
and maintenance of software a beneficial and respected 
profession. 

```{=latex}
\begin{exmbox}
```
**Real World Insight:** Stack Overflow conducts an annual survey with
users of the platform. In 2018, this survey was answered by more 
than 100,000 developers from the most varied countries. Among 
the questions, a group referred to ethical issues 
([link](https://insights.stackoverflow.com/survey/2018#ethics)). 
One of them asked if developers have an obligation to consider the 
ethical implications of the code they produce. Almost 80% of the 
respondents answered yes. Another question was the following: 
who is ultimately responsible for code that contributes to 
unethical behavior? In this case, 57.5% answered the company's 
top management, while 23% said that are the developer themselves. 
When asked if they would agree to write code with ethical concerns, 
58% answered that no, and 37% said that it would depend on the 
code requirements.
```{=latex}
\end{exmbox}
```

### Economic Aspects

\index{Software Economics}
Many economic issues intertwine with software development. For 
example, a software startup must decide the monetization model 
it wants to adopt, whether based on subscriptions or advertisements,
for example. Mobile app developers have to decide on the price they 
will charge for their application, which, among other variables, 
requires knowledge about the price of the competitors. 
For this reason, it is no surprise that large software companies 
currently employ economists to assess the economic aspects of 
their software products.

To discuss a concrete case, in economics there is a 
frequent concern with the opportunity costs of a decision. That is, 
every decision has an opportunity cost, which refers to the missed 
opportunities associated with the solutions that were discarded. 
In other words, when decision Y is discarded and decision 
X is made instead, the benefits of Y become missed opportunities. 
For example, suppose that your company's main product has a 
list of bugs. Are there benefits in correcting such bugs? Sure, 
this will make customers happier and they will not think to 
churn. However, there is also an opportunity cost in this decision. Specifically, instead of fixings the bugs, the company could 
invest in new functionalities, which would help it to expand 
the customer base. Which is better? To fix the bugs or to 
implement new functionalities? In the end, this is an economic 
decision.

## Classification of Software Systems

\index{ABC Systems}
Software is integral to almost all human activities and comes 
in various sizes and types, fulfilling an array of functional and
non-functional requirements. As such, we should not fall into the 
trap of thinking that there is only one way to develop software. 
It would be incorrect to assume that all software must be 
implemented using the same processes, design principles, 
or quality assurance mechanisms.

\index{Meyer, Bertrand}

Bertrand Meyer proposed a classification 
([link](https://bertrandmeyer.com/2013/03/25/the-abc-of-software-engineering/)) 
that aids in distinguishing and reasoning about the types of 
software that can be developed and identifying suitable software 
engineering practices for each. According to Meyer, there are three 
main types of software: Systems A (Acute), Systems B (Business), 
and Systems C (Casual). We will initially discuss Systems C 
and A, followed by Systems B.

\index{Over-engineering}
\index{Casual Systems}
Type C systems, or casual systems, are not subject to 
high-quality pressures. They can afford to have minor bugs 
without jeopardizing their operation. Examples include a 
script for an academic project, a one-time-use data migration 
program, or a system to manage a student association's 
membership. These systems do not necessarily require high 
standards of internal quality, optimal runtime performance, 
or sophisticated user interfaces. They are usually implemented 
by a small team and are lightweight and non-critical. Therefore, 
they do not benefit from the practices, techniques, and processes 
discussed in this book. **Over-engineering** is a risk for 
such systems, as there is no need for advanced techniques. 
In the context of Type C systems, software engineering can 
resemble using a sledgehammer to crack a nut.

\index{Mission-Critical Systems}
On the opposite end are Type A systems, or acute systems, 
where a single failure can lead to devastating consequences, 
including loss of life. These include control systems 
like those in autonomous vehicles, nuclear power plants, 
airplanes, ICU equipment, and subway trains. The software 
that controlled the Ariane 5 rocket is an example. Developing 
these systems demands rigorous processes, including 
comprehensive code review and external certification. 
It is common to have redundancies in hardware and 
software alike—for instance, two parallel-running systems 
that only make a decision if both agree. Sometimes 
these systems are designed with a formal language, 
founded on logic or set theory.

```{=latex}
\begin{alert}
```
**Alert:** We will not focus on Type A systems A, or 
mission-critical systems, in this book.
```{=latex}
\end{alert}
```

Finally, we arrive at Type B systems B, or business systems, 
which benefit most from the principles and practices discussed 
in this book. These systems encompass a broad range of corporate 
applications (like finance, HR, logistics, sales), various types 
of web-based systems, software libraries and frameworks, 
general-purpose applications (such as text editors, spreadsheets), 
and basic software systems (like compilers, IDEs). 
The concepts discussed in this book will make the development 
of Type B systems more productive and contribute to better 
quality software, both internally (more easy to maintain systems) 
and externally (systems with less production bugs).

