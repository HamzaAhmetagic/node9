// function info(){
//     console.log('radi');
// }




// let person = {
//     info:function(){
//         console.log('radi');
//     }
// }




// function Soldier(){
//     console.log('radi');
// }

// let newSoldier = new Soldier();


// let dispay = name=>console.log(name);

// dispay('DANILO')

// let sabiranje = num=>num*2;
// console.log(sabiranje(4));

// setInterval(()=>{
//     console.log('radi');
// },1000)
// let numbers = [1,2,3,4,5,6];
// numbers.forEach(el=>console.log(el))
// function xxx(){
//     console.log(this);
// }
// xxx();
// let person = {
//     car:"hamza",
//     info:function(){
//         // console.log(this);
//             // var p = this;
//             let step2 =()=>{
//                 let name = "Danilo"
//                 console.log(this.car);
//             }
//             step2();

       
//     }
// }
// person.info()
let http = require("http");
let fs = require("fs");
let server = http.createServer((req,res)=>{
    let url = req.url;
    if (url == "/") {
        res.writeHead(200,{"Content-Type":"text/html"})
        let indexFile = fs.readFileSync("index.html")
        res.write(indexFile);
        res.end();
    } else if(url == "/main.css") {
        res.writeHead(200,{"Content-Type":"text/css"})
        let cssFile = fs.readFileSync("main.css")
        res.write(cssFile);
        res.end();
    } else if (url == "/main.js"){
        res.writeHead(200,{"Content-Type":"text/javascript"})
        let jsFile = fs.readFileSync("main.js")
        res.write(jsFile);
        console.log('Hamza');
        res.end();
    }
})
server.listen(3000,()=>{
    console.log('Pokrenut server na 3000');
})