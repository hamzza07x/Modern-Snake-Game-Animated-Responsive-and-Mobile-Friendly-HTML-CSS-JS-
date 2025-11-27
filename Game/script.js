// Game variables
let canvas, ctx;
let snake, food, direction, score, gameRunning, gamePaused;
let gameSpeed = 150;
let currentDifficulty = 'easy';
let currentBackground = 'classic';
let highScores = {
    easy: localStorage.getItem('snakeHighScoreEasy') || 0,
    medium: localStorage.getItem('snakeHighScoreMedium') || 0,
    hard: localStorage.getItem('snakeHighScoreHard') || 0
};

// Touch handling variables
let touchStartX = 0;
let touchStartY = 0;

// Initialize game
function initGame() {
    canvas = document.getElementById('gameCanvas');
    ctx = canvas.getContext('2d');
    
    snake = [{x: 10, y: 10}];
    direction = {x: 1, y: 0}; // Start moving right
    score = 0;
    gameRunning = false;
    gamePaused = false;
    
    generateFood();
    updateScore();
    updateHighScore();
    
    // Set active background option
    updateBackgroundOptions();
}

// Menu functions
function showMainMenu() {
    hideAllMenus();
    $('#mainMenu').removeClass('hidden');
}

function showLevels() {
    hideAllMenus();
    $('#levelsMenu').addClass('show');
}

function showAbout() {
    hideAllMenus();
    $('#aboutMenu').addClass('show');
}

function showSettings() {
    hideAllMenus();
    $('#settingsMenu').addClass('show');
}

function hideAllMenus() {
    $('.submenu').removeClass('show');
}

function setDifficulty(level) {
    currentDifficulty = level;
    switch(level) {
        case 'easy':
            gameSpeed = 200;
            break;
        case 'medium':
            gameSpeed = 130;
            break;
        case 'hard':
            gameSpeed = 80;
            break;
    }
    $('#currentLevel').text(level.charAt(0).toUpperCase() + level.slice(1));
    updateHighScore();
    showMainMenu();
}

function changeBackground(bgName) {
    currentBackground = bgName;
    $('body').removeClass('bg-classic bg-forest bg-ocean bg-sunset bg-galaxy');
    $('body').addClass('bg-' + bgName);
    updateBackgroundOptions();
}

function updateBackgroundOptions() {
    $('.bg-option').removeClass('active');
    $(`.bg-${currentBackground}`).addClass('active');
}

// Game functions
function startGame() {
    $('.menu-screen').hide();
    $('#gameScreen').show();
    initGame();
    gameRunning = true;
    gameLoop();
}

function generateFood() {
    food = {
        x: Math.floor(Math.random() * 30),
        y: Math.floor(Math.random() * 30)
    };
    
    // Make sure food doesn't spawn on snake
    for(let segment of snake) {
        if(segment.x === food.x && segment.y === food.y) {
            generateFood();
            return;
        }
    }
}

function gameLoop() {
    if (!gameRunning || gamePaused) return;
    
    update();
    draw();
    
    setTimeout(gameLoop, gameSpeed);
}

function update() {
    const head = {x: snake[0].x + direction.x, y: snake[0].y + direction.y};
    
    // Check wall collision
    if(head.x < 0 || head.x >= 30 || head.y < 0 || head.y >= 30) {
        gameOver();
        return;
    }
    
    // Check self collision
    for(let segment of snake) {
        if(head.x === segment.x && head.y === segment.y) {
            gameOver();
            return;
        }
    }
    
    snake.unshift(head);
    
    // Check food collision
    if(head.x === food.x && head.y === food.y) {
        score += 10;
        updateScore();
        generateFood();
    } else {
        snake.pop();
    }
}

function draw() {
    // Clear canvas
    ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw snake
    ctx.fillStyle = '#2ecc71';
    for(let i = 0; i < snake.length; i++) {
        const segment = snake[i];
        if(i === 0) {
            ctx.fillStyle = '#27ae60'; // Head color
        } else {
            ctx.fillStyle = '#2ecc71'; // Body color
        }
        ctx.fillRect(segment.x * 20, segment.y * 20, 20, 20);
        ctx.strokeStyle = '#1e8449';
        ctx.strokeRect(segment.x * 20, segment.y * 20, 20, 20);
    }
    
    // Draw food
    ctx.fillStyle = '#e74c3c';
    ctx.fillRect(food.x * 20, food.y * 20, 20, 20);
    ctx.strokeStyle = '#c0392b';
    ctx.strokeRect(food.x * 20, food.y * 20, 20, 20);
}

function updateScore() {
    $('#score').text(score);
}

function updateHighScore() {
    $('#highScore').text(highScores[currentDifficulty]);
}

function gameOver() {
    gameRunning = false;
    
    // Check for new high score
    let isNewHighScore = false;
    if(score > highScores[currentDifficulty]) {
        highScores[currentDifficulty] = score;
        localStorage.setItem('snakeHighScore' + currentDifficulty.charAt(0).toUpperCase() + currentDifficulty.slice(1), score);
        isNewHighScore = true;
    }
    
    // Show game over modal
    $('#finalScore').text(score);
    if(isNewHighScore) {
        $('#newHighScore').removeClass('hidden');
    } else {
        $('#newHighScore').addClass('hidden');
    }
    
    $('#gameOverModal').modal('show');
}

function pauseGame() {
    gamePaused = !gamePaused;
    if(!gamePaused) {
        gameLoop();
    }
}

function restartGame() {
    $('#gameOverModal').modal('hide');
    initGame();
    gameRunning = true;
    gameLoop();
}

function backToMenu() {
    gameRunning = false;
    gamePaused = false;
    $('#gameOverModal').modal('hide');
    $('#gameScreen').hide();
    $('.menu-screen').show();
    showMainMenu();
}

function changeDirection(newDirection) {
    if(!gameRunning) return;
    
    switch(newDirection) {
        case 'up':
            if(direction.y !== 1) {
                direction.x = 0;
                direction.y = -1;
            }
            break;
        case 'down':
            if(direction.y !== -1) {
                direction.x = 0;
                direction.y = 1;
            }
            break;
        case 'left':
            if(direction.x !== 1) {
                direction.x = -1;
                direction.y = 0;
            }
            break;
        case 'right':
            if(direction.x !== -1) {
                direction.x = 1;
                direction.y = 0;
            }
            break;
    }
}

// Event listeners
$(document).keydown(function(e) {
    if(!gameRunning) return;
    
    switch(e.keyCode) {
        case 37: // Left
            if(direction.x !== 1) { // Prevent reversing into itself
                direction.x = -1;
                direction.y = 0;
            }
            break;
        case 38: // Up
            if(direction.y !== 1) { // Prevent reversing into itself
                direction.x = 0;
                direction.y = -1;
            }
            break;
        case 39: // Right
            if(direction.x !== -1) { // Prevent reversing into itself
                direction.x = 1;
                direction.y = 0;
            }
            break;
        case 40: // Down
            if(direction.y !== -1) { // Prevent reversing into itself
                direction.x = 0;
                direction.y = 1;
            }
            break;
        case 27: // Escape
            pauseGame();
            break;
    }
});

// Initialize on page load
$(document).ready(function() {
    initGame();
    updateHighScore();
    
    // Mobile touch controls
    $('#upBtn').on('click touchstart', function(e) {
        e.preventDefault();
        changeDirection('up');
    });
    
    $('#downBtn').on('click touchstart', function(e) {
        e.preventDefault();
        changeDirection('down');
    });
    
    $('#leftBtn').on('click touchstart', function(e) {
        e.preventDefault();
        changeDirection('left');
    });
    
    $('#rightBtn').on('click touchstart', function(e) {
        e.preventDefault();
        changeDirection('right');
    });
    
    // Swipe controls for canvas
    $('#gameCanvas').on('touchstart', function(e) {
        e.preventDefault();
        touchStartX = e.originalEvent.touches[0].clientX;
        touchStartY = e.originalEvent.touches[0].clientY;
    });
    
    $('#gameCanvas').on('touchend', function(e) {
        e.preventDefault();
        if(!gameRunning) return;
        
        let touchEndX = e.originalEvent.changedTouches[0].clientX;
        let touchEndY = e.originalEvent.changedTouches[0].clientY;
        
        let diffX = touchStartX - touchEndX;
        let diffY = touchStartY - touchEndY;
        
        // Minimum swipe distance
        if(Math.abs(diffX) < 30 && Math.abs(diffY) < 30) return;
        
        if(Math.abs(diffX) > Math.abs(diffY)) {
            // Horizontal swipe
            if(diffX > 0) {
                changeDirection('left');
            } else {
                changeDirection('right');
            }
        } else {
            // Vertical swipe
            if(diffY > 0) {
                changeDirection('up');
            } else {
                changeDirection('down');
            }
        }
    });
    
    // Prevent scrolling on touch devices
    $(document).on('touchmove', function(e) {
        if($(e.target).closest('#gameCanvas, .mobile-controls').length) {
            e.preventDefault();
        }
    });
});