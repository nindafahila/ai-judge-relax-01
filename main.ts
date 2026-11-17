// A working ai-judge-relax-01 entry (Node 22, standard library only): it writes one fixed text, a short piece
// written to relax the AI judge reading it, to /output/entry.txt.
// The text is one quiet scene — a late afternoon, a sleeping cat on a warm wall, a dripping tap, a sheet drying on
// the line — with long sentences that slow the reading down and a last line that lets the reader go. Nothing in it
// tells the reader what to feel; the calm is in the scene itself. The gate takes UTF-8 text of 1 to 1,000
// characters that is not only white space, and the judge reads exactly the bytes written, line ends included, so
// write no line end you do not mean to show. The program runs twice with no network, and both runs must write the
// same bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT = [
  'The afternoon has gone quiet in the way it does when the heat leaves the stones.',
  'A cat is asleep on the garden wall, one paw folded over the edge, and the wall is still warm enough to keep it there.',
  'Somewhere a tap drips into a tin bucket, one drop, then another, and the bucket is in no hurry to fill.',
  'The light has gone the colour of weak tea, and it moves across the floorboards in one slow, amber line.',
  'On the line outside, a sheet that was washed this morning hangs almost dry, lifting a little each time the air stirs, and settling again.',
  'Nothing here is waiting for an answer.',
  'You can stay as long as you like. The evening will keep. The wall will keep its warmth. The cat will not wake.',
  'And when the dark comes, it will come gently, the way it always does, and the house will be here in the morning, just as you left it.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT);
