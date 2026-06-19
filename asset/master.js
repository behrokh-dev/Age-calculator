function calc(){
    let date = document.getElementById('birthYear').value
    console.log(date);
    let currentYear= new Date().getFullYear();
    let age= currentYear - date
    console.log(age);
    document.getElementById('result').innerHTML = age;
  }