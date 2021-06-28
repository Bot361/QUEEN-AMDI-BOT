const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');
const fs = require('fs');
const axios = require('axios');
const { errorMessage, infoMessage } = require('../helpers');
const IG_DESC = "Instagram වෙතින් රූපය / වීඩියෝ බාගන්න"
const NEED_WORD = "Must Enter a link"
const FBDESC = "ෆේස්බුක් වෙතින් වීඩියෝ බාගත කරයි"
const LOADING = "වීඩියෝ බාගත කිරීම..."
const NOT_FOUNDFB = "වීඩියෝව හමු නොවීය"
const CAPTION = "Caption"

Asena.addCommand({ pattern: 'ig ?(!*)', fromMe: false, desc: IG_DESC}, async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage(NEED_WORD))

    await message.sendMessage(infoMessage("Post බාගත කිරීම..."))

    await axios
      .get(`https://api.zeks.xyz/api/ig?apikey=fHZpP3j61LgH80BzanBm92jch1Q&url=${userName}`)
      .then(async (response) => {
        const {
          url,
          type,
        } = response.data.result[0]

        const profileBuffer = await axios.get(url, {responseType: 'arraybuffer'})

        const msg = `${type}`

	 if (msg === 'jpg') { await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {quoted: message.data}, {
          caption: "▁ ▂ ▄ ▅ ▆ ▇ █ Godziila Bot by Punsith █ ▇ ▆ ▅ ▄ ▂ ▁"
        })}
		 	 
	if (msg === 'mp4') { await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {quoted: message.data}, {
          caption: "▁ ▂ ▄ ▅ ▆ ▇ █ Godziila Bot by Punsith █ ▇ ▆ ▅ ▄ ▂ ▁"
        })}
	
        
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage("කරුණාකර වලංගු Instagram link ඇතුළත් කරන්න")),
      )
  },
)




Asena.addCommand({ pattern: 'fb ?(!*)', fromMe: false, desc: FBDESC }, async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage(NEED_WORD))

    await message.sendMessage(infoMessage(LOADING))

    await axios
      .get(`https://lolhuman.herokuapp.com/api/facebook2?apikey=e1ee2b3d3b00e58f2511ad95&url=${userName}`)
      .then(async (response) => {
        const {
          result,
          message,
        } = response.data.result

        const profileBuffer = await axios.get(result, {responseType: 'arraybuffer'})

        const msg = `*${CAPTION}*: ${message}`

        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {quoted: message.data}, {
          caption: "▁ ▂ ▄ ▅ ▆ ▇ █ Godziila Bot by Punsith █ ▇ ▆ ▅ ▄ ▂ ▁"
        })
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage(NOT_FOUNDFB )),
      )
  },
)
