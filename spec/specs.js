describe ("countUpBy", function() {
  // it("will take 2 inputs and assign them to variables", function(){
  //   expect(countUpBy(4,20)).to.eql([20,4]);
  // });

  it("will return an array of increments of a counting number, up to a designated maximum", function () {
    expect(countUpBy(4,20)).to.eql([4,8,12,16,20]);
  });
});
