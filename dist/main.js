import { musicPlayer } from './components/musicPlayer.js';
import { loader } from './components/loader.js';
import { musicList } from './components/musicList.js';


loader.render();
musicPlayer.render();

// Make musicPlayer  variable available globally 
music = musicPlayer;

musicList.renderWith({
  src: "./images/wave.jpeg"
})