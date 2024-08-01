//see http://stackoverflow.com/a/41450350/7370748 
  var selectedValues = [];
  function chooseRandom(array) {
    do {
      var random = Math.floor(array.length * Math.random());
      var randomResult = array[random];
      } while (selectedValues.indexOf(randomResult) > -1)
    selectedValues.push(randomResult);
    return randomResult;
  }
  var first_group = ["[i]", "[e]", "[&#603]", "[a]"];
  var second_group = ["[&#593]", "[&#596]", "[o]", "[u]"];
  var third_group = ["[y]", "[&#248]", "[&#339]", "[&#630]", "[&#594]", "[&#652]", "[&#612]", "[&#623]"];
  var fourth_group = ["[p]", "[b]", "[t]", "[d]", "[&#648]", "[&#598]", "[c]", "[&#607]", "[k]", "[g]", "[q]", "[&#610]", "[&#660]"];
  var fifth_group = ["[m]", "[&#625]", "[&#626]", "[&#627]", "[n]", "[&#331]", "[&#628]"];
  var sixth_group = ["[&#665]", "[&#638]", "[&#640]", "[&#637]", "[r]", "[p&#700]", "[t&#700]", "[k&#700]", "[s&#700]"];
  var seventh_group = ["[&#632]", "[&#946]", "[f]", "[v]", "[&#952]",
  "[&#240]", "[s]", "[z]", "[&#643]", "[&#658]", "[&#642]", "[&#656]",
  "[&#231]", "[&#669]", "[x]", "[&#611]", "[&#967]", "[&#641]",
  "[&#295]", "[&#661]", "[h]", "[&#614]", "[&#620]", "[&#622]"];
  var eighth_group = ["[&#651]", "[&#633]", "[&#635]", "[j]", "[&#624]", "[l]", "[&#621]", "[&#654]", "[&#671]"];
  var ninth_group = ["[&#664]", "[&#448]", "[&#451]", "[&#450]", "[&#449]"];
  var tenth_group = ["[&#595]", "[&#599]", "[&#644]", "[&#608]", "[&#667]"];
  var first = chooseRandom(first_group);
  var second = chooseRandom(second_group);
  var third = chooseRandom(third_group);
  var fourth = chooseRandom(fourth_group);
  var fifth = chooseRandom(fifth_group);
  var sixth = chooseRandom(sixth_group);
  var seventh = chooseRandom(seventh_group);
  var eighth = chooseRandom(eighth_group);
  var ninth = chooseRandom(ninth_group);
  var tenth = chooseRandom(tenth_group);
  var contents = new Array()
  contents[0] = first
  contents[1] = second
  contents[2] = third
  contents[3] = fourth
  contents[4] = fifth
  contents[5] = sixth
  contents[6] = seventh
  contents[7] = eighth
  contents[8] = ninth
  contents[9] = tenth
  var spacing = "<br /><br />"
  var the_one
  var z = 0
  document.write('<ol>');	
  while (z < contents.length) {
    the_one = Math.floor (Math.random() * contents.length)
    if (contents[the_one]!="_selected!"){
    document.write('<li>' + contents[the_one] + spacing)
    contents[the_one]="_selected!"
    z++
  }
  } 
  document.write('</ol>');
