const audioCon = document.querySelector('#musicPly');
const playBtn = document.querySelector('#play');
const stopBtn = document.querySelector('#stop');
const pauseBtn = document.querySelector('#pause');

function playAudio() {
    audioCon.volume = 1;
    audioCon.loop = true;
    audioCon.play();  
  }

  function pauseAudio() {
    audioCon.pause();  
  }
  
function stopAudio() {
  audioCon.pause();
  audioCon.currentTime=0;
}

playBtn.addEventListener("click", playAudio);
stopBtn.addEventListener("click", stopAudio);
pauseBtn.addEventListener("click", pauseAudio);