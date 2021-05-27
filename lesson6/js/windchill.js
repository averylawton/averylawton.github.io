

// f=35.74+0.6215t−35.75s0.16+0.4275ts0.16 //

// f = 35.74 + 0.6215t - 35.75s^0.16 + 0.4275ts^0.16 //

//var temp= getElementById();
//var wSpeed= 15;
//var windChill= (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));

//var windChill= Math.round(windChill);
//document.getElementById("windChill").innerHTML= windChill;

/* Input: Windspeed and temperature
* Processing: doInputOutput takes the values and calls windChill
*which runs them through the problem and returns the windChill
 * Output: windChill
 */

function windChill(tempF, speed){



    //f = 35.74 + 0.6215 t - 35.75 s0.16 + 0.4275 t s0.16
    
    return (35.74 + (.6215*tempF))-(35.75*(Math.pow(speed,.16))) + (.4275*(tempF*(Math.pow(speed,.16))));
    
    
    }
    
        function doInputOutput(){
    let temp = parseInt(document.getElementById('averagetemp').value);
    let wind = parseInt(document.getElementById('windSpeed').value);
    
    document.getElementById('windChill').innerHTML =
              windChill(temp, wind);
    
        }