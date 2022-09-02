var tortilla = 0
var cheese = 0
var meat = 0
var veggie = 0
var veggie2 = 0
var guac = 0
var sauce = 0

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
        tortilla = "none"
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
        cheese = "none"
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
        meat = "none"
    }else{
        alert("Not a valid option")
        meatPick()
    }
}

function veggiePick(){
    veggie = prompt(`Pick your first vegetable.
    1. lettuce
    2. tomato
    3. olives
    4. potato
    5. none`)
    if(veggie == 1 ){
        veggie = "lettuce"
    }else if(veggie == 2){
        veggie = "steak"
    }else if(veggie == 3){
        veggie = "chorizo"
    }else if(veggie == 4){
        veggie = "pork"
    }else if(veggie == 5){
        veggie = "none"
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
        veggie2 = "steak"
    }else if(veggie2 == 3){
        veggie2 = "chorizo"
    }else if(veggie2 == 4){
        veggie2 = "pork"
    }else if(veggie2 == 5){
        veggie2 = "none"
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
        guac = "lettuce"
    }else if(guac == 2){
        guac = "steak"
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
    5. none`)
    if(sauce == 1 ){
        sauce = "lettuce"
    }else if(sauce == 2){
        sauce = "steak"
    }else if(sauce == 3){
        sauce = "chorizo"
    }else if(sauce == 4){
        sauce = "pork"
    }else{
        alert("Not a valid option")
        saucePick()
    }
}


