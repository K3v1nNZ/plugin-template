function v(e){window.enmity.plugins.registerPlugin(e)}var f="RickAstley",h="1.0.0",y="Command to rick roll people.",b=[{name:"!Kevin!",id:"200901302094528512"}],k={name:f,version:h,description:y,authors:b},r;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.Guild=1]="Guild",e[e.DM=2]="DM"})(r||(r={}));var n;(function(e){e[e.Chat=1]="Chat",e[e.User=2]="User",e[e.Message=3]="Message"})(n||(n={}));var t;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.BuiltInText=1]="BuiltInText",e[e.BuiltInIntegration=2]="BuiltInIntegration",e[e.Bot=3]="Bot",e[e.Placeholder=4]="Placeholder"})(t||(t={}));var u;(function(e){e[e.Role=1]="Role",e[e.User=2]="User"})(u||(u={}));var m;(function(e){e[e.SubCommand=1]="SubCommand",e[e.SubCommandGroup=2]="SubCommandGroup",e[e.String=3]="String",e[e.Integer=4]="Integer",e[e.Boolean=5]="Boolean",e[e.User=6]="User",e[e.Channel=7]="Channel",e[e.Role=8]="Role",e[e.Mentionnable=9]="Mentionnable",e[e.Number=10]="Number",e[e.Attachment=11]="Attachment"})(m||(m={}));var d;(function(e){e[e.ApplicationCommand=2]="ApplicationCommand",e[e.MessageComponent=3]="MessageComponent"})(d||(d={}));function S(e,s,o,i){window.enmity.clyde.sendReply(e,s,o,i)}window.enmity.modules.common.Constants,window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native,window.enmity.modules.common.React,window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts,window.enmity.modules.common.Dialog;const B=window.enmity.modules.common.Token;window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking,window.enmity.modules.common.StyleSheet,window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;const R={id:"rick-command",name:"rickroll",displayName:"rickroll",description:"Rickroll someone",displayDescription:"Rickroll someone",type:n.Chat,inputType:t.BuiltInText,execute:async function(e,s){var o="https://www.youtube.com/watch?v=dQw4w9WgXcQ";return{content:"<"+o+">"}}},M={id:"favourite-gifs-command",name:"favourite-gifs",displayName:"favourite-gifs",description:"Get a list of your favourite gifs",displayDescription:"Get a list of your favourite gifs",type:n.Chat,inputType:t.BuiltInText,options:[{name:"pastebin-api-key",displayName:"pastebin-api-key",description:"Your pastebin API key",displayDescription:"Your pastebin API key",type:m.String,required:!0}],execute:async function(e,s){var o,i=B.getToken(),w=await fetch("https://discord.com/api/v9/users/@me/settings-proto/2",{method:"GET",credentials:"include",headers:{authorization:i}});let a=(await w.json()).settings.substring(0,400),l=new Buffer(a,"base64").toString("hex");var c=await fetch("https://pastebin.com/api/api_post.php",{method:"POST",body:new URLSearchParams({api_dev_key:e["pastebin-api-key"],api_option:"paste",api_paste_code:l,api_paste_private:"1",api_paste_name:"favourite-gifs"})}),g=await c.json();S((o=s==null?void 0:s.channel.id)!=null?o:"0","Your favourite gifs have been uploaded to pastebin: "+g)}},N=[R,M],_={...k,onStart(){this.commands=N},onStop(){this.commands=[]}};v(_);
