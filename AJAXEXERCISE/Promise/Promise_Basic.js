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