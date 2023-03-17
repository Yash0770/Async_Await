// let exam = async()=>{
//     return 4
// }
// exam().then((e)=>{console.log(e);})

let main_Func = async()=>{

    let delhi_Weather = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("24Deg")
        }, 2000);
    })

    let banglore_Weather = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("21Deg")
        }, 5000);
    })

    // delhi_Weather.then((e)=>{console.log(e);})
    // banglore_Weather.then((e)=>{console.log(e);})

    let delhiW = await delhi_Weather
    let bangloreW = await banglore_Weather

     return( [delhiW, bangloreW])
}

// console.log("Control room");
let a = main_Func()
console.log(a);