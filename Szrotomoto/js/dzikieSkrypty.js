// * Skrypt na wyswieltanie daty
var select = document.getElementById("data");
var today = new Date();

for (var i = 0; i < 15; i++) {
  var date = new Date();
  date.setDate(today.getDate() + i + 7);

  var option = document.createElement("option");
  option.value = date.toISOString().split("T")[0];
  option.text = date.toLocaleDateString();

  select.add(option);
}
