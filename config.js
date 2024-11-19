const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="efeurhobobullish@gmail.com"
global.location="Africa/Lagos."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/efeurhobo/Empire_Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VajVvpQIyPtUbYt3Oz0k";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VajVvpQIyPtUbYt3Oz0k" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/6ntq2i.jpg" || "https://github.com/efeurhobo/Empire_Md-main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "® 𝐻𝑎𝑐𝑘𝑒𝑟 𝑂𝑛𝑙𝑦_𝑜𝑛𝑒_🥇𝐸𝑚𝑝𝑖𝑟𝑒" 


global.devs = "2348078582627" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348078582627";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://files.catbox.moe/6ntq2i.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_51_11_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI5LFxuICAgICAgICAxODQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDM1LFxuICAgICAgICAzMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDgzLFxuICAgICAgICA2MixcbiAgICAgICAgMjE0LFxuICAgICAgICA0MCxcbiAgICAgICAgMjU0LFxuICAgICAgICA5OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTIyLFxuICAgICAgICA3NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTc3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwMixcbiAgICAgICAgODYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDc5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTgzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzQsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDMzLFxuICAgICAgICAyMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzksXG4gICAgICAgIDM0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwLFxuICAgICAgICA1OCxcbiAgICAgICAgMjM0LFxuICAgICAgICA1MixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTI0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDc2LFxuICAgICAgICAzOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwMixcbiAgICAgICAgOSxcbiAgICAgICAgMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgOTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgODAsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMixcbiAgICAgICAgMzksXG4gICAgICAgIDExOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTg3LFxuICAgICAgICA3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODMsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OSxcbiAgICAgICAgNSxcbiAgICAgICAgMTMxLFxuICAgICAgICA0NixcbiAgICAgICAgMTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTUyLFxuICAgICAgICA4MixcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDU0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjI0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNjlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODksXG4gICAgICAgIDIxLFxuICAgICAgICA1OSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODUsXG4gICAgICAgIDAsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjksXG4gICAgICAgIDU2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjEsXG4gICAgICAgIDUwLFxuICAgICAgICA3OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDkyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTA3LFxuICAgICAgICA4MixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzksXG4gICAgICAgIDE5NixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTgzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTAsXG4gICAgICAgIDY2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTI3LFxuICAgICAgICA1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjE3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTMzLFxuICBcImFkdlNlY3JldEtleVwiOiBcInIrMXBxTTk3bG95Z29wSzlINDVqcGtvWHlja0NuUlFoczRHQkdCQUNFdGs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlVxVzNaMzZQUVRlbVdXVUhoYW5BR3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzBlZTJmYWMtMGIwOS00YjAyLWJiMDgtMmFjZTQ4NWMxOWI5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc1LFxuICAgICAgMjIyLFxuICAgICAgMixcbiAgICAgIDIyNyxcbiAgICAgIDg1LFxuICAgICAgMTIzLFxuICAgICAgMTE0LFxuICAgICAgMjM4LFxuICAgICAgMjUxLFxuICAgICAgMTk0LFxuICAgICAgNjYsXG4gICAgICAyMzgsXG4gICAgICA1MixcbiAgICAgIDIzNSxcbiAgICAgIDEzOSxcbiAgICAgIDE5NyxcbiAgICAgIDIwNixcbiAgICAgIDU1LFxuICAgICAgNzksXG4gICAgICA2M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzAsXG4gICAgICAxNjgsXG4gICAgICAxMDEsXG4gICAgICAyMDUsXG4gICAgICAzMyxcbiAgICAgIDc4LFxuICAgICAgMzUsXG4gICAgICA3OSxcbiAgICAgIDE0NixcbiAgICAgIDIxMSxcbiAgICAgIDI1MCxcbiAgICAgIDIyMixcbiAgICAgIDE1MyxcbiAgICAgIDg2LFxuICAgICAgMzksXG4gICAgICA1NyxcbiAgICAgIDE4MSxcbiAgICAgIDE3NyxcbiAgICAgIDE2MCxcbiAgICAgIDUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkE2WlY4Tk5CXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTY4MDIzNzA0OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEzOTY4MTAxMDM0ODI2Mzo3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ095dTBLRUhFTld2OHJrR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaXc4SWtrUzRkVGF2TVVaQ1ZGSjhhTndCZjF4UFgvYjd3cldpYmdkRVlTWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJqRDRDYmRmem4xSGJ1Qis5NEtRZmRkbVk3RUF0TktzZHBEZWhpOFdDZC9zdGlOOW4rTWtDRXdDZGZjQng3ZjBrcjNUb1JZcTJ2Ylh6Q2RiSitEcnBDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJZUFEzandpNEhtbzdTWVMrTFFDSjZnRXRGUHdpcnZFbm9mV0p6WUh6SFlINUd2eVFmaEh0UnZicWd0a0ZFazNqeDVEYXdLOG9UTmU0c1lacTBsRU5EUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTY4MDIzNzA0OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAzOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMyMDI0MjgyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSTVtXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJNW0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIwZWlGNWxGVHNGZW12bjMxV05GejFZOXQveFZqdzlCRC9nbkd0QkYwbjA4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5NDk1NzA5MjQsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMDU2MzY2MjkwNFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "® 𝐻𝑎𝑐𝑘𝑒𝑟 𝑂𝑛𝑙𝑦_𝑜𝑛𝑒_🥇𝐸𝑚𝑝𝑖𝑟𝑒" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝐻𝑎𝑐𝑘𝑒𝑟 𝑂𝑛𝑙𝑦_𝑜𝑛𝑒_🥇𝐸𝑚𝑝𝑖𝑟𝑒 ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • 𝐻𝑎𝑐𝑘𝑒𝑟 𝑂𝑛𝑙𝑦_𝑜𝑛𝑒_🥇𝐸𝑚𝑝𝑖𝑟𝑒 𝐶ℎ𝑎𝑛𝑛𝑒𝑙』*\n youtube.com/@only_one_empire"),
 
  author : process.env.PACK_AUTHER|| "𝐻𝑎𝑐𝑘𝑒𝑟 𝑂𝑛𝑙𝑦_𝑜𝑛𝑒_🥇𝐸𝑚𝑝𝑖𝑟𝑒",
  packname: process.env.PACK_NAME || "Sticker by",
  botname : process.env.BOT_NAME  || "Empire_Md",
  ownername:process.env.OWNER_NAME|| "𝐻𝑎𝑐𝑘𝑒𝑟 𝑂𝑛𝑙𝑦_𝑜𝑛𝑒_🥇𝐸𝑚𝑝𝑖𝑟𝑒",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
