import fetch from 'node-fetch'
import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
try {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let grupos = [nna, nn, nnn, nnnt, nnntt, nnnttt]
let gata = [img5, img6, img7, img8, img9]
let enlace = { contextInfo: { externalAdReply: {title: wm + ' š', body: 'support group' , sourceUrl: grupos.getRandom(), thumbnail: await(await fetch(gata.getRandom())).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: 'š» š¦šš½š²šæ šš®šš®šš¼š-š š - šŖšµš®šššš½š½ ', thumbnailUrl: await(await fetch(img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]

if (!text) throw `${lenguajeGB['smsAvisoMG']()}ššš¾ššš½š¼ šš šššš½šš š šššššš\nššššššš\n*${usedPrefix + command} Billie Eilish - Bellyache*\n\nššššš ššš šš¼šš šš ššššš\nššš¼šššš\n*${usedPrefix + command} Billie Eilish - Bellyache*`
let vid = (await youtubeSearch(text)).video[0]
if (!vid) throw `${lenguajeGB['smsAvisoFG']()}šš šš šššæš ššš¾ššššš¼š šš š¼ššæšš/šššæšš. ššššššš š¾šš šššš šššš½šš š šššššš\n\nššš š¼ššæšš/šššæšš š¾ššššæ ššš š½š šššššæ. ššš š¼šššššš šš¼šš šš ššššš`
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const url = 'https://www.youtube.com/watch?v=' + videoId
 
await conn.sendButton(m.chat, wm, `*š© š  šŖ ā§āāā ${vs} āāāā§ š© š  šŖ*

ą¦ šššššš | ššššš
Ā» ${title}
ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹
ą¦ šæššš¾šššš¾ššš | šæššš¾ššššššš
Ā» ${description}
ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹
ą¦ ššš½ššš¾š¼šæš | ššš½ššššššæ
Ā» ${publishedTime}
ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹
ą¦ šæššš¼š¾ššš | šæššš¼šššš
Ā» ${durationH}
ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹
ą¦ ššššš¼š | ššššš
Ā» ${viewH}
ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹ļ¹
ą¦ ššš
Ā» ${url}

*š© š  šŖ ā§āāā ${vs} āāāā§ š© š  šŖ*`, thumbnail, [['š  š š” šØ āļø', '/menu']], m, dos.getRandom())
  
const sections = [{
title: comienzo + ' š” š§šš£š¢š¦ šš ššš¦ššš„ššš¦ ' + fin,
rows: [
{title: "š  š šØ š š š¢ (Opcion 1)", rowId: `${usedPrefix}yta ${url}`, description: `${title}\n`},
{title: "š  š šØ š š š¢ (Opcion 2)", rowId: `${usedPrefix}play.1 ${url}`, description: `${title}\n`},
{title: "š  š šØ š š š¢   š š¢ š", rowId: `${usedPrefix}pdocaudio ${url}`, description: `${title}\n`},
{title: "š  š© š š š š¢ (Opcion 1)", rowId: `${usedPrefix}ytv ${url}`, description: `${title}\n`},
{title: "š  š© š š š š¢ (Opcion 2)", rowId: `${usedPrefix}play.2 ${url}`, description: `${title}\n`},
{title: "š  š© š š š š¢   š š¢ š", rowId: `${usedPrefix}pdocvieo ${url}`, description: `${title}\n`}
]},{
title: comienzo + ' š ššØš¦š¤šØššš šš©šš”š­ššš ' + fin,
rows: [
{title: "š  š  š š¦   š„ š š¦ šØ š š§ š š š¢ š¦", rowId: `${usedPrefix}ytsearch ${text}`}
]}]

const listMessage = {
  text: `*ššššš¼ ššš šš¼ šš¼š¾šš š¾šš  ${text}*`,
  footer: global.wm,
  title: `${htki} *ā»ļø šæššš¾š¼ššš¼š* ${htka}`,
  buttonText: `š ššššššš š`,
  sections
}

await conn.sendMessage(m.chat, listMessage, {quoted: fkontak})
} catch {
try {
let vid2 = await (await fetch(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkeysapi}&query=${text}`)).json()
let { videoId, title, views, published, thumbnail } = await vid2.result[0]
const url = 'https://www.youtube.com/watch?v=' + videoId
let ytLink = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`)
let jsonn = await ytLink.json()
let aud = await jsonn.result.audio
let capt = `ą¦ šššššš | ššššš: ${title}\ną¦ ššš½ššš¾š¼šæš | ššš½ššššššæ: ${published}\ną¦ ššššš¼š | ššššš: ${views}`
const buttons = [{buttonId: `#playlist ${title}`, buttonText: {displayText: 'š  š  š š¦   š„ š š¦ šØ š š§ š š š¢ š¦'}, type: 1}]
const buttonMessage = { image: {url: thumbnail}, caption: capt, footer: '*į“É“į“ ÉŖį“É“į“į“ į“į“į“ÉŖį“, į“É¢į“į“Źį“į“ į“É“ į“į“į“į“É“į“į“...*', buttons: buttons, headerType: 4 }
let msg = await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
conn.sendMessage(m.chat, { audio: { url: aud }, mimetype: 'audio/mp4', fileName: `${title}.mp3`}, {quoted: msg})
} catch {  
throw 'ā°ā±āļøā± *ACCIĆN MAL USADA* ā±āļøā±ā®\n\nššš¾ššš½š¼ šš šššš½šš š šššššš\nššššššš\n*/play Billie Eilish - Bellyache*\n\nššššš ššš šš¼šš šš ššššš\nššš¼šššš\n*/play2 Billie Eilish - Bellyache*'}}}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i
export default handler
