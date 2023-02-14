const personalMovieDB = {
    privat: false,
    movies: {
        homeAlone_1: 7,
        homeAlone_2: 8,
        homeAlone_3: 10,
    },
}

function createTable(){
    const keys = Object.keys(personalMovieDB.movies);
    const values = Object.values(personalMovieDB.movies);

    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    table.style.border = '2px solid black';
    table.append(thead, tbody);

    let row_1 = document.createElement('tr');
    let row_1_head_1 = document.createElement('th');
    row_1_head_1.innerText = 'Название фильма';
    let row_1_head_2 = document.createElement('th');
    row_1_head_2.innerText = 'Оценка фильма';
    row_1.append(row_1_head_1, row_1_head_2);
    thead.append(row_1);

    let row_2 = document.createElement('tr');
    let row_2_column_1 = document.createElement('td');
    let row_2_column_2 = document.createElement('td');
    //заполняем вторую строку со значениями
    row_2_column_1.innerText = keys[0];
    row_2_column_2.innerText = values[0];
    row_2.append(row_2_column_1, row_2_column_2);
    tbody.append(row_2);

    let row_3 = document.createElement('tr');
    let row_3_column_1 = document.createElement('td');
    let row_3_column_2 = document.createElement('td');
    //заполняем третью строку со значениями
    row_3_column_1.innerText = keys[1];
    row_3_column_2.innerText = values[1];
    row_3.append(row_3_column_1, row_3_column_2);
    tbody.append(row_3);
    
    let row_4 = document.createElement('tr');
    let row_4_column_1 = document.createElement('td');
    let row_4_column_2 = document.createElement('td');
    //заполняем четвертую строку со значениями
    row_4_column_1.innerText = keys[2];
    row_4_column_2.innerText = values[2];
    row_4.append(row_4_column_1, row_4_column_2);
    tbody.append(row_4);

    let body = document.querySelector('body').append(table);

    return table;
}

function checkPrivat(){
    if(personalMovieDB.privat === false){
        createTable();
    } else {
        console.log('privat === true => функция не вызывается');
    }
}
checkPrivat();

