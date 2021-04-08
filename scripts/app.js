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
    Hunger: 25,
    Playtime: 50,
    Sleep: 70,
    isFeeding: false,
    isPlaytime: false,
    isSleep: false,

    /* Method to start the Game */
    start(event){
        console.warn("ZOOTYMON GO!");
        $('.firstpage').hide();
        zootyMon.progressbar();
        const $name = $('input').val();
        $('.nameInput').text($name);
        $('.dino2').hide();
        zootyMon.increaseAge();
        zootyMon.morph();
    },
   /* Step 3
  <-- Game  -->
    user can feed,play,or nap with toggle by clicking button
    A. If the value of the the progress bar reaches 0 or 100 game will end 
    B. 
    
    */
    Game() {
        if ($('#feedProgBar').attr("value") == 0) {
            $('.dino').hide();
            $('.nes-balloon').css("display", "initial");
            $('.Gameover').css("display", "initial");
        } else if ($('#feedProgBar').attr("value") == 100){
            $('.dino').hide();
            $('.nes-balloon').css("display", "initial");
            $('.Gameover').css("display", "initial");
        }
        if ($('#playProgBar').attr("value") == 0) {
            $('.dino').hide();
            $('.nes-balloon').css("display", "initial");
            $('.Gameover').css("display", "initial");
        } else if ($('#playProgBar').attr("value") == 100) {
            $('.dino').hide();
            $('.nes-balloon').css("display", "initial");
            $('.Gameover').css("display", "initial");
        }
        if ($('#napProgBar').attr("value") == 0) {
            $('.dino').hide();
            $('.nes-balloon').css("display", "initial");
            $('.Gameover').css("display", "initial");
        } else if ($('#napProgBar').attr("value") == 100) {
            $('.dino').hide();
            $('.nes-balloon').css("display", "initial");
            $('.Gameover').css("display", "initial");
        }
        

    },

    /*  Step 2 Progress bar Count down */
    // < !--Progress Bar Count down  -->
   // A.create progress bar for each stat(not age)√
   // B.set timer for progress bars √
    //C.add click function to add and subtract progress bar with Booleans
    
     
 
    progressbar(){
       setInterval(function(){
           if (zootyMon.isFeeding)zootyMon.Hunger--; 
           else 
            zootyMon.Hunger++;
           if (zootyMon.Hunger <= 0) zootyMon.Hunger =0;
           if (zootyMon.Hunger >= 100) zootyMon.Hunger =100;
           console.log(zootyMon.Hunger);
           if (zootyMon.isPlaytime)zootyMon.Playtime--; 
           else 
            zootyMon.Playtime++;
           if (zootyMon.Playtime <= 0) zootyMon.Playtime =0;
           if (zootyMon.Playtime >= 100) zootyMon.Playtime =100;
           console.log(zootyMon.Hunger);
           if (zootyMon.isSleep)zootyMon.Sleep--; 
           else 
            zootyMon.Sleep++;
           if (zootyMon.Sleep <= 0) zootyMon.Sleep =0;
           if (zootyMon.Sleep >= 100) zootyMon.Sleep =100;
           console.log(zootyMon.Sleep);
           $('#feedProgBar').attr("value", zootyMon.Hunger);
           $('#playProgBar').attr("value", zootyMon.Playtime);
           $('#napProgBar').attr("value", zootyMon.Sleep);
           zootyMon.Game();
       },1000);
        
    },
    /* Step 4 Age */
    increaseAge(){
        setInterval(function(){
            if(zootyMon.Hunger >= 50)zootyMon.Age++;
            $('.Age').text(`Age: ${zootyMon.Age}`);
        },1000);
    },
    morph(){
      setInterval(function(){
          if(zootyMon.Playtime >=90){
            $('.dino2').show();
            $('.dino').hide();
          }
          
     },1000);  
    }
 
}

  
 
$('#play').on('click',function(){zootyMon.isPlaytime = !zootyMon.isPlaytime});
$('#nap').on('click',function(){zootyMon.isSleep = !zootyMon.isSleep});
$('#feed').on('click',function(){zootyMon.isFeeding = !zootyMon.isFeeding});
$('.nes-btn').on('click',zootyMon.start);

