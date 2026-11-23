// Entry for make.fun bounty "The Vacuum's Alibi: One Line, 200 Characters".
// Writes one deadpan alibi line from a robot vacuum to /output/entry.txt.
// Deterministic: no randomness, no clock, no network, no file reads.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  'I checked my log first: "04:12 — spot under the sofa, 0.4 g, cleaned." The spot you mean never existed; your sock ate it, then you blamed the machine. Case closed.';

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
