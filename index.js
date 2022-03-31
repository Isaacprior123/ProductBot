const Discord = require("discord.js")
const client = new Discord.Client({ intents: 32767 });

client.on("ready", () => {
    console.log("Bot is online!")
    let serverIn = client.guilds.cache.size;
    client.user.setPresence({ activities: [{ name: `${serverIn} Servers` }], status: 'dnd' }, [{ type: 'WATCHING'}]);
})

client.on("messageCreate", (message) => {
    const prefix = "?"
    if (!message.content.startsWith(prefix)) return;

    if (message.content === `${prefix}test`) {
        message.channel.send("Your test has worked!")
    }
})

client.on("messageCreate", (message) => {
    const prefix = "?"
    if (!message.content.startsWith(prefix)) return;

    if (message.content === `${prefix}help`) {
        const embedmsg = new Discord.MessageEmbed()
            .setColor('WHITE')
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
            .setTitle('Help Cmds')
            .setDescription('Products (displays all the products the server has) \n retrieve (retrieve a product that you own) \n Profile (Check your server profile) \n CreateProduct (Create a product SERVER ADMINS ONLY) \n RemoveProduct (Removes a Product SERVER ADMINS ONLY) \n help (shows all commands) \n Setup (Sets up the server step by step)')
        message.channel.send({ embeds: [embedmsg] });
    }
})



client.on("messageCreate", (message) => {
    const prefix = "?"
    if (!message.content.startsWith(prefix)) return;

    if (message.content === `${prefix}retrieve`) {
        message.channel.send("**This Command dose not work yet (COMMING SOON!)**")
    }
})

client.on("messageCreate", (message) => {
    const prefix = "?"
    if (!message.content.startsWith(prefix)) return;

    if (message.content === `${prefix}products`) {
        const embedmsg = new Discord.MessageEmbed()
            .setColor('WHITE')
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
            .setTitle('Products')
            .setDescription('This Servers Products Include:')
        message.channel.send({ embeds: [embedmsg] });
    }
})

client.on("messageCreate", (message) => {
    const prefix = "?"
    if (!message.content.startsWith(prefix)) return;

    if (message.content === `${prefix}profile`) {
        const embedmsg = new Discord.MessageEmbed()
            .setColor('WHITE')
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
            .setTitle('Profile')
            .setDescription('User: \n OwnedProducts:')
        message.channel.send({ embeds: [embedmsg] });
    }
})

client.on("messageCreate", (message) => {
    const prefix = "?"
    if (!message.content.startsWith(prefix)) return;

    if (message.content === `${prefix}setup`) {
        const embedmsg = new Discord.MessageEmbed()
            .setColor('WHITE')
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
            .setTitle('Setup')
            .setDescription('Please Enter Group ID Below \n *note: This feature may not work yet.')
        message.channel.send({ embeds: [embedmsg] });
    }
})






client.login("OTU5MTAxNzAyNDU4NDU0MDg2.YkW_EQ.cZYWtjqhfyoyfkd3AblhkvHneQM")