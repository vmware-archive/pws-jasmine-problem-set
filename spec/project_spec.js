describe("Project", function() {

  var project, iteration1, iteration2, iteration3;

  beforeEach(function() {
    project = new Project();
    iteration1 = new Iteration();
    iteration1.addPoints(10);

    iteration2 = new Iteration();
    iteration2.addPoints(20);

    iteration3 = new Iteration();
    iteration3.addPoints(6);
  });

  it("can calculate velocity (the average number of points completed) for a set of iterations", function() {
    project.addIteration(iteration1);
    expect(project.velocity()).toEqual(10);

    project.addIteration(iteration2);
    expect(project.velocity()).toEqual(15);

    project.addIteration(iteration3);
    expect(project.velocity()).toEqual(12);
  });

  it("if there are more than 3 iterations, only uses the last 3 to calculate velocity", function() {
    var iteration4 = new Iteration();
    iteration4.addPoints(22);

    project.addIteration(iteration1);
    project.addIteration(iteration2);
    project.addIteration(iteration3);
    expect(project.velocity()).toEqual(12);
    project.addIteration(iteration4);
    expect(project.velocity()).toEqual(16);
  });


});
