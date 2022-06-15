const fs = require('fs-extra');
const concat = require('concat');


(async function (){
const files = [
    './dist/my-app/runtime.js',
    './dist/my-app/polyfills.js',
    './dist/my-app/main.js'
]
await fs.ensureDir('elements')
await concat(files, 'elements/elements.js')
await fs.copyFile( './dist/my-app/styles.scss')

})