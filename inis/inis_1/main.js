//1
let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

//2
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
}

//3
for(let i = 0; i < 2; i++) {
    let a = prompt('Один из последних просмотренных фильмов?'),
        b = prompt('На сколько оцените его?');
}

//4,5
if(a != '' && b != '' && a != null && b != null  && a.length < 50) {
    console.log('Введите значение');
} else {
    personalMovieDB.movies[a] = b;
}

//6
console.log(personalMovieDB);