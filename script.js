/* PARTICELLE FUTURISTICHE */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 150; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.6,
        dy: (Math.random() - 0.5) * 0.6
    });
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(120,200,255,0.55)";
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    });

    requestAnimationFrame(animateParticles);
}

animateParticles();

/* SCROLL REVEAL */
function reveal() {
    document.querySelectorAll(".animate").forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 80) {
            el.classList.add("visible");
        }
    });
}
window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

/* BUTTON MAGNETICO */
document.querySelectorAll(".magnetic").forEach(button => {
    button.addEventListener("mousemove", e => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width/2;
        const y = e.clientY - rect.top - rect.height/2;
        button.style.transform = `translate(${x/6}px, ${y/6}px) scale(1.1)`;
    });
    button.addEventListener("mouseleave", () => {
        button.style.transform = "translate(0,0) scale(1)";
    });
});

/* HERO PARALLAX */
const heroBg = document.querySelector(".hero-bg");
window.addEventListener("scroll", () => {
    heroBg.style.transform = `translateY(${window.scrollY * 0.25}px) scale(1.1)`;
});
