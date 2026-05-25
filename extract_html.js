const fs = require('fs');

function extract(file, prefix) {
  const content = fs.readFileSync(file, 'utf8');
  
  // Extract style
  const styleMatch = content.match(/<style>([\s\S]*?)<\/style>/i);
  if (styleMatch) {
    fs.writeFileSync(`c:\\LN\\${prefix}.css`, styleMatch[1]);
  }
  
  // Extract body
  const bodyMatch = content.match(/<body>([\s\S]*?)<\/body>/i);
  if (bodyMatch) {
    fs.writeFileSync(`c:\\LN\\${prefix}_body.html`, bodyMatch[1]);
  }
}

extract('c:\\LN\\leadnest_dashboard.html', 'dash');
extract('c:\\LN\\leadnest_onboarding.html', 'onb');
console.log('Extraction complete');
