const urlParams = new URLSearchParams(window.location.search);
const dish = urlParams.get('dish');
document.getElementById('dish-title').textContent = dish ? dish.replace(/_/g, ' ') : "Dish Details";

const ingredientsData = {
  potatobottlegourd: { potato: 100, bottlegourd: 100 },
  potatobrinjal: { potato: 100, brinjal: 1},
  potatopeacurry: { potato: 100, pea: 50, tomato: 50 },
  chickpeacurry: { chickpea: 50, tomato: 150, spices: 1 },
  simplechapati: { flour: 100, water: 60 },
  alooparatha: { flour: 100, potato: 100, water: 60 },
  gobhiparatha: { flour: 100, cauliflower: 50, water: 60 },
  methiparatha: { flour: 100, fenugreek: 50, water: 60 },
  simplerice: { rice: 50, water: 200 },
  carrotrice: { rice: 50, carrot: 10, water: 200 },
  cuminrice: { rice: 50, cumin: 5, water: 200 },
  vegbiryani: { rice: 30, potato: 30, tomato: 20 },
  bananashake: { banana: 1, milk: 100, sugar: 30, cashew: 20 },
  dateshake: { dates: 30, milk: 100, sugar: 20 },
  lassi: { custard: 100, rosewater: 5, sugar: 50 },
  strawberrycustard: { custardpowder: 3, milk: 100, sugar: 50, fruits: 50 },
  butterhalwa: { butter: 35, semolina: 35, sugar: 20, cashew: 20 },
  gajarhalwa: { gratedcarrot: 50, khoa: 20, milk: 50, sugar: 50, cashew: 10 },
  simplywonderfulladdu: { butter: 5, milkpowder: 5, sugar: 5 },
  dateladdu: { date: 50, cashew: 50, almond: 20, sugar: 20 },
  idli: { semolina: 100, yogcurt: 100 },
  uttpam: { semolina: 100, yogcurt: 100, capsicum: 20, carrot: 20 },
  cake: { whippedcream: 20, khoa: 50, sugar: 20, tuti_fruitie: 10 },
  gulabjamun: { khoa: 50, ghee: 100, sugar: 150 },
  noddles: { rawnoodles: 100, capsicum: 20, flour: 10, sauce: 10 },
  khichadi: { rice: 10, moongdal: 80, cheese: 20, pumpkin: 50 },
  pasta: { rawpasta: 50, tomato: 50, beans: 10, cream: 10, coconut: 5, carrot: 5 },
  sevai: { rawsevai: 150, capsicum: 20, carrot: 10 },
  chanadal: { dal: 30, water: 200 },
  moongdal: { dal: 25, water: 200 },
  arhardal: { dal: 30, water: 200 },
  uraddal: { dal: 20, water: 200 },
};

document.getElementById('ingredient-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const people = parseInt(document.getElementById('people-count').value, 10);
  const ingredients = ingredientsData[dish];

  const ingredientsList = document.getElementById('ingredients-list');
  ingredientsList.innerHTML = `<h2>Ingredients for ${people} people:</h2>`;
  const ul = document.createElement('ul');

  for (const [ingredient, quantity] of Object.entries(ingredients)) {
    const li = document.createElement('li');
    li.textContent = `${ingredient}: ${(quantity * people)}g`;
    ul.appendChild(li);
  }
  ingredientsList.appendChild(ul);
});
