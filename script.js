var Player = []
var Zombie = []
ready(() => {
  var Player = new Image({
    url: "Player.png",
    width: 240,
    height: 80,
  })
  every(() => random(2, 3), "seconds", () => {
    var Zombie = new Image({
      url: "zombie.png",
      width: 80, 
      height: 80,
    })
 })
