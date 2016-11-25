module.exports = {
  "name": "Advanced Algorithm Scripting",
  "order": 12,
  "time": "50 hours",
  "helpRoom": "HelpJavaScript",
  "challenges": [
    {
      "id": "aff0395860f5d3034dc0bfc9",
      "title": "Validate US Telephone Numbers",
      "description": [
        "Return <code>true</code> if the passed string is a valid US phone number.",
        "The user may fill out the form field any way they choose as long as it is a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):",
        "<blockquote>555-555-5555\n(555)555-5555\n(555) 555-5555\n555 555 5555\n5555555555\n1 555 555 5555</blockquote>",
        "For this challenge you will be presented with a string such as <code>800-692-7753</code> or <code>8oo-six427676;laskdjf</code>. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is <code>1</code>. Return <code>true</code> if the string is a valid US phone number; otherwise return <code>false</code>.",
        "Remember to use <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code."
      ],
      "challengeSeed": [
        "function telephoneCheck(str) {",
        "  // Good luck!",
        "  return true;",
        "}",
        "",
        "",
        "",
        "telephoneCheck(\"555-555-5555\");"
      ],
      "solutions": [
        "var re = /^([+]?1[\\s]?)?((?:[(](?:[2-9]1[02-9]|[2-9][02-8][0-9])[)][\\s]?)|(?:(?:[2-9]1[02-9]|[2-9][02-8][0-9])[\\s.-]?)){1}([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2}[\\s.-]?){1}([0-9]{4}){1}$/;\n\nfunction telephoneCheck(str) {\n  return re.test(str);\n}\n\ntelephoneCheck(\"555-555-5555\");"
      ],
      "tests": [
        "assert(typeof telephoneCheck(\"555-555-5555\") === \"boolean\", 'message: <code>telephoneCheck(\"555-555-5555\")</code> should return a boolean.');",
        "assert(telephoneCheck(\"1 555-555-5555\") === true, 'message: <code>telephoneCheck(\"1 555-555-5555\")</code> should return true.');",
        "assert(telephoneCheck(\"1 (555) 555-5555\") === true, 'message: <code>telephoneCheck(\"1 (555) 555-5555\")</code> should return true.');",
        "assert(telephoneCheck(\"5555555555\") === true, 'message: <code>telephoneCheck(\"5555555555\")</code> should return true.');",
        "assert(telephoneCheck(\"555-555-5555\") === true, 'message: <code>telephoneCheck(\"555-555-5555\")</code> should return true.');",
        "assert(telephoneCheck(\"(555)555-5555\") === true, 'message: <code>telephoneCheck(\"(555)555-5555\")</code> should return true.');",
        "assert(telephoneCheck(\"1(555)555-5555\") === true, 'message: <code>telephoneCheck(\"1(555)555-5555\")</code> should return true.');",
        "assert(telephoneCheck(\"555-5555\") === false, 'message: <code>telephoneCheck(\"555-5555\")</code> should return false.');",
        "assert(telephoneCheck(\"5555555\") === false, 'message: <code>telephoneCheck(\"5555555\")</code> should return false.');",
        "assert(telephoneCheck(\"1 555)555-5555\") === false, 'message: <code>telephoneCheck(\"1 555)555-5555\")</code> should return false.');",
        "assert(telephoneCheck(\"1 555 555 5555\") === true, 'message: <code>telephoneCheck(\"1 555 555 5555\")</code> should return true.');",
        "assert(telephoneCheck(\"1 456 789 4444\") === true, 'message: <code>telephoneCheck(\"1 456 789 4444\")</code> should return true.');",
        "assert(telephoneCheck(\"123**&!!asdf#\") === false, 'message: <code>telephoneCheck(\"123**&!!asdf#\")</code> should return false.');",
        "assert(telephoneCheck(\"55555555\") === false, 'message: <code>telephoneCheck(\"55555555\")</code> should return false.');",
        "assert(telephoneCheck(\"(6505552368)\") === false, 'message: <code>telephoneCheck(\"(6505552368)\")</code> should return false');",
        "assert(telephoneCheck(\"2 (757) 622-7382\") === false, 'message: <code>telephoneCheck(\"2 (757) 622-7382\")</code> should return false.');",
        "assert(telephoneCheck(\"0 (757) 622-7382\") === false, 'message: <code>telephoneCheck(\"0 (757) 622-7382\")</code> should return false.');",
        "assert(telephoneCheck(\"-1 (757) 622-7382\") === false, 'message: <code>telephoneCheck(\"-1 (757) 622-7382\")</code> should return false');",
        "assert(telephoneCheck(\"2 757 622-7382\") === false, 'message: <code>telephoneCheck(\"2 757 622-7382\")</code> should return false.');",
        "assert(telephoneCheck(\"10 (757) 622-7382\") === false, 'message: <code>telephoneCheck(\"10 (757) 622-7382\")</code> should return false.');",
        "assert(telephoneCheck(\"27576227382\") === false, 'message: <code>telephoneCheck(\"27576227382\")</code> should return false.');",
        "assert(telephoneCheck(\"(275)76227382\") === false, 'message: <code>telephoneCheck(\"(275)76227382\")</code> should return false.');",
        "assert(telephoneCheck(\"2(757)6227382\") === false, 'message: <code>telephoneCheck(\"2(757)6227382\")</code> should return false.');",
        "assert(telephoneCheck(\"2(757)622-7382\") === false, 'message: <code>telephoneCheck(\"2(757)622-7382\")</code> should return false.');",
        "assert(telephoneCheck(\"555)-555-5555\") === false, 'message: <code>telephoneCheck(\"555)-555-5555\")</code> should return false.');",
        "assert(telephoneCheck(\"(555-555-5555\") === false, 'message: <code>telephoneCheck(\"(555-555-5555\")</code> should return false.');",
        "assert(telephoneCheck(\"(555)5(55?)-5555\") === false, 'message: <code>telephoneCheck(\"(555)5(55?)-5555\")</code> should return false.');"
      ],
      "type": "bonfire",
      "MDNlinks": [
        "RegExp"
      ],
      "challengeType": 5,
      "translations": {
        "es": {
          "title": "Valida Números Telefónicos de los EEUU",
          "description": [
            "Haz que la función devuelva true (verdadero) si el texto introducido es un número válido en los EEUU.",
            "El usuario debe llenar el campo del formulario de la forma que desee siempre y cuando sea un número válido en los EEUU. Los números mostrados a continuación tienen formatos válidos en los EEUU:",
            "<blockquote>555-555-5555\n(555)555-5555\n(555) 555-5555\n555 555 5555\n5555555555\n1 555 555 5555</blockquote>",
            "Para esta prueba se te presentará una cadena de texto como por ejemplo: <code>800-692-7753</code> o <code>8oo-six427676;laskdjf</code>. Tu trabajo consiste en validar o rechazar el número telefónico tomando como base cualquier combinación de los formatos anteriormente presentados. El código de área es requrido. Si el código de país es provisto, debes confirmar que este es <code>1</code>. La función debe devolver true si la cadena de texto es un número telefónico válido en los EEUU; de lo contrario, debe devolver false.",
            "Recuerda utilizar <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Read-Search-Ask</a> si te sientes atascado. Intenta programar en pareja. Escribe tu propio código."
          ]
        },
        "it": {
          "title": "Verifica i numeri telefonici degli Stati Uniti",
          "description": [
            "Ritorna <code>true</code> se la stringa passata come argomento è un numero valido negli Stati Uniti.",
            "L'utente può digitare qualunque stringa nel campo di inserimento, purchè sia un numero di telefono valido negli Stati Uniti. Qui sotto alcuni esempi di numeri di telefono validi negli Stati Uniti (fai riferimento ai test per le altre varianti):",
            "<blockquote>555-555-5555\n(555)555-5555\n(555) 555-5555\n555 555 5555\n5555555555\n1 555 555 5555</blockquote>",
            "In questo problema ti saranno presentate delle stringe come <code>800-692-7753</code> o <code>8oo-six427676;laskdjf</code>. Il tuo obiettivo è di validare o rigettare il numero di telefono basato su una qualunque combinazione dei formati specificati sopra. Il prefisso di zona è obbligatorio. Se il prefisso nazionale è presente, devi confermare che corrisponda a <code>1</code>. Ritorna <code>true</code> se la stringa è un numero di telefono valido negli Stati Uniti; altrimenti ritorna <code>false</code>.",
            "Ricorda di usare <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Leggi-Cerca-Chiedi</a> se rimani bloccato. Prova a programmare in coppia. Scrivi il codice da te."
          ]
        }
      }
    },
    {
      "id": "a3f503de51cf954ede28891d",
      "title": "Symmetric Difference",
      "description": [
        "Create a function that takes two or more arrays and returns an array of the <dfn>symmetric difference</dfn> (<code>&xutri;</code> or <code>&oplus;</code>) of the provided arrays.",
        "Given two sets (for example set <code>A = {1, 2, 3}</code> and set <code>B = {2, 3, 4}</code>), the mathematical term \"symmetric difference\" of two sets is the set of elements which are in either of the two sets, but not in both (<code>A &xutri; B = C = {1, 4}</code>). For every additional symmetric difference you take (say on a set <code>D = {2, 3}</code>), you should get the set with elements which are in either of the two the sets but not both (<code>C &xutri; D = {1, 4} &xutri; {2, 3} = {1, 2, 3, 4}</code>). The resulting array must contain only unique values (<em>no duplicates</em>).",
        "Remember to use <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code."
      ],
      "challengeSeed": [
        "function sym(args) {",
        "  return args;",
        "}",
        "",
        "sym([1, 2, 3], [5, 2, 1, 4]);"
      ],
      "solutions": [
        "function sym() {\n  var arrays = [].slice.call(arguments);\n  return arrays.reduce(function (symDiff, arr) {\n    return symDiff.concat(arr).filter(function (val, idx, theArr) {\n      return theArr.indexOf(val) === idx \n        && (symDiff.indexOf(val) === -1 || arr.indexOf(val) === -1);\n    });\n  });\n}\nsym([1, 2, 3], [5, 2, 1, 4]);\n"
      ],
      "tests": [
        "assert.sameMembers(sym([1, 2, 3], [5, 2, 1, 4]), [3, 4, 5], 'message: <code>sym([1, 2, 3], [5, 2, 1, 4])</code> should return <code>[3, 4, 5]</code>.');",
        "assert.equal(sym([1, 2, 3], [5, 2, 1, 4]).length, 3, 'message: <code>sym([1, 2, 3], [5, 2, 1, 4])</code> should contain only three elements.');",
        "assert.sameMembers(sym([1, 2, 3, 3], [5, 2, 1, 4]), [3, 4, 5], 'message: <code>sym([1, 2, 3, 3], [5, 2, 1, 4])</code> should return <code>[3, 4, 5]</code>.');",
        "assert.equal(sym([1, 2, 3, 3], [5, 2, 1, 4]).length, 3, 'message: <code>sym([1, 2, 3, 3], [5, 2, 1, 4])</code> should contain only three elements.');",
        "assert.sameMembers(sym([1, 2, 3], [5, 2, 1, 4, 5]), [3, 4, 5], 'message: <code>sym([1, 2, 3], [5, 2, 1, 4, 5])</code> should return <code>[3, 4, 5]</code>.');",
        "assert.equal(sym([1, 2, 3], [5, 2, 1, 4, 5]).length, 3, 'message: <code>sym([1, 2, 3], [5, 2, 1, 4, 5])</code> should contain only three elements.');",
        "assert.sameMembers(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]), [1, 4, 5], 'message: <code>sym([1, 2, 5], [2, 3, 5], [3, 4, 5])</code> should return <code>[1, 4, 5]</code>');",
        "assert.equal(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]).length, 3, 'message: <code>sym([1, 2, 5], [2, 3, 5], [3, 4, 5])</code> should contain only three elements.');",
        "assert.sameMembers(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]), [1, 4, 5], 'message: <code>sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])</code> should return <code>[1, 4, 5]</code>.');",
        "assert.equal(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]).length, 3, 'message: <code>sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])</code> should contain only three elements.');",
        "assert.sameMembers(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]), [2, 3, 4, 6, 7], 'message: <code>sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])</code> should return <code>[2, 3, 4, 6, 7]</code>.');",
        "assert.equal(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]).length, 5, 'message: <code>sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])</code> should contain only five elements.');",
        "assert.sameMembers(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]), [1, 2, 4, 5, 6, 7, 8, 9], 'message: <code>sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])</code> should return <code>[1, 2, 4, 5, 6, 7, 8, 9]</code>.');",
        "assert.equal(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]).length, 8, 'message: <code>sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])</code> should contain only eight elements.');"
      ],
      "type": "bonfire",
      "MDNlinks": [
        "Array.prototype.reduce()",
        "Symmetric Difference"
      ],
      "challengeType": 5,
      "translations": {
        "es": {
          "title": "Diferencia simétrica",
          "description": [
            "Crea una función que acepte dos o más arreglos y que devuelva un arreglo conteniendo la diferenia simétrica entre ambos",
            "En Matemáticas, el término 'diferencia simétrica' se refiere a los elementos en dos conjuntos que están en el primer conjunto o en el segundo, pero no en ambos.",
            "Recuerda utilizar <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Read-Search-Ask</a> si te sientes atascado. Intenta programar en pareja. Escribe tu propio código."
          ]
        },
        "it": {
          "title": "Differenza simmetrica",
          "description": [
            "Crea una funzione che accetti due o più array e che ritorni un array contenente la <dfn>differenza simmetrica</dfn> (<code>&xutri;</code> o <code>&oplus;</code>) degli stessi.",
            "Dati due insiemi (per esempio l'insieme <code>A = {1, 2, 3}<code> e l'insieme <code>B = {2, 3, 4}</code>, il termine matematico \"differenza simmetrica\" di due insiemi è l'insieme degli elementi che sono in almeno uno dei due insiemi, ma non in entrambi (<code>A &xutri; B = C = {1, 4}</code>). Per ogni differenza simmetrica aggiuntiva che fai (per esempio su un insieme <code>D = {2, 3}</code>), devi prendere l'insieme degli elementi che sono in almeno uno dei due insiemi ma non in entrambi (<code>C &xutri; D = {1, 4} &xutri; {2, 3} = {1, 2, 3, 4}</code>).",
            "Ricorda di usare <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Leggi-Cerca-Chiedi</a> se rimani bloccato. Prova a programmare in coppia. Scrivi il codice da te."
          ]
        }
      }
    },
    {
      "id": "aa2e6f85cab2ab736c9a9b24",
      "title": "Exact Change",
      "description": [
        "Design a cash register drawer function <code>checkCashRegister()</code> that accepts purchase price as the first argument (<code>price</code>), payment as the second argument (<code>cash</code>), and cash-in-drawer (<code>cid</code>) as the third argument.",
        "<code>cid</code> is a 2D array listing available currency.",
        "Return the string <code>\"Insufficient Funds\"</code> if cash-in-drawer is less than the change due or if you cannot return the exact change. Return the string <code>\"Closed\"</code> if cash-in-drawer is equal to the change due.",
        "Otherwise, return change in coin and bills, sorted in highest to lowest order.",
        "Remember to use <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code.",
        "<table class='table table-striped'><tr><th>Currency Unit</th><th>Amount</th></tr><tr><td>Penny</td><td>$0.01 (PENNY)</td></tr><tr><td>Nickel</td><td>$0.05 (NICKEL)</td></tr><tr><td>Dime</td><td>$0.10 (DIME)</td></tr><tr><td>Quarter</td><td>$0.25 (QUARTER)</td></tr><tr><td>Dollar</td><td>$1.00 (DOLLAR)</td></tr><tr><td>Five Dollars</td><td>$5.00 (FIVE)</td></tr><tr><td>Ten Dollars</td><td>$10.00 (TEN)</td></tr><tr><td>Twenty Dollars</td><td>$20.00 (TWENTY)</td></tr><tr><td>One-hundred Dollars</td><td>$100.00 (ONE HUNDRED)</td></tr></table>"
      ],
      "challengeSeed": [
        "function checkCashRegister(price, cash, cid) {",
        "  var change;",
        "  // Here is your change, ma'am.",
        "  return change;",
        "}",
        "",
        "// Example cash-in-drawer array:",
        "// [[\"PENNY\", 1.01],",
        "// [\"NICKEL\", 2.05],",
        "// [\"DIME\", 3.10],",
        "// [\"QUARTER\", 4.25],",
        "// [\"ONE\", 90.00],",
        "// [\"FIVE\", 55.00],",
        "// [\"TEN\", 20.00],",
        "// [\"TWENTY\", 60.00],",
        "// [\"ONE HUNDRED\", 100.00]]",
        "",
        "checkCashRegister(19.50, 20.00, [[\"PENNY\", 1.01], [\"NICKEL\", 2.05], [\"DIME\", 3.10], [\"QUARTER\", 4.25], [\"ONE\", 90.00], [\"FIVE\", 55.00], [\"TEN\", 20.00], [\"TWENTY\", 60.00], [\"ONE HUNDRED\", 100.00]]);"
      ],
      "solutions": [
        "var denom = [\n\t{ name: 'ONE HUNDRED', val: 100.00},\n\t{ name: 'TWENTY', val: 20.00},\n\t{ name: 'TEN', val: 10.00},\n\t{ name: 'FIVE', val: 5.00},\n\t{ name: 'ONE', val: 1.00},\n\t{ name: 'QUARTER', val: 0.25},\n\t{ name: 'DIME', val: 0.10},\n\t{ name: 'NICKEL', val: 0.05},\n\t{ name: 'PENNY', val: 0.01}\n];\n\nfunction checkCashRegister(price, cash, cid) {\n    var change = cash - price;\n    var register = cid.reduce(function(acc, curr) {\n        acc.total += curr[1];\n        acc[curr[0]] = curr[1];\n        return acc;\n    }, {total: 0});\n    if(register.total === change) {\n        return 'Closed';\n    }\n    if(register.total < change) {\n        return 'Insufficient Funds';\n    }\n    var change_arr = denom.reduce(function(acc, curr) {\n        var value = 0;\n        while(register[curr.name] > 0 && change >= curr.val) {\n           change -= curr.val;\n           register[curr.name] -= curr.val;\n           value += curr.val;\n           change = Math.round(change * 100) / 100;\n        }\n        if(value > 0) {\n            acc.push([ curr.name, value ]);\n        }\n        return acc;\n    }, []);\n  if(change_arr.length < 1 || change > 0) {\n    return \"Insufficient Funds\";\n  }\n  return change_arr;\n}"
      ],
      "tests": [
        "assert.isArray(checkCashRegister(19.50, 20.00, [[\"PENNY\", 1.01], [\"NICKEL\", 2.05], [\"DIME\", 3.10], [\"QUARTER\", 4.25], [\"ONE\", 90.00], [\"FIVE\", 55.00], [\"TEN\", 20.00], [\"TWENTY\", 60.00], [\"ONE HUNDRED\", 100.00]]), 'message: <code>checkCashRegister(19.50, 20.00, [[\"PENNY\", 1.01], [\"NICKEL\", 2.05], [\"DIME\", 3.10], [\"QUARTER\", 4.25], [\"ONE\", 90.00], [\"FIVE\", 55.00], [\"TEN\", 20.00], [\"TWENTY\", 60.00], [\"ONE HUNDRED\", 100.00]])</code> should return an array.');",
        "assert.isString(checkCashRegister(19.50, 20.00, [[\"PENNY\", 0.01], [\"NICKEL\", 0], [\"DIME\", 0], [\"QUARTER\", 0], [\"ONE\", 0], [\"FIVE\", 0], [\"TEN\", 0], [\"TWENTY\", 0], [\"ONE HUNDRED\", 0]]), 'message: <code>checkCashRegister(19.50, 20.00, [[\"PENNY\", 0.01], [\"NICKEL\", 0], [\"DIME\", 0], [\"QUARTER\", 0], [\"ONE\", 0], [\"FIVE\", 0], [\"TEN\", 0], [\"TWENTY\", 0], [\"ONE HUNDRED\", 0]])</code> should return a string.');",
        "assert.isString(checkCashRegister(19.50, 20.00, [[\"PENNY\", 0.50], [\"NICKEL\", 0], [\"DIME\", 0], [\"QUARTER\", 0], [\"ONE\", 0], [\"FIVE\", 0], [\"TEN\", 0], [\"TWENTY\", 0], [\"ONE HUNDRED\", 0]]), 'message: <code>checkCashRegister(19.50, 20.00, [[\"PENNY\", 0.50], [\"NICKEL\", 0], [\"DIME\", 0], [\"QUARTER\", 0], [\"ONE\", 0], [\"FIVE\", 0], [\"TEN\", 0], [\"TWENTY\", 0], [\"ONE HUNDRED\", 0]])</code> should return a string.');",
        "assert.deepEqual(checkCashRegister(19.50, 20.00, [[\"PENNY\", 1.01], [\"NICKEL\", 2.05], [\"DIME\", 3.10], [\"QUARTER\", 4.25], [\"ONE\", 90.00], [\"FIVE\", 55.00], [\"TEN\", 20.00], [\"TWENTY\", 60.00], [\"ONE HUNDRED\", 100.00]]), [[\"QUARTER\", 0.50]], 'message: <code>checkCashRegister(19.50, 20.00, [[\"PENNY\", 1.01], [\"NICKEL\", 2.05], [\"DIME\", 3.10], [\"QUARTER\", 4.25], [\"ONE\", 90.00], [\"FIVE\", 55.00], [\"TEN\", 20.00], [\"TWENTY\", 60.00], [\"ONE HUNDRED\", 100.00]])</code> should return <code>[[\"QUARTER\", 0.50]]</code>.');",
        "assert.deepEqual(checkCashRegister(3.26, 100.00, [[\"PENNY\", 1.01], [\"NICKEL\", 2.05], [\"DIME\", 3.10], [\"QUARTER\", 4.25], [\"ONE\", 90.00], [\"FIVE\", 55.00], [\"TEN\", 20.00], [\"TWENTY\", 60.00], [\"ONE HUNDRED\", 100.00]]), [[\"TWENTY\", 60.00], [\"TEN\", 20.00], [\"FIVE\", 15.00], [\"ONE\", 1.00], [\"QUARTER\", 0.50], [\"DIME\", 0.20], [\"PENNY\", 0.04]], 'message: <code>checkCashRegister(3.26, 100.00, [[\"PENNY\", 1.01], [\"NICKEL\", 2.05], [\"DIME\", 3.10], [\"QUARTER\", 4.25], [\"ONE\", 90.00], [\"FIVE\", 55.00], [\"TEN\", 20.00], [\"TWENTY\", 60.00], [\"ONE HUNDRED\", 100.00]])</code> should return <code>[[\"TWENTY\", 60.00], [\"TEN\", 20.00], [\"FIVE\", 15.00], [\"ONE\", 1.00], [\"QUARTER\", 0.50], [\"DIME\", 0.20], [\"PENNY\", 0.04]]</code>.');",
        "assert.deepEqual(checkCashRegister(19.50, 20.00, [[\"PENNY\", 0.01], [\"NICKEL\", 0], [\"DIME\", 0], [\"QUARTER\", 0], [\"ONE\", 0], [\"FIVE\", 0], [\"TEN\", 0], [\"TWENTY\", 0], [\"ONE HUNDRED\", 0]]), \"Insufficient Funds\", 'message: <code>checkCashRegister(19.50, 20.00, [[\"PENNY\", 0.01], [\"NICKEL\", 0], [\"DIME\", 0], [\"QUARTER\", 0], [\"ONE\", 0], [\"FIVE\", 0], [\"TEN\", 0], [\"TWENTY\", 0], [\"ONE HUNDRED\", 0]])</code> should return \"Insufficient Funds\".');",
        "assert.deepEqual(checkCashRegister(19.50, 20.00, [[\"PENNY\", 0.01], [\"NICKEL\", 0], [\"DIME\", 0], [\"QUARTER\", 0], [\"ONE\", 1.00], [\"FIVE\", 0], [\"TEN\", 0], [\"TWENTY\", 0], [\"ONE HUNDRED\", 0]]), \"Insufficient Funds\", 'message: <code>checkCashRegister(19.50, 20.00, [[\"PENNY\", 0.01], [\"NICKEL\", 0], [\"DIME\", 0], [\"QUARTER\", 0], [\"ONE\", 1.00], [\"FIVE\", 0], [\"TEN\", 0], [\"TWENTY\", 0], [\"ONE HUNDRED\", 0]])</code> should return \"Insufficient Funds\".');",
        "assert.deepEqual(checkCashRegister(19.50, 20.00, [[\"PENNY\", 0.50], [\"NICKEL\", 0], [\"DIME\", 0], [\"QUARTER\", 0], [\"ONE\", 0], [\"FIVE\", 0], [\"TEN\", 0], [\"TWENTY\", 0], [\"ONE HUNDRED\", 0]]), \"Closed\", 'message: <code>checkCashRegister(19.50, 20.00, [[\"PENNY\", 0.50], [\"NICKEL\", 0], [\"DIME\", 0], [\"QUARTER\", 0], [\"ONE\", 0], [\"FIVE\", 0], [\"TEN\", 0], [\"TWENTY\", 0], [\"ONE HUNDRED\", 0]])</code> should return \"Closed\".');"
      ],
      "type": "bonfire",
      "MDNlinks": [
        "Global Object",
        "Floating Point Guide"
      ],
      "challengeType": 5,
      "translations": {
        "es": {
          "title": "Cambio exacto",
          "description": [
            "Crea una función que simule una caja registradora que acepte el precio de compra como el primer argumento, la cantidad recibida como el segundo argumento, y la cantidad de dinero disponible en la registradora (cid) como tercer argumento",
            "cid es un arreglo bidimensional que lista la cantidad de dinero disponible",
            "La función debe devolver la cadena de texto \"Insufficient Funds\" si el cid es menor al cambio requerido. También debe devolver \"Closed\" si el cid es igual al cambio",
            "De no ser el caso, devuelve el cambio en monedas y billetes, ordenados de mayor a menor denominación.",
            "Recuerda utilizar <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Read-Search-Ask</a> si te sientes atascado. Intenta programar en pareja. Escribe tu propio código."
          ]
        },
        "it": {
          "title": "Cambio esatto",
          "description": [
            "Scrivi una funzione che simuli un registro di cassa chiamata <code>checkCashRegister()</code> che accetti il prezzo degli articoli come primo argomento (<code>price</code>), la somma pagata (<code>cash</code>), e la somma disponibile nel registratore di cassa (<code>cid</code>) come terzo argomento.",
            "<code>cid</code> è un array a due dimensioni che contiene la quantità di monete e banconote disponibili.",
            "Ritorna la stringa <code>\"Insufficient Funds\"</code> se la quantità di denaro disponibile nel registratore di cassa non è abbastanza per restituire il resto. Ritorna la stringa <code>\"Closed\"</code> se il denaro disponibile è esattamente uguale al resto.",
            "Altrimenti, ritorna il resto in monete e banconote, ordinate da quelle con valore maggiore a quelle con valore minore.",
            "Ricorda di usare <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Leggi-Cerca-Chiedi</a> se rimani bloccato. Prova a programmare in coppia. Scrivi il codice da te."
          ]
        }
      }
    },
    {
      "id": "a56138aff60341a09ed6c480",
      "title": "Inventory Update",
      "description": [
        "Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in <code>arr1</code>). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.",
        "Remember to use <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code."
      ],
      "challengeSeed": [
        "function updateInventory(arr1, arr2) {",
        "    // All inventory must be accounted for or you're fired!",
        "    return arr1;",
        "}",
        "",
        "// Example inventory lists",
        "var curInv = [",
        "    [21, \"Bowling Ball\"],",
        "    [2, \"Dirty Sock\"],",
        "    [1, \"Hair Pin\"],",
        "    [5, \"Microphone\"]",
        "];",
        "",
        "var newInv = [",
        "    [2, \"Hair Pin\"],",
        "    [3, \"Half-Eaten Apple\"],",
        "    [67, \"Bowling Ball\"],",
        "    [7, \"Toothpaste\"]",
        "];",
        "",
        "updateInventory(curInv, newInv);"
      ],
      "solutions": [
        "function updateInventory(arr1, arr2) {\n  arr2.forEach(function(item) {\n    createOrUpdate(arr1, item);\n  });\n  // All inventory must be accounted for or you're fired!\n  return arr1;\n}\n\nfunction createOrUpdate(arr1, item) {\n  var index = -1;\n  while (++index < arr1.length) {\n    if (arr1[index][1] === item[1]) {\n      arr1[index][0] += item[0];\n      return;\n    }\n    if (arr1[index][1] > item[1]) {\n      break;\n    }\n  }\n  arr1.splice(index, 0, item);\n}\n\n// Example inventory lists\nvar curInv = [\n    [21, 'Bowling Ball'],\n    [2, 'Dirty Sock'],\n    [1, 'Hair Pin'],\n    [5, 'Microphone']\n];\n\nvar newInv = [\n    [2, 'Hair Pin'],\n    [3, 'Half-Eaten Apple'],\n    [67, 'Bowling Ball'],\n    [7, 'Toothpaste']\n];\n\nupdateInventory(curInv, newInv);\n"
      ],
      "tests": [
        "assert.isArray(updateInventory([[21, \"Bowling Ball\"], [2, \"Dirty Sock\"], [1, \"Hair Pin\"], [5, \"Microphone\"]], [[2, \"Hair Pin\"], [3, \"Half-Eaten Apple\"], [67, \"Bowling Ball\"], [7, \"Toothpaste\"]]), 'message: The function <code>updateInventory</code> should return an array.');",
        "assert.equal(updateInventory([[21, \"Bowling Ball\"], [2, \"Dirty Sock\"], [1, \"Hair Pin\"], [5, \"Microphone\"]], [[2, \"Hair Pin\"], [3, \"Half-Eaten Apple\"], [67, \"Bowling Ball\"], [7, \"Toothpaste\"]]).length, 6, 'message: <code>updateInventory([[21, \"Bowling Ball\"], [2, \"Dirty Sock\"], [1, \"Hair Pin\"], [5, \"Microphone\"]], [[2, \"Hair Pin\"], [3, \"Half-Eaten Apple\"], [67, \"Bowling Ball\"], [7, \"Toothpaste\"]]).length</code> should return an array with a length of 6.');",
        "assert.deepEqual(updateInventory([[21, \"Bowling Ball\"], [2, \"Dirty Sock\"], [1, \"Hair Pin\"], [5, \"Microphone\"]], [[2, \"Hair Pin\"], [3, \"Half-Eaten Apple\"], [67, \"Bowling Ball\"], [7, \"Toothpaste\"]]), [[88, \"Bowling Ball\"], [2, \"Dirty Sock\"], [3, \"Hair Pin\"], [3, \"Half-Eaten Apple\"], [5, \"Microphone\"], [7, \"Toothpaste\"]], 'message: <code>updateInventory([[21, \"Bowling Ball\"], [2, \"Dirty Sock\"], [1, \"Hair Pin\"], [5, \"Microphone\"]], [[2, \"Hair Pin\"], [3, \"Half-Eaten Apple\"], [67, \"Bowling Ball\"], [7, \"Toothpaste\"]])</code> should return <code>[[88, \"Bowling Ball\"], [2, \"Dirty Sock\"], [3, \"Hair Pin\"], [3, \"Half-Eaten Apple\"], [5, \"Microphone\"], [7, \"Toothpaste\"]]</code>.');",
        "assert.deepEqual(updateInventory([[21, \"Bowling Ball\"], [2, \"Dirty Sock\"], [1, \"Hair Pin\"], [5, \"Microphone\"]], []), [[21, \"Bowling Ball\"], [2, \"Dirty Sock\"], [1, \"Hair Pin\"], [5, \"Microphone\"]], 'message: <code>updateInventory([[21, \"Bowling Ball\"], [2, \"Dirty Sock\"], [1, \"Hair Pin\"], [5, \"Microphone\"]], [])</code> should return <code>[[21, \"Bowling Ball\"], [2, \"Dirty Sock\"], [1, \"Hair Pin\"], [5, \"Microphone\"]]</code>.');",
        "assert.deepEqual(updateInventory([], [[2, \"Hair Pin\"], [3, \"Half-Eaten Apple\"], [67, \"Bowling Ball\"], [7, \"Toothpaste\"]]), [[67, \"Bowling Ball\"], [2, \"Hair Pin\"], [3, \"Half-Eaten Apple\"], [7, \"Toothpaste\"]], 'message: <code>updateInventory([], [[2, \"Hair Pin\"], [3, \"Half-Eaten Apple\"], [67, \"Bowling Ball\"], [7, \"Toothpaste\"]])</code> should return <code>[[67, \"Bowling Ball\"], [2, \"Hair Pin\"], [3, \"Half-Eaten Apple\"], [7, \"Toothpaste\"]]</code>.');",
        "assert.deepEqual(updateInventory([[0, \"Bowling Ball\"], [0, \"Dirty Sock\"], [0, \"Hair Pin\"], [0, \"Microphone\"]], [[1, \"Hair Pin\"], [1, \"Half-Eaten Apple\"], [1, \"Bowling Ball\"], [1, \"Toothpaste\"]]), [[1, \"Bowling Ball\"], [0, \"Dirty Sock\"], [1, \"Hair Pin\"], [1, \"Half-Eaten Apple\"], [0, \"Microphone\"], [1, \"Toothpaste\"]], 'message: <code>updateInventory([[0, \"Bowling Ball\"], [0, \"Dirty Sock\"], [0, \"Hair Pin\"], [0, \"Microphone\"]], [[1, \"Hair Pin\"], [1, \"Half-Eaten Apple\"], [1, \"Bowling Ball\"], [1, \"Toothpaste\"]])</code> should return <code>[[1, \"Bowling Ball\"], [0, \"Dirty Sock\"], [1, \"Hair Pin\"], [1, \"Half-Eaten Apple\"], [0, \"Microphone\"], [1, \"Toothpaste\"]]</code>.');"
      ],
      "type": "bonfire",
      "MDNlinks": [
        "Global Array Object"
      ],
      "challengeType": 5,
      "translations": {
        "es": {
          "title": "Actualizando el inventario",
          "description": [
            "Compara y actualiza el inventario actual, almacenado en un arreglo bidimensional, contra otro arreglo bidimensional de inventario nuevo. Actualiza las cantidades en el inventario actual y, en caso de recibir una nueva mercancía, añade su nombre y la cantidad recibida al arreglo del inventario en orden alfabético.",
            "Recuerda utilizar <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Read-Search-Ask</a> si te sientes atascado. Intenta programar en pareja. Escribe tu propio código."
          ]
        },
        "it": {
          "title": "Aggiornamento dell'inventario",
          "description": [
            "Confronta e aggiorna l'inventario, contenuto in un array bidimensionale, con un secondo array bidimensionale relativo ad una nuova consegna. Aggiorna le quantità disponibili in inventario (dentro <code>arr1</code>). Se uno degli articoli non è presente nell'inventario, aggiungi allo stesso il nuovo articolo e la sua quantità. Ritorna un array con l'inventario aggiornato, che deve essere ordinato alfabeticamente per articolo.",
            "Ricorda di usare <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Leggi-Cerca-Chiedi</a> se rimani bloccato. Prova a programmare in coppia. Scrivi il codice da te."
          ]
        }
      }
    },
    {
      "id": "a7bf700cd123b9a54eef01d5",
      "title": "No repeats please",
      "description": [
        "Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.",
        "For example, <code>aab</code> should return 2 because it has 6 total permutations (<code>aab</code>, <code>aab</code>, <code>aba</code>, <code>aba</code>, <code>baa</code>, <code>baa</code>), but only 2 of them (<code>aba</code> and <code>aba</code>) don't have the same letter (in this case <code>a</code>) repeating.",
        "Remember to use <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code."
      ],
      "challengeSeed": [
        "function permAlone(str) {",
        "  return str;",
        "}",
        "",
        "permAlone('aab');"
      ],
      "solutions": [
        "function permAlone(str) {\n  return permutor(str).filter(function(perm) {\n    return !perm.match(/(.)\\1/g);\n  }).length;\n}\n\nfunction permutor(str) {\n  // http://staff.roguecc.edu/JMiller/JavaScript/permute.html\n  //permArr: Global array which holds the list of permutations\n  //usedChars: Global utility array which holds a list of \"currently-in-use\" characters\n  var permArr = [], usedChars = [];\n  function permute(input) {\n    //convert input into a char array (one element for each character)\n    var i, ch, chars = input.split(\"\");\n    for (i = 0; i < chars.length; i++) {\n      //get and remove character at index \"i\" from char array\n      ch = chars.splice(i, 1);\n      //add removed character to the end of used characters\n      usedChars.push(ch);\n      //when there are no more characters left in char array to add, add used chars to list of permutations\n      if (chars.length === 0) permArr[permArr.length] = usedChars.join(\"\");\n      //send characters (minus the removed one from above) from char array to be permuted\n      permute(chars.join(\"\"));\n      //add removed character back into char array in original position\n      chars.splice(i, 0, ch);\n      //remove the last character used off the end of used characters array\n      usedChars.pop();\n    }\n  }\n  permute(str);\n  return permArr;\n}\n\npermAlone('aab');\n"
      ],
      "tests": [
        "assert.isNumber(permAlone('aab'), 'message: <code>permAlone(\"aab\")</code> should return a number.');",
        "assert.strictEqual(permAlone('aab'), 2, 'message: <code>permAlone(\"aab\")</code> should return 2.');",
        "assert.strictEqual(permAlone('aaa'), 0, 'message: <code>permAlone(\"aaa\")</code> should return 0.');",
        "assert.strictEqual(permAlone('aabb'), 8, 'message: <code>permAlone(\"aabb\")</code> should return 8.');",
        "assert.strictEqual(permAlone('abcdefa'), 3600, 'message: <code>permAlone(\"abcdefa\")</code> should return 3600.');",
        "assert.strictEqual(permAlone('abfdefa'), 2640, 'message: <code>permAlone(\"abfdefa\")</code> should return 2640.');",
        "assert.strictEqual(permAlone('zzzzzzzz'), 0, 'message: <code>permAlone(\"zzzzzzzz\")</code> should return 0.');",
        "assert.strictEqual(permAlone('a'), 1, 'message: <code>permAlone(\"a\")</code> should return 1.');",
        "assert.strictEqual(permAlone('aaab'), 0, 'message: <code>permAlone(\"aaab\")</code> should return 0.');",
        "assert.strictEqual(permAlone('aaabb'), 12, 'message: <code>permAlone(\"aaabb\")</code> should return 12.');"
      ],
      "type": "bonfire",
      "MDNlinks": [
        "Permutations",
        "RegExp"
      ],
      "challengeType": 5,
      "translations": {
        "es": {
          "title": "Sin repeticiones, por favor",
          "description": [
            "Crea una función que devuelva el número total de permutaciones de las letras en la cadena de texto provista, en las cuales no haya letras consecutivas repetidas",
            "Por ejemplo, 'aab' debe retornar 2 porque, del total de 6 permutaciones posibles, solo 2 de ellas no tienen repetida la misma letra (en este caso 'a').",
            "Recuerda utilizar <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Read-Search-Ask</a> si te sientes atascado. Intenta programar en pareja. Escribe tu propio código."
          ]
        },
        "it": {
          "title": "Niente ripetizioni, per favore",
          "description": [
            "Ritorna il numero totale di permutazioni della stringa passata che non hanno lettere consecutive riptetute. Assumi che tutti i caratteri nella stringa passata siano unici.",
            "Per esempio, <code>aab</code> deve ritornare 2, perchè la stringa ha 6 permutazioni possibili in totale (<code>aab</code>, <code>aab</code>, <code>aba</code>, <code>aba</code>, <code>baa</code>, <code>baa</code>), ma solo 2 di loro (<code>aba</code> e <code>aba</code>) non contengono la stessa lettera (in questo caso <code>a</code> ripetuta).",
            "Ricorda di usare <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Leggi-Cerca-Chiedi</a> se rimani bloccato. Prova a programmare in coppia. Scrivi il codice da te."
          ]
        }
      }
    },
    {
      "id": "a19f0fbe1872186acd434d5a",
      "title": "Friendly Date Ranges",
      "description": [
        "Convert a date range consisting of two dates formatted as <code>YYYY-MM-DD</code> into a more readable format.",
        "The friendly display should use month names instead of numbers and ordinal dates instead of cardinal (<code>1st</code> instead of <code>1</code>).",
        "Do not display information that is redundant or that can be inferred by the user: if the date range ends in <em>less than a year</em> from when it begins, do not display the <em>ending year</em>.",
        "Additionally, if the date range begins in the <em>current year</em> (i.e. it is currently the year 2016) and ends within one year, the year should not be displayed at the <em>beginning</em> of the friendly range.",
        "If the range ends in the <em>same month</em> that it begins, do not display the <em>ending year or month</em>.",
        "Examples:",
        "<code>makeFriendlyDates([\"2016-07-01\", \"2016-07-04\"])</code> should return <code>[\"July 1st\",\"4th\"]</code>",
        "<code>makeFriendlyDates([\"2016-07-01\", \"2018-07-04\"])</code> should return <code>[\"July 1st, 2016\", \"July 4th, 2018\"]</code>.",
        "Remember to use <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code."
      ],
      "challengeSeed": [
        "function makeFriendlyDates(arr) {",
        "  return arr;",
        "}",
        "",
        "makeFriendlyDates(['2016-07-01', '2016-07-04']);"
      ],
      "solutions": [
        "function makeFriendlyDates(str) {\n  var thisYear = new Date().getFullYear();\n  var dates = str.map(function(s) {return s.split('-').map(Number);});\n  var start = dates[0];\n  var end = dates[1];\n  if (str[0] === str[1]) {\n     return [readable(start)];\n  }\n  if (start[0] !== end[0]) {\n    if (start[0] + 1 === end[0]){\n      if (start[1] > end[1]){\n        end[0] = undefined;\n      }\n      if (start[1] === end[1] && start[2] > end[2]){\n        end[0] = undefined;\n      }\n      if (start[0] === thisYear){\n        start[0] = undefined;\n      }\n    }\n    return dates.map(readable);\n  }\n  end[0] = undefined;\n  if (start[0] === thisYear){\n    start[0] = undefined;\n  }\n  if (start[1] === end[1]) {\n    end[1] = undefined;\n  }\n  return dates.map(readable);\n}\n\nfunction readable(arr) {\n  var ordD = arr[2] + nth(arr[2]);\n  if (!arr[1]) {\n    return ordD;\n  }\n  return MONTH[arr[1]] + \" \" + ordD + (!arr[0] ? \"\" : \", \" + arr[0]);\n}\n\nvar MONTH = {1: \"January\",\n             2: \"February\",\n             3: \"March\",\n             4: \"April\",\n             5: \"May\",\n             6: \"June\",\n             7: \"July\",\n             8: \"August\",\n             9: \"September\",\n             10: \"October\",\n             11: \"November\",\n             12: \"December\"};\n\nfunction nth(d) {\n  if(d>3 && d<21) return 'th';\n  switch (d % 10) {\n    case 1: return \"st\";\n    case 2: return \"nd\";\n    case 3: return \"rd\";\n    default: return \"th\";\n  }\n}"
      ],
      "tests": [
        "assert.deepEqual(makeFriendlyDates(['2016-07-01', '2016-07-04']), ['July 1st','4th'], 'message: <code>makeFriendlyDates([\"2016-07-01\", \"2016-07-04\"])</code> should return <code>[\"July 1st\",\"4th\"]</code>.');",
        "assert.deepEqual(makeFriendlyDates(['2016-12-01', '2017-02-03']), ['December 1st','February 3rd'], 'message: <code>makeFriendlyDates([\"2016-12-01\", \"2017-02-03\"])</code> should return <code>[\"December 1st\",\"February 3rd\"]</code>.');",
        "assert.deepEqual(makeFriendlyDates(['2016-12-01', '2018-02-03']), ['December 1st, 2016','February 3rd, 2018'], 'message: <code>makeFriendlyDates([\"2016-12-01\", \"2018-02-03\"])</code> should return <code>[\"December 1st, 2016\",\"February 3rd, 2018\"]</code>.');",
        "assert.deepEqual(makeFriendlyDates(['2017-03-01', '2017-05-05']), ['March 1st, 2017','May 5th'], 'message: <code>makeFriendlyDates([\"2017-03-01\", \"2017-05-05\"])</code> should return <code>[\"March 1st, 2017\",\"May 5th\"]</code>');",
        "assert.deepEqual(makeFriendlyDates(['2018-01-13', '2018-01-13']), ['January 13th, 2018'], 'message: <code>makeFriendlyDates([\"2018-01-13\", \"2018-01-13\"])</code> should return <code>[\"January 13th, 2018\"]</code>.');",
        "assert.deepEqual(makeFriendlyDates(['2022-09-05', '2023-09-04']), ['September 5th, 2022','September 4th'], 'message: <code>makeFriendlyDates([\"2022-09-05\", \"2023-09-04\"])</code> should return <code>[\"September 5th, 2022\",\"September 4th\"]</code>.');",
        "assert.deepEqual(makeFriendlyDates(['2022-09-05', '2023-09-05']), ['September 5th, 2022','September 5th, 2023'], 'message: <code>makeFriendlyDates([\"2022-09-05\", \"2023-09-05\"])</code> should return <code>[\"September 5th, 2022\",\"September 5th, 2023\"]</code>.');"
      ],
      "type": "bonfire",
      "MDNlinks": [
        "String.prototype.split()",
        "String.prototype.substr()",
        "parseInt()"
      ],
      "challengeType": 5,
      "translations": {
        "es": {
          "title": "Rangos de fechas amigables",
          "description": [
            "Convierte un rango de fecha que conste de dos fechas en formato AAAA-MM-DD a un formato más legible",
            "",
            "La presentación amigable debería usar nombres de meses en inglés en lugar de números y fechas ordinales en lugar de cardinales (\"1st\" en lugar de \"1\").",
            "No presentes información redundante o que pueda ser inferida por el usuario: si el rango de fechas termina en menos de un año desde la fecha incial, no presentes el año final.  Si el rango termina en el mismo mes de la fecha inicial, no presentes ni el mes ni el año final.",
            "Además, si el rango de fechas comienza en el año actual y termina en un año o menos, no debes presentar el año al comienzo del rango amigable."
          ]
        },
        "it": {
          "title": "Intervalli di date leggibili",
          "description": [
            "Converti un intervallo di date composto da due date in formato <code>YYYY-MM-DD</code> in un formato più leggibile.",
            "Il formato leggibile deve usare i nomi dei mesi (in inglese) e le i numeri dei giorni in formato ordinale invece che cardinale (sempre in inglese. Ad esempio <code>1st</code> invece di <code>1</code>).",
            "Non mostrare informazioni ridondanti o che siano ricavabili dall'utente: se l'intervallo di date termina in <em>meno di un anno</em> da quando inizia, non mostrare l'<em>anno in cui l'intervallo termina</em>.",
            "In più, se l'intervallo di date incomincia nell'<em>anno corrente</em> (siamo nell'anno 2016) e finisce nel giro di un anno, l'anno non deve essere mostrato all'<em>inizio</em> del risultato.",
            "Se l'intervallo di date finisce nello <em>stesso mese</em> in cui incomincia, non mostrare l'<em>anno di termine nè il mese</em>.",
            "Esempi:",
            "<code>makeFriendlyDates([\"2016-07-01\", \"2016-07-04\"])</code> deve ritornare <code>[\"July 1st\",\"4th\"]</code>",
            "<code>makeFriendlyDates([\"2016-07-01\", \"2018-07-04\"])</code> deve ritornare <code>[\"July 1st, 2016\", \"July 4th, 2018\"]</code>.",
            "Ricorda di usare <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Leggi-Cerca-Chiedi</a> se rimani bloccato. Prova a programmare in coppia. Scrivi il codice da te."
          ]
        }
      }
    },
    {
      "id": "a2f1d72d9b908d0bd72bb9f6",
      "title": "Make a Person",
      "description": [
        "Fill in the object constructor with the following methods below:",
        "<blockquote>getFirstName()\ngetLastName()\ngetFullName()\nsetFirstName(first)\nsetLastName(last)\nsetFullName(firstAndLast)</blockquote>",
        "Run the tests to see the expected output for each method.",
        "The methods that take an argument must accept only one argument and it has to be a string.",
        "These methods must be the only available means of interacting with the object.",
        "Remember to use <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code."
      ],
      "challengeSeed": [
        "function Person(firstAndLast) {",
        "    return firstAndLast;",
        "};",
        "",
        "var bob = new Person('Bob Ross');",
        "bob.getFullName();"
      ],
      "solutions": [
        "function Person(firstAndLast) {\n\n  var firstName, lastName;\n\n  function updateName(str) {    \n    firstName = str.split(\" \")[0];\n    lastName = str.split(\" \")[1];    \n  }\n\n  updateName(firstAndLast);\n\n  this.getFirstName = function(){\n    return firstName;\n  };\n  \n  this.getLastName = function(){\n    return lastName;\n  };\n  \n  this.getFullName = function(){\n    return firstName + \" \" + lastName;\n  };\n  \n  this.setFirstName = function(str){\n    firstName = str;\n  };\n  \n\n  this.setLastName = function(str){\n    lastName = str;\n  };\n  \n  this.setFullName = function(str){\n    updateName(str);\n  };\n};\n\nvar bob = new Person('Bob Ross');\nbob.getFullName();"
      ],
      "tests": [
        "assert.deepEqual(Object.keys(bob).length, 6, 'message: <code>Object.keys(bob).length</code> should return 6.');",
        "assert.deepEqual(bob instanceof Person, true, 'message: <code>bob instanceof Person</code> should return true.');",
        "assert.deepEqual(bob.firstName, undefined, 'message: <code>bob.firstName</code> should return undefined.');",
        "assert.deepEqual(bob.lastName, undefined, 'message: <code>bob.lastName</code> should return undefined.');",
        "assert.deepEqual(bob.getFirstName(), 'Bob', 'message: <code>bob.getFirstName()</code> should return \"Bob\".');",
        "assert.deepEqual(bob.getLastName(), 'Ross', 'message: <code>bob.getLastName()</code> should return \"Ross\".');",
        "assert.deepEqual(bob.getFullName(), 'Bob Ross', 'message: <code>bob.getFullName()</code> should return \"Bob Ross\".');",
        "assert.strictEqual((function () { bob.setFirstName(\"Haskell\"); return bob.getFullName(); })(), 'Haskell Ross', 'message: <code>bob.getFullName()</code> should return \"Haskell Ross\" after <code>bob.setFirstName(\"Haskell\")</code>.');",
        "assert.strictEqual((function () { var _bob=new Person('Haskell Ross'); _bob.setLastName(\"Curry\"); return _bob.getFullName(); })(), 'Haskell Curry', 'message: <code>bob.getFullName()</code> should return \"Haskell Curry\" after <code>bob.setLastName(\"Curry\")</code>.');",
        "assert.strictEqual((function () { bob.setFullName(\"Haskell Curry\"); return bob.getFullName(); })(), 'Haskell Curry', 'message: <code>bob.getFullName()</code> should return \"Haskell Curry\" after <code>bob.setFullName(\"Haskell Curry\")</code>.');",
        "assert.strictEqual((function () { bob.setFullName(\"Haskell Curry\"); return bob.getFirstName(); })(), 'Haskell', 'message: <code>bob.getFirstName()</code> should return \"Haskell\" after <code>bob.setFullName(\"Haskell Curry\")</code>.');",
        "assert.strictEqual((function () { bob.setFullName(\"Haskell Curry\"); return bob.getLastName(); })(), 'Curry', 'message: <code>bob.getLastName()</code> should return \"Curry\" after <code>bob.setFullName(\"Haskell Curry\")</code>.');"
      ],
      "type": "bonfire",
      "MDNlinks": [
        "Closures",
        "Details of the Object Model"
      ],
      "challengeType": 5,
      "translations": {
        "es": {
          "title": "Crea una Persona",
          "description": [
            "Completa el constructor de objetos con los métodos especificados a continuación:",
            "<blockquote>getFirstName()\ngetLastName()\ngetFullName()\nsetFirstName(first)\nsetLastName(last)\nsetFullName(firstAndLast)</blockquote>",
            "Ejecuta las pruebas para ver el resultado esperado de cada método.",
            "Las funciones que aceptan argumentos deben aceptar sólo uno, y este tiene que ser una cadena.",
            "Estos métodos deben ser el único medio para interactuar con el objeto.",
            "Recuerda utilizar <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Leer-Buscar-Preguntar</a> si te sientes atascado. Intenta programar en pareja. Escribe tu propio código."
          ]
        },
        "it": {
          "title": "Crea una Persona",
          "description": [
            "Completa il costruttore dell'oggetto con i metodi specificati qui sotto:",
            "<blockquote>getFirstName()\ngetLastName()\ngetFullName()\nsetFirstName(first)\nsetLastName(last)\nsetFullName(firstAndLast)</blockquote>",
            "Esegui i test per vedere il risultato atteso per ogni metodo.",
            "I metodi che richiedono un argomento devono accettarne solo uno e questo deve essere una stringa.",
            "Questi metodi devono essere l'unica maniera possibile di interagire con l'oggetto.",
            "Ricorda di usare <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Leggi-Cerca-Chiedi</a> se rimani bloccato. Prova a programmare in coppia. Scrivi il codice da te."
          ]
        }
      }
    },
    {
      "id": "af4afb223120f7348cdfc9fd",
      "title": "Map the Debris",
      "description": [
        "Return a new array that transforms the element's average altitude into their orbital periods.",
        "The array will contain objects in the format <code>{name: 'name', avgAlt: avgAlt}</code>.",
        "You can read about orbital periods <a href=\"http://en.wikipedia.org/wiki/Orbital_period\" target='_blank'>on wikipedia</a>.",
        "The values should be rounded to the nearest whole number. The body being orbited is Earth.",
        "The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km<sup>3</sup>s<sup>-2</sup>.",
        "Remember to use <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code."
      ],
      "challengeSeed": [
        "function orbitalPeriod(arr) {",
        "  var GM = 398600.4418;",
        "  var earthRadius = 6367.4447;",
        "  return arr;",
        "}",
        "",
        "orbitalPeriod([{name : \"sputnik\", avgAlt : 35873.5553}]);"
      ],
      "solutions": [
        "function orbitalPeriod(arr) {\n  var GM = 398600.4418;\n  var earthRadius = 6367.4447;\n  var TAU = 2 * Math.PI; \n  return arr.map(function(obj) {\n    return {\n      name: obj.name,\n      orbitalPeriod: Math.round(TAU * Math.sqrt(Math.pow(obj.avgAlt+earthRadius, 3)/GM))\n    };\n  });\n}\n\norbitalPeriod([{name : \"sputkin\", avgAlt : 35873.5553}]);\n"
      ],
      "tests": [
        "assert.deepEqual(orbitalPeriod([{name : \"sputnik\", avgAlt : 35873.5553}]), [{name: \"sputnik\", orbitalPeriod: 86400}], 'message: <code>orbitalPeriod([{name : \"sputnik\", avgAlt : 35873.5553}])</code> should return <code>[{name: \"sputnik\", orbitalPeriod: 86400}]</code>.');",
        "assert.deepEqual(orbitalPeriod([{name: \"iss\", avgAlt: 413.6}, {name: \"hubble\", avgAlt: 556.7}, {name: \"moon\", avgAlt: 378632.553}]), [{name : \"iss\", orbitalPeriod: 5557}, {name: \"hubble\", orbitalPeriod: 5734}, {name: \"moon\", orbitalPeriod: 2377399}], 'message: <code>orbitalPeriod([{name: \"iss\", avgAlt: 413.6}, {name: \"hubble\", avgAlt: 556.7}, {name: \"moon\", avgAlt: 378632.553}])</code> should return <code>[{name : \"iss\", orbitalPeriod: 5557}, {name: \"hubble\", orbitalPeriod: 5734}, {name: \"moon\", orbitalPeriod: 2377399}]</code>.');"
      ],
      "type": "bonfire",
      "MDNlinks": [
        "Math.pow()"
      ],
      "challengeType": 5,
      "translations": {
        "es": {
          "title": "Ubica los escombros",
          "description": [
            "Crea una función que devuelva un nuevo arreglo que transforme la altitud promedio del elemento en su período orbital.",
            "El arreglo debe contener objetos en el formato <code>{name: 'name', avgAlt: avgAlt}</code>.",
            "Puedes leer acerca de períodos orbitales <a href=\"http://en.wikipedia.org/wiki/Orbital_period\" target='_blank'>en wikipedia</a>.",
            "Los valores deben estar redondeados al número entero más próximo. El cuerpo orbitado es la Tierra",
            "El radio de la Tierra es 6367.4447 kilómetros, y el valor GM del planeta es de 398600.4418 km<sup>3</sup>s<sup>-2</sup>.",
            "Recuerda utilizar <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Read-Search-Ask</a> si te sientes atascado. Intenta programar en pareja. Escribe tu propio código."
          ]
        },
        "it": {
          "title": "Mappa i detriti",
          "description": [
            "Ritorna un nuovo array che trasformi l'altitudine media degli elementi nel loro periodo orbitale.",
            "L'array conterrà oggetti in formato <code>{name: 'name', avgAlt: avgAlt}</code>.",
            "Puoi leggere riguardo i periodi orbitali <a href=\"http://en.wikipedia.org/wiki/Orbital_period\" target='_blank'>su wikipedia</a>.",
            "I valori devono essere arrotondati al numero intero più vicino. Il corpo attorno a cui orbitano gli elementi è la Terra.",
            "Il raggio della Terra è di 6367.4447 kilometri, e il valore GM della Terra è di 398600.4418 km<sup>3</sup>s<sup>-2</sup>.",
            "Ricorda di usare <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Leggi-Cerca-Chiedi</a> se rimani bloccato. Prova a programmare in coppia. Scrivi il codice da te."
          ]
        }
      }
    },
    {
      "id": "a3f503de51cfab748ff001aa",
      "title": "Pairwise",
      "description": [
        "Given an array <code>arr</code>, find element pairs whose sum equal the second argument <code>arg</code> and return the sum of their indices.",
        "If multiple pairs are possible that have the same numeric elements but different indices, return the smallest sum of indices. Once an element has been used, it cannot be reused to pair with another.",
        "For example <code>pairwise([7, 9, 11, 13, 15], 20)</code> returns <code>6</code>. The pairs that sum to 20 are <code>[7, 13]</code> and <code>[9, 11]</code>. We can then write out the array with their indices and values.",
        "<table class=\"table\"><tr><th><b>Index</b></th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th></tr><tr><td>Value</td><td>7</td><td>9</td><td>11</td><td>13</td><td>15</td></tr></table>",
        "Below we'll take their corresponding indices and add them.",
        "7 + 13 = 20 &#8594; Indices 0 + 3 = 3<br>9 + 11 = 20 &#8594; Indices 1 + 2 = 3<br>3 + 3 = 6 &#8594 Return <code>6</code>",
        "Remember to use <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Read-Search-Ask</a> if you get stuck. Try to pair program. Write your own code."
      ],
      "challengeSeed": [
        "function pairwise(arr, arg) {",
        "  return arg;",
        "}",
        "",
        "pairwise([1,4,2,3,0,5], 7);"
      ],
      "solutions": [
        "function pairwise(arr, arg) {\n  var sum = 0;\n  arr.forEach(function(e, i, a) {\n    if (e != null) {      \n      var diff = arg-e;\n      a[i] = null;\n      var dix = a.indexOf(diff);\n      if (dix !== -1) {\n        sum += dix;\n        sum += i;\n        a[dix] = null;\n      }  \n    }\n  });\n  return sum;\n}\n\npairwise([1,4,2,3,0,5], 7);\n"
      ],
      "tests": [
        "assert.deepEqual(pairwise([1, 4, 2, 3, 0, 5], 7), 11, 'message: <code>pairwise([1, 4, 2, 3, 0, 5], 7)</code> should return 11.');",
        "assert.deepEqual(pairwise([1, 3, 2, 4], 4), 1, 'message: <code>pairwise([1, 3, 2, 4], 4)</code> should return 1.');",
        "assert.deepEqual(pairwise([1, 1, 1], 2), 1, 'message: <code>pairwise([1, 1, 1], 2)</code> should return 1.');",
        "assert.deepEqual(pairwise([0, 0, 0, 0, 1, 1], 1), 10, 'message: <code>pairwise([0, 0, 0, 0, 1, 1], 1)</code> should return 10.');",
        "assert.deepEqual(pairwise([], 100), 0, 'message: <code>pairwise([], 100)</code> should return 0.');"
      ],
      "type": "bonfire",
      "MDNlinks": [
        "Array.prototype.reduce()"
      ],
      "challengeType": 5,
      "translations": {
        "es": {
          "title": "En parejas",
          "description": [
            "Crea una función que devuelva la suma de todos los índices de los elementos de 'arr' que pueden ser emparejados con otro elemento de tal forma que la suma de ambos equivalga al valor del segundo argumento, 'arg'. Si varias combinaciones son posibles, devuelve la menor suma de índices. Una vez un elemento ha sido usado, no puede ser usado de nuevo para emparejarlo con otro elemento.",
            "Por ejemplo, pairwise([1, 4, 2, 3, 0, 5], 7) debe devolver 11 porque 4, 2, 3 y 5 pueden ser emparejados para obtener una suma de 7",
            "pairwise([1, 3, 2, 4], 4) devolvería el valor de 1, porque solo los primeros dos elementos pueden ser emparejados para sumar 4. ¡Recuerda que el primer elemento tiene un índice de 0!",
            "Recuerda utilizar <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Read-Search-Ask</a> si te sientes atascado. Intenta programar en pareja. Escribe tu propio código."
          ]
        },
        "it": {
          "title": "A coppie",
          "description": [
            "Dato un array <code>arr</code>, trova le coppie di elementi la cui somma è uguale al secondo argomento passato <code>arg</code>. Ritorna quindi la somma dei loro indici.",
            "Se ci sono più coppie possibili che hanno lo stesso valore numerico ma indici differenti, ritorna la somma degli indici minore. Una volta usato un elemento, lo stesso non può essere riutilizzato per essere accoppiato con un altro.",
            "Per esempio <code>pairwise([7, 9, 11, 13, 15], 20)</code> ritorna <code>6</code>. Le coppia la cui somma è 20 sono <code>[7, 13]</code> e <code>[9, 11]</code>. Possiamo quindi osservare l'array con i loro indici e valori.",
            "<table class=\"table\"><tr><th><b>Indice</b></th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th></tr><tr><td>Valore</td><td>7</td><td>9</td><td>11</td><td>13</td><td>15</td></tr></table>",
            "Qui sotto prendiamo gli indici corrispondenti e li sommiamo.",
            "7 + 13 = 20 &#8594; Indici 0 + 3 = 3<br>9 + 11 = 20 &#8594; Indici 1 + 2 = 3<br>3 + 3 = 6 &#8594 Ritorna <code>6</code>",
            "Ricorda di usare <a href='http://forum.freecodecamp.com/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Leggi-Cerca-Chiedi</a> se rimani bloccato. Prova a programmare in coppia. Scrivi il codice da te."
          ]
        }
      }
    }
  ]
}
