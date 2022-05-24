let btn = document.getElementById('btn');
btn.addEventListener('click', () =>{
    let random_number = Math.floor(Math.random() * 10);
    let inp = document.getElementById('num').value;
    let res = document.getElementById('res');

    if (inp == random_number){
        res.innerHTML = `Your guessing number is ${random_number}`;
    }
    else if (inp < random_number) {
        res.innerHTML = 'Your guessing number is too low';
    }
    else if (inp > random_number) {
        res.innerHTML = 'Your guessing number is too heigh';
    }
}) 

