GymClass = Backbone.Collection.extend({
  model: Task
});

var task = new Task({ time: "1h", type: "corrida", date: "22/01/2013"});
var gymclass =  new GymClass([task]);
console.log(gymclass.models);
