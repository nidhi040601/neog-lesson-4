const translateBtn = document.getElementById("translateBtn");
const inputField = document.getElementById("inputText");
const outputField = document.getElementById("outputText");

const url = "https://api.funtranslations.com/translate/minion.json";

function getTranslationUrl(text){
    return url + "?text=" + text;
}

translateBtn.addEventListener("click", () => {
    let inputText = inputField.value;
    console.log(inputField, inputText)

    fetch(getTranslationUrl(inputText)).then(response => response.json())
    .then(json => console.log(json.contents))
})


//console.log(translateBtn);