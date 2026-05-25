const fs = require('fs');

const dashCss = fs.readFileSync('c:\\LN\\dash.css', 'utf8');
const onbCss = fs.readFileSync('c:\\LN\\onb.css', 'utf8');

// The CSS files might have overlapping :root or body rules.
// Instead of complex merging, we just append them. CSS specificity will handle it mostly,
// but we should probably deduplicate `:root` if we could. Let's just append.

const globals = `@tailwind base;
@tailwind components;
@tailwind utilities;

/* --- DASHBOARD STYLES --- */
${dashCss}

/* --- ONBOARDING STYLES --- */
${onbCss}
`;

fs.writeFileSync('c:\\LN\\src\\app\\globals.css', globals);
console.log('globals.css updated');
