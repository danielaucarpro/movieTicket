//PICK YOUR MOVIE SCRIPT

const container = document.getElementById('container');
const movieSelect = document.getElementById('movie');
const text = document.getElementById('text');
const seatsNum = 0;
const total = 0;

let ticketPrice = +movieSelect.value;

function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', (movieIndex));
    localStorage.setItem('selectedMoviePrice', (moviePrice));
  }
  
  // Update total and count 
  function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.seat-selected');
  
    // Copy selected seat into an array 
    // Map through the array
    // Return a new array indexes
  
    const seatsIndex = [...selectedSeats].map((seat) =>{
      return [...seats].indexOf(seat)
    })
  
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
  
    const selectedSeatsCount = selectedSeats.length;
  
    seatsNum = selectedSeatsCount;
    total = selectedSeatsCount * ticketPrice;
  }
  
  // Get data from localstorage and populate the UI
  
  function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
  
    if (selectedSeats !== null && selectedSeats.length > 0) {
      seats.forEach((seat, index) => {
        if (selectedSeats.indexOf(index) > -1) {
          seat.classList.add('selected');
        }
      });
    }
  
    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
  
    if(selectedMovieIndex !== null) {
      movieSelect.selectedIndex = selectedMovieIndex;
    }
  }

//Add a event listener
container.addEventListener('click', (seat) => {
    if (seat.target.classList.contains('seat') && !seat.target.classList.contains('seat-occupied')) {
        seat.target.classList.toggle('seat-selected');
        updateSelectedCount();
    }
});

text.innerHTML = `You have selcted ${seatsNum} seats for a price of $ ${total}.`;