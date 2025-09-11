// =======================
// Logo Hover Effect Script
// Rotates the logo slightly on mouse enter
// Resets rotation on mouse leave
// =======================
const logo = document.querySelector('.logo')

logo.addEventListener('mouseenter', () =>{
    logo.style.transition = "transform 0.6s ease";
    logo.style.transform = "rotate(-12deg)";
});

logo.addEventListener('mouseleave', () =>{
    logo.style.transition = "transform 0.6s ease";
    logo.style.transform = "rotate(0deg)";
});


