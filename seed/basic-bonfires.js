module.exports = {
  "name": "Basic Algorithm Scripting",
  "order": 8,
  "time": "50 hours",
  "helpRoom": "HelpJavaScript",
  "challenges": [
    {
      "id": "bd7158d2c442eddfbeb5bd1f",
      "title": "Get Set for our Algorithm Challenges",
      "description": [
        [
          "//i.imgur.com/sJkp30a.png",
          "An image of a algorithm challenge showing directions, tests, and the code editor.",
          "Our algorithm challenges will teach you how to think like a programmer.",
          ""
        ],
        [
          "//i.imgur.com/d8LuRNh.png",
          "A mother bird kicks a baby bird out of her nest.",
          "Our previous challenges introduced you to programming concepts. But for these algorithm challenges, you'll now need to apply what you learned to solve open-ended problems.",
          ""
        ],
        [
          "//i.imgur.com/WBetuBa.jpg",
          "A programmer punching through his laptop screen in frustration.",
          "Our algorithm challenges are hard. Some of them may take you several hours to solve. You will get frustrated. But don't quit.",
          ""
        ],
        [
          "//i.imgur.com/p2TpOQd.jpg",
          "A cute dog jumping over a hurdle and winking and pointing his paw at you.",
          "When you get stuck, just use the Read-Search-Ask methodology.<br>Don't worry - you've got this.",
          ""
        ]
      ],
      "challengeSeed": [],
      "tests": [],
      "type": "Waypoint",
      "challengeType": 7,
      "isRequired": false,
      "translations": {
        "es": {
          "title": "Prepárate para nuestros Desafíos sobre Algoritmos",
          "description": [
            [
              "//i.imgur.com/sJkp30a.png",
              "Una imagen de un desafio sobre algoritmos que presenta instrucciones, pruebas y el editor de código.",
              "Nuestros desafios sobre algoritmos te enseñarán como pensar como un programador.",
              ""
            ],
            [
              "//i.imgur.com/d8LuRNh.png",
              "Una mamá pájaro saca un bebé pájaro fuer de su nido.",
              "Nuestros desafios anteriores te introdujeron a los conceptos de programación. Pero para estos desafios sobre algoritmos, ahora necesitarás aplicar lo que has aprendido y resolver problemas de respuesta abierta",
              ""
            ],
            [
              "//i.imgur.com/WBetuBa.jpg",
              "Un programador frustado golpeando la pantalla de su computador.",
              "Nuestros desafíos sobre algortimos son difíciles.  Algunos pueden requerir muchas horas para resolverse.  Podrás frustarte, pero no te rindas.",
              ""
            ],
            [
              "//i.imgur.com/p2TpOQd.jpg",
              "Un tierno perro que salta sobre un obstáculo, pica el ojo y te apunta con su pata.",
              "Cuando te atasques, usa la metodología Leer-Buscar-Preguntar.<br>No te preocupes -  ya lo has entendido.",
              ""
            ]
          ]
        }
      }
    },
    {
      "id": "a202eed8fc186c8434cb6d61",
      "title": "Reverse a String",
      "description": [
        "Reverse the provided string.",
        "You may need to turn the string into an array before you can reverse it.",
        "Your result must be a string.",
        "Remember to use <a href=\"http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514\" target=\"_blank\">Read-Search-Ask</a> if you get stuck. Write your own code."
      ],
      "challengeSeed": [
        "function reverseString(str) {",
        "  return str;",
        "}",
        "",
        "reverseString(\"hello\");"
      ],
      "tests": [
        "assert(typeof reverseString(\"hello\") === \"string\", 'message: <code>reverseString(\"hello\")</code> should return a string.');",
        "assert(reverseString(\"hello\") === \"olleh\", 'message: <code>reverseString(\"hello\")</code> should become <code>\"olleh\"</code>.');",
        "assert(reverseString(\"Howdy\") === \"ydwoH\", 'message: <code>reverseString(\"Howdy\")</code> should become <code>\"ydwoH\"</code>.');",
        "assert(reverseString(\"Greetings from Earth\") === \"htraE morf sgniteerG\", 'message: <code>reverseString(\"Greetings from Earth\")</code> should return <code>\"htraE morf sgniteerG\"</code>.');"
      ],
      "type": "bonfire",
      "isRequired": true,
      "solutions": [
        "function reverseString(str) {\n  return str.split('').reverse().join(\"\");\n}\n\nreverseString('hello');\n"
      ],
      "MDNlinks": [
        "Global String Object",
        "String.prototype.split()",
        "Array.prototype.reverse()",
        "Array.prototype.join()"
      ],
      "challengeType": 5,
      "translations": {
        "es": {
          "title": "Invierte el texto",
          "description": [
            "Invierte la cadena de texto que se te provee",
            "Puede que necesites convertir la cadena de texto en un arreglo antes de que puedas invertirla",
            "El resultado debe ser una cadena de texto",
            "Recuerda utilizar <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Leer-Buscar-Preguntar</a> si te sientes atascado. Intenta programar en pareja. Escribe tu propio código."
          ]
        }
      }
    },
    {
      "id": "a302f7aae1aa3152a5b413bc",
      "title": "Factorialize a Number",
      "description": [
        "Return the factorial of the provided integer.",
        "If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.",
        "Factorials are often represented with the shorthand notation <code>n!</code>",
        "For example: <code>5! = 1 * 2 * 3 * 4 * 5 = 120</code>",
        "Only integers greater than or equal to zero will be supplied to the function.",
        "Remember to use <a href=\"http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514\" target=\"_blank\">Read-Search-Ask</a> if you get stuck. Write your own code."
      ],
      "challengeSeed": [
        "function factorialize(num) {",
        "  return num;",
        "}",
        "",
        "factorialize(5);"
      ],
      "tests": [
        "assert(typeof factorialize(5) === 'number', 'message: <code>factorialize(5)</code> should return a number.');",
        "assert(factorialize(5) === 120, 'message: <code>factorialize(5)</code> should return 120.');",
        "assert(factorialize(10) === 3628800, 'message: <code>factorialize(10)</code> should return 3628800.');",
        "assert(factorialize(20) === 2432902008176640000, 'message: <code>factorialize(20)</code> should return 2432902008176640000.');",
        "assert(factorialize(0) === 1, 'message: <code>factorialize(0)</code> should return 1.');"
      ],
      "type": "bonfire",
      "isRequired": true,
      "solutions": [
        "function factorialize(num) {\n  return num < 1 ? 1 : num * factorialize(num-1);\n}\n\nfactorialize(5);\n"
      ],
      "MDNlinks": [
        "Arithmetic Operators"
      ],
      "challengeType": 5,
      "translations": {
        "es": {
          "title": "Factoriza un número",
          "description": [
            "Crea una función que devuelva el factorial del número entero que se te provee",
            "El factorial de un número entero positivo n es la multiplicación de todos los enteros positivos menores o iguales a n",
            "Los factoriales son comúnmente representados con la notación <code>n!</code>",
            "Por ejemplo: <code>5! = 1 * 2 * 3 * 4 * 5 = 120</code>",
            "Recuerda utilizar <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Leer-Buscar-Preguntar</a> si te sientes atascado. Intenta programar en pareja. Escribe tu propio código."
          ]
        }
      }
    },
    {
      "id": "aaa48de84e1ecc7c742e1124",
      "title": "Check for Palindromes",
      "description": [
        "Return <code>true</code> if the given string is a palindrome. Otherwise, return <code>false</code>.",
        "A <dfn>palindrome</dfn> is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.",
        "<strong>Note</strong><br>You'll need to remove <strong>all non-alphanumeric characters</strong> (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.",
        "We'll pass strings with varying formats, such as <code>\"racecar\"</code>, <code>\"RaceCar\"</code>, and <code>\"race CAR\"</code> among others.",
        "We'll also pass strings with special symbols, such as <code>\"2A3*3a2\"</code>, <code>\"2A3  3a2\"</code>, and <code>\"2_A3*3#A2\"</code>.",
        "Remember to use <a href=\"http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514\" target=\"_blank\">Read-Search-Ask</a> if you get stuck. Write your own code."
      ],
      "challengeSeed": [
        "function palindrome(str) {",
        "  // Good luck!",
        "  return true;",
        "}",
        "",
        "",
        "",
        "palindrome(\"eye\");"
      ],
      "tests": [
        "assert(typeof palindrome(\"eye\") === \"boolean\", 'message: <code>palindrome(\"eye\")</code> should return a boolean.');",
        "assert(palindrome(\"eye\") === true, 'message: <code>palindrome(\"eye\")</code> should return true.');",
        "assert(palindrome(\"_eye\") === true, 'message: <code>palindrome(\"_eye\")</code> should return true.');",
        "assert(palindrome(\"race car\") === true, 'message: <code>palindrome(\"race car\")</code> should return true.');",
        "assert(palindrome(\"not a palindrome\") === false, 'message: <code>palindrome(\"not a palindrome\")</code> should return false.');",
        "assert(palindrome(\"A man, a plan, a canal. Panama\") === true, 'message: <code>palindrome(\"A man, a plan, a canal. Panama\")</code> should return true.');",
        "assert(palindrome(\"never odd or even\") === true, 'message: <code>palindrome(\"never odd or even\")</code> should return true.');",
        "assert(palindrome(\"nope\") === false, 'message: <code>palindrome(\"nope\")</code> should return false.');",
        "assert(palindrome(\"almostomla\") === false, 'message: <code>palindrome(\"almostomla\")</code> should return false.');",
        "assert(palindrome(\"My age is 0, 0 si ega ym.\") === true, 'message: <code>palindrome(\"My age is 0, 0 si ega ym.\")</code> should return true.');",
        "assert(palindrome(\"1 eye for of 1 eye.\") === false, 'message: <code>palindrome(\"1 eye for of 1 eye.\")</code> should return false.');",
        "assert(palindrome(\"0_0 (: /-\\ :) 0-0\") === true, 'message: <code>palindrome(\"0_0 (: /-\\ :) 0-0\")</code> should return true.');",
        "assert(palindrome(\"five|\\_/|four\") === false, 'message: <code>palindrome(\"five|\\_/|four\")</code> should return false.');"
      ],
      "type": "bonfire",
      "isRequired": true,
      "solutions": [
        "function palindrome(str) {\n  var string = str.toLowerCase().split(/[^A-Za-z0-9]/gi).join('');\n  var aux = string.split('');\n  if (aux.join('') === aux.reverse().join('')){\n    return true;\n  }\n\n  return false;\n}"
      ],
      "MDNlinks": [
        "String.prototype.replace()",
        "String.prototype.toLowerCase()"
      ],
      "challengeType": 5,
      "translations": {
        "es": {
          "title": "Verifica si es palíndromo",
          "description": [
            "Crea una función que devuelva <code>true</code> si una cadena de texto dada es un palíndromo, y que devuelva <code>false</code> en caso contrario",
            "Un palíndromo es una palabra u oración que se escribe de la misma forma en ambos sentidos, sin tomar en cuenta signos de puntuación, espacios y sin distinguir entre mayúsculas y minúsculas.",
            "Tendrás que quitar los caracteres no alfanuméricos (signos de puntuación, espacioes y símbolos) y transformar las letras a minúsculas para poder verificar si el texto es palíndromo.",
            "Te proveeremos textos en varios formatos, como \"racecar\", \"RaceCar\", and \"race CAR\" entre otros.",
            "También vamos a pasar cadenas con símbolos especiales, tales como <code>\"2A3*3a2\"</code>, <code>\"2A3 3a2\"</code>, y <code>\"2_A3*3#A2\"</code>.",
            "Recuerda utilizar <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Leer-Buscar-Preguntar</a> si te sientes atascado. Intenta programar en pareja. Escribe tu propio código."
          ]
        }
      }
    },
    {
      "id": "a26cbbe9ad8655a977e1ceb5",
      "title": "Find the Longest Word in a String",
      "description": [
        "Return the length of the longest word in the provided sentence.",
        "Your response should be a number.",
        "Remember to use <a href=\"http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514\" target=\"_blank\">Read-Search-Ask</a> if you get stuck. Write your own code."
      ],
      "challengeSeed": [
        "function findLongestWord(str) {",
        "  return str.length;",
        "}",
        "",
        "findLongestWord(\"The quick brown fox jumped over the lazy dog\");"
      ],
      "tests": [
        "assert(typeof findLongestWord(\"The quick brown fox jumped over the lazy dog\") === \"number\", 'message: <code>findLongestWord(\"The quick brown fox jumped over the lazy dog\")</code> should return a number.');",
        "assert(findLongestWord(\"The quick brown fox jumped over the lazy dog\") === 6, 'message: <code>findLongestWord(\"The quick brown fox jumped over the lazy dog\")</code> should return 6.');",
        "assert(findLongestWord(\"May the force be with you\") === 5, 'message: <code>findLongestWord(\"May the force be with you\")</code> should return 5.');",
        "assert(findLongestWord(\"Google do a barrel roll\") === 6, 'message: <code>findLongestWord(\"Google do a barrel roll\")</code> should return 6.');",
        "assert(findLongestWord(\"What is the average airspeed velocity of an unladen swallow\") === 8, 'message: <code>findLongestWord(\"What is the average airspeed velocity of an unladen swallow\")</code> should return 8.');",
        "assert(findLongestWord(\"What if we try a super-long word such as otorhinolaryngology\") === 19, 'message: <code>findLongestWord(\"What if we try a super-long word such as otorhinolaryngology\")</code> should return 19.');"
      ],
      "type": "bonfire",
      "isRequired": true,
      "solutions": [
        "function findLongestWord(str) {\n  return str.split(' ').sort(function(a, b) { return b.length - a.length;})[0].length;\n}\n\nfindLongestWord('The quick brown fox jumped over the lazy dog');\n"
      ],
      "MDNlinks": [
        "String.prototype.split()",
        "String.length"
      ],
      "challengeType": 5,
      "translations": {
        "es": {
          "title": "Encuentra la palabra más larga",
          "description": [
            "Crea una función que devuelva la longitud de la palabra más larga en una frase dada",
            "El resultado debe ser un número",
            "Recuerda utilizar <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Leer-Buscar-Preguntar</a> si te sientes atascado. Intenta programar en pareja. Escribe tu propio código."
          ]
        }
      }
    },
    {
      "id": "ab6137d4e35944e21037b769",
      "title": "Title Case a Sentence",
      "description": [
        "Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.",
        "For the purpose of this exercise, you should also capitalize connecting words like \"the\" and \"of\".",
        "Remember to use <a href=\"http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514\" target=\"_blank\">Read-Search-Ask</a> if you get stuck. Write your own code."
      ],
      "challengeSeed": [
        "function titleCase(str) {",
        "  return str;",
        "}",
        "",
        "titleCase(\"I'm a little tea pot\");"
      ],
      "tests": [
        "assert(typeof titleCase(\"I'm a little tea pot\") === \"string\", 'message: <code>titleCase(\"I&#39;m a little tea pot\")</code> should return a string.');",
        "assert(titleCase(\"I'm a little tea pot\") === \"I'm A Little Tea Pot\", 'message: <code>titleCase(\"I&#39;m a little tea pot\")</code> should return \"I&#39;m A Little Tea Pot\".');",
        "assert(titleCase(\"sHoRt AnD sToUt\") === \"Short And Stout\", 'message: <code>titleCase(\"sHoRt AnD sToUt\")</code> should return \"Short And Stout\".');",
        "assert(titleCase(\"HERE IS MY HANDLE HERE IS MY SPOUT\") === \"Here Is My Handle Here Is My Spout\", 'message: <code>titleCase(\"HERE IS MY HANDLE HERE IS MY SPOUT\")</code> should return \"Here Is My Handle Here Is My Spout\".');"
      ],
      "type": "bonfire",
      "isRequired": true,
      "solutions": [
        "function titleCase(str) {\n  return str.split(' ').map(function(word) {\n    return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();\n  }).join(' ');\n}\n\ntitleCase(\"I'm a little tea pot\");\n"
      ],
      "MDNlinks": [
        "String.prototype.split()"
      ],
      "challengeType": 5,
      "translations": {
        "es": {
          "title": "Aplica formato de título",
          "description": [
            "Crea una función que devuelva la cadena de texto que recibe con la primera letra de cada palabra en mayúscula. Asegúrate de que el resto de las letras sean minúsculas",
            "Para este ejercicio, también debes poner en mayúscula conectores como \"the\" y \"of\".",
            "Recuerda utilizar <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Leer-Buscar-Preguntar</a> si te sientes atascado. Intenta programar en pareja. Escribe tu propio código."
          ]
        }
      }
    },
    {
      "id": "a789b3483989747d63b0e427",
      "title": "Return Largest Numbers in Arrays",
      "description": [
        "Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.",
        "Remember, you can iterate through an array with a simple for loop, and access each member with array syntax <code>arr[i]</code>.",
        "Remember to use <a href=\"http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514\" target=\"_blank\">Read-Search-Ask</a> if you get stuck. Write your own code."
      ],
      "challengeSeed": [
        "function largestOfFour(arr) {",
        "  // You can do this!",
        "  return arr;",
        "}",
        "",
        "largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);"
      ],
      "tests": [
        "assert(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]).constructor === Array, 'message: <code>largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])</code> should return an array.');",
        "assert.deepEqual(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]), [27,5,39,1001], 'message: <code>largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])</code> should return <code>[27,5,39,1001]</code>.');",
        "assert.deepEqual(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]), [9,35,97,1000000], 'message: <code>largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])</code> should return <code>[9, 35, 97, 1000000]</code>.');"
      ],
      "type": "bonfire",
      "isRequired": true,
      "solutions": [
        "function largestOfFour(arr) {\n  return arr.map(function(subArr) {\n    return Math.max.apply(null, subArr);\n  });\n}\n\nlargestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);\n"
      ],
      "MDNlinks": [
        "Comparison Operators"
      ],
      "challengeType": 5,
      "translations": {
        "es": {
          "title": "Devuelve el mayor entero de cada arreglo",
          "description": [
            "Crea una función que devuelva un arreglo que contenga el mayor de los números de cada sub-arreglo que recibe. Para simplificar las cosas, el arreglo que recibirá tendrá exactamente 4 sub-arreglos",
            "Recuerda que puedes iterar a través de un arreglo con un búcle simple, y acceder a cada miembro utilizando la sintaxis arr[i].",
            "Si escribes tu propio test con Chai.js, asegúrate de utilizar un operador de igualdad estricto en lugar de un operador de igualdad cuando compares arreglos. ",
            "Recuerda utilizar <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Leer-Buscar-Preguntar</a> si te sientes atascado. Intenta programar en pareja. Escribe tu propio código."
          ]
        }
      }
    },
    {
      "id": "acda2fb1324d9b0fa741e6b5",
      "title": "Confirm the Ending",
      "description": [
        "Check if a string (first argument, <code>str</code>) ends with the given target string (second argument, <code>target</code>).",
        "This challenge <em>can</em> be solved with the <code>.endsWith()</code> method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.",
        "Remember to use <a href=\"http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514\" target=\"_blank\">Read-Search-Ask</a> if you get stuck. Write your own code."
      ],
      "challengeSeed": [
        "function confirmEnding(str, target) {",
        "  // \"Never give up and good luck will find you.\"",
        "  // -- Falcor",
        "  return str;",
        "}",
        "",
        "confirmEnding(\"Bastian\", \"n\");"
      ],
      "tests": [
        "assert(confirmEnding(\"Bastian\", \"n\") === true, 'message: <code>confirmEnding(\"Bastian\", \"n\")</code> should return true.');",
        "assert(confirmEnding(\"Connor\", \"n\") === false, 'message: <code>confirmEnding(\"Connor\", \"n\")</code> should return false.');",
        "assert(confirmEnding(\"Walking on water and developing software from a specification are easy if both are frozen\", \"specification\") === false, 'message: <code>confirmEnding(\"Walking on water and developing software from a specification are easy if both are frozen\"&#44; \"specification\"&#41;</code> should return false.');",
        "assert(confirmEnding(\"He has to give me a new name\", \"name\") === true, 'message: <code>confirmEnding(\"He has to give me a new name\", \"name\")</code> should return true.');",
        "assert(confirmEnding(\"Open sesame\", \"same\") === true, 'message: <code>confirmEnding(\"Open sesame\", \"same\")</code> should return true.');",
        "assert(confirmEnding(\"Open sesame\", \"pen\") === false, 'message: <code>confirmEnding(\"Open sesame\", \"pen\")</code> should return false.');",
        "assert(confirmEnding(\"Open sesame\", \"game\") === false, 'message: <code>confirmEnding(\"Open sesame\", \"game\")</code> should return false.');",
        "assert(confirmEnding(\"If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing\", \"mountain\") === false, 'message: <code>confirmEnding(\"If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing\", \"mountain\")</code> should return false.');",
        "assert(confirmEnding(\"Abstraction\", \"action\") === true, 'message: <code>confirmEnding(\"Abstraction\", \"action\")</code> should return true.');",
        "assert(!/\\.endsWith\\(.*?\\)\\s*?;?/.test(code), 'message: Do not use the built-in method <code>.endsWith()</code> to solve the challenge.');"
      ],
      "type": "bonfire",
      "isRequired": true,
      "solutions": [
        "function confirmEnding(str, target) {\n  return str.substring(str.length-target.length) === target;\n};\n"
      ],
      "MDNlinks": [
        "String.prototype.substr()",
        "String.prototype.substring()"
      ],
      "challengeType": 5,
      "translations": {
        "es": {
          "title": "Confirma la terminación",
          "description": [
            "Verifica si una cadena de texto (primer argumento) termina con otra cadena de texto (segundo argumento).",
            "Recuerda utilizar <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Leer-Buscar-Preguntar</a> si te sientes atascado. Intenta programar en pareja. Escribe tu propio código."
          ]
        }
      }
    },
    {
      "id": "afcc8d540bea9ea2669306b6",
      "title": "Repeat a string repeat a string",
      "description": [
        "Repeat a given string <code>str</code> (first argument) for <code>num</code> times (second argument). Return an empty string if <code>num</code> is not a positive number.",
        "Remember to use <a href=\"http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514\" target=\"_blank\">Read-Search-Ask</a> if you get stuck. Write your own code."
      ],
      "challengeSeed": [
        "function repeatStringNumTimes(str, num) {",
        "  // repeat after me",
        "  return str;",
        "}",
        "",
        "repeatStringNumTimes(\"abc\", 3);"
      ],
      "tests": [
        "assert(repeatStringNumTimes(\"*\", 3) === \"***\", 'message: <code>repeatStringNumTimes(\"*\", 3)</code> should return <code>\"***\"</code>.');",
        "assert(repeatStringNumTimes(\"abc\", 3) === \"abcabcabc\", 'message: <code>repeatStringNumTimes(\"abc\", 3)</code> should return <code>\"abcabcabc\"</code>.');",
        "assert(repeatStringNumTimes(\"abc\", 4) === \"abcabcabcabc\", 'message: <code>repeatStringNumTimes(\"abc\", 4)</code> should return <code>\"abcabcabcabc\"</code>.');",
        "assert(repeatStringNumTimes(\"abc\", 1) === \"abc\", 'message: <code>repeatStringNumTimes(\"abc\", 1)</code> should return <code>\"abc\"</code>.');",
        "assert(repeatStringNumTimes(\"*\", 8) === \"********\", 'message: <code>repeatStringNumTimes(\"*\", 8)</code> should return <code>\"********\"</code>.');",
        "assert(repeatStringNumTimes(\"abc\", -2) === \"\", 'message: <code>repeatStringNumTimes(\"abc\", -2)</code> should return <code>\"\"</code>.');"
      ],
      "type": "bonfire",
      "isRequired": true,
      "solutions": [
        "function repeatStringNumTimes(str, num) {\n  if (num < 0) return '';\n  return num === 1 ? str : str + repeatStringNumTimes(str, num-1);\n}\n\nrepeatStringNumTimes('abc', 3);\n"
      ],
      "MDNlinks": [
        "Global String Object"
      ],
      "challengeType": 5,
      "translations": {
        "es": {
          "title": "Repite el texto Repite el texto",
          "description": [
            "Repite una cadena de texto dada (primer argumento) <code>num</code> veces (segundo argumento). Retorna una cadena de texto vacía si <code>num</code> es un número negativo.",
            "Recuerda utilizar <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Leer-Buscar-Preguntar</a> si te sientes atascado. Intenta programar en pareja. Escribe tu propio código."
          ]
        }
      }
    },
    {
      "id": "ac6993d51946422351508a41",
      "title": "Truncate a string",
      "description": [
        "Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a <code>...</code> ending.",
        "Note that inserting the three dots to the end will add to the string length.",
        "However, if the given maximum string length <code>num</code> is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.",
        "Remember to use <a href=\"http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514\" target=\"_blank\">Read-Search-Ask</a> if you get stuck. Write your own code."
      ],
      "challengeSeed": [
        "function truncateString(str, num) {",
        "  // Clear out that junk in your trunk",
        "  return str;",
        "}",
        "",
        "truncateString(\"A-tisket a-tasket A green and yellow basket\", 11);"
      ],
      "tests": [
        "assert(truncateString(\"A-tisket a-tasket A green and yellow basket\", 11) === \"A-tisket...\", 'message: <code>truncateString(\"A-tisket a-tasket A green and yellow basket\", 11)</code> should return \"A-tisket...\".');",
        "assert(truncateString(\"Peter Piper picked a peck of pickled peppers\", 14) === \"Peter Piper...\", 'message: <code>truncateString(\"Peter Piper picked a peck of pickled peppers\", 14)</code> should return \"Peter Piper...\".');",
        "assert(truncateString(\"A-tisket a-tasket A green and yellow basket\", \"A-tisket a-tasket A green and yellow basket\".length) === \"A-tisket a-tasket A green and yellow basket\", 'message: <code>truncateString(\"A-tisket a-tasket A green and yellow basket\", \"A-tisket a-tasket A green and yellow basket\".length)</code> should return \"A-tisket a-tasket A green and yellow basket\".');",
        "assert(truncateString('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length + 2) === 'A-tisket a-tasket A green and yellow basket', 'message: <code>truncateString(\"A-tisket a-tasket A green and yellow basket\", \"A-tisket a-tasket A green and yellow basket\".length + 2)</code> should return \"A-tisket a-tasket A green and yellow basket\".');",
        "assert(truncateString(\"A-\", 1) === \"A...\", 'message: <code>truncateString(\"A-\", 1)</code> should return \"A...\".');",
        "assert(truncateString(\"Absolutely Longer\", 2) === \"Ab...\", 'message: <code>truncateString(\"Absolutely Longer\", 2)</code> should return \"Ab...\".');"
      ],
      "type": "bonfire",
      "isRequired": true,
      "solutions": [
        "function truncateString(str, num) {\n  if(str.length > num ) {\n    if(num > 3) {\n      return str.slice(0, num - 3) + '...';\n    } else {\n      return str.slice(0,num) + '...';\n    }\n  } \n  return str;\n}"
      ],
      "MDNlinks": [
        "String.prototype.slice()"
      ],
      "challengeType": 5,
      "translations": {
        "es": {
          "title": "Trunca una cadena de texto",
          "description": [
            "Trunca una cadena de texto (primer argumento) si su longitud es mayor que un máximo de caracteres dado (segundo argumento). Devuelve la cadena de texto truncada con una terminación \"...\".",
            "Ten en cuenta que los tres puntos al final también se cuentan dentro de la longitud de la cadena de texto.",
            "Si el <code>num</code es menor o igual a 3, entonces la longitud de los 3 puntos no se añade a la longitud de la cadena.",
            "Recuerda utilizar <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Leer-Buscar-Preguntar</a> si te sientes atascado. Intenta programar en pareja. Escribe tu propio código."
          ]
        }
      }
    },
    {
      "id": "a9bd25c716030ec90084d8a1",
      "title": "Chunky Monkey",
      "description": [
        "Write a function that splits an array (first argument) into groups the length of <code>size</code> (second argument) and returns them as a two-dimensional array.",
        "Remember to use <a href=\"http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514\" target=\"_blank\">Read-Search-Ask</a> if you get stuck. Write your own code."
      ],
      "challengeSeed": [
        "function chunkArrayInGroups(arr, size) {",
        "  // Break it up.",
        "  return arr;",
        "}",
        "",
        "chunkArrayInGroups([\"a\", \"b\", \"c\", \"d\"], 2);"
      ],
      "tests": [
        "assert.deepEqual(chunkArrayInGroups([\"a\", \"b\", \"c\", \"d\"], 2), [[\"a\", \"b\"], [\"c\", \"d\"]], 'message: <code>chunkArrayInGroups([\"a\", \"b\", \"c\", \"d\"], 2)</code> should return <code>[[\"a\", \"b\"], [\"c\", \"d\"]]</code>.');",
        "assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3), [[0, 1, 2], [3, 4, 5]], 'message: <code>chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)</code> should return <code>[[0, 1, 2], [3, 4, 5]]</code>.');",
        "assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2), [[0, 1], [2, 3], [4, 5]], 'message: <code>chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)</code> should return <code>[[0, 1], [2, 3], [4, 5]]</code>.');",
        "assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4), [[0, 1, 2, 3], [4, 5]], 'message: <code>chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)</code> should return <code>[[0, 1, 2, 3], [4, 5]]</code>.');",
        "assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3), [[0, 1, 2], [3, 4, 5], [6]], 'message: <code>chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)</code> should return <code>[[0, 1, 2], [3, 4, 5], [6]]</code>.');",
        "assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4), [[0, 1, 2, 3], [4, 5, 6, 7], [8]], 'message: <code>chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)</code> should return <code>[[0, 1, 2, 3], [4, 5, 6, 7], [8]]</code>.');",
        "assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2), [[0, 1], [2, 3], [4, 5], [6, 7], [8]], 'message: <code>chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)</code> should return <code>[[0, 1], [2, 3], [4, 5], [6, 7], [8]]</code>.');"
      ],
      "type": "bonfire",
      "isRequired": true,
      "solutions": [
        "function chunkArrayInGroups(arr, size) {\n  var out = [];\n  for (var i = 0; i < arr.length; i+=size) {\n    out.push(arr.slice(i,i+size));\n  }\n  return out;\n}\n\nchunkArrayInGroups(['a', 'b', 'c', 'd'], 2);\n"
      ],
      "MDNlinks": [
        "Array.prototype.push()",
        "Array.prototype.slice()"
      ],
      "challengeType": 5,
      "translations": {
        "es": {
          "title": "En mil pedazos",
          "description": [
            "Escribe una función que parta un arreglo (primer argumento) en fragmentos de una longitud dada (segundo argumento) y los devuelva en forma de un arreglo bidimensional.",
            "Recuerda utilizar <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Leer-Buscar-Preguntar</a> si te sientes atascado. Intenta programar en pareja. Escribe tu propio código."
          ]
        }
      }
    },
    {
      "id": "579e2a2c335b9d72dd32e05c",
      "title": "Slice and Splice",
      "description": [
        "You are given two arrays and an index.",
        "Use the array methods <code>slice</code> and <code>splice</code> to copy each element of the first array into the second array, in order.",
        "Begin inserting elements at index <code>n</code> of the second array.",
        "Return the resulting array. The input arrays should remain the same after the function runs.",
        "Remember to use <a href=\"http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514\" target=\"_blank\">Read-Search-Ask</a> if you get stuck. Write your own code."
      ],
      "challengeSeed": [
        "function frankenSplice(arr1, arr2, n) {",
        "  // It's alive. It's alive!",
        "  return arr2;",
        "}",
        "",
        "frankenSplice([1, 2, 3], [4, 5, 6], 1);"
      ],
      "tail": [
        "var testArr1 = [1, 2];",
        "var testArr2 = ['a', 'b'];"
      ],
      "tests": [
        "assert.deepEqual(frankenSplice([1, 2, 3], [4, 5], 1), [4, 1, 2, 3, 5], 'message: <code>frankenSplice([1, 2, 3], [4, 5], 1)</code> should return <code>[4, 1, 2, 3, 5]</code>.');",
        "assert.deepEqual(frankenSplice(testArr1, testArr2, 1), ['a', 1, 2, 'b'], 'message: <code>frankenSplice([1, 2], [\"a\", \"b\"], 1)</code> should return <code>[\"a\", 1, 2, \"b\"]</code>.');",
        "assert.deepEqual(frankenSplice(['claw', 'tentacle'], ['head', 'shoulders', 'knees', 'toes'], 2), ['head', 'shoulders', 'claw', 'tentacle', 'knees', 'toes'], 'message: <code>frankenSplice([\"claw\", \"tentacle\"], [\"head\", \"shoulders\", \"knees\", \"toes\"], 2)</code> should return <code>[\"head\", \"shoulders\", \"claw\", \"tentacle\", \"knees\", \"toes\"]</code>.');",
        "assert.deepEqual(frankenSplice([1, 2, 3, 4], [], 0), [1, 2, 3, 4], 'message: All elements from the first array should be added to the second array in their original order.');",
        "assert(testArr1[0] === 1 && testArr1[1] === 2, 'message: The first array should remain the same after the function runs.');",
        "assert(testArr2[0] === 'a' && testArr2[1] === 'b', 'message: The second array should remain the same after the function runs.');"
      ],
      "type": "bonfire",
      "isRequired": true,
      "isBeta": true,
      "solutions": [
        "function frankenSplice(arr1, arr2, n) {\n  // It's alive. It's alive!\n  var result = arr2.slice();\n  for(var i = 0; i < arr1.length; i++) {\n    result.splice(n+i, 0, arr1[i]);\n  }\n  return result;\n}\n\nfrankenSplice([1, 2, 3], [4, 5], 1);\n"
      ],
      "MDNlinks": [
        "Array.prototype.slice()",
        "Array.prototype.splice()"
      ],
      "challengeType": 5
    },
    {
      "id": "af2170cad53daa0770fabdea",
      "title": "Mutations",
      "description": [
        "Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.",
        "For example, <code>[\"hello\", \"Hello\"]</code>, should return true because all of the letters in the second string are present in the first, ignoring case.",
        "The arguments <code>[\"hello\", \"hey\"]</code> should return false because the string \"hello\" does not contain a \"y\".",
        "Lastly, <code>[\"Alien\", \"line\"]</code>, should return true because all of the letters in \"line\" are present in \"Alien\".",
        "Remember to use <a href=\"http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514\" target=\"_blank\">Read-Search-Ask</a> if you get stuck. Write your own code."
      ],
      "challengeSeed": [
        "function mutation(arr) {",
        "  return arr;",
        "}",
        "",
        "mutation([\"hello\", \"hey\"]);"
      ],
      "tests": [
        "assert(mutation([\"hello\", \"hey\"]) === false, 'message: <code>mutation([\"hello\", \"hey\"])</code> should return false.');",
        "assert(mutation([\"hello\", \"Hello\"]) === true, 'message: <code>mutation([\"hello\", \"Hello\"])</code> should return true.');",
        "assert(mutation([\"zyxwvutsrqponmlkjihgfedcba\", \"qrstu\"]) === true, 'message: <code>mutation([\"zyxwvutsrqponmlkjihgfedcba\", \"qrstu\"])</code> should return true.');",
        "assert(mutation([\"Mary\", \"Army\"]) === true, 'message: <code>mutation([\"Mary\", \"Army\"])</code> should return true.');",
        "assert(mutation([\"Mary\", \"Aarmy\"]) === true, 'message: <code>mutation([\"Mary\", \"Aarmy\"])</code> should return true.');",
        "assert(mutation([\"Alien\", \"line\"]) === true, 'message: <code>mutation([\"Alien\", \"line\"])</code> should return true.');",
        "assert(mutation([\"floor\", \"for\"]) === true, 'message: <code>mutation([\"floor\", \"for\"])</code> should return true.');",
        "assert(mutation([\"hello\", \"neo\"]) === false, 'message: <code>mutation([\"hello\", \"neo\"])</code> should return false.');",
        "assert(mutation([\"voodoo\", \"no\"]) === false, 'message: <code>mutation([\"voodoo\", \"no\"])</code> should return false.');"
      ],
      "type": "bonfire",
      "isRequired": true,
      "solutions": [
        "function mutation(arr) {\n  var hash = Object.create(null);\n  arr[0].toLowerCase().split('').forEach(function(c) {\n    hash[c] = true;\n  });\n  return !arr[1].toLowerCase().split('').filter(function(c) {\n    return !hash[c];\n  }).length;\n}\n\nmutation(['hello', 'hey']);\n"
      ],
      "MDNlinks": [
        "String.prototype.indexOf()"
      ],
      "challengeType": 5,
      "translations": {
        "es": {
          "title": "Mutaciones",
          "description": [
            "Crea una función que devuelva <code>true</code> si la cadena de texto del primer elemento de un arreglo contiene todas las letras de la cadena de texto del segundo elemento del arreglo.",
            "Por ejemplo, <code>[\"hello\", \"Hello\"]</code>, debe devolver <code>true</code> porque todas las letras en la segunda cadena de texto están presentes en la primera, sin distinguir entre mayúsculas y minúsculas.",
            "En el caso de <code>[\"hello\", \"hey\"]</code> la función debe devolver false porque la cadena de texto \"hello\" no contiene una \"y\".",
            "Finalmente, <code>[\"Alien\", \"line\"]</code>, la función debe devolver <code>true</code> porque todas las letras en \"line\" están presentes en \"Alien\".",
            "Recuerda utilizar <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Leer-Buscar-Preguntar</a> si te sientes atascado. Intenta programar en pareja. Escribe tu propio código."
          ]
        }
      }
    },
    {
      "id": "adf08ec01beb4f99fc7a68f2",
      "title": "Falsy Bouncer",
      "description": [
        "Remove all falsy values from an array.",
        "Falsy values in JavaScript are <code>false</code>, <code>null</code>, <code>0</code>, <code>\"\"</code>, <code>undefined</code>, and <code>NaN</code>.",
        "Remember to use <a href=\"http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514\" target=\"_blank\">Read-Search-Ask</a> if you get stuck. Write your own code."
      ],
      "challengeSeed": [
        "function bouncer(arr) {",
        "  // Don't show a false ID to this bouncer.",
        "  return arr;",
        "}",
        "",
        "bouncer([7, \"ate\", \"\", false, 9]);"
      ],
      "tests": [
        "assert.deepEqual(bouncer([7, \"ate\", \"\", false, 9]), [7, \"ate\", 9], 'message: <code>bouncer([7, \"ate\", \"\", false, 9])</code> should return <code>[7, \"ate\", 9]</code>.');",
        "assert.deepEqual(bouncer([\"a\", \"b\", \"c\"]), [\"a\", \"b\", \"c\"], 'message: <code>bouncer([\"a\", \"b\", \"c\"])</code> should return <code>[\"a\", \"b\", \"c\"]</code>.');",
        "assert.deepEqual(bouncer([false, null, 0, NaN, undefined, \"\"]), [], 'message: <code>bouncer([false, null, 0, NaN, undefined, \"\"])</code> should return <code>[]</code>.');",
        "assert.deepEqual(bouncer([1, null, NaN, 2, undefined]), [1, 2], 'message: <code>bouncer([1, null, NaN, 2, undefined])</code> should return <code>[1, 2]</code>.');"
      ],
      "type": "bonfire",
      "isRequired": true,
      "solutions": [
        "function bouncer(arr) {\n  // Don't show a false ID to this bouncer.\n  return arr.filter(function(e) {return e;});\n}\n\nbouncer([7, 'ate', '', false, 9]);\n"
      ],
      "MDNlinks": [
        "Boolean Objects",
        "Array.prototype.filter()"
      ],
      "challengeType": 5,
      "translations": {
        "es": {
          "title": "Detector de mentiras",
          "description": [
            "Remueve todos los valores falsy de un arreglo dado",
            "En javascript, los valores falsy son los siguientes: <code>false</code>, <code>null</code>, <code>0</code>, <code>\"\"</code>, <code>undefined</code>, y <code>NaN</code>.",
            "Recuerda utilizar <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Leer-Buscar-Preguntar</a> si te sientes atascado. Intenta programar en pareja. Escribe tu propio código."
          ]
        }
      }
    },
    {
      "id": "a39963a4c10bc8b4d4f06d7e",
      "title": "Seek and Destroy",
      "description": [
        "You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.",
        "Remember to use <a href=\"http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514\" target=\"_blank\">Read-Search-Ask</a> if you get stuck. Write your own code."
      ],
      "challengeSeed": [
        "function destroyer(arr) {",
        "  // Remove all the values",
        "  return arr;",
        "}",
        "",
        "destroyer([1, 2, 3, 1, 2, 3], 2, 3);"
      ],
      "tests": [
        "assert.deepEqual(destroyer([1, 2, 3, 1, 2, 3], 2, 3), [1, 1], 'message: <code>destroyer([1, 2, 3, 1, 2, 3], 2, 3)</code> should return <code>[1, 1]</code>.');",
        "assert.deepEqual(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3), [1, 5, 1], 'message: <code>destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)</code> should return <code>[1, 5, 1]</code>.');",
        "assert.deepEqual(destroyer([3, 5, 1, 2, 2], 2, 3, 5), [1], 'message: <code>destroyer([3, 5, 1, 2, 2], 2, 3, 5)</code> should return <code>[1]</code>.');",
        "assert.deepEqual(destroyer([2, 3, 2, 3], 2, 3), [], 'message: <code>destroyer([2, 3, 2, 3], 2, 3)</code> should return <code>[]</code>.');",
        "assert.deepEqual(destroyer([\"tree\", \"hamburger\", 53], \"tree\", 53), [\"hamburger\"], 'message: <code>destroyer([\"tree\", \"hamburger\", 53], \"tree\", 53)</code> should return <code>[\"hamburger\"]</code>.');",
        "assert.deepEqual(destroyer([\"possum\", \"trollo\", 12, \"safari\", \"hotdog\", 92, 65, \"grandma\", \"bugati\", \"trojan\", \"yacht\"], \"yacht\", \"possum\", \"trollo\", \"safari\", \"hotdog\", \"grandma\", \"bugati\", \"trojan\"), [12,92,65], 'message: <code>destroyer([\"possum\", \"trollo\", 12, \"safari\", \"hotdog\", 92, 65, \"grandma\", \"bugati\", \"trojan\", \"yacht\"], \"yacht\", \"possum\", \"trollo\", \"safari\", \"hotdog\", \"grandma\", \"bugati\", \"trojan\")</code> should return <code>[12,92,65]</code>.');"
      ],
      "type": "bonfire",
      "isRequired": true,
      "solutions": [
        "function destroyer(arr) {\n  var hash = Object.create(null);\n  [].slice.call(arguments, 1).forEach(function(e) {\n    hash[e] = true;\n  });\n  // Remove all the values\n  return arr.filter(function(e) { return !(e in hash);});\n}\n\ndestroyer([1, 2, 3, 1, 2, 3], 2, 3);\n"
      ],
      "MDNlinks": [
        "Arguments object",
        "Array.prototype.filter()"
      ],
      "challengeType": 5,
      "translations": {
        "es": {
          "title": "Buscar y destruir",
          "description": [
            "Se te proveerá un arreglo inicial (el primer argumento en la función <code>destroyer</code>), seguido por uno o más argumentos. Elimina todos los elementos del arreglo inicial que tengan el mismo valor que el resto de argumentos.",
            "Recuerda utilizar <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Leer-Buscar-Preguntar</a> si te sientes atascado. Intenta programar en pareja. Escribe tu propio código."
          ]
        }
      }
    },
    {
      "id": "a24c1a4622e3c05097f71d67",
      "title": "Where do I belong",
      "description": [
        "Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.",
        "For example, <code>getIndexToIns([1,2,3,4], 1.5)</code> should return <code>1</code> because it is greater than <code>1</code> (index 0), but less than <code>2</code> (index 1).",
        "Likewise, <code>getIndexToIns([20,3,5], 19)</code> should return <code>2</code> because once the array has been sorted it will look like <code>[3,5,20]</code> and <code>19</code> is less than <code>20</code> (index 2) and greater than <code>5</code> (index 1).",
        "Remember to use <a href=\"http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514\" target=\"_blank\">Read-Search-Ask</a> if you get stuck. Write your own code."
      ],
      "challengeSeed": [
        "function getIndexToIns(arr, num) {",
        "  // Find my place in this sorted array.",
        "  return num;",
        "}",
        "",
        "getIndexToIns([40, 60], 50);"
      ],
      "tests": [
        "assert(getIndexToIns([10, 20, 30, 40, 50], 35) === 3, 'message: <code>getIndexToIns([10, 20, 30, 40, 50], 35)</code> should return <code>3</code>.');",
        "assert(getIndexToIns([10, 20, 30, 40, 50], 30) === 2, 'message: <code>getIndexToIns([10, 20, 30, 40, 50], 30)</code> should return <code>2</code>.');",
        "assert(getIndexToIns([40, 60], 50) === 1, 'message: <code>getIndexToIns([40, 60], 50)</code> should return <code>1</code>.');",
        "assert(getIndexToIns([3, 10, 5], 3) === 0, 'message: <code>getIndexToIns([3, 10, 5], 3)</code> should return <code>0</code>.');",
        "assert(getIndexToIns([5, 3, 20, 3], 5) === 2, 'message: <code>getIndexToIns([5, 3, 20, 3], 5)</code> should return <code>2</code>.');",
        "assert(getIndexToIns([2, 20, 10], 19) === 2, 'message: <code>getIndexToIns([2, 20, 10], 19)</code> should return <code>2</code>.');",
        "assert(getIndexToIns([2, 5, 10], 15) === 3, 'message: <code>getIndexToIns([2, 5, 10], 15)</code> should return <code>3</code>.');"
      ],
      "type": "bonfire",
      "isRequired": true,
      "solutions": [
        "function getIndexToIns(arr, num) {\n  arr = arr.sort(function(a, b){return a-b;});\n  for (var i = 0; i < arr.length; i++) {\n    if (arr[i] >= num)\n      {\n        return i;\n      }\n  }\n  return arr.length;\n}"
      ],
      "MDNlinks": [
        "Array.prototype.sort()"
      ],
      "challengeType": 5,
      "translations": {
        "es": {
          "title": "¿Cuál es mi asiento?",
          "description": [
            "Devuelve el menor índice en el que un valor (segundo argumento) debe ser insertado en un arreglo (primer argumento) una vez ha sido ordenado.",
            "Por ejemplo, where([1,2,3,4], 1.5) debe devolver 1 porque el segundo argumento de la función (1.5) es mayor que 1 (con índice 0 en el arreglo), pero menor que 2 (con índice 1).",
            "Mientras que <code>where([20,3,5], 19)</code> debe devolver <code>2</code> porque una vez ordenado el arreglo se verá com <code>[3,5,20]</code> y <code>19</code> es menor que <code>20</code> (índice 2) y mayor que <code>5</code> (índice 1).",
            "Recuerda utilizar <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Leer-Buscar-Preguntar</a> si te sientes atascado. Intenta programar en pareja. Escribe tu propio código."
          ]
        }
      }
    },
    {
      "id": "56533eb9ac21ba0edf2244e2",
      "title": "Caesars Cipher",
      "description": [
        "One of the simplest and most widely known <dfn>ciphers</dfn> is a <code>Caesar cipher</code>, also known as a <code>shift cipher</code>. In a <code>shift cipher</code> the meanings of the letters are shifted by some set amount.",
        "A common modern use is the <a href=\"https://en.wikipedia.org/wiki/ROT13\" target='_blank'>ROT13</a> cipher, where the values of the letters are shifted by 13 places. Thus 'A' &harr; 'N', 'B' &harr;  'O' and so on.",
        "Write a function which takes a <a href=\"https://en.wikipedia.org/wiki/ROT13\" target='_blank'>ROT13</a> encoded string as input and returns a decoded string.",
        "All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.",
        "Remember to use <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code."
      ],
      "challengeSeed": [
        "function rot13(str) { // LBH QVQ VG!",
        "  ",
        "  return str;",
        "}",
        "",
        "// Change the inputs below to test",
        "rot13(\"SERR PBQR PNZC\");"
      ],
      "tail": [
        ""
      ],
      "solutions": [
        "var lookup = {\n  'A': 'N','B': 'O','C': 'P','D': 'Q',\n  'E': 'R','F': 'S','G': 'T','H': 'U',\n  'I': 'V','J': 'W','K': 'X','L': 'Y',\n  'M': 'Z','N': 'A','O': 'B','P': 'C',\n  'Q': 'D','R': 'E','S': 'F','T': 'G',\n  'U': 'H','V': 'I','W': 'J','X': 'K',\n  'Y': 'L','Z': 'M' \n};\n\nfunction rot13(encodedStr) {\n  var codeArr = encodedStr.split(\"\");  // String to Array\n  var decodedArr = []; // Your Result goes here\n  // Only change code below this line\n  \n  decodedArr = codeArr.map(function(letter) {\n    if(lookup.hasOwnProperty(letter)) {\n      letter = lookup[letter];\n    }\n    return letter;\n  });\n\n  // Only change code above this line\n  return decodedArr.join(\"\"); // Array to String\n}"
      ],
      "tests": [
        "assert(rot13(\"SERR PBQR PNZC\") === \"FREE CODE CAMP\", 'message: <code>rot13(\"SERR PBQR PNZC\")</code> should decode to <code>FREE CODE CAMP</code>');",
        "assert(rot13(\"SERR CVMMN!\") === \"FREE PIZZA!\", 'message: <code>rot13(\"SERR CVMMN!\")</code> should decode to <code>FREE PIZZA!</code>');",
        "assert(rot13(\"SERR YBIR?\") === \"FREE LOVE?\", 'message: <code>rot13(\"SERR YBIR?\")</code> should decode to <code>FREE LOVE?</code>');",
        "assert(rot13(\"GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.\") === \"THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.\", 'message: <code>rot13(\"GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.\")</code> should decode to <code>THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.</code>');"
      ],
      "type": "bonfire",
      "MDNlinks": [
        "String.prototype.charCodeAt()",
        "String.fromCharCode()"
      ],
      "challengeType": 5,
      "isRequired": true,
      "releasedOn": "January 1, 2016",
      "translations": {
        "es": {
          "title": "Cifrado César",
          "description": [
            "Uno de los <dfn>cifrados</dfn> más simples y ampliamente conocidos es el <code>cifrado César</code>, también llamado <code>cifrado por desplazamiento</code>. En un <code>cifrado por desplazamiento</code> los significados de las letras se desplazan por una cierta cantidad.",
            "Un uso moderno común es el cifrado <a href=\"https://es.wikipedia.org/wiki/ROT13\" target='_blank'>ROT13</a> , donde los valores de las letras se desplazan 13 espacios. De esta forma 'A' &harr; 'N', 'B' &harr;  'O' y así.",
            "Crea una función que tome una cadena de texto cifrada en <a href=\"https://es.wikipedia.org/wiki/ROT13\" target='_blank'>ROT13</a> como argumento y que devuelva la cadena de texto decodificada.",
            "Todas las letras que se te pasen van a estar en mayúsculas. No transformes ningún caracter no-alfabético (por ejemplo: espacios, puntuación). Simplemente pásalos intactos.",
            "Recuerda utilizar <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Leer-Buscar-Preguntar</a> si te sientes atascado. Intenta programar en pareja. Escribe tu propio código."
          ]
        }
      }
    }
  ]
}
