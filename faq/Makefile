pandoc_bin = pandoc --defaults=defaults.yaml 

processos-faq: processos-faq.md
	$(pandoc_bin) --lua-filter=../helper/anchor-links.lua -T "Perguntas Frequentes sobre Processos de Software" processos-faq.md -o processos-faq.html

requisitos-faq: requisitos-faq.md
	$(pandoc_bin) --lua-filter=../helper/anchor-links.lua -T "Perguntas Frequentes sobre Requisitos" requisitos-faq.md -o requisitos-faq.html

projeto-faq: projeto-faq.md
	$(pandoc_bin) --lua-filter=../helper/anchor-links.lua -T "Perguntas Frequentes sobre Projeto de Software" projeto-faq.md -o projeto-faq.html

padroes-faq: padroes-faq.md
	$(pandoc_bin) --lua-filter=../helper/anchor-links.lua -T "Perguntas Frequentes sobre Padrões de Projeto" padroes-faq.md -o padroes-faq.html

arquitetura-faq: arquitetura-faq.md
	$(pandoc_bin) --lua-filter=../helper/anchor-links.lua -T "Perguntas Frequentes sobre Arquitetura de Software" arquitetura-faq.md -o arquitetura-faq.html

testes-faq: testes-faq.md
	$(pandoc_bin) --lua-filter=../helper/anchor-links.lua -T "Perguntas Frequentes sobre Testes de Software" testes-faq.md -o testes-faq.html

refactoring-faq: refactoring-faq.md
	$(pandoc_bin) --lua-filter=../helper/anchor-links.lua -T "Perguntas Frequentes sobre Refactoring" refactoring-faq.md -o refactoring-faq.html

git-faq: git-faq.md
	$(pandoc_bin) --lua-filter=../helper/anchor-links.lua -T "Perguntas Frequentes sobre Git (Apêndice)" git-faq.md -o git-faq.html
