GymClass = Backbone.Collection.extend({
  model: Task,

  time_of_tasks:  function(){
    total_time = 0;
    this.each(function(task){
        total_time += parseInt(task.get("time"));
    });
    return total_time;
  }

});


