Type = Backbone.Model.extend({

});


Types = Backbone.Collection.extend({
  model: Type,
});

bike = new Type({ name: "Bicicleta" });
corrida = new Type( {name: "Corrida"});
swiming = new Type( {name: "Natação"});
var types =  new Types([bike, corrida, swiming]);
