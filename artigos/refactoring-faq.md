# Perguntas Frequentes sobre Refactoring {.unnumbered}

Neste artigo, respondemos perguntas sobre refactoring, isto é, sobre 
o [Capítulo 9](../cap9.html) do livro. 

Segue a lista atual de perguntas:

1. [Uma mudança no código feita para melhorar o desempenho de um sistema é um refactoring?](#uma-mudan%C3%A7a-no-c%C3%B3digo-para-melhorar-o-desempenho-de-um-sistema-%C3%A9-um-refactoring)


* * * 


### 1. Uma mudança no código feita para melhorar o desempenho de um sistema é um refactoring? {.unnumbered}

A resposta é **não**, pois refactorings devem ter como único objetivo melhorar o entendimento, a organização ou estrutura de um sistema e, consequentemente, facilitar manutenções futuras.

A mesma opinião é compartilhada por Fowler em seu livro sobre refactoring (1a edição,
página 54):

> Você pode fazer diversas modificações em um sistema que terão pouco ou nenhum efeito no seu comportamento observável. [Porém], apenas aquelas feitas para tornar o sistema
mais fácil de entender são refatorações. Um bom contraste é com otimizações de desempenho. Assim como refatorações, otimizações de desempenho geralmente não alteram o comportamento de um componente (além de sua velocidade) [...] No entanto, o objetivo é diferente. Uma otimização de desempenho geralmente torna o código mais difícil de entender.


* * * 

Voltar para a lista de [artigos](./artigos.html).
