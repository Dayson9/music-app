var timeUpdate;

function calculateDuration(seconds) {
  const minutes = Math.floor(seconds / 60),
    secs = Math.floor(seconds % 60);
  return [minutes, secs];
}

