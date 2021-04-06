console.log("Hello Zootymon!")

/*<--   ==MVP ===  -->
     - Tamagotchi has data -
     user will enter name to create a pet
     A. the pet will have default data
     B. you can view the the default data in "bars"
     C. Bars are a visual reference to check pets state

    <!-- Tamgotchi Basic Stats  -->
    *Stats help us track Tamagotchi's current state*
     Age - defualt - 0
     Hunger - default 5
     Boredom - default 5
     Sleepiness- default 5

     <-- Feed Pet -->
     user can feed pet by clicking button
     A. When user clicks feed button it will increase the hunger meter 
     B. if not clicked within the set time (we will set a timer) hunger bar decreases
     C. Hunger meter tells us if our pet is dead or alive
    // Hunger meter- meter to keep track of hungry 

     <-- Play with Pet -->
     user can play with pet by clicking button
     A.when user clicks button, we can play with pet increase boredom meter 
     B. if not clicked boredom meter decreases 
     C. if bar reaches zero pet dies 
     // Boredom Bar- meter to keep track of boredom

     <!-- Naptime -->
     user can play with pet when clicking button
     A. when clicked we can make our pet rest 
     B. if not clicked sleep meter 
     C. if sleep meter reaches zer pet will die 
     // Sleepy Bar - meter keep track of sleepiness 
     
     <!-- Current State changing over time(GAME) -->
     if any of the bars hit zero, the pet dies 
    A.  Clicked buttons increase the assigned meters
    B.  Set timer to decrease each of the meters
    C.  If pet stays alive within set time age increase by 1
    D.  If pet reaches the Age of 3 pet will change and game will end or
    E.  if pet dies game is over 
    // game over pop up 
     
  */

/* Step 1 Tamagotchi Stats */
/*  user will enter name to create a pet √
     A. the pet will have default data √
     B. you can view the the default data in "bars"
     C. Bars are a visual reference to check pets state

    <!-- Tamgotchi Basic Stats  -->
    *Stats help us track Tamagotchi's current state*
     Age - defualt - 0
     Hunger - default 5
     Boredom - default 5
     Sleepiness- default 5 */

const $divEl = $('<div id="trigger" />');
const zootyMon = {
    Age: 0,
    Hunger: 5,
    Playtime: 5,
    Sleep: 5,
    /* Method to start the Game */
    start(event){
        console.warn("ZOOTYMON GO!");      
    },
    
   
}
   


$('.start').on('click',zootyMon.start);

//$('.Hunger').append()