let ul = document.getElementById('list');
let li = document.createElement('li');
ul.append(li);


for( let i=1; i <= 100; i++){
    
    if( (i % 3) == 0 && (i % 5) == 0 ){
        li.innerText += 'Fizzbuzz'
    
    } else if( i % 3 == 0){
        li.innerText += 'Fizz'
    
    } else if( i % 5 == 0){
        li.innerText += 'Buzz'
    
    } else{
        li.innerText += `${i}`
    }
}