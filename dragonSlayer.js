var slaying = true;
var totalDamage = 0;
var playerHealth = 10;
var dragonHealth = 20;
var youHit = 0;
var dragonHit = 0;
var damageThisRound = 0;
var damageToPlayer = 0;
while(slaying) {
    console.log("Player Health: " + playerHealth + ", " + "Dragon Health: " + dragonHealth);
    
    youHit = Math.floor(Math.random() * 2);
    if(youHit===1) {
        damageThisRound = Math.floor(Math.random() * 5 + 1);
        console.log("You hit the nasty dragon for " + damageThisRound + " damage!");
        dragonHealth -= damageThisRound;
        if(dragonHealth <= 0) {
            console.log("You have slain the dragon");
            slaying = false;
            } 
        else {
            console.log("You swing at the dragon again!");
            }
        } 
    else {
        console.log("You Miss");
        dragonHit = Math.floor(Math.random() * 2);
        if(dragonHit===1) {
            damageToPlayer = Math.floor(Math.random() * 5 + 1);
            console.log("The dragon hits you for " + damageToPlayer + " damage!");
            playerHealth -= damageToPlayer;
            if(playerHealth <= 0) {
                console.log("You have been slain!");
                slaying = false;
                }
            } 
        else {
            console.log("The dragon misses.");
        }
    }
    
}