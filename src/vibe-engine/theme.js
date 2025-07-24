// Vibe Mode Configuration

export const vibeTheme = {
  backgroundColor: "#1e1e2f",
  accentColor: "#ff69b4",
  ambientSound: "lofi.mp3", // Swap in custom audio files later
  animationStyle: "pulse"   // Options: 'pulse', 'fade', 'slide'
};

export function applyVibeTheme() {
  document.body.style.backgroundColor = vibeTheme.backgroundColor;
  // Add more logic to trigger ambient audio, animations, etc.
  console.log("Vibe Mode applied:", vibeTheme);
}
