
const playButton = document.getElementById('play');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const progressBar = document.getElementById('progress-bar');
const songTitle = document.querySelector('.song-title');
const songArtist = document.querySelector('.song-artist');
const thumbnail = document.querySelector('.thumbnail');

const songs = [
    {
        title: 'Sajni',
        artist: 'Arijit Singh',
        src: 'Sajni.mp3',
        thumbnail: 'aj.jpg'
    },
    {
        title: 'Top Hits',
        artist: 'Various Artists',
        src: 'Chumma.mp3',
        thumbnail: 'tophits.jpg'
    },
    {
        title: 'Chill Vibes',
        artist: 'Various Artists',
        src: 'Aayi Nai Stree.mp3',
        thumbnail: 'chillvibes.jpg'
    },
    {
        title: 'Workout',
        artist: 'Various Artists',
        src: 'Kissik.mp3',
        thumbnail: 'workout.jpg'
    }
];

let currentSongIndex = 0;
let isPlaying = false;
const audio = new Audio();

function loadSong(index) {
    const song = songs[index];
    audio.src = song.src;
    songTitle.textContent = song.title;
    songArtist.textContent = song.artist;
    thumbnail.src = song.thumbnail;
}

function togglePlay() {
    if (isPlaying) {
        audio.pause();
        playButton.textContent = '▶️';
    } else {
        audio.play();
        playButton.textContent = '⏸️';
    }
    isPlaying = !isPlaying;
}

function playNext() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    if (isPlaying) audio.play();
}

function playPrev() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    if (isPlaying) audio.play();
}

function updateProgress() {
    progressBar.value = (audio.currentTime / audio.duration) * 100;
}

function setProgress(e) {
    const newTime = (e.target.value / 100) * audio.duration;
    audio.currentTime = newTime;
}


playButton.addEventListener('click', togglePlay);
nextButton.addEventListener('click', playNext);
prevButton.addEventListener('click', playPrev);
audio.addEventListener('timeupdate', updateProgress);
progressBar.addEventListener('input', setProgress);


loadSong(currentSongIndex);
