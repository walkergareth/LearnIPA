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
var firstc = ["b", "d", "&#598", "&#607", "g", "&#610"];
var secondc = ["p", "t", "&#648", "c", "k", "q", "&#660"];
var thirdc = ["m", "&#625", "n", "&#627", "&#626", "&#331", "&#628"];
var fourthc = ["&#665", "r", "&#640"];
var fifthc = ["&#638", "&#637"];
var sixthc = ["&#632", "f", "&#952", "s", "&#643", "&#642", "&#231",
	      "x", "&#967", "&#295", "h", "&#620"];
var seventhc = ["&#946", "v", "&#240", "z", "&#658", "&#656", "&#669",
		"&#611", "&#641", "&#661", "&#614", "&#622"];
var eighthc = ["&#651", "&#633", "&#635", "j", "&#624"];
var ninthc = ["l", "&#621", "&#654", "&#671"];
var tenthc = ["&#664", "&#448", "&#451", "&#450", "&#449"];
var eleventhc = ["&#595", "&#599", "&#644", "&#608", "&#667"];
var twelfthc = ["p&#700", "t&#700", "k&#700", "s&#700"];
var thirteenthc = ["p", "b", "t", "d", "m", "&#625", "n", "&#665",
		   "r", "&#638", "&#632", "&#946", "f", "v", "&#952",
		   "&#240", "s", "z", "&#643", "&#658", "&#620",
		   "&#622", "&#651", "&#633", "l", "&#664", "&#448",
		   "&#451", "&#450", "&#449", "&#595", "&#599",
		   "p&#700", "t&#700", "s&#700"];
var fourteenthc = ["&#648", "&#598", "c", "&#607", "k", "g", "q",
		   "&#610", "&#627", "&#626", "&#331", "&#628",
		   "&#640", "&#637", "&#642", "&#656", "&#231",
		   "&#669", "x", "&#611", "&#967", "&#641", "&#295",
		   "&#661", "&#635", "j", "&#624", "&#621", "&#654",
		   "&#671", "&#644", "&#608", "&#667", "k&#700"];
var consonants = [chooseRandom(firstc),
		  chooseRandom(secondc),
		  chooseRandom(thirdc),
		  chooseRandom(fourthc),
		  chooseRandom(fifthc),
		  chooseRandom(sixthc),
		  chooseRandom(seventhc),
		  chooseRandom(eighthc),
		  chooseRandom(ninthc),
		  chooseRandom(tenthc),
		  chooseRandom(eleventhc),
		  chooseRandom(twelfthc),
		  chooseRandom(thirteenthc),
		  chooseRandom(fourteenthc)];
var selectedValuesC = [];
function chooseRandomC(array) {
    do {
        var randomC = Math.floor(array.length * Math.random());
        var randomResultC = array[randomC];
    } while (selectedValuesC.indexOf(randomResultC) > -1)
    selectedValuesC.push(randomResultC);
    return randomResultC;
};
var con1 = [chooseRandomC(consonants)];
var con2 = [chooseRandomC(consonants)];
var con3 = [chooseRandomC(consonants)];
var con4 = [chooseRandomC(consonants)];
var con5 = [chooseRandomC(consonants)];
var con6 = [chooseRandomC(consonants)];
var con7 = [chooseRandomC(consonants)];
var con8 = [chooseRandomC(consonants)];
var con9 = [chooseRandomC(consonants)];
var con10 = [chooseRandomC(consonants)];
var con11 = [chooseRandomC(consonants)];
var con12 = [chooseRandomC(consonants)];
var con13 = [chooseRandomC(consonants)];
var con14 = [chooseRandomC(consonants)];

var firstv = ["i", "e", "&#603", "a"];
var secondv = ["&#593", "&#596", "o", "u"];
var thirdv = ["i", "e", "o", "u"];
var fourthv = ["&#603", "a", "&#593", "&#596"];
var fifthv = ["y", "&#248", "&#339", "&#630"];
var sixthv = ["&#594", "&#652", "&#612", "&#623"];
var vowels = [chooseRandom(firstv),
	      chooseRandom(secondv),
	      chooseRandom(thirdv),
	      chooseRandom(fourthv),
	      chooseRandom(fifthv),
	      chooseRandom(sixthv)];
var selectedValuesV = [];
function chooseRandomV(array) {
    do {
        var randomV = Math.floor(array.length * Math.random());
        var randomResultV = array[randomV];
    } while (selectedValuesV.indexOf(randomResultV) > -1)
    selectedValuesV.push(randomResultV);
    return randomResultV;
}
var vow1 = [chooseRandomV(vowels)];
var vow2 = [chooseRandomV(vowels)];
var vow3 = [chooseRandomV(vowels)];
var vow4 = [chooseRandomV(vowels)];
var vow5 = [chooseRandomV(vowels)];
var vow6 = [chooseRandomV(vowels)];

document.write('<table style=' + "width:50%" + '>'
	       + '<tr>' + '<td>' + "1." + '</td>' + '<td>' + "i. [" +
	       con1 + "]" + '</td>' + '<td>' + "ii. [" + con2 + "]" +
	       '</td>' + '<td>' + "iii. [" + con3 + "]" + '</td>' +
	       '<td>' + "iv. [" + con4 + "]" + '</td>' + '</td>' +
	       '</tr>' + '<tr>' + '<td>' + "2." + '</td>' + '<td>' +
	       "i. [" + vow1 + "]" + '</td>' + '<td>' + "ii. [" + vow2
	       + "]" + '</td>' + '<td>' + "iii. [" + vow3 + "]" +
	       '</td>' + '<td>' + "iv. [" + vow4 + "]" + '</td>' +
	       '</td>' + '<tr>' + '<td>' + "3." + '</td>' + '<td>' +
	       "i. [" + con5 + " " + con6 + "]" + '</td>' + '<td>' +
	       "ii. [" + con7 + " " + con8 + "]" + '</td>' + '<td>' +
	       "iii. [" + con9 + " " + con10 + "]" + '</td>' + '<td>'
	       + '</tr>' + '<tr>' + '<td>' + "4." + '</td>' + '<td>' +
	       "i. [" + con11 + vow5 + con12 + "]" + '</td>' + '<td>'
	       + "ii. [" + con13 + vow6 + con14 + "]" + '</td>' +
	       '<td>' + '</tr>' + '</table>' + '<br>')
