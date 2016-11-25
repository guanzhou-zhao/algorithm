module.exports = {
  name: 'Intermediate Algorithm Scripting',
  order: 11.5,
  time: '50 hours',
  helpRoom: 'HelpJavaScript',
  challenges: [
    {
      id: 'a3566b1109230028080c9345',
      title: 'Sum All Numbers in a Range',
      description: [
        "We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.",
        'The lowest number will not always come first.',
        "Remember to use <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code.",
      ],
      challengeSeed: [
        'function sumAll(arr) {',
        '  return 1;',
        '}',
        '',
        'sumAll([1, 4]);',
      ],
      hints: [
        'Use Math.max() to find the maximum value of two numbers.',
        'Use Math.min() to find the minimum value of two numbers.',
        'Remember to that you must add all the numbers in between so this would require a way to get those numbers.',
      ],
      solutions: [
        'function sumAll(arr) {\n  var sum = 0;\n  arr.sort(function(a,b) {return a-b;});\n  for (var i = arr[0]; i <= arr[1]; i++) {\n    sum += i; \n  }\n  return sum;\n}',
      ],
      tests: [
        "assert(typeof sumAll([1, 4]) === 'number', 'message: <code>sumAll([1, 4])</code> should return a number.');",
        "assert.deepEqual(sumAll([1, 4]), 10, 'message: <code>sumAll([1, 4])</code> should return 10.');",
        "assert.deepEqual(sumAll([4, 1]), 10, 'message: <code>sumAll([4, 1])</code> should return 10.');",
        "assert.deepEqual(sumAll([5, 10]), 45, 'message: <code>sumAll([5, 10])</code> should return 45.');",
        "assert.deepEqual(sumAll([10, 5]), 45, 'message: <code>sumAll([10, 5])</code> should return 45.');",
      ],
      type: 'bonfire',
      MDNlinks: [
        'Math.max()',
        'Math.min()',
        'Array.prototype.reduce()',
      ],
      isRequired: true,
      challengeType: 5,
      translations: {
        es: {
          title: 'Suma todos los números en un rango',
          description: [
            'Te pasaremos un vector que contiene dos números. Crea una función que devuelva la suma de esos dos números y todos los números entre ellos.',
            'El número menor no siempre será el primer elemento en el vector.',
            "Recuerda utilizar <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Leer-Buscar-Preguntar</a> si te sientes atascado. Intenta programar en pareja. Escribe tu propio código.",
          ],
        },
        fr: {
          title: "Additionner tous les nombres d'une série",
          description: [
            'Nous te passons un tableau de deux nombres. Crée une fonction qui renvoie la somme de ces 2 nombres ainsi que tous les nombres entre ceux-ci.',
            'Le plus petit nombre ne viendra pas forcément en premier.',
            "N'oublie pas d'utiliser <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Lire-Chercher-Demander</a> si tu es bloqué. Essaye de trouver un partenaire. Écris ton propre code.",
          ],
        },
      },
    },
    {
      id: 'a5de63ebea8dbee56860f4f2',
      title: 'Diff Two Arrays',
      description: [
        'Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.',
        "Remember to use <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code.",
      ],
      challengeSeed: [
        'function diffArray(arr1, arr2) {',
        '  var newArr = [];',
        '  // Same, same; but different.',
        '  return newArr;',
        '}',
        '',
        'diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);',
      ],
      solutions: [
        'function diffArray(arr1, arr2) {\n  var newArr = [];\n  var h1 = Object.create(null);\n  arr1.forEach(function(e) {\n    h1[e] = e;\n  });\n  \n  var h2 = Object.create(null);\n  arr2.forEach(function(e) {\n    h2[e] = e;\n  });\n  \n  Object.keys(h1).forEach(function(e) {\n     if (!(e in h2)) newArr.push(h1[e]);\n  });\n  Object.keys(h2).forEach(function(e) {\n     if (!(e in h1)) newArr.push(h2[e]);\n  });\n  // Same, same; but different.\n  return newArr;\n}',
      ],
      tests: [
        "assert(typeof diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) === \"object\", 'message: <code>diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])</code> should return an array.');",
        "assert.sameMembers(diffArray([\"diorite\", \"andesite\", \"grass\", \"dirt\", \"pink wool\", \"dead shrub\"], [\"diorite\", \"andesite\", \"grass\", \"dirt\", \"dead shrub\"]), [\"pink wool\"], 'message: <code>[\"diorite\", \"andesite\", \"grass\", \"dirt\", \"pink wool\", \"dead shrub\"], [\"diorite\", \"andesite\", \"grass\", \"dirt\", \"dead shrub\"]</code> should return <code>[\"pink wool\"]</code>.');",
        "assert.sameMembers(diffArray([\"andesite\", \"grass\", \"dirt\", \"pink wool\", \"dead shrub\"], [\"diorite\", \"andesite\", \"grass\", \"dirt\", \"dead shrub\"]), [\"diorite\", \"pink wool\"], 'message: <code>[\"andesite\", \"grass\", \"dirt\", \"pink wool\", \"dead shrub\"], [\"diorite\", \"andesite\", \"grass\", \"dirt\", \"dead shrub\"]</code> should return <code>[\"diorite\", \"pink wool\"]</code>.');",
        "assert.sameMembers(diffArray([\"andesite\", \"grass\", \"dirt\", \"dead shrub\"], [\"andesite\", \"grass\", \"dirt\", \"dead shrub\"]), [], 'message: <code>[\"andesite\", \"grass\", \"dirt\", \"dead shrub\"], [\"andesite\", \"grass\", \"dirt\", \"dead shrub\"]</code> should return <code>[]</code>.');",
        "assert.sameMembers(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]), [4], 'message: <code>[1, 2, 3, 5], [1, 2, 3, 4, 5]</code> should return <code>[4]</code>.');",
        "assert.sameMembers(diffArray([1, \"calf\", 3, \"piglet\"], [1, \"calf\", 3, 4]), [\"piglet\", 4], 'message: <code>[1, \"calf\", 3, \"piglet\"], [1, \"calf\", 3, 4]</code> should return <code>[\"piglet\", 4]</code>.');",
        "assert.sameMembers(diffArray([], [\"snuffleupagus\", \"cookie monster\", \"elmo\"]), [\"snuffleupagus\", \"cookie monster\", \"elmo\"], 'message: <code>[], [\"snuffleupagus\", \"cookie monster\", \"elmo\"]</code> should return <code>[\"snuffleupagus\", \"cookie monster\", \"elmo\"]</code>.');",
        "assert.sameMembers(diffArray([1, \"calf\", 3, \"piglet\"], [7, \"filly\"]), [1, \"calf\", 3, \"piglet\", 7, \"filly\"], 'message: <code>[1, \"calf\", 3, \"piglet\"], [7, \"filly\"]</code> should return <code>[1, \"calf\", 3, \"piglet\", 7, \"filly\"]</code>.');",
      ],
      type: 'bonfire',
      MDNlinks: [
        'Comparison Operators',
        'Array.prototype.slice()',
        'Array.prototype.filter()',
        'Array.prototype.indexOf()',
        'Array.prototype.concat()',
      ],
      isRequired: true,
      challengeType: 5,
      translations: {
        es: {
          title: 'Obtén la diferencia entre dos vectores',
          description: [
            'Crea una función que compare dos vectores y que devuelva un nuevo vector que contenga los elementos que sólo se encuentre en uno de los vectores dados, pero no en ambos En otras palabras, devuelve la diferencia simétrica entre los dos vectores.',
            "Recuerda utilizar <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Leer-Buscar-Preguntar</a> si te sientes atascado. Intenta programar en pareja. Escribe tu propio código.",
          ],
        },
        fr: {
          title: 'Comparer 2 arrays',
          description: [
            "Compare les 2 tableaux donnés et renvoie un nouvel tableau avec les éléments trouvé dans un seul des deux tableaux, pas dans les deux. En d'autres termes, renvoie la différence symétrique des deux tableaux.",
            "N'oublie pas d'utiliser <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Lire-Chercher-Demander</a> si tu es bloqué. Essaye de trouver un partenaire. Écris ton propre code.",
          ],
        },
      },
    },
    {
      id: 'a7f4d8f2483413a6ce226cac',
      title: 'Roman Numeral Converter',
      description: [
        'Convert the given number into a roman numeral.',
        'All <a href="http://www.mathsisfun.com/roman-numerals.html" target="_blank">roman numerals</a> answers should be provided in upper-case.',
        "Remember to use <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code.",
      ],
      challengeSeed: [
        'function convertToRoman(num) {',
        ' return num;',
        '}',
        '',
        'convertToRoman(36);',
      ],
      solutions: [
        "function convertToRoman(num) {\n  var ref = [['M', 1000], ['CM', 900], ['D', 500], ['CD', 400], ['C', 100], ['XC', 90], ['L', 50], ['XL', 40], ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]];\n  var res = [];\n  ref.forEach(function(p) {\n    while (num >= p[1]) {\n      res.push(p[0]);\n      num -= p[1];\n    }\n  });\n  return res.join('');\n}",
      ],
      tests: [
        "assert.deepEqual(convertToRoman(2), \"II\", 'message: <code>convertToRoman(2)</code> should return \"II\".');",
        "assert.deepEqual(convertToRoman(3), \"III\", 'message: <code>convertToRoman(3)</code> should return \"III\".');",
        "assert.deepEqual(convertToRoman(4), \"IV\", 'message: <code>convertToRoman(4)</code> should return \"IV\".');",
        "assert.deepEqual(convertToRoman(5), \"V\", 'message: <code>convertToRoman(5)</code> should return \"V\".');",
        "assert.deepEqual(convertToRoman(9), \"IX\", 'message: <code>convertToRoman(9)</code> should return \"IX\".');",
        "assert.deepEqual(convertToRoman(12), \"XII\", 'message: <code>convertToRoman(12)</code> should return \"XII\".');",
        "assert.deepEqual(convertToRoman(16), \"XVI\", 'message: <code>convertToRoman(16)</code> should return \"XVI\".');",
        "assert.deepEqual(convertToRoman(29), \"XXIX\", 'message: <code>convertToRoman(29)</code> should return \"XXIX\".');",
        "assert.deepEqual(convertToRoman(44), \"XLIV\", 'message: <code>convertToRoman(44)</code> should return \"XLIV\".');",
        "assert.deepEqual(convertToRoman(45), \"XLV\", 'message: <code>convertToRoman(45)</code> should return \"XLV\"');",
        "assert.deepEqual(convertToRoman(68), \"LXVIII\", 'message: <code>convertToRoman(68)</code> should return \"LXVIII\"');",
        "assert.deepEqual(convertToRoman(83), \"LXXXIII\", 'message: <code>convertToRoman(83)</code> should return \"LXXXIII\"');",
        "assert.deepEqual(convertToRoman(97), \"XCVII\", 'message: <code>convertToRoman(97)</code> should return \"XCVII\"');",
        "assert.deepEqual(convertToRoman(99), \"XCIX\", 'message: <code>convertToRoman(99)</code> should return \"XCIX\"');",
        "assert.deepEqual(convertToRoman(400), \"CD\", 'message: <code>convertToRoman(400)</code> should return \"CD\"');",
        "assert.deepEqual(convertToRoman(500), \"D\", 'message: <code>convertToRoman(500)</code> should return \"D\"');",
        "assert.deepEqual(convertToRoman(501), \"DI\", 'message: <code>convertToRoman(501)</code> should return \"DI\"');",
        "assert.deepEqual(convertToRoman(649), \"DCXLIX\", 'message: <code>convertToRoman(649)</code> should return \"DCXLIX\"');",
        "assert.deepEqual(convertToRoman(798), \"DCCXCVIII\", 'message: <code>convertToRoman(798)</code> should return \"DCCXCVIII\"');",
        "assert.deepEqual(convertToRoman(891), \"DCCCXCI\", 'message: <code>convertToRoman(891)</code> should return \"DCCCXCI\"');",
        "assert.deepEqual(convertToRoman(1000), \"M\", 'message: <code>convertToRoman(1000)</code> should return \"M\"');",
        "assert.deepEqual(convertToRoman(1004), \"MIV\", 'message: <code>convertToRoman(1004)</code> should return \"MIV\"');",
        "assert.deepEqual(convertToRoman(1006), \"MVI\", 'message: <code>convertToRoman(1006)</code> should return \"MVI\"');",
        "assert.deepEqual(convertToRoman(1023), \"MXXIII\", 'message: <code>convertToRoman(1023)</code> should return \"MXXIII\"');",
        "assert.deepEqual(convertToRoman(2014), \"MMXIV\", 'message: <code>convertToRoman(2014)</code> should return \"MMXIV\"');",
        "assert.deepEqual(convertToRoman(3999), \"MMMCMXCIX\", 'message: <code>convertToRoman(3999)</code> should return \"MMMCMXCIX\"');",
      ],
      type: 'bonfire',
      MDNlinks: [
        'Roman Numerals',
        'Array.prototype.splice()',
        'Array.prototype.indexOf()',
        'Array.prototype.join()',
      ],
      isRequired: true,
      challengeType: 5,
      translations: {
        es: {
          title: 'Convertior de números romanos',
          description: [
            'Convierte el número dado en numeral romano.',
            'Todos los <a href="http://www.mathsisfun.com/roman-numerals.html" target="_blank">numerales romanos</a> en las respuestas deben estar en mayúsculas.',
            "Recuerda utilizar <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Leer-Buscar-Preguntar</a> si te sientes atascado. Intenta programar en pareja. Escribe tu propio código.",
          ],
        },
        fr: {
          title: 'Convertir en chiffres romains',
          description: [
            'Convertis le nombre donné en chiffres romains.',
            'Tous les <a href="http://www.mathsisfun.com/roman-numerals.html" target="_blank">chiffres romains</a> doivent être en lettres capitales.',
            "N'oublie pas d'utiliser <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Lire-Chercher-Demander</a> si tu es bloqué. Essaye de trouver un partenaire. Écris ton propre code.",
          ],
        },
      },
    },
    {
      id: 'a8e512fbe388ac2f9198f0fa',
      title: 'Wherefore art thou',
      description: [
        'Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.',
        'For example, if the first argument is <code>[{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]</code>, and the second argument is <code>{ last: "Capulet" }</code>, then you must return the third object from the array (the first argument), because it contains the property and its value, that was passed on as the second argument.',
        "Remember to use <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Read-Search-Ask</a> if you get stuck. Write your own code.",
      ],
      challengeSeed: [
        'function whatIsInAName(collection, source) {',
        "  // What's in a name?",
        '  var arr = [];',
        '  // Only change code below this line',
        '  ',
        '  ',
        '  // Only change code above this line',
        '  return arr;',
        '}',
        '',
        'whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });',
      ],
      solutions: [
        'function whatIsInAName(collection, source) {\n  var arr = [];\n  var keys = Object.keys(source);\n  collection.forEach(function(e) {\n    if(keys.every(function(key) {return e[key] === source[key];})) {\n      arr.push(e);  \n    }\n  });\n  return arr;\n}',
      ],
      tests: [
        "assert.deepEqual(whatIsInAName([{ first: \"Romeo\", last: \"Montague\" }, { first: \"Mercutio\", last: null }, { first: \"Tybalt\", last: \"Capulet\" }], { last: \"Capulet\" }), [{ first: \"Tybalt\", last: \"Capulet\" }], 'message: <code>whatIsInAName([{ first: \"Romeo\", last: \"Montague\" }, { first: \"Mercutio\", last: null }, { first: \"Tybalt\", last: \"Capulet\" }], { last: \"Capulet\" })</code> should return <code>[{ first: \"Tybalt\", last: \"Capulet\" }]</code>.');",
        "assert.deepEqual(whatIsInAName([{ \"apple\": 1 }, { \"apple\": 1 }, { \"apple\": 1, \"bat\": 2 }], { \"apple\": 1 }), [{ \"apple\": 1 }, { \"apple\": 1 }, { \"apple\": 1, \"bat\": 2 }], 'message: <code>whatIsInAName([{ \"apple\": 1 }, { \"apple\": 1 }, { \"apple\": 1, \"bat\": 2 }], { \"apple\": 1 })</code> should return <code>[{ \"apple\": 1 }, { \"apple\": 1 }, { \"apple\": 1, \"bat\": 2 }]</code>.');",
        "assert.deepEqual(whatIsInAName([{ \"apple\": 1, \"bat\": 2 }, { \"bat\": 2 }, { \"apple\": 1, \"bat\": 2, \"cookie\": 2 }], { \"apple\": 1, \"bat\": 2 }), [{ \"apple\": 1, \"bat\": 2 }, { \"apple\": 1, \"bat\": 2, \"cookie\": 2 }], 'message: <code>whatIsInAName([{ \"apple\": 1, \"bat\": 2 }, { \"bat\": 2 }, { \"apple\": 1, \"bat\": 2, \"cookie\": 2 }], { \"apple\": 1, \"bat\": 2 })</code> should return <code>[{ \"apple\": 1, \"bat\": 2 }, { \"apple\": 1, \"bat\": 2, \"cookie\": 2 }]</code>.');",
        "assert.deepEqual(whatIsInAName([{ \"apple\": 1, \"bat\": 2 }, { \"apple\": 1 }, { \"apple\": 1, \"bat\": 2, \"cookie\": 2 }], { \"apple\": 1, \"cookie\": 2 }), [{ \"apple\": 1, \"bat\": 2, \"cookie\": 2 }], 'message: <code>whatIsInAName([{ \"apple\": 1, \"bat\": 2 }, { \"apple\": 1 }, { \"apple\": 1, \"bat\": 2, \"cookie\": 2 }], { \"apple\": 1, \"cookie\": 2 })</code> should return <code>[{ \"apple\": 1, \"bat\": 2, \"cookie\": 2 }]</code>.');",
        "assert.deepEqual(whatIsInAName([{ \"apple\": 1, \"bat\": 2 }, { \"apple\": 1 }, { \"apple\": 1, \"bat\": 2, \"cookie\": 2 }, {\"bat\":2}], { \"apple\": 1, \"bat\": 2 }), [{ \"apple\": 1, \"bat\": 2 }, { \"apple\": 1, \"bat\": 2, \"cookie\":2 }], 'message: <code>whatIsInAName([{ \"apple\": 1, \"bat\": 2 }, { \"apple\": 1 }, { \"apple\": 1, \"bat\": 2, \"cookie\": 2 }, { \"bat\":2 }], { \"apple\": 1, \"bat\": 2 })</code> should return <code>[{ \"apple\": 1, \"bat\": 2 }, { \"apple\": 1, \"bat\": 2, \"cookie\":2 }]</code>.');",
	  ],
      type: 'bonfire',
      MDNlinks: [
        'Global Object',
        'Object.prototype.hasOwnProperty()',
        'Object.keys()',
      ],
      isRequired: true,
      challengeType: 5,
      translations: {
        es: {
          title: '¿Dónde estás que no te veo?',
          description: [
            'Crea una función que busque en un vector de objetos (primer argumento) y devuelva un vector con todos los objetos que compartan el valor indicado para una propiedad dada (segundo argumento). Cada pareja de propiedad y valor debe estar presente en el objeto de la colección para ser incluido en el vector devuelto por la función',
            'Por ejemplo, si el primer argumento es <code>[{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]</code>, y el segundo argumento es <code>{ last: "Capulet" }</code>, entonces tu función debe devolver el tercer objeto del vector en el primer argumento, ya que contiene la propiedad y el valor indicados en el segundo argumento.',
            "Recuerda utilizar <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Leer-Buscar-Preguntar</a> si te sientes atascado. Intenta programar en pareja. Escribe tu propio código.",
          ],
        },
        fr: {
          title: 'O Roméo! Roméo!',
          description: [
            "Écris une fonction qui parcourt un array d'objets (premier argument) et renvoie un array de tous les objects ayant les paires de nom/valeur correspondantes à l'objet donné (second argument). Chaque paire de nom et de valeur de l'objet source doit être présente dans les objects renvoyés.",
            "Par exemple, si le premier argument est <code>[{ first: \"Romeo\", last: \"Montague\" }, { first: \"Mercutio\", last: null }, { first: \"Tybalt\", last: \"Capulet\" }]</code>, et le second argument est <code>{ last: \"Capulet\" }</code>, tu dois renvoyer le troisième objet de l'array (premier argument), parce qu'il contient le nom et sa valeur, donnés en deuxième argument.",
            "N'oublie pas d'utiliser <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Lire-Chercher-Demander</a> si tu es bloqué. Essaye de trouver un partenaire. Écris ton propre code.",
          ],
        },
      },
    },
    {
      id: 'a0b5010f579e69b815e7c5d6',
      title: 'Search and Replace',
      description: [
        'Perform a search and replace on the sentence using the arguments provided and return the new sentence.',
        'First argument is the sentence to perform the search and replace on.',
        'Second argument is the word that you will be replacing (before).',
        'Third argument is what you will be replacing the second argument with (after).',
        'NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"',
        "Remember to use <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code.",
      ],
      challengeSeed: [
        'function myReplace(str, before, after) {',
        '  return str;',
        '}',
        '',
        'myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");',
      ],
      solutions: [
        'function myReplace(str, before, after) {\n  if (before.charAt(0) === before.charAt(0).toUpperCase()) {\n    after = after.charAt(0).toUpperCase() + after.substring(1);\n  } else {\n    after = after.charAt(0).toLowerCase() + after.substring(1);\n  }\n  return str.replace(before, after);\n}',
      ],
      tests: [
        "assert.deepEqual(myReplace(\"Let us go to the store\", \"store\", \"mall\"), \"Let us go to the mall\", 'message: <code>myReplace(\"Let us go to the store\", \"store\", \"mall\")</code> should return \"Let us go to the mall\".');",
        "assert.deepEqual(myReplace(\"He is Sleeping on the couch\", \"Sleeping\", \"sitting\"), \"He is Sitting on the couch\", 'message: <code>myReplace(\"He is Sleeping on the couch\", \"Sleeping\", \"sitting\")</code> should return \"He is Sitting on the couch\".');",
        "assert.deepEqual(myReplace(\"This has a spellngi error\", \"spellngi\", \"spelling\"), \"This has a spelling error\", 'message: <code>myReplace(\"This has a spellngi error\", \"spellngi\", \"spelling\")</code> should return \"This has a spelling error\".');",
        "assert.deepEqual(myReplace(\"His name is Tom\", \"Tom\", \"john\"), \"His name is John\", 'message: <code>myReplace(\"His name is Tom\", \"Tom\", \"john\")</code> should return \"His name is John\".');",
        "assert.deepEqual(myReplace(\"Let us get back to more Coding\", \"Coding\", \"algorithms\"), \"Let us get back to more Algorithms\", 'message: <code>myReplace(\"Let us get back to more Coding\", \"Coding\", \"algorithms\")</code> should return \"Let us get back to more Algorithms\".');",
      ],
      type: 'bonfire',
      MDNlinks: [
        'Array.prototype.splice()',
        'String.prototype.replace()',
        'Array.prototype.join()',
      ],
      isRequired: true,
      challengeType: 5,
      translations: {
        es: {
          title: 'Buscar y reemplazar',
          description: [
            'Crea una función que busque un fragmento en una frase dada y lo reemplace por otro fragmento, devolviendo la nueva frase.',
            'El primer argumento es la frase en la que se ejecutará la búsqueda y el reemplazo',
            'El segundo argumento es la palabra que se va a reemplazar',
            'El tercer argumento es lo que reemplazará a la palabra indicada en el segundo argumento',
            'NOTA: Debes respetar mayúsculas y minúsculas de la palabra original cuando ejecutes el reemplazo. Por ejemplo, si quisieras reemplazar la palabra "Libro" con la palabra "perro", deberías insertar en vez la palabra "Perro"',
            "Recuerda utilizar <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Leer-Buscar-Preguntar</a> si te sientes atascado. Intenta programar en pareja. Escribe tu propio código.",
          ],
        },
        fr: {
          title: 'Cherche et remplace',
          description: [
            'Crée une fonction qui cherche et remplace une partie de la phrase en utilisant les arguments et renvoie la nouvelle phrase.',
            'Le premier argument est la phrase à modifier.',
            'Le deuxième argument est le mot à remplacer (avant).',
            'Le troisième argument est le mot qui doit remplacer le deuxième argument (après).',
            'NB: Tu dois respecter les majuscules ou miniscules du mot originel que tu remplaces. Par exemple, si tu veux remplacer le mot "Livre" par "chien", tu devras le remplacer par "Chien"',
            "N'oublie pas d'utiliser <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Lire-Chercher-Demander</a> si tu es bloqué. Essaye de trouver un partenaire. Écris ton propre code.",
          ],
        },
      },
    },
    {
      id: 'aa7697ea2477d1316795783b',
      title: 'Pig Latin',
      description: [
        'Translate the provided string to pig latin.',
        '<a href="http://en.wikipedia.org/wiki/Pig_Latin" target="_blank">Pig Latin</a> takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".',
        'If a word begins with a vowel you just add "way" to the end.',
        'Input strings are guaranteed to be English words in all lowercase.',
        "Remember to use <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code.",
      ],
      challengeSeed: [
        'function translatePigLatin(str) {',
        '  return str;',
        '}',
        '',
        'translatePigLatin("consonant");',
      ],
      solutions: [
        "function translatePigLatin(str) {\n  if (isVowel(str.charAt(0))) return str + \"way\";\n  var front = [];\n  str = str.split('');\n  while (str.length && !isVowel(str[0])) {\n    front.push(str.shift());\n  }\n  return [].concat(str, front).join('') + 'ay';\n}\n\nfunction isVowel(c) {\n  return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1;\n}",
      ],
      tests: [
        "assert.deepEqual(translatePigLatin(\"california\"), \"aliforniacay\", 'message: <code>translatePigLatin(\"california\")</code> should return \"aliforniacay\".');",
        "assert.deepEqual(translatePigLatin(\"paragraphs\"), \"aragraphspay\", 'message: <code>translatePigLatin(\"paragraphs\")</code> should return \"aragraphspay\".');",
        "assert.deepEqual(translatePigLatin(\"glove\"), \"oveglay\", 'message: <code>translatePigLatin(\"glove\")</code> should return \"oveglay\".');",
        "assert.deepEqual(translatePigLatin(\"algorithm\"), \"algorithmway\", 'message: <code>translatePigLatin(\"algorithm\")</code> should return \"algorithmway\".');",
        "assert.deepEqual(translatePigLatin(\"eight\"), \"eightway\", 'message: <code>translatePigLatin(\"eight\")</code> should return \"eightway\".');",
      ],
      type: 'bonfire',
      MDNlinks: [
        'Array.prototype.indexOf()',
        'Array.prototype.push()',
        'Array.prototype.join()',
        'String.prototype.substring()',
        'String.prototype.split()',
      ],
      isRequired: true,
      challengeType: 5,
      translations: {
        es: {
          title: 'Latín de los cerdos',
          description: [
            'Traduce la cadena de texto que se te provee al Latín de los cerdos (Pig Latin)',
            '<a href="http://es.wikipedia.org/wiki/Pig_Latin" target="_blank">Pig Latin</a> toma la primera consonante (o grupo de consonantes) de una palabra en inglés, la mueve al final de la palabra y agrega un "ay".',
            'Si la palabra comienza con una vocal, simplemente añade "way" al final.',
            'Cadenas de entrada están garantizadas de ser palabras en Inglés en minúscula.',
            "Recuerda utilizar <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Leer-Buscar-Preguntar</a> si te sientes atascado. Intenta programar en pareja. Escribe tu propio código.",
          ],
        },
        fr: {
          title: 'Pig latin',
          description: [
            'Traduis la phrase donnée en pig latin (verlan anglais)',
            "Le <a href=\"http://fr.wikipedia.org/wiki/Pig_Latin\" target=\"_blank\">Pig Latin</a> prend la ou les première(s) consonne(s) d'un mot en anglais et les mets à la fin du mot accompagné par le suffixe \"ay\".",
            'Si un mot commence par une voyelle ajoute "way" à la fin du mot.',
            "Les chaînes de caractères entrées sont garanties d'être des mots anglais, en lettres minuscules.",
            "N'oublie pas d'utiliser <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Lire-Chercher-Demander</a> si tu es bloqué. Essaye de trouver un partenaire. Écris ton propre code.",
          ],
        },
      },
    },
    {
      id: 'afd15382cdfb22c9efe8b7de',
      title: 'DNA Pairing',
      description: [
        'The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.',
        '<a href="http://en.wikipedia.org/wiki/Base_pair" target="_blank">Base pairs</a> are a pair of AT and CG. Match the missing element to the provided character.',
        'Return the provided character as the first element in each array.',
        'For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]',
        'The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.',
        "Remember to use <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code.",
      ],
      challengeSeed: [
        'function pairElement(str) {',
        '  return str;',
        '}',
        '',
        'pairElement("GCG");',
      ],
      solutions: [
        "var lookup = Object.create(null);\nlookup.A = 'T';\nlookup.T = 'A';\nlookup.C = 'G';\nlookup.G = 'C';\n\nfunction pairElement(str) {\n return str.split('').map(function(p) {return [p, lookup[p]];});\n}",
      ],
      tests: [
        "assert.deepEqual(pairElement(\"ATCGA\"),[[\"A\",\"T\"],[\"T\",\"A\"],[\"C\",\"G\"],[\"G\",\"C\"],[\"A\",\"T\"]], 'message: <code>pairElement(\"ATCGA\")</code> should return <code>[[\"A\",\"T\"],[\"T\",\"A\"],[\"C\",\"G\"],[\"G\",\"C\"],[\"A\",\"T\"]]</code>.');",
        "assert.deepEqual(pairElement(\"TTGAG\"),[[\"T\",\"A\"],[\"T\",\"A\"],[\"G\",\"C\"],[\"A\",\"T\"],[\"G\",\"C\"]], 'message: <code>pairElement(\"TTGAG\")</code> should return <code>[[\"T\",\"A\"],[\"T\",\"A\"],[\"G\",\"C\"],[\"A\",\"T\"],[\"G\",\"C\"]]</code>.');",
        "assert.deepEqual(pairElement(\"CTCTA\"),[[\"C\",\"G\"],[\"T\",\"A\"],[\"C\",\"G\"],[\"T\",\"A\"],[\"A\",\"T\"]], 'message: <code>pairElement(\"CTCTA\")</code> should return <code>[[\"C\",\"G\"],[\"T\",\"A\"],[\"C\",\"G\"],[\"T\",\"A\"],[\"A\",\"T\"]]</code>.');",
      ],
      type: 'bonfire',
      MDNlinks: [
        'Array.prototype.push()',
        'String.prototype.split()',
      ],
      isRequired: true,
      challengeType: 5,
      translations: {
        es: {
          title: 'Emparejando bases de ADN',
          description: [
            'A la cadena de ADN que se te pasa le hace falta una hebra. Toma cada una de las letras, obtén su pareja correspondiente y devuelve los resultados en un segundo vector',
            '<a href="http://es.wikipedia.org/wiki/Apareamiento_de_bases" target="_blank">Parejas de bases</a> son pares de AT y CG. Encuentra el elemento que hace falta para cada una de las letras que se te presentan.',
            'Devuelve la letra que se te provee como el primer elemento en cada vector',
            'Por ejemplo, si te pasáramos la cadena GCG, tu función debería devolver el vector: [["G", "C"], ["C","G"],["G", "C"]]',
            'Cada letra que se te provee y su pareja deben estar contenidos en un vector, y cada uno de estos vectores debe estar contenidos en un vector.',
            "Recuerda utilizar <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Leer-Buscar-Preguntar</a> si te sientes atascado. Intenta programar en pareja. Escribe tu propio código.",
          ],
        },
        fr: {
          title: "Coupler les bases d'ADN",
          description: [
            "Une base d'ADN a perdu sa paire. Assemble chaque paire de caractères et renvoie les résultats dans un second tableau.",
            "Les <a href=\"https://fr.wikipedia.org/wiki/Paire_de_bases\" target=\"_blank\">paires de bases</a> sont des paires d'AT et CG. Associe l'élement manquant au caractère donné.",
            'Renvoie le caractère donné comme premier élément de chaque tableau.',
            'Par exemple, pour GCG, il faut renvoyer [["G", "C"], ["C","G"],["G", "C"]]',
            'Chaque caractère et sa paire sont couplées dans un tableau, et tous les tableaux sont groupés dans un tableau.',
            "N'oublie pas d'utiliser <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Lire-Chercher-Demander</a> si tu es bloqué. Essaye de trouver un partenaire. Écris ton propre code.",
          ],
        },
      },
    },
    {
      id: 'af7588ade1100bde429baf20',
      title: 'Missing letters',
      description: [
        'Find the missing letter in the passed letter range and return it.',
        'If all letters are present in the range, return undefined.',
        "Remember to use <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code.",
      ],
      challengeSeed: [
        'function fearNotLetter(str) {',
        '  return str;',
        '}',
        '',
        'fearNotLetter("abce");',
      ],
      solutions: [
        "function fearNotLetter(str) {\n  var s = str.split('').map(function(c) {return c.charCodeAt(0);});\n  for (var i = 1; i < s.length; i++) {\n    if (s[i]-1 != s[i-1]) {\n      return String.fromCharCode(s[i]-1);\n    }\n  }\n}",
      ],
      tests: [
        "assert.deepEqual(fearNotLetter(\"abce\"), \"d\", 'message: <code>fearNotLetter(\"abce\")</code> should return \"d\".');",
        "assert.deepEqual(fearNotLetter(\"abcdefghjklmno\"), \"i\", 'message: <code>fearNotLetter(\"abcdefghjklmno\")</code> should return \"i\".');",
        "assert.isUndefined(fearNotLetter(\"bcd\"), 'message: <code>fearNotLetter(\"bcd\")</code> should return undefined.');",
        "assert.isUndefined(fearNotLetter(\"yz\"), 'message: <code>fearNotLetter(\"yz\")</code> should return undefined.');",
      ],
      type: 'bonfire',
      MDNlinks: [
        'String.prototype.charCodeAt()',
        'String.fromCharCode()',
      ],
      isRequired: true,
      challengeType: 5,
      translations: {
        es: {
          title: 'Letras perdidas',
          description: [
            'Crea una función que devuelva la letra que falta en el rango de letras que se le pasa',
            'Si todas las letras en el rango están presentes, la función debe devolver undefined.',
            "Recuerda utilizar <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Leer-Buscar-Preguntar</a> si te sientes atascado. Intenta programar en pareja. Escribe tu propio código.",
          ],
        },
        fr: {
          title: 'Lettres perdues',
          description: [
            'Crée une fonction qui renvoie la lettre manquante dans la série.',
            "Si aucune lettre n'est manquante, renvoie undefined.",
            "N'oublie pas d'utiliser <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Lire-Chercher-Demander</a> si tu es bloqué. Essaye de trouver un partenaire. Écris ton propre code.",
          ],
        },
      },
    },
    {
      id: 'a77dbc43c33f39daa4429b4f',
      title: 'Boo who',
      description: [
        'Check if a value is classified as a boolean primitive. Return true or false.',
        'Boolean primitives are true and false.',
        "Remember to use <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code.",
      ],
      challengeSeed: [
        'function booWho(bool) {',
        '  // What is the new fad diet for ghost developers? The Boolean.',
        '  return bool;',
        '}',
        '',
        'booWho(null);',
      ],
      solutions: [
        'function booWho(bool) {\n  // What is the new fad diet for ghost developers? The Boolean.\n  return typeof bool === "boolean";\n}\n\nbooWho(null);',
      ],
      tests: [
        "assert.strictEqual(booWho(true), true, 'message: <code>booWho(true)</code> should return true.');",
        "assert.strictEqual(booWho(false), true, 'message: <code>booWho(false)</code> should return true.');",
        "assert.strictEqual(booWho([1, 2, 3]), false, 'message: <code>booWho([1, 2, 3])</code> should return false.');",
        "assert.strictEqual(booWho([].slice), false, 'message: <code>booWho([].slice)</code> should return false.');",
        "assert.strictEqual(booWho({ \"a\": 1 }), false, 'message: <code>booWho({ \"a\": 1 })</code> should return false.');",
        "assert.strictEqual(booWho(1), false, 'message: <code>booWho(1)</code> should return false.');",
        "assert.strictEqual(booWho(NaN), false, 'message: <code>booWho(NaN)</code> should return false.');",
        "assert.strictEqual(booWho(\"a\"), false, 'message: <code>booWho(\"a\")</code> should return false.');",
        "assert.strictEqual(booWho(\"true\"), false, 'message: <code>booWho(\"true\")</code> should return false.');",
        "assert.strictEqual(booWho(\"false\"), false, 'message: <code>booWho(\"false\")</code> should return false.');",
      ],
      type: 'bonfire',
      MDNlinks: [
        'Boolean Objects',
      ],
      isRequired: true,
      challengeType: 5,
      translations: {
        es: {
          title: '¡Bu!',
          description: [
            'Crea una función que verifique si el valor que se le pasa es de tipo booleano. Haz que la función devuelva true o false según corresponda.',
            'Los primitivos booleanos primitivos son: true y false',
            "Recuerda utilizar <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Leer-Buscar-Preguntar</a> si te sientes atascado. Intenta programar en pareja. Escribe tu propio código.",
          ],
        },
        fr: {
          title: 'Boo !',
          description: [
            "Crée une fonction qui vérifie qu'une valeur est de type booléen. Renvoie true ou false.",
            'Les primitives booléennes sont true ou false.',
            "N'oublie pas d'utiliser <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Lire-Chercher-Demander</a> si tu es bloqué. Essaye de trouver un partenaire. Écris ton propre code.",
          ],
        },
      },
    },
    {
      id: 'a105e963526e7de52b219be9',
      title: 'Sorted Union',
      description: [
        'Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.',
        'In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.',
        'The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.',
        'Check the assertion tests for examples.',
        "Remember to use <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code.",
      ],
      challengeSeed: [
        'function uniteUnique(arr) {',
        '  return arr;',
        '}',
        '',
        'uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);',
      ],
      solutions: [
        'function uniteUnique(arr) {\n  return [].slice.call(arguments).reduce(function(a, b) {\n    return [].concat(a, b.filter(function(e) {return a.indexOf(e) === -1;}));\n  }, []);\n}',
      ],
      tests: [
        "assert.deepEqual(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]), [1, 3, 2, 5, 4], 'message: <code>uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])</code> should return <code>[1, 3, 2, 5, 4]</code>.');",
        "assert.deepEqual(uniteUnique([1, 3, 2], [1, [5]], [2, [4]]), [1, 3, 2, [5], [4]], 'message: <code>uniteUnique([1, 3, 2], [1, [5]], [2, [4]])</code> should return <code>[1, 3, 2, [5], [4]]</code>.');",
        "assert.deepEqual(uniteUnique([1, 2, 3], [5, 2, 1]), [1, 2, 3, 5], 'message: <code>uniteUnique([1, 2, 3], [5, 2, 1])</code> should return <code>[1, 2, 3, 5]</code>.');",
        "assert.deepEqual(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]), [1, 2, 3, 5, 4, 6, 7, 8], 'message: <code>uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])</code> should return <code>[1, 2, 3, 5, 4, 6, 7, 8]</code>.');",
      ],
      type: 'bonfire',
      MDNlinks: [
        'Arguments object',
        'Array.prototype.reduce()',
      ],
      isRequired: true,
      challengeType: 5,
      translations: {
        es: {
          title: 'Intersección ordenada',
          description: [
            'Escribe una función que tome dos o más vectores y que devuelva un nuevo vector con los valores únicos en el orden de aparición de los vectores que se te pasaron',
            'En otra palabras, todos los valores presentes en todos los vectores deben aparecer en el vector final en su orden original, pero sin duplicados.',
            'Los valores únicos deben aparecer en el orden original, pero el vector final no necesariamente debe mostrar los elementos en orden numérico.',
            'Puedes usar de referencia las pruebas de verificación si necesitas ejemplos.',
            "Recuerda utilizar <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Leer-Buscar-Preguntar</a> si te sientes atascado. Intenta programar en pareja. Escribe tu propio código.",
          ],
        },
        fr: {
          title: 'Union arrangée',
          description: [
            "Crée une fonction qui accepte deux tableaux ou plus et renvoie un nouvel array de valeurs uniques dans l'ordre des tableaux donnés.",
            "En d'autres termes, toutes les valeurs des tableaux doivent être incluses dans l'ordre originel, sans doublon dans le tableau final.",
            "Les valeurs uniques doivent être classées dans l'ordre originel, mais le tableau final ne doit pas être classé par ordre croissant.",
            "Réfère toi aux test pour plus d'examples.",
            "N'oublie pas d'utiliser <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Lire-Chercher-Demander</a> si tu es bloqué. Essaye de trouver un partenaire. Écris ton propre code.",
          ],
        },
      },
    },
    {
      id: 'a6b0bb188d873cb2c8729495',
      title: 'Convert HTML Entities',
      description: [
        "Convert the characters <code>&</code>, <code><</code>, <code>></code>, <code>\"</code> (double quote), and <code>'</code> (apostrophe), in a string to their corresponding HTML entities.",
        "Remember to use <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code.",
      ],
      challengeSeed: [
        'function convertHTML(str) {',
        '  // &colon;&rpar;',
        '  return str;',
        '}',
        '',
        'convertHTML("Dolce & Gabbana");',
      ],
      solutions: [
        "var MAP = { '&': '&amp;',\n            '<': '&lt;',\n            '>': '&gt;',\n            '\"': '&quot;',\n            \"'\": '&apos;'};\n\nfunction convertHTML(str) {\n  return str.replace(/[&<>\"']/g, function(c) {\n    return MAP[c];\n  });\n}",
      ],
      tests: [
        "assert.match(convertHTML(\"Dolce & Gabbana\"), /Dolce &amp; Gabbana/, 'message: <code>convertHTML(\"Dolce & Gabbana\")</code> should return <code>Dolce &&#8203;amp; Gabbana</code>.');",
        "assert.match(convertHTML(\"Hamburgers < Pizza < Tacos\"), /Hamburgers &lt; Pizza &lt; Tacos/, 'message: <code>convertHTML(\"Hamburgers < Pizza < Tacos\")</code> should return <code>Hamburgers &&#8203;lt; Pizza &&#8203;lt; Tacos</code>.');",
        "assert.match(convertHTML(\"Sixty > twelve\"), /Sixty &gt; twelve/, 'message: <code>convertHTML(\"Sixty > twelve\")</code> should return <code>Sixty &&#8203;gt; twelve</code>.');",
        "assert.match(convertHTML('Stuff in \"quotation marks\"'), /Stuff in &quot;quotation marks&quot;/, 'message: <code>convertHTML(&apos;Stuff in \"quotation marks\"&apos;)</code> should return <code>Stuff in &&#8203;quot;quotation marks&&#8203;quot;</code>.');",
        "assert.match(convertHTML(\"Shindler's List\"), /Shindler&apos;s List/, 'message: <code>convertHTML(\"Shindler&apos;s List\")</code> should return <code>Shindler&&#8203;apos;s List</code>.');",
        "assert.match(convertHTML('<>'), /&lt;&gt;/, 'message: <code>convertHTML(\"<>\")</code> should return <code>&&#8203;lt;&&#8203;gt;</code>.');",
        "assert.strictEqual(convertHTML('abc'), 'abc', 'message: <code>convertHTML(\"abc\")</code> should return <code>abc</code>.');",
      ],
      type: 'bonfire',
      MDNlinks: [
        'RegExp',
        'HTML Entities',
        'String.prototype.replace()',
      ],
      isRequired: true,
      challengeType: 5,
      translations: {
        es: {
          title: 'Convierte entidades HTML',
          description: [
            "Convierte los caracteres <code>&</code>, <code>&lt;<code>, <code>&gt;<code>, <code>\"<code>' (comilla), y <code>'<code> (apóstrofe), contenidos en la cadena de texto que se te pasa, en sus entidades HTML correspondientes",
            "Recuerda utilizar <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Leer-Buscar-Preguntar</a> si te sientes atascado. Intenta programar en pareja. Escribe tu propio código.",
          ],
        },
        fr: {
          title: 'Convertir les entités HTML',
          description: [
            "Convertis les caractères <code>&</code>, <code>&lt;<code>, <code>&gt;<code>, <code>\"<code>' (guillemet), y <code>'<code> (apostrophe), contenus dans la chaîne de caractères en entités HTML.",
            "N'oublie pas d'utiliser <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Lire-Chercher-Demander</a> si tu es bloqué. Essaye de trouver un partenaire. Écris ton propre code.",
          ],
        },
      },
    },
    {
      id: 'a103376db3ba46b2d50db289',
      title: 'Spinal Tap Case',
      description: [
        'Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.',
        "Remember to use <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code.",
      ],
      challengeSeed: [
        'function spinalCase(str) {',
        "  // \"It's such a fine line between stupid, and clever.\"",
        '  // --David St. Hubbins',
        '  return str;',
        '}',
        '',
        "spinalCase('This Is Spinal Tap');",
      ],
      solutions: [
        "function spinalCase(str) {\n  // \"It's such a fine line between stupid, and clever.\"\n  // --David St. Hubbins\n  str = str.replace(/([a-z](?=[A-Z]))/g, '$1 ');\n  return str.toLowerCase().replace(/\\ |\\_/g, '-');\n}",
      ],
      tests: [
        "assert.deepEqual(spinalCase(\"This Is Spinal Tap\"), \"this-is-spinal-tap\", 'message: <code>spinalCase(\"This Is Spinal Tap\")</code> should return <code>\"this-is-spinal-tap\"</code>.');",
        "assert.strictEqual(spinalCase('thisIsSpinalTap'), \"this-is-spinal-tap\", 'message: <code>spinalCase(\"thisIsSpinal<wbr>Tap\")</code> should return <code>\"this-is-spinal-tap\"</code>.');",
        "assert.strictEqual(spinalCase(\"The_Andy_Griffith_Show\"), \"the-andy-griffith-show\", 'message: <code>spinalCase(\"The_Andy_<wbr>Griffith_Show\")</code> should return <code>\"the-andy-griffith-show\"</code>.');",
        "assert.strictEqual(spinalCase(\"Teletubbies say Eh-oh\"), \"teletubbies-say-eh-oh\", 'message: <code>spinalCase(\"Teletubbies say Eh-oh\")</code> should return <code>\"teletubbies-say-eh-oh\"</code>.');",
        "assert.strictEqual(spinalCase(\"AllThe-small Things\"), \"all-the-small-things\", 'message: <code>spinalCase(\"AllThe-small Things\")</code> should return <code>\"all-the-small-things\"</code>.');",
      ],
      type: 'bonfire',
      MDNlinks: [
        'RegExp',
        'String.prototype.replace()',
      ],
      isRequired: true,
      challengeType: 5,
      translations: {
        es: {
          title: 'separado-por-guiones',
          description: [
            'Convierte la cadena de texto que se te pasa al formato spinal case. Spinal case es cuando escribes todas las palabras en-minúsculas-unidas-por-guiones.',
            "Recuerda utilizar <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Leer-Buscar-Preguntar</a> si te sientes atascado. Intenta programar en pareja. Escribe tu propio código.",
          ],
        },
        fr: {
          title: "Trait d'union",
          description: [
            'Convertis la chaîne de caractères en spinal case. Spinal case correspond au bas-de-casse-séparé-par-des-tirets.',
            "N'oublie pas d'utiliser <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Lire-Chercher-Demander</a> si tu es bloqué. Essaye de trouver un partenaire. Écris ton propre code.",
          ],
        },
      },
    },
    {
      id: 'a5229172f011153519423690',
      title: 'Sum All Odd Fibonacci Numbers',
      description: [
        'Given a positive integer <code>num</code>, return the sum of all odd Fibonacci numbers that are less than or equal to <code>num</code>.',
        'The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.',
        'For example, <code>sumFibs(10)</code> should return <code>10</code> because all odd Fibonacci numbers less than <code>10</code> are 1, 1, 3, and 5.',
        "Remember to use <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code.",
      ],
      challengeSeed: [
        'function sumFibs(num) {',
        '  return num;',
        '}',
        '',
        'sumFibs(4);',
      ],
      solutions: [
        'function sumFibs(num) {\n  var a = 1; \n  var b = 1;\n  var s = 0;\n  while (a <= num) {\n    if (a % 2 !== 0) {   \n      s += a; \n    }\n    a = [b, b=b+a][0];\n  }\n  return s;\n}',
      ],
      tests: [
        "assert(typeof sumFibs(1) === \"number\", 'message: <code>sumFibs(1)</code> should return a number.');",
        "assert.deepEqual(sumFibs(1000), 1785, 'message: <code>sumFibs(1000)</code> should return 1785.');",
        "assert.deepEqual(sumFibs(4000000), 4613732, 'message: <code>sumFibs(4000000)</code> should return 4613732.');",
        "assert.deepEqual(sumFibs(4), 5, 'message: <code>sumFibs(4)</code> should return 5.');",
        "assert.deepEqual(sumFibs(75024), 60696, 'message: <code>sumFibs(75024)</code> should return 60696.');",
        "assert.deepEqual(sumFibs(75025), 135721, 'message: <code>sumFibs(75025)</code> should return 135721.');",
      ],
      type: 'bonfire',
      MDNlinks: [
        'Remainder',
      ],
      isRequired: true,
      challengeType: 5,
      translations: {
        es: {
          title: 'Suma todos los números de Fibonacci que son impares',
          description: [
            'Crea una función que devuelva la suma de todos los números impares en la secuencia de Fibonacci hasta el número que se le pasa como argumento, incluyéndolo en caso de ser un número de la secuencia.',
            'Los primeros números de la secuencia son 1, 1, 2, 3, 5 y 8, y cada número siguiente es la suma de los dos números anteriores.',
            'Por ejemplo, si se te pasa el número 4, la función deberá devolver 5, ya que los números impares menores que 4 son 1, 1 y 3.',
            "Recuerda utilizar <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Leer-Buscar-Preguntar</a> si te sientes atascado. Intenta programar en pareja. Escribe tu propio código.",
          ],
        },
        fr: {
          title: 'Additionner tous les nombre de Fibonacci impairs',
          description: [
            "Crée une fonction qui additionne tous les nombre de Fibonacci jusqu'au nombre donné (inclus si c'est un nombre de Fibonacci).",
            'Les premiers chiffres de la séquence sont 1, 1, 2, 3, 5 y 8, et chaque nombre correspond à la somme des deux nombres précédents.',
            'Par example, pour le chiffre 4, la fonction doit retourner 5, puisque les chiffres précédent 4 sont 1, 1 et 3.',
            "N'oublie pas d'utiliser <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Lire-Chercher-Demander</a> si tu es bloqué. Essaye de trouver un partenaire. Écris ton propre code.",
          ],
        },
      },
    },
    {
      id: 'a3bfc1673c0526e06d3ac698',
      title: 'Sum All Primes',
      description: [
        'Sum all the prime numbers up to and including the provided number.',
        "A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.",
        'The provided number may not be a prime.',
        "Remember to use <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code.",
      ],
      challengeSeed: [
        'function sumPrimes(num) {',
        '  return num;',
        '}',
        '',
        'sumPrimes(10);',
      ],
      solutions: [
        'function eratosthenesArray(n) {\n    var primes = [];\n    if (n > 2) {\n        var half = n>>1;\n        var sieve = Array(half);\n        for (var i = 1, limit = Math.sqrt(n)>>1; i <= limit; i++) {\n            if (!sieve[i]) {\n                for (var step = 2*i+1, j = (step*step)>>1; j < half; j+=step) {\n                    sieve[j] = true;\n                }\n            }\n        }\n        primes.push(2);\n        for (var p = 1; p < half; p++) {\n            if (!sieve[p]) primes.push(2*p+1);\n        }\n    }\n    return primes;\n}\n\nfunction sumPrimes(num) {\n  return eratosthenesArray(num+1).reduce(function(a,b) {return a+b;}, 0);\n}\n\nsumPrimes(10);',
      ],
      tests: [
        "assert.deepEqual(typeof sumPrimes(10), 'number', 'message: <code>sumPrimes(10)</code> should return a number.');",
        "assert.deepEqual(sumPrimes(10), 17, 'message: <code>sumPrimes(10)</code> should return 17.');",
        "assert.deepEqual(sumPrimes(977), 73156, 'message: <code>sumPrimes(977)</code> should return 73156.');",
      ],
      type: 'bonfire',
      MDNlinks: [
        'For Loops',
        'Array.prototype.push()',
      ],
      isRequired: true,
      challengeType: 5,
      translations: {
        es: {
          title: 'Suma todos los números primos',
          description: [
            'Suma todos los números primos hasta, e incluyendo, el número que se te pasa',
            'Números primos son todos aquellos que sólo son divisibles entre 1 y entre sí mismos. Por ejemplo, el número 2 es primo porque solo es divisible por 1 y por 2. Por el contrario, el número 1 no es primo, ya que sólo puede dividirse por sí mismo',
            'El número que se le provee a la función no puede ser primo',
            "Recuerda utilizar <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Leer-Buscar-Preguntar</a> si te sientes atascado. Intenta programar en pareja. Escribe tu propio código.",
          ],
        },
        fr: {
          title: 'Additionner tous les nombres primaires',
          description: [
            "Additionne tous les nombres primaires jusqu'au nombre donné (inclus).",
            "Un nombre primaire est un nombre divisible que par 1 ou par lui-même (plus grand que 1). Par exemple, 2 est un nombre primaire puisqu'il n'est divisible que par 1 et 2. 1 n'est pas primaire puiqu'il n'est divisible que par lui-même.",
            "Le nombre donné en argument n'est pas forcément un nombre primaire.",
            "N'oublie pas d'utiliser <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Lire-Chercher-Demander</a> si tu es bloqué. Essaye de trouver un partenaire. Écris ton propre code.",
          ],
        },
      },
    },
    {
      id: 'ae9defd7acaf69703ab432ea',
      title: 'Smallest Common Multiple',
      description: [
        'Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.',
        'The range will be an array of two numbers that will not necessarily be in numerical order.',
        'For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers <em>between</em> 1 and 3. The answer here would be 6.',
        "Remember to use <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code.",
      ],
      challengeSeed: [
        'function smallestCommons(arr) {',
        '  return arr;',
        '}',
        '',
        '',
        'smallestCommons([1,5]);',
      ],
      solutions: [
        'function gcd(a, b) {\n    while (b !== 0) {\n        a = [b, b = a % b][0];\n    }\n    return a;\n}\n\nfunction lcm(a, b) {\n    return (a * b) / gcd(a, b);\n}\n\nfunction smallestCommons(arr) {\n  arr.sort(function(a,b) {return a-b;});\n  var rng = [];\n  for (var i = arr[0]; i <= arr[1]; i++) {\n    rng.push(i);\n  }\n  return rng.reduce(lcm);\n}',
      ],
      tests: [
        "assert.deepEqual(typeof smallestCommons([1, 5]), 'number', 'message: <code>smallestCommons([1, 5])</code> should return a number.');",
        "assert.deepEqual(smallestCommons([1, 5]), 60, 'message: <code>smallestCommons([1, 5])</code> should return 60.');",
        "assert.deepEqual(smallestCommons([5, 1]), 60, 'message: <code>smallestCommons([5, 1])</code> should return 60.');",
        "assert.deepEqual(smallestCommons([2, 10]), 2520, 'message: <code>smallestCommons([2, 10])</code> should return 2520.');",
        "assert.deepEqual(smallestCommons([1, 13]), 360360, 'message: <code>smallestCommons([1, 13])</code> should return 360360.');",
        "assert.deepEqual(smallestCommons([23, 18]), 6056820, 'message: <code>smallestCommons([23, 18])</code> should return 6056820.');",
      ],
      type: 'bonfire',
      MDNlinks: [
        'Smallest Common Multiple',
      ],
      isRequired: true,
      challengeType: 5,
      translations: {
        es: {
          title: 'Mínimo común múltiplo',
          description: [
            'En el ejercicio se te provee un vector con dos números. Crea una función que encuentre el número más pequeño que sea divisible entre ambos números, así como entre todos los números enteros entre ellos.',
            'Tu función debe aceptar como argumento un vector con dos números, los cuales no necesariamente estarán en orden.',
            'Por ejemplo, si se te pasan los números 1 y 3, deberás encontrar el mínimo común múltiplo de 1 y 3 que es divisible por todos los números <em>entre</em> 1 y 3.',
            "Recuerda utilizar <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Leer-Buscar-Preguntar</a> si te sientes atascado. Intenta programar en pareja. Escribe tu propio código.",
          ],
        },
        fr: {
          title: 'Plus petit commun multiple',
          description: [
            'Cherche le plus petit commun multiple qui soit divisible par les deux nombres donnés et par les nombres de la série entre ces deux nombres.',
            "La série est un tableau de deux nombres qui ne seront pas nécessairement dans l'ordre croissant.",
            'Par exemple, pour 1 et 3, il faut trouver le plus petit commun multiple de 1 et 3 mais aussi des nombres <em>entre</em> 1 et 3/',
            "N'oublie pas d'utiliser <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Lire-Chercher-Demander</a> si tu es bloqué. Essaye de trouver un partenaire. Écris ton propre code.",
          ],
        },
      },
    },
    {
      id: 'a6e40f1041b06c996f7b2406',
      title: 'Finders Keepers',
      description: [
        'Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.',
        "Remember to use <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code.",
      ],
      challengeSeed: [
        'function findElement(arr, func) {',
        '  var num = 0;',
        '  return num;',
        '}',
        '',
        'findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });',
      ],
      solutions: [
        'function findElement(arr, func) {\n  var num;\n  arr.some(function(e) {\n    if (func(e)) {\n      num = e;\n      return true;\n    }\n  });\n  return num;\n}',
      ],
      tests: [
        "assert.strictEqual(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }), 8, 'message: <code>findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })</code> should return 8.');",
        "assert.strictEqual(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }), undefined, 'message: <code>findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })</code> should return undefined.');",
      ],
      type: 'bonfire',
      MDNlinks: [
        'Array.prototype.filter()',
      ],
      isRequired: true,
      challengeType: 5,
      translations: {
        es: {
          title: 'Buscando la verdad',
          description: [
            'Crea una función que busque dentro de un vector (primer argumento) y que devuelva el primer elemento que pase una prueba de verdad (segundo argumento).',
            "Recuerda utilizar <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Leer-Buscar-Preguntar</a> si te sientes atascado. Intenta programar en pareja. Escribe tu propio código.",
          ],
        },
        fr: {
          title: 'Détecteur de mensonges',
          description: [
            'Crée une fonction qui parcourt un tableau (premier argument) et renvoie le premier élément du tableau qui passe le test (second argument).',
            "N'oublie pas d'utiliser <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Lire-Chercher-Demander</a> si tu es bloqué. Essaye de trouver un partenaire. Écris ton propre code.",
          ],
        },
      },
    },
    {
      id: 'a5deed1811a43193f9f1c841',
      title: 'Drop it',
      description: [
        'Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns <code>true</code>.',
        "The second argument, <code>func</code>, is a function you'll use to test the first elements of the array to decide if you should drop it or not.",
        'Return the rest of the array, otherwise return an empty array.',
        "Remember to use <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code.",
      ],
      challengeSeed: [
        'function dropElements(arr, func) {',
        '  // Drop them elements.',
        '  return arr;',
        '}',
        '',
        'dropElements([1, 2, 3], function(n) {return n < 3; });',
      ],
      solutions: [
        'function dropElements(arr, func) {\n  // Drop them elements.\n  while (arr.length && !func(arr[0])) {\n    arr.shift();\n  }\n  return arr;\n}',
      ],
      tests: [
        "assert.deepEqual(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}), [3, 4], 'message: <code>dropElements([1, 2, 3, 4], function(n) {return n >= 3;})</code> should return <code>[3, 4]</code>.');",
        "assert.deepEqual(dropElements([0, 1, 0, 1], function(n) {return n === 1;}), [1, 0, 1], 'message: <code>dropElements([0, 1, 0, 1], function(n) {return n === 1;})</code> should return <code>[1, 0, 1]</code>.');",
        "assert.deepEqual(dropElements([1, 2, 3], function(n) {return n > 0;}), [1, 2, 3], 'message: <code>dropElements([1, 2, 3], function(n) {return n > 0;})</code> should return <code>[1, 2, 3]</code>.');",
        "assert.deepEqual(dropElements([1, 2, 3, 4], function(n) {return n > 5;}), [], 'message: <code>dropElements([1, 2, 3, 4], function(n) {return n > 5;})</code> should return <code>[]</code>.');",
        "assert.deepEqual(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}), [7, 4], 'message: <code>dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})</code> should return <code>[7, 4]</code>.');",
        "assert.deepEqual(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}), [3, 9, 2], 'message: <code>dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})</code> should return <code>[3, 9, 2]</code>.');",
      ],
      type: 'bonfire',
      MDNlinks: [
        'Arguments object',
        'Array.prototype.shift()',
        'Array.prototype.slice()',
      ],
      isRequired: true,
      challengeType: 5,
      translations: {
        es: {
          title: '¡Fuera de aquí!',
          description: [
            'Toma los elementos contenidos en el vector que se te provee en el primer argumento de la función y elimínalos uno por uno, hasta que la función provista en el segundo argumento devuelva true.',
            'Retorna el resto del vector, de lo contrario retorna un vector vacío.',
            "Recuerda utilizar <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Leer-Buscar-Preguntar</a> si te sientes atascado. Intenta programar en pareja. Escribe tu propio código.",
          ],
        },
        fr: {
          title: 'Laisse tomber',
          description: [
            "Écarte les éléments du tableau (premier argument), en commençant par la gauche, jusqu'à ce la fonction (second argument) renvoie true.",
            'Renvoie le reste du tableau, ou dans le cas contraire un tableau vide',
            "N'oublie pas d'utiliser <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Lire-Chercher-Demander</a> si tu es bloqué. Essaye de trouver un partenaire. Écris ton propre code.",
          ],
        },
      },
    },
    {
      id: 'ab306dbdcc907c7ddfc30830',
      title: 'Steamroller',
      description: [
        'Flatten a nested array. You must account for varying levels of nesting.',
        "Remember to use <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code.",
      ],
      challengeSeed: [
        'function steamrollArray(arr) {',
        "  // I'm a steamroller, baby",
        '  return arr;',
        '}',
        '',
        'steamrollArray([1, [2], [3, [[4]]]]);',
      ],
      solutions: [
        'function steamrollArray(arr) {\n  if (!Array.isArray(arr)) {\n    return [arr];\n  }\n  var out = [];\n  arr.forEach(function(e) {\n    steamrollArray(e).forEach(function(v) {\n      out.push(v);\n    });\n  });\n  return out;\n}',
      ],
      tests: [
        "assert.deepEqual(steamrollArray([[[\"a\"]], [[\"b\"]]]), [\"a\", \"b\"], 'message: <code>steamrollArray([[[\"a\"]], [[\"b\"]]])</code> should return <code>[\"a\", \"b\"]</code>.');",
        "assert.deepEqual(steamrollArray([1, [2], [3, [[4]]]]), [1, 2, 3, 4], 'message: <code>steamrollArray([1, [2], [3, [[4]]]])</code> should return <code>[1, 2, 3, 4]</code>.');",
        "assert.deepEqual(steamrollArray([1, [], [3, [[4]]]]), [1, 3, 4], 'message: <code>steamrollArray([1, [], [3, [[4]]]])</code> should return <code>[1, 3, 4]</code>.');",
        "assert.deepEqual(steamrollArray([1, {}, [3, [[4]]]]), [1, {}, 3, 4], 'message: <code>steamrollArray([1, {}, [3, [[4]]]])</code> should return <code>[1, {}, 3, 4]</code>.');",
      ],
      type: 'bonfire',
      MDNlinks: [
        'Array.isArray()',
      ],
      isRequired: true,
      challengeType: 5,
      translations: {
        es: {
          title: 'Aplanadora',
          description: [
            'Aplana el vector anidado que se te provee. Tu función debe poder aplanar vectores de cualquier forma.',
            "Recuerda utilizar <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Leer-Buscar-Preguntar</a> si te sientes atascado. Intenta programar en pareja. Escribe tu propio código.",
          ],
        },
        fr: {
          title: 'Rouleau compresseur',
          description: [
            'Aplatis le tableau donné. Ta fonction doit pour gérer différentes formes de tableaux.',
            "N'oublie pas d'utiliser <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Lire-Chercher-Demander</a> si tu es bloqué. Essaye de trouver un partenaire. Écris ton propre code.",
          ],
        },
      },
    },
    {
      id: 'a8d97bd4c764e91f9d2bda01',
      title: 'Binary Agents',
      description: [
        'Return an English translated sentence of the passed binary string.',
        'The binary string will be space separated.',
        "Remember to use <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code.",
      ],
      challengeSeed: [
        'function binaryAgent(str) {',
        '  return str;',
        '}',
        '',
        'binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");',
      ],
      solutions: [
        "function binaryAgent(str) {\n  return str.split(' ').map(function(s) { return parseInt(s, 2); }).map(function(b) { return String.fromCharCode(b);}).join('');\n}",
      ],
      tests: [
        "assert.deepEqual(binaryAgent('01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111'), \"Aren't bonfires fun!?\", 'message: <code>binaryAgent(\"01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111\")</code> should return \"Aren&#39;t bonfires fun!?\"');",
        "assert.deepEqual(binaryAgent('01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001'), \"I love FreeCodeCamp!\", 'message: <code>binaryAgent(\"01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001\")</code> should return \"I love FreeCodeCamp!\"');",
      ],
      type: 'bonfire',
      MDNlinks: [
        'String.prototype.charCodeAt()',
        'String.fromCharCode()',
      ],
      isRequired: true,
      challengeType: 5,
      translations: {
        es: {
          title: 'Mensaje secreto',
          description: [
            'Haz que la función devuelva el mensaje en inglés escondido en el código binario de la cadena de texto que se le pasa.',
            'La cadena de texto binaria estará separada por espacios.',
            "Recuerda utilizar <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Leer-Buscar-Preguntar</a> si te sientes atascado. Intenta programar en pareja. Escribe tu propio código.",
          ],
        },
        fr: {
          title: 'Agent binaire',
          description: [
            'Traduis la chaîne binaire donnée en anglais.',
            'La chaîne binaire comporte des espaces.',
            "N'oublie pas d'utiliser <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Lire-Chercher-Demander</a> si tu es bloqué. Essaye de trouver un partenaire. Écris ton propre code.",
          ],
        },
      },
    },
    {
      id: 'a10d2431ad0c6a099a4b8b52',
      title: 'Everything Be True',
      description: [
        'Check if the predicate (second argument) is <dfn>truthy</dfn> on all elements of a collection (first argument).',
        'In other words, you are given an array collection of objects. The predicate <code>pre</code> will be an object property and you need to return <code>true</code> if its value is <code>truthy</code>. Otherwise, return <code>false</code>.',
        'In JavaScript, <code>truthy</code> values are values that translate to <code>true</code> when evaluated in a Boolean context.',
        'Remember, you can access object properties through either dot notation or <code>[]</code> notation.',
        "Remember to use <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code.",
      ],
      challengeSeed: [
        'function truthCheck(collection, pre) {',
        '  // Is everyone being true?',
        '  return pre;',
        '}',
        '',
        'truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");',
      ],
      solutions: [
        'function truthCheck(collection, pre) {\n  // Does everyone have one of these?\n  return collection.every(function(e) { return e[pre]; });\n}',
      ],
      tests: [
        "assert.strictEqual(truthCheck([{\"user\": \"Tinky-Winky\", \"sex\": \"male\"}, {\"user\": \"Dipsy\", \"sex\": \"male\"}, {\"user\": \"Laa-Laa\", \"sex\": \"female\"}, {\"user\": \"Po\", \"sex\": \"female\"}], \"sex\"), true, 'message: <code>truthCheck([{\"user\": \"Tinky-Winky\", \"sex\": \"male\"}, {\"user\": \"Dipsy\", \"sex\": \"male\"}, {\"user\": \"Laa-Laa\", \"sex\": \"female\"}, {\"user\": \"Po\", \"sex\": \"female\"}], \"sex\")</code> should return true.');",
        "assert.strictEqual(truthCheck([{\"user\": \"Tinky-Winky\", \"sex\": \"male\"}, {\"user\": \"Dipsy\"}, {\"user\": \"Laa-Laa\", \"sex\": \"female\"}, {\"user\": \"Po\", \"sex\": \"female\"}], \"sex\"), false, 'message: <code>truthCheck([{\"user\": \"Tinky-Winky\", \"sex\": \"male\"}, {\"user\": \"Dipsy\"}, {\"user\": \"Laa-Laa\", \"sex\": \"female\"}, {\"user\": \"Po\", \"sex\": \"female\"}], \"sex\")</code> should return false.');",
        "assert.strictEqual(truthCheck([{\"user\": \"Tinky-Winky\", \"sex\": \"male\", \"age\": 2}, {\"user\": \"Dipsy\", \"sex\": \"male\", \"age\": 0}, {\"user\": \"Laa-Laa\", \"sex\": \"female\", \"age\": 5}, {\"user\": \"Po\", \"sex\": \"female\", \"age\": 4}], \"age\"), false, 'message: <code>truthCheck([{\"user\": \"Tinky-Winky\", \"sex\": \"male\", \"age\": 0}, {\"user\": \"Dipsy\", \"sex\": \"male\", \"age\": 3}, {\"user\": \"Laa-Laa\", \"sex\": \"female\", \"age\": 5}, {\"user\": \"Po\", \"sex\": \"female\", \"age\": 4}], \"age\")</code> should return false.');",
        "assert.strictEqual(truthCheck([{\"name\": \"Pete\", \"onBoat\": true}, {\"name\": \"Repeat\", \"onBoat\": true}, {\"name\": \"FastFoward\", \"onBoat\": null}], \"onBoat\"), false, 'message: <code>truthCheck([{\"name\": \"Pete\", \"onBoat\": true}, {\"name\": \"Repeat\", \"onBoat\": true}, {\"name\": \"FastFoward\", \"onBoat\": null}], \"onBoat\")</code> should return false');",
        "assert.strictEqual(truthCheck([{\"name\": \"Pete\", \"onBoat\": true}, {\"name\": \"Repeat\", \"onBoat\": true, \"alias\": \"Repete\"}, {\"name\": \"FastFoward\", \"onBoat\": true}], \"onBoat\"), true, 'message: <code>truthCheck([{\"name\": \"Pete\", \"onBoat\": true}, {\"name\": \"Repeat\", \"onBoat\": true, \"alias\": \"Repete\"}, {\"name\": \"FastFoward\", \"onBoat\": true}], \"onBoat\")</code> should return true');",
        "assert.strictEqual(truthCheck([{\"single\": \"yes\"}], \"single\"), true, 'message: <code>truthCheck([{\"single\": \"yes\"}], \"single\")</code> should return true');",
        "assert.strictEqual(truthCheck([{\"single\": \"\"}, {\"single\": \"double\"}], \"single\"), false, 'message: <code>truthCheck([{\"single\": \"\"}, {\"single\": \"double\"}], \"single\")</code> should return false');",
        "assert.strictEqual(truthCheck([{\"single\": \"double\"}, {\"single\": undefined}], \"single\"), false, 'message: <code>truthCheck([{\"single\": \"double\"}, {\"single\": undefined}], \"single\")</code> should return false');",
        "assert.strictEqual(truthCheck([{\"single\": \"double\"}, {\"single\": NaN}], \"single\"), false, 'message: <code>truthCheck([{\"single\": \"double\"}, {\"single\": NaN}], \"single\")</code> should return false');",
      ],
      isRequired: true,
      type: 'bonfire',
      MDNlinks: [
        'Truthy',
        'Falsy',
      ],
      challengeType: 5,
      translations: {
        es: {
          title: 'Que todo sea verdadero',
          description: [
            'Verifica si la función en el segundo argumento devuelve true para todos los elementos de la colección en el primer argumento.',
            'Recuerda que puedes accesar a las propiedades de un objeto, ya sea a través de la notación por punto o de la notación por corchete usando [].',
            "Recuerda utilizar <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Leer-Buscar-Preguntar</a> si te sientes atascado. Intenta programar en pareja. Escribe tu propio código.",
          ],
        },
        fr: {
          title: 'Tout doit être vrai',
          description: [
            'Vérifie que la fonction donnée (second argument) est vraie sur tous les éléments de la collection (premier argument).',
            "Tu peux utiliser un point ou des [] pour accéder aux propritétés de l'objet.",
            "N'oublie pas d'utiliser <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Lire-Chercher-Demander</a> si tu es bloqué. Essaye de trouver un partenaire. Écris ton propre code.",
          ],
        },
      },
    },
    {
      id: 'a97fd23d9b809dac9921074f',
      title: 'Arguments Optional',
      description: [
        'Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.',
        'For example, <code>addTogether(2, 3)</code> should return <code>5</code>, and <code>addTogether(2)</code> should return a function.',
        'Calling this returned function with a single argument will then return the sum:',
        '<code>var sumTwoAnd = addTogether(2);</code>',
        '<code>sumTwoAnd(3)</code> returns <code>5</code>.',
        "If either argument isn't a valid number, return undefined.",
        "Remember to use <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code.",
      ],
      challengeSeed: [
        'function addTogether() {',
        '  return false;',
        '}',
        '',
        'addTogether(2,3);',
      ],
      solutions: [
        "function addTogether() {\n  var a = arguments[0];\n  if (toString.call(a) !== '[object Number]') return;  \n  if (arguments.length === 1) {\n    return function(b) {\n      if (toString.call(b) !== '[object Number]') return;\n      return a + b;\n    };\n  }\n  var b = arguments[1];\n  if (toString.call(b) !== '[object Number]') return;  \n  return a + arguments[1];\n}",
      ],
      tests: [
        "assert.deepEqual(addTogether(2, 3), 5, 'message: <code>addTogether(2, 3)</code> should return 5.');",
        "assert.deepEqual(addTogether(2)(3), 5, 'message: <code>addTogether(2)(3)</code> should return 5.');",
        "assert.isUndefined(addTogether(\"http://bit.ly/IqT6zt\"), 'message: <code>addTogether(\"http://bit.ly/IqT6zt\")</code> should return undefined.');",
        "assert.isUndefined(addTogether(2, \"3\"), 'message: <code>addTogether(2, \"3\")</code> should return undefined.');",
        "assert.isUndefined(addTogether(2)([3]), 'message: <code>addTogether(2)([3])</code> should return undefined.');",
      ],
      type: 'bonfire',
      MDNlinks: [
        'Closures',
        'Arguments object',
      ],
      isRequired: true,
      challengeType: 5,
      translations: {
        es: {
          title: 'Argumentos opcionales',
          description: [
            'Crea una función que sume dos argumentos. Si sólo se le pasa un argumento a la función, haz que devuelva otra función que acepte un argumento y que devuelva la suma correspondiente.',
            'Por ejemplo, <code>add(2, 3)</code> debe devolver <code>5</code>, y <code>add(2)</code> debe devolver una función.',
            'Al llamar esta función con un único argumento devolverá la suma:',
            '<code>var sumTwoAnd = add(2);</code>',
            '<code>sumTwoAnd(3)</code> devuelve <code>5</code>.',
            'Si alguno de los argumentos no es un número válido, haz que devuelva undefined.',
            "Recuerda utilizar <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Leer-Buscar-Preguntar</a> si te sientes atascado. Intenta programar en pareja. Escribe tu propio código.",
          ],
        },
        fr: {
          title: 'Arguments optionnels',
          description: [
            'Crée une fonction qui additionne deux arguments. Si un seul argument est donné, renvoie une fonction qui attend un argument et renvoie la somme.',
            'Par exemple, <code>add(2, 3)</code>, doit renvoyer <code>5</code>, et <code>add(2)</code> doit renvoyer une fonction.',
            'Appeler cette fonction avec un seul argument renvoie la somme:',
            '<code>var sumTwoAnd = add(2);</code>',
            '<code>sumTwoAnd(3)</code> renvoie <code>5</code>.',
            "Si aucun argument n'est un nombre, renvoie undefined.",
            "N'oublie pas d'utiliser <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Lire-Chercher-Demander</a> si tu es bloqué. Essaye de trouver un partenaire. Écris ton propre code.",
          ],
        },
      },
    },
  ],
};
