// ===================================
// GREETING FUNCTION
// ===================================
function sayHello() {
    const messages = [
        "Hello! Welcome to my website! 👋",
        "Thanks for clicking! You're awesome! 🌟",
        "Hope you like the orb background! ✨",
        "Have a great day! 😊"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    alert(randomMessage);
}

// ===================================
// SMOOTH SCROLLING FOR NAVIGATION
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    console.log("🚀 Website loaded successfully!");
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Welcome message after 2 seconds
    setTimeout(() => {
        console.log("✨ Thanks for visiting! Enjoy the animated orb background!");
    }, 2000);
});

// ===================================
// INTERACTIVE ORB EFFECT (OPTIONAL)
// ===================================
document.addEventListener('mousemove', function(e) {
    const orb = document.querySelector('body::after');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    // Subtle parallax effect for the whole body background
    document.body.style.setProperty('--mouse-x', x);
    document.body.style.setProperty('--mouse-y', y);
});

// ===================================
// CONSOLE EASTER EGG
// ===================================
console.log("%c🎨 Nice! You opened the console!", "color: #667eea; font-size: 20px; font-weight: bold;");
console.log("%cThis website was built with HTML, CSS, and JavaScript", "color: #764ba2; font-size: 14px;");
console.log("%cCheck out the code on GitHub!", "color: #4cc9e9; font-size: 14px;");