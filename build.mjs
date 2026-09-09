import { cp, mkdir } from 'node:fs/promises';
await mkdir('dist', {recursive:true});
for (const entry of ['index.html','styles.css','edition.css','app.js','assets']) await cp(entry, `dist/${entry}`, {recursive:true});
console.log('Static field guide built.');
