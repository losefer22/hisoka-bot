const dir = [
'https://telegra.ph/file/c1094944f7262a3fc5e05.mp4',
'https://telegra.ph/file/c75e2105df6f9e06c99fc.mp4',
'https://telegra.ph/file/c60ce32660fb039790338.mp4',
'https://telegra.ph/file/5380039619f266674afda.mp4',
'https://telegra.ph/file/260eaa48d793ca0ac43df.mp4',
'https://telegra.ph/file/ff77e44ebb37104712ffb.mp4'
];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dado.webp', '', m)
  await conn.sendMessage(m.chat, { react: { text: '📹', key: m.key } })
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['غوجو'] 
handler.limite = true 
export default handler
