var person = new Backbone.Model({
  id: 101,
  firstName: "Martin",
  lastName: "Drapeau"
});

var fields = [{
    name: "id", // The key of the model attribute
    label: "ID", // The label to display next to the control
    control: "input", // This will be converted to InputControl and instantiated from the proper class under the Backform namespace
    disabled: true // By default controls are editable. Here we disabled it.
  }, {
    name: "firstName",
    label: "First name",
    control: "input"
  }, {
    name: "lastName",
    label: "Last name",
    control: "input",
    extraClasses: ["fancy"],
    helpMessage: "Be creative!"
  }, {
    control: "button",
    label: "Save to server"
  }];

var form = new Backform.Form({
  el: $("#form"),
  model: person,
  fields: fields, // Will get converted to a collection of Backbone.Field models
  events: {
    "submit": function(e) {
      e.preventDefault();
      this.model.save()
        .done(function(result) {
          alert("Successful!");
        })
        .fail(function(error) {
          alert(error);
        });
      return false;
    }
  }
});
form.render(); // Backform.*Control views are created for each field and rendered on screen
