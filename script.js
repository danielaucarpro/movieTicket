//PICK YOUR MOVIE SCRIPT
//create a variable to pass the movie ID as a parameter 

const urlParams = new URLSearchParams(window.location.search);
const movieID = urlParams.get('movieId');
const container = document.getElementById('container');
const movieSelect = document.getElementById('movie');
const text = document.getElementById('text');
const seats = document.querySelectorAll('.seat');
let seatsNum = 0;
let total = 0;

// let ticketPrice = {
//   findingNemo: 10,
//   joker: 12,
//   spiritedAway: 8,
//   movingCastle: 18
// } 

let ticketPrice = +movieSelect.value;

function setMovieData(movieIndex, moviePrice, movieName) {
  localStorage.setItem('selectedMovieName', (movieName));
  localStorage.setItem('selectedMovieIndex', (movieIndex));
  localStorage.setItem('selectedMoviePrice', (moviePrice));
}

movieSelect.onchange = () => {
  localStorage.getItem('selectedMovieName');
  localStorage.getItem('selectedMoviePrice');
  localStorage
}

// Update total and count 
let movieObj;

function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.seat-selected');

  // Copy selected seat into an array 
  // Map through the array
  // Return a new array indexes

  const seatsIndex = [...selectedSeats].map((seat) => {
    return [...seats].indexOf(seat);
  })
  console.log(seatsIndex);

  movieObj = {
    movieTitle: movieSelect.value,
    // ticketPrice: 
    //put the movie ID when you will connect both sites
    movieId: movieID
    // movieIndex:
  }

  localStorage.setItem('movieObj', JSON.stringify(movieObj));
  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length -1;

  seatsNum = selectedSeatsCount;
  total = selectedSeatsCount * ticketPrice;
  text.innerHTML = `You have selcted ${seatsNum} seats for a price of $ ${total}.`;
}
//Add a event listener
container.addEventListener('click', (seat) => {
  if (seat.target.classList.contains('seat') && !seat.target.classList.contains('seat-occupied')) {
    seat.target.classList.toggle('seat-selected');
    updateSelectedCount();
    // console.log(seatsIndex);
  }
});