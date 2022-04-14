
const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p', 'q','r','s','t','u','v','w','x','y','z'];
	
let guess = [];

const randomLetter = letters[Math.floor(Math.random() * 26)];
console.log(randomLetter);
    
const letter = document.querySelector('#letter');

document.body.addEventListener('keyup', function(event) {
  const Index = randomLetter.indexOf(event.key);
  console.log(Index);
      if(Index === event.key) {
        letter.textContent = guess ;
      }
});
