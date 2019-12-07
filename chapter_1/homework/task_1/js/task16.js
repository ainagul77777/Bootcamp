var arr = [1,95,3,4,5,6,0,0]
var arrow1 = arr.filter(function(item){
    return item ===0
})

var arrow2 = arr.filter(function(item){
    return item !==0
    
})

  var result = arrow1.concat(arrow2);
  console.log(result)