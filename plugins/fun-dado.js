let handler = async(m, { conn, text, args, usedPrefix, command }) => {
await conn.reply(m.chat, '*𝐄𝐒𝐏𝐄𝐑𝐄 𝐔𝐍 𝐌𝐎𝐌𝐄𝐍𝐓𝐎. 𝐄𝐋𝐀𝐁𝐎𝐑𝐀𝐍𝐃𝐎 𝐒𝐔 𝐃𝐀𝐃𝐎...*', m)
//conn.sendFile(m.chat, `https://violetics.pw/api/random/dadu?apikey=${Key360}`, 'sticker.webp', '', m, { asSticker: true })}
conn.sendFile(m.chat, `https://violetics.pw/api/random/dadu?apikey=${Key360}`,  m, {})}
handler.help = ['dado']
handler.tags = ['game'] 
handler.command = /^(dado|dados)/
handler.exp = 50
export default handler




































 /*import { sticker } from '../lib/sticker.js'
let handler = async(m, { conn }) => {
//if (!db.data.chats[m.chat].stickers && m.isGroup) throw `${ag}𝙇𝙊𝙎 𝘾𝙊𝙈𝘼𝙉𝘿𝙊𝙎 𝘿𝙀 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎 𝙀𝙎𝙏𝘼𝙉 𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝘼𝘿𝙊𝙎 𝙐𝙎𝙀 *#on stickers* 𝙋𝘼𝙍𝘼 𝘼𝘾𝙏𝙄𝙑𝘼𝙍\n\n𝙏𝙃𝙀 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎 𝘼𝙍𝙀 𝘿𝙄𝙎𝘼𝘽𝙇𝙀𝘿 𝙐𝙎𝙀 *#on stickers* 𝙏𝙊 𝙀𝙉𝘼𝘽𝙇𝙀`
if (!db.data.chats[m.chat].stickers && m.isGroup) throw 0
 
let nombre = '🐈 𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿'
let nombre2 = '𝙂𝙖𝙩𝙖 𝘿𝙞𝙤𝙨'
 
const s = [
'https://media.giphy.com/media/h5cY0X4NcHP2JiFXNG/giphy.gif',
'https://media.giphy.com/media/SSinJFA7xCih5g9F1c/giphy.gif',
'https://media.giphy.com/media/kBHH2rfm1VHIYgodQx/giphy.gif',
'https://media.giphy.com/media/UpDKR8EYG5zFtYhWNz/giphy.gif',
'https://media.giphy.com/media/h8mwX2Tt1R2oIOhszC/giphy.gif',
'https://media.giphy.com/media/iGeW8L2Pvzzbtf6jII/giphy.gif'

];  
 
let stiker = await sticker(null, s[Math.floor(Math.random() * s.length)], nombre, nombre2)
conn.sendFile(m.chat, stiker, null, { asSticker: true })
}
handler.help = ['dado']
handler.tags = ['game'] 
handler.command = /^(dado|dados)/
handler.exp = 50
export default handler */
