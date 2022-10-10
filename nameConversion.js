const text = document.getElementById("text");
const button = document.getElementById("convert-btn");
const camelCase = document.getElementById("camel-case");
const pascalCase = document.getElementById("pascal-case");
const snakeCase = document.getElementById("snake-case");
const screamingSnakeCase= document.getElementById("screaming-snake-case");
const kebabCase = document.getElementById("kebab-case");
const screamingKebabCase = document.getElementById("screaming-kebab-case");

button.addEventListener("click", ()=>{
    console.log(text.value);
    convert();
})

function convert (){
    
    camelCase.innerText = text.value;
}