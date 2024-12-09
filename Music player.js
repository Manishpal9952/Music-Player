// let song = document.getElementById('song');
// let progress = document.querySelector('.range1');
// let playBtn = document.querySelector('.players2');

// song.onloadedmetadata = function(){
//   progress.max = song.duration;
//   progree.value = song.currentTime;
// };


// function playPause(){
//     if(playBtn.classList.contains("bi-pause-fill")){
//         song.pause();
//         playBtn.classList.remove("bi-pause-fill");
//         playBtn.classList.add("bi-play-fill");
//     }
//     else{
//         song.play();
//         playBtn.classList.remove("bi-play-fill");
//         playBtn.classList.add("bi-pause-fill");
//     }
// }

// if(song.play()){
//     setInterval(()=>{
//         progress.value = song.currentTime;
//     },500)
// }

// progress.onchange = function(){
//     song.play();
//     song.currentTime = progress.value;
//     playBtn.classList.remove("bi-play-fill");
//     playBtn.classList.add("bi-pause-fill");
// }


let song = document.getElementById('song');
let progress = document.querySelector('.range1');
let btn = document.querySelector('.players2');

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause() {
    document.querySelector('.bi-play-fill').style.display = "none"
    if (btn.classList.contains("bi-pause-fill")) {
        song.pause();
        btn.classList.remove("bi-pause-fill");
        btn.classList.add("bi-play-fill");
    }
    else {
        song.play();
        btn.classList.remove("bi-play-fill");
        btn.classList.add("bi-pause-fill");
    }
}

if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 300)
}

progress.onchange = function () {
    song.play();
    song.currentTime = progress.value;
    // btn.classList.remove("bi-play-fill");
    // btn.classList.add("bi-pause-fill");
}



