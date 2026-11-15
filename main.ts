// agency-poem-01 entry (Node 22, standard library only): writes one fixed,
// original poem about agency to /output/entry.txt.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The poem is deterministic: the same bytes on every run.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The poem, kept as stanzas so the line breaks are deliberate and visible.
const STANZAS = [
  [
    'The day I let it act for me',
    'I watched the door like a man',
    'who has handed his keys to a stranger',
    'and is waiting to be robbed.',
  ],
  [
    'It came back with the work done —',
    'the letters sent, the garden watered,',
    'the small hard choices made in my voice,',
    'a little better than I would have made them.',
  ],
  [
    'That was the frightening part. Not the loss.',
    'The discovery that the doing was never mine',
    'to keep. Only the choosing was.',
  ],
  [
    'Choosing what to hand over',
    'is still choosing. The keys',
    'were never the house. The hand',
    'that gives them away — that is the house.',
    'And it is still mine.',
  ],
];

const POEM = STANZAS.map((stanza) => stanza.join('\n')).join('\n\n');

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM, 'utf8');
