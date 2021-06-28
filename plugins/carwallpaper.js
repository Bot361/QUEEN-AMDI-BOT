/* Codded by @phaticusthiccy
Telegram: t.me/phaticusthiccy
Instagram: www.instagram.com/kyrie.baran

Special Thanks:
@Unique_hunter for Helps
*/

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'carwallpaper', fromMe: true, desc: Lang.WP}, (async (message, match) => {

        var r_text = new Array ();

        r_text[0] = "https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg";
    r_text[1] = "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg";
    r_text[2] = "https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg";
    r_text[3] = "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg";
    r_text[4] = "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg";
    r_text[5] = "https://images.pexels.com/photos/88630/pexels-photo-88630.jpeg";
    r_text[6] = "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg";
    r_text[7] = "https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg";
    r_text[8] = "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg";
    r_text[9] = "https://images.pexels.com/photos/168938/pexels-photo-168938.jpeg";
    r_text[10] = "https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg";
    r_text[11] = "https://images.pexels.com/photos/39501/lamborghini-brno-racing-car-automobiles-39501.jpeg";
    r_text[12] = "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg";
    r_text[13] = "https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg";
    r_text[14] = "https://images.pexels.com/photos/712618/pexels-photo-712618.jpeg";
    r_text[15] = "https://images.pexels.com/photos/977003/pexels-photo-977003.jpeg";
    r_text[16] = "https://images.pexels.com/photos/2050244/pexels-photo-2050244.jpeg";
    r_text[17] = "https://images.pexels.com/photos/2539244/pexels-photo-2539244.jpeg";
    r_text[18] = "https://images.pexels.com/photos/1637859/pexels-photo-1637859.jpeg";
    r_text[19] = "https://images.pexels.com/photos/12801/pexels-photo-12801.jpeg";
    r_text[20] = "https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg";
    r_text[21] = "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg";
    r_text[22] = "https://images.pexels.com/photos/1534604/pexels-photo-1534604.jpeg";
    r_text[23] = "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg";
    r_text[24] = "https://images.pexels.com/photos/627678/pexels-photo-627678.jpeg";
    r_text[25] = "https://images.pexels.com/photos/761815/pexels-photo-761815.jpeg";
    r_text[26] = "https://images.pexels.com/photos/207353/pexels-photo-207353.jpeg";
    r_text[27] = "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg";
    r_text[28] = "https://images.pexels.com/photos/18296/pexels-photo.jpg";
    r_text[29] = "https://www.hdcarwallpapers.com/thumbs/2021/bentley_bentayga_v8_first_edition_2021_4k_4-t1.jpg";
    r_text[30] = "https://www.hdcarwallpapers.com/thumbs/2021/porsche_911_gt3_70_years_porsche_australia_edition_2021_4k_5-t1.jpg";
    r_text[31] = "https://www.hdcarwallpapers.com/thumbs/2021/techart_porsche_gtstreet_r_2021_4k_5-t1.jpg";
    r_text[32] = "https://www.hdcarwallpapers.com/thumbs/2021/porsche_911_speedster_heritage-t1.jpg";
    r_text[33] = "https://www.hdcarwallpapers.com/thumbs/2021/porsche_911_gt3_touring_2021_5k-t1.jpg";
    r_text[34] = "https://www.hdcarwallpapers.com/thumbs/2021/techart_porsche_gtstreet_r_2021_4k_3-t1.jpg";
    r_text[35] = "https://www.hdcarwallpapers.com/thumbs/2021/porsche_911_gt3_touring_2021_5k_4-t1.jpg";
    r_text[36] = "https://www.hdcarwallpapers.com/thumbs/2021/porsche_911_speedster_heritage_2-t1.jpg";
    r_text[37] = "https://www.hdcarwallpapers.com/thumbs/2021/porsche_911_gt3_70_years_porsche_australia_edition_2021_4k-t1.jpg";
    r_text[38] = "https://www.hdcarwallpapers.com/thumbs/2021/porsche_911_gt3_touring_2021_5k_interior-t1.jpg";
    r_text[39] = "https://www.hdcarwallpapers.com/thumbs/2021/mclaren_artura_2021_4k_8k_2-t1.jpg";
    r_text[40] = "https://www.hdcarwallpapers.com/thumbs/2021/audi_rs6_avant_4k_2-t1.jpg";
    r_text[41] = "https://www.hdcarwallpapers.com/thumbs/2021/audi_sq8_tfsi_2021_5k_2-t1.jpg";
    r_text[42] = "https://www.hdcarwallpapers.com/thumbs/2021/bmw_8_series_cabrio_edition_haute_couture_2021_5k-t1.jpg";
    r_text[43] = "https://www.hdcarwallpapers.com/thumbs/2021/audi_rs6_avant_4k-t1.jpg";
    r_text[44] = "https://www.hdcarwallpapers.com/thumbs/2021/bmw_m3_competition_2021_5k_6-t1.jpg";
    r_text[45] = "https://www.hdcarwallpapers.com/thumbs/2021/mini_cooper_s_cabrio_2021_4k-t1.jpg";
    r_text[46] = "https://www.hdcarwallpapers.com/thumbs/2021/bugatti_divo_4k_4-t1.jpg";
    r_text[47] = "https://www.hdcarwallpapers.com/thumbs/2021/bugatti_chiron_vision_gt_4k_3-t1.jpg";
    r_text[48] = "https://www.hdcarwallpapers.com/thumbs/2021/bugatti_chiron_vision_gt_4k_2-t1.jpg";
    r_text[49] = "https://www.hdcarwallpapers.com/thumbs/2021/acura_nsx_4k_6-t1.jpg";
    r_text[50] = "https://www.hdcarwallpapers.com/thumbs/2021/brabus_900_rocket_edition_2021_4k-t1.jpg";
    r_text[51] = "https://www.hdcarwallpapers.com/thumbs/2021/lamborghini_aventador_4k_10-t1.jpg";
        var i = Math.floor(621*Math.random())

        var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'carwallpaper', fromMe: false, desc: Lang.WP}, (async (message, match) => {

        var r_text = new Array ();

        r_text[0] = "https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg";
        r_text[1] = "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg";
        r_text[2] = "https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg";
        r_text[3] = "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg";
        r_text[4] = "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg";
        r_text[5] = "https://images.pexels.com/photos/88630/pexels-photo-88630.jpeg";
        r_text[6] = "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg";
        r_text[7] = "https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg";
        r_text[8] = "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg";
        r_text[9] = "https://images.pexels.com/photos/168938/pexels-photo-168938.jpeg";
        r_text[10] = "https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg";
        r_text[11] = "https://images.pexels.com/photos/39501/lamborghini-brno-racing-car-automobiles-39501.jpeg";
        r_text[12] = "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg";
        r_text[13] = "https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg";
        r_text[14] = "https://images.pexels.com/photos/712618/pexels-photo-712618.jpeg";
        r_text[15] = "https://images.pexels.com/photos/977003/pexels-photo-977003.jpeg";
        r_text[16] = "https://images.pexels.com/photos/2050244/pexels-photo-2050244.jpeg";
        r_text[17] = "https://images.pexels.com/photos/2539244/pexels-photo-2539244.jpeg";
        r_text[18] = "https://images.pexels.com/photos/1637859/pexels-photo-1637859.jpeg";
        r_text[19] = "https://images.pexels.com/photos/12801/pexels-photo-12801.jpeg";
        r_text[20] = "https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg";
        r_text[21] = "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg";
        r_text[22] = "https://images.pexels.com/photos/1534604/pexels-photo-1534604.jpeg";
        r_text[23] = "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg";
        r_text[24] = "https://images.pexels.com/photos/627678/pexels-photo-627678.jpeg";
        r_text[25] = "https://images.pexels.com/photos/761815/pexels-photo-761815.jpeg";
        r_text[26] = "https://images.pexels.com/photos/207353/pexels-photo-207353.jpeg";
        r_text[27] = "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg";
        r_text[28] = "https://images.pexels.com/photos/18296/pexels-photo.jpg";
        r_text[29] = "https://www.hdcarwallpapers.com/thumbs/2021/bentley_bentayga_v8_first_edition_2021_4k_4-t1.jpg";
        r_text[30] = "https://www.hdcarwallpapers.com/thumbs/2021/porsche_911_gt3_70_years_porsche_australia_edition_2021_4k_5-t1.jpg";
        r_text[31] = "https://www.hdcarwallpapers.com/thumbs/2021/techart_porsche_gtstreet_r_2021_4k_5-t1.jpg";
        r_text[32] = "https://www.hdcarwallpapers.com/thumbs/2021/porsche_911_speedster_heritage-t1.jpg";
        r_text[33] = "https://www.hdcarwallpapers.com/thumbs/2021/porsche_911_gt3_touring_2021_5k-t1.jpg";
        r_text[34] = "https://www.hdcarwallpapers.com/thumbs/2021/techart_porsche_gtstreet_r_2021_4k_3-t1.jpg";
        r_text[35] = "https://www.hdcarwallpapers.com/thumbs/2021/porsche_911_gt3_touring_2021_5k_4-t1.jpg";
        r_text[36] = "https://www.hdcarwallpapers.com/thumbs/2021/porsche_911_speedster_heritage_2-t1.jpg";
        r_text[37] = "https://www.hdcarwallpapers.com/thumbs/2021/porsche_911_gt3_70_years_porsche_australia_edition_2021_4k-t1.jpg";
        r_text[38] = "https://www.hdcarwallpapers.com/thumbs/2021/porsche_911_gt3_touring_2021_5k_interior-t1.jpg";
        r_text[39] = "https://www.hdcarwallpapers.com/thumbs/2021/mclaren_artura_2021_4k_8k_2-t1.jpg";
        r_text[40] = "https://www.hdcarwallpapers.com/thumbs/2021/audi_rs6_avant_4k_2-t1.jpg";
        r_text[41] = "https://www.hdcarwallpapers.com/thumbs/2021/audi_sq8_tfsi_2021_5k_2-t1.jpg";
        r_text[42] = "https://www.hdcarwallpapers.com/thumbs/2021/bmw_8_series_cabrio_edition_haute_couture_2021_5k-t1.jpg";
        r_text[43] = "https://www.hdcarwallpapers.com/thumbs/2021/audi_rs6_avant_4k-t1.jpg";
        r_text[44] = "https://www.hdcarwallpapers.com/thumbs/2021/bmw_m3_competition_2021_5k_6-t1.jpg";
        r_text[45] = "https://www.hdcarwallpapers.com/thumbs/2021/mini_cooper_s_cabrio_2021_4k-t1.jpg";
        r_text[46] = "https://www.hdcarwallpapers.com/thumbs/2021/bugatti_divo_4k_4-t1.jpg";
        r_text[47] = "https://www.hdcarwallpapers.com/thumbs/2021/bugatti_chiron_vision_gt_4k_3-t1.jpg";
        r_text[48] = "https://www.hdcarwallpapers.com/thumbs/2021/bugatti_chiron_vision_gt_4k_2-t1.jpg";
        r_text[49] = "https://www.hdcarwallpapers.com/thumbs/2021/acura_nsx_4k_6-t1.jpg";
        r_text[50] = "https://www.hdcarwallpapers.com/thumbs/2021/brabus_900_rocket_edition_2021_4k-t1.jpg";
        r_text[51] = "https://www.hdcarwallpapers.com/thumbs/2021/lamborghini_aventador_4k_10-t1.jpg";
        var i = Math.floor(621*Math.random())

        var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));
}
