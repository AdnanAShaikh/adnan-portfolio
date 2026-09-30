#!/usr/bin/env node
// PostToolUse hook: auto-run `eslint --fix` on the .ts/.tsx file Claude just
// wrote or edited. Reads the hook payload (JSON) from stdin, does nothing for
// non-TS files, and never blocks the turn — lint-fixing is best-effort.
import { spawnSync } from 'node:child_process';

let raw = '';
process.stdin.on('data', (chunk) => (raw += chunk));
process.stdin.on('end', () => {
  let file = '';
  try {
    const payload = JSON.parse(raw || '{}');
    file = payload?.tool_input?.file_path || payload?.tool_response?.filePath || '';
  } catch {
    process.exit(0); // malformed payload — stay silent
  }

  if (!/\.(ts|tsx)$/.test(file)) process.exit(0);

  // shell:true so `npx`/`npx.cmd` resolves on Windows and POSIX alike.
  spawnSync('npx', ['eslint', '--fix', file], { stdio: 'inherit', shell: true });
  process.exit(0); // ignore eslint's exit code so unfixable warnings don't block
});
