# Cap. 10 - DevOps

> *Imagine um mundo onde donos de produto, desenvolvedores, QA, operadores de TI e técnicos
de segurança trabalhem juntos para garantir o sucesso de uma organização.* -- Gene Kim

## 10.1 Introdução

Até agora, neste livro, estudamos um conjunto de práticas para desenvolvimento de software com qualidade e agilidade. Por meio de métodos ágeis — como Scrum, XP ou Kanban —, vimos que o cliente deve participar desde o primeiro dia da construção de um sistema. Por outro lado, também estudamos práticas importantes para produção de software com qualidade, como testes de unidade e refactoring. Estudamos ainda princípios e padrões de projeto e também padrões arquiteturais.

Logo, neste ponto, o sistema — ou um incremento dele, resultante de um sprint — está pronto para entrar em produção ou para ser implantado. Porém, essa etapa não é tão simples e rápida como pode parecer.

Historicamente, em organizações tradicionais, a área de Tecnologia da Informação costumava ser dividida em dois departamentos: 

* Departamento de Sistemas (ou Desenvolvimento), formado por desenvolvedores, programadores, analistas, arquitetos, etc.

* Departamento de  Suporte (ou Operações), no qual ficavam alocados os administradores de rede, 
administradores de bancos de dados, técnicos de suporte, etc.

Hoje em dia, é fácil imaginar os problemas causados por essa divisão. Na maioria das vezes, a área de suporte tomava conhecimento de um sistema na véspera da sua implantação. O resultado é que a implantação poderia atrasar por meses, devido a uma variedade de problemas que não foram identificados antes. Dentre eles, podemos citar a falta de hardware para executar o novo sistema ou a nova funcionalidade, problemas de desempenho do novo sistema, incompatibilidades entre o banco de dados do novo sistema e o banco de dados de produção, vulnerabilidades de segurança no novo código, etc. No limite, esses problemas poderiam resultar no cancelamento da implantação e no abandono do sistema.

Resumindo, no modo tradicional, existia um stakeholder importante — os administradores de sistemas ou *sysadmins* — que tomava conhecimento das características e requisitos não-funcionais de um novo software na véspera da implantação. Esse problema era agravado pelo fato de os sistemas, nessa época, serem grandes monolitos, cuja implantação gerava todo tipo de preocupação, como mencionamos no final do parágrafo anterior.

Para atenuar o problema, foi proposto o conceito de **DevOps**. Por ser um termo recente, ele ainda não possui uma definição consolidada. Mas seus proponentes gostam de descrever DevOps como um movimento que visa unificar as culturas de desenvolvimento (Dev) e de operação (Ops), visando permitir a implantação mais rápida e ágil de um sistema. Essa ideia está refletida na frase que abre esse capítulo, de autoria de Gene Kim, um dos membros do grupo de desenvolvedores que ajudou a difundir os princípios de DevOps. Ainda segundo Kim, DevOps implica na seguinte quebra na cultura tradicional de implantação de sistemas:

> Em vez de iniciar as implantações à meia-noite de sexta-feira e passar todo o fim de semana trabalhando para concluí-las, as implantações ocorrem em qualquer dia útil, quando todos estão na empresa e sem que os clientes percebam - exceto quando encontram novas funcionalidades e correções de bugs. 

No entanto, DevOps não tem como objetivo criar um profissional novo, que fique responsável tanto pelo desenvolvimento como pela implantação de sistemas. Em vez disso, defende-se uma aproximação entre o  pessoal de desenvolvimento e o pessoal de operações e vice-versa, visando fazer com que a implantação de sistemas seja mais ágil e menos traumática. Tentando explicar com outras palavras, a ideia é evitar dois silos independentes: desenvolvedores e operadores. Em vez disso, defende-se que esses dois profissionais conversem desde os primeiros sprints de um projeto. Para o cliente final, o benefício deve ser a entrada em produção mais cedo do sistema que ele contratou.

Se necessário, para agilizar a implantação, os times ágeis podem incluir um profissional de operações, que participe dos trabalhos do time em tempo parcial ou mesmo em tempo integral. Sempre em função da demanda, o mesmo profissional de operações pode também participar de mais de um time. 
A ideia é que ele antecipe problemas de desempenho, segurança, incompatibilidades com outros
sistemas, etc. Ele pode também, enquanto o código fica pronto, começar a trabalhar nos
scripts de instalação, administração e monitoramento do sistema em produção.

<!---
Além de ser um movimento --- ou uma mudança de cultura organizacional --- DevOps defende a completa automatização dos passos necessários para colocar um sistema produção. Se queremos concluir rapidamente a última milha de um projeto, recomenda-se que faça
--> 
