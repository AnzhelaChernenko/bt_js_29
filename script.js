/*1. Создать страницу, которая выводит нумерованный список песен:*/

/*let playList = [
    {
        author: "LED ZEPPELIN",
        song:"STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN",
        song:"BOHEMIAN RHAPSODY"
    },
    {
        author: "LYNYRD SKYNYRD",
        song:"FREE BIRD"
    },
    {
        author: "DEEP PURPLE",
        song:"SMOKE ON THE WATER"
    },
    {
        author: "JIMI HENDRIX",
        song:"ALL ALONG THE WATCHTOWER"
    },
    {
        author: "AC/DC",
        song:"BACK IN BLACK"
    },
    {
        author: "QUEEN",
        song:"WE WILL ROCK YOU"
    },
    {
        author: "METALLICA",
        song:"ENTER SANDMAN"
    }
];

    let show = document.createElement('ol');
        document.body.prepend(show);

function look() {
    let li;



    for(let ai in playList) {
        for(let i in playList[ai]){

            if(i=='author'){

                li = document.createElement('li');
                li.textContent = `${playList[ai][i]}:`;
                show.append(li);
            }

            if(i=='song'){
                let  song = document.createElement('p');
                 song.textContent = `${playList[ai][i]} `;
                li.append(song);
            }

                    }
    }

}
look();*/

/*2. Создать HTML-страницу с кнопкой "Открыть" и модальным окном. На модальном окне должен
 быть текст и кнопка "Закрыть". Изначально модальное окно не отображается. При клике на кнопку
  "Открыть" появляется модальное окно, на кнопку "Закрыть" – исчезает.*/



/*let mainPage  = document.createElement('div');
mainPage.className = 'wrapper';
document.body.prepend(mainPage);

let pressMe = document.createElement('button');
pressMe.className = 'pressMe';
pressMe.id = 'pressMe';

pressMe.innerText = 'Открыть';
mainPage.prepend(pressMe);

document.getElementById('pressMe').onclick = function  () {
    pressMe.style.visibility = 'collapse';
    let modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `<p>Идея использования модальных окон в том, чтобы принудить выполнить
    какое-либо действие, перед тем, как что-нибудь будет сделано. 
    Сделать кнопку закрытия окна видной в любом состоянии кажется 
     не плохой идеей.</p>`;
    mainPage.appendChild(modal);
    let  close = document.createElement('button');
    close.className = 'closeMe';
    close.id = 'close';
    close.textContent = 'Закрыть';
    modal.append(close);
    document.getElementById('close').onclick = function () {
        modal.style.display = 'none';
        close.style.display = 'none';
        pressMe.style.visibility = 'visible';

    }

};*/

/*3. Создать HTML-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.*/

/*function go(elem){

    if(elem.value<=2){
    elem.value = parseInt(elem.value) + 1;
    console.log(elem.value);

    if (elem.value == 1) {
        let input = document.getElementById('green');
        input.style.backgroundColor = 'green';

        let r = document.getElementById('yellow');
        r.style.backgroundColor = 'darkgray';

        let w = document.getElementById('red');
        w.style.backgroundColor = 'darkgray';

    } else if (elem.value == 2) {

        let r = document.getElementById('yellow');
        r.style.backgroundColor = 'yellow';


        let input = document.getElementById('green');
        input.style.backgroundColor = 'darkgray';

        let w = document.getElementById('red');
        w.style.backgroundColor = 'darkgray';

    } else if (elem.value == 3) {
        let w = document.getElementById('red');
        w.style.backgroundColor = 'red';

        let input = document.getElementById('green');
        input.style.backgroundColor = 'darkgray';

       let r = document.getElementById('yellow');
        r.style.backgroundColor = 'darkgray';
    }}else {
        return elem.value=0;
    }

}*/











































