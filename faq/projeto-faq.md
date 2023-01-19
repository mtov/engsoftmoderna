# Perguntas Frequentes sobre Projeto de Software {.unnumbered}

Neste artigo, respondemos perguntas sobre temas relacionados com projeto 
de software e que não são abordados no [Capítulo 5](https://engsoftmoderna.info/cap5.html) do 
livro. 

Segue a lista atual de perguntas:

1. [Princípios de projeto são leis que sempre devem ser seguidas?](#princ%C3%ADpios-de-projeto-s%C3%A3o-leis-que-sempre-devem-ser-seguidas)
2. [O que é uma dependência circular?](#o-que-%C3%A9-uma-depend%C3%AAncia-circular)
3. [Existe diferença entre os conceitos de Ocultamento de Informação e Encapsulamento?](#existe-diferen%C3%A7a-entre-os-conceitos-de-ocultamento-de-informa%C3%A7%C3%A3o-e-encapsulamento)
4. [O que é um design doc?](#o-que-%C3%A9-um-design-doc)

* * * 

### 1. Princípios de projeto são leis que sempre devem ser seguidas? {.unnumbered}

Princípios de projeto, como SOLID e outros princípios que estudamos no 
[Capítulo 5](https://engsoftmoderna.info/cap5.html#solid-e-outros-princ%C3%ADpios-de-projeto) são 
recomendações ou diretrizes (ou "dicas"). Ou seja, geralmente, eles são 
úteis e válidos, mas não necessariamente devem ser usados em toda e 
qualquer situação.

Vamos dar dois exemplos para ilustrar melhor:

* Prefira Interfaces a Classes Concretas (ou Princípio da Inversão de 
Dependências): a ideia desse princípio é que quando usamos uma interface 
depois podemos trocar a sua implementação, ou seja, mudar a 
classe concreta que implementa a interface. Porém, podem existir 
situações -- principalmente, em sistemas pequenos e menos relevantes --
nas quais sabemos, com grande certeza, de que isso nunca irá ocorrer. 
Ou seja, como nunca vamos precisar de uma outra classe concreta, 
não vale a pena investir tempo criando uma estrutura intermediária, 
no caso, uma interface.

* Princípio Aberto/Fechado: esse princípio recomenda que devemos, já no 
momento da implementação de uma classe, pensar nos seus pontos de 
extensão. No [livro](https://engsoftmoderna.info/cap5.html#princ%C3%ADpio-abertofechado), para ilustrar 
o princípio, usamos o exemplo de um método `sort` com duas implementações: 
na primeira implementação, o método ordena uma lista em ordem lexicográfica; 
na segunda implementação, ele recebe como parâmetro um objeto cuja 
função é comparar dois elementos da lista segundo um outro critério. 
Logo, esse método `sort` está "aberto" a novos critérios de comparação. 
Porém, suponha que você seja responsável por implementar um método 
como `sort` em um contexto no qual sabemos, com grande certeza, que critérios 
de ordenação alternativos não serão necessários. Logo, nesse caso, não vale 
a pena investir tempo em uma versão mais aberta, flexível e 
extensível de `sort`.

### 2. O que é uma dependência circular? {.unnumbered}

Suponha dois pacotes P1 e P2. Existe uma dependência circular 
entre eles quando P1 usa P2 e vice-versa.

Nessa explicação, "usar" significa que P1 declara variáveis, 
chama métodos, lança exceções ou estende classes implementadas 
em P2, dentre outros usos possíveis.

Uma dependência circular pode ser indireta também, isto é:

P1 usa P2, que usa P3, que usa P4,..., que usa Pn, que volta a usar P1.

Dependências circulares entre pacotes devem ser evitadas, pois elas
tornam o entendimento, manutenção e teste do sistema mais complexo.

O próximo diagrama -- extraída do seguinte 
[artigo](https://hal.archives-ouvertes.fr/hal-01203525) -- ilustra uma
dependência circular entre classes dos pacotes `awt` e `swing` de Java:

![Dependência circular entre dois pacotes da biblioteca de Java. Os retângulos
maiores são pacotes (ou módulos) e os menores são classes.](./figs/dep-circular.png){width=70%}

O interessante nesse exemplo é que `swing` é um pacote para construção
de interfaces gráficas mais novo do que `awt`. De certo modo, seria 
então esperado que ele usasse código antigo, para facilitar a sua
implementação. Mas, por outro lado, o que o diagrama revela é que
manutenções no pacote antigo (`awt`) introduziram também
dependências para o pacote novo (`swing`).

### 3. Existe diferença entre os conceitos de Ocultamento de Informação e Encapsulamento? {.unnumbered}

Na prática, os dois conceitos são muito similares. Por exemplo, o livro 
*Object-Oriented Software Construction*, de Bertrand Meyer, 
inclui um glossário de termos sobre orientação a objetos. 
Nesse glossário, a entrada destinada a encapsulamento simplesmente
redireciona o leitor para a entrada sobre ocultamento de informação.

Dito isso, gostaríamos de comentar que o termo ocultamento 
de informação costuma ser mais usado quando estamos tratando de
projeto de software, tal como fizemos no 
[Capítulo 5](https://engsoftmoderna.info/cap5.html#ocultamento-de-informa%C3%A7%C3%A3o).
Ou seja, ocultamento de informação é uma propriedade de 
mais alto nível, por assim dizer. Já encapsulamento costuma 
ser mais usado em textos sobre linguagens de programação. 

### 4. O que é um design doc? {.unnumbered}

Algumas vezes, antes de iniciar a implementação
de um novo sistema ou antes de implementar uma nova funcionalidade 
mais complexa em um sistema existente, recomenda-se escrever um 
documento abordando questões de projeto relevantes nessa 
implementação, o qual é chamado de **design doc**. 

Um design doc deve conter seções como as seguintes:

* Contexto e objetivos do novo sistema ou funcionalidade.
* Design proposto, incluindo, se for interessante, um diagrama de 
alto nível.
* Trade-offs, isto é, pontos positivos e negativos do design proposto. 
* Designs alternativos e uma justificativa de porque eles não 
estão sendo propostos.
* Impactos em requisitos não-funcionais, tais como desempenho, 
segurança, privacidade, etc.

Um design doc, no entanto, não é um documento extenso.
Normalmente, ele possui menos de 5 páginas. Porém, existem exceções,
nas quais esse tamanho pode chegar a 15-20 páginas. Ele deve ser 
discutido, revisado e aprovado por todos os membros do time que ficará
responsável pela implementação da nova funcionalidade ou
sistema.

* * * 

Voltar para a [página principal](../index.html).
