const player = document.getElementById('wrapper');
const audio = document.querySelector('audio');
const buttonPlay = document.getElementById('play');
const buttonPause = document.querySelector('.play');
const buttonForward = document.getElementById('forward');
const buttonBackward = document.getElementById('backward');
const image = document.getElementById('image');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const progress = document.getElementById('progress');
const duration = document.getElementById('duration');
const time = document.getElementById('time');
const songs = ["Don't Hurt Yourself", "Don't Start Now"]; 
const artists = ["Beyonce", "Dua Lipa"];

//песня по умолчанию
let songIndex = 1;

function loadSong(song) {
    title.innerHTML = song;
    artist.innerHTML = artists[songIndex];
    audio.src = `assets/audio/${song}.mp3`;
    image.src = `assets/img/image${songIndex + 1}.png`;
}

loadSong(songs[songIndex]);

// play
function playSong() {
    player.classList.add('play');
    audio.play();
};

//pause
function pauseSong() {
    player.classList.remove('play');
    audio.pause();
};

//play-pause in the same btn
buttonPlay.addEventListener('click', () => {
    const isPlaying = player.classList.contains('play');
    if (isPlaying) {
        pauseSong()
    } else {
        playSong();
    };
})
