import * as boxen from 'boxen'
import chalk from 'chalk'

// Define options for Boxen
const options = {
    padding: 1,
    margin: 1,
    borderStyle: 'round'
}

// Text + chalk definitions
const data = {
    name: chalk.white('Ryan Edge /'),
    handle: chalk.cyan('chimon'),
    work: chalk.white('Senior Software Engineer at Diligent Corporation'),
    twitter: chalk.cyan('https://twitter.com/chimon1984'),
    github: chalk.cyan('https://github.com/chimon2000'),
    linkedin: chalk.cyan('https://linkedin.com/in/ryan-edge'),
    web: chalk.cyan('https://ryanedge.page'),
    npx: chalk.white('npx ryanedge'),
    labelWork: chalk.white.bold('      Work:'),
    labelTwitter: chalk.white.bold('   Twitter:'),
    labelGitHub: chalk.white.bold('    GitHub:'),
    labelLinkedIn: chalk.white.bold('  LinkedIn:'),
    labelWeb: chalk.white.bold('       Web:'),
    labelCard: chalk.white.bold('      Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output =
    heading +
    newline +
    newline +
    working +
    newline +
    twittering +
    newline +
    githubing +
    newline +
    linkedining +
    newline +
    webing +
    newline +
    newline +
    carding

console.log(chalk.green(boxen(output, options)))
