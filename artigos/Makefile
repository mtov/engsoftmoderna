# pandoc_bin = /Users/mtov/pandoc-2.11.4/bin/pandoc
# adicionar: -M document-css=false

pandoc_bin = pandoc --defaults=defaults.yaml 

desafios-engsoft: desafios-engsoft.md
	$(pandoc_bin) -T "Desafios da Formação de Engenheiros de Software" desafios-engsoft.md -o desafios-engsoft.html

como-monetizar: como-monetizar.md
	$(pandoc_bin) -T "Como monetizar sistemas de software?" como-monetizar.md -o como-monetizar.html

micro-saas: micro-saas.md
	$(pandoc_bin) -T "Micro-SaaS: Microempresas de Software como Serviço" micro-saas.md -o micro-saas.html

shape-up: shape-up.md
	$(pandoc_bin) -T "ShapeUp: Uma possível alternativa a Scrum?" shape-up.md -o shape-up.html

squads: squads.md
	$(pandoc_bin) -T "Organizando Times de Software em Squads" squads.md -o squads.html

pix-banco-x: pix-banco-x.md
	$(pandoc_bin) -T "Estudo de Caso: Implementação do PIX em um Banco X" pix-banco-x.md -o pix-banco-x.html

processos-faq: processos-faq.md
	$(pandoc_bin) --lua-filter=../helper/anchor-links.lua -T "Perguntas Frequentes sobre Processos de Software" processos-faq.md -o processos-faq.html

cfd: cfd.md
	$(pandoc_bin) -T "Diagramas de Fluxo Cumulativo" cfd.md -o cfd.html

design-thinking: design-thinking.md
	$(pandoc_bin) -T "Design Thinking: Principais Conceitos e Atividades" design-thinking.md -o design-thinking.html

mvp: mvp.md
	$(pandoc_bin) -T "O que é (e que o não é) um MVP?" mvp.md -o mvp.html

jobs-to-be-done: jobs-to-be-done.md
	$(pandoc_bin) -T "Jobs to be Done (JTBD) Aplicado a Produtos de Software" jobs-to-be-done.md -o jobs-to-be-done.html

requisitos-faq: requisitos-faq.md
	$(pandoc_bin) --lua-filter=../helper/anchor-links.lua -T "Perguntas Frequentes sobre Requisitos" requisitos-faq.md -o requisitos-faq.html

deep-modules: deep-modules.md
	$(pandoc_bin) -T "Módulos devem ser Profundos!" deep-modules.md -o deep-modules.html

ddd: ddd.md
	$(pandoc_bin) -T "Domain-Driven Design (DDD): Um Resumo" ddd.md -o ddd.html

projeto-faq: projeto-faq.md
	$(pandoc_bin) --lua-filter=../helper/anchor-links.lua -T "Perguntas Frequentes sobre Projeto de Software" projeto-faq.md -o projeto-faq.html

padroes-faq: padroes-faq.md
	$(pandoc_bin) --lua-filter=../helper/anchor-links.lua -T "Perguntas Frequentes sobre Padrões de Projeto" padroes-faq.md -o padroes-faq.html

composite: composite.md
	$(pandoc_bin) -T "Criando objetos compostos com o Padrão de Projeto Composite" composite.md -o composite.html

injecao-dependencia: injecao-dependencia.md
	$(pandoc_bin) -T "O que é Injeção de Dependência?" injecao-dependencia.md -o injecao-dependencia.html

sagas: sagas.md
	$(pandoc_bin) -T "Consistência de Dados em Microsserviços usando-se Sagas" sagas.md -o sagas.html

arquitetura-limpa: arquitetura-limpa.md
	$(pandoc_bin) -T "Construindo Sistemas com uma Arquitetura Limpa" arquitetura-limpa.md -o arquitetura-limpa.html

arquitetura-hexagonal: arquitetura-hexagonal.md
	$(pandoc_bin) -T "O que é uma Arquitetura Hexagonal" arquitetura-hexagonal.md -o arquitetura-hexagonal.html

testes-faq: testes-faq.md
	$(pandoc_bin) --lua-filter=../helper/anchor-links.lua -T "Perguntas Frequentes sobre Testes de Software" testes-faq.md -o testes-faq.html

exemplos-teste: exemplos-teste.md
	$(pandoc_bin) --lua-filter=../helper/anchor-links.lua -T "Alguns Exemplos Reais e Interessantes de Testes" exemplos-teste.md -o exemplos-teste.html

broken-windows: broken-windows.md
	$(pandoc_bin) -T "Teoria das Janelas Quebradas & Regra do Escoteiros?" broken-windows.md -o broken-windows.html

revisao-codigo: revisao-codigo.md
	$(pandoc_bin) -T "Revisão de Código: Uma Breve Introdução" revisao-codigo.md -o revisao-codigo.html
