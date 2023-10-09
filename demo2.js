function timeConsumingByLoop() {
    console.log("Loop starts");
    for(let i = 0; i < 1000000000; i++) {
        // something
    }
    console.log("Loop ends");
}

function timeConsumingByRuntimeFeature0() {
    console.log("Timer 0 starts");
    setTimeout(function exec() {
        console.log("Timer 0 ends");
    }, 5000)
}

function timeConsumingByRuntimeFeature1() {
    console.log("Timer 1 starts");
    setTimeout(function exec() {
        console.log("Timer 1 ends");
    }, 2000)
}

function timeConsumingByRuntimeFeature2() {
    console.log("Timer 2 starts");
    setTimeout(function exec() {
        console.log("Timer 2 ends");
    }, 0)
}

console.log("Hii");
timeConsumingByLoop();
timeConsumingByRuntimeFeature0();
timeConsumingByRuntimeFeature1();
timeConsumingByRuntimeFeature2();
timeConsumingByLoop();
console.log("By")

