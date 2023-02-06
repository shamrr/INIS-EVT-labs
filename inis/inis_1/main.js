//1
let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

//2
const personalMovieDB = {
    count: numberOfFilms,
    movies: {}
}

//3
for(let i = 0; i < 2; i++) {
    let a = prompt('Один из последних просмотренных фильмов?');
    let b = prompt('На сколько оцените его?');

    //4,5
    if(a != '' && b != '' && a != null && b != null  && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        console.log('Введите значение');
    }
}
//6
console.log(personalMovieDB);