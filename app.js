
const contact = {
    akash:387454545,
    rohan:3423555453,
    aditya:3487534345,
    ravi:34534985642,
    sohan:4358793422,
};



function getContact(){
    const input = document.getElementById("input-area");
    const inputName = input.value.toLowerCase();
    const storecontact = contact[inputName];
   
    const addContact = document.getElementById("result");
    
    if(storecontact){
        addContact.innerText = `Mobile number of ${inputName} is ${storecontact}`;;
    }else{
        addContact.innerText = `Mobile number of ${inputName} is not Available !!!!`;
    }
}