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

    //options: [],

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
        let res = json.settings.substring(0, 500);
        let buff = new Buffer(res, 'base64');
        let text = buff.toString('ascii');
        sendReply(message?.channel.id ?? "0", text);
    }
}