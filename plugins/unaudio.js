/* Copyright (C) 2020 TOXIC DEVIL

CODDED BY TOXIC DEVIL

Licensed under the  GPL-3.0 License;

you may not use this file except in compliance with the License.
WhatsAsenaPublic - TOXIC DEVIL

*/

const Asena = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');
const cwebp = require('cwebp-bin');
const Config = require('../config');

// List
const UA_DESC = "ශබ්ද පටිගත කිරීම ශ්‍රව්‍ය ගොනුවකට පරිවර්තනය කරයි."
const UA_NEEDREPLY = "*ශබ්ද පටිගත කිරීමකට පිළිතුරු දිය යුතුය*"
const UA_PROC = "```ශබ්ද පටිගත කිරීම ශ්‍රව්‍ය ගොනුවකට පරිවර්තනය කිරීම```"

    Asena.addCommand({pattern: 'unaudio', fromMe: true, desc: UA_DESC}, (async (message, match) => {    

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        if (message.reply_message === false) return await message.client.sendMessage(message.jid, UA_NEEDREPLY, MessageType.text);
        var downloading = await message.client.sendMessage(message.jid,UA_PROC,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .withNoVideo()
            .save('output.mp3')
            .on('end', async () => {
                await message.client.sendMessage(message.jid, fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
