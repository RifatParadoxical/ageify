document.querySelector('.factCheck').style.display = 'none';
const fetching = async() =>{
    const fName = document.getElementById('nName').value;
    const api = `https://api.agify.io/?name=${fName}`;
    const response = await fetch(api);
    const data = await response.json();
    console.log(data); 
    if (data.count == 0) {
        return data.age = 69;
    }
    console.log("running properly");
    document.getElementById('fact').innerText = `Let me guess. ${data.name}  is  ${data.age}  years old`
    document.querySelector('.haba').style.display = 'none';
    document.querySelector('.factCheck').style.display = 'block';
}
document.getElementById('btn').addEventListener("click", fetching)

document.getElementById('r').addEventListener("click", f1)
function f1(){
    document.querySelector('body').innerHTML = "<h1 class='center'>Much obliged—if gratitude were pizza, you’d get the whole pie.</h1>";
    document.querySelector('.factCheck').style.display = 'none';
}
document.getElementById('w').addEventListener("click", f2)
function f2(){
    document.querySelector('body').innerHTML = "<h1 class='center'>If bad decisions were a Netflix series, you’d have 10 seasons and a spin-off.</h1>";
    document.querySelector('.factCheck').style.display = 'none';
}