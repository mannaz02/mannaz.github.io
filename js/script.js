const dynamicText = document.querySelector("h1 span");
const words = ["I am Nur Ain", "Internet Computing Student", "I am from Sabah"];
// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");
    if (!isDeleting && charIndex < currentWord.length) {
        // If condition is true, type the next character
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        // If condition is true, remove the previous character
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        // If word is deleted then switch to the next word
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}
typeEffect();
//script.js
function SendEmail() {
    var params = {
        from_name : document.getElementById("name").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value,
 }
 emailjs.send("service_2ojnd53","template_ig6a1lu",params).then(function (res) { 
    alert("Email dah hantar bos! " + res.status);
 })
}