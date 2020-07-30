const promise1 = new Promise(function (resolove, reject) {
    let a = 1;
    let b = 2;
    let c = 3;
    resolove("成功");
    reject("失敗");
});
promise1.then(function (msg) {
    console.log("程式觸發了成功事件，" + msg);
}, function (ex) {
    console.log("程式觸發了失敗事件，" + ex);
});





function funcA() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('A');
            resolve('A');
        }, (Math.random() + 1) * 1000);
    });
}

function funcB() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('B');
            resolve('B');
        }, (Math.random() + 1) * 1000);
    });
}

function funcC() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('C');
            resolve('C');
        }, (Math.random() + 1) * 1000);
    });
}
funcA().then(funcB).then(funcC);





function promise() {
    return new Promise((resolve, reject) => {
        // 隨機取得 0 or 1
        const num = Math.random() > 0.5 ? 1 : 0;

        // 1 則執行 resolve，否則執行 reject
        if (num) {
            resolve('成功');
        }
        reject('失敗')
    });
}


let runPromise = (someone, timer, success = true) => {
    console.log(`${someone} 開始跑開始`);
    return new Promise((resolve, reject) => {
        // 傳入 resolve 與 reject，表示資料成功與失敗
        if (success) {
            setTimeout(function () {
                // 3 秒時間後，透過 resolve 來表示完成
                resolve(`${someone} 跑 ${timer / 1000} 秒時間(fulfilled)`);
            }, timer);
        } else {
            // 回傳失敗
            reject(`${someone} 跌倒失敗(rejected)`)
        }
    });
}

// 此段函式並不會影響其它函示的執行
runPromise('小明', 3000).then(someone => {
    console.log('小明', someone)
});
// 以下這段 console 會在 promise 結束前就執行
console.log('這裡執行了一段 console');

// // 此段函示會中斷其它函式的運行
// let mingRun = await runPromise('小明', 2000)
// console.log('跑完了:', mingRun);
// let auntieRun = await runPromise('漂亮阿姨', 2500);
// console.log('跑完了:', auntieRun);