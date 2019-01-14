'use strict';

let money, time;

function start(){
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD","");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a  = prompt("Введите обязательную статью расходов в этом месяце",""),
                b = prompt("Во сколько обойдется?","");
            if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
                console.log("Done");
                appData.expenses[a] = b;
            } else {
                console.log ("bad result");
                i--;
            }
        }

    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ваш бюджет на день составит: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if(appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
            console.log("Средний уровень достатка");
        } else if(appData.moneyPerDay >= 2000){
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
            
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с Вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1 ; i < 4 ; i++) {
            let c = prompt("Статья необязательных расходов?");
            if((typeof(c)) === 'string' && (typeof(c)) != null &&  c != '' && c.length < 50) {
                appData.optionalExpenses[i] = c;
            }else {
                console.log("Not vaild");
                i--;
            }
        }

    },
    chooseIncome: function() {
        let items = prompt("Что принесет дополнительный доход?(Перечислите через запятую)", "");
        if(typeof(items) != "string" || items == "" || typeof(items) == null) {
            console.log("Вы ввели некорректные данные или не ввели их вовсе");
        } else {
            appData.income = items.split(", ");
            appData.income.push(prompt("Может что-то ещё?"));
            appData.income.sort();
        } 
        appData.income.forEach(function(value, index) {
            index++;
            alert("Способы доп. заработка: " + index + ": " + value);
        });
    }
};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + ":" + appData[key]);
}