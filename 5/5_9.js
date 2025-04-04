for (let i = 0; i < 10; i++) {
    let s = '(' + i + '):';
    for (let j = 0; j < 10; j++) {
        s = s + '*';
    }
    console.log(s);
}


for (let a = 0; a < 10; a++) {
    let s = '(' + a + '):';
    for (let k = 0; k < a; k++) {
        s = s + '*';
    }
    console.log(s);
}