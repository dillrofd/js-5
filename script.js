//1
let i = 1;
while (i <= 10 ){
    console.log(i);
    i++;
}

//2
for (let i = 2; i <= 20; i++){
    if (i % 2 === 0 ){
        continue;
    }
    console.log(i);
}



//3

for ( let i = 1; i <= 10; i++){
    console.log ( `7 * ${i} = ${7 * i}`)
}

//4
const n = 35;

for (let i = 0; i <=n; i++) {
    console.log(i);
    if (i >= n ) {
        break;
    }
}

//5
let num = 1;
while ( num <= 20){
    if ( num % 3 === 0) {
        num++;
        continue;
    }
    console.log(num);
    num++
}
