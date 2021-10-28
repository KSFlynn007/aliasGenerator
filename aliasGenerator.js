const url = 'https://randomuser.me/api/';
const generateOne = document.querySelector('#generateOne');
const generateMore = document.querySelector('#generateMore');
const outputOne = document.querySelector('.outputOne');
const outputMore = document.querySelector('.outputMore');
const inputVal = document.querySelector('.listNumber');

generateOne.addEventListener('click', (e) => {
    loadOne(url)
})

function loadOne(url){
    fetch(url).then((rep) => rep.json())
    .then((data) => {
        let response = data.results[0];
        console.log(response);
    })
    .catch((err) => {
        console.log(err)
    }) 
}




generateMore.addEventListener('click', (e) => {
    let listVal = `?results=${inputVal.value}`;
    loadMore(url + listVal);
})

function loadMore(url){
    fetch(url).then((rep) => rep.json())
    .then((data) => {
        let response = data.results;
        // console.log(response);
        makeList(response);
    })
    .catch((err) => {
        console.log(err)
    }) 
}

function makeList(data){
    data.forEach(element => {
        console.log(element);
        const div = eleMaker('div', outputMore, '');
        div.classList.add('box');


        const name = `${element.name.title} ${element.name.first} ${element.name.last}`;
        const email = `Email : ${element.email}`
        const dob = `${element.dob.date}`
        const age = `DOB : ` + dob.slice(0,10);
        const img = `<img src="${element.picture.large}">`;
        const address = `Address : ${element.location.street.number} ${element.location.street.name}, ${element.location.city}, ${element.location.state}, ${element.location.country}`;
        const postcode = `Postal Code : ${element.location.postcode}`;
        const phone = `Phone Number : ${element.phone}`

        eleMaker('div', div, name);
        eleMaker('div', div, age);
        eleMaker('div', div, img);
        eleMaker('div', div, address);
        eleMaker('div', div, postcode);
        eleMaker('div', div, email);
        eleMaker('div', div, phone);


    });
}

function eleMaker(eleTag, parent, contents){
    const boxResult = document.createElement(eleTag);
    parent.append(boxResult);
    boxResult.innerHTML = contents;
    return boxResult;
}
// if statement for grouping countries into continents needed!
