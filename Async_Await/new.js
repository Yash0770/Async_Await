// console.log("test");

let main = async()=>{
    let delhi = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("24Deg")
        }, 2000);
    })
    let banglore = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("21Deg")
        }, 4000);
    })

    // let 
    let delhiW = await delhi;
    let bangloreW = await banglore;

    return [delhiW, bangloreW]
}



// main()

let b = main()
console.log(b);
