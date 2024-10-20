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


global.devs = "2349152768261" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349168023704";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_05_10_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODAsXG4gICAgICAgIDgyLFxuICAgICAgICA0NixcbiAgICAgICAgMTM4LFxuICAgICAgICA5MixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2LFxuICAgICAgICA0NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDUzLFxuICAgICAgICAyMSxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTgsXG4gICAgICAgIDQ4LFxuICAgICAgICA2MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTk3LFxuICAgICAgICA3NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExLFxuICAgICAgICAzMixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDksXG4gICAgICAgIDEzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDgyLFxuICAgICAgICA3MixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDk3LFxuICAgICAgICA1OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU3LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzQsXG4gICAgICAgIDUsXG4gICAgICAgIDk1LFxuICAgICAgICA5OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDksXG4gICAgICAgIDQwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAzNixcbiAgICAgICAgMTIxLFxuICAgICAgICAwLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDc5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOCxcbiAgICAgICAgMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjU0LFxuICAgICAgICA1MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDc4LFxuICAgICAgICA4OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDQzLFxuICAgICAgICAyOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDU3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjA0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDQwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0LFxuICAgICAgICA5OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTMsXG4gICAgICAgIDkyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTksXG4gICAgICAgIDk3LFxuICAgICAgICAyMixcbiAgICAgICAgMTM4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDkyLFxuICAgICAgICA5NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNixcbiAgICAgICAgNTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDk3LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTYyLFxuICAgICAgICA4LFxuICAgICAgICA5NSxcbiAgICAgICAgMjMyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTksXG4gICAgICAgIDU4LFxuICAgICAgICAxOTksXG4gICAgICAgIDc5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDY4LFxuICAgICAgICA4LFxuICAgICAgICA4NixcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiY2hjeFhaZHpaazl2bVVnakRncUNtNWZmTVQ5T2paMy9maDFJUlBCc1JFcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MTY4MDIzNzA0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFMjJFMTUwRjQ3ODBCQkVGQjE0MDk0Mzc4M0MzOTlFRVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3Mjk0NTQ3MzdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMUVYblJmTk1UQ3VOSWNaT3JrSU1Md1wiLFxuICBcInBob25lSWRcIjogXCIyZWQ2NjZkMi02MDhlLTQ5ZTAtYTk0My1jMjQwYjRhNzY0MjZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgwLFxuICAgICAgNDUsXG4gICAgICAyMTAsXG4gICAgICAyMTMsXG4gICAgICAxNzEsXG4gICAgICAyMDgsXG4gICAgICA2MCxcbiAgICAgIDEsXG4gICAgICAxMjgsXG4gICAgICA4NyxcbiAgICAgIDI1NCxcbiAgICAgIDEyNyxcbiAgICAgIDgzLFxuICAgICAgMTksXG4gICAgICAxMzMsXG4gICAgICAxNzQsXG4gICAgICAxMjIsXG4gICAgICA4MSxcbiAgICAgIDk1LFxuICAgICAgMTU1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNixcbiAgICAgIDY3LFxuICAgICAgMTM1LFxuICAgICAgMjUzLFxuICAgICAgMzMsXG4gICAgICAxNTksXG4gICAgICAyNTEsXG4gICAgICAxMDAsXG4gICAgICAyMzMsXG4gICAgICA2NyxcbiAgICAgIDU0LFxuICAgICAgMTg4LFxuICAgICAgMTIyLFxuICAgICAgMzAsXG4gICAgICAyNDksXG4gICAgICAyLFxuICAgICAgMTIxLFxuICAgICAgMTI0LFxuICAgICAgMTcsXG4gICAgICAyMDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUktOWE5FWTlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxNjgwMjM3MDQ6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTM5NjgxMDEwMzQ4MjYzOjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT211MEtFSEVJYkYxYmdHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJpdzhJa2tTNGRUYXZNVVpDVkZKOGFOd0JmMXhQWC9iN3dyV2liZ2RFWVNZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm5WU3pWMWNwcmZuR01JNnhkRm9BVGtnN2JYL1M0UzFlUXZxNUxMSmltTDBHUUJxbm5ZZkZGRE12TnB0NWZPdGdSVkdBZkhjN0VremN4U0xTT1NhQ0NBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk9BQURDcFM4Y2NvU2U3amFtaHZYbG5WbzFjM1ZkbkxzV3FGc256eTVtMlpuRGEvektEWkZ4ZEpnVlI1VkRlL1RPME1PVTFmeEdqUXdWbTVqbm9MUWpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxNjgwMjM3MDQ6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDM4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjk0NTQ3MzEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJNWVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUk1ZS5qc29uIjogIntcImtleURhdGFcIjpcInpqN3FTSElvU25HZWZHZk40NnZuTkEraURxQzdhUFVCNEI0aHkxS0hGUDA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk0OTU3MDkyMSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI5NDU0NTQwNjMzXCJ9Igp9"  // PUT your SESSION_ID 


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
