var request = new XMLHttpRequest(); //created request
//open connection
request.open('GET' ,'https://restcountries.eu/rest/v2/all' , true);
//sending request
request.send();
//load request
request.onload = function(){
    var data1 = JSON.parse(request.response);
    var country;
    console.log(data1);
     for(var i = 0 ; i < data1.length ; i++)
    {
        country = data1[i].name || "not defined";
        var long = +data1[i].latlng[1];
        var lat = +data1[i].latlng[0];
        //console.log(lat,long);
        if (!isNaN(lat) && !isNaN(long))
        {
            myFunction(lat,long,country); 
        }
        else
        { 
            console.log('Countries with error:')
            console.log(data1[i].name, 'Error with data');                 
        }
    } 
    console.log('Working countries:')
}
        function myFunction(lat,long,country)
        {
            var l = lat;
            var lo = long;
            var con = country;
            var req;
            var api = 'http://api.openweathermap.org/data/2.5/weather?lat=';
            var api1 = '&lon=';
            var api2 = '&appid=2a868399af6093e8e45a807d68d257ef';

            var sum = api + l + api1 + lo + api2;
            //console.log(sum);
            req = new XMLHttpRequest();

            req.open('GET', sum , true);
        
            req.send();

            req.onload = function(){
                var data = JSON.parse(req.response);
                //var tempStr = isNaN(data.main.temp)?"error":data.main.temp;
               // console.log( con,`Temperature: ${isNaN?”error”:data.main}`);
               // console.log(con , `Temperature: ${tempStr}`)
                console.log( con,`Temperature: ${data.main.temp}`);
            }
         }
