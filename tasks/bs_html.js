const bs = require('browser-sync');

module.exports = function bs_html() {
	bs.init({
		server: {
			baseDir: 'build/',
			proxy: '192.168.0.104',
			host: '192.168.0.104',
			port: 3000,
		},
		callbacks: {
			ready: function (err, bs) {
				bs.addMiddleware("*", function (req, res) {
					res.writeHead(302, {
						location: "404.html"
					});
					res.end("Redirecting!");
				});
			}
		},
		browser: 'chrome',
		logPrefix: 'BS-HTML:',
		logLevel: 'info',
		logConnections: true,
		logFileChanges: true,
		open: true
	})
}