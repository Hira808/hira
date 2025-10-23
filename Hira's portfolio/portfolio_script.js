// Optional JS to make sure links scroll smoothly
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});


const texts = [
  "This is Hira ",
  "A student",
  "Web Developer",
  "Creative Designer",
  
];

const typingElement = document.querySelector(".typing");

let textIndex = 0;  
let charIndex = 0;  
let isDeleting = false;
let speed = 150;

function typeEffect() {
  const currentText = texts[textIndex];

  if (!isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentText.length) {
      isDeleting = true;
      speed = 1000; 
    } else {
      speed = 150;
    }
  } else {
    typingElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length; 
      speed = 500; 
    } else {
      speed = 50; 
    }
  }

  setTimeout(typeEffect, speed);
}

// start animation
typeEffect();


// Select buttons
const emailBtn = document.querySelector(".btn button:nth-child(1)");
const socialBtn = document.querySelector(".btn button:nth-child(2)");

// Email Me button
emailBtn.addEventListener("click", () => {
    window.location.href = "mailto:yourname@example.com"; // replace with your email
});

// Contact Social button
socialBtn.addEventListener("click", () => {
    window.open("https://www.youtube.com/@thedivasguidebyhira", "_blank"); // replace with your social link
});


// img
  const popup = document.getElementById("popup");
  const sampleImage = document.getElementById("sampleImage");

  sampleImage.addEventListener("click", () => {
    popup.style.display = "flex";
  });

  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });




    // ----- CODING -----
    function openCodePopup() {
      document.getElementById("codePopup").style.display = "flex";
    }
    function closeCodePopup() {
      document.getElementById("codePopup").style.display = "none";
    }

    // ----- DESIGN -----
    function openDesignPopup() {
      document.getElementById("designPopup").style.display = "flex";
    }
    function closeDesignPopup() {
      document.getElementById("designPopup").style.display = "none";
    }

    // ----- CONTENT -----
    function openContentPopup() {
      document.getElementById("contentPopup").style.display = "flex";
    }
    function closeContentPopup() {
      document.getElementById("contentPopup").style.display = "none";
    }

    // ----- SHOP -----
    function openShopPopup() {
      document.getElementById("shopPopup").style.display = "flex";
    }
    function closeShopPopup() {
      document.getElementById("shopPopup").style.display = "none";
    }

    // Close popup when clicking outside
    window.addEventListener("click", function(event) {
      const popups = [
        "codePopup", "designPopup", "contentPopup", "shopPopup"
      ];
      popups.forEach(id => {
        const popup = document.getElementById(id);
        if (event.target === popup) {
          popup.style.display = "none";
        }
      });
    });


function openWriting(link) {
  window.open(link, "_blank");
}

const writings = [
  {
    selector: ".contentup1",
    image: "weby.jpeg",
    file: "writing1.pdf"
  },
  {
    selector: ".contentup2",
    image: "writing2.jpeg",
    file: "writing2.pdf"
  },
  {
    selector: ".contentup3",
    image: "writing3.jpeg",
    file: "writing3.pdf"
  },
  {
    selector: ".contentup4",
    image: "writing4.jpeg",
    file: "writing4.pdf"
  }
];

// === Apply Your Data Automatically ===
writings.forEach(writing => {
  const box = document.querySelector(writing.selector);
  if (box) {
    box.style.backgroundImage = `url(${writing.image})`;
    box.onclick = () => window.open(writing.file, "_blank");
  }
});



