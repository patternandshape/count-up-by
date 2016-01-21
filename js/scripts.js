var countUpBy = function(countBy,max){
  var countArray = [];
  for (var i = 1; (i * countBy) <= max; i++) {
    countArray.push(countBy * i);
  }
  return countArray;
}
