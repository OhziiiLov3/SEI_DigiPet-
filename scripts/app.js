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

    <!-- Progress Bar Count down  -->
    A. create progress bar for each stat (not age)
    B. set timer for progress bars 
    C. move on to enbale buttons 
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
     D. Enter name to start game√
     E. Have a transition from welcome page to game √


    <!-- Tamgotchi Basic Stats  -->
    *Stats help us track Tamagotchi's current state*
     Age - defualt - 0
     Hunger - default 5
     Boredom - default 5
     Sleepiness- default 5 */

const zootyMon = {
    Age: 0,
    Hunger: 10,
    Playtime: 10,
    Sleep: 10,
    isFeeding: false,

    /* Method to start the Game */
    start(event){
        console.warn("ZOOTYMON GO!");
        $('.firstpage').hide();
        zootyMon.progressbar();
        const $name = $('input').val();
        $('.nameInput').text($name);
    },
    /*  Step 2 Progress bar Count down */
    // < !--Progress Bar Count down  -->
   // A.create progress bar for each stat(not age)√
   // B.set timer for progress bars √
    //C.move on to enbale buttons
    progressbar(){
       setInterval(function(){
           if (zootyMon.isFeeding)zootyMon.Hunger--; 
           else 
            zootyMon.Hunger++;
           if (zootyMon.Hunger <= 0) zootyMon.Hunger =0;
           console.log(zootyMon.Hunger);
           $('#feedProgBar').attr("value", zootyMon.Hunger* 10);
           $('#playProgBar').attr("value", zootyMon.Playtime* 10);
           $('#napProgBar').attr("value", zootyMon.Sleep* 10);
       // if(this.Hunger <= 0){
       // clearInterval(clear);
       // }
       },1000);
        
    }
    /* Step 3
  <-- Feed Pet -->
    user can feed pet by clicking button
    A. When user clicks feed button it will increase the hunger meter
    B. if not clicked within the set time (we will set a timer) hunger bar increase √
    C. Hunger meter tells us if our pet is dead or alive
   // Hunger meter- meter to keep track of hungry
    */
   
}

  
   
$('#feed').on('click',function(){zootyMon.isFeeding = !zootyMon.isFeeding});
$('.nes-btn').on('click',zootyMon.start);

