function timeConsumingByLoop() {
    console.log("Loop starts");
    for(let i = 0; i < 1000000000; i++) {
        // something
    }
    console.log("Loop ends");
}

function timeConsumingByRuntimeFeature() {
    console.log("Timer starts");
    setTimeout(function exec() {
        console.log("Timer ends");
    }, 5000)
}

console.log("Hii");
timeConsumingByLoop();
timeConsumingByRuntimeFeature();
timeConsumingByLoop();
console.log("By")

