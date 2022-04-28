// if statements - evaluate boolean values
// const prefersDarkMode = true;
// const prefersSolarizedMode = true;
const colorMode = 'dark';

switch (colorMode) {
    case "solarized":
        console.log('solarized mode set!');
        document.body.style.background = 'palegoldenrod';
        break;
    case 'dark':
        console.log('dark mode set!');
        document.body.style.background = 'black';
        break;
    default:
        console.log('light mode set!');
        document.body.style.background = 'ghostwhite';
}