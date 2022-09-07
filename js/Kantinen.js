
let date = new Date();
let dayOfWeekNumber = date.getDay();
currentdate = new Date();
let oneJan = new Date(currentdate.getFullYear(),0,1);
let numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
let result = Math.ceil(( currentdate.getDay() + numberOfDays) / 7);
let menu = JSON.parse(window.localStorage.getItem('canteen'))
let today = window.localStorage.getItem('today')
console.log(today);
if (today != dayOfWeekNumber) {
    canteen()
    console.log(true);
    window.localStorage.setItem('today', dayOfWeekNumber) ;
}else{
    switch(dayOfWeekNumber){
        case 0: 
            nameOfDay = 'Sunday';
            document.querySelector('#dish').innerHTML = 'Du har weekend <3';
            break;
        case 1:
            nameOfDay = 'Monday';
            document.querySelector('#dish').innerHTML = menu.Days[dayOfWeekNumber - 1].Dish
            break;
        case 2:
            nameOfDay = 'Tuesday';
            document.querySelector('#dish').innerHTML = menu.Days[dayOfWeekNumber - 1].Dish
            break;
        case 3:
            nameOfDay = 'Wednesday';
            document.querySelector('#dish').innerHTML = menu.Days[dayOfWeekNumber - 1].Dish
            break;
        case 4:
            nameOfDay = 'Thursday';
            document.querySelector('#dish').innerHTML = menu.Days[dayOfWeekNumber - 1].Dish
            break;
        case 5:
            nameOfDay = 'Friday';
            document.querySelector('#dish').innerHTML = menu.Days[dayOfWeekNumber - 1].Dish
            break;
        case 6:
            nameOfDay = 'Saturday';
            document.querySelector('#dish').innerHTML = 'Du har weekend <3';
            break;
    
    }
}

function canteen() {
     $.getJSON('https://infoskaerm.techcollege.dk/umbraco/api/content/getcanteenmenu/?format=json', function(data) {
        window.localStorage.setItem('canteen', JSON.stringify(data))   
        switch(dayOfWeekNumber){
            case 0: 
                nameOfDay = 'Sunday';
                document.querySelector('#dish').innerHTML = 'Du har weekend <3';
                break;
            case 1:
                nameOfDay = 'Monday';
                document.querySelector('#dish').innerHTML = menu.Days[dayOfWeekNumber - 1].Dish
                break;
            case 2:
                nameOfDay = 'Tuesday';
                document.querySelector('#dish').innerHTML = menu.Days[dayOfWeekNumber - 1].Dish
                break;
            case 3:
                nameOfDay = 'Wednesday';
                document.querySelector('#dish').innerHTML = menu.Days[dayOfWeekNumber - 1].Dish
                break;
            case 4:
                nameOfDay = 'Thursday';
                document.querySelector('#dish').innerHTML = menu.Days[dayOfWeekNumber - 1].Dish
                break;
            case 5:
                nameOfDay = 'Friday';
                document.querySelector('#dish').innerHTML = menu.Days[dayOfWeekNumber - 1].Dish
                break;
            case 6:
                nameOfDay = 'Saturday';
                document.querySelector('#dish').innerHTML = 'Du har weekend <3';
                break;
        
        }
})

}





 
