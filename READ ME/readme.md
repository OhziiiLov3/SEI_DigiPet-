<!-- Project Zero Objectives -->
    -Build a tamagotchi aka ZootyMon 
    - The objective of the game is to click the buttons to keep the tamagotchi alive. Your pet can be feed, play, and sleep. If any of the meters hits empty or full your Zootymon dies :(
    - Keep your pet alive years for surprise ! 

<!-- User Stories/Game Logic -->
   
<!-- User Action: User can click on a feed button, when clicked the feed bar increases and decreases at a set time  -->

<!-- User Action: User can click on Play button, when clicked the Playtime bar and it will also increase and decrease  -->

<!-- User Action: User clicks Naptime button, when clicked the bar will increase and decrease  -->

<!-- User Action: If any of the bars reach empty or they are filled the game is over and you lose  -->

<!-- User Action: Your Zootymons Age will increase after you feed you Zootymon for a period of time -->

<!--User: if your pets age reaches 101, you win!   -->

<!-- User: if your Zootymon disappears gameover -->

Specifications
Create a repo for your tomagotchi pet √
make a commit after you finish each one of the following √
Instatiate your Tomagotchi √
Display a character of your choice on the screen to represent your pet √
Display the following metrics for your pet: 
Hunger (1-10 scale) √
Sleepiness (1-10 scale) √
Boredom (1-10 scale) √
Age √
Add buttons to the screen to feed your pet, turn off the lights, and play with your pet. √
Add the ability to name your pet. √
Style the page. √
Increase your pet's age every x minutes √
Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing. √
You pet should die if Hunger, Boredom, or Sleepiness hits 10. √
Morph your pet at certain ages. √
Animate your pet across the screen while it's alive. n/a 

![Screen Shot 2021-04-09 at 9 40 08 AM](https://media.git.generalassemb.ly/user/35030/files/97805680-9917-11eb-8814-447695e52add)
![Screen Shot 2021-04-09 at 9 41 17 AM](https://media.git.generalassemb.ly/user/35030/files/c5fe3180-9917-11eb-8e65-380f2d4b7bf4)
![Screen Shot 2021-04-09 at 9 42 02 AM](https://media.git.generalassemb.ly/user/35030/files/de6e4c00-9917-11eb-8b1c-5ce9ab63ffa6)

<--   ==MVP ===  -->
     - Tamagotchi has data -
     user will enter name to create a pet
     A. the pet will have default data
     B. you can view the the default data in "bars"
     C. Bars are a visual reference to check pets state
 Tamgotchi Basic Stats  
    Stats help us track Tamagotchi's current state*
     Age - defualt - 0
     Hunger - default 5
     Boredom - default 5
     Sleepiness- default 5

Progress Bar Count down 
    A. create progress bar for each stat (not age)
    B. set timer for progress bars 
    C. move on to enbale buttons 
 Feed Pet 
    user can feed pet by clicking button
    A. When user clicks feed button it will increase the hunger meter 
     B. if not clicked within the set time (we will set a timer) hunger bar decreases
     C. Hunger meter tells us if our pet is dead or alive
    // Hunger meter- meter to keep track of hungry 

Play with Pet 
     user can play with pet by clicking button
     A.when user clicks button, we can play with pet increase boredom meter 
     B. if not clicked boredom meter decreases 
     C. if bar reaches zero pet dies 
     // Boredom Bar- meter to keep track of boredom

Naptime 
     user can play with pet when clicking button
     A. when clicked we can make our pet rest 
     B. if not clicked sleep meter 
     C. if sleep meter reaches zer pet will die 
     // Sleepy Bar - meter keep track of sleepiness 
     
 Current State changing over time(GAME) 
     if any of the bars hit zero, the pet dies 
    A.  Clicked buttons increase the assigned meters
    B.  Set timer to decrease each of the meters
    C.  If pet stays alive within set time age increase by 1
    D.  If pet reaches the Age of 3 pet will change and game will end or
    E.  if pet dies game is over 
    // game over pop up 

     Click here to Play
 https://pages.git.generalassemb.ly/kbaskerville/ZootyMon/