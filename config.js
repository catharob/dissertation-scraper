exports.config = {
	mysql: {
		user: "root",
		pass: "root",
		db: "jrnscrape",
		host: "localhost",
		port: 3306
	},

	app: {
		port: 9000,
		//home: "/admin/valedictorians/",
		home: "/",
		logging: true
	}
};