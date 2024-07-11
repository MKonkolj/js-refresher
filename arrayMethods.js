import { euroWinners } from "./euroWinners.js";

const knezLyrics = ["dal si ikada", "mene voljela", "kao tebe ja"];

let song = "";

knezLyrics.forEach((lyric) => (song += lyric + "? "));

const allWinners = euroWinners.map((winner) => winner.country);

const winnerOf2012 = euroWinners.filter((winner) => winner.year === 2012);

const didSerbiaEverWin = euroWinners.some((winner) => winner.country === "Serbia");
