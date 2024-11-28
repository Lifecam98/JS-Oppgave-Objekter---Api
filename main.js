//1. create an array of 5 person objects, the objhects should contain first name last name, age and job properties, jobb should be a boolean.
//------------------------------------------------------------------------------------------------------------------------------------------------
const myArray = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 25,
        job: true
    },
    {
        firstName: "Jane",
        lastName: "McArthy",
        age: 30,
        job: false
    },
    {
        firstName: "Bob",
        lastName: "Branson",
        age: 35,
        job: true
    },
    {
        firstName: "Alice",
        lastName: "Smith",
        age: 17,
        job: false
    },
    {
        firstName: "Charlie",
        lastName: "Johnson",
        age: 45,
        job: true
    }
]

//2. print First and last name of the first person in the array. using dot notation on firstname and bracket notation last name
//------------------------------------------------------------------------------------------------------------------------------------------------
console.log(myArray[0].firstName, myArray[0]['lastName'])

//3. That was tiresome.. just so much typing. Lets write a method to that we never need to that again..
//create a method in every person object that returns first and last name, call it fullName. This can be done manually for each one or with a loop.
//Print fullName of the second person in the array by calling the method.

for (let i = 0; i < myArray.length; i++) {
    myArray[i].fullName = function () {
        return this.firstName + " " + this.lastName
    }
}
console.log(myArray)
console.log (myArray[1].fullName())
//------------------------------------------------------------------------------------------------------------------------------------------------

//4. Its the third person's birthday! And their job status changed. Update their age and job status using dot notation.
//------------------------------------------------------------------------------------------------------------------------------------------------
console.log(myArray[2].job)
myArray[2].job = false
console.log(myArray[2].job)

//5. Person three is throwing a giant party! create a function called fotballPubben(). The function should check if the person is over 18, print "party time" if they are and "too young" if they are not. It should also print the name of the person.
// use a loop to call the function for every person in the array.
//------------------------------------------------------------------------------------------------------------------------------------------------
for (let i = 0; i < myArray.length; i++) {
    myArray[i].fotballPubben = function () {
        if (this.age > 18) {
            return "party time"
        } else {
            return "too young"
        }
    }
    console.log(myArray[i].fotballPubben())
}
console.log(myArray[3].fotballPubben())
console.log(myArray[4].fotballPubben())

//6. It's time for school! Create a function called university. It should take in an person object as well as type of degree (bachelors or masters) as arguments.
// The function should update age and add two properties called "degree" and "student loan". The value of age, degree and student loan should change depending on what degree
//was passed into the function. Send one person to uni and print the result.
//------------------------------------------------------------------------------------------------------------------------------------------------
function university(person, degree) {
    if (degree === "bachelors") {
        person.age += 3
        person.degree = degree
        person.studentLoan = 200000
    } else if (degree === "masters") {
        person.age += 2
        person.degree = degree
        person.studentLoan = 100000
    }
}

university(myArray[0], "bachelors")
console.log(myArray[0])

// 7. API TIME!
// Read the documentation of this dog API: https://dog.ceo/dog-api/documentation/
// Fetch 4 dogs of the same breed or sub-breed and display them in the DOM
//feel free to change the ID of the images and/or add css.
//------------------------------------------------------------------------------------------------------------------------------------------------
const apiLink = "https://dog.ceo/api/breed/hound/images/random/4"
let firstDog = document.getElementById("dog1")
let secondDog = document.getElementById("dog2")
let thirdDog = document.getElementById("dog3")
let fourthDog = document.getElementById("dog4")

async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
const getData = await fetchData(apiLink);
// console.log(getData)

firstDog.src = getData.message[0];
secondDog.src = getData.message[1];
thirdDog.src = getData.message[2];
fourthDog.src = getData.message[3];

//BONUS!!
//create a way for you to change the breed of the dogs displayed on your page
//------------------------------------------------------------------------------------------------------------------------------------------------
// NOTE: Måtte jukse litt her, men kult å se hvordan det ville fungert!!!

// const breedInput = document.createElement("input");
// breedInput.type = "text";
// breedInput.id = "breed";
// breedInput.placeholder = "Enter a breed";
// document.body.appendChild(breedInput);

// const changeBreedButton = document.createElement("button");
// changeBreedButton.textContent = "Change Breed";
// changeBreedButton.onclick = async () => {
//     const breed = document.getElementById("breed").value;
//     const apiLink = `https://dog.ceo/api/breed/${breed}/images/random/4`
//     const getData = await fetchData(apiLink);
//     firstDog.src = getData.message[0];
//     secondDog.src = getData.message[1];
//     thirdDog.src = getData.message[2];
//     fourthDog.src = getData.message[3];
// }
// document.body.appendChild(changeBreedButton);
