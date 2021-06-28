const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const request = require('request');
const got = require("got");
const Config = require('../config');
const SPDF_DESC = "වෙබ් අඩවියක් PDF බවට පරිවර්තනය කරයි"
const SPDF_PROC = "```වෙබ් අඩවිය PDF බවට පරිවර්තනය කිරීම```"
const SPDF_LINK = "*URL එකක් ඇතුළත් කළ යුතුය*"

Asena.addCommand({pattern: 'spdf ?(!*)', fromMe: false, desc: SPDF_DESC }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(SPDF_LINK);

    var webimage = await axios.get(`https://api.html2pdf.app/v1/generate?url=${match[1]}&apiKey=begC4dFAup1b8LyRXxAfjetfqDg2uYx8PWmh9YJ59tTZXiUyh2Vs72HdYQB68vyc`, { responseType: 'arraybuffer' })

    await message.sendMessage(SPDF_PROC);

    await message.sendMessage(Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})

}));   
