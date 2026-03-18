const starContainer = document.getElementById('starsContainer');
const asteroidBelt = document.getElementById('asteroid-belt');
const spaceDust = document.getElementById('space-dust');

function createSpace() {
    // 1. Twinkling Space Dust (Tiny stars)
    for (let i = 0; i < 150; i++) {
        const dust = document.createElement('div');
        dust.className = 'dust-particle';
        dust.style.left = Math.random() * 100 + '%';
        dust.style.top = Math.random() * 100 + '%';
        dust.style.animationDelay = Math.random() * 5 + 's';
        spaceDust.appendChild(dust);
    }

    // 2. Randomized Asteroids
    for (let i = 0; i < 15; i++) {
        const ast = document.createElement('div');
        ast.className = 'asteroid';
        const size = Math.random() * 50 + 20 + 'px';
        ast.style.width = size; ast.style.height = size;
        ast.style.left = Math.random() * 100 + 'vw';
        ast.style.top = Math.random() * 100 + 'vh';
        ast.style.opacity = Math.random() * 0.4;
        ast.style.animationDuration = Math.random() * 40 + 20 + 's';
        ast.style.animationDelay = Math.random() * -20 + 's';
        asteroidBelt.appendChild(ast);
    }

    // 3. Constant Shooting Stars
    setInterval(() => {
        const s = document.createElement('div');
        s.className = 'shooting-star';
        s.style.top = Math.random() * 80 + '%';
        s.style.left = '-10%';
        s.style.animationDuration = (Math.random() * 1 + 1) + 's';
        document.body.appendChild(s);
        setTimeout(() => s.remove(), 2000);
    }, 2500);
}
createSpace();
const noBtn = document.getElementById('noBtn');
let moveCount = 0;

noBtn.addEventListener('click', (e) => {
    moveCount++;
    if (moveCount < 3) {
        // Move to a random location
        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 50);
        noBtn.style.position = 'fixed';
        noBtn.style.left = x + 'px';
        noBtn.style.top = y + 'px';
    } else {
        // After 3 taps, give up and force a "Yes"
        alert("ACCESS DENIED: Error 404 - Rejection not found. 🍋");
        noBtn.innerText = "I'll be there! (Required)";
        noBtn.className = "btn yes-btn";
        noBtn.onclick = sayYes;
    }
});

// 5. Gratitude Jar logic
const boyfriendReasons = [
    "The way you always make sure I’m on the inside of the sidewalk",
    "How our dates somehow last forever but still feel too short",
    "You always plan elaborate dates <3",
    "The way you play guitar and piano",
    "You remembering the tiniest details about me",
    "How you match my energy",
    "Your curls always look perfect",
    "How you’re always down for whatever",
    "The speakeasy and how thoughtful that whole night was",
    "That improv experience that made no sense but was still fun because it was with you",
    "How you make even the most random moments feel important",
    "Doing pottery together and figuring it out as we go",
    "All the food spots you’ve shown me that I never would’ve found on my own",
    "How you plan things so thoughtfully",
    "How you make me feel taken care of",
    "The way you notice little things about me that I don’t even say out loud",
    "How easy it is to be fully myself around you",
    "The way you make everything feel lighter when I’m stressed",
    "How lucky I feel that we met when we did"
];

function pullGratitude() {
    const note = document.getElementById('gratitude-note');
    note.innerText = boyfriendReasons[Math.floor(Math.random() * boyfriendReasons.length)];
    note.classList.add('show');
    confetti({ particleCount: 30, spread: 50, colors: ['#ffb7ce', '#fff44f'] });
}

// ... (Keep Photo Rain and Timer functions from previous turn)
