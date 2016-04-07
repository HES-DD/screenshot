var page = require('webpage').create();


page.addCookie({
  'name': 'k28_cookielayer',
  'value': '1',
  'domain': '.hirmer.de'
});

page.addCookie({
  'name': 'newsletterlayer',
  'value': '1',
  'domain': '.hirmer.de'
});

page.addCookie({
  'name': 'eck_cookielayer',
  'value': '1',
  'domain': '.eckerle.de'
});

page.addCookie({
  'name': 'newsletterlayer',
  'value': '1',
  'domain': '.eckerle.de'
});

page.addCookie({
  'name': 'hgg_cookielayer',
  'value': '1',
  'domain': '.hirmer-grosse-groessen.de'
});

page.addCookie({
  'name': 'newsletterlayer',
  'value': '1',
  'domain': '.hirmer-grosse-groessen.de'
});

page.addCookie({
  'name': 'callservicecookie',
  'value': '1',
  'domain': '.hirmer-grosse-groessen.de'
});


var w1 = 1920;
var h1 = 1080;

var w2 = 1280;
var h2 = 720;

var w3 = 640;
var h3 = 360;

capture("http://www.eckerle.de", "eck", function() {

	capture("http://www.hirmer.de", "k28", function() {
	
		capture("http://www.hirmer-grosse-groessen.de", "hgg", function() {

			phantom.exit();

		});

	});
});


function capture(url, short, callback)  {

	var dateObj = new Date();
	var day = dateObj.getDate();
	var month = dateObj.getMonth() + 1; //months from 1-12
	var year = dateObj.getFullYear();

	if(month<10)  { month = '0' + month; } 
	if(day<10)  { day = '0' + day; } 

	var d = year + "-" + month + "-" + day;



	page.viewportSize = { width: w1, height: h1 };
	page.open(url, function(status) {
		page.render( "shots/" + short + '_l_' + d +'.png');
	
		page.viewportSize = { width: w2, height: h2 };
		page.open(url, function(status) {
			page.render( "shots/" + short + '_m_' + d +'.png');

			page.viewportSize = { width: w3, height: h3 };
			page.open(url, function(status) {
				page.render( "shots/" + short + '_s_' + d + '.png');

				  callback();
			});
		});
	});

}


