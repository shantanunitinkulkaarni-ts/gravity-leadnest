const fs = require('fs');
const html = fs.readFileSync('c:\\LN\\dash_body.html', 'utf8');

const screens = [
  'appointments',
  'analytics',
  'settings',
  'balance'
];

screens.forEach(screen => {
  const startTag = `<div class="screen" id="screen-${screen}">`;
  const nextTag = `<div class="screen" id="screen-`;
  
  let startIndex = html.indexOf(startTag);
  if (startIndex === -1) {
    console.log(`Could not find start for ${screen}`);
    return;
  }
  
  let endIndex = html.indexOf(nextTag, startIndex + 1);
  if (endIndex === -1) {
    endIndex = html.indexOf('</div>\n    </div>\n  </div>', startIndex + 1);
  }
  
  let content = html.substring(startIndex, endIndex !== -1 ? endIndex : html.length);
  fs.writeFileSync(`c:\\LN\\extracted_${screen}.html`, content);
});

console.log('HTML screens extracted');
