
    // Prática #2 - Estruturas de Repetição //

    /* Exercício 1 - O código inicia declarando a variável que vai receber a lista de números. 
    O laço de repetição for inicia uma contagem de 1 a 10, pedindo que o usuário insira um valor
    a cada repetição. A inserção é feita através do método prompt(), essa entrada sofre uma
    substituição .replace() para tratar decimal com vírgula. Só então a entrada é transformada em
    Number(). Se o usuario digitar um valor NaN (not-a-number), recebe alerta de invalida e subtrai
    o contador para descontar a vez, caso contrário o valor digitado é inserido na lista com o método
    push() que "empurra" os itens para dentro da lista (um atrás do outros). 
    
    Ao final, são utilizados os métodos Math.min() e Math.max() para indicar o menor e maior valor,
    respectivamente. Também adicionei um console.log() para visualização da lista criada dentro do laço
    de repetição.*/

    let numeros = [];

    for (let i = 1 ; i <= 10 ; i++) {
        let insert_num = Number(prompt(`Verificado de Maior e Menor\nDigite o numero ${i}:\n`).replace(',','.'));
        if (isNaN(insert_num)) {
            alert('Entrada Invalida. Insira novamente');
            i--;
        } else {
            numeros.push(insert_num);
        }
        
    }

    alert(`O maior valor da sequencia e: ${Math.max(...numeros)}\nO menor valor da sequencia e: ${Math.min(...numeros)}`);

    console.log(numeros);

    /* Exercício 2 - O codigo inicia com as declarações das variáveis de lista e entrada do usuário e
    usa do laço do-while para garantir que a entrada seja um número válido e positivo, com as condicionais
    isNaN() ou n menor que 0 (negativo). Numa iteração de 1 até o valor de entrada do usuário, o laço for
    insere cada valor numa lista, utilizando o método .push(). O console.log() exibe o resultado da
    sequencia em String e separados pelo sinal '+', com o método .join(). */

    let n_02;
    let sequencia_02 = [];

    do {
       n_02 = Number(prompt("Sequencia textual separada por +\nDigite um numero positivo: ").replace(',','.')); 
    } while (isNaN(n_02) || n_02 < 0 || n_02 === null);

    for (let i = 1 ; i <= n_02 ; i++) {
        sequencia_02.push(i);
    }

    console.log(sequencia_02.join(' + '));

    /* Exercício 3 - Aqui foi utilizada a mesma base do exercício anterior. Com a diferença de,
    após a inserção de todos os valores de 1 até n, é criada outra variável para armazenar a lista
    formatada com o método de array .map(), que itera em cada valor da lista e retorna outra lista
    com os valores calculados de acordo com o return. No exercício o método retorna o quadrado da
    sequencia (x * x). O código então exibe o array transformado e na última linha a soma de todos
    os seus valores. Foi utilizado o método de array .reduce() que pede uma função callback com
    parâmetros obrigatórios que referenciam o valor acumulado a cada iteração (implícito se 
    inicia em 0), e outro para armazenar o valor atual que está sendo reduzido.*/

    let n_03;
    let sequencia_03 = [];

    do {
       n_03 = Number(prompt("Soma dos quadrados de cada valor da sequencia\nDigite um numero: ").replace(',','.')); 
    } while (isNaN(n_03) || n_03 === null);

    for (let i = 1 ; i <= n_03 ; i++) {
        sequencia_03.push(i);
    }

    let quadrados = sequencia_03.map(x => x * x);

    console.log(quadrados);

    console.log(quadrados.reduce((x,y) => x + y));

    /* Exercício 4 - O código utiliza o laço do-while para validar a entrada de um número e trata
    decimais com vírgula com o método .replace(). Para construir a lógica fatorial, escrevi em um
    caderno como o cálculo acontece, então surgiu: fatorial = n * (n - 1) * (n - 2) * (n - 3) -
    numa situação em que fosse ser calculado o 4!. Cheguei a conclusão que fatorial é a multiplicação
    contínua dos valores da subtração entre n e a sequência cardinal crescente até n! É declarada então
    a variável fatorial com o valor de n inserido pelo usuário. O laço for cria a sequência necessária
    para as subtrações. Dentro da estrutura em cada iteração é acumulado em fatorial o seu valor multiplicado
    por (n - i). Em caso de 4! será: 4 = 4 * 3 -> 12 = 12 * 2 -> 24 = 24 * 1. O resultado final é
    exibido com console.log().*/

    let n_04;

    do {
       n_04 = Number(prompt("Calculadora de fatorial\nDigite o numero: ").replace(',','.')); 
    } while (isNaN(n_04) || n_04 === null);

    let fatorial = n_04;

    for (let i = 1 ; i <= (n_04 - 1) ; i++) {
        fatorial = fatorial * (n_04 - i);
    }
    
    console.log(fatorial);

    /* Exercício 5 - É reutilizada a estrutura do-while para validação da entrada n. Foi declarada
    a variável harmonico, iniciada em 0 pois deve ser interpretada como Number(). O laço for então
    inicia a iteração sequencial de 1 até n, acumulando os valores de 1 dividido por cada valor (i),
    pois a regra é que a cada repetição o valor de harmonico seja somado às frações de 1 por cada item
    da sequência crescente. Console.log() exibe o resultado final.*/

    let n_05;

    do {
       n_05 = Number(prompt("Calculadora de numero harmonico\nDigite um numero positivo: ").replace(',','.')); 
    } while (isNaN(n_05) || n_05 < 0 || n_05 === null);

    let harmonico = 0;

    for (let i = 1 ; i <= n ; i++) {
        harmonico = harmonico + (1 / i); 
    }

    console.log(harmonico);