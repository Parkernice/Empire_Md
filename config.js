const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="efeurhobobullish@gmail.com"
global.location="Lagos/Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Lagos/Nigeria";
global.github=process.env.GITHUB|| "https://github.com/efeurhobo/Empire_Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VajVvpQIyPtUbYt3Oz0k";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VajVvpQIyPtUbYt3Oz0k" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/6ntq2i.jpg" || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "©by 𝐎𝐧𝐥𝐲_𝐨𝐧𝐞_🥇𝐄𝐦𝐩𝐢𝐫𝐞" 


global.devs = "2348078582627" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348078582627";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '2'   // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://files.catbox.moe/6ntq2i.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_09_10_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzksXG4gICAgICAgIDExOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjM2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODcsXG4gICAgICAgIDQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTc0LFxuICAgICAgICA4MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDg4LFxuICAgICAgICAxMixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjU0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDk4LFxuICAgICAgICA4MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDU2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMjM1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTIsXG4gICAgICAgIDIwLFxuICAgICAgICAzOSxcbiAgICAgICAgOCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDYyLFxuICAgICAgICAyNSxcbiAgICAgICAgNyxcbiAgICAgICAgMTMwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjksXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDkwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDgsXG4gICAgICAgIDY1LFxuICAgICAgICA2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDM4LFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTE3LFxuICAgICAgICA5NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMyxcbiAgICAgICAgNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMyxcbiAgICAgICAgODIsXG4gICAgICAgIDEzLFxuICAgICAgICA1MixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjksXG4gICAgICAgIDMyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQwLFxuICAgICAgICA3MCxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA2LFxuICAgICAgICA4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTIwLFxuICAgICAgICAxODksXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjAyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTI5LFxuICAgICAgICA2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3LFxuICAgICAgICA5MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQ4LFxuICAgICAgICA4MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNSxcbiAgICAgICAgMjksXG4gICAgICAgIDg3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzIsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRVkvNzRkRUc4UU9FY081NERWU1JKb1VnT1k1VzZxeVJLeFFnYUpWaE1paz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUFg5WHJhZ0pSMmVhYWNjX1lxTWRCd1wiLFxuICBcInBob25lSWRcIjogXCJmMzRiYjA1Ni1hNDQyLTQ2NjItYTQyZC0zODIyMzJhYzExOTlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNyxcbiAgICAgIDIyNixcbiAgICAgIDE4MSxcbiAgICAgIDEwNCxcbiAgICAgIDE3MixcbiAgICAgIDIxOSxcbiAgICAgIDQwLFxuICAgICAgMjIyLFxuICAgICAgMjIxLFxuICAgICAgMjI4LFxuICAgICAgNjYsXG4gICAgICAxMTAsXG4gICAgICAzOCxcbiAgICAgIDM4LFxuICAgICAgMTU5LFxuICAgICAgOTgsXG4gICAgICAyMjEsXG4gICAgICAwLFxuICAgICAgMjEzLFxuICAgICAgNzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI1LFxuICAgICAgNjgsXG4gICAgICAxOTAsXG4gICAgICAxOTMsXG4gICAgICAyMTAsXG4gICAgICAxMyxcbiAgICAgIDEzMixcbiAgICAgIDI0OCxcbiAgICAgIDE3OCxcbiAgICAgIDExMixcbiAgICAgIDEzNixcbiAgICAgIDExMyxcbiAgICAgIDIyNyxcbiAgICAgIDIyOCxcbiAgICAgIDI1LFxuICAgICAgMjM5LFxuICAgICAgNTYsXG4gICAgICAxNjIsXG4gICAgICAxODIsXG4gICAgICAxNjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiN1dCOTdOREFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxNjgwMjM3MDQ6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTM5NjgxMDEwMzQ4MjYzOjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3V1MEtFSEVJQ3MzcmdHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJpdzhJa2tTNGRUYXZNVVpDVkZKOGFOd0JmMXhQWC9iN3dyV2liZ2RFWVNZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjcvMjRzRStmZUEyY0NNSXBqVkloZFRzWElvRFZtdWZXN0FRenJZcitsREdPMUtKOGVlaGsvQWdsSTBCZzE4WEJWbzVXQmk5TXJMNmdCN29GWVRUd0NBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlhGMGVBelppY00wdmhqWXRXTkh2ZE1PeS9uU1pFYXZhSTFrWG12Ui9zb2lmVjJoTDJ3c2pwRmFxaW1OY1NoL2R6Nzl5ckEvRnB4eHJUVWYyRFE4UUN3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxNjgwMjM3MDQ6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDM4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjk1OTg5ODEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJNWVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUk1ZS5qc29uIjogIntcImtleURhdGFcIjpcInpqN3FTSElvU25HZWZHZk40NnZuTkEraURxQzdhUFVCNEI0aHkxS0hGUDA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk0OTU3MDkyMSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "©𝐎𝐧𝐥𝐲_𝐨𝐧𝐞_🥇𝐄𝐦𝐩𝐢𝐫𝐞" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ©𝐎𝐧𝐥𝐲_𝐨𝐧𝐞_🥇𝐄𝐦𝐩𝐢𝐫𝐞 』```", //*『sᴜʙsᴄʀɪʙᴇ • Empire_Md』*\n youtube.com/only_one_empire"),
 
  author : process.env.PACK_AUTHER|| "Empire_Md",
  packname: process.env.PACK_NAME || "Sticker by",
  botname : process.env.BOT_NAME  || "Empire_Md",
  ownername:process.env.OWNER_NAME|| "𝐎𝐧𝐥𝐲_𝐨𝐧𝐞_🥇𝐄𝐦𝐩𝐢𝐫𝐞",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "kUSnarK3Xxue73tRHxzrd9sb",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-c5_mjyTPg76Sl7gx6yADErKcLzUlfhs4KcNxFBFso4T3BlbkFJQpbBq0QN6CAr8ia7bqJmveKPTmentTE6guHxlLUnUA",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "sk_59adeb8a55b9c60aba5ed8b8001135049f773814fb35e722";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
