// 1. Star Trail Effect
document.addEventListener('mousemove', (e) => {
    const star = document.createElement('div');
    star.className = 'star-particle';
    star.innerHTML = '✨'; // or use '⭐'
    star.style.left = e.clientX + 'px';
    star.style.top = e.clientY + 'px';
    star.style.fontSize = Math.random() * 20 + 10 + 'px';
    
    document.body.appendChild(star);
    
    setTimeout(() => {
        star.remove();
    }, 1000);
});

// 2. RSVP Logic
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const successOverlay = document.getElementById('successOverlay');
const noResponse = document.getElementById('noResponse');

yesBtn.addEventListener('click', () => {
    successOverlay.classList.remove('hidden');
    // Trigger Confetti!
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ffb7ce', '#ffffff', '#fff4d1']
    });
});

noBtn.addEventListener('click', () => {
    noResponse.classList.remove('hidden');
    noBtn.style.display = 'none';
});

function closeOverlay() {
    successOverlay.classList.add('hidden');
}

// 3. Scroll Reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(section => observer.observe(section));
