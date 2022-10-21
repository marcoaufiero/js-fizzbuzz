let ul = document.getElementById('list');
let li = document.createElement('li');
ul.append(li);


for( let i=1; i <= 100; i++){
    
    if( (i % 3) == 0 && (i % 5) == 0 ){
        li.innerHTML += '<li>Fizzbuzz</li>'
    
    } else if( i % 3 == 0){
        li.innerHTML += '<li>Fizz</li>'
    
    } else if( i % 5 == 0){
        li.innerHTML += '<li>Buzz</li>'
    
    } else{
        li.innerHTML += `<li>${i}</li>`
    }
}