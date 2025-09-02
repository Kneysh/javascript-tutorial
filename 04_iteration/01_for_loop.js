// loop
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 10; j++){
        console.log(`${i} x ${j} = ${i*j}`);
        if (j === 10){
            console.log("");
        }
    }
}

// break, continue
for (let i = 1; i < 11; i++) {
    if (i === 8){
        console.log("8 detected. Stop iteration.");
        break;        
    }else if (i === 4){
        console.log("4 detected. Skip iteration.");
        continue;
    }
    console.log(i);
}