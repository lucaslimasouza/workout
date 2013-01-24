TaskView = Backbone.View.extend({

  initialize: function(){
    this.time = $("#time");
    this.type = $("#type");
    this.date = $("#date");
    this.table = $("#task_table");
    this.types = types;
    this.gymclass = gymclass;
  },

  events: {
    "click #add_task" : "add"
  },

  add: function(){
    var type = new Type( { name: this.type.val()})
    var task = new Task({ time: this.time.val(), type: type, date: this.date.val() })
    this.gymclass.add(task);
    this.table.append(this.build_line_of_table(task));
    this.print_total_time();
  },

  print_total_time: function(){
    $("#title_total_time").show();
    $("#total_time").html(this.gymclass.time_of_tasks());
  },

  hide_total_time: function(){
    $("#title_total_time").hide();
  },

  build_line_of_table: function(task){
    var tr = "<tr><td>";
    tr += task.get("time")+"h";
    tr += "</td><td>";
    tr += task.get("type").get("name");
    tr += "</td><td>";
    tr += task.get("date");
    tr += "</td></tr>";
    return tr;
  },

  build_options_of_type: function(){
    var options = ""
    this.types.each(function(type){
        options += "<option>" +type.get("name")+"</option>";
    });
    this.type.append(options);
  }

});

var taskview = new TaskView({ el: $("#task_container") });
