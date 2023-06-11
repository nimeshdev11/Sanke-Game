// let lastPainTime = 0;
// let Snake_Speed = 3;
// let inputDirection = { x: 0, y: 0 };
// let lastInputDirection = inputDirection;
// let food = { x: 15, y: 15 };
// let Expenssion = 1;
// let score = 0;
// const snakeBody = [
//   {
//     x: 8,
//     y: 8,
//   },
//   //   {
//   //     x: 9,
//   //     y: 8,
//   //   },
//   //   {
//   //     x: 10,
//   //     y: 8,
//   //   },
//   //   {
//   //     x: 11,
//   //     y: 8,
//   //   },
// ];
// const paint = (currentTime) => {
//   let timeSecond = (currentTime - lastPainTime) / 1000;
//   requestAnimationFrame(paint);
//   if (timeSecond < 1 / Snake_Speed) return;
//   lastPainTime = currentTime;
//   update();
//   draw();
// };

// window.requestAnimationFrame(paint); //For repated time
// const gameBoard = document.querySelector(".gameboard");
// let scoreBox = document.getElementById('score');
// const draw = () => {
//   drawSnake();
//   drawFood();
// };

// const update = () => {
//   gameBoard.innerHTML = "";
//   sankeMove();
//   sankeEatFood();

// };

// const drawSnake = () => {
//   snakeBody.forEach((segment, index) => {
//     let snakeElement = document.createElement("div");
//     snakeElement.style.gridColumnStart = segment.x;
//     snakeElement.style.gridRowStart = segment.y;
//     // snakeElement.innerHTML = index;
//     snakeElement.style.transform = "rotate(0deg)";
//     if (index == 0) {
//       snakeElement.classList.add("head");

//       if (inputDirection.x == 1) {
//         snakeElement.style.transform = "rotate(-90deg)";
//       } else if (inputDirection.x == -1) {
//         snakeElement.style.transform = "rotate(90deg)";
//       } else if (inputDirection.y == -1) {
//         snakeElement.style.transform = "rotate(180deg)";
//       } else if (inputDirection.y == 1) {
//         snakeElement.style.transform = "rotate(0deg)";
//       }
//     } else {
//       snakeElement.classList.add("snake");
//     }

//     gameBoard.appendChild(snakeElement);
//   });
// };

// const drawFood = () => {
//   let foodElement = document.createElement("div");
//   foodElement.style.gridColumnStart = food.x;
//   foodElement.style.gridRowStart = food.y;
//   foodElement.classList.add("apple");
//   gameBoard.appendChild(foodElement);
// };

// const sankeMove = () => {
//   inputDirection = getInputDirection();
//   for (i = snakeBody.length - 2; i >= 0; i--) {
//     snakeBody[i + 1] = { ...snakeBody[i] };
//   }
//   snakeBody[0].x += inputDirection.x;
//   snakeBody[0].y += inputDirection.y;
//   checkGameOver();

// };

// const getInputDirection = () => {
//   window.addEventListener("keydown", (e) => {
//     switch (e.key) {
//       case "ArrowUp":
//         if (lastInputDirection.y == 1) break;
//         inputDirection = { x: 0, y: -1 };
//         break;
//       case "ArrowDown":
//         if (lastInputDirection.y == -1) break;
//         inputDirection = { x: 0, y: 1 };
//         break;
//       case "ArrowRight":
//         if (lastInputDirection.x == -1) break;

//         inputDirection = { x: 1, y: 0 };
//         break;
//       case "ArrowLeft":
//         if (lastInputDirection.x == 1) break;

//         inputDirection = { x: -1, y: 0 };
//         break;
//       default:
//         inputDirection = { x: 0, y: 0 };
//     }
//   });
//   lastInputDirection = inputDirection;
//   return inputDirection;
// };

// const sankeEatFood = () => {
//   if (isEat()) {
//     food = getFoodRandomPosstion();
//     score += 10;
//     scoreBox.innerHTML = score
//     Snake_Speed++
//     sound();
//     expendSnake();

//   }

// }
// const isEat = () => {

//   return snakeBody[0].x === food.x && snakeBody[0].y === food.y

// }

// const getFoodRandomPosstion = () => {
//   let a, b, myCondition = true;
//   while (myCondition) {
//     a = Math.ceil(Math.random() * 16)
//     b = Math.ceil(Math.random() * 16)

//     myCondition = snakeBody.some(segment => {
//       return segment.x === a && segment.y === b
//     })
//   }

//   return { x: a, y: b }

// }
// const expendSnake = () => {
//   for (i = 0; i < Expenssion; i++) {
//     snakeBody.push(snakeBody[snakeBody.length - 1]);
//   }

// }

// function checkGameOver() {
//   if (snakeOutofGrid() || snakeInterSection()) {
//     location.reload();
//     alert("Game Over: your Loss");
//      }
    

// }

// function snakeOutofGrid() {
//   return snakeBody[0].x < 0 || snakeBody[0].x > 16 || snakeBody[0].y < 0 || snakeBody[0].y > 16;


// }

// function snakeInterSection() {
//   for (i = 1; i < snakeBody.length; i++) {
//     if (snakeBody[0].x === snakeBody[i].x && snakeBody[0].y === snakeBody[i].y) {
//       return true
//     }
//   }

// }


// function sound() {
//   var snd = new Audio('beep.wav')//wav is also supported
//   snd.play()
// }

var lastPaintTime = 0;
let SNAKE_SPEED = 2;
let inputDirection = {
   x: 0,
   y: 0
}
let lastInputDirection = inputDirection;
let gameOver = false;


const EXPENTION_AMOUNT = 1;
var score = 0;
const snakeBody = [{
      x: 8,
      y: 8
   },
];
let food = getFoodrandomPosition();
const gameBoard = document.querySelector(".game-board");
const scoreBox = document.getElementById("score");

function paint(currentTime) {
   var TimeSeconds = (currentTime - lastPaintTime) / 1000;
   requestAnimationFrame(paint);
   if (TimeSeconds < 1 / SNAKE_SPEED) return;
   lastPaintTime = currentTime;

   if (gameOver != true) {
      update();
      draw();
   }
}

window.requestAnimationFrame(paint);

function draw() {
   drawSnake();
   drawFood();
}

function update() {
   gameBoard.innerHTML = "";
   snakeMove();
   snakeEatFood();
}

function drawSnake() {
   snakeBody.forEach((segment, index) => {
      var snakeElement = document.createElement("div");
      snakeElement.style.gridColumnStart = segment.x;
      snakeElement.style.gridRowStart = segment.y;
      // snakeElement.innerHTML = index;
      snakeElement.style.transform = "rotate(0deg)";
      if (index == 0) {
         snakeElement.classList.add("head");

         if (inputDirection.x == 1) {
            snakeElement.style.transform = "rotate(-90deg)";
         } else if (inputDirection.x == -1) {
            snakeElement.style.transform = "rotate(90deg)";
         } else if (inputDirection.y == -1) {
            snakeElement.style.transform = "rotate(180deg)";
         } else if (inputDirection.y == 1) {
            snakeElement.style.transform = "rotate(0deg)";
         }
      } else {
         snakeElement.classList.add("snake");
      }
      gameBoard.appendChild(snakeElement);

   });
}

function drawFood() {
   var foodElement = document.createElement("div");
   foodElement.style.gridColumnStart = food.x;
   foodElement.style.gridRowStart = food.y;
   foodElement.classList.add("food");
   gameBoard.appendChild(foodElement);
}

function snakeMove() {
   inputDirection = getInputDirection();

   for (i = snakeBody.length - 2; i >= 0; i--) {
      snakeBody[i + 1] = {
         ...snakeBody[i]
      }
   }
   snakeBody[0].x += inputDirection.x;
   snakeBody[0].y += inputDirection.y;
   checkGameOver();
}


function getInputDirection() {
   window.addEventListener("keydown", e => {

      switch (e.key) {
         case 'ArrowUp':
            if (lastInputDirection.y == 1) break;
            inputDirection = {
               x: 0,
               y: -1
            }
            break;
         case 'ArrowDown':
            if (lastInputDirection.y == -1) break;
            inputDirection = {
               x: 0,
               y: 1
            }
            break;
         case 'ArrowLeft':
            if (lastInputDirection.x == 1) break;
            inputDirection = {
               x: -1,
               y: 0
            }
            break;
         case 'ArrowRight':
            if (lastInputDirection.x == -1) break;
            inputDirection = {
               x: 1,
               y: 0
            }
            break;
         default:
            inputDirection = {
               x: 0,
               y: 0
            }
      }
   })
   lastInputDirection = inputDirection;
   return inputDirection;
}


function snakeEatFood() {
   if (isEat()) {
      score += 10;
      scoreBox.innerHTML = score;
      console.log("eated")
      food = getFoodrandomPosition();
      SNAKE_SPEED++;
      expendSnake();
   }
}

function isEat() {
   return snakeBody[0].x === food.x && snakeBody[0].y === food.y;
}

function getFoodrandomPosition() {

   let a, b, myCondition = true;
   while (myCondition) {
      a = Math.ceil(Math.random() * 16);
      b = Math.ceil(Math.random() * 16);

      myCondition = snakeBody.some(segment => {
         return segment.x === a && segment.y === b;
      })
   }
   return {
      x: a,
      y: b
   };
}

function expendSnake() {
   for (i = 0; i < EXPENTION_AMOUNT; i++) {
      snakeBody.push(snakeBody[snakeBody.length - 1]);
   }
}

function checkGameOver() {
   if (snakeOutOfGrid() || snakeIntersection()) {
      alert("Game Over : You Loose");
      gameOver = true;
      location.reload();
   }
}

function snakeOutOfGrid() {
   return snakeBody[0].x < 0 || snakeBody[0].x > 16 || snakeBody[0].y < 0 || snakeBody[0].y > 16;
}

function snakeIntersection() {
   for (i = 1; i < snakeBody.length; i++) {
      if (snakeBody[0].x === snakeBody[i].x && snakeBody[0].y === snakeBody[i].y) {
         return true;
      }
   }
}