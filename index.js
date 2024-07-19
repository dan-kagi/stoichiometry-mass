const questions = [
  {
    id: 1,
    question:
      'Determine a quantidade de gás carbônico formada a partir da combustão de 92g de etanol. Dados: C = 12u, H = 1u, O = 16u.',
    substances: [
      {
        reagents: [
          { name: 'ethanol', formula: 'C2H6O', coef: 1 },
          { name: 'oxygen', formula: 'O2', coef: 3 },
        ],
      },
      {
        products: [
          { name: 'carbonDioxide', formula: 'CO2', coef: 2 },
          { name: 'water', formula: 'H2O', coef: 3 },
        ],
      },
    ],
    coefs: [1, 3, 2, 3],
    asking: [
      { name: 'carbonDioxide', substance: 'CO2', answer: 4.0, unit: 'mol' },
    ],
    isBalanced: false,
  },
  {
    id: 2,
    question:
      'Calcule a quantidade de gás hidrogênio liberada na reação de 33,6 g de ferro. Dado: Massa Molar do Fe = 56 g / mol.',
    substances: [
      {
        reagents: [
          { name: 'iron', formula: 'Fe', coef: 3 },
          { name: 'water', formula: 'H2O', coef: 4 },
        ],
      },
      {
        products: [
          { name: 'magnetite', formula: 'Fe3O4', coef: 1 },
          { name: 'hydrogen', formula: 'H2', coef: 4 },
        ],
      },
    ],
    coefs: [3, 4, 1, 4],
    asking: [{ name: 'hydrogen', substance: 'H2', answer: 0.8, unit: 'mol' }],
    isBalanced: false,
  },
  {
    id: 3,
    question:
      'O alumínio pode ser obtido a partir da bauxita (óxido de alumínio) como descrito abaixo. Determine qual é a massa de bauxita necessária para produzir 5 mol de alumínio? Dados: Al = 27u, O = 16u.',
    substances: [
      {
        reagents: [{ name: 'aluminumOxide', formula: 'Al2O3(s)', coef: 2 }],
      },
      {
        products: [
          { name: 'aluminum', formula: 'Al(s)', coef: 4 },
          { name: 'oxygen', formula: 'O2(g)', coef: 3 },
        ],
      },
    ],
    coefs: [2, 4, 3],
    asking: [
      {
        name: 'aluminumOxide',
        substance: 'Al2O3',
        answer: 255,
        unit: 'gramas',
      },
    ],
    isBalanced: false,
  },
  {
    id: 4,
    question:
      'Na combustão completa de glicose reagiram 2,4 mol de oxigênio molecular. Portanto, que massa de glicose foi consumida? Dado: Massa Molar da glicose = 180 g / mol',
    substances: [
      {
        reagents: [
          { name: 'glucose', formula: 'C6H12O6', coef: 1 },
          { name: 'oxygen', formula: 'O2', coef: 6 },
        ],
      },
      {
        products: [
          { name: 'carbonDioxide', formula: 'CO2', coef: 6 },
          { name: 'water', formula: 'H2O', coef: 6 },
        ],
      },
    ],
    coefs: [1, 6, 6, 6],
    asking: [
      {
        name: 'glucose',
        substance: 'C6H12O6',
        answer: 72,
        unit: 'gramas',
      },
    ],
    isBalanced: false,
  },
  {
    id: 5,
    question:
      'O titânio (Ti) pode ser obtido através do processo descrito pela equação química abaixo. Calcule a massa de titânio que pode ser obtida a partir de 950 g de cloreto de titânio. Dados: Ti = 48u, Cl = 35,5u',
    substances: [
      {
        reagents: [
          { name: 'titaniumTetrachloride', formula: 'TiCl4(s)', coef: 1 },
          { name: 'magnesium', formula: 'Mg(s)', coef: 2 },
        ],
      },
      {
        products: [
          { name: 'titanium', formula: 'Ti(s)', coef: 1 },
          { name: 'magnesiumChloride', formula: 'MgCl2(s)', coef: 2 },
        ],
      },
    ],
    coefs: [1, 2, 1, 2],
    asking: [
      { name: 'titanium', substance: 'Ti', answer: 240, unit: 'gramas' },
    ],
    isBalanced: false,
  },
  {
    id: 6,
    question:
      '(PUC-MG) Fosgênio, é um gás venenoso. Quando inalado, reage com a água nos pulmões para produzir ácido clorídrico (HCl), que causa graves danos pulmonares, levando, finalmente, à morte: por causa disso, já foi até usado como gás de guerra. A equação química dessa reação está descrita abaixo. Estime a massa de ácido clorídrico, em gramas, formada nos pulmões, se uma pessoa inalar 198 mg de fosgênio. Dados: C = 12u, H = 1u, O = 16u, Cl = 35,5u; 1g - 1000 mg.',
    substances: [
      {
        reagents: [
          { name: 'phosgene', formula: 'COCl2', coef: 1 },
          { name: 'water', formula: 'H2O', coef: 1 },
        ],
      },
      {
        products: [
          { name: 'carbonDioxide', formula: 'CO2', coef: 1 },
          { name: 'hydrochloricAcid', formula: 'HCl', coef: 2 },
        ],
      },
    ],
    coefs: [1, 1, 1, 2],
    asking: [
      {
        name: 'hydrochloricAcid',
        substance: 'HCl',
        answer: 0.0365,
        unit: 'gramas',
      },
    ],
    isBalanced: false,
  },
  {
    id: 7,
    question:
      'Determine a massa de gás carbônico produzido na combustão de 570 g de octano. Dados: Massa Molar do octano: 114 g / mol; Massa Molar do dióxido de carbono = 44 g / mol.',
    substances: [
      {
        reagents: [
          { name: 'octane', formula: 'C8H18(l)', coef: 2 },
          { name: 'oxygen', formula: 'O2(g)', coef: 25 },
        ],
      },
      {
        products: [
          { name: 'carbonDioxide', formula: 'CO2(g)', coef: 16 },
          { name: 'water', formula: 'H2O(l)', coef: 18 },
        ],
      },
    ],
    coefs: [2, 25, 16, 18],
    asking: [
      {
        name: 'carbonDioxide',
        substance: 'CO2',
        answer: 1760,
        unit: 'gramas',
      },
    ],
    isBalanced: false,
  },
  {
    id: 8,
    question:
      'Para formação de  130 g de acetileno, qual é a massa de carbeto de cálcio necessária? Nesta reação, que massa de água reage? Dados: Ca = 40u, C = 12u, H = 1u e O = 16u.',
    substances: [
      {
        reagents: [
          { name: 'calciumCarbide', formula: 'CaC2(s)', coef: 1 },
          { name: 'water', formula: 'H2O(l)', coef: 2 },
        ],
      },
      {
        products: [
          { name: 'calciumHidroxide', formula: 'Ca(OH)2(aq)', coef: 1 },
          { name: 'acetylene', formula: 'C2H2(g)', coef: 1 },
        ],
      },
    ],
    coefs: [1, 2, 1, 1],
    asking: [
      {
        name: 'calciumCarbide',
        substance: 'CaC2',
        answer: 320,
        unit: 'gramas',
      },
      {
        name: 'water',
        substance: 'H2O',
        answer: 180,
        unit: 'gramas',
      },
    ],
    isBalanced: false,
  },
];

function createCard(question) {
  //card creation
  const card = document.createElement('div');
  card.setAttribute('class', 'card');
  card.setAttribute('id', question.id);
  //paragraph creation
  const p = document.createElement('p');
  p.textContent = question.id + ' - ' + question.question;
  card.appendChild(p);
  //div balanceamento
  const balDiv = document.createElement('div');
  balDiv.setAttribute('class', 'balanceamento');
  //form balanceamento
  const balForm = document.createElement('form');
  balForm.setAttribute('id', 'balanceamento');

  const amountOfReagents = question.substances[0].reagents.length;
  for (let i = 0; i < amountOfReagents; i++) {
    const input = document.createElement('input');
    input.setAttribute('name', question.substances[0].reagents[i].name);
    input.setAttribute('id', question.substances[0].reagents[i].name);
    balForm.appendChild(input);
    const label = document.createElement('label');
    label.setAttribute('for', question.substances[0].reagents[i].name);
    if (i === amountOfReagents - 1) {
      label.innerHTML =
        changeToSubscript(question.substances[0].reagents[i].formula) +
        ' &rarr; ';
    } else {
      label.innerHTML =
        changeToSubscript(question.substances[0].reagents[i].formula) + ' + ';
    }
    balForm.appendChild(label);
  }

  const amountOfProducts = question.substances[1].products.length;
  for (let i = 0; i < amountOfProducts; i++) {
    const input = document.createElement('input');
    input.setAttribute('name', question.substances[1].products[i].name);
    input.setAttribute('id', question.substances[1].products[i].name);
    balForm.appendChild(input);
    const label = document.createElement('label');
    label.setAttribute('for', question.substances[1].products[i].name);
    if (i === amountOfProducts - 1) {
      label.innerHTML = changeToSubscript(
        question.substances[1].products[i].formula
      );
    } else {
      label.innerHTML =
        changeToSubscript(question.substances[1].products[i].formula) + ' + ';
    }

    balForm.appendChild(label);
  }
  balDiv.appendChild(balForm);
  const checkBalButton = document.createElement('button');
  checkBalButton.textContent = 'Checar Balanceamento';
  checkBalButton.classList.add('buttonStyle');
  checkBalButton.addEventListener('click', (event) => {
    const card_id = document.getElementById(question.id);
    const inputs = card_id.querySelectorAll('.balanceamento input');
    let insertedCoefs = [];
    for (let input of inputs) {
      insertedCoefs.push(input.value);
    }
    const correctCoefs = question.coefs;
    if (validateCoefs(insertedCoefs)) {
      const checking = checkCoefs(insertedCoefs, correctCoefs);
      if (checking) {
        questions[question.id - 1].isBalanced = true;
        alert(`Q${question.id} - ` + checking);
      } else {
        alert(`Q${question.id} - Errado, realize o balanceamento novamente!`);
      }
    } else {
      alert(
        `Q${question.id} - Coeficientes Inválidos! Insira números inteiros maiores do que zero.`
      );
      questions[question.id - 1].isBalanced = false;
    }
    event.preventDefault();
  });

  checkBalButton.addEventListener('mouseover', () => {
    const card = document.getElementById(`${question.id}`);
    const but = card.querySelector('.balanceamento button');
    but.classList.remove('buttonStyle');
    but.classList.add('buttonStyle2');
  });

  checkBalButton.addEventListener('mouseleave', () => {
    const card = document.getElementById(`${question.id}`);
    const but = card.querySelector('.balanceamento button');
    but.classList.remove('buttonStyle2');
    but.classList.add('buttonStyle');
  });

  const divBalButton = document.createElement('div');
  divBalButton.appendChild(checkBalButton);
  balForm.appendChild(divBalButton);
  card.appendChild(balDiv);

  //div stoichiometry
  const stoichDiv = document.createElement('div');
  stoichDiv.setAttribute('class', 'stoichiometry');
  //form stoichiometry
  const stoichForm = document.createElement('form');
  stoichForm.setAttribute('id', 'stoichiometry');
  const amountOfAnswers = question.asking.length;
  for (let i = 0; i < amountOfAnswers; i++) {
    // div answer
    const answer = document.createElement('div');
    answer.setAttribute('class', 'answer');
    const label = document.createElement('label');
    label.setAttribute('for', question.asking[i].name);
    label.innerHTML = changeToSubscript(question.asking[i].substance) + ':';
    const input = document.createElement('input');
    input.setAttribute('name', question.asking[i].name);
    let unit = 'gramas';
    if (question.asking[i].unit === 'mol') {
      unit = 'mol';
    }
    input.setAttribute('placeholder', unit);
    answer.appendChild(label);
    answer.appendChild(input);
    stoichForm.appendChild(answer);
  }
  const buttonDiv = document.createElement('div');
  const checkStoichButton = document.createElement('button');
  checkStoichButton.textContent = 'Checar Resposta';
  checkStoichButton.classList.add('buttonStyle');
  checkStoichButton.addEventListener('click', (event) => {
    if (questions[question.id - 1].isBalanced) {
      //ficar de olho aqui
      const card_id = document.getElementById(question.id); //ficar de olho nisto aqui
      const inputs = card_id.querySelectorAll('.stoichiometry input');
      for (let j = 0; j < inputs.length; j++) {
        if (convertToEnglish(inputs[j].value) !== question.asking[j].answer) {
          alert(`Q${question.id} - Resposta(s) errada(s)! Refaça o exercício!`);
          event.preventDefault();
          return;
        }
      }
      alert(`Q${question.id} - Parabéns, resposta(s) correta(s)!!!`);
      event.preventDefault();
    } else {
      alert(
        `Q${question.id} - Realize primeiramente o balanceamento da equação química!`
      );
      event.preventDefault();
    }
  });

  checkStoichButton.addEventListener('mouseover', () => {
    const card = document.getElementById(`${question.id}`);
    const but = card.querySelector('.stoichiometry button');
    but.classList.remove('buttonStyle');
    but.classList.add('buttonStyle2');
  });

  checkStoichButton.addEventListener('mouseleave', () => {
    const card = document.getElementById(`${question.id}`);
    const but = card.querySelector('.stoichiometry button');
    but.classList.remove('buttonStyle2');
    but.classList.add('buttonStyle');
  });

  buttonDiv.appendChild(checkStoichButton);
  stoichForm.appendChild(buttonDiv);
  stoichDiv.appendChild(stoichForm);
  card.appendChild(stoichDiv);
  return card;
}

for (let question of questions) {
  const card = createCard(question);
  document.querySelector('main').appendChild(card);
}

document.querySelector(
  'footer'
).innerHTML = `<p>Copyright &copy; Danilo Morais Itokagi. All rights reserved. ${new Date().getFullYear()}</p>`;

function changeToSubscript(word) {
  const arrWord = [...word];
  newWord = '';
  for (let i = 0; i < arrWord.length; i++) {
    if (isNaN(arrWord[i]) === false) {
      newWord += '<sub>';
      newWord += arrWord[i];
      newWord += '</sub>';
    } else {
      newWord += arrWord[i];
    }
  }
  return newWord;
}

function convertToEnglish(floatNumber) {
  if (floatNumber.includes(',')) {
    floatNumber = floatNumber.replace(',', '.');
  }
  const number = Number(floatNumber);
  if (isNaN(number)) {
    return false;
  }
  return number;
}

function validateCoefs(coeficients) {
  let isValid = true;
  for (let coef of coeficients) {
    if (
      isNaN(coef) ||
      !coef ||
      Number(coef) <= 0 ||
      !Number.isInteger(Number(coef))
    ) {
      isValid = false;
      return isValid;
    }
  }
  return isValid;
}

function checkCoefs(insertedCoefs, correctCoefs) {
  const size = correctCoefs.length;
  let msg = 'Parabéns, coeficientes ' + insertedCoefs[0];
  let ratio = Number(insertedCoefs[0]) / correctCoefs[0];
  for (let i = 1; i < size; i++) {
    msg += ' ' + insertedCoefs[i];
    let newRatio = Number(insertedCoefs[i]) / correctCoefs[i];
    if (newRatio !== ratio) {
      return false;
    }
  }
  msg += ' estão corretos. Agora resolva o problema estequiométrico.';
  return msg;
}
