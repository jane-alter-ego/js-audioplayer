const player = document.getElementById('wrapper');
const audio = document.querySelector('audio');
const buttonPlay = document.getElementById('play');
const buttonSrc = document.querySelector('.src');
const buttonForward = document.getElementById('forward');
const buttonBackward = document.getElementById('backward');
const image = document.getElementById('image');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const progress = document.getElementById('progress');
const trackLength = document.getElementById('duration');
const time = document.getElementById('time');
const songs = ["Don't Hurt Yourself", "Don't Start Now"]; 
const artists = ["Beyonce", "Dua Lipa"];

//песня по умолчанию
let songIndex = 0;

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
    buttonSrc.src = `assets/svg/pause.png`;
    audio.play();
};

//pause
function pauseSong() {
    player.classList.remove('play');
    buttonSrc.src = `assets/svg/play.png`;
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

// next 
function nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
};

buttonForward.addEventListener('click', nextSong);

// back

function prevSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong();
};

buttonBackward.addEventListener('click', prevSong);

// progress bar

function progressBar(e) {
    const {duration, currentTime} = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
    trackLength.innerHTML = getFormattedTime(duration);
    time.innerHTML = getFormattedTime(currentTime); 
}

function getFormattedTime(time) {
    if (Number.isNaN(time)) return '0:00';
    const seconds = Math.floor(time % 60)
    return `${Math.floor(time / 60) || '0'}:${seconds < 10 ? '0' + seconds : seconds}`
}

audio.addEventListener('timeupdate', progressBar);
