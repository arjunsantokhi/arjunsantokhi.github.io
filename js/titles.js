let current = 0;
let titles = ['Ethical Hacker', 'Trader', 'Software Developer'];

function changeTitle() {
    if(current < titles.length) {
        document.querySelector('.changing-text').innerHTML = titles[current];
    } else {
        current = 0;
        document.querySelector('.changing-text').innerHTML = titles[current];
    }
    current++;
}

setInterval(changeTitle, 2000);