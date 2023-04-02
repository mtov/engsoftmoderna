

# Perguntas Frequentes sobre Padrões de Projeto {.unnumbered}

Neste artigo, respondemos perguntas sobre temas relacionados com padrões
de projeto, isto é, sobre o [Capítulo 6](https://engsoftmoderna.info/cap6.html) do livro. 

Segue a lista atual de perguntas:

1. [Qual a diferença entre um Proxy e um Adaptador?](#qual-a-diferen%C3%A7a-entre-um-proxy-e-um-adaptador)
2. [Qual a diferença entre Strategy e Template Method?](#qual-a-diferen%C3%A7a-entre-strategy-e-template-method)
3. [O que é uma especificação (specification)?](#o-que-%C3%A9-uma-especifica%C3%A7%C3%A3o-specification)
4. ´[Qual a diferença entre uma Fachada e um API Gateway?](#qual-a-diferen%C3%A7a-entre-uma-fachada-e-um-api-gateway)

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


### 3. O que é uma especificação (specification)? {.unnumbered}

Uma especificação é um padrão proposto por Eric Evans e 
Martin Fowler no seguinte 
[artigo](http://www.martinfowler.com/apsupp/spec.pdf). Ele é
também comentado no livro sobre Domain-Driven Design do Evans.

Conceitualmente, uma especificação é um predicado lógico
-- isto é, uma função que retorna verdadeiro ou falso -- e que 
encapsula uma regra de negócio importante e complexa.

Uma especificação testa se um objeto está em um certo estado. Seja, 
por exemplo, uma fábrica que recebe pedidos de clientes para 
produção de certos itens. Suponha ainda que a regra para determinar 
se um `Pedido` está atrasado, em relação ao seu prazo planejado de 
entrega, é complicada. Por exemplo, ela pode depender dos itens 
que foram pedidos, da capacidade de produção da fábrica,
do tempo que leva para entregar o pedido para o cliente, etc.
Veja ainda que essas condições são dinâmicas, pois o estoque
da fábrica muda diariamente.

Logo, podemos criar uma classe para encapsular 
a verificação de pedidos atrasados:

```
class EspecificacaoPedidosAtrasados {
   boolean pedidoEstaAtrasado(Pedido p) {
     // regra que verifica se "p" está atrasado  
   } 	
}
```

Ou seja, a regra para determinar se um pedido está atrasado é
complexa a ponto de justificar sua "especificação" em uma classe 
a parte. E, então, `Pedido` referencia essa nova classe:

```
class Pedido {
  ...
  EspecificacaoPedidoAtrasado espec = new EspecificacaoPedidoAtrasado();
  ...
}
```

Resumindo, especificação é o nome que se dá para classes que 
apenas implementam métodos booleanos que testam se um dado objeto
atende a uma regra de negócio mais complexa. Logo, uma especificação
torna a classe que usa a regra de negócio (no nosso exemplo, `Pedido`)
mais simples e mais "leve", isto é, com menos dependências. Fica também 
mais fácil criar regras de negócio alternativas. Por exemplo, uma 
segunda regra pode verificar se pedidos expressos estão atrasados.

### 4. Qual a diferença entre uma Fachada e um API Gateway? {.unnumbered}

Na verdade, essa diferença é pequena e sutil. Para explicá-la,
vamos primeiro reproduzir a definição de Fachada, que usamos
no [Capítulo 6](https://engsoftmoderna.info/cap6.html#fachada):

> Uma Fachada é uma classe que oferece uma interface mais 
simples para um sistema. O objetivo é evitar que os usuários 
tenham que conhecer classes internas desse sistema; em vez disso, 
eles precisam interagir apenas com a classe de Fachada. As 
classes internas ficam encapsuladas por trás dessa Fachada.

Já API Gateway é um conceito parecido, porém mais usado no 
contexto de arquiteturas de software, particularmente arquiteturas baseadas em microsserviços. Veja uma definição adaptada 
do seguinte [artigo](https://doi.org/10.5220/0006798302210232):

> Um API Gateway é um ponto de entrada único de um sistema e
responsável por rotear as requisições dos clientes para os 
microsserviços apropriados, podendo interagir com múltiplos
microsserviços e também combinar os resultados de tais interações.
Um API Gateway pode ser também responsável por converter 
protocolos e implementar lógica relacionada com autenticação, 
limites de taxas de requisições e balanceamento de carga.

Veja então que essas últimas funcionalidades -- conversão de protocolos, autenticação, balanceamento de cargas, etc
-- não são comuns em Fachadas.

* * * 

```{=html}
<p>Voltar para a <a href="https://engsoftmoderna.info">página principal</a>.</p>
```