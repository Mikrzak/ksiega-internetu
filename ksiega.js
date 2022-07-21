// let usernameInput, username;
// let phraseInput, phrase;

// window.onload = function () {
//     usernameInput = document.getElementById("username");
//     phraseInput = document.getElementById("phrase");
// }
// function Submit() {
//     username = usernameInput.value;
//     phrase = phraseInput.value;

//     username = FilterOut(username);
//     phrase = FilterOut(phrase);

//     usernameInput.value = username;
//     phraseInput.value = phrase;
// }

// function FilterOut(text) {
//     let textCopy = "";
//     for (var i = 0; i < text.length; i++) {
//         if (!(/[a-zA-Z]/).test(text[i]) && !(/[0-9]/).test(text[i]))
//             textCopy += '';
//         else
//             textCopy += text[i];
//     }
//     return textCopy;
// }