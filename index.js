// Add your code here
<<<<<<< HEAD
let url = 'http://localhost:3000/users';
=======
>>>>>>> f0885158585dd01bb732977a0bbe40836727fa25
function submitData (userName, userEmail) {
  const body = document.getElementsByTagName('body')[0];
    let person = {
      name: userName,
      email: userEmail
    };
    let configObj = {


    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(person),
    method : 'POST'
  };

<<<<<<< HEAD
  return fetch(url ,  configObj)
=======
  return fetch('http://localhost:3000/users',  configObj)
>>>>>>> f0885158585dd01bb732977a0bbe40836727fa25
.then(response=> response.json())
.then(
user => {
  body.innerHTML =  user.id;}
  /* end of second then*/)
  .catch(
    err => {
       body.innerHTML =  err.message;
    }
  )


/* end of function*/}
