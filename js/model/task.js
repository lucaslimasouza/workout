Task = Backbone.Model.extend({

    initialize: function(){
      alert("cons");
    this.bind("error", function(model, error){
      alert( error );
    })
  },

    validate: function( attributes){
    alert("validadte");
    if(attributes.time == " " || attributes.type == " "
      || attributes.date == " "){
        return "Favor preencher todos os campos!"
    }
  }

});

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

var gymclass = new GymClass;
