var tortilla = "flour"
var cheese = "cheddar"
var meat = "chicken"
var veggie1 = "tomato"
var veggie2 = "lettuce"
var guac = "no guacamole"
var sauce = "medium sauce"

function tortillaPick(){
    tortilla = prompt(`Pick your tortilla.
    1. flour
    2. corn
    3. none`)
    if(tortilla == 1 ){
        tortilla = "flour"
    }else if(tortilla == 2){
        tortilla = "corn"
    }else if(tortilla == 3){
        tortilla = "no"
    }else{
        alert("Not a valid option")
        tortillaPick()
    }
}

function cheesePick(){
    cheese = prompt(`Pick your cheese.
    1. cheddar
    2. mozzarella
    3. american
    4. colby Jack
    5. none`)
    if(cheese == 1 ){
        cheese = "cheddar"
    }else if(cheese == 2){
        cheese = "mozzarella"
    }else if(cheese == 3){
        cheese = "american"
    }else if(cheese == 4){
        cheese = "colby jack"
    }else if(cheese == 5){
        cheese = "no"
    }else{
        alert("Not a valid option")
        cheesePick()
    }
}

function meatPick(){
    meat = prompt(`Pick your meat.
    1. chicken
    2. steak
    3. chorizo
    4. pork
    5. none`)
    if(meat == 1 ){
        meat = "chicken"
    }else if(meat == 2){
        meat = "steak"
    }else if(meat == 3){
        meat = "chorizo"
    }else if(meat == 4){
        meat = "pork"
    }else if(meat == 5){
        meat = "no meat"
    }else{
        alert("Not a valid option")
        meatPick()
    }
}

function veggie1Pick(){
    veggie1 = prompt(`Pick your first vegetable.
    1. lettuce
    2. tomato
    3. olives
    4. potato
    5. none`)
    if(veggie1 == 1 ){
        veggie1 = "lettuce"
    }else if(veggie1 == 2){
        veggie1 = "tomatos"
    }else if(veggie1 == 3){
        veggie1 = "olives"
    }else if(veggie1 == 4){
        veggie1 = "potato"
    }else if(veggie1 == 5){
        veggie1 = "no veggies"
    }else{
        alert("Not a valid option")
        veggiePick()
    }
}

function veggie2Pick(){
    veggie2 = prompt(`Pick your second vegetable.
    1. lettuce
    2. tomato
    3. olives
    4. potato
    5. none`)
    if(veggie2 == 1 ){
        veggie2 = "lettuce"
    }else if(veggie2 == 2){
        veggie2 = "tomatos"
    }else if(veggie2 == 3){
        veggie2 = "olives"
    }else if(veggie2 == 4){
        veggie2 = "potato"
    }else if(veggie2 == 5){
        veggie2 = "also no veggies"
    }else{
        alert("Not a valid option")
        veggie2Pick()
    }
}

function guacPick(){
    guac = prompt(`Do you want guacamole?
    1. guacamole
    2. none`)
    if(guac == 1 ){
        guac = "guacamole"
    }else if(guac == 2){
        guac = "no guacamole"
    }else{
        alert("Not a valid option")
        guacPick()
    }
}

function saucePick(){
    sauce = prompt(`What sauce do you want?
    1. medium sauce
    2. mild sauce
    3. hot sauce
    4. none`)
    if(sauce == 1 ){
        sauce = "medium"
    }else if(sauce == 2){
        sauce = "mild"
    }else if(sauce == 3){
        sauce = "hot"
    }else if(sauce == 4){
        sauce = "no sauce"
    }else{
        alert("Not a valid option")
        saucePick()
    }
}

function orderOrdered(){
    alert("HOORAY! You have ordered a burrito with " + tortilla + " tortilla, " + cheese + " cheese, " + meat + ", " + veggie1 + " and " + veggie2 + ", " + guac + ", and " + sauce + ".")
}