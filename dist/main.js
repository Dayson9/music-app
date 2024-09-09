import { musicPlayer } from './components/musicPlayer.js';
import { loader } from './components/loader.js';
import { musicList } from './components/musicList.js';
import { bottomBar } from './components/bottomBar.js';


loader.render();
musicPlayer.render();
bottomBar.render();

// Make musicPlayer available globally 
music = musicPlayer;

// Make bottomBar available globally 
bottom = bottomBar;

musicList.renderWith({
  i: 0,
  src: "wave.jpeg",
  musicArtist: "Asake & Central Cee",
  musicTitle: "Wave"
})