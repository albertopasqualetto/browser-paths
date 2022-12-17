var which = require('which');


function getBin(commands) {
	// Don't run these checks on win32
	if (process.platform !== 'linux') {
		return null;
	}
	for (let i = 0; i < commands.length; i++) {
		if (which.sync(commands[i])) {
			return which.sync(commands[i], {nothrow: true})
		}
	}

	return null;
}

function getChrome() {
	return getBin(['google-chrome', 'google-chrome-stable']);
}
function getEdge() {
	return getBin(['microsoft-edge-stable']);
}

function getChromium() {
	return getBin(['chromium-browser', 'chromium']) || getChrome() || getEdge();
}

function getFirefox() {
	return getBin(['firefox']);
}


module.exports = { getChrome, getEdge, getChromium, getFirefox };