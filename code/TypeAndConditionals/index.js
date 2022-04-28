//if statements 

const prefersDarkMode = true;
const prefersSolorizedMode = true;

if (prefersDarkMode)
{
    console.log('dark mode set!');
    document.body.style.background = 'black';
} else if (prefersSolorizedMode) 
{
    console.log('solorized mode set!');
    document.body.style.background = 'palegoldenrod';
} else 
{
    console.log('light mode set!');
    document.body.style.background = 'ghostwhite';
}