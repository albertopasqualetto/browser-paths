# browser-paths

![](https://img.shields.io/bundlephobia/minzip/browser-paths)

A simple package that retrieves the path of the most known browsers (if installed), no matter the OS.

If browser is not found, it returns null.

Other browsers (Opera, Brave, ...) will be added in future, feel free to help me!

## Install
```
npm i browser-paths
```

## Usage
```javascript
import { getChromiumPath } from "browser-paths";    # or any other supported browser
path = getChromiumPath()
```

## Supported Browsers

- Google Chrome
- Microsoft Edge
- Thorium Browser (only linux)
- Chromium (fallback on the other generic chromium based browsers)
- Mozilla Firefox
