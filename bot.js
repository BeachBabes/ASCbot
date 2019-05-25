const discord = require('discord.js')
const { Client } = require('discord.js');
const client = new Client({disableEveryone: true})
const PREFIX = ("m.")
const GOOGLE_API_KEY = ('AIzaSyCIRU11Ooxr7JYGc35F9d-VqBp190xBfzc')
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const Console = console;
const fs = require('fs')
const youtube = new YouTube(GOOGLE_API_KEY);
const queue = new Map();
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
	const searchString = args.slice(1).join(' ');
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);
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
            let message = await client.channels.get("578666069498265623").send(poll)
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
        var copy = Math.floor(Math.random() * 3)
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
	    if(copy === 2)
	    {
		    msg.channel.send(`动态网自由门 天安門 天安门 法輪功 李洪志 Free Tibet 六四天安門事件 The Tiananmen Square protests of 1989 天安門大屠殺 The Tiananmen Square Massacre 反右派鬥爭 The Anti-Rightist Struggle 大躍進政策 The Great Leap Forward 文化大革命 The Great Proletarian Cultural Revolution 人權 Human Rights 民運 Democratization 自由 Freedom 獨立 Independence 多黨制 Multi-party system 台灣 臺灣 Taiwan Formosa 中華民國 Republic of China 西藏 土伯特 唐古特 Tibet 達賴喇嘛 Dalai Lama 法輪功 Falun Dafa 新疆維吾爾自治區 The Xinjiang Uyghur Autonomous Region 諾貝爾和平獎 Nobel Peace Prize 劉暁波 Liu Xiaobo 民主 言論 思想 反共 反革命 抗議 運動 騷亂 暴亂 騷擾 擾亂 抗暴 平反 維權 示威游行 李洪志 法輪大法 大法弟子 強制斷種 強制堕胎 民族淨化 人體實驗 肅清 胡耀邦 趙紫陽 魏京生 王丹 還政於民 和平演變 激流中國 北京之春 大紀元時報 九評論共産黨 獨裁 專制 壓制 統一 監視 鎮壓 迫害 侵略 掠奪 破壞 拷問 屠殺 活摘器官 誘拐 買賣人口 遊進 走私 毒品 賣淫 春畫 賭博 六合彩 天安門 天安门 法輪功 李洪志 Winnie the Pooh 劉曉波动态网自由门`)
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
	if (command === 'play') {
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.send('I\'m sorry but you need to be in a voice channel to play music!')
		msg.delete()
		.then(msg => msg.delete(10000))
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			return msg.channel.send('I cannot connect to your voice channel, make sure I have the proper permissions!')
			.then(msg => msg.delete(10000))
		}
		if (!permissions.has('SPEAK')) {
			return msg.channel.send('I cannot speak in this voice channel, make sure I have the proper permissions!')
			.then(msg => msg.delete(10000))
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id); 
				await handleVideo(video2, msg, voiceChannel, true); 
			}
			return msg.channel.send(`Success! Playlist: **${playlist.title}** has been added to the queue!`)
			.then(msg => msg.delete(10000))
		} else {
			try {
				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 10);
					let index = 0;
					msg.channel.send(`
__**Song selection:**__

${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}

Type a number 1-10 to select a song!
					`)
					.then(msg => msg.delete(15000))
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 10000,
							errors: ['time']
						})
					} catch (err) {
						console.error(err);
						return msg.channel.send('You didnt enter a number in time!')
						.then(msg => msg.delete(10000))
					}
					const videoIndex = parseInt(response.first().content)
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send('No search results found.')
					.then(msg => msg.delete(10000))
				}
			}
			return handleVideo(video, msg, voiceChannel);
		}
	} else if (command === 'skip') {
		if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!')
		msg.delete()
		.then(msg => msg.delete(10000))
		if (!serverQueue) return msg.channel.send('There is nothing playing!')
		msg.delete()
		.then(msg => msg.delete(10000))
		serverQueue.connection.dispatcher.end('Skip command has been used!');
		return undefined;
	} else if (command === 'stop') {
		if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!')
		msg.delete()
		.then(msg => msg.delete(10000))
		if (!serverQueue) return msg.channel.send('Theres nothing playing idot')
		msg.delete()
		.then(msg => msg.delete(10000))
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('Stop command has been used!');
		return undefined;
	} else if (command === 'volume') {
		if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');
		msg.delete()
		if (!serverQueue) return msg.channel.send('There is nothing playing.');
		msg.delete()
		if (!args[1]) return msg.channel.send(`The current volume is: **${serverQueue.volume}**`);
		msg.delete()
		serverQueue.volume = args[1];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
		return msg.channel.send(`I set the volume to: **${args[1]}**`)
		.then(msg => msg.delete(10000))
	} else if (command === 'np') {
		if (!serverQueue) return msg.channel.send('There is nothing playing!');
		return msg.channel.send(`Now playing: **${serverQueue.songs[0].title}**`)		
		.then(msg => msg.delete(10000))
	} else if (command === 'queue') {
		if (!serverQueue) return msg.channel.send('There is nothing playing!')
		.then(msg => msg.delete(10000))
		return msg.channel.send(`
__**Song queue:**__

${serverQueue.songs.map(song => `**>** ${song.title}`).join('\n')}

**Now playing:** ${serverQueue.songs[0].title}
		`)
		.then(msg => msg.delete(10000))
	} else if (command === 'pause') {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send(':pause_button: Music paused!')
			.then(msg => msg.delete(10000))
		}
		return msg.channel.send('There is nothing playing.')
		.then(msg => msg.delete(10000))
	} else if (command === 'resume') {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return msg.channel.send(':play_button: Music unpaused!')
			.then(msg => msg.delete(10000))
		}
		return msg.channel.send('There is nothing playing.')
		.then(msg => msg.delete(10000))
	}

	return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	console.log(video);
	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(msg.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`Sorry, I can't join the channel!`)
			.then(msg => msg.delete(10000))
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return msg.channel.send(`${song.title} has been added to your queue!`)
		.then(msg => msg.delete(10000))
	}
	return undefined;
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	serverQueue.textChannel.send(`Now playing: **${song.title}!**`)
	.then(msg => msg.delete(10000))
}
})
client.login(process.env.BOT_TOKEN)
