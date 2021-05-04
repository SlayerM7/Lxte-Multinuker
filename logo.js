const { magentaBright: main, red, white, blackBright } = require('chalk')

function logo() {
console.log(' ')
console.log(white('╦  ═╗ ╦╔╦╗╔═╗  ╔╗╔╦ ╦╦╔═╔═╗╦═╗'))
console.log(blackBright('║  ╔╩╦╝ ║ ║╣   ║║║║ ║╠╩╗║╣ ╠╦╝'))
console.log(main("╩═╝╩ ╚═ ╩ ╚═╝  ╝╚╝╚═╝╩ ╩╚═╝╩╚═"))
console.log(' ')
console.log(main("╔═══════════════════╦═════════════════════╦═════════════════════╦"))
console.log(main("║ [")+white(1)+main('] ') + white('Ban members  ') + main(' ║ [')+white(4)+main('] ') + white('Create roles') + main('    ║ [') + white(7) + main(']') + white(' Delete channels') + main(' ║'))
console.log(main("║ [")+white(2)+main('] ') + white('Kick members ') + main(' ║ [')+white(5)+main('] ') + white('Nuker          ') + main(' ║ [') + white(8) + main(']') + white(' Create channels') + main(' ║'))
console.log(main("║ [")+white(3)+main('] ') + white('Prune members') + main(' ║ [')+white(6)+main('] ') + white('Delete roles') + main('    ║ [') + white(9) + main(']') + white(' Exit') + main('            ║'))
console.log(main('╚═══════════════════╩═════════════════════╩═════════════════════╩'))
}

module.exports = {
  logo
}
