const discord = require('discord.js')
const { Client } = require('discord.js');
const client = new Client({disableEveryone: true})
const PREFIX = ("m.")
const fs = require('fs')
let options = {
    total: "565272404360822794",
    users: "565272460891783168",
	bots: "565272492000935967",
	announce: "559509706088120320"
};
client.on('reconnecting', () => console.log('I am reconnecting now!'));
client.on('ready', function(){
    console.log(`Bot Ready for ${client.users.size} users`);
    client.user.setPresence({ game: { name: 'Watching over Alfreds Summer Camp', type: "streaming", url: "https://www.twitch.tv/discord.gg/FZjVDNs"}});
    client.user.setStatus('online')
});
client.on('guildMemberAdd', function(member)
{
    var join = new discord.RichEmbed()
    .setTitle('Welcome to Alfreds Summer Camp!')
    .addField('Please read the rules!', 'The rules are located in the #rules channel in the Important category')
    .addField('Basic Rules', 'Here are some basic rules for the server!')
    .addField('Rule 1', 'Don\'t ask for ranks/promotions')
    .addField('Rule 2', 'No doxxing.')
    .addField('Rule 3', 'Don\'t advertise. (dms and on the server)')
    .addField('Rule 4', 'Listen to the Camp Counselors')
    .addField('Rule 5', 'Don\'t @ moderators without a good reason.')
    .addField('Rule 6', 'Drama will be taken to #𝗚𝗮𝘀-𝗖𝗵𝗮𝗺𝗯𝗲𝗿 ')
    .addField('Rule 7', 'Follow Discord\'s TOS and Community guidelines.')
    .addField('Rule 7.1', 'https://discordapp.com/guidelines')
    .addField('Rule 7.2', 'https://discordapp.com/terms')
    .addField('Rule 8', 'Keep racism to a minimum')
    .addField('Rule 9', 'Do not post NSFW, ever')
    .addField('Rule 10', 'Respect room themes')
    .addField('Rule 11', 'No spamming')
    .addField('Incase you leave and want to come back!', 'https://discord.gg/4r5NV7k')
    .setFooter('Bot created by Alfred')
    .setThumbnail('https://cdn.discordapp.com/attachments/559520022951755780/571798911031705600/sansberry.jpg')
    member.send(join)
    let memberRole = member.guild.roles.find('name', 'Day Camper')
    member.addRole(memberRole)
})
client.on("guildMemberAdd", (member) => {
	//All choices are optional here. Bot wont work if the channel ID's are wrong. How to properly get ID's read in README.md 
	try {
		member.guild.channels.get(options.total).setName(`Total Members: ${member.guild.memberCount}`); // You can change this text, but still keep ${guild.memberCount}, as it defines total members.
		member.guild.channels.get(options.users).setName(`Users: ${member.guild.members.filter((m) => !m.user.bot).size}`); // This text is also changeable, still keep the code in ${}
		member.guild.channels.get(options.bots).setName(`Bots: ${member.guild.members.filter((m) => m.user.bot).size}`); // This text is also changeable, still keep the code in ${}
	
	}
	catch (e) {
	Console.log(e);
	}
});
client.on("guildMemberRemove", (member) => {
	//All choices are optional here. Bot wont work if the channel ID's are wrong. How to properly get ID's read in README.md 
	try {
		member.guild.channels.get(options.total).setName(`Total Members: ${member.guild.memberCount}`); // You can change this text, but still keep ${guild.memberCount}, as it defines total members.
		member.guild.channels.get(options.users).setName(`Users: ${member.guild.members.filter((m) => !m.user.bot).size}`); // This text is also changeable, still keep the code in ${}'s
		member.guild.channels.get(options.bots).setName(`Bots: ${member.guild.members.filter((m) => m.user.bot).size}`); // This text is also changeable, still keep the code in ${}'s
	
	}
	catch (e) {
    Console.log(e);
    }})

client.on('message', async msg => {
	if (msg.author.bot) return undefined;
	let command = msg.content.toLowerCase().split(' ')[0];
    command = command.slice(PREFIX.length)
    if (msg.channel.id == '559508829877043200'){
        var d = msg.createdAt,
        dformat = [d.getMonth()+1,
           d.getDate(),
           d.getFullYear()].join('/')
        
        var f = msg.createdAt,
        fformat = [f.getHours(),
            f.getMinutes(),
            f.getSeconds()].join(':');
    
        fs.appendFile('chatlogs/General.txt', `[${dformat}] [${msg.author.username}] [${fformat}]: ${msg.content}\r\n`, function(err){
            if(err){
                console.log(err)
            }
        });
    }
    if (msg.channel.id == '559508892732751872'){
        var d = msg.createdAt,
        dformat = [d.getMonth()+1,
           d.getDate(),
           d.getFullYear()].join('/')
        
        var f = msg.createdAt,
        fformat = [f.getHours(),
            f.getMinutes(),
            f.getSeconds()].join(':');
    
        fs.appendFile('chatlogs/Memes.txt', `[${dformat}] [${msg.author.username}] [${fformat}]: ${msg.content}\r\n`, function(err){
            if(err){
                console.log(err)
            }
        });
    }
    if (msg.channel.id == '559509521005936653'){
        var d = msg.createdAt,
        dformat = [d.getMonth()+1,
           d.getDate(),
           d.getFullYear()].join('/')
        
        var f = msg.createdAt,
        fformat = [f.getHours(),
            f.getMinutes(),
            f.getSeconds()].join(':');
    
        fs.appendFile('chatlogs/Counting.txt', `[${dformat}] [${msg.author.username}] [${fformat}]: ${msg.content}\r\n`, function(err){
            if(err){
                console.log(err)
            }
        });
    }
    if (!msg.content.startsWith(PREFIX)) return undefined;
    const args = msg.content.split(' ');
    if(command === 'rules')
    {
        msg.delete()
        var join = new discord.RichEmbed()
        .setTitle('Welcome to Alfreds Summer Camp!')
        .addField('Please read the rules!', 'The rules are located in the #rules channel in the Important category')
        .addField('Basic Rules', 'Here are some basic rules for the server!')
        .addField('Rule 1', 'Don\'t ask for ranks/promotions')
        .addField('Rule 2', 'No doxxing.')
        .addField('Rule 3', 'Don\'t advertise. (dms and on the server)')
        .addField('Rule 4', 'Listen to the Camp Counselors')
        .addField('Rule 5', 'Don\'t @ moderators without a good reason.')
        .addField('Rule 6', 'Drama will be taken to #𝗚𝗮𝘀-𝗖𝗵𝗮𝗺𝗯𝗲𝗿 ')
        .addField('Rule 7', 'Follow Discord\'s TOS and Community guidelines.')
        .addField('Rule 7.1', 'https://discordapp.com/guidelines')
        .addField('Rule 7.2', 'https://discordapp.com/terms')
        .addField('Rule 8', 'Keep racism to a minimum')
        .addField('Rule 9', 'Do not post NSFW, ever')
        .addField('Rule 10', 'Respect room themes')
        .addField('Rule 11', 'No spamming')
        .addField('Incase you leave and want to come back!', 'https://discord.gg/4r5NV7k')
        .setFooter('Bot created by Alfred')
        .setThumbnail('https://cdn.discordapp.com/attachments/559520022951755780/571798911031705600/sansberry.jpg')
        msg.channel.send(join)
    }
    if(command === 'help')
    {
        msg.delete()
        var help = new discord.RichEmbed()
        .setTitle('Help Command Page 1')
        .addField('ADMIN COMMANDS', 'Below are the commands for Admins')
        .addField('m.lockdown', 'Initiates a server lockdown, muting all channels. (You must have a role called lockdown for this to work)')
        .addField('m.unlock', 'Ends the servers lockdown')
        .addField('m.ban', 'Bans a user')
        .addField('m.kick', 'Kicks a user')
        .addField('m.mute', 'Mutes a user')
        .addField('m.unmute', 'Unmutes a user')
        .addField('m.setup', 'Sets up the @everyone role and lockdown role. You must move the lockdown role above all roles except for admin roles for maximum protection.')
        .addField('m.announce', 'Makes an announcement')
        .addField('m.timer', 'Starts a week long timer to have reminders setup.')
        var public = new discord.RichEmbed()
        .setTitle('Help Command Page 2')
        .addField('PUBLIC COMMANDS', 'Below are the commands for the public')
        .addField('m.rules', 'Sends the servers rules')
        .addField('m.animerole', 'Gives you the Anime Connoisseur role')
        .addField('m.eventrole', 'Gives you the Events role')
        .addField('m.malerole', 'Gives you the Male role')
        .addField('m.femalerole', 'Gives you the Female role')
        .addField('m.mafiarole', 'Gives you the Mafia role')
        .addField('m.red', 'Gives you the Red role')
        .addField('m.blue', 'Gives you the Blue role')
        .addField('m.green', 'Gives you the Green role')
        .addField('m.orange', 'Gives you the Orange role')
        .addField('m.purple', 'Gives you the Purple role')
        .addField('m.yellow', 'Gives you the Yellow role')
        .addField('m.rps (rock, paper, or scissors)', 'Plays rock paper scissors with you')
        .addField('m.roll', 'Rolls a 6 sided die')
        .addField('m.copypasta', 'Sends a random Copypasta')
        .addField('m.pp', 'Tells you how large your pp is')
        .addField('m.create', 'Creates a new poll for the server to vote on')
        .addField('m.time', 'Tells you your local time')
        .addField('m.serverlink', 'Sends the servers permanent invite link')
        .setFooter('Bot created by Alfred')
        msg.channel.send(help)
        msg.channel.send(public)
    }
    if(command === 'setup')
    {
        msg.delete()
        {
            if(!msg.member.hasPermission("ADMINISTRATOR"))
            {
                var perms = new discord.RichEmbed()
                .setTitle("Setup Failed!")
                .setColor("RANDOM")
                .setDescription("You cannot use this module!")
                msg.channel.send(perms)
                return;
            }
        }
        var setup = new discord.RichEmbed()
        .addField('Setup Command', 'I have created the role "lockdown" and edited the permissions of "@ everyone", please move the lockdown role above all other roles. This is necessary to protect your server!')
        msg.guild.createRole({
            name: 'lockdown',
            color: 'RANDOM',
            permissions: ['READ_MESSAGE_HISTORY', 'READ_MESSAGES'
            ]
        })
        msg.guild.roles.find('name', '@everyone').setPermissions('CREATE_INSTANT_INVITE', 'READ_MESSAGES', 'READ_MESSAGE_HISTORY')
        msg.channel.send(setup)
    }
    if(command === 'lockdown')
    {
        msg.delete()
        {
            if(!msg.member.hasPermission("ADMINISTRATOR"))
            {
                var perms = new discord.RichEmbed()
                .setTitle("Lockdown Failed!")
                .setColor("RANDOM")
                .setDescription("You cannot use this module!")
                msg.channel.send(perms)
                return;
            }
        }
        var lockdown = new discord.RichEmbed()
        .addField('Lockdown Triggered', 'An administrator has activated a server lockdown!')
        let r = msg.guild.roles.find(role => role.name === 'lockdown')
        msg.guild.members.filter(m => !m.user.bot).forEach(member => member.addRole(r))
        msg.channel.send(lockdown)
    }
    if(command === 'unlock')
    {
        msg.delete()
        {
            if(!msg.member.hasPermission("ADMINISTRATOR"))
            {
                var perms = new discord.RichEmbed()
                .setTitle("Unlock Failed!")
                .setColor("RANDOM")
                .setDescription("You cannot use this module!")
                msg.channel.send(perms)
                return;
            }
        }
        var unlock = new discord.RichEmbed()
        .addField('Unlock Triggered', 'An administrator has unlocked the server!')
        let u = msg.guild.roles.find(role => role.name === 'lockdown')
        msg.guild.members.filter(m => !m.user.bot).forEach(member => member.removeRole(u))
        msg.channel.send(unlock)
    }
    if(command === 'create')
    {
        const args = msg.content.split(' ')
        var poll = new discord.RichEmbed()
        .addField(args.slice(1).join(' '), 'Vote Below!')
        .setTitle(`Poll created by ${msg.author.username}!`)
        var noarg = new discord.RichEmbed()
        .addField('Poll Failed', 'You did not give anything to poll')
        var perms = new discord.RichEmbed()
        .addField('Poll Failed', 'You do not have permission to create a poll') 
        {
            {
                if(!msg.member.hasPermission('CONNECT'))
                msg.channel.send(perms)
            }
            {
                if(!args[0])
                return msg.channel.send(noarg)
            }
            let message = await client.channels.get("563523443308363795").send(poll)
            await message.react('✅')
            await message.react('❌')
            msg.delete({timeout: 1000})
        }
    }
    if(command === 'announce')
    {
        const args = msg.content.split(' ')
        var poll = new discord.RichEmbed()
        .setDescription(args.slice(1).join(' '))        
        .setTitle(`Announcement by ${msg.author.username}!`)
        var noarg = new discord.RichEmbed()
        .addField('Poll Failed', 'You did not give anything to poll')
        var perms = new discord.RichEmbed()
        .addField('Poll Failed', 'You do not have permission to create a poll') 
        {
            {
                if(!msg.member.hasPermission('ADMINISTRATOR'))
                msg.channel.send(perms)
            }
            {
                if(!args[0])
                return msg.channel.send(noarg)
            }
            let message = await client.channels.get("559509706088120320").send(poll)
            await message.react('✅')
            msg.delete({timeout: 1000})
        }
    }
    if(command === 'ban')
    {
        msg.delete()
        let bannedUser = msg.guild.member(msg.mentions.users.first());
        if(!bannedUser)
        {
            var exist = new discord.RichEmbed()
            .setTitle("Ban Failed!")
            .setDescription("The user you told me to ban doesn't exist!")
            msg.channel.send(exist)
            return;
        }
        if(!msg.member.hasPermission("ADMINISTRATOR"))
        {
            var perms = new discord.RichEmbed()
            .setTitle("Ban Failed!")
            .setDescription("You cannot ban users or you tried to ban an administrator!")
            msg.channel.send(perms)
            return;
        }
        let reason = args.slice(1).join(' ')
        var perms2 = new discord.RichEmbed()
        .setTitle("Successfully Banned!")
        .setDescription("***:white_check_mark: User has been banned!***")
        msg.guild.member(bannedUser).ban(reason)
            .then(msg.channel.send(perms2))
            .then(console.log)
            .catch(console.error)
    }
    if(command === 'kick')
    {
        msg.delete()
        let kickedUser = msg.guild.member(msg.mentions.users.first());
        if(!kickedUser)
        {
            var perms = new discord.RichEmbed()
            .setTitle('Kick Failed!')
            .setDescription('The user you told me to kick doesn\'t exist!')
            .setFooter('Bot created by Alfred')
            msg.channel.send(perms)
            return;
        }
        if(!msg.member.hasPermission("MANAGE_MESSAGES"))
        {
            var perms2 = new discord.RichEmbed()
            .setTitle('Kick Failed!')
            .setDescription('You don\'t have permission to kick other users')
            .setFooter('Bot created by Alfred')
            msg.channel.send(perms2)
            return;
        }
        let reason = args.slice(1).join(' ')
        var perms3 = new discord.RichEmbed()
        .setTitle('Kick Success!')
        .setDescription('***:white_check_mark: User has been kicked!***')
        msg.guild.member(kickedUser).kick(reason)
            .then(msg.channel.send(perms3))
            .then(console.log)
            .catch(console.error)
    }
    if(command === 'mute')
    {
        msg.delete()
        let mutedUser = msg.guild.member(msg.mentions.users.first());
        if(!mutedUser)
        {
            var exist = new discord.RichEmbed()
            
            .setTitle("Mute Failed!")
            .setDescription("The user you told me to mute doesn't exist!")
            .setFooter("Bot created by Alfred")
            msg.channel.send(exist)
            return;
        }
        if(!msg.member.hasPermission("ADMINISTRATOR"))
        {
            var perms = new discord.RichEmbed()
            .setTitle("Mute Failed!")
            .setDescription("You cannot mute users or you tried to mute an administrator!")
            msg.channel.send(perms)
            return;
        }
        let role = msg.member.guild.roles.find(role => role.name === 'Muted')
        var perms2 = new discord.RichEmbed()
        .setTitle("Successfully Muted!")
        .setDescription("***:white_check_mark: User has been muted***")
        msg.guild.member(mutedUser).addRole(role)
            .then(msg.channel.send(perms2))
            .then(console.log)
            .catch(console.error)
    }
    if(command === 'unmute')
    {
        msg.delete()
        let mutedUser = msg.guild.member(msg.mentions.users.first());
        if(!mutedUser)
        {
            var exist = new discord.RichEmbed()
            .setTitle("Mute Failed!")
            .setDescription("The user you told me to unmute doesn't exist!")
            .setFooter("Bot created by Alfred")
            msg.channel.send(exist)
            return;
        }
        if(!msg.member.hasPermission("ADMINISTRATOR"))
        {
            var perms = new discord.RichEmbed()
            .setTitle("Mute Failed!")
            .setDescription("You cannot unmute users!")
            msg.channel.send(perms)
            return;
        }
        let role = msg.member.guild.roles.find(role => role.name === 'Muted')
        var perms2 = new discord.RichEmbed()
        .setTitle("Successfully Unmuted!")
        .setDescription("***:white_check_mark: User has been unmuted***")
        msg.guild.member(mutedUser).removeRole(role)
            .then(msg.channel.send(perms2))
            .then(console.log)
            .catch(console.error)
    }
    if(command === 'animetimer')
    {
        msg.delete()
        {
            if(!msg.member.hasPermission("ADMINISTRATOR"))
        {
            var perms = new discord.RichEmbed()
            .setTitle("Denied")
            .setDescription("You cannot start a timer!")
            msg.channel.send(perms)
            return;
        }
            msg.channel.send('Anime Timer Set!')
            .then(setInterval(function()
            {
                client.channels.get('572190448261660693').send('@Anime Connoisseur')
            }, 604800000))
        }
        
    }
    if(command === 'mafiatimer')
    {
        msg.delete()
        {
            if(!msg.member.hasPermission("ADMINISTRATOR"))
        {
            var perms = new discord.RichEmbed()
            .setTitle("Denied")
            .setDescription("You cannot start a timer!")
            msg.channel.send(perms)
            return;
        }
            msg.channel.send('Mafia Timer Set!')
            .then(setInterval(function()
            {
                client.channels.get("572190448261660693").send('@Events')
            }, 604800000))
        }
        
    }
    if(command === 'gamingtimer')
    {
        msg.delete()
        {
            if(!msg.member.hasPermission("ADMINISTRATOR"))
        {
            var perms = new discord.RichEmbed()
            .setTitle("Denied")
            .setDescription("You cannot start a timer!")
            msg.channel.send(perms)
            return;
        }
        msg.channel.send('Gaming Timer Set!')
            .then(setInterval(function()
            {
                client.channels.get("572190448261660693").send('@Events')
            }, 604800000))
        }
        
    }
    if(command === 'movietimer')
    {
        msg.delete()
        {
            if(!msg.member.hasPermission("ADMINISTRATOR"))
        {
            var perms = new discord.RichEmbed()
            .setTitle("Denied")
            .setDescription("You cannot start a timer!")
            msg.channel.send(perms)
            return;
        }
        msg.channel.send('Movie Timer Set!')
            .then(setInterval(function()
            {
                client.channels.get("572190448261660693").send('@Events')
            }, 604800000))
        }
        
    }
    if(command === 'pp')
    {
        msg.delete()
        var pp = new discord.RichEmbed()
        .addField('Your PP is this long', `${Math.floor(Math.random() * 16)} inches`)
        msg.channel.send(pp)
    }
    if(command === 'rps')
    {
        msg.delete()
        var shoot = Math.floor(Math.random() * 3)
        if(shoot == 0)
        {
            var rock = new discord.RichEmbed()
            .setTitle('RPS Command!')
            .setDescription(`${msg.author}, I throw rock! You threw ${args.slice(1)}`)
            .setFooter('Bot created by Alfred')
        msg.channel.send(rock);
        }
        if(shoot == 1)
        {   
            var paper = new discord.RichEmbed()
            .setTitle('RPS Command!')
            .setDescription(`${msg.author}, I throw scissors! You threw ${args.slice(1)}`)
            .setFooter('Bot created by Alfred')
            msg.channel.send(paper);
        }
        if(shoot == 2)
        {
            var scissors = new discord.RichEmbed()
            .setTitle('RPS Command!')
            .setDescription(`${msg.author}, I throw paper! You threw ${args.slice(1)}`)
            .setFooter('Bot created by Alfred')
            msg.channel.send(scissors)
        }
    }
    if(command === 'eventrole')
    {
        let roleUser = msg.author
        let role = msg.member.guild.roles.find(role => role.name === 'Events')
        var perms2 = new discord.RichEmbed()
        .addField('Role added!',`You have been given the ${role} role!`)
        msg.guild.member(roleUser).addRole(role)
            .then(msg.channel.send(perms2))
            .then(console.log)
            .catch(console.error)
            msg.delete()
    }
    if(command === 'animerole')
    {
        let roleUser = msg.author
        let role = msg.member.guild.roles.find(role => role.name === 'Anime Connoisseur')
        var perms2 = new discord.RichEmbed()
        .addField('Role added!',`You have been given the ${role} role!`)
        msg.guild.member(roleUser).addRole(role)
            .then(msg.channel.send(perms2))
            .then(console.log)
            .catch(console.error)
            msg.delete()
    }
    if(command === 'mafiarole')
    {
        let roleUser = msg.author
        let role = msg.member.guild.roles.find(role => role.name === 'Mafia')
        var perms2 = new discord.RichEmbed()
        .addField('Role added!',`You have been given the ${role} role!`)
        msg.guild.member(roleUser).addRole(role)
            .then(msg.channel.send(perms2))
            .then(console.log)
            .catch(console.error)
            msg.delete()
    }
    if(command === 'malerole')
    {
        let roleUser = msg.author
        let role = msg.member.guild.roles.find(role => role.name === 'Male')
        var perms2 = new discord.RichEmbed()
        .addField('Role added!',`You have been given the ${role} role!`)
        msg.guild.member(roleUser).addRole(role)
            .then(msg.channel.send(perms2))
            .then(console.log)
            .catch(console.error)
            msg.delete()
    }
    if(command === 'femalerole')
    {
        let roleUser = msg.author
        let role = msg.member.guild.roles.find(role => role.name === 'Female')
        var perms2 = new discord.RichEmbed()
        .addField('Role added!',`You have been given the ${role} role!`)
        msg.guild.member(roleUser).addRole(role)
            .then(msg.channel.send(perms2))
            .then(console.log)
            .catch(console.error)
            msg.delete()
    }
    if(command === 'red')
    {
        let roleUser = msg.author
        let role = msg.member.guild.roles.find(role => role.name === 'Red')
        var perms2 = new discord.RichEmbed()
        .addField('Role added!',`You have been given the ${role} role!`)
        msg.guild.member(roleUser).addRole(role)
            .then(msg.channel.send(perms2))
            .then(console.log)
            .catch(console.error)
            msg.delete()
    }
    if(command === 'blue')
    {
        let roleUser = msg.author
        let role = msg.member.guild.roles.find(role => role.name === 'Blue')
        var perms2 = new discord.RichEmbed()
        .addField('Role added!',`You have been given the ${role} role!`)
        msg.guild.member(roleUser).addRole(role)
            .then(msg.channel.send(perms2))
            .then(console.log)
            .catch(console.error)
            msg.delete()
    }
    if(command === 'green')
    {
        let roleUser = msg.author
        let role = msg.member.guild.roles.find(role => role.name === 'Green')
        var perms2 = new discord.RichEmbed()
        .addField('Role added!',`You have been given the ${role} role!`)
        msg.guild.member(roleUser).addRole(role)
            .then(msg.channel.send(perms2))
            .then(console.log)
            .catch(console.error)
            msg.delete()
    }
    if(command === 'orange')
    {
        let roleUser = msg.author
        let role = msg.member.guild.roles.find(role => role.name === 'Orange')
        var perms2 = new discord.RichEmbed()
        .addField('Role added!',`You have been given the ${role} role!`)
        msg.guild.member(roleUser).addRole(role)
            .then(msg.channel.send(perms2))
            .then(console.log)
            .catch(console.error)
            msg.delete()
    }
    if(command === 'purple')
    {
        let roleUser = msg.author
        let role = msg.member.guild.roles.find(role => role.name === 'Purple')
        var perms2 = new discord.RichEmbed()
        .addField('Role added!',`You have been given the ${role} role!`)
        msg.guild.member(roleUser).addRole(role)
            .then(msg.channel.send(perms2))
            .then(console.log)
            .catch(console.error)
            msg.delete()
    }
    if(command === 'yellow')
    {
        let roleUser = msg.author
        let role = msg.member.guild.roles.find(role => role.name === 'Yellow')
        var perms2 = new discord.RichEmbed()
        .addField('Role added!',`You have been given the ${role} role!`)
        msg.guild.member(roleUser).addRole(role)
            .then(msg.channel.send(perms2))
            .then(console.log)
            .catch(console.error)
            msg.delete()
    }
    if(command === 'roll')
    {
        var response = new discord.RichEmbed()
        .addField('Dice rolled!', `Your dice landed on ${Math.floor(Math.random() * 7)} ${msg.author}`)
        msg.channel.send(response)
        msg.delete()
    }
    if(command === 'copypasta')
    {
        msg.delete()
        var copy = Math.floor(Math.random() * 2)
    if(copy === 0)
    {
    var copyPaste = new discord.RichEmbed()
    .setTitle("Duolingo Bird")
    .setDescription("Ive fled my hometown, changed my number and stolen a 2018 Ford Fiesta, but nothing seems to be working. I uninstalled the duolingo app 5 days ago, but i still get the notification demanding me to lean Spanish. On the third day, I heard a window downstairs break and found a brick on the floor. There was a note tied to it saying \"Your time is almost up, learn the fucking mexican words or else\". I dont have the work ethic to dedicate the effort to learn the language, and just accepted my fate. But the next day, when i found the brakes in my car removed after causing a minor accident at a nearby intersection, I realized that im afraid to die. In that very moment, I received a notification saying, \"its too late for practice now. Speak the Spanish all you want, I will make sure of tu muerte\". I then turned around to see what i swear was a mass of neon green feathers dart behind a tree. I did not sleep that night, but Im thankful for it. A few hours after I went to bed, the owl appeared in my window, but quickly fled after I drew my firearm from my nightstand. Thats when I decided it was time to leave, and later stole a car parked down the street. But I know that my fate is sealed. Because every second Im not running, hes only getting closer. The notifications from the deleted duolingo app have been getting progressively darker and more sinister. The last one didnt even ask me to practice learning my language. It was just the owl asserting to me that he is God. I know Ill die soon. Ive accepted it. Yet Im still upset that my life has to end because of my inability to learn spanish.")
    .setFooter("Bot created by Alfred")
    msg.channel.send(copyPaste)
    }
    if(copy === 1)
    {
        msg.channel.send(`
hhhh
hhhh
hhhh
hhhh
hhhh
hhhh
hhhh
hhhh
hhhh                   hh
hhhh              hhhhhh
hhhhh  hhhhhhhhhhhhhh
hhhhhhhhhhhhhhhhhhhhh
hhhhhhh                        hhhhhh
hhhhhh                             hhhhh
hhhhh                                hhhhh
hhhh                                  hhhhh
hhhh                                  hhhhh
hhhh                                  hhhhh
hhhh                                  hhhhh
hhhh                                  hhhhh
hhhh                                  hhhhh 
hhhh                                  hhhhh`)
    }
    }
    if(command === 'time')
    {
        msg.delete()
            var d = msg.createdAt,
            dformat = [d.getMonth()+1,
               d.getDate(),
               d.getFullYear()].join('/')
               msg.channel.send(`${d}`)
    }
    if(command === 'serverlink')
    {
        msg.delete()
        var link = new discord.RichEmbed()
        .addField('Invite link to Alfreds Summer Camp', 'https://discord.gg/xmNsgPb')
        msg.channel.send(link)
    }
})
client.login(process.env.BOT_TOKEN)
