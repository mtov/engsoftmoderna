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
	$(pandoc_bin) -T "Shape Up: Uma possível alternativa a Scrum?" shape-up.md -o shape-up.html

squads: squads.md
	$(pandoc_bin) -T "Organizando Times Ágeis em Squads" squads.md -o squads.html

pix-banco-x: pix-banco-x.md
	$(pandoc_bin) -T "Estudo de Caso: Implementação do PIX em um Banco X" pix-banco-x.md -o pix-banco-x.html

cfd: cfd.md
	$(pandoc_bin) -T "Diagramas de Fluxo Cumulativo" cfd.md -o cfd.html

design-thinking: design-thinking.md
	$(pandoc_bin) -T "Design Thinking: Principais Conceitos e Atividades" design-thinking.md -o design-thinking.html

mvp: mvp.md
	$(pandoc_bin) -T "O que é (e também o que não é) um MVP?" mvp.md -o mvp.html

jobs-to-be-done: jobs-to-be-done.md
	$(pandoc_bin) -T "Jobs to be Done (JTBD) Aplicado a Produtos de Software" jobs-to-be-done.md -o jobs-to-be-done.html

product-discovery: product-discovery.md
	$(pandoc_bin) --lua-filter=../helper/anchor-links.lua -T "Product Discovery: Uma Breve Introdução" product-discovery.md -o product-discovery.html

deep-modules: deep-modules.md
	$(pandoc_bin) -T "Módulos devem ser Profundos!" deep-modules.md -o deep-modules.html

ddd: ddd.md
	$(pandoc_bin) -T "Domain-Driven Design (DDD): Um Resumo" ddd.md -o ddd.html

outros-principios: outros-principios.md
	$(pandoc_bin) --lua-filter=../helper/anchor-links.lua -T "Mais Alguns Princípios de Projeto" outros-principios.md -o outros-principios.html

composite: composite.md
	$(pandoc_bin) -T "Criando objetos compostos com o Padrão Composite" composite.md -o composite.html

injecao-dependencia: injecao-dependencia.md
	$(pandoc_bin) -T "O que é Injeção de Dependência?" injecao-dependencia.md -o injecao-dependencia.html

sagas: sagas.md
	$(pandoc_bin) -T "Consistência de Dados em Microsserviços usando-se Sagas" sagas.md -o sagas.html

arquitetura-limpa: arquitetura-limpa.md
	$(pandoc_bin) -T "Construindo Sistemas com uma Arquitetura Limpa" arquitetura-limpa.md -o arquitetura-limpa.html

arquitetura-hexagonal: arquitetura-hexagonal.md
	$(pandoc_bin) -T "O que é uma Arquitetura Hexagonal?" arquitetura-hexagonal.md -o arquitetura-hexagonal.html

serverless: serverless.md
	$(pandoc_bin) -T "O que é uma Arquitetura Serverless?" serverless.md -o serverless.html

exemplos-teste: exemplos-teste.md
	$(pandoc_bin) --lua-filter=../helper/anchor-links.lua -T "Alguns Exemplos Reais e Interessantes de Testes" exemplos-teste.md -o exemplos-teste.html

testes-mutacao: testes-mutacao.md
	$(pandoc_bin) --lua-filter=../helper/anchor-links.lua -T "Testes de Mutação: Uma Visão Prática" testes-mutacao.md -o testes-mutacao.html

broken-windows: broken-windows.md
	$(pandoc_bin) -T "Duas Recomendações para Manutenção de Software" broken-windows.md -o broken-windows.html

revisao-codigo: revisao-codigo.md
	$(pandoc_bin) -T "Revisão de Código: Uma Breve Introdução" revisao-codigo.md -o revisao-codigo.html

gitflow: gitflow.md
	$(pandoc_bin) -T "Gerenciando Branches com Git-flow, GitHubFlow e TBD" gitflow.md -o gitflow.html
