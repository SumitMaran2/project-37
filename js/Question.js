class Question {
    constructor(){
        this.title = createElement("h2");
        this.question = createElement("h2");
        this.option1 = createElement("h2");
        this.option2 = createElement("h2");
        this.option3 = createElement("h2");
        this.option4 = createElement("h2");
        this.button = createButton("Submit");
        this.input1 = createInput("Enter your name!");
        this.input2 = createInput("Type your answer!");
        this.yeet = createElement("h2");
        this.correct = createElement("h2")
    }

    hide(){
        this.title.hide();
        this.question.hide();
        //this.option1.hide();
        //this.option2.hide();
        //this.option3.hide();
        //this.option4.hide();
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
    }


    display(){
    this.title.html("Pro Gamer Question");
    this.title.position(350,0);

    this.question.html("What starts and ends with the letter e- BUT only has one letter?");
    this.question.position(100,30);
    this.option1.html("1: Everyone");
    this.option1.position(150,60);
    this.option2.html("2: Envelope");
    this.option2.position(150,100);
    this.option3.html("3: Example");
    this.option3.position(150,140);
    this.option4.html("4: Estimate");
    this.option4.position(150,180);
    this.input1.position(140,240);
    this.input2.position(340,240)
    this.button.position(300, 300);
    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      contestent.answer = this.input2.value();
      contestent.name = this.input1.value();
      contestentCount+=1;
      contestent.index = contestentCount;
      contestent.update();
      contestent.updateCount(contestentCount);
      this.yeet.html("Your choice: " + contestent.answer)
      this.yeet.position(230, 300);
      if(contestent.answer==="2"){
        //fill("green");
        this.correct.html("CORRECT!!!");
        this.correct.position(300,330);
      }
      else{
        //fill("red");
        this.correct.html("WRONG!!!");
        this.correct.position(300,330);
      }
    });




}


}