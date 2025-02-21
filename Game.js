

var numberOfCards=document.querySelectorAll('.card').length;

for(var i=0; i<numberOfCards; i++){

    document.querySelectorAll('.card img')[i].addEventListener('click', function(){
        this.setAttribute('src', 'images/fries.png');

    });
}    