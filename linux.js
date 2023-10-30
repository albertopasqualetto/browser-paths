var which = require('which');


function getBin(commands) {
	// Don't run these checks if not on linux
	if (process.platform !== 'linux') {
		return null;
	}
	for (let i = 0; i < commands.length; i++) {
		return which.sync(commands[i], {nothrow: true});
	}

	return null;
}

function getChrome() {
	return getBin(['google-chrome', 'google-chrome-stable']);
}
function getEdge() {
	return getBin(['microsoft-edge-stable']);
}

function getThorium() {
	return getBin(['thorium-browser']);
}

function getChromium() {
	return getBin(['chromium-browser', 'chromium']) || getChrome() || getEdge() || getThorium();
}

function getFirefox() {
	return getBin(['firefox']);
}


module.exports = { getChrome, getEdge, getThorium, getChromium, getFirefox };