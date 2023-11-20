var fs = require('fs');
var path = require('path');


function getPath(suffix) {
	// Only run these checks on windows
	if (process.platform !== 'win32') {
		return null;
	}
	let outDirectory;
	const prefixes = [
		process.env.LOCALAPPDATA,
		process.env.PROGRAMFILES,
		process.env["PROGRAMFILES(X86)"],
	];

	for (const prefix of prefixes) {
		try {
			outDirectory = path.join(prefix, suffix);
			fs.accessSync(outDirectory);
			return outDirectory;
		} catch (e) {}
	}

	return null;
}


function getChrome() {
	return getPath("\\Google\\Chrome\\Application\\chrome.exe");
}

function getThorium() {
	return getPath("\\Thorium\\Application\\thorium.exe");
}

function getEdge() {
	//In fact it only is in Program Files (x86)
	return getPath("\\Microsoft\\Edge\\Application\\msedge.exe");
}

function getChromium() {
	//There is no chromium default install path for windows
	return getChrome() || getEdge() || getThorium();
}


function getFirefox() {
	return getPath("\\Mozilla Firefox\\firefox.exe");
}


module.exports = {getChrome, getEdge, getChromium, getFirefox};
