# Perguntas Frequentes sobre Padrões de Projeto {.unnumbered}

Neste artigo, respondemos perguntas sobre temas relacionados com padrões
de projeto, isto é, sobre o [Capítulo 6](https://engsoftmoderna.info/cap6.html) do livro. 

Segue a lista atual de perguntas:

1. [Qual a diferença entre um Proxy e um Adaptador?](#qual-a-diferen%C3%A7a-entre-um-proxy-e-um-adaptador)
2. [Qual a diferença entre Strategy e Template Method?]()


* * * 


### 1. Qual a diferença entre um Proxy e um Adaptador? {.unnumbered}

Suponha um objeto que tenha uma interface `I`. 

* Um **proxy** implementa a interface`I`, isto é, implementa todos 
os seus métodos. Normalmente, um proxy é usado para implementar 
requisitos não-funcionais, tais como segurança, persistência, 
distribuição, etc.

* Já um **adaptador** implementa uma outra interface, digamos que `J` e 
fica responsável por adaptá-la para a interface `I`. Para ilustrar, 
lembre-se de um adaptador de tomadas do padrão novo para o antigo 
ou vice-versa.

### 2. Qual a diferença entre Strategy e Template Method? {.unnumbered}

Suponha uma classe X:

* Suponha que a implementação de X precisa usar um serviço Y,
o qual possui implementações alternativas Y1, Y2, Y3, etc. Porém, X não 
quer se comprometer com nenhuma dessas implementações. Nesse caso, 
podemos usar o padrão de projeto **Strategy** para encapsular a 
implementação de Y em uma hierarquia separada de classes e para permitir 
que sejam criadas instâncias de X que usam determinadas classes de 
tal hierarquia.

* Suponha agora que ao implementar X queremos definir o esqueleto
de um algoritmo Y. Ou seja, X vai implementar Y, porém de forma 
parcial. Isso significa que as implementações de Y serão "completadas" 
em subclasses de X. Nesse caso, podemos usar o padrão de projeto 
**Template Method** para implementar esse esqueleto de Y na classe X.


* * * 

Voltar para a [página principal](../index.html).
