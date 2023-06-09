/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log("-------Esercizio A-------");

let sum = 10 + 20;
console.log(sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
console.log("-------Esercizio B-------");

let random = Math.floor(Math.random() * 21);
console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
console.log("-------Esercizio C-------");

const me = {
  name: "Nicolals",
  surname: "Mastropietro",
  age: 28,
};

console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
console.log("-------Esercizio D-------");

delete me.age;
console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
console.log("-------Esercizio E-------");

me.skills = ["HTML", "CSS", "JS"];
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log("-------Esercizio F-------");

me.skills.push("C++");
console.log(me.skills);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log("-------Esercizio G-------");

me.skills.pop();
console.log(me.skills);

console.log(
  "------------------------------Funzioni---------------------------------------"
);
// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log("-------Esercizio 1-------");

const dice = function () {
  return Math.floor(Math.random() * 6) + 1;
};

console.log(dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log("-------Esercizio 2-------");

const whoIsBigger = function (a, b) {
  if (a > b) {
    return a;
  } else if (a === b) {
    return "Numeri inseriti identici";
  } else {
    return b;
  }
};

console.log(whoIsBigger(60, 37));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log("-------Esercizio 3-------");

const splitMe = function (string) {
  return string.split(" ");
};

console.log(splitMe("Hello World"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
console.log("-------Esercizio 4-------");

const deleteOne = function (string, b) {
  if (b) {
    return string.slice(1);
  } else {
    return string.slice(0, string.length - 1);
  }
};

console.log(deleteOne("Hello World", true));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.log("-------Esercizio 5-------");

const onlyLetters = function (string) {
  const arrString = string.split(" ");

  const arrFiltered = arrString.filter((e) => {
    return isNaN(e) === true;
  });

  return arrFiltered.join(" ");
};

console.log(onlyLetters("I have 1 dog and 0 cat!"));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.log("-------Esercizio 6-------");

const isThisAnEmail = function (string) {
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(string);
};

console.log(isThisAnEmail("nicolas94.m@gmail.com"));
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log("-------Esercizio 7-------");

const whatDayIsIt = function () {
  let today = new Date();
  today = today.getDay();
  let todayString = "";

  switch (today) {
    case 1:
      todayString = "Lunedì";
      break;

    case 2:
      todayString = "Martedì";
      break;

    case 3:
      todayString = "Mercoledì";
      break;

    case 4:
      todayString = "Giovedì";
      break;

    case 5:
      todayString = "Venerdì";
      break;

    case 6:
      todayString = "Sabato";
      break;

    case 7:
      todayString = "Domenica";
      break;
  }

  return todayString;
};

console.log(whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log("-------Esercizio 8-------");

const rollTheDice = function (n) {
  const obj = {
    sum: 0,
    values: [],
  };

  for (let i = 0; i < n; i++) {
    let numberDrown = dice();
    obj.sum = obj.sum + numberDrown;
    obj.values.push(numberDrown);
  }
  return obj;
};

console.log(rollTheDice(3));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
console.log("-------Esercizio 9-------");

//Sono onesto questo l'ho preso paro paro da internet e mi funziona solamente mettendo 
//la data in stile americando con prima il mese e poi il giorno
//Ho un po di problemi con le date D:
const howManyDays = function (date) {
  const today = new Date();
  console.log(today);
  let inputDate = new Date(date);
  console.log(inputDate);
  let difference = today.getTime() - inputDate.getTime();

  console.log(Math.floor(difference / (1000 * 60 * 60 * 24)));
};

howManyDays("6-4-2023");

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
console.log("-------Esercizio 10-------");

const isTodayMyBirthday = function (b) {
  //divido la data ricevuta e la metto in un array
  const bArr = b.split(" ");

  //calcolo la data di oggi
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const day = today.getDate();

  //comparo la data di oggi con quella ricevuta
  if (
    parseInt(bArr[0]) === day &&
    parseInt(bArr[1]) === month &&
    parseInt(bArr[2]) === year
  ) {
    return "Happy Birthday!! =)";
  } else {
    return "Sorry, today is not your birthday =(";
  }
};

console.log(isTodayMyBirthday("9 5 2023"));

// Arrays & Oggetti

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
console.log("-------Esercizio 11-------");

const objPerson = {
  name: "Luca",
  surname: "Non so che inventarmi",
  age: 34,
  work: "developer",
};

const deleteProp = function (obj, string) {
  delete obj[string];
  return obj;
};

console.log(deleteProp(objPerson, "age"));

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
console.log("-------Esercizio 12-------");

const newesMovie = function () {
  let mostRecent = 0;
  //ciclo tutti i film per trovare il valore di Year più alto
  movies.forEach((film) => {
    if (parseInt(film.Year) > mostRecent) {
      mostRecent = film.Year;
    }
  });

  //filtro tutti i film per trovare quello con Year uguale al valore di più recente
  monstRecentMovies = movies.filter((film) => {
    return film.Year === mostRecent;
  });

  return monstRecentMovies[0].Title;
};

console.log("Il film più recente è", newesMovie());

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
console.log("-------Esercizio 13-------");

const countMovies = function () {
  return movies.length;
};
console.log(countMovies());

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
console.log("-------Esercizio 14-------");

const onlyTheYears = function () {
  const yearArr = [];

  movies.forEach((film) => {
    yearArr.push(film.Year);
  });
  return yearArr;
};
console.log(onlyTheYears());

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
console.log("-------Esercizio 15-------");

const onlyInLastMillennium = function () {
  const moviesLastMillenium = movies.filter((film) => {
    return parseInt(film.Year) > 2000;
  });

  return moviesLastMillenium;
};
console.log(onlyInLastMillennium());

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
console.log("-------Esercizio 16-------");

const sumAllTheYears = function () {
  let yearSum = 0;
  movies.forEach((film) => {
    yearSum = yearSum + parseInt(film.Year);
  });
  return yearSum;
};

console.log(sumAllTheYears());
/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
console.log("-------Esercizio 17-------");

const searchByTitle = function (string) {
  string = string.toLowerCase();
  const arrMoviesSearch = movies.filter((film) => {
    return film.Title.toLowerCase().includes(string);
  });
  return arrMoviesSearch;
};
console.log(searchByTitle("rings"));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
console.log("-------Esercizio 18-------");

const searchAndDivide = function (string) {
  string = string.toLowerCase();
  const moviesResult = {
    match: [],
    unmatch: [],
  };

  movies.forEach((film) => {
    if (film.Title.toLowerCase().includes(string)) {
      moviesResult.match.push(film);
    } else {
      moviesResult.unmatch.push(film);
    }
  });

  return moviesResult;
};

console.log(searchAndDivide("war"));
/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
console.log("-------Esercizio 19-------");

const removeIndex = function (n) {
  movies.splice(n, 1);
  return movies;
};

console.log(removeIndex(2));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
const selectId = function () {
  const idContainer = document.getElementById("container");
};
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
const selectAllTd = function () {
  const allTd = document.querySelectorAll("td");
  return allTd;
};

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
console.log("-------Esercizio 22-------");

const logAllTd = function () {
  const allTd = selectAllTd();

  for (let i = 0; i < allTd.length; i++) {
    console.log(allTd[i].innerText);
  }
};
logAllTd();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

const redBackgroundToAllLink = function () {
  const allLink = document.querySelectorAll("a");
  allLink.forEach((e) => {
    e.style.backgroundColor = "red";
  });
};
redBackgroundToAllLink();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
const addElementToList = function () {
  const ul = document.getElementById("myList");
  const newLi = document.createElement("li");
  ul.appendChild(newLi);
};

addElementToList();
addElementToList();
addElementToList();

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
const cleanList = function () {
  const ul = document.getElementById("myList");
  //questa soluzione l'ho trovata online.
  //non sapevo si potesse selezionare un elemento con querySelector che fosse già stato selezionato
  const allLi = ul.querySelectorAll("li");

  allLi.forEach((e) => {
    e.remove();
  });
};
cleanList();

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
const addClassToTr = function () {
  const allTr = document.querySelectorAll("tr");

  allTr.forEach((e) => {
    e.classList.add("test");
  });
};
addClassToTr();

console.log(
  "------------------------------Esercizi Extra----------------------------"
);

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

console.log("-------Esercizio 27-------");

const halfTree = function (n) {
  let asterisco = "*";

  for (let i = 0; i < n; i++) {
    console.log(asterisco);
    asterisco = asterisco + "*";
  }
};
halfTree(5);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****
  
*/
console.log("-------Esercizio 28-------");

const tree = function (n) {
  let asterisco = "*";
  let space = " ";

  for (let x = 0; x < n; x++) {
    space = space + " ";
  }

  for (let i = 0; i < n; i++) {
    console.log(space + asterisco);
    asterisco = asterisco + "**";
    space = space.replace(" ", "");
  }
};
tree(8);

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
console.log("-------Esercizio 29-------");

const isItPrime = function (n) {
  for (let i = n - 1; i > 1; i--) {
    if (n % i !== 0) {
      if (i === 2 && n % 2 !== 0) {
        console.log(n, "è un numero primo!");
      }
    } else {
      i = 0;
      console.log(n, "non è un numero primo");
    }
  }
};
isItPrime(97);
