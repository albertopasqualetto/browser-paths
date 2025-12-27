# browser-paths

![](https://img.shields.io/bundlephobia/minzip/browser-paths)

A simple package that retrieves the path of the most known browsers (if installed), no matter the OS.

If browser is not found, it returns null.

## Install
```
npm i browser-paths
```

## Usage
```javascript
import { getChromiumPath, getBravePath } from "browser-paths";    # or any other supported browser
path = getChromiumPath()
bravePath = getBravePath()
```

## Supported Browsers

- Google Chrome
- Microsoft Edge
- Thorium Browser
- Brave Browser
- Chromium (fallback on the other generic chromium based browsers)
- Mozilla Firefox
