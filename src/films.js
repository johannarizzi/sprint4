
const movies = require("../src/data");

// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {

 // return array.map(movies => movies.director);

  let result = movies.map(movie => movie.director);
  console.log("EXERCICE 1 ->", result);
  return result;
  
 }



// Exercise 2: Get the films of a certain director


function getMoviesFromDirector(movies, director) {

  let filmsDirector = movies.filter(movie => movie.director === director);
  return filmsDirector;
  
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  
  const nameDirector = getMoviesFromDirector(movies, director);
 
  let scoreDirector = nameDirector.reduce((counter, number) => counter + number.score, 0 );
   let average = parseFloat((scoreDirector / nameDirector.length).toFixed(2));
  return average;

}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically (movies) {

  let moviesOrder = movies.map(movie => movie.title).sort().slice(0,20);
  
  return moviesOrder;

}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  let moviesOrderByYear = [];
  moviesOrderByYear = [...movies].sort((a, b) => {
    
    if (a.year > b.year) {
        return 1;
    }
    if (a.year < b.year) {
        return -1;
    }
    if (a.year === b.year){

       if (a.title > b.title) {
         return 1;
       }
       if (a.title < b.title) {
         return -1
       }
       return 0
    }
   
     });
     return moviesOrderByYear;
     

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, genre) {
  let movieGenre = movies.filter(movie => movie.genre.includes(genre));
  let movieScore = movieGenre.filter(movie => typeof movie.score === 'number');
  return moviesAverageOfDirector(movieScore);

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {

  const newDuration = movies.map((movie) => {
    let duration = movie.duration.split(" ");
    let hours = parseInt(duration[0]);
    let minutes = (parseInt(duration[1]) > 0 ? parseInt(duration[1]) : 0);
    const hoursToMinutes = hours* 60 + minutes;
    return {
      ...movie,
      duration: hoursToMinutes
    };
  });
  return newDuration;

}


// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, year) {

  let bestMovie = movies.filter(movie => movie.year === year).sort().slice(0,1);

  return bestMovie
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
