function fun(x, fn) {
    console.log(x)
    fn()
}

fun(10, function exec(){
    console.log("Executing")
})
