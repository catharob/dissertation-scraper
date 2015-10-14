/*
* CUNY Dissertations Scraper
* Author: Catherine Roberts
* 24 September, 2015
*/


var cheerio = require("cheerio"),
	request = require("request"),
	sequelize = require("sequelize"),
	config = require("./config.js").config,
	async = require("async"),

	//connect to the DB
	db = new sequelize(config.mysql.db, config.mysql.user, config.mysql.pass, {host: config.mysql.host, port: config.mysql.port, logging: true}),
	cuny_dissertations = db.import(__dirname + "/./cuny_dissertations.js");

var url = "http://www.gc.cuny.edu/GC-Header/Alumni/Alumni-Dissertations-and-Theses.aspx?sortby=author&page=";

for(var i = 1; i <= 298; i++){
	request(url + i, function(err, response, body){
		if(err) throw err;

		$ = cheerio.load(body);

		$(".vevent").each(function(){
			var name = $(this).find(".line").eq(0).find(".lastUnit").text(),
				title = $(this).find(".summary").text(),
				year = $(this).find(".line").eq(1).find(".lastUnit").text(),
				program = $(this).find(".line").eq(2).find(".lastUnit").text(),
				adviser = $(this).find(".line").eq(3).find(".lastUnit").text(),
				description = $(this).find("p").text(),
				data = {
					name: name,
					title: title,
					year: year,
					program: program,
					adviser: adviser,
					description: description
				};
			
			cuny_dissertations.findOrCreate({where: {name: name, title: title, year: year, program: program, adviser: adviser, description: description}, defaults: data});
		});

	});	
}
