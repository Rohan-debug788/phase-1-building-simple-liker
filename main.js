// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


// Function to handle heart click
function handleHeartClick(event) {
  const heart = event.target;

  mimicServerCall()
    .then(() => {
    
      if (heart.innerText === '♡') {
        heart.innerText = '♥'; 
        heart.classList.add('activated-heart'); 
      } else {
        heart.innerText = '♡'; 
        heart.classList.remove('activated-heart');
      }
    })
    .catch(() => {
      
      const errorModal = document.getElementById('modal');
      errorModal.classList.remove('hidden'); 
      errorModal.querySelector('#modal-message').innerText = 'Server error!';

      setTimeout(() => {
        errorModal.classList.add('hidden');
      }, 3000);
    });
}

// Add event listener to heart icons
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('like-glyph')) {
    handleHeartClick(event);
  }
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
