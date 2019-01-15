'use strict'; 
let startCalculation = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),
    data = document.getElementsByClassName('data'),
    btn = data[0].getElementsByTagName('button'),
    expensesItemBtn = btn[0],
    optionalExpensesBtn = btn[1],
    countBudgetBtn = btn[2],
    optionalexpensesItem = document.querySelectorAll(".optionalexpenses-item"),
    incomeItem = document.querySelector("#income"),
    savings = document.querySelector("#savings"),
    sum = document.querySelector('#sum'),
    percent = document.querySelector('#percent'),
    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value");

let money, time;

startCalculation.addEventListener('click', function(){
    appData.start = true;
    time = prompt("Введите дату в формате YYYY-MM-DD","");
    money = +prompt("Ваш бюджет на месяц?", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesItemBtn.addEventListener('click', function(e){
    if(appData.start == false){
        e.preventDefault();
    } else {
        let sum = 0;
        for (let i = 0; i < expensesItem.length; i++) {
            let a  = expensesItem[i].value,
                b = expensesItem[++i].value;
            if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
                console.log("Done");
                appData.expenses[a] = b;
                sum += +b;
            } else {
                console.log ("bad result");
                i--;
            }
            expensesValue.textContent = sum;
            appData.expensesSum = sum;
        }
    }
});
optionalExpensesBtn.addEventListener('click', function(e){
    if(appData.start == false){
        e.preventDefault();
    } else {
        for (let i = 0 ; i < optionalexpensesItem.length ; i++) {
            let c = optionalexpensesItem[i].value;
            if((typeof(c)) === 'string' && (typeof(c)) != null &&  c != '' && c.length < 50) {
                appData.optionalExpenses[i] = c;
                optionalexpensesValue.textContent += appData.optionalExpenses[i] + "  "; 
            }else {
                console.log("Not vaild");
                i--;
            }
        }
    }

});

countBudgetBtn.addEventListener('click', function(e){
    if(appData.start == false){
        e.preventDefault();
    } else {
        if(appData.budget != undefined) {
            appData.moneyPerDay = (appData.budget / 30).toFixed();
            daybudgetValue.textContent = (appData.moneyPerDay - (appData.expensesSum / 30)).toFixed(1); 
            if(appData.moneyPerDay < 100) {
                levelValue.textContent = "Минимальный уровень достатка";
            } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
                levelValue.textContent = "Средний уровень достатка";
            } else if(appData.moneyPerDay >= 2000){
                levelValue.textContent = "Высокий уровень достатка";
            } else {
                levelValue.textContent = "Произошла ошибка";
            }
        } else {
            daybudgetValue.textContent = "Произошла ошибка, нажмите - 'Начать расчёт'";
        }
    }
});

incomeItem.addEventListener('input', function(){
    let items = incomeItem.value;
    let str ="";
    appData.income = items.split(", ");
        appData.income.forEach(function(value, index) {
            index++;
            str += index  + ": " + value + "\n"; 
        });
        incomeValue.textContent =  str;
});

savings.addEventListener('click', function(){
    if(appData.savings == true) {
        appData.savings = false;
    } else{
        appData.savings = true;
    }
});

sum.addEventListener('input', function() {
    if(appData.savings == true) {
        let sum1 = +sum.value,
            percent1 = +percent.value;
        appData.monthIncome = sum1/100/12*percent1;
        appData.yearIncome = sum1/100*percent1;
        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percent.addEventListener('input', function() {
    if(appData.savings == true) {
        let sum1 = +sum.value,
            percent1 = +percent.value;
        appData.monthIncome = sum1/100/12*percent1;
        appData.yearIncome = sum1/100*percent1;
        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    expensesSum: 0,
    optionalExpenses: {},
    income: [],
    savings: false,
    start: false,
};


