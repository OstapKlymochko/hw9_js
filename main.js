// є масив
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
//
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];

for (const simpson of simpsons) {
    let data = document.createElement('div');
    data.classList.add('simpson_member');
    for(val in simpson){
        if(val === 'photo'){
            let img = document.createElement('img');
            img.setAttribute('src', `${simpson[val]}`);
            img.setAttribute('alt', 'character');
            data.appendChild(img);
            break;
        }
        let p = document.createElement('p');
        p.innerHTML = `<b>${val}</b>: <br>${simpson[val]}`;
        data.appendChild(p);
    }
    document.body.appendChild(data)

}



// Цикл в циклі
// - Є масив
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись
// значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png
// ------------------

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// for (const course of coursesArray) {
//     let data = document.createElement('div');
//     data.classList.add('course');
//     for(val in course){
//         if(val === 'modules'){
//            let ul = document.createElement('ul');
//            course[val].forEach(function (value){
//                let li = document.createElement('li');
//                 li.innerText = value;
//                 ul.appendChild(li);
//            });
//            data.appendChild(ul);
//            break;
//         }
//         let cDiv = document.createElement('div');
//         cDiv.innerHTML = `<p>${val}:<br>${course[val]}</p>`;
//         data.appendChild(cDiv);
//     }
//     document.body.appendChild(data)
//}
// courses = coursesArray.reduce((accumulator, course) => {
//     accumulator.titles.push(course.title);
//     accumulator.months.push(course.monthDuration);
//     accumulator.hours.push(course.hourDuration);
//     accumulator.modules.push(course.modules);
//     return accumulator;
// }, {titles:[], months:[], hours: [], modules:[]}
// );

let props = [];
for(const course of coursesArray) {
    for(val in course){
        props.push(String(val));
    }
    break;
}
props = props.map(function (value){
    let temp = document.createElement('div');
    temp.classList.add(value);
    return temp;
});
for(const course of coursesArray){
    let container = document.createElement('div');
    container.classList.add('container');
    let period = document.createElement('div');
    period.classList.add('period');
    // let titleDiv = document.createElement('div');
    // titleDiv.classList.add('title');
    // let months = document.createElement('div');
    // months.classList.add('months');
    // let hours = document.createElement('div');
    // hours.classList.add('hours');
    // let modulesDiv = document.createElement('div');
    // modulesDiv.classList.add('modules');
    //let props = [titleDiv, months, hours, modulesDiv];
    let counter = 0;
    for(const val in course){
        if(typeof course[val] === 'object'){
            let list = document.createElement('ul');
            list.classList.add('modules');
            course[val].forEach(function (value){
                let li = document.createElement('li');
                li.innerHTML = `<p>${value}</p>`;
                list.appendChild(li);
            });
            container.append(`${val}:`,list);
            break;

        }
        let curr = props[counter++].cloneNode(true);
        if(counter === 2 || counter === 3){
            curr.append(`${val}: ${course[val]}`);
            period.appendChild(curr);
            container.appendChild(period);
            continue;
        }
        curr.append(`${val}: ${course[val]}`);
        container.appendChild(curr);

    }
    document.body.appendChild(container);
}

//
//
//     - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
let block = document.createElement('div');
block.classList.add('wrap', 'collaps', 'alpha', 'beta');
block.style.background = 'silver';
block.style.color = 'silver';
block.style.fontSize = '10px';
document.body.appendChild(block)
// - Є масив:
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
//
let arr = ['Main','Products','About us','Contacts'];
let list = document.getElementsByClassName('menu')[0];
for (let i = 0; i < arr.length; i++) {
    let li = document.createElement('li');
    li.innerHTML = `<p>${arr[i]}</p>`;
    list.appendChild(li);
}
// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const elem of coursesAndDurationArray) {
    let div = document.createElement('div')
    let p = document.createElement('p');
    for (const val in elem){
        p.innerHTML += `${val}: ${elem[val]} <br>`;
    }
    div.appendChild(p);
    document.body.appendChild(div);
}
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
// з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
for (const course of coursesAndDurationArray) {
    let item = document.createElement('div');
    item.classList.add('item');
    item.innerHTML =`<h1 class="heading">${course.title}</h1><p class="description">${course.monthDuration} months</p>`
    document.body.appendChild(item);
}


//
//     - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні
//     на кнопку зникав елемент з id="text".
let item = document.createElement('h1');
item.id = 'text';
item.innerText = 'Something'
item.style.margin='50px 0 10px 0';
let button = document.createElement('button');
button.innerText = 'Destroy!';
document.body.append(item,button);



button.addEventListener('click', function (e){
   document.getElementById('text').style.display = 'none';
});
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати
//     інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
document.getElementsByName('read')[0].addEventListener('click', function (e){
    document.forms.f1.age.value >=18 ? alert('You are old enough', 'Default'): alert('You aren\'t old enough', 'Default');
})

// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
let dataDiv = document.createElement('div');
let rowsInput = document.createElement('input');
rowsInput.setAttribute('type', 'number');
let colsInput = document.createElement('input');
colsInput.setAttribute('type', 'number');
let dataInput = document.createElement('input');
button = document.createElement('button');
button.innerText = 'Create';
dataDiv.style.display = 'flex';
dataDiv.append(rowsInput,colsInput,dataInput,button);
document.body.appendChild(dataDiv);
button.onclick = function (){
    let table = document.createElement('table');
    table.style.border = '1px solid black';
    for(let i = 0;i < rowsInput.value; ++i){
        let temp = document.createElement('tr');
        temp.style.border = '1 px solid black';
        for( let j = 0 ;j<colsInput.value;++j){
            let col = document.createElement('td');
            col.innerText = dataInput.value;
            temp.appendChild(col);
        }
        table.appendChild(temp);
    }

    document.body.appendChild(table);
}