function b(r){window.enmity.plugins.registerPlugin(r)}var k="RickAstley",f="1.0.0",w="Command to rick roll people.",M=[{name:"!Kevin!",id:"200901302094528512"}],R={name:k,version:f,description:w,authors:M},u;(function(r){r[r.BuiltIn=0]="BuiltIn",r[r.Guild=1]="Guild",r[r.DM=2]="DM"})(u||(u={}));var s;(function(r){r[r.Chat=1]="Chat",r[r.User=2]="User",r[r.Message=3]="Message"})(s||(s={}));var e;(function(r){r[r.BuiltIn=0]="BuiltIn",r[r.BuiltInText=1]="BuiltInText",r[r.BuiltInIntegration=2]="BuiltInIntegration",r[r.Bot=3]="Bot",r[r.Placeholder=4]="Placeholder"})(e||(e={}));var g;(function(r){r[r.Role=1]="Role",r[r.User=2]="User"})(g||(g={}));var v;(function(r){r[r.SubCommand=1]="SubCommand",r[r.SubCommandGroup=2]="SubCommandGroup",r[r.String=3]="String",r[r.Integer=4]="Integer",r[r.Boolean=5]="Boolean",r[r.User=6]="User",r[r.Channel=7]="Channel",r[r.Role=8]="Role",r[r.Mentionnable=9]="Mentionnable",r[r.Number=10]="Number",r[r.Attachment=11]="Attachment"})(v||(v={}));var h;(function(r){r[r.ApplicationCommand=2]="ApplicationCommand",r[r.MessageComponent=3]="MessageComponent"})(h||(h={}));const l={id:"rick-command",name:"rickroll",displayName:"rickroll",description:"Rickroll someone",displayDescription:"Rickroll someone",type:s.Chat,inputType:e.BuiltInText,execute:async function(r,G){var B="<https://www.youtube.com/watch?v=dQw4w9WgXcQ>";return{content:B}}},U=[l],x={...R,onStart(){this.commands=U},onStop(){this.commands=[]}};b(x);
