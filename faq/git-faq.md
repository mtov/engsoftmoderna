

# Perguntas Frequentes sobre Git {.unnumbered}

Neste artigo, respondemos perguntas sobre git, isto é, sobre 
o [apêndice](https://engsoftmoderna.info/capAp.html) do livro. 

Segue a lista atual de perguntas:

1. [Para que serve a área de stage?](#para-que-serve-a-%C3%A1rea-de-stage)


* * * 


### 1. Para que serve a área de stage? {.unnumbered}

Esta é uma dúvida recorrente de usuários git. Talvez, mais especificamente, 
a dúvida seja a seguinte: por que não podemos executar um `commit` 
diretamente sem antes realizar um `add`? 

A dúvida é procedente porque a área de stage é um recurso avançado do git, que 
apenas faz sentido em cenários específicos. Apesar disso, ela
tem que ser usada por qualquer usuário, mesmo aqueles que fazem um uso mais
simples e convencional do git.

Veja, por exemplo, a seguinte crítica de um usuário do git em seu 
[blog](https://gregoryszorc.com/blog/2017/12/11/high-level-problems-with-git-and-how-to-fix-them/) pessoal:

> A área de stage constitui um fardo desnecessário e uma carga 
cognitiva a mais para os usuários do git. Embora poderosa, sua complexidade 
e capacidade de gerar confusão não justificam sua existência na configuração 
padrão do git. A área de stage é um recurso para usuários avançados e que deveria
ser opcional.

##### Mas então qual o uso avançado que pode se beneficiar da área de stage? {.unnumbered}

Por exemplo, suponha que você realizou uma mudança no código que já atende a seus
objetivos. Então, por garantia, você realiza um `git add`. 

Porém, você acha que ainda pode melhorar a sua implementação, então você decide 
trabalhar um pouco mais no código e, de fato, consegue uma solução  
melhor e, portanto, conclui com um novo `git add`, seguido de um 
`git commit`. 

Por outro lado, suponha que sua ideia de melhoria foi mal sucedida. Então, você pode 
realizar um `commit` para persistir a primeira mudança (que já estava salva no 
`stage`). E realizar um `git checkout` para descartar as mudanças que 
não deram certo e que ainda estão no diretório de trabalho.

Em resumo, o stage é uma área de armazenamento temporário que permite você
salvar temporariamente alguns arquivos e só realizar um commit quando tiver 
certeza de que eles contém a versão final de uma mudança.

**Observação:** fora do contexto de sistemas de controle de versão, o termo 
*stage* também significa um ambiente para realização de testes e 
para homologação de um sistema, antes que ele seja colocado no ambiente 
realmente de produção. Ou seja, é um ambiente intermediário,
entre o ambiente de desenvolvimento e o ambiente de produção.

* * * 

```{=html}
<p>Voltar para a <a href="https://engsoftmoderna.info">página principal</a>.</p>
```
