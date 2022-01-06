

// const numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", " ");



// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     private: false 
// };


// for (let i = 0; i < 2; i++){
//     const a = prompt ("Один из последних просмотренных фильмов", ""),
//           b = prompt ("На сколько цените его?", ""); 

//     if (a != null && b != null && a != '' && b != '' && a.length < 50){
//         personalMovieDB.movies[a] = b;
//         console.log("done");
//     } else {
//         console.log("error");
//         i--;
//     }

// }

// console.log(personalMovieDB);

// let num = 20;

// function showFirstMassage(text) {
//     console.log(text);
//     let num = 10;
//     console.log(num);
// }

// showFirstMassage('hello world');
// console.log(num);

// function calc(a,b){
//     return (a + b);
// }

// console.log(calc(4,3));
// console.log(calc(5,6));
// console.log(calc(10,6));

// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function() {
//     console.log("Hello");
// };

// logger();
// // стрелочная функция
// const calc = (a, b) => {
//     return a + b;
// };

// // методы
// const str = "teSt";

// // console.log(str[2] = '2');
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);

// //поиск по строке
// const fruit = "Some Fruit";
// console.log(fruit.indexOf("Fruit"))

// //вырезание от и до
// const logg = "Hello World";
// console.log(logg.slice(6, 11));

// console.log(logg.substring(6, 11));

// //округление
// const num = 12.5;
// console.log(Math.round(num));

// //перевод в другую систему исчесления
// const test = "12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));

// 3 task
let numberOfFilms;
function start (){
   numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", " ");

   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", " ");
   }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};



function rememberMyFirst(){


    for (let i = 0; i < 2; i++){
        const a = prompt ("Один из последних просмотренных фильмов", ""),
            b = prompt ("На сколько цените его?", ""); 


        if (a != null && b != null && a != '' && b != '' && a.length < 50){
            personalMovieDB.movies[a] = b;
            console.log("done");
        } else {
            console.log("error");
            i--;
        }

        

    }
}

function writeYourGenres (){
    for (let i = 1; i < 4; i++){
        const c = prompt ("Ваш любимый жанр под номером " +i);
        personalMovieDB.genres[i-1] = c;

    }
}
writeYourGenres();
rememberMyFirst();

function detectedPersonalLevel(){

    if  (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
            } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
                console.log('Вы классический зритель');
            } else if (personalMovieDB.count >= 30) {
                console.log('Вы киноман');
            } else {
                console.log('Ошибка');
            }
}
detectedPersonalLevel();

function showMyDb(){
    if (personalMovieDB.private == false){
        console.log(personalMovieDB);
    }    
}

showMyDb();