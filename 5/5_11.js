//break文とcontinue文

//break文

for (let i = 0; i < 3; i++) {
    console.log('繰り返し処理１:'+i);
    break;      // break文
    console.log('繰り返し処理２:'+i);
}
console.log('for文終了後の処理');

/* 

実行結果のコンソール出力
繰り返し処理１:0
for文終了後の処理

==>最初の繰り返し処理１を実行後、break文より中断し、for文が終了したことがわかります。

*/

//continue

for (let i = 0; i < 3; i++) {
    console.log('繰り返し処理１:'+i);
    continue;      // continue文
    console.log('繰り返し処理２:'+i);
}

console.log('for文終了後の処理');

/*
実行結果のコンソール出力
繰り返し処理１:0
繰り返し処理１:1
繰り返し処理１:2
for文終了後の処理

上記の出力から、繰り返し処理1を実行後、continue文よりそれ以降の繰り返し処理２の実行は中断されていることがわかります（for文自体は中断されない）。

*/