export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income,
    gdp,
    capita,
  };

  return budget;
}

//test
console.log(getBudgetObject('$119,868', '$154.2 billion', '$178,479'));
