// 🎉 Contact Form Confetti
document.getElementById("contact-form").addEventListener("submit", function(e) {
  // Let Netlify handle submission, just show confetti
  for (let i = 0; i < 30; i++) {
    let confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * window.innerWidth + "px";
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 3000);
  }
});

const style = document.createElement("style");
style.textContent = `
.confetti {
  position: fixed;
  top: 0;
  width: 10px;
  height: 10px;
  background: hsl(${Math.random() * 360}, 100%, 50%);
  animation: fall 3s linear forwards;
}
@keyframes fall {
  to { transform: translateY(100vh) rotate(720deg); opacity: 0; }
}`;
document.head.appendChild(style);

// 🎥 Video hover autoplay (desktop only)
if (window.innerWidth > 768) {
  document.querySelectorAll("#portfolio video").forEach(video => {
    video.addEventListener("mouseenter", () => {
      video.muted = true;
      video.play();
    });
    video.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0;
    });
  });
}

// 🌀 Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// ⌨️ Typewriter Effect
const typedText = document.getElementById("typed-text");
const textArray = ["Reel Creator 🎬", "Content Creator ✨", "Creating Vibes 💫"];
let arrayIndex = 0;
let charIndex = 0;

function typeWriter() {
  if (charIndex < textArray[arrayIndex].length) {
    typedText.textContent += textArray[arrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typedText.textContent = textArray[arrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    arrayIndex = (arrayIndex + 1) % textArray.length;
    setTimeout(typeWriter, 500);
  }
}

document.addEventListener("DOMContentLoaded", typeWriter);
