// camelCased
// var firstName = "John";
// console.log(username);

// 1) names only contain letters, numbers, symbol $ _
// 2) first character must not be a number

// Fix the variable names below, and log them out to the console!

// var firstname = "Reed";
// var firstName = "Reed";
// // var sur-name = "Barger";
// var surName = "Barger";
// // var 1000 = "one thousand";
// var oneThousand = "one thousand";

// "use strict";

// hoisting este comportamento ocorre quando tentamos utilizar uma variável que ainda não foi declarada ou criada
// apesar de estar utilizando o modo strict, o código abaixo funciona e deve logar no console o valor null

// console.log(age)
// var age = 26;

// Este comportamente de forma prática ocorre pois é como se a declaração das variáveis com a palavra reservada var
// ocorresse no início do arquivo, desta forma ela é criada e tem um valor inicial null atribuido.
// var age;
// console.log(age); // undefined
// age = 26;

// para resolver esse problema é necessário utilizar
// let / const

// console.log(age);
// let age = 26; //ReferenceError: Cannot access 'age' before initialization
// const age = 26; // ReferenceError: Cannot access 'age' before initialization

// var message = "hello world";
// var message = "hello again";

// browser - window
// server - global

// console.log(message);

// var console = 'hi'
// console.log("hi");

// 1) sloppy "normal" mode - default in scripts
// 2) strict mode - throws more errors, prevents pitfalls of the language