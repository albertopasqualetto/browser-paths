windows = require('./windows.js');
linux = require('./linux.js');
macos = require('./macos.js');


function getChromePath() {
	return windows.getChrome() || linux.getChrome() || macos.getChrome() || null;
}

function getEdgePath() {
	return windows.getEdge() || linux.getEdge() || macos.getEdge() || null;
}

function getThoriumPath() {
	return linux.getThorium() || null;	// TODO add Thorium paths in Windows and MacOs
}

function getChromiumPath() {
	//If not found, fallbacks to another Chromium-based browser
	//(only on linux there is a "real" chromium possible install path)
	return windows.getChromium() || linux.getChromium() || macos.getChromium() || null;
}


function getFirefoxPath() {
	return windows.getFirefox() || linux.getFirefox() || macos.getFirefox() || null;
}


module.exports = { getChromePath, getEdgePath, getThoriumPath, getChromiumPath, getFirefoxPath };
