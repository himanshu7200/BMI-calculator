let form = document.querySelector('form')

form.addEventListener('submit', function(e) {
e.preventDefault();

let height = parseInt(document.querySelector('#height').value)
let weight = parseInt(document.querySelector('#weight').value)
let result = document.querySelector('.result')
let heading = document.querySelector('.h1R')

if (height === '' || height < 0 || isNaN(height)){
    result.innerHTML = `Please give a valid height ${height}`
}
if (weight === '' || weight<0 || isNaN(weight)){
    result.innerHTML = `Please give a valid weight ${weight}` 
}
else {
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);
    
    heading.innerHTML = `${bmi} kg/m2`
}

form.reset()

});
