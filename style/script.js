//Name Storage
//Array Function
const name = () => {

    //Target the element that I want to modify in HTML
    let sayHello = document.getElementById('sayHello');
    //Define a variable 'nameStorage' and retrieve the value 
    //(we will get the "value" input)
    let nameStorage = localStorage.getItem('nom');


    //Conditions
    if (nameStorage == null) {
        sayHello.innerHTML = 'Hello stranger, can you enter your pseudo ?';
    } else {
        //We will retrieve the gotten value for nameStorage and display it.
        sayHello.innerHTML = `Bonjour ${nameStorage}`;
    }

};

//Name Storage
function setData() {
    let pseudo = document.getElementById('pseudo').value;
    localStorage.setItem('nom', pseudo);
};


//Counter Storage
const visit = () => {
    let visitDisplay = document.getElementById('visitDisplay');
    let visitCount = localStorage.getItem('counter');

    //Implement the variable visitCount +1 (every new refresh)
    visitCount++;

    //Now we need to setting up the elements
    //We will say that "counter" will take the value of "visitCount"
    //(We will set the "value")
    localStorage.setItem('counter', visitCount);
    visitDisplay.innerHTML = `Nombre de visites : ${visitCount}`;
};



//Active the functions
name();
visit();