export const initialState = {
  mute: false,
  speed: 4,
  speedms: 250,
  playMode: "entireBoard",
  progressionMode: "auto",
  // prettier-ignore
  scale: [ true, false, false, true, false, true, false, false, true, false, true, false, ],
  notes: ["C", "D#", "F", "G#", "A#"],
  column: null,
  board: [[]],
  aliveCells: [],
  isPlaying: false,
  isSuspended: false,
  chord: 0,
};
export const sizes = {
  preferredCellSize: 25,
  headerHeight: "15vh",
};
export const music = {
  highestOctave: 6,
  octaveRange: 4,
  maxSpeed: 7,
  minSpeed: 1,
};
export const keyboard = {
  blackWidth: "24px",
  whiteWidth: "30px",
  blackHeight: "85px",
  whiteHeight: "130px",
  keyMargin: "1px",
};
export const colors = {
  brblack: "#002b36",
  black: "#073642",
  white: "#eee8d5",
  green: "#859900",
  red: "#dc322f",
  orange: "#cb4b16",
  yellow: "#b58900",
  blue: "#268bd2",
  violet: "#6c71c4",
  pink: "#d33682",
  grey: "#93a1a1",
  cyan: "#2aa198",
};
export const progression = [
  [`D`, `D#`, `G`, `A#`],
  [`C#`, `D#`, "E", `G`, `A#`],
  [`C`, `D#`, `G`, `G#`],
  [`D#`, `F#`, `G#`, `B`],
  [`D`, `F`, `G`, `A#`],
  [`C`, `D`, `E`, `G`, `A#`],
  [`C`, `D#`, `F`, `G`, `G#`],
  [`D`, `F`, `G#`, `A#`, `B`],
];
// export const progression = [
//   ["C", "E", "G"],
//   ["F", "A", "C"],
//   ["F", "G", "B", "D"],
//   ["C", "E", "A"],
//   ["C", "D", "F", "A"],
//   ["C", "D", "F", "G#", "B"],
// ];
