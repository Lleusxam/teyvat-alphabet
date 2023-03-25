// Define the Teyvat alphabet images and their corresponding Latin letters
const alphabetImages = {
	"a": "Caracteres/a.png",
	"b": "Caracteres/b.png",
	"c": "Caracteres/c.png",
	"d": "Caracteres/d.png",
	"e": "Caracteres/e.png",
	"f": "Caracteres/f.png",
	"g": "Caracteres/g.png",
	"h": "Caracteres/h.png",
	"i": "Caracteres/i.png",
	"j": "Caracteres/j.png",
	"k": "Caracteres/k.png",
	"l": "Caracteres/l.png",
	"m": "Caracteres/m.png",
	"n": "Caracteres/n.png",
	"o": "Caracteres/o.png",
	"p": "Caracteres/p.png",
	"q": "Caracteres/q.png",
	"r": "Caracteres/r.png",
	"s": "Caracteres/s.png",
	"t": "Caracteres/t.png",
	"u": "Caracteres/u.png",
	"v": "Caracteres/v.png",
	"w": "Caracteres/w.png",
	"x": "Caracteres/x.png",
	"y": "Caracteres/y.png",
	"z": "Caracteres/z.png"
  };
  
  // Get a random Teyvat alphabet letter
  function getRandomLetter() {
	const alphabet = Object.keys(alphabetImages);
	const randomIndex = Math.floor(Math.random() * alphabet.length);
	return alphabet[randomIndex];
  }
  
  // Set the Teyvat alphabet image and clear the input field and result message
  function setAlphabetImage() {
	const randomLetter = getRandomLetter();
	const alphabetImage = alphabetImages[randomLetter];
	const alphabetImageElement = document.getElementById("alphabet-image");
	alphabetImageElement.setAttribute("src", alphabetImage);
	alphabetImageElement.setAttribute("alt", `Teyvat Alphabet ${randomLetter.toUpperCase()}`);
	document.getElementById("answer-input").value = "";
	document.getElementById("result-message").textContent = "";
  }
  
  // Check the answer and display the result message
  function checkAnswer() {
	const answerInput = document.getElementById("answer-input");
	const answer = answerInput.value.trim().toLowerCase();
	const alphabetImageElement = document.getElementById("alphabet-image");
	const teyvatLetter = alphabetImageElement.getAttribute("alt").slice(-1).toLowerCase();
	if (answer === teyvatLetter) {
	  alert("Correto!")
	} else {
	  alert("Incorreto! a resposta é " + teyvatLetter.toUpperCase() + ".")
	}
  }
  
  // Set the Teyvat alphabet image when the page loads
  window.addEventListener("load", setAlphabetImage);
  
  // Set the Teyvat alphabet image when the submit button is clicked
  document.getElementById("submit-button").addEventListener("click", checkAnswer);
  document.getElementById("submit-button").addEventListener("click", setAlphabetImage);
  