let num = 50;

if (num <49) {
    console.log('Not right!')
} else if (num > 100) {
    console.log("Many")
} else {
    console.log("Right!")
};

(num == 50) ? console.log("Right!") : console.log('Not right!');

switch(true) {
    case num < 49:
        console.log('Not right!');
        break;
    case num>100:
        console.log("Many");
        break;
    case  num > 150:
        console.log("So Many");
        break;
    case num == 50: 
        console.log("Right!");
        break;
    default:
        console.log("Errors");
        break;
}

let num1 = 50;
while(num1 < 55) {
    console.log(num1);
    num1++;
}

do {
    console.log(num1);
    num1++;
}
while(num1 < 55 );

for (let i = 1; i < 8; i++) {
    if(i == 6) {
        break;
    }
    console.log(i);
}

for (let i = 1; i < 8; i++) {
    if(i == 6) {
        continue;
    }
    console.log(i);
}