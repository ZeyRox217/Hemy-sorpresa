const question = document.querySelector(".question");
const subtitle = document.querySelector(".subtitle");
const gif = document.querySelector(".gif");

const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

let noCount = 0;


// ============================
// YES BUTTON
// ============================

yesBtn.addEventListener("click", function () {

    question.textContent = "Sabía que dirías que sí, dummy ❤️";

    subtitle.innerHTML =
        "Ahora ven aquí y dame un beso...<br>" +
        "Gracias por dejarme compartir mi vida contigo. 💕";

    gif.src =
        "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXhqcGZ5MWt0MTU4M244dmR5d2xudDQ0cWRwZG0wZ3N4dG9rNnBlbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hgt1CzbIbHBvk9WILM/giphy.gif";

    noBtn.style.display = "none";

    yesBtn.textContent = "Te amo mucho Hemy ❤️";

    yesBtn.style.transform = "scale(1.15)";

});


// ============================
// NO BUTTON
// ============================

function moveNoButton() {

    noCount++;

    const maxMove = 100;

    const x =
        (Math.random() * 2 - 1) * maxMove;

    const y =
        (Math.random() * 2 - 1) * maxMove;

    noBtn.style.transform =
        `translate(${x}px, ${y}px)`;


    if (noCount === 2) {

        noBtn.textContent = "¿Segura? 🥺";

    } else if (noCount === 4) {

        noBtn.textContent = "Piénsalo 😭";

    } else if (noCount === 6) {

        noBtn.textContent = "Por favor 🥺";

    } else if (noCount === 8) {

        noBtn.textContent = "Ya di que sí ❤️";

    } else if (noCount >= 10) {

        noBtn.textContent = "No puedes escapar 😭❤️";
    }
}


// COMPUTER
noBtn.addEventListener("mouseover", moveNoButton);


// PHONE
noBtn.addEventListener("touchstart", function(event) {

    event.preventDefault();

    moveNoButton();

});