// var/ if (){}
// and = &&
// list [] choose the index of array
// Q1
// var main = function (userinput){
//   var list = ["scissors","paper","stone"]
//   if (userinput == "scissors" || userinput == "paper" || userinput == "stone"){}
//     else {return "invalid, write a correct input"} 
//   //!=
//   var randomChoose = list[Math.floor(Math.random()*3)]
//   if (userinput == randomChoose){
//   return `user input is ${userinput} and program input is ${randomChoose}, so this is a draw.`
//   }
  
//    // userwon
//   if (userinput == "scissors" && randomChoose == "paper"){
//   return `user input is ${userinput} and program input is ${randomChoose}, so user won.`
//   }
//   if (userinput == "paper" && randomChoose == "stone"){
//   return `user input is ${userinput} and program input is ${randomChoose}, so user won.`
//   }
//   if (userinput == "stone" && randomChoose == "scissors"){
//   return `user input is ${userinput} and program input is ${randomChoose}, so user won.`
//   }
//   // programwon
//   if (randomChoose == "scissors" && userinput == "paper"){
//   return `user input is ${userinput} and program input is ${randomChoose}, so program won.`
//   }
//   if (randomChoose == "paper" && userinput == "stone"){
//   return `user input is ${userinput} and program input is ${randomChoose}, so program won.`
//   }
//   if (randomChoose == "stone" && userinput == "scissors"){
//   return `user input is ${userinput} and program input is ${randomChoose}, so program won.`
//   }
//   }

  //Q2
  // 
  // programwin = 0 
  // var userwin = userwin +=1 
  // var program win = programwin +=1

  // var & let = same
  var userwin = 0
  var programwin = 0
  var draw = 0
  // console.log(totalRounds)
  // console.log(userwin)
  // console.log(programwin)

  // when browser refreshes, page will ask you to input username
  // input username 
  // prompt username to start playing game by entering one of the 3 objects.
  var name = prompt ("Please enter your name","username");
  alert(`Hi ${name}, please start playing Scissors-Paper-Stone game by entering 1 of 3 objects.`);

  // personalise win-loss record and other relevant output

  var totalRounds = userwin + programwin + draw

  var stats= function(){
  var userwinstats = (userwin/totalRounds)*100
  var programwinstats = (programwin/totalRounds)*100
  var drawstats = (draw/totalRounds)*100
  return `${name} won ${userwinstats.toFixed(1)}%, program won ${programwinstats.toFixed(1)}%, there is a draw of ${drawstats.toFixed(1)}%`;
  }
  
  var main = function (userinput){
    var list = ["scissors","paper","stone"];
    if (userinput == "scissors" || userinput == "paper" || userinput == "stone"){}
      else {return "invalid, write a correct input"} 
    //!= &&
    var randomChoose = list[Math.floor(Math.random()*3)];
    if (userinput == randomChoose){
      draw += 1
      totalRounds += 1
    return `${name}'s input is ${userinput} and program's input is ${randomChoose}.<br><br> ${stats()}.`;}
    
     // userwon
    if (userinput == "scissors" && randomChoose == "paper"){
      userwin += 1
      totalRounds += 1
    return `${name}'s input is ${userinput} and program's input is ${randomChoose}.<br><br> ${stats()}.`;}

    if (userinput == "paper" && randomChoose == "stone"){
      userwin += 1
      totalRounds += 1
    return `${name}'s input is ${userinput} and program's input is ${randomChoose}.<br><br> ${stats()}.`;}

    if (userinput == "stone" && randomChoose == "scissors"){
      userwin += 1
      totalRounds += 1
    return `${name}'s input is ${userinput} and program's input is ${randomChoose}.<br><br> ${stats()}.`;}
   
    // programwon
    if (randomChoose == "scissors" && userinput == "paper"){
      programwin += 1
      totalRounds += 1
    return `${name}'s input is ${userinput} and program's input is ${randomChoose}.<br><br> ${stats()}.`;}
    
    if (randomChoose == "paper" && userinput == "stone"){
      programwin += 1
      totalRounds += 1
    return `${name}'s input is ${userinput} and program's input is ${randomChoose}.<br><br> ${stats()}.`;}
    
    if (randomChoose == "stone" && userinput == "scissors"){
      programwin += 1
      totalRounds += 1
    return `${name}'s input is ${userinput} and program's input is ${randomChoose}.<br><br> ${stats()}.`;}
    }