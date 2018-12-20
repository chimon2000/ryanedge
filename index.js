const fs = require('fs')
const path = require('path')
const project = path.join(__dirname, '../tsconfig.json')
const isDev = fs.existsSync(project)

require(`../${isDev ? 'src' : 'lib'}`)
