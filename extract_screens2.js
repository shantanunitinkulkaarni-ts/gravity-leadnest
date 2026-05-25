const fs = require('fs');
const html = fs.readFileSync('c:\\LN\\dash_body.html', 'utf8');

const screens = [
  'dashboard',
  'inbox',
  'leads',
  'properties'
];

screens.forEach(screen => {
  const startTag = `<div class="screen" id="screen-${screen}">`;
  const fallbackStart = `<div class="screen active" id="screen-${screen}">`;
  
  let startIndex = html.indexOf(startTag);
  if (startIndex === -1) {
    startIndex = html.indexOf(fallbackStart);
  }
  
  if (startIndex === -1) {
    // Special case for inbox which has class="screen-inbox"
    const inboxStart = `<div class="screen-inbox" id="screen-inbox">`;
    if (screen === 'inbox') {
      startIndex = html.indexOf(inboxStart);
    }
    if (startIndex === -1) {
      console.log(`Could not find start for ${screen}`);
      return;
    }
  }
  
  // Find the next screen id to mark the end
  let endIndex = -1;
  const nextScreens = ['inbox', 'leads', 'properties', 'appointments', 'analytics', 'balance', 'settings'];
  for (let ns of nextScreens) {
    const check1 = `<div class="screen" id="screen-${ns}">`;
    const check2 = `<div class="screen-inbox" id="screen-${ns}">`;
    let found = html.indexOf(check1, startIndex + 10);
    if (found === -1) found = html.indexOf(check2, startIndex + 10);
    
    if (found !== -1) {
      endIndex = found;
      break;
    }
  }
  
  if (endIndex === -1) {
    endIndex = html.length;
  }
  
  let content = html.substring(startIndex, endIndex);
  fs.writeFileSync(`c:\\LN\\extracted_${screen}.html`, content);
  console.log(`Extracted ${screen}`);
});
