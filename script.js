// 1. Fixed Count-up Timer (Met Nov 6, 2025 at 6pm)
const metDate = new Date("November 6, 2025 18:00:00").getTime();

function updateCounter() {
    const now = new Date().getTime();
    const diff = now - metDate;

    document.getElementById("days").innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerText = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("minutes").innerText = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("seconds").innerText = Math.floor((diff % (1000 * 60)) / 1000);
}
setInterval(updateCounter, 1000);
updateCounter(); // Run immediately

// 2. Star Trail Cursor
document.addEventListener('mousemove', (e) => {
    const star = document.createElement('div');
    star.innerHTML = '✨';
    star.style.position = 'fixed';
    star.style.left = e.clientX + 'px';
    star.style.top = e.clientY + 'px';
    star.style.pointerEvents = 'none';
    star.style.zIndex = '999';
    document.body.appendChild(star);

    star.animate([
        { transform: 'scale(1) rotate(0)', opacity: 1 },
        { transform: `translate(${(Math.random()-0.5)*100}px, 100px) scale(0)`, opacity: 0 }
    ], { duration: 1000 });
    setTimeout(() => star.remove(), 1000);
});

// 3. Whimsical "No" Button
const noBtn = document.getElementById('noBtn');
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'fixed';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});

// 4. RSVP Success
const yesBtn = document.getElementById('yesBtn');
const successOverlay = document.getElementById('successOverlay');

yesBtn.addEventListener('click', () => {
    successOverlay.classList.remove('hidden');
    confetti({ particleCount: 200, spread: 80, origin: { y: 0.6 } });
});

function closeOverlay() { successOverlay.classList.add('hidden'); }

// 5. Scroll Reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
