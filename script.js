const playlistSongs = document.getElementById("playlist-songs");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
const shuffleButton = document.getElementById("shuffle");

    const songs = [
  {
    id: 0,
    title: "Winterfell",
    artist: "Ramin Djawadi",
    duration: "2:49",
    src: "https://archive.org/download/tvtunes_20712/Game%20of%20Thrones.mp3"
  },
  {
    id: 1,
    title: "The Rains of Castamere",
    artist: "Sigur Rós",
    duration: "3:00",
    src: "https://archive.org/download/tvtunes_28556/Game%20of%20Thrones%20-%20Mhysa%20-%20Theme%20Song.mp3"
  },
  {
    id: 2,
    title: "Light of the Seven",
    artist: "Ramin Djawadi",
    duration: "6:00",
    src: "https://archive.org/download/GameOfThronesSeason6Soundtrack/GameOfThronesSeason6Soundtrack-07-LightOfTheSeven.mp3"
  },
  {
    id: 3,
    title: "The Night King",
    artist: "Ramin Djawadi",
    duration: "3:45",
    src: "https://archive.org/download/GameOfThronesSeason8Soundtrack/GameOfThronesSeason8Soundtrack-03-TheNightKing.mp3"
  },
  {
    id: 4,
    title: "The Winds of Winter",
    artist: "Ramin Djawadi",
    duration: "3:30",
    src: "https://archive.org/download/GameOfThronesSeason8Soundtrack/GameOfThronesSeason8Soundtrack-04-TheWindsOfWinter.mp3"
  },
  {
    id: 5,
    title: "Dracarys",
    artist: "Ramin Djawadi",
    duration: "4:10",
    src: "https://archive.org/download/GameOfThronesSeason8Soundtrack/GameOfThronesSeason8Soundtrack-06-Dracarys.mp3"
  },
  {
    id: 6,
    title: "Battle of the Bastards",
    artist: "Ramin Djawadi",
    duration: "6:15",
    src: "https://archive.org/download/GameOfThronesSeason6Soundtrack/GameOfThronesSeason6Soundtrack-10-BattleOfTheBastards.mp3"
  },
  {
    id: 7,
    title: "The King's Arrival",
    artist: "Ramin Djawadi",
    duration: "2:50",
    src: "https://archive.org/download/GameOfThronesSeason5Soundtrack/GameOfThronesSeason5Soundtrack-02-TheKingsArrival.mp3"
  }
];

const audio = new Audio()
let userData={
    songs:[...songs],
    currentsong:null,
    songCurrenttime:0,
  };

  const renderSongs=(array) =>{
    const songHTML =array.map((song))=>{
      
    }
  }