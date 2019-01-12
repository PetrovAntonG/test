let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD","");

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true,
};

let item1  = prompt("Введите обязательную статью расходов в этом месяце","");
let cost1  = prompt("Во сколько обойдется?","");
let item2  = prompt("Введите обязательную статью расходов в этом месяце","");
let cost2 = prompt("Во сколько обойдется?","");

appData.expenses.item1 = cost1;
appData.expenses.item2 = cost2;

alert(`Ваш бюджет на день составит ${appData.budget / 30}`);

console.log(appData);