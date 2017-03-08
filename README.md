# Promise Object Formatter (Chrome Extension)

Transforms Promises to a more readable format when they are logged to the console.
Currently only supports Bluebird Promises.

Fork of the [Immutable Object Formatter Extension](https://github.com/mattzeunert/immutable-object-formatter-extension).

The Chrome extension will only work if you **enable Custom Formatters** in the DevTools settings.

![](https://cloud.githubusercontent.com/assets/1303660/18231278/a271ede6-72ad-11e6-8623-367f3e8eb686.png)

## Running the code locally

1. `npm install`
2. `npm run dev`
3. Load the "/extension" directory as an unpacked Chrome extension
4. Open "/test-page/index.html" to check everything looks as expected

Make sure to reload the extension after any changes.
