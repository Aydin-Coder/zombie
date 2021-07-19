var zombie = []
ready(() => {
    every(() => random(1, 5), "seconds", () => {
        var zombie = new Image({
            url: "zombie.png",
            width: 50, 
            height: 50,
        })
      
    })
})
