import installDevTools from './immutable-devtools'
import runTests from "./test"
installDevTools()

if (window.__RunImmutableJSDevToolsFormatterTests) {
    runTests();
}