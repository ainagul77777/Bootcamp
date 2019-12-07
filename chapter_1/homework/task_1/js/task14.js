function subsetString(dog) {
    var subsetArr = [];
  
    for (var i = 0; i < dog.length; i++) {
      for (var j = i + 1; j < dog.length + 1; j++) {
        subsetArr.push(dog.slice(i,j))
      }
    }
  
    return subsetArr;
  }
  
  console.log(subsetString('dog'));