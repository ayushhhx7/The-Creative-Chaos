document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("🎉 Thanks for reaching out! I'll get back soon.");
  

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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Typewriter effect for hero section
const textArray = ["Reel Creator 🎥", "Content Maker ✨", "Storyteller 💫"];
let typingIndex = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing");

function typeEffect() {
  if (charIndex < textArray[typingIndex].length) {
    typingElement.textContent += textArray[typingIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 2000);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingElement.textContent = textArray[typingIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    typingIndex = (typingIndex + 1) % textArray.length;
    setTimeout(typeEffect, 500);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);

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
