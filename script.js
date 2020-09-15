score = 0;
cross = true;
audio = new Audio('gamePlay.mp3');
audioEnd = new Audio('gameEnd.mp3')
setTimeout(() => {
    audio.play();
}, 1000);
setTimeout(() => {
    gameOver.innerHTML = ''
}, 3000);
document.onkeydown = function (e){
    // console.log("The key code :"+e.keyCode);
    if(e.keyCode == 38){
        runner = document.querySelector(".runner");
        runner.classList.add('animateRunner');
        setTimeout(() =>{
            runner.classList.remove('animateRunner')
        }, 500);
    }
    else if(e.keyCode == 39){
        runner = document.querySelector(".runner");
        runnerX =parseInt(window.getComputedStyle(runner, null).getPropertyValue('left'));
        runner.style.left = runnerX + 112 + "px";
    }
    else if(e.keyCode == 37){
        runner = document.querySelector(".runner");
        runnerX =parseInt(window.getComputedStyle(runner, null).getPropertyValue('Left'));
        runner.style.left = (runnerX - 112) + "px";
    }
};

setInterval(() => {
    runner = document.querySelector('.runner');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    rx = parseInt(window.getComputedStyle(runner, null).getPropertyValue('left'));
    ry = parseInt(window.getComputedStyle(runner, null).getPropertyValue('Top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('Top'));

    offsetX = Math.abs(rx-ox);
    offsetY = Math.abs(ry-oy);
    console.log(offsetX, offsetY);

    if (offsetX<94 && offsetY<52){
        gameOver.innerHTML =  'Game Over';
        gameOver.style.color = 'red';
        runner.style.animation ='dead 1.5s linear';
        runner.style.bottom = '-200px'
        cross = false
        audio.pause()
        audioEnd.play()
        setTimeout(() => {
            audioEnd.pause()
        }, 3000);
        obstacle.classList.remove('animateObstacle');
        
    }
    else if(offsetX<145 && cross){
        score += 1; 
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        },1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            if(aniDur > 3){
                newDur = aniDur - 0.1;};
            obstacle.style.animationDuration = newDur + 's';
        }, 500);
    }
}, 10);

function updateScore(score){
    scoreCount.innerHTML = "Your score : " + score;
};
function displayScore(score) {
    
}