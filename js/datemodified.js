//<script>
//based on http://www.chami.com/tips/internet/041198I.html
function date_ddmmmyy(date)
{
  var d = date.getDate();
  var m = date.getMonth() + 1;
  var y = date.getFullYear();
  var mmm =
    ( 1==m)?'January':( 2==m)?'February':(3==m)?'March':
    ( 4==m)?'April':( 5==m)?'May':(6==m)?'June':
    ( 7==m)?'July':( 8==m)?'August':(9==m)?'September':
    (10==m)?'October':(11==m)?'November':'December';
  return "" +
    (d) + " " +
    mmm + " " +
    (y);
}
function date_lastmodified()
{
  var lmd = document.lastModified;
  var s   = "Unknown";
  var d1;
  if(0 != (d1=Date.parse(lmd)))
  {
    s = "" + date_ddmmmyy(new Date(d1));
  }
  return s;
}
document.write(
  '</hr>' + "Page created by Gareth Walker. " +   
  "Last updated on " +
  date_lastmodified()+'. ' + '<a href="index.html">' + "Back to main page" +
	'</a>' +"." );
//</script>
