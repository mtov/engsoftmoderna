

# Módulos devem ser Profundos! {.unnumbered}

## Introdução {.unnumbered}

[John Ousterhout](https://web.stanford.edu/~ouster/cgi-bin/home.php)
é professor da Universidade de Stanford e criador da
linguagem de script Tcl/Tk. Em 2018, ele lançou um 
[livro](https://www.goodreads.com/book/show/39996759-a-philosophy-of-software-design) sobre
filosofia e princípios de projeto de software.

Neste livro, uma das principais recomendações
-- e, provavelmente, uma das mais originais, se comparada
com o restante da literatura sobre projeto de software --
é a seguinte: **os módulos de um sistema devem ser profundos**.

Vamos, primeiro, definir o que é um módulo.
Basicamente, é qualquer elemento de código que tem
uma implementação e uma interface. Assim, podemos ter 
módulos de diferentes tamanhos, incluindo funções, classes,
subsistemas, pacotes, etc.

## Módulos Profundos {.unnumbered}

Mas voltando à recomendação de Ousterhout, um módulo é profundo (*deep*) quando sua implementação
é bem mais complexa do que sua interface. Em outras
palavras, módulos devem oferecer para
seus clientes uma interface simples. Porém, por trás
dessa interface, deve existir uma implementação complexa.

O contrário é um módulo raso, quando a interface é quase
tão complexa quanto a própria implementação do módulo.
Para ajudar a entender, 
vejas as seguintes ilustrações retiradas do livro:

![Módulos profundos vs módulos rasos](./figs/deep-modules.png){width=75%}

Como exemplo de módulo profundo, o autor menciona o sistema
de arquivos do Unix, cuja interface é composta por apenas
cinco funções:

```
int open(const char* path, int flags, mode_t permissions);
ssize_t read(int fd, void* buffer, size_t count);
ssize_t write(int fd, const void* buffer, size_t count);
off_t lseek(int fd, off_t offset, int referencePosition);
int close(int fd);
```

Ou seja, a implementação de um sistema de arquivos em um
sistema operacional é bastante complexa, pois envolve lidar
com uma variedade de dispositivos de hardware, criar estruturas para
armazenar arquivos, gerenciar permisssões, permitir acesso
concorrente a arquivos, manipular caches, etc. Porém,
toda essa monstruosa complexidade fica escondida por trás de uma
interface muito simples (as cinco funções mostradas acima).
Inclusive, o autor comenta que a implementação de sistemas
de arquivos no Unix evoluiu radicalmente ao 
longo dos anos, mas de forma invisível aos usuários, pois
a assinatura das cinco funções de interface permaneceu inalterada.

O autor menciona um segundo exemplo de módulo profundo:
coletores de lixo. Apesar de complexos, algoritmos 
de coleta de lixo são encapsulados em módulos que,
basicamente, não possuem uma interface. Pelo menos uma
interface visível à maioria dos programadores de 
linguagens como Go ou Java.

Nas minhas aulas, eu costumo usar também uma 
metáfora alternativa, originalmente sugerida em um
[livro](https://en.wikipedia.org/wiki/Object-Oriented_Software_Construction)
do prof. Bertrand Meyer. Segundo ele, módulos devem ser como icebergs, com uma
pequena "ponta" (a interface) e uma grande base
(a implementação), que fica submersa e invisível
aos olhos externos. Veja a figura usada no livro de
Meyer:

![Módulos devem ser como icebergs](./figs/deep-modules-iceberg.png){width=45%}



## Módulos Rasos {.unnumbered}

Por outro lado, a interface de um módulo raso (*shallow*)
é relativamente complexa, quando comparada com a implementação
do módulo. Como exemplo extremo, o autor menciona a seguinte
função:

```
private void addNullValueForAttribute(String attribute) { // interface
	data.put(attribute, null);    // implementação
}
```

Para ele, é mais simples e fácil chamar diretamente:

```
data.put(attribute, null);
```

do que criar uma função com apenas essa finalidade. Ou seja, 
a função `addNullValueForAttribute`
adiciona complexidade ao sistema, mas sem proporcionar
grandes benefícios.


## Exercícios {.unnumbered}

1. Dê dois exemplos de módulos profundos. Para facilitar sua resposta,
pense em pacotes ou bibliotecas de sua linguagem preferida.

2. Seja a seguinte afirmação: módulos
profundos implicam obrigatoriamente em funções
ou classes grandes, com muitas linhas de código. Ela é 
verdadeira ou falsa? Justifique e discuta.

3. Suponha o seguinte método da classe `String` de Java:

```
public boolean isEmpty() {
  return value.length == 0;
}
```    

Esse método é raso? Justifique e discuta.

Sugestão: Para responder à pergunta pense no código que chama `isEmpty()`.
Por exemplo, você trocaria o seguinte código cliente

```
if (myString.isEmpty()) {
    ...
}
```

por um código como o seguinte?

```
if (myString.lenght() == 0) {
    ...
}
```

4. Seja a seguinte afirmação: todo módulo raso é pequeno, mas nem
todo módulo pequeno é raso. Ela é  verdadeira ou falsa? 
Justifique e discuta. (observação: um módulo pequeno é aquele que tem poucas linhas de código.)

5. Seja a seguinte afirmação retirada do livro de Refactoring de
Martin Fowler:

> Small methods really work only when you have good names, so you need to pay attention to naming. People sometimes ask me what length I look for in a method. To me length is not the issue. The key is the semantic distance between the method name and the method body. 

Explique conceito de *distância semântica entre o nome de um método e o
corpo desse método*, mencionado na citação acima.

* * * 

```{=html}
<p>Voltar para a lista de <a href="./artigos.html">artigos</a>.</p>
```