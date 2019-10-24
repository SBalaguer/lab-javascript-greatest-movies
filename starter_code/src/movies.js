/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals

function calculateAverageMovieRate (array) {
    const rates = array.map((value, index, originalArray) => {
        return value.rate;
    });
    const sum = rates.reduce((accumulator, value, index,oriingalArray) => {
        return accumulator + value;
    },0)
    return (sum / (rates.length));
    //ASK ABOUT TWO DECIMAL PLAES (Math.Round()*100/100)
}

// Iteration 2: Drama movies - Get the average of Drama Movies

function calculateAverageDramaRate(array){
    const drama = array.filter((movie, index, originalArray) => {
        if (movie.genre.includes('Drama')){
            return true;
        }
    });

    if(drama.length === 0){
        return 0
    }else{
        return calculateAverageMovieRate (drama);
    };
};

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByYear(array){
    array.sort((a,b) =>{
        if (a.year > b.year){
            return 1;
        }else if(a.year < b.year){
            return -1;
        }else{
            if (a.title.toLowerCase() > b.title.toLowerCase()){
                return 1;
            }else if (a.title.toLowerCase() < b.title.toLowerCase()){
                return -1;
            }else{
                return 0;
            }
        }
    });
    return array;
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

/*function countSpielbergDramaMovies(array){
    let spielbergMovies = array.filter((movie, index, originalArray) =>{
        if (movie.director.includes('Steven Spielberg')){
            return true;
        }
    });

    let spielberDramaMovies = spielbergMovies.filter((movie, index, orignalArray) => {
        if (movie.genre.includes('Drama')){
            return true;
        }
    });

    if(spielberDramaMovies.length === 0){
        return 0
    }else {
        return spielberDramaMovies.length;
    }
}
*/

function countSpielbergDramaMovies(array){

    let spielberDramaMovies = (array.filter((movie, index, originalArray) =>{if (movie.director.includes('Steven Spielberg')){return true;}})).filter((movie, index, orignalArray) => {
        if (movie.genre.includes('Drama')){
            return true;
        }
    });

    if(spielberDramaMovies.length === 0){
        return 0
    }else {
        return spielberDramaMovies.length;
    }
}




// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically (array){
    array.sort((a,b) =>{
        if (a.title.toLowerCase() > b.title.toLowerCase()){
            return 1
        } else if (a.title.toLowerCase() < b.title.toLowerCase()){
            return -1
        } else{
            return 0
        }
    });

    let newArr = array.map((value, index, originalArray) => {
        return value.title;
    })

    return newArr.slice(0,20);

}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

/*
function turnHoursToMinutes(array){
    let newArr = [ ...array ]
    for (let i = 0; i<newArr.length;i++){
       let durArr = newArr[i].duration.split(" ")
       for (let j = 0; j<durArr.length;j++){
           if(durArr[j].includes("h")){
               durH = parseInt(durArr[j])*60;
           } else if(durArr[j].includes('min') || durArr[j].includes(' min')){
               durM = parseInt(durArr[j]);
           }
       }
       let durMin = durH + durM
       newArr[i].duration = durMin
    }
    return newArr;
}
*/

function turnHoursToMinutes(array){
    
    //Extract an array that has arrays inside of hours and minutes.
    let durArr = array.map((movies) => {return movies.duration.split(" ")})
    

    //Convers array with arrays into an array with numbers in it.
    let durH = 0;
    let durM = 0;
    for (let i = 0; i<durArr.length; i++){
        for(let j = 0; j<durArr[i].length; j++){
            if(durArr[i][j].includes("h")){
                durH = parseInt(durArr[i][j])*60;
            } else if(durArr[i][j].includes('min') || durArr[j].includes(' min')){
                durM = parseInt(durArr[i][j]);
            }   
        }
        durArr[i] = durH + durM; 
    }
    
    //create new object movies with direction in minutes.

    
    
    console.log(durArr);
    //return newArr
}

        /* 
        movies.duration = durH + durM;
        */


// BONUS Iteration: Best yearly rate average - Best yearly rate average




