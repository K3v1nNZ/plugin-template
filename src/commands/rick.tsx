import { ApplicationCommandInputType, ApplicationCommandOptionType, ApplicationCommandType, Command } from "enmity/api/commands";
import { REST } from "enmity/modules/common"
import { sendReply } from "enmity/api/clyde";
import { Messages } from "enmity/metro/common";
import { Token } from "enmity/metro/common";

export const rickCommand: Command = {
    id: "rick-command",
    
    name: "rickroll",
    displayName: "rickroll",

    description: "Rickroll someone",
    displayDescription: "Rickroll someone",

    type: ApplicationCommandType.Chat,
    inputType: ApplicationCommandInputType.BuiltInText,

    //options: [],

    execute: async function (args, message) {
        var rickRollURL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        return { content: "<" + rickRollURL + ">" };
    }
}

export const favouriteGifsCommand: Command = {
    id: "favourite-gifs-command",

    name: "favourite-gifs",
    displayName: "favourite-gifs",

    description: "Get a list of your favourite gifs",
    displayDescription: "Get a list of your favourite gifs",

    type: ApplicationCommandType.Chat,
    inputType: ApplicationCommandInputType.BuiltInText,

    options: [{
        name: "pastebin-api-key",
        displayName: "pastebin-api-key",

        description: "Your pastebin API key",
        displayDescription: "Your pastebin API key",

        type: ApplicationCommandOptionType.String,
        required: true
    }],

    execute: async function (args, message) {
        var token = Token.getToken();
        var response = await fetch("https://discord.com/api/v9/users/@me/settings-proto/2", {
            method: "GET",
            credentials: "include",
            headers: {
                "authorization": token
            }
        })
        let json = await response.json();
        let res = json.settings.substring(0, 400);
        let buff = new Buffer(res, 'base64');
        let text = buff.toString('hex');
        //var matches = text.match(/http:\/\/(?:(?!http:\/\/|\s).)*/g)!;
        //sendReply(message?.channel.id ?? "0", matches.join(" brrr"));
        //if (matches.length < 1) {
        //    sendReply(message?.channel.id ?? "0", "You have no favourite gifs");
        //}

        var psatebinSend = await fetch("https://pastebin.com/api/api_post.php", {
            method: "POST",
            body: new URLSearchParams({
                api_dev_key: args["pastebin-api-key"],
                api_option: "paste",
                api_paste_code: text,
                api_paste_private: "1",
                api_paste_name: "favourite-gifs"
        })
        })
        var psatebinSendJson = await psatebinSend.json();
        sendReply(message?.channel.id ?? "0", "Your favourite gifs have been uploaded to pastebin: " + psatebinSendJson);
    }
}
