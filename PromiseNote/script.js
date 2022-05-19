//overview
//how to retrive data from promise
//manipulating the data

//promises are javascript object that have data internally to be returned. the data can either be returned when the promise is fulffiled or failed when the promise is rejected.
//promise has state (pending and fufilled) and result (undefined or shows the data)
//state: pending when it has no data yet or fullfiled(resolveed or rejected) when it has data
//when the promise is pending (meaning no data internally), the result is going to be undefined
//when the promise is fullfiled (meaning it has data internally), then the data can be returned (resolved) or rejected (internal error, network error or error in the url )
//when it is resolved, it shows the data it has or just shows response (as in the case of fetch method) but when the state is rejected, it shows Error: rejected

// there are several ways of returing promises; i will show two ways here.
// manually customizing promise yourself and using fetch method

//manual using new Promise that takes a function, the function takes two arguments (resolve and reject)

//pending promise
const pendingPromise = new Promise((res, rej)=>{
   //no any data inside
})
console.log(pendingPromise) //[[PromiseState]]: "pending"
                            //[[PromiseResult]]: undefined


//fulfilled promise --resolved
const resolvedPromise = new Promise((res, rej)=>{
    res("hello world");
    // reject(new Error("rejected"))
})
console.log(resolvedPromise) //[[PromiseState]]: "fulfilled"
                            //[[PromiseResult]]: "hello world"

                            
//fulfilled promise --rejected
const rejectedPromise = new Promise((res, rej)=>{
    //resolve("hello world");
    rej(new Error("rejected"))
})
console.log(rejectedPromise) //[[PromiseState]]: "rejected"
                            //[[PromiseResult]]: Error: rejected at http://127.0.0.1:5500/

// i hope the above explanation is cleared?

//using fetch method and my json file from the file.json
//when you use fetch, you cannot manually pass the resolve and reject values as seen above, you can see that i handled the error to be seen myself, but fetch uses try and catch error handling to handle the error, you can do that yourself too (read about error handling)
// the promise returns by fetch is always fulfiiled because it will always has data internally

const url = `file.json`
const fetchPromise = fetch(url)
console.log(fetchPromise) //[[PromiseState]]: "fulfilled"
                        //[[PromiseResult]]: Response

//RETRIVING THE DATA
// two ways of retriving promise data
//1. using promise methods (then(), catch(), finally())
//2. using async and await keywords

//using promise methods
//.then() is use to retrive the resolved result while .catch() is use to retrive rejected result in case of error. the both are used together. finaaly() is not necessary, but it can be use to display any other other cold lines below the promise. promise is an asynchronose and hence any code lines below it will be runned even if there is error in the promise unlike the case of synchronouse code lines that kill every other code once there is error

// console.log(lll)
console.log("I will still be run even if there is error above as long as the error is within promise and not from the console.log(111) which is synchronouse")
//uncomment console.log(111) and this code will breaks

//we are going to use the promises above to retrive data (pendingPromise, resolvedPromise, rejectedPromise and fetchPromise)

pendingPromise.then()
pendingPromise.catch()

//they are same as
pendingPromise.then(responseResult=>console.log(responseResult))
            .catch(rejectedResult=>console.log(rejectedResult))
            //no result because the promise is not resolved

resolvedPromise.then(responseResult=>console.log(responseResult)) //hello world
            .catch(rejectedResult=>console.log(rejectedResult)) 

rejectedPromise.then(responseResult=>console.log(responseResult))
            .catch(rejectedResult=>console.log(rejectedResult)) //Error: rejected

fetchPromise.then(responseResult=>console.log(responseResult)) //shows the response but not the data, we'll talk about how to retrive the data later in this section
            .catch(rejectedResult=>console.log(rejectedResult))

//HOW TO RETRIVE THE DATA IN THE RESPONSE




