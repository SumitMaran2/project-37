class Contestent {
    constructor(){
      this.index = null;
      //this.distance = 0;
      this.name = null;
      this.answer = null;
    }
  
    getCount(){
      var contestentCountRef = database.ref('contestentCount');
      contestentCountRef.on("value",(data)=>{
        contestentCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestentCount: count
      });
    }
  
    update(){
      var contestentIndex = "contestent/contestent" + this.index;
      database.ref(contestentIndex).set({
        name: this.name,
        answer:this.answer
      });
    }
  
    static getcontestentInfo(){
      var contestentInfoRef = database.ref('contestent');
      contestentInfoRef.on("value",(data)=>{
        allPeople = data.val();
      })
    }






  }
  