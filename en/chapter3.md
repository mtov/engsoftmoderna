
# Requirements

> *"The hardest single part of building a software system is deciding precisely what to build."* -- Frederick Brooks

\index{Requirements}
This chapter begins with a presentation on the importance of software 
requirements and their different types (Section 3.1). Next, we characterize 
and present the activities that comprise what we call Requirements Engineering 
(Section 3.2). The next four sections (Sections 3.3 to 3.6) present a variety 
of techniques and documents used for specification and validation of 
requirements. Section 3.3 focuses on user stories which are the principal 
tools for defining requirements in agile methods. Following that, Section 3.4 
elaborates on use cases which are more detailed documents for expressing 
requirements. In Section 3.5, we explore the concept of Minimum Viable Product 
(MVP), a popular instrument nowadays for identifying and validating requirements. 
To wrap up, Section 3.6 provides insights on A/B testing, a common practice 
for validating and selecting the requirements of software products.

## Introduction

\index{Requirements!Functional}
**Requirements** define what a system should do and the constraints under 
which it should operate. "What a system should do" or its functions 
fall under **Functional Requirements**. On the other hand, the constraints 
part is described by **Non-Functional Requirements**.

\index{Requirements!Non-Functional}
To better illustrate the dichotomy between these two types of requirements, 
let's revisit the home-banking system example from Chapter 1. For such a system, 
functional requirements include features like reporting the balance and 
statement of an account, processing transfers between accounts, executing 
bank slip payments, canceling debit cards, among others. In contrast, 
non-functional requirements are tied to the quality attributes of 
the system, including performance, availability, security, portability, 
privacy, memory and disk usage, and more. Essentially, 
non-functional requirements refer to operational constraints. For example, 
it is not enough for our home-banking system to provide all the functionalities 
required by the bank. It also needs to have 99.9% availability---which thus 
acts as a constraint on its operation.

\index{Brooks, Frederick}
As Fredrick Brooks emphasizes in the opening quote of this chapter, 
requirements definition is a critical stage in software development processes. 
For example, it is pointless to have a system with the best design, implemented 
in a modern programming language, using the best development process, 
with high test coverage if it does not meet the needs of the users. Indeed,
incorrectly specified or missing requirements can result in significant costs. 
The system, after being fully developed, might require major rework to fix 
these problems. In the worst case scenario, it might be rejected by 
users for not addressing their needs.

Functional requirements are frequently specified in natural language. 
Conversely, non-functional requirements are quantitatively 
specified using metrics, as illustrated in the following table:

| **Non-Functional Requirement** |  **Metric**
| ------------- | ------------- |
| Performance | Transactions per second, response time, latency, throughput |
| Space | Disk usage, RAM, cache usage |
| Reliability | % of availability, Mean Time Between Failures (MTBF) |
| Robustness | Time to recover the system after a failure (MTTR); probability of data loss after a failure |
| Usability | User training time |
| Portability | % of portable lines of code |

Using metrics for non-functional requirements avoid nebulous specifications 
like "the system should be fast and have high availability". Instead, it is 
recommended to specify, for example, that the system should ensure 
99.99% availability and 99% of the transactions conducted in any 5-minute 
window should have a maximum response time of 1 second.

\index{Sommerville, Ian}
Some authors, such as Ian Sommerville 
([link](https://iansommerville.com/software-engineering-book/)), 
also divide requirements into **user requirements** and **system requirements**. 
User requirements are high-level, non-technical, and usually written 
by users in natural language. Conversely, system requirements are more 
technical, precise and defined by the developers. Oftentimes, a single user 
requirement expands into a set of system requirements. As an example, in a 
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
lifecycle, using only well-defined techniques whenever possible.

\index{Requirements!Elicitation}
The process of identifying, discovering, and understanding a system's 
requirements is termed **Requirements Elicitation**. Elicitation, in 
this context, implies drawing out the main requirements of the system 
from discussions and interactions between the system's developers 
and its stakeholders.

Requirements elicitation can utilize various techniques, including conducting 
stakeholder interviews, issuing questionnaires, reviewing organizational 
documents, organizing user workshops, creating prototypes, and analyzing 
usage scenarios. Some elicitation techniques also rely on ethnographic studies. 
Ethnography, typically used in Anthropology to understand a culture in its natural setting, — where the root *ethnos* translates as people or culture — is applied in Requirements Engineering to facilitate the developer's integration into a stakeholder's working environment. This enables the developer to observe, without interfering in or expressing personal views about the observed tasks and events, how stakeholders perform their tasks over several days.