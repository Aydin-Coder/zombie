var Zombie = []
ready(() => {
  
  every(() => random(2, 3), "seconds", () => {
    var Zombie = new Image({
      url: "zombie.png",
      width: 80, 
      height: 80,
    })
 })
})
