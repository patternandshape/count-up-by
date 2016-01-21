var countUpBy = function(countBy,max){
  var countArray = [];
  for (var i = 1; (i * countBy) <= max; i++) {
    countArray.push(countBy * i);
  }
  return countArray;
}
// END BUSINESS LOGIC


$(document).ready(function() {
  $("form#countForm").submit(function(event) {
    event.preventDefault();
    var countBy = parseInt($("#countFactor").val());
    var countMax = parseInt($("#countMax").val());
    var resultArray = countUpBy(countBy,countMax);
    var result = resultArray.toString();
    var newResult = result.replace(/,/g, ', ');
    $(".output").text(newResult);


  });
});
