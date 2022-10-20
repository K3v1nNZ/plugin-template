import { ApplicationCommandInputType, ApplicationCommandOptionType, ApplicationCommandType, Command } from "enmity/api/commands";
import { REST } from "enmity/modules/common"
import { sendReply } from "enmity/api/clyde";
import { Messages } from "enmity/metro/common";

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