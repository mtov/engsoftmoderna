
# Introduction

> *Our civilization runs on software.* -- Bjarne Stroustrup

In this initial chapter, we outline the objectives and 
challenges tackled in Software Engineering (Section 1.1). 
We additionally provide an overview of the primary subjects 
investigated in this field of Computer Science (Section 1.2). 
Our goal is to provide a comprehensive understanding of 
the field before diving into specific topics. As 
Software Engineering is a broad domain, we also discuss the 
types of software systems that can make use of the 
principles and practices presented in this book (Section 1.3). 
This is done to avoid any misconceptions concerning the scope 
of our work. After that, we present the topics addressed 
in the remaining chapters of the book (see Section 1.4).

## Definition, Context, and History

In today's world, virtually everything operates via software. 
Various organizations, including businesses of every scale 
and governmental entities, depend on software systems to 
deliver their services effectively. Governments often interact 
with citizens through software applications like public service 
delivery platforms and tax collection systems. Many businesses 
also sell a wide range of products directly to consumers via 
e-commerce platforms. Software is in physical products,
including cars, airplanes, satellites, and robots. Furthermore, 
software is revitalizing traditional industries such as 
telecommunications, transportation in large urban centers, 
and advertising.

Given the crucial role software plays in our society, 
it's unsurprising that there is a field of Computer Science that 
focuses on proposing solutions for the development of software 
systems, particularly large and complex ones. This field is 
known as **Software Engineering**.

Software Engineering is concerned with the systematic, disciplined, 
and quantifiable approaches to develop, operate, maintain, and 
evolve software systems. As mentioned, this field is central to 
Computer Science and is engaged with applying engineering 
principles in software construction. 

Historically, Software Engineering as a field emerged in the 
late 1960s when the first generation of computers began to be 
used for problem-solving. However, at that time, software 
took a back seat, as the primary focus was building machines 
capable of solving a limited set of scientific or mathematical 
problems.

However, advancements in hardware technologies changed this 
scenario. By the end of the '60s, computers had become more 
common, were present in many universities, and businesses were 
beginning to envision the benefits of their use. Consequently, 
a new set of challenges surfaced, as users demanded more complex 
and diverse applications, including commercial systems for 
tasks such as payroll, accounting, and inventory management.

\index{NATO Conference}
**NATO Conference**: In October 1968, around 50 eminent 
Computer Scientists gathered for a week in Garmisch, Germany, 
for a NATO-sponsored conference. The purpose of this meeting 
was to discuss a "crucial problem of computer usage, 
the so-called software". The conference concluded with a 
130-page report advocating the construction of software 
based on practical and theoretical principles, similar to 
other branches of engineering. In light of this proposition, 
the participants coined the term Software Engineering, 
effectively establishing this field in Computer Science. 

![Scientists at the 1968 NATO conference on Software Engineering.
Reproduction kindly authorized by Prof. Robert McClure.](figs/cap1/otan.jpg){width=45%}

One of the participants of the NATO Conference summarized 
the challenges faced by the new research field:

> *The basic problem is that certain classes of systems are 
placing demands on us which are beyond our capabilities and 
our theories and methods of design and production at this time. 
There are many areas where there is no such thing as a 
crisis---sort routines, payroll applications, for example. 
It is large systems that are encountering great difficulties. 
We should not expect the production of such systems to be easy*.

More than half a century after the NATO Conference, 
techniques and methods for software construction have improved 
remarkably. It's now widely recognized that software, 
in most instances, should not be built in sequential 
phases as happens with traditional engineering products. Many 
patterns can assist software engineers in their work, avoiding 
the need to reinvent the wheel for every new design problem. 
Libraries and frameworks for various purposes are 
available, allowing developers to reuse code without 
delving into the details of tasks such as implementing graphical 
interfaces, manipulating data structures, accessing databases, 
and encrypting messages. Several automated testing techniques can—and 
should—be deployed to ensure that the produced code works 
as expected when used by actual customers. Like other engineering 
products, software also deteriorates over time and therefore 
require maintenance, not only for bug fixing but also to 
ensure their long-term maintainability and comprehension.

### No Silver Bullet {.unnumbered}

\index{Brooks, Frederick}
Software development has unique characteristics when compared to 
other engineering products, especially hardware. Frederick 
Brooks, a 1999 Turing Award recipient and a pioneer in Software 
Engineering, was among the first to underscore this fact. 
In 1987, he wrote an essay titled *No Silver Bullet: Essence 
and Accident in Software Engineering* 
([link](https://doi.org/10.1109/MC.1987.1663532)) 
where he highlights the peculiarities of Software Engineering.

According to Brooks, there are two types of difficulties in 
software engineering: **essential difficulties** and **accidental 
difficulties**. Essential ones are intrinsic to the field 
and are unlikely to be solved by any novel technology or method.

Indeed, the term silver bullet, as used in Brooks's essay 
title, refers to a magical solution to a complex problem. Brooks 
argued that due to the essential difficulties, we should not 
anticipate the existence of silver bullets in the field. 
Nonetheless, many new software technologies are often marketed 
as if they were, in fact, silver bullets.

Brooks described the following essential difficulties:

1. Complexity: Of all human-made constructions, 
software stands out as one of the most intricate and 
complex. Even traditional engineering constructs, 
like satellites, nuclear power plants, or rockets, 
are increasingly relying on software.

2. Conformity: Software must adapt continuously 
to its ever-changing environment. For instance, 
changes in tax legislation require prompt adaptations 
by all related software. This level of adaptability is not 
required in other fields like Physics, where natural 
laws do not change due to human decisions.

3. Changeability: There is constant pressure for software to 
evolve and incorporate new features. In fact, the more 
successful a software system, the more it is likely to attract 
requests for modifications.

4. Invisibility: It is inherently challenging to visualize
the size and effort required to create software due to 
its abstract nature.

Challenges (2), (3), and (4) are exclusive to software 
systems. They do not exist in other engineering products, 
at least not with the same intensity. When environmental 
laws change, car manufacturers have years to comply with 
the new legislation. Also, cars, once manufactured, do 
not usually receive new functionalities. Furthermore, 
a car's physical properties, such as weight, height, 
width, seats, and geometric shape, facilitate valuation 
by consumers.

Software development also faces accidental difficulties, 
but they can be solved by engineers given adequate 
training and access to existing technologies and resources. 
Examples of such difficulties include an IDE that frequently 
crashes, a compiler that has cryptic error messages, 
a framework missing documentation, or a web application 
with a confusing interface.

\index{Linux}
\index{Google}
```{=latex}
\begin{esmbox}
```
**Real World Insight**: The complexity involved in building software 
systems can be illustrated by considering their size. 
For instance, as of 2017, the Linux operating system 
(version 4.1.3) comprised about 25 million lines of code, 
which were produced by nearly 1,700 engineers ([link](https://www.linuxfoundation.org/2017-linux-kernel-report-landing-page)). Another example is Google's applications which, as of January 
2015, contained over two billion lines of code, distributed 
across nine million files ([link](https://doi.org/10.1145/2854146)). 
At that time, Google's software engineers submitted 
about 40,000 code change requests per day on average.
```{=latex}
\end{esmbox}
```

## Topics of Study

\index{SWEBOK}
To present the topics of study in software engineering, 
we refer to the *Guide to the Software Engineering Body 
of Knowledge*, also known as the SWEBOK 
([link](http://www.swebok.org)). 
This comprehensive report is organized by the IEEE Computer 
Society, an internationally recognized scientific society. 
It is crafted with the expertise of multiple researchers 
and industry professionals. The aim of the report is to 
document and compile the body of knowledge indicative of 
the field we now recognize as Software Engineering.

The SWEBOK defines the following key areas of Software 
Engineering:

1.  Software Requirements
2.  Software Design
3.  Software Construction
4.  Software Testing
5.  Software Maintenance
6.  Software Configuration Management
7.  Software Project Management
8.  Software Processes
9.  Software Models
10. Software Quality
11. Software Engineering Professional Practice
12. Software Engineering Economics

The report also outlines three additional knowledge areas: 
Computing Foundations, Mathematical Foundations, and 
Engineering Foundations. However, given that they 
overlap with other scientific domains, they 
won't be featured in this book.

In the remainder of this section, we summarize each of the 
twelve key areas identified above. Our objective
is to give an overview of the knowledge accumulated over 
the years in Software Engineering and, consequently, shed 
light on what is studied in this field.

### Requirements

\index{Requirements Engineering}
\index{Requirements!Requirements Engineering}
Requirements define *what* a system should do and *how* it
should operate. Thus, Requirements Engineering designates the 
activities carried out to analyze, document, and validate 
a system's requirements. 

\index{Requirements!Functional}
\index{Requirements!Non-Functional}
Requirements can be **functional** or **non-functional**.
Functional requirements provide a definition of 
the features or services a system should provide. 
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

* Performance: The application must be able to provide an 
account balance within two seconds.
* Availability: The application must be online 99% of 
the time.
* Fault tolerance: The application must continue 
functioning even if a specific data center fails.
* Security: The application must encrypt all data to 
be exchanged with branches.
* Privacy: Customer data must be maintained confidential 
and not be leaked to third parties.
* Interoperability: The application has to integrate 
with Central Bank systems.
* Capacity: The application should have the capacity 
to store and handle data for one million banking customers.
* Usability: The application must be accessible for 
visually impaired individuals.

### Design

\index{Software Design}
Software design involves determining the primary code 
units of a software system. However, this process only gets 
to the level of interfaces, which include **provided 
interfaces** and **required interfaces**. Provided interfaces 
are the services that a code unit makes public for other parts 
of the system, while required interfaces are those that a 
code unit depends on for operation.

Therefore, during software design, the implementation 
details of each code unit, such as the specifics of method 
implementations, are not addressed. For instance, when 
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

It's important to note that this is a simplified 
implementation, used only for illustrative purposes. The 
`BankAccount` class provides an interface to other 
classes through its public methods, thus constituting 
the provided interface. However, `BankAccount` also relies 
on the `Customer` class, making the `Customer` interface 
a required one for `BankAccount`.  In this case, 
we say that `BankAccount` depends on `Customer`.

\index{Software Architecture}
When design gets more abstract and involves larger units 
like packages or folders, it is called architectural 
design. Essentially, **software architecture** 
refers to the organization of a system at a higher level of 
abstraction than the one involving classes or comparable 
code units.

### Construction

Construction refers to the implementation phase, otherwise 
known as coding the system. This involves making crucial 
choices, such as deciding on the algorithms and data structures 
to use, installing and configuring third-party frameworks and 
libraries, defining exception handling policies, reaching a
consensus on standards for names, indentation, and code 
documentation, and also selecting the development tools, such as 
compilers, integrated development environments (IDEs), debuggers, 
database managers, and interface building tools.

### Testing 

Testing involves executing a program with a finite set of cases 
and checking whether it delivers the expected results. 
As 1982 Turing Award recipient Edsger W. Dijkstra succinctly 
put it:

> Software testing can reveal the presence of bugs, but not 
their absence.

There are at least three relevant points we would like to 
address about testing in this first chapter. First, we should mention
that there are many types of tests, including **unit tests** 
(testing small code units like a class), **integration tests** 
(testing larger units like a set of classes), **performance 
tests** (checking system performance under specific loads), 
and **usability tests** (evaluating the system's user 
interface's usability).

Second, testing serves both verification and validation purposes. 
Verification ensures a system conforms to its specifications, while
validation checks if the system meets the customer needs. The two 
concepts are distinct because specifications may at times fail to 
meet customer needs. This might be due to misunderstandings 
between developers and users or due to poor explanations by 
users.

Two commonly used phrases help to distinguish verification 
and validation:

* Verification: Are we correctly implementing the system 
according with its specification?
* Validation: Are we implementing the correct system—the 
one that meets customer or market needs?

For instance, running a method to check whether it returns the
specified result is a verification activity, while conducting 
an acceptance meeting to show the system to customers is a 
validation activity.

It's also necessary to distinguish between three  
testing-related terms: **defects**, **bugs**, and **failures**. For illustration purposes, take the following code that computes the 
area of a circle depending on a certain condition:

```
if (condition)
    area = pi * radius * radius * radius; 
```

This code has a defect, as the area of a circle should be 
"pi times radius squared," not cubed. The term *bug* is 
used informally with the same meaning. 

A failure occurs when the defective code is executed––for instance, 
when the `if` condition above is true, and as a result, the program 
delivers an incorrect result. Consequently, not every defect or bug 
results in a failure since the defective code might never 
be executed.

In summary: defective (or buggy) code is the one that does not 
conform to its specification. If this code is executed and 
yields incorrect results, we say that a failure has happened.

```{=latex}
\begin{esmbox}
```
**For Further Exploration:** The literature on testing sometimes 
also mention the **error** and **fault** terms. These terms 
carry the same meaning we attributed to defect. For instance, the 
IEEE Standard Glossary of Software Engineering Terminology 
([link](https://doi.org/10.1109/IEEESTD.1990.101064)) defines a 
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
**Real World Insight:** There are many software failures that 
had serious financial and human consequences. A prominent example
is the 1996 explosion of French rocket Ariane 5 shortly 
after its launch from Kourou, in the French Guiana. About 30 seconds 
after the launch, the rocket exploded due to an unexpected 
behavior of one of its onboard systems. This resulted in a 
financial loss of approximately half a billion dollars. 
Curiously, the defect that caused the failure was confined 
to a few lines of an ADA function (which is a programming 
language widely used in military and space software). 
The defective lines were responsible for converting a 64-bit 
floating-point value to a 16-bit integer. During testing and 
likely previous Ariane launches, the conversion always 
succeeded––the real number always fit into an integer. 
However, on the fatal launch day, a previously untested condition 
required the conversion of a larger real number than the 
largest 16-bit integer could accommodate. This generated an 
erroneous result, causing the rocket's control system to 
malfunction and subsequently result in its explosion.
```{=latex}
\end{esmbox}
```

### Maintenance and Evolution 

\index{Software Maintenance}
Software systems, like traditional engineering systems, require 
maintenance. In this book, we categorize the types of maintenance 
that can be performed in software into the following
categories: **corrective**, **preventive**, **adaptive**, 
**refactoring**, and **evolutionary**.

\index{Software Maintenance!Corrective}
\index{Software Maintenance!Preventive}
Corrective maintenance aims to address bugs reported by users or 
other developers. Preventive maintenance, on the other hand, 
focuses on addressing latent bugs in the code that 
haven’t yet caused failures observed by the users.

\index{Millennium Bug}
```{=latex}
\begin{esmbox}
```
**Real World Insight**: An example of preventive maintenance 
are the actions taken by many companies before the turn 
of the millennium, from 1999 to 2000. At this time, a significant 
number of applications used two digits to represent the year in 
date values, i.e., dates were in the DD-MM-AA format. 
This led to concerns that date operations in 2000 
and beyond could produce incorrect results. For instance, 
the calculation 00 - 99 might return an unexpected result. 
To prevent this, companies created special task groups to 
convert all date variables and expressions in their systems 
to the DD-MM-YYYY format, an action that was therefor a prime 
example of preventive maintenance.
```{=latex}
\end{esmbox}
```

\index{Software Maintenance!Adaptive}
Adaptive maintenance aims to adjust a system in response to 
changes in its environment, including technological changes, 
new legislative rules, integration requirements with 
other systems, or customization demands from new clients. 
Examples include:

* Updating a system from Python 2.7 to Python 3.0.
* Customizing a system to meet the requirements of a new customer.
* Modifying a system to comply with changes in legislation or 
other contextual changes.

Refactorings are changes in a program that don't change its 
external behavior but improve its design and ease of maintenance. 
Refactoring operations include renaming a method or variable, 
breaking a large method into smaller ones, or moving a method 
to a more suitable class.

\index{Software Maintenance!Evolutionary}
Finally, evolutionary maintenance is performed to add new 
features to a system or to significantly improve existing 
features. Its purpose is to preserve the system's value 
to the customers. For instance, many banking systems developed 
in the 70s and 80s have been continually updated 
and improved, ensuring their ongoing relevance and value.

\index{Legacy Systems}
Legacy Systems are older systems built on outdated 
languages, operating systems, and databases. Despite being 
obsolete in technological terms, most legacy systems remain 
vital due to the critical operations they perform.

```{=latex}
\begin{esmbox}
```
**For Further Exploration:** Some alternative classifications 
for software maintenance can be found in the literature. 
One proposed by Lientz & Swanson in 1978 
([link](https://dl.acm.org/citation.cfm?id=601062)), 
organizes maintenance activities into four categories: corrective, 
perfective (adding new functionalities), adaptive (changes in 
the software's operational environment), and preventive 
(changes aimed at enhancing a system's maintainability).
```{=latex}
\end{esmbox}
```

### Configuration Management 

\index{Configuration Management}
Version control systems, such as Git, are an integral part 
of modern software development. These systems store all versions 
of a software project, whether it's source code, documentation, 
manuals, web pages, or reports. If a change introduces a critical 
bug, these systems facilitate the restoration of a 
specific previous version.

\index{Semantic Versioning}
Configuration management, however, is more than just using a 
system like Git. It also includes the definition of policies to 
handle system versions. For example, a team might decide 
on an *x*.*y*.*z* format to identify the versions of a 
library they're working on, with *x*, *y*, and *z* being 
integers. A change in *x* indicates a major version launch 
with substantial new features, changes in *y* denote a 
minor version with small updates, while changes in *z* 
point to a patch release with only bug fixes. This scheme 
is often referred to as **semantic versioning**.

### Project Management 

\index{Project Management}
\index{Stakeholders}
Project management plays a relevant role in software development. 
It involves activities ranging from negotiating contracts 
(which define deadlines, prices, schedules, etc.) with clients, 
human resource management (hiring, training, and setting 
promotion policies and remuneration values), to risk management, 
monitoring competition, finance, and marketing. In this context, 
**stakeholders** is a term that refers to all parts with a 
vested interest in the project. This includes individuals 
or organizations that affect or are affected by the project, 
such as developers, project managers, contracted companies, 
supply vendors, and in some cases, government entities.

\index{Brooks, Frederick}
\index{Brooks' Law}
\index{Project Management!Brooks' Law}
Brooks' Law, stated by Frederick Brooks, is a well-known 
adage in the are of software project management:

> Adding manpower to a late software project makes it later.

The rationale is that new developers need time to understand 
the codebase, architecture, and design before becoming productive. 
Moreover, larger teams need more communication and coordination 
to facilitate decision-making. For instance, a team with 
three developers (d~1~, d~2~, d~3~) would have three 
communication channels (d~1~-d~2~, d~1~-d~3~, and d~2~-d~3~). 
If the team expands to four members, the channels double to six.
With ten developers, the communication channels increase to 45. 
For this reason, software is typically developed in small teams 
of at most a dozen engineers.

```{=latex}
\begin{esmbox}
```
**For Further Exploration:** Brooks' Law is drawn from a classic 
software project management book, *The Mythical Man-Month*. 
The first edition was published in 1975 
([link](https://dl.acm.org/citation.cfm?id=207583)), 
with Brooks documenting the lessons learned from his time as 
an IBM project manager. The 20th-anniversary edition includes 
a new chapter featuring the article *No Silver Bullet — 
Essence and Accidents of Software Engineering*,
originally published in 1987. In 1999, Frederick Brooks 
received the Turing Award, the highest honor in Computer 
Science, akin to a Nobel Prize.
```{=latex}
\end{esmbox}
```

### Process 

\index{Software Processes}
A software process defines the sequence of activities and events 
necessary to build and deliver software. Indeed, software construction
can be compared to the construction of buildings, which need to 
follow a particular sequence of activities: foundation, masonry, 
roofing, plumbing installations, electrical installations, 
painting, among others.

There are two main types of processes that are used in the 
construction of software:

*  Waterfall processes
*  Agile processes


\index{Waterfall}
Originating in the 70s as software engineering began to gain 
recognition, Waterfall processes were the first to be proposed. 
Taking inspiration from traditional engineering processes, 
they are centered on sequential activities, similar to the order 
of activities in the building construction analogy we mentioned
before. The usage of Waterfall was very common until the 1990s, 
largely due to a standardization issued by the US Department 
of Defense in 1985. Around this period, all software contracted 
by the Department of Defense had to be built using Waterfall.

Also known as **plan-driven processes**, Waterfall 
proposes a construction sequence where each stage flows sequentially 
like a waterfall. As illustrated in the next figure, these stages 
are requirement specification, analysis, detailed design, 
implementation, and testing. The implemented system is released for 
production use upon the waterfall's completion. 

![Phases of a Waterfall process](./figs/cap1/waterfall-en){width=87%}

\index{Agile Methods}
\index{Agile Manifesto}
However, Waterfall faced severe criticism in the late 90s 
due to frequent project delays and costs overruns. These 
issues usually happen because Waterfall requires a full requirements 
gathering phase, a complete design phase, followed by a a full 
implementation and testing phase before deploying the 
system to users. Therefore, users may have to wait years to
see a piece of software running. By then, the world may have 
changed, as well as the needs of the customers, who no longer 
need the system they demanded years before. 

To address these challenges, a group of 17 software engineers 
proposed an alternative approach, called Agile, at a meeting in 
Utah, United States, in February 2001. They also published a 
manifesto detailing the new approach, which they called 
the Agile Manifesto ([link](https://agilemanifesto.org)). 
Contrary to the Waterfall approach, Agile recommends building 
a system incrementally and iteratively with validation by users 
at every iteration.

The concepts behind Agile have significantly impacted the 
software industry and are used today across organizations 
of many sizes. Various methods derived from these principles, 
such as **XP**, **Scrum**, and **Kanban**. Agile methods 
also promoted the adoption of various development practices, 
such as **automated testing**, **test-driven development** 
(i.e., writing the tests before the actual code), and 
**continuous integration**. This last practice recommends 
that developers integrate the code they produce immediately. 
If possible, every day, for example. The goal is to avoid 
integration conflicts, which occur when two developers 
change the same lines of code in parallel. 

### Models 

\index{Software Models}
Software models provide a higher-level representation of a system 
than its source code, enabling developers to analyze a system's 
essential properties and characteristics without deep-diving 
into the source code details. These models can be created 
before the code, when they are used to support **Forward Engineering**, 
or they can be created for understanding an existing code base, 
in which case they aid in **Reverse Engineering**. 

\index{UML}
Typically, software models use graphical notations---for instance, 
**UML** (Unified Modeling Language), a notation featuring 
more than a dozen graphical diagrams proposed to model  structural and 
behavioral properties of a software project. The next figure 
shows a UML diagram---called a Class Diagram---for the code 
used in the section on Software Design. In this diagram, 
the rectangular boxes represent classes, including their 
attributes and methods. Arrows denote relationships between 
classes. There are also editors for creating UML diagrams, 
which can be used, for example, in forward engineering scenarios.

![Example of UML Class Diagram](figs/cap1/uml-intro-en){width=85%}

### Quality

\index{Software Quality}
Quality is a prominent goal in the engineering of products, 
reflected across various industries, such as automobile manufacturing, 
cell phone production, computer companies, and construction. 
Similarly, quality is of utmost importance in software 
engineering. A classification proposed by Bertrand Meyer 
([link](https://dl.acm.org/citation.cfm?id=261119)) suggests 
that software quality can be evaluated in two dimensions: 
**external quality** and **internal quality**.

\index{Software Quality!External}
External quality refers to factors that can be assessed 
without delving into the source code. Thus, these factors can be 
evaluated by end-users who are not necessarily experts in 
software engineering. Some examples of external quality factors 
(or attributes) are:

*  Correctness: Does the software align with its specification 
and perform as expected under normal conditions?
*  Robustness: Can the software continue to function appropriately 
during exceptional circumstances, such as communication or 
disk failures? A robust software implementation should not crash 
due to such events, instead, it should alert users about 
the abnormal operation.
*  Efficiency: Does the software optimally use the available 
computational resources?
*  Portability: Is the software adaptable to other platforms 
and operating systems? Is it available for major operating 
systems such as Windows, Linux, and macOS or, in the case of 
mobile apps, does it support Android and iOS?
*  Ease of Use: Does the software have a user-friendly interface, 
clear error messages, and support multiple languages? 
Can users with disabilities, such as visual or auditory 
impairments use it?
*  Compatibility: Does the software support primary data formats 
common in its domain? For instance, a spreadsheet should import 
files in XLS and CSV formats.

\index{Software Quality!Internal}
In contrast, internal quality relates to properties associated 
to the system's implementation. Assessment of internal quality 
requires expertise in software engineering and it isn't typically 
something for end-users. Examples of internal quality factors (or attributes) include modularity, code readability, maintainability, 
and testability.

The assurance of software quality can be achieved via several 
strategies. Firstly, **metrics** can be used to track the development process, including source code metrics and process metrics. 
Code metric examples include the number of lines in a program, 
with provides an indication of its size. Process metrics include, 
for example, the number of bugs reported by end-users over 
a specific period.

\index{Code Review}
There are also practices that support the production of 
high-quality software. Notably, many organizations implement 
**code reviews**, where the code written by one developer 
only moves to production after another team member reviews 
and approves it. This practice aids in early bug detection 
(before the system enters production) and improves the internal 
quality of the code (i.e., its maintainability, readability, 
modularity, etc.). It also encourages the dissemination of 
good software engineering practices within the team.

The next figure shows an example of code review, referring 
to an example we used in the Software Testing section. 
As we can see, this code was reviewed by another developer, 
called the reviewer, before being put into production. In the
case, the reviewer noticed a bug and reported it in a comment. 
After that, the developer responsible for the code should fix 
the bug and resubmit the new code for review and approval. 
There are several tools to support code review practices. In the example, 
we used the tool provided by GitHub.

![Example of code review.](figs/cap1/github.png){width=65%}

### Professional Practice

\index{Professional Practice}
The opening quote of this chapter by Bjarne Stroustrup states
that *our civilization runs on software*. For this reason,
there is a myriad of opportunities to software professionals. 
However, the prevalence of software today also implies in 
challenges and responsibilities. For example, questions 
surrounding the professional practice of software engineering 
start to arise when formulating undergraduate curricula. 
Courses in the area should offer a solid foundation in 
fundamental aspects of Computer Science, such as algorithms 
and data structures, while also covering concepts, methodologies, 
and techniques that are widely used by professionals.

\index{Professional Ethics}
Equally important is the discussion about the **ethical 
responsibility** of software engineers, particularly in a 
society where human interactions are increasingly mediated 
by software and algorithms. Scientific societies within 
the field have formulated codes to guide computing 
professionals in exercising their profession ethically. For 
instance, the ACM's Code of Ethics 
([link](https://www.acm.org/code-of-ethics)) 
and the IEEE Computer Society's Code of Ethics
([link](https://www.computer.org/education/code-of-ethics)). 
The latter puts special emphasis on the practice of software 
engineering, asserting that:

> Software engineers shall commit themselves to making the 
analysis, specification, design, development, testing, and 
maintenance of software a beneficial and respected profession.

```{=latex}
\begin{esmbox}
```
**Real World Insight:** Stack Overflow holds an annual survey, 
which in 2018 received responses from over 100,000 developers 
worldwide. A section of the survey focused on ethical 
considerations 
([link](https://insights.stackoverflow.com/survey/2018#ethics)). 
One question asked if developers felt obligated to consider 
the ethical implications of the code they create — almost 80% 
responded positively. Another question asked who should 
hold the responsibility for code that leads to unethical behavior, 
to which 57% pointed to the company's top management and 23% 
felt it was the developers themselves. When asked if they would 
agree to write code with ethical issues, 58% said no, while 
37% responded that it would depend on the code's requirements.
```{=latex}
\end{esmbox}
```

### Economics

\index{Software Economics}
Numerous economic factors are interlaced with software development. 
For instance, software startups must select their monetization 
model — perhaps a subscription-based or advertisement-supported 
model. Mobile app developers must decide how much to charge for 
their apps, a decision that requires understanding their 
competitors' pricing among other variables. With such complex and
relevant economic considerations, it's no surprise that large 
software companies nowadays hire economists to evaluate these 
factors related to their products.

As a practical example, economists frequently discuss the 
opportunity costs of a decision. These costs represent the 
missed opportunities associated with discarded solutions 
or choices. If you choose decision X over Y, the benefits 
of Y become your missed opportunities. For instance, 
imagine your company's main product has a list of bugs. 
Sure, fixing these bugs will satisfy customers and potentially 
prevent churn. However, this decision also has an opportunity 
cost. Instead of bug fixing, the company could invest in 
new features, which would contribute to expand the customer 
base. Thus, deciding between bug fixes or new features ultimately 
becomes an economic decision.


## Classification of Software Systems

\index{ABC Systems}
Software is part to a wide array of human activities. It comes in 
different sizes and types, fulfilling a variety of functional and
non-functional requirements. As such, it's important to avoid the
misconception that there is a single and universal method for 
software development. In other words, we should not assume that 
all software must follow the same processes, design guidelines,
architectural patterns, or quality assurance practices.

\index{Meyer, Bertrand}
Bertrand Meyer proposed a classification 
([link](https://bertrandmeyer.com/2013/03/25/the-abc-of-software-engineering/)) 
that assists in distinguishing between the types of software 
that can be developed and in identifying the most recommended 
software engineering practices for each one. According to Meyer, 
there are three primary types of software: Acute Systems (A), 
Business Systems (B), and Casual Systems (C). 
We discuss Casual and Acute systems first, followed by 
Business systems.

\index{Over-engineering}
\index{Casual Systems}
Casual systems, or Type C systems, are not under much pressure for
high-quality performance. They can tolerate minor bugs without 
jeopardizing their operation. As examples, we can mention an academic 
project script, a data migration program for one-time-use, 
or a system to manage a student association's membership. 
These systems do not necessarily require high internal quality
standards, optimal runtime performance, or sophisticated user 
interfaces. They are typically implemented by a single developer 
and are non-critical and lightweight. As a result, they do not 
benefit that much from the practices, techniques, and processes 
discussed in this book. In fact, **over-engineering** is a risk 
for such systems, as there's no need for advanced techniques. 

\index{Mission-Critical Systems}
On the other end of the spectrum, we have Acute systems, 
or Type A systems, where a single failure can have devastating 
consequences, including the loss of human lifes. Notable 
examples include control systems used in autonomous vehicles, 
nuclear power plants, airplanes, ICU equipment, and subway 
trains. The software that controlled the Ariane 5 rocket is 
an illustrative sample. Developing these systems requires 
rigorous processes, including comprehensive code review 
and external certification. It's common to have hardware 
and software redundancies — for example, two systems 
running in parallel that only make a decision when both agree. 
Sometimes, Type A systems are designed using a formal language 
based on logic or set theory.

```{=latex}
\begin{esmbox}
```
**Alert:** In this book, we will not cover Type A (Acute) or 
mission-critical systems.
```{=latex}
\end{esmbox}
```

Lastly, we have Business Systems, or Type B systems. 
These systems are the ones that benefit the most from the 
principles and practices discussed in this book. They cover a 
wide array of corporate applications (like finance, HR, 
logistics, sales), various web-based systems, software 
libraries and frameworks, general-purpose applications 
(such as text editors, spreadsheets), and basic software 
systems (like compilers, IDEs). The practices presented in 
this book were proposed to make the development of Type B systems 
more productive and to contribute to their quality, both 
internally (for example, resulting in systems that are easier 
to maintain) and externally (producing systems with fewer 
bugs, for example).

## Upcoming Chapters

This book has 10 chapters and one appendix:

**Chapter 2: Processes**  focuses on agile development 
processes, specifically XP, Scrum, and Kanban. Our decision 
to focus on agile methods derives from their wide usage in 
modern software development nowadays. However, we also 
briefly cover traditional processes like Waterfall and 
the Unified Process.

**Chapter 3: Requirements** begins with a discussion on the 
importance and the main types of requirements. Then, we introduce 
two techniques for requirements elicitation and specification: 
user stories for agile methods, and use cases for more 
traditional and documentation-driven methods. The chapter also 
covers novel topics like Minimum Viable Products (MVP) and 
A/B Tests, whose importance nowadays extends beyond startups. 

**Chapter 4: Models** focuses on the use of UML to create 
sketches during software development projects. Indeed, UML 
is no longer widely used for creating detailed software 
models, which was its initial goal. Despite that, we decided to 
cover UML in the book to ensure a basic understanding of its 
diagrams, as software developers often use them as sketches 
when discussing or or documenting design ideas.

**Chapter 5: Design Principles**,  which covers two topics 
that every software engineer needs to know. They are: (1) 
important properties (or considerations) in software design, 
including conceptual integrity, information hiding, cohesion, 
and coupling; (2) design principles, which are specific 
recommendations for building software projects, such as 
the widely commented SOLID principles.

**Chapter 6: Design Patterns** summarizes the main design 
patterns defined in the literature. Essentially, design 
patterns are solutions for common problems faced when 
designing software systems. The discussion of each pattern 
is divided into three parts: (1) a context, that is, a system 
in which the pattern can be useful; (2) a problem faced when 
designing this system; (3) a solution to this problem using
design patterns. We also provide several code examples to 
facilitate comprehension.

**Chapter 7: Architecture** starts with a discussion on the 
importance of software architecture. After that, we present 
and discuss five architectural patterns, including:
layered architectures (such a 3-tier architectures), MVC
(Model-View Controller), Microservices, Message Queues, and 
Publish-Subscribe. To conclude, we also present 
an architectural anti-pattern, called *big ball of mud*, 
which designates systems with no architectural organization
at all. These systems might have had some architecture in the
 past, but it was progressively abandoned, turning 
them into a spaghetti of inter-module dependencies.

**Chapter 8: Tests** has emphasis on unit tests, 
which are usually implemented using 
frameworks like JUnit. The chapter includes dozens of unit 
test examples and discusses various aspects of these tests. 
For instance, we discuss good principles for writing unit tests 
and also test smells, which are patterns of tests that are not 
recommended. Then, we address testability, i.e., the importance 
of designing and writing code that can be easily tested. The 
chapter also includes a section on mocks and stubs, which are 
objects that enable unit testing of code with complex 
dependencies, such as dependencies on databases and other 
external services. After the discussion on unit tests, we 
comment on two other types of tests: integration tests 
and end-to-end tests. These tests verify the properties of 
larger code units, like the classes that implement a given 
service (integration tests) or even all the classes in a 
system (end-to-end test). To conclude, we  include a brief
discussion about other tests, such as black-box 
tests (or functional tests), white-box tests (or structural 
tests), acceptance tests and tests to check non-functional 
requirements, like performance.

**Chapter 9: Refactoring** presents the main code transformations 
that can be performed to improve the internal quality of a software 
system. The presentation includes several source code examples, 
some of them from actual refactorings performed on open source 
systems. The aim is to provide a practical refactoring experience 
to the readers and thus to help them to develop the habit of 
frequently improving the design of their code. In the chapter, 
we conclude with a presentation of code smells, i.e., indicators 
that a code structure is not "smelling good" and therefore should
be the subject of a refactoring.

**Chapter 10: DevOps** describes the movement to bring the 
development (Devs) and operations (Ops) teams of a software 
organization closer together. The operations team is responsible 
for keeping the software up and running, and consists of network
administrators, database administrators, Site Reliability Engineers
(SRE), among others. In a traditional culture, these two teams 
tend to operate independently. That is, the development team 
implements the system and then "throws it over the wall" to the 
operations department. To solve this problem, DevOps proposes 
a constant interaction between Devs and Ops teams, from the 
early days of development. The aim is to reduce the friction 
involved in the release of new features. In addition to an 
introduction to DevOps, we will study important practices 
when embracing this culture, including Version Control, Continuous
Integration, and Continuous Deployment/Delivery.

**Appendix A: Git** covers the essential Git commands, given that 
version control is an indispensable practice in today's development 
world.

## Bibliography {.unnumbered}

Pierre Bourque, Richard Fairley. Guide to the Software
Engineering Body of Knowledge, Version 3.0, IEEE Computer Society, 2014.

Armando Fox, David Patterson. Engineering Software as a Service:
An Agile Approach Using Cloud Computing. 1st edition, 2014.

Frederick Brooks. The Mythical Man-Month: Essays on Software Engineering.
Addison-Wesley, anniversary edition, 1995.

## Exercises {.unnumbered}

1\. According to Frederick Brooks, software development 
faces essential difficulties (for which there is no silver 
bullet) and accidental ones (for which there is a 
solution). Give an example of an accidental difficulty you 
have experienced while implementing programs, even small ones. 
Suggestion: they can be related to tools you have used, 
such as compilers, IDEs, databases, operating systems, etc. 

2\. Describe the differences between functional and 
non-functional requirements.

3\. Explain why tests can be considered both a software 
verification and validation activity. Which tests are 
best suited for verification? And which tests are recommended 
for validating a software system?

4\. Why can't tests prove the absence of bugs?

5\. Suppose a program has only one input: a 64-bit integer. 
Exhaustive testing tests a program with all possible inputs 
(thus, 2^64 integers, in our case). If each test requires 
1 nanosecond (10^-9 seconds), calculate the total 
time required for exhaustively testing this simple program.

6\. Considering the historical context, explain why the first 
software development processes were sequential and based 
on detailed planning and documentation.

7\. Several studies show that maintenance and evolution 
costs constitute 80% or more of a software system's total 
costs over its lifecycle. Explain why this value is so high.

8\. Refactoring is a code transformation that preserves behavior. 
What is the meaning of the expression *preserve behavior*? 
In practice, what restriction does it impose on refactoring 
activities?

9\. Give examples of Type A (*Acute* or critical) and Type B 
(*Business*) systems that you've interacted with.

10\. Give examples of Type C (Casual) systems that you've developed.

11\.  In 2015, it was revealed that millions of cars manufactured 
by a major automobile company emitted pollutants within legal 
standards only during laboratory tests. Under 
normal usage conditions, the cars released higher levels 
of pollutants to enhance performance. That is, the code included 
a decision structure like the following one (merely 
illustrative, for the purpose of this exercise):

```
if "car being tested in a laboratory"
   "comply with emission standards"
else 
   "exceed emission standards"
```

What would you do if your boss asks you to write an *if* like 
the one above? For more information on this episode, consult 
this Wikipedia page 
([link](https://en.wikipedia.org/wiki/Volkswagen_emissions_scandal) 
page).
