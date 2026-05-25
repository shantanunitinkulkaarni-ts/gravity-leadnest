const fs = require('fs');
const path = 'C:\\Users\\rahul\\.gemini\\antigravity\\brain\\dbb8aed4-3d62-4c02-aa76-f46c6725fe97\\.system_generated\\logs\\transcript.jsonl';
const lines = fs.readFileSync(path, 'utf8').split('\n');
for (let i = 0; i < lines.length; i++) {
  if (!lines[i]) continue;
  try {
    const data = JSON.parse(lines[i]);
    if (data.type === 'USER_INPUT') {
      console.log(`Step ${data.step_index}: Length ${data.content.length}`);
      if (data.content.length > 5000) {
         fs.writeFileSync(`c:\\LN\\user_input_${data.step_index}.txt`, data.content);
         console.log(`Saved c:\\LN\\user_input_${data.step_index}.txt`);
      }
    }
  } catch(e) {}
}
