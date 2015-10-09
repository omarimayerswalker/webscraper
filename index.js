// requiring modules; url variable
var request = require('request'),
    cheerio = require('cheerio'),
    url = "http://www.wunderground.com/cgi-bin/findweather/getForecast?&query=" + 21202;

// downloading url via request module function
request(url, function(error, response, body) {
    if (!error) {
        var $ = cheerio.load(body),
            // select the elements to scrape
            temperature = $("[data-variable='temperature'] .wx-value").html();
        console.log("It's " + temperature + " degrees Fahrenheit.");
    } else {
        console.log("We've encountered an error: " + error);
    }
});
