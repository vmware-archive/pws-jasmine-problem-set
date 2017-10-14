function Iteration() {
  this.points = 0;
}

Iteration.prototype.addPoints = function(points) {
  this.points += points;
};

Iteration.prototype.totalPoints = function() {
  return this.points;
}

