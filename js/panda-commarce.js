const h2s = document.getElementsByTagName('h2');
for (const h2 of h2s) {
    h2.style.color = 'lightblue'
}
const bagpackSection = document.getElementById('bagpack');
bagpackSection.style.backgroundColor = 'tomato'

const cards = document.getElementsByClassName('card');
for (const card of cards) {
    card.style.borderRadius = '30px'
}
function btn() {
    console.log('button color')
}
const containerP = document.getElementsByClassName('container');
