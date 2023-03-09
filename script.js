let animalFarm = [];

for (let i = 128000; i <= 128063; i++) {
    animalFarm.push({image: '&#' + i, code: i});
}

const $container = document.querySelectorAll('grid-container');

const farm = document.getElementById('farm');

animalFarm.forEach((animal) => {
    const farmDiv = document.createElement('div');
    farmDiv.innerHTML = `<p style="text-align: center;">
    <span style="font-size: 5rem;">${animal.image}</span><br>
    <code>${animal.code}</code></p>`;
    farm.appendChild(farmDiv);
});

