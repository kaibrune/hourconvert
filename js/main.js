function timeToDecimal(t) {
    var arr = t.split(':');
    var dec = parseInt((arr[1]/6)*10, 10);
    
     return parseFloat(parseInt(arr[0], 10) + '.' + (dec<10?'0':'') + dec);
}   

console.log( timeToDecimal('05:30') ); // 0.01

function date(){

var date = new Date($( "#date_in" ).val());
date.setDate(date.getDate() + 30); // Set now + 30 days as the new date
$( "#date_out" ).val(date.toLocaleDateString("de-DE"));

};

function calc(){

    var input = $( "#input" ).val();
    var rate = $( "#rate" ).val();
    var output = timeToDecimal(input)
    var rateoutput = timeToDecimal(input)
    output = Math.round((output + Number.EPSILON) * 100) / 100
    var rateoutput2 = rateoutput*rate
    rateoutput2 = Math.round((rateoutput2 + Number.EPSILON) * 100) / 100
    rateoutput2 = rateoutput2.toString()
    rateoutput2 = rateoutput2.replace(".", ",")
    $( "#output" ).val(output)
    $( "#outputrate" ).val(rateoutput2+' €')
  };


