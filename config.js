const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb://${{MONGO_INITDB_ROOT_USERNAME}}:${{MONGO_INITDB_ROOT_PASSWORD}}@${{RAILWAY_TCP_PROXY_DOMAIN}}:${{RAILWAY_TCP_PROXY_PORT}}"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_02_10_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTMxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDM4LFxuICAgICAgICAyNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDI4LFxuICAgICAgICA5MixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDgwLFxuICAgICAgICAxODAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMwLFxuICAgICAgICAxODEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDMxLFxuICAgICAgICA1NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODksXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDM0LFxuICAgICAgICA0NixcbiAgICAgICAgMjA2LFxuICAgICAgICA0NixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDkyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDY2LFxuICAgICAgICAxODUsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDQ1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTE0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTc3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjksXG4gICAgICAgIDI0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDM1LFxuICAgICAgICA1MixcbiAgICAgICAgMTgxLFxuICAgICAgICA3MSxcbiAgICAgICAgMjE0LFxuICAgICAgICA2MCxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTgwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAzNCxcbiAgICAgICAgODEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgODEsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgNSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTYsXG4gICAgICAgIDE3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQzLFxuICAgICAgICA3OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMixcbiAgICAgICAgNTYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTksXG4gICAgICAgIDIxMixcbiAgICAgICAgMjU0LFxuICAgICAgICA3MixcbiAgICAgICAgNTIsXG4gICAgICAgIDM0LFxuICAgICAgICA3LFxuICAgICAgICA0NSxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjI4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDg4LFxuICAgICAgICA3LFxuICAgICAgICA3NixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDM2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTgyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTQxLFxuICAgICAgICA4NixcbiAgICAgICAgMjYsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjA3LFxuICAgICAgICAxODIsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQ5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODAsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTE5LFxuICAgICAgICA5NSxcbiAgICAgICAgMjIyLFxuICAgICAgICA0LFxuICAgICAgICAzOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlBsdVppVWRnQXNCd2l5QzhxcVAyQkc0ck9SYnVXSXc2RTZqUlgxU3ByUG89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkZUVi0wMGtkU25DaUowQzV5RE1ibmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDgzYWJjMjgtMWNkZi00MDlkLThhNjMtNTNjOWY5NjY2YmMxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU3LFxuICAgICAgOTAsXG4gICAgICAyMDksXG4gICAgICAxNTYsXG4gICAgICAxNSxcbiAgICAgIDc3LFxuICAgICAgMTQ4LFxuICAgICAgMTY0LFxuICAgICAgMjM4LFxuICAgICAgMTc5LFxuICAgICAgMTQ3LFxuICAgICAgMjQ4LFxuICAgICAgNjYsXG4gICAgICAxNjUsXG4gICAgICAxMjgsXG4gICAgICAxODIsXG4gICAgICAxNjQsXG4gICAgICAxMjMsXG4gICAgICAyMzEsXG4gICAgICAxMDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg2LFxuICAgICAgMTMxLFxuICAgICAgMjAwLFxuICAgICAgMjQwLFxuICAgICAgMjIsXG4gICAgICA5LFxuICAgICAgMjQ3LFxuICAgICAgMTIzLFxuICAgICAgMyxcbiAgICAgIDgzLFxuICAgICAgNTksXG4gICAgICAxMzgsXG4gICAgICAxMzEsXG4gICAgICAxMjUsXG4gICAgICA4NSxcbiAgICAgIDI0MCxcbiAgICAgIDI0OCxcbiAgICAgIDcwLFxuICAgICAgOTAsXG4gICAgICAxODdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWVNRUkFIQ0ZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2Mzc4NDgxODYzOTo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwic2NhbiBteSBuYW1lXCIsXG4gICAgXCJsaWRcIjogXCIyODc1NTQyNjg0NDc3NTo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05YTXZQTUJFTlNyK3JjR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibEFFTHNMWmZaMVI3NDQwenBjRUpPT2pMd1ZRbDJxYVIyQTN3cENpcnlYMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJPMm44dHJWZk1WV2xuTk5TMXRWUWp0QmlIcEpyQkhpZXU4N2k0NFBOMFB0K1JMUDg5eUh6aUZiYzZMU0dvL0RjakpWOTZYV25uU0pCZWJzaGVsUjlDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJHejJnd3hteE5vQ3hnUHFiVndDemJuZEpDQVA1dC9qb1czem94NHN4bFRlS1JnUk1wRW45OWpKNVZGL21ZWWZPbUQyd1dUVi9sVnFQVWxNd1RHODJCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3ODQ4MTg2Mzk6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI3OTYwNTM3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR0RRXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHRFEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ6R3F6bGRoS28yY3pHaTNtWUlMR3hCN2lvVzZjMGJlMVFuTVYxOUxHK0pnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjUxMDYwMDc4OCxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyNzk2MDQ3MDA5OFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


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
