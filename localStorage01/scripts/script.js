//1)Name Storage
//Array Function
const name = () => {

    //Target the element that I want to modify in HTML by its ID
    let sayHello = document.getElementById('sayHello');

    //Attribuate to nameStorage variable the key 'nom'
    //We will get the information and store it
    let nameStorage = localStorage.getItem('nom');


    //Conditions
    //If the variable doesn't have input, then it will display 'Hello stranger....'
    if (nameStorage == null) {
        sayHello.innerHTML = 'Hello stranger, can you enter your pseudo ?';
        //If the user communicate his pseudo, we can display 'Bonjour + his pseudo'
    } else {
        //We will retrieve the gotten value for nameStorage and display it.
        sayHello.innerHTML = `Bonjour ${nameStorage}`;
    }

};

//With that function, we will set to the variable nameStorage the value (pseudo)
//From now, we are able to display it on the website (in 'Bonjour + pseudo')
function setData() {
    let pseudo = document.getElementById('pseudo').value;
    //We attribuate the pseudo.value to the key 'nom' which is attribuated to nameStorage
    localStorage.setItem('nom', pseudo);
};


//2)Counter Storage---------------------------------------------------------------------------
//It's quite the same, we process the same way
const visit = () => {
    let visitDisplay = document.getElementById('visitDisplay');
    let visitCount = localStorage.getItem('counter');

    //but we have to implement the variable visitCount +1 (every new refresh)
    visitCount++;

    localStorage.setItem('counter', visitCount);
    visitDisplay.innerHTML = `Nombre de visites : ${visitCount}`;
};



//Active the functions
name();
visit();