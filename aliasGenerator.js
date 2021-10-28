const url = 'https://randomuser.me/api/';
const generateOne = document.querySelector('#generateOne');
const generateMore = document.querySelector('#generateMore');
const outputOne = document.querySelector('.outputOne');
const outputMore = document.querySelector('.outputMore');
const inputVal = document.querySelector('.listNumber');
const genderSelect = document.getElementById('gender');
const nationalitySelect = document.getElementById('nationality');

generateOne.addEventListener('click', (e) => {
    outputOne.innerHTML = '';
    if(genderSelect.value != 'null' && nationalitySelect.value != 'null'){
        alert("Sorry, the RandomUser API is not able to select both gender and nationality at the same time, please make sure only one of the dropdowns are specified, or else the alias generated may not be correct!")
    }
    if(genderSelect.value != 'null'){
        let selector1 = `?gender=${genderSelect.value}`;
        loadOne(url + selector1);
    } else if (nationalitySelect.value != 'null'){
        let selector2 = `?nat=${nationalitySelect.value}`;
        loadOne(url + selector2);
    } else {
        loadOne(url);
    }
})

function loadOne(url){
    fetch(url).then((rep) => rep.json())
    .then((data) => {
        let response = data.results[0];
        // console.log(response);
        makeAlias(response);
        outputOne.scrollIntoView({
            behavior: "smooth",
        });
    })
    .catch((err) => {
        console.log(err)
    }) 
}

function makeAlias(element){
    console.log(element);
    const div1 = eleMaker('div', outputOne, '');
    div1.classList.add('singleBox');
    div1.classList.add('resultsFont')

    const name = `<span>${element.name.title} ${element.name.first} ${element.name.last}</span>`;
    const email = `<span>Email</span> : ${element.email}`
    const dob = `${element.dob.date}`
    const age = `<span>DOB</span> : ` + dob.slice(0,10);
    const img = `<img src="${element.picture.large}">`;
    const address = `<span>Address</span> : ${element.location.street.number} ${element.location.street.name}, ${element.location.city}, ${element.location.state}, ${element.location.country}`;
    const postcode = `<span>Postal Code</span> : ${element.location.postcode}`;
    const phone = `<span>Phone Number</span> : ${element.phone}`

    eleMaker('div', div1, name);
    eleMaker('div', div1, age);
    eleMaker('div', div1, img);
    eleMaker('div', div1, address);
    eleMaker('div', div1, postcode);
    eleMaker('div', div1, email);
    eleMaker('div', div1, phone);
}

// if statement for grouping countries into continents needed!


generateMore.addEventListener('click', (e) => {
    outputMore.innerHTML = '';
    let listVal = `?results=${inputVal.value}`;
    loadMore(url + listVal);
})

function loadMore(url){
    fetch(url).then((rep) => rep.json())
    .then((data) => {
        let response = data.results;
        // console.log(response);
        makeList(response);
        outputMore.scrollIntoView({
            behavior: "smooth",
        });
    })
    .catch((err) => {
        console.log(err)
    }) 
}

function makeList(data){
    data.forEach(element => {
        // console.log(element);
        const div2 = eleMaker('div', outputMore, '');
        div2.classList.add('box');
        div2.classList.add('resultsFont')

        const name = `<span>${element.name.title} ${element.name.first} ${element.name.last}</span>`;
        const email = `<span>Email</span> : ${element.email}`
        const dob = `${element.dob.date}`
        const age = `<span>DOB</span> : ` + dob.slice(0,10);
        const img = `<img src="${element.picture.large}">`;
        const address = `<span>Address</span> : ${element.location.street.number} ${element.location.street.name}, ${element.location.city}, ${element.location.state}, ${element.location.country}`;
        const postcode = `<span>Postal Code</span> : ${element.location.postcode}`;
        const phone = `<span>Phone Number</span> : ${element.phone}`

        eleMaker('div', div2, name);
        eleMaker('div', div2, age);
        eleMaker('div', div2, img);
        eleMaker('div', div2, address);
        eleMaker('div', div2, postcode);
        eleMaker('div', div2, email);
        eleMaker('div', div2, phone);
    });
}

function eleMaker(eleTag, parent, contents){
    const boxResult = document.createElement(eleTag);
    parent.append(boxResult);
    boxResult.innerHTML = contents;
    return boxResult;
}
