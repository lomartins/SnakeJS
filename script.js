const screen = document.getElementById('screen')
const context = screen.getContext('2d')

function randomOnGrid() {
    return parseInt(Math.random() * 20 - 0 + 1)
}

const game = {
    snake: [{x: 6, y:5}, {x: 5, y: 5}],
    direction: 'Right',
    apple: {x: randomOnGrid(), y: randomOnGrid()}
}


renderScreen()


// Apresentação
function renderScreen() {
    context.clearRect(0, 0, screen.width, screen.height)

    context.fillStyle = 'red'
    context.fillRect(game.apple.x, game.apple.y, 1, 1)

    for(bodyId in game.snake) {
        const body = game.snake[bodyId]
        context.fillStyle = 'black'
        context.fillRect(body.x, body.y, 1, 1)
    }
    
}


// Entrada
document.addEventListener("keydown", handleKeydown)

function handleKeydown(event) {
    const keyPressed = event.key

    if (keyPressed === 'ArrowUp') {
        game.direction = 'Up'
    }
    if (keyPressed === 'ArrowDown') {
        game.direction = 'Down'
    }
    if (keyPressed === 'ArrowLeft') {
        game.direction = 'Left'
    }
    if (keyPressed === 'ArrowRight') {
        game.direction = 'Right'
    }
}



// Movimento
setInterval(moveSnake, 128)
function moveSnake() {
    const direction = game.direction
    const player = game.snake

    for (var i = player.length - 1; i > 0; i--) {
        player[i].x = player[i-1]['x']
        player[i].y = player[i-1]['y']
    }

    if (direction === 'Up') {
        player[0].y -= 1
    }
    if (direction === 'Down') {
        player[0].y += 1
    }
    if (direction === 'Left') {
        player[0].x -= 1
    }
    if (direction === 'Right') {
        player[0].x += 1
    }


    requestAnimationFrame(renderScreen)
}
