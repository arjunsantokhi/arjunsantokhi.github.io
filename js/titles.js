//VARS\\
let current = 0;
let titles = ['Ethical Hacker', 'Trader', 'Software Developer'];
//set titles in html from the array
function changeTitle() {
    if(current < titles.length) {
        document.querySelector('.changing-text').innerHTML = titles[current] + "&nbsp;";
    } else {
        current = 0;
        document.querySelector('.changing-text').innerHTML = titles[current] + "&nbsp;";
    }
    current++;
}
//interval
setInterval(changeTitle, 2000);