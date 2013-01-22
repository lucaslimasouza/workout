TaskView = Backbone.View.extend({

  initialize: function(){
    this.time = $("#time");
    this.type = $("#type");
    this.date = $("#date");
    this.table = $("#task_table");
    this.gymclass = new GymClass();
  },

  events: {
    "click #add_task" : "add"
  },

  add: function(){
    var task = new Task({ time: this.time.val(), type: this.type.val(), date: this.date.val() })
    this.gymclass.add(task);
    this.table.append(this.build_line_of_table(task));
  },

  build_line_of_table: function(task){
    var tr = "<tr><td>";
    tr += task.get("time");
    tr += "</td><td>";
    tr += task.get("type");
    tr += "</td><td>";
    tr += task.get("date");
    tr += "</td></tr>";
    return tr;
  }


});

var taskview = new TaskView({ el: $("#task_container") });

