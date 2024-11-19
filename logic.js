let cnum = Math.floor(Math.random() * 100) + 1;
let attempt = 0;

const userinp = document.getElementById("inp");
const subBtn = document.getElementById("submit");
const resBtn = document.getElementById("resBtn");
const message = document.getElementById("msg");
const attemptSpan = document.getElementById("Attempt");

// Audio elements
const correctSound = document.getElementById("correct-sound");
const incorrectSound = document.getElementById("incorrect-sound");

function check() {
    const usernum = parseInt(userinp.value);
    
    if (isNaN(usernum) || usernum < 1 || usernum > 100) {
        message.innerHTML = "Please enter a valid number between 1 and 100.";
        message.style.color = "red";
        return;
    }
    
    attempt++;
    attemptSpan.innerHTML = attempt;
    userinp.value = "";

    if (cnum === usernum) {
        message.innerHTML = "Congratulations! You have guessed the number!";
        message.style.color = "green";
        resBtn.style.display = "block";
        correctSound.play();
        document.body.classList.add("correct");
        setTimeout(() => document.body.classList.remove("correct"), 1000);
    } else {
        incorrectSound.play();
        document.body.classList.add("incorrect");
        setTimeout(() => document.body.classList.remove("incorrect"), 1000);
        if (cnum < usernum) {
            message.innerHTML = `Too High! ${usernum - cnum} units away. Try again.`;
            message.style.color = "red";
        } else {
            message.innerHTML = `Too Low! ${cnum - usernum} units away. Try again.`;
            message.style.color = "red";
        }
    }
}

userinp.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        check();
    }
});

subBtn.addEventListener("click", check);
resBtn.addEventListener("click", restart);

function restart() {
    cnum = Math.floor(Math.random() * 100) + 1;
    attempt = 0;
    attemptSpan.innerHTML = attempt;
    userinp.value = "";
    message.innerHTML = "";
    message.style.color = "black";
    resBtn.style.display = "none";
}

// Initialize the game
bgMusic.play();
