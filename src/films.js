
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
function moviesAverageOfDirector(array, director) {
  getMoviesFromDirector()
  let scoreDirector = movies.reduce(function(contador, suma) { 
    
  })
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  
}

// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
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
