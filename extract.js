const fs = require('fs');
const path = 'C:\\Users\\rahul\\.gemini\\antigravity\\brain\\dbb8aed4-3d62-4c02-aa76-f46c6725fe97\\.system_generated\\logs\\transcript.jsonl';
const lines = fs.readFileSync(path, 'utf8').split('\n');
let out = '';
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (!line) continue;
  try {
    const data = JSON.parse(line);
    if (data.type === 'USER_INPUT') {
      out += `\n--- STEP ${data.step_index} ---\n` + data.content + '\n';
    }
  } catch(e) {}
}
fs.writeFileSync('c:\\LN\\all_user_inputs.txt', out);
