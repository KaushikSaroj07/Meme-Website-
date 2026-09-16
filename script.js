/* =========================
   HELPER
========================= */

function $(id) {
    return document.getElementById(id);
}


/* =========================
   LOADER
========================= */

document.addEventListener("DOMContentLoaded", function () {

    setTimeout(function () {

        const loader = $("loader");

        if (!loader) return;

        loader.style.opacity = "0";

        setTimeout(function () {

            if (loader) {
                loader.remove();
            }

        }, 650);

    }, 900);

});


/* =========================
   MODAL
========================= */

function openModal(
    emoji,
    title,
    text,
    buttonText
) {

    $("modal-emoji").textContent = emoji;

    $("modal-title").textContent = title;

    $("modal-text").textContent = text;

    $("modal-action").textContent =
        buttonText || "Okay, I Feel Better 😌";

    $("modal").classList.remove("hidden");

}


function closeModal() {

    $("modal").classList.add("hidden");

}


$("close").addEventListener(
    "click",
    closeModal
);


$("modal").addEventListener(
    "click",
    function (event) {

        if (
            event.target === $("modal")
        ) {

            closeModal();

        }

    }
);


$("modal-action").addEventListener(
    "click",
    closeModal
);


/* =========================
   TOAST
========================= */

function showToast(text) {

    const toast = $("toast");

    toast.textContent = text;

    toast.classList.add("show");

    clearTimeout(
        window.toastTimer
    );

    window.toastTimer =
        setTimeout(function () {

            toast.classList.remove(
                "show"
            );

        }, 2800);

}


/* =========================
   MEMES
========================= */

const memes = [

    [
        "😵‍💫",
        "Me pretending to be productive",
        "Meanwhile my brain is calculating whether chai can solve the problem."
    ],

    [
        "🐱",
        "\"I'm fine.\"",
        "Narrator: She was not fine. She needed a snack."
    ],

    [
        "🐶",
        "Deadline tomorrow?",
        "Future Hrudya's problem. Current Hrudya needs a break."
    ],

    [
        "🎧😼",
        "Music ON.",
        "Stress temporarily muted. Productivity still loading..."
    ],

    [
        "🍪",
        "Need motivation?",
        "Have a snack. This is definitely science."
    ],

    [
        "🫠",
        "Brain.exe stopped responding",
        "Please restart after one cup of chai."
    ],

    [
        "📧😱",
        "47 unread emails",
        "Me: I have chosen peace."
    ],

    [
        "🧑‍💻",
        "One tiny task...",
        "Three hours later: why is adulthood like this?"
    ]

];


function randomMeme() {

    const meme =
        memes[
            Math.floor(
                Math.random() *
                memes.length
            )
        ];


    $("meme-emoji").textContent =
        meme[0];

    $("meme-title").textContent =
        meme[1];

    $("meme-text").textContent =
        meme[2];


    showToast(
        meme[0] +
        " " +
        meme[1] +
        " 😂"
    );

}


$("memeBtn").addEventListener(
    "click",
    randomMeme
);


$("anotherMeme").addEventListener(
    "click",
    randomMeme
);


/* =========================
   MOTIVATION
========================= */

$("motivationBtn").addEventListener(
    "click",
    function () {

        openModal(

            "💪",

            "Emergency Motivation for Hrudya",

            `Listen carefully.

You do NOT have to finish everything right now.

Pick the smallest next step.

Do that.

Breathe.

Then do the next one.

You're capable.
You're doing your best.

And you're allowed to have a difficult day.

Now go show that deadline who's boss. 😤❤️`,

            "I'M READY! 🔥"

        );

    }
);


/* =========================
   BREAK
========================= */

$("breakBtn").addEventListener(
    "click",
    function () {

        openModal(

            "☕",

            "OFFICIAL BREAK APPROVED",

            `This is your legally unofficial permission slip to:

☑ Stand up

☑ Stretch your shoulders

☑ Drink water

☑ Look away from the screen

☑ Take one deep breath

The work can survive 60 seconds without you. 😌`,

            "BREAK ACCEPTED!"

        );

    }
);


/* =========================
   WISDOM
========================= */

const wisdom = [

    "Your inbox is not a measure of your worth. 💗",

    "One task at a time. You don't have to fight the whole mountain today.",

    "Taking a break is part of working, not the opposite of it.",

    "You are allowed to be tired and still be proud of yourself.",

    "Drink some water. Yes, Hrudya. This message is specifically for you. 😤",

    "Your brain needs rest, not another tab.",

    "Bad workday ≠ bad you.",

    "Future Hrudya will handle future problems. Current Hrudya gets a snack."

];


$("wisdomBtn").addEventListener(
    "click",
    function () {

        const message =
            wisdom[
                Math.floor(
                    Math.random() *
                    wisdom.length
                )
            ];

        openModal(
            "✨",
            "Random Wisdom",
            message
        );

    }
);


/* =========================
   BREATHING
========================= */

$("breatheBtn").addEventListener(
    "click",
    function () {

        openModal(

            "🌬️",

            "Brain Reset",

            `Breathe in for 4 seconds.

Hold for 2 seconds.

Breathe out for 6 seconds.

Repeat three times.

Your only job right now is breathing. 💗`,

            "RESET COMPLETE 🌿"

        );

    }
);


/* =========================
   SECRET MESSAGE
========================= */

$("secretBtn").addEventListener(
    "click",
    function () {

        openModal(

            "🎁",

            "Secret Message for Hrudya",

            `If nobody told you today:

I'm proud of you.

Not because you finished everything.

Not because everything went perfectly.

Just because you kept showing up.

Now please smile.

Yes, that was an order. 😤❤️`,

            "Okay, You Win 😂"

        );

    }
);


/* =========================
   HUG BUTTON
========================= */

$("hugBtn").addEventListener(
    "click",
    function () {

        showToast(
            "🫂 HUG DELIVERED — +100 emotional support"
        );


        for (
            let i = 0;
            i < 16;
            i++
        ) {

            setTimeout(
                createHeart,
                i * 70
            );

        }

    }
);


/* =========================
   SMILE
========================= */

$("smileBtn").addEventListener(
    "click",
    function () {

        showToast(
            "😊 Smile detected. Stress reduced by scientifically questionable amounts."
        );

    }
);


/* =========================
   FLOATING HEARTS
========================= */

function createHeart() {

    const heart =
        document.createElement(
            "span"
        );

    heart.className = "heart";

    heart.textContent =
        [
            "💗",
            "💕",
            "💖",
            "✨",
            "🌸"
        ][
            Math.floor(
                Math.random() * 5
            )
        ];


    heart.style.left =
        Math.random() * 100 +
        "vw";


    heart.style.fontSize =
        16 +
        Math.random() * 18 +
        "px";


    heart.style.animationDuration =
        5 +
        Math.random() * 3 +
        "s";


    $("hearts").appendChild(
        heart
    );


    setTimeout(
        function () {

            heart.remove();

        },
        9000
    );

}


setInterval(
    createHeart,
    1500
);


/* =========================
   CAT GAME
========================= */

let catScore = 0;

let catTimer = null;


$("cat-start").addEventListener(
    "click",
    function () {

        clearInterval(
            catTimer
        );


        catScore = 0;

        $("cat-score").textContent =
            "Score: 0";


        const cat = $("cat");

        cat.style.display =
            "block";


        function moveCat() {

            cat.style.left =
                Math.random() * 88 +
                "%";

            cat.style.top =
                Math.random() * 78 +
                "%";

        }


        moveCat();


        catTimer =
            setInterval(
                moveCat,
                650
            );


        setTimeout(
            function () {

                clearInterval(
                    catTimer
                );

                cat.style.display =
                    "none";


                showToast(
                    "🐱 Cat escaped! Final score: " +
                    catScore
                );

            },
            15000
        );

    }
);


$("cat").addEventListener(
    "click",
    function (event) {

        event.stopPropagation();


        catScore++;


        $("cat-score").textContent =
            "Score: " +
            catScore;

    }
);


/* =========================
   BUBBLE GAME
========================= */

$("bubble-start").addEventListener(
    "click",
    function () {

        const area =
            $("bubble-area");


        area.innerHTML = "";


        let score = 0;


        $("bubble-score").textContent =
            "Score: 0";


        for (
            let i = 0;
            i < 18;
            i++
        ) {

            const bubble =
                document.createElement(
                    "button"
                );


            bubble.className =
                "bubble";


            bubble.style.left =
                Math.random() * 88 +
                "%";


            bubble.style.top =
                Math.random() * 78 +
                "%";


            bubble.addEventListener(
                "click",
                function () {

                    score++;


                    $("bubble-score")
                        .textContent =
                        "Score: " +
                        score;


                    bubble.remove();

                }
            );


            area.appendChild(
                bubble
            );

        }


        setTimeout(
            function () {

                area.innerHTML = "";

                showToast(
                    "🫧 Stress bubbles destroyed! Score: " +
                    score
                );

            },
            12000
        );

    }
);


/* =========================
   DUCK GAME
========================= */

$("duck-start").addEventListener(
    "click",
    function () {

        const area =
            $("duck-area");


        area.className =
            "game-area duck-grid";


        area.innerHTML = "";


        $("duck-result").textContent =
            "";


        const answer =
            Math.floor(
                Math.random() * 12
            );


        for (
            let i = 0;
            i < 12;
            i++
        ) {

            const cell =
                document.createElement(
                    "button"
                );


            cell.className =
                "duck-cell";


            cell.textContent =
                "❔";


            cell.addEventListener(
                "click",
                function () {

                    if (
                        i === answer
                    ) {

                        cell.textContent =
                            "🦆";


                        $("duck-result")
                            .textContent =
                            " Found it! 🎉";

                    } else {

                        cell.textContent =
                            [
                                "🌸",
                                "⭐",
                                "🍪",
                                "☕"
                            ][
                                Math.floor(
                                    Math.random() * 4
                                )
                            ];


                        $("duck-result")
                            .textContent =
                            " Nope 😂";

                    }

                }
            );


            area.appendChild(
                cell
            );

        }

    }
);


/* =========================
   MOOD BUTTON
========================= */

const moods = [

    [
        "🫠",
        "Surviving with style."
    ],

    [
        "🐱",
        "Pretending the deadline doesn't exist."
    ],

    [
        "🦥",
        "Working at the speed of a sleepy sloth."
    ],

    [
        "🐥",
        "Tiny bit stressed. Maximum cuteness."
    ],

    [
        "🦆",
        "No thoughts. Just duck."
    ],

    [
        "🦄",
        "Somehow surviving with ✨magic✨."
    ]

];


let moodIndex = 0;


$("moodBtn").addEventListener(
    "click",
    function () {

        moodIndex++;

        if (
            moodIndex >= moods.length
        ) {

            moodIndex = 0;

        }


        $("mood-face").textContent =
            moods[moodIndex][0];


        $("mood").textContent =
            "Current Mood";


        $("mood")
            .nextElementSibling
            .textContent =
            moods[moodIndex][1];

    }
);


/* =========================
   ESCAPE KEY
========================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            closeModal();

        }

    }
);
