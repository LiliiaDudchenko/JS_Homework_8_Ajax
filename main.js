"use string"


let button = document.querySelector('.button');

function fillElement(inputThread) {
    let text = document.querySelectorAll(".col");
    let divCount = text.length;
    let i = 0;
    while (i < divCount) {
        text[i].innerHTML = inputThread[i].title;
        i++;
    }
    // console.log(text);
}

function createTag(newTag, parentElement, atribute) {
    let newElement = document.createElement(newTag);
    parentElement.append(newElement);
    newElement.setAttribute("class", atribute);
}



let xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/todos");
xhr.send();
xhr.onload = function () {
    if (xhr.status != 200) {
        alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
    } else {
        responseData = JSON.parse(xhr.responseText);

        fillElement(responseData);

        button.onclick = function () {
            for (let i = 0; i < 2; i++) {
                createTag("div", document.querySelector('.items'), "row");

                for (let j = 0; j < 5; j++) {
                    createTag("div", document.querySelector('.row:last-child'), "col");
                }
            }

            fillElement(responseData);
        };
    }

};