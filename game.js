class Game{
    constructor(){}
    instructions(){
        if (gameState==='instructions') {
            bg1=loadImage('../images/bg1.png')
            background(bg1)
image(bg1,645,350,1290,700)
            this.heading=createElement("h1")
            this.heading.html("Endless Runner")
            this.heading.position(550,10)
            this.input=createInput('')
            this.input.position(550,90)
            this.name=createElement("h4")
            this.name.html('name:')
            this.name.position(500,70)
         // text("space to jump",550,100)
         button=createButton('Start')
 button.position(550,600)
          this.intro=createElement("h4")
          this.intro.html("instructions:space to jump")
          this.intro.position(50,250)
         

        }
    }
    Run(){
        if(gameState==='play'){
          

this.heading.hide()
this.input.hide()
this.intro.hide()
button.hide()
this.name.hide()

var name=createButton(this.input.value())
name.position(1200,6)

        }    

    }
    
}
