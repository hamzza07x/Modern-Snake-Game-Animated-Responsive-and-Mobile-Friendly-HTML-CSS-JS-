// Generate animated background particles
function generateParticles() {
    const bgAnimation = document.getElementById('bgAnimation');
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'snake-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.width = (Math.random() * 20 + 10) + 'px';
        particle.style.height = particle.style.width;
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
        bgAnimation.appendChild(particle);
    }
}

// Loading screen
$(document).ready(function() {
    generateParticles();

    // Hide loading screen after 2 seconds
    setTimeout(function() {
        $('#loadingScreen').addClass('fade-out');
        setTimeout(function() {
            $('#loadingScreen').css('display', 'none');
            $('#landingPage').addClass('show');
        }, 500);
    }, 2000);
});

// Play button click
$('#playBtn').click(function() {
    // Show transition
    $('#transitionOverlay').addClass('active');

    // Redirect after animation
    setTimeout(function() {
        // Change this to your game file path
        window.location.href = 'Game/index.html';
    }, 1500);
});

// Add keyboard support - press Enter or Space to start
$(document).keydown(function(e) {
    if (e.keyCode === 13 || e.keyCode === 32) { // Enter or Space
        e.preventDefault();
        $('#playBtn').click();
    }
});