'use strict';
import PopUp from './popup.js';

const CARROT_SIZE = 122;
const CARROT_CNT = 10;
const BUG_CNT = 10;
const GAME_DURATION = 10;

const field = document.querySelector('.gamefield');
const fieldRect = field.getBoundingClientRect();
const gameBtn = document.querySelector('.play');
const stopBtn = document.querySelector('.stop');
const gameTimer = document.querySelector('.time');
const gameScore = document.querySelector('.score');

const carrotSound = new Audio("./sound/carrot_puu.mp3");
const alertSound = new Audio("./sound/alert.wav");
const bgSound = new Audio("./sound/bg.mp3");
const winSound = new Audio("./sound/game_win.mp3");
const bugSound = new Audio("./sound/bug_pull.mp3");

let started = false;
let score = 0;
let timer = undefined;

const gameFinishiBanner = new PopUp();
gameFinishiBanner.setClickListner(() => {
    startGame();
});

gameBtn.addEventListener('click', () => {
    if (started) {
        stopGame();
    } else {
        startGame();
    }
});

field.addEventListener('click', onFieldClick);

function startGame() {
    started = true;
    initGame();
    showStopBtn();
    showTimerAndScore();
    startGameTimer();
    playSound(bgSound);
}

function stopGame() {
    started = false;
    stopGameTimer();
    hideGameButton();
    gameFinishiBanner.showWithText('REPLAY?!');
    playSound(alertSound);
    stopSound(bgSound);
}

function finishGame(win) {
    started = false;
    hideGameButton();
    if (win) {
        playSound(winSound);
    } else {
        playSound(bugSound);
    }
    stopGameTimer();
    stopSound(bgSound);
    gameFinishiBanner.showWithText(win ? 'YOU WON !!' : 'YOU LOST T-T');
}

function startGameTimer() {
    let remainingTimeSec = GAME_DURATION;
    updateTimerText(remainingTimeSec);
    timer = setInterval(() => {
        if (remainingTimeSec <= 0) {
            clearInterval(timer);
            finishGame(CARROT_CNT === score);
            return;
        }
        updateTimerText(--remainingTimeSec);
    }, 1000);
}

function stopGameTimer() {
    clearInterval(timer);
}

function updateTimerText(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    gameTimer.innerText = `${minutes}:${seconds}`;
}

function showStopBtn() {
    const icon = gameBtn.querySelector('.svg-inline--fa');
    //const icon = document.querySelector('.fas');
    gameBtn.style.visibility = 'visible';
    //gameBtn.style.visibility = 'visible';
    //icon.classList.replace('fa-play','fa-stop');
}

function hideGameButton() {
    gameBtn.style.visibility = 'hidden';
}

function showTimerAndScore() {
    gameTimer.style.visibility = 'visible';
    gameScore.style.visibility = 'visible';
}

function initGame() {
    score = 0;
    field.innerHTML = '';
    gameScore.innerText = CARROT_CNT;
    //벌레와 당근을 생성한뒤 field에 추가
    addItem('carrot', CARROT_CNT, 'img/carrot.png');
    addItem('bug', BUG_CNT, 'img/bug.png');
}

function onFieldClick(event) {
    if (!started) {
        return;
    }
    const target = event.target;
    if (target.matches('.carrot')) {
        //당근!!
        target.remove();
        score++;
        updateScoreBoard();
        if (score == CARROT_CNT) {
            finishGame(true);
        }
    } else if (target.matches('.bug')) {
        //벌레!!
        finishGame(false);
    }
}

function playSound(sound) {
    sound.currentTime = 0;
    sound.play();
}

function stopSound(sound) {
    sound.pause();
}

function updateScoreBoard() {
    gameScore.innerText = CARROT_CNT - score;
}

function addItem(className, cnt, imgPath) {
    const x1 = 0;
    const y1 = 0;
    const x2 = fieldRect.width - CARROT_SIZE;
    const y2 = fieldRect.height - CARROT_SIZE;
    for (let i = 0; i < cnt; i++) {
        const item = document.createElement('img');
        item.setAttribute('class', className);
        item.setAttribute('src', imgPath);
        item.style.position = 'absolute';
        const x = randomNum(x1, x2);
        const y = randomNum(y1, y2);
        item.style.left = `${x}px`;
        item.style.top = `${y}px`;
        field.appendChild(item);
    }
}

function randomNum(min, max) {
    return Math.random() * (max - min) + min;
}

