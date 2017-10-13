function Project() {
  var this.value, this.counter;
  array this.totalIteration [] = new array [3];
}

Project.prototype.addIteration = function(iteration) {
    this.iteration[this.counter]= iteration;
    this.totalIteration += this.iteration[this.counter];
  
  if(this.counter == 3){
    this.totalIteration -= this.iteration[0];
    this.iteration[0] = this.iteration[1];
    this.iteration[1] = this.iteration[2];
    --this.counter;
  }
}
  
Project.prototype.velocity = function() {
  this.value = Iteration.prototype.totalPoints();
  return this.value/(++this.counter);
}


