const video = document.getElementById("myVideo");

// Wait for metadata so text tracks are ready
video.addEventListener("loadedmetadata", () => {
  const track = video.textTracks[0];

  // Show subtitles by default
  track.mode = "showing";
});

// Toggle subtitle visibility with buttons
document.getElementById("showBtn").addEventListener("click", () => {
  const track = video.textTracks[0];
  track.mode = "showing";
});

document.getElementById("hideBtn").addEventListener("click", () => {
  const track = video.textTracks[0];
  track.mode = "hidden";
});
