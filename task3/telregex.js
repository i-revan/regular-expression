const regex = /[+994]{4} [55|50|70|77|51]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}/;
let num = "+994 55-475-30-75";
if(regex.test(num)){
    console.log('true');
}
else{
    console.log("It is not a number");
}
