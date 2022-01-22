let year = prompt("Enter your birth year");
let yearParsed = parseInt(year) ;
let calculation = (yearParsed - 4)%12;
switch(calculation){
    case 0:
        alert("Your sign in chinese zodiac sign is Rat");
        break ;
    case 1:
        alert("Your sign in chinese zodiac sign is Ox");
        break ;
    case 2:
        alert("Your sign in chinese zodiac sign is Tiger");
        break ;
    case 3:
        alert("Your sign in chinese zodiac sign is Rabbit");
        break ;
    case 4:
        alert("Your sign in chinese zodiac sign is Dragon");
        break ;
    case 5:
        alert("Your sign in chinese zodiac sign is Snake");
        break ;
    case 6:
        alert("Your sign in chinese zodiac sign is Horse");
        break ;
    case 7:
        alert("Your sign in chinese zodiac sign is Goat");
        break ;
    case 8:
        alert("Your sign in chinese zodiac sign is Monkey");
        break ;
    case 9:
        alert("Your sign in chinese zodiac sign is Rooster");
        break ;
    case 10:
        alert("Your sign in chinese zodiac sign is Dog");
        break ;
    case 11:
        alert("Your sign in chinese zodiac sign is Pig");
        break ;
    default :
        alert("You have written something wrong !") ;
}