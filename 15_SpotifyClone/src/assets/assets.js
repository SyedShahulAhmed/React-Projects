// Icons

import bell_icon from './bell.png'
import home_icon from './home.png'
import like_icon from './like.png'
import loop_icon from './loop.png'
import mic_icon from './mic.png'
import next_icon from './next.png'
import play_icon from './play.png'
import pause_icon from './pause.png'
import plays_icon from './plays.png'
import prev_icon from './prev.png'
import search_icon from './search.png'
import shuffle_icon from './shuffle.png'
import speaker_icon from './speaker.png'
import stack_icon from './stack.png'
import zoom_icon from './zoom.png'
import plus_icon from './plus.png'
import arrow_icon from './arrow.png'
import mini_player_icon from './mini-player.png'
import queue_icon from './queue.png'
import volume_icon from './volume.png'
import arrow_right from './right_arrow.png'
import arrow_left from './left_arrow.png'
import spotify_logo from './spotify_logo.png'
import clock_icon from './clock_icon.png'

//Songs Thumbnails

import simg1 from './SongImages/img1.png'
import simg2 from './SongImages/img2.png'
import simg3 from './SongImages/img3.png'
import simg4 from './SongImages/img4.png'
import simg5 from './SongImages/img5.png'
import simg6 from './SongImages/img6.png'
import simg7 from './SongImages/img7.png'
import simg8 from './SongImages/img8.png'
import simg9 from './SongImages/img9.png'
import simg10 from './SongImages/img10.png'

// Album Thumbnails

import Aimg1 from '../assets/AlbumImages/Aimg1.jpg'
import Aimg2 from '../assets/AlbumImages/Aimg2.jpg'
import Aimg3 from '../assets/AlbumImages/Aimg3.jpg'
import Aimg4 from '../assets/AlbumImages/Aimg4.jpg'
import Aimg5 from '../assets/AlbumImages/Aimg5.jpg'
import Aimg6 from '../assets/AlbumImages/Aimg6.jpg'
import Aimg7 from '../assets/AlbumImages/Aimg7.jpg'
import Aimg8 from '../assets/AlbumImages/Aimg8.jpg'
import Aimg9 from '../assets/AlbumImages/Aimg9.jpg'

// Songs

import song1 from  './Songs/song1.mp3'
import song2 from  './Songs/song2.mp3'
import song3 from  './Songs/song3.mp3'
import song4 from  './Songs/song4.mp3'
import song5 from  './Songs/song5.mp3'
import song6 from  './Songs/song6.mp3'
import song7 from  './Songs/song7.mp3'
import song8 from  './Songs/song8.mp3'
import song9 from  './Songs/song9.mp3'
import song10 from  './Songs/song10.mp3'

//Artists

import Artist1 from '../assets/Artists/Artist1.png'
import Artist2 from '../assets/Artists/Artist2.png'
import Artist3 from '../assets/Artists/Artist3.png'
import Artist4 from '../assets/Artists/Artist4.png'
import Artist5 from '../assets/Artists/Artist5.png'


export const assets = {
    bell_icon,
    home_icon,
    like_icon,
    loop_icon,
    mic_icon,
    next_icon,
    play_icon,
    plays_icon,
    prev_icon,
    search_icon,
    shuffle_icon,
    speaker_icon,
    stack_icon,
    zoom_icon,
    plus_icon,
    arrow_icon,
    mini_player_icon,
    volume_icon,
    queue_icon,
    pause_icon,
    arrow_left,
    arrow_right,
    spotify_logo,
    clock_icon
}

export const albumsData = [
    {   
        id: 0,
        name: "Top 50 Global",
        image: Aimg1,
        desc: "The world's most popular tracks, updated weekly.",
        bgColor: "#2a4365"
    },
    {   
        id: 1,
        name: "Top 50 India",
        image: Aimg2,
        desc: "India's top hits of the week, updated every Friday.",
        bgColor: "#22543d"
    },
    {   
        id: 2,
        name: "Trending India",
        image: Aimg3,
        desc: "Discover what's buzzing across India right now.",
        bgColor: "#742a2a"
    },
    {   
        id: 3,
        name: "Trending Global",
        image: Aimg4,
        desc: "Explore the trending tracks worldwide.",
        bgColor: "#44337a"
    },
    {   
        id: 4,
        name: "Mega Hits",
        image: Aimg5,
        desc: "A collection of massive chart-topping hits.",
        bgColor: "#234e52"
    },
    {   
        id: 5,
        name: "Happy Favorites",
        image: Aimg6,
        desc: "Feel-good tracks to brighten up your day.",
        bgColor: "#744210"
    },
    {   
        id: 6,
        name: "Lo-Fi Beats",
        image: Aimg7,
        desc: "Relax and unwind with chill lo-fi beats.",
        bgColor: "#d26251"
    },
    {   
        id: 7,
        name: "Sleep Sounds",
        image: Aimg8,
        desc: "Relax and drift into peaceful sleep with calming sounds.",
        bgColor: "#4a5568"
    },
    {   
        id: 8,
        name: "Meditation Vibes",
        image: Aimg9,
        desc: "Find your inner peace with soothing meditation tracks.",
        bgColor: "#ecd3a2"
    }
        
];

export const ArtistsData = [
    {
        id:1,
        name:"A. R. Rahman",
        image: Artist1
    },
    {
        id:2,
        name:"Arijit Singh",
        image: Artist2
    },
    {
        id:3,
        name:"Shreya Ghoshal",
        image: Artist3
    },
    {
        id:4,
        name:"Alan Walker",
        image: Artist4
    },
    {
        id:5,
        name:"Lana Del Rey",
        image: Artist5
    },
]


export const songsData = [
    {
        id: 0,
        name: "On & On",
        image: simg1,
        file: song1,
        desc: "Feel the rhythm that keeps you going, on and on.",
        duration: "3:28"
    },
    {
        id: 1,
        name: "Sky High",
        image: simg2,
        file: song2,
        desc: "Let your spirit soar with uplifting melodies.",
        duration: "3:58"
    },
    {
        id: 2,
        name: "Heroes Tonight",
        image: simg3,
        file: song3,
        desc: "Celebrate the unsung heroes with this epic tune.",
        duration: "3:28"
    },
    {
        id: 3,
        name: "Mortals",
        image: simg4,
        file: song4,
        desc: "A reminder of our humanity through powerful beats.",
        duration: "3:48"
    },
    {
        id: 4,
        name: "Cold",
        image: simg5,
        file: song5,
        desc: "Embrace the chill with this cool, soothing track.",
        duration: "3:06"
    },
    {
        id: 5,
        name: "Royalty",
        image: simg6,
        file: song6,
        desc: "Feel like royalty with this majestic anthem.",
        duration: "3:44"
    },
    {
        id: 6,
        name: "Fearless",
        image: simg7,
        file: song7,
        desc: "Step boldly into the unknown with this fearless vibe.",
        duration: "3:14"
    },
    {
        id: 7,
        name: "Invisible",
        image: simg8,
        file: song8,
        desc: "Discover beauty in the unseen with this ethereal tune.",
        duration: "3:21"
    },
    {
        id: 8,
        name: "Superhero",
        image: simg9,
        file: song9,
        desc: "Discover beauty in the unseen with this ethereal tune.",
        duration: "3:01"
    },
    {
        id: 9,
        name: "Invincible",
        image: simg10,
        file: song10,
        desc: "Discover beauty in the unseen with this ethereal tune.",
        duration: "4:33"
    }
];

