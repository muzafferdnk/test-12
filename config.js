const config = {
  TOKEN: "", //Glitchde Kullanacak iseniz .env Dosyasına Tokeni Yazın!

  prefix: "!",
  guild: "919881098341810227", //Sunucu ID Yazın
  channel: "922950932977823784", //Başvuru Yap Mesajının Atılacağı Kanal ID Yazın

  log: {
    staff: "922951340446064681", //Başvuru Onaylayıp-Reddedecek Yetkili Rol ID Yazın!
    channel: "922950959288688673" //Başvuruların Loglanacağı Kanal ID Yazın
  },

  sonuc: {
    staffRole: ["922951340446064681"], //Sunucunuzdaki Başlangıç Yetkili Rolü veya Rolleri, Birden Fazla Rol Eklemek İçin ["rol id 1", "rol id2"] Başvuru Onaylanınca Buraya Yazılan Rol veya Roller Kullanıcıya Verilecek
    sRole: "919881167447130115", //Verilecek En Düşük Yetkili Rol ID Yazın
    successMessage: "EMS Başarılı Şekilde Alındınız Lütfen Bekleme Odasına Geciniz!", //Başvuru Onaylanınca Kullanıcıya Atılacak Mesajı Yazın
    deleteMessage: "Üzgünüm EMS Başvurun Reddedildi!", //Başvuru Reddedilince Kullanıcıya Atılacak Mesajı Yazın
    timeout: 20000 //Başvurusu Reddedilen Birisi Nekadar Süre Sonra Başvuru Yapa Bilsin? 1000=1 Saniye (Milisaniye Türünden Yazın)
  },

  embed: {
    title: "Başvuru Sistemi", //Başvuru Mesajı Başlık Kısmında Yazmasını İstediğiniz Şey
    color: "BLUE", //Embed Rengi, Örnek: BLUE,RED,YELLOW,GREEN Olarak veya Direkt #ff00ff Gibi Renk Kodu Yazın
    description: "EMS Başvurusu Yapa Bilmek İçin Lütfen Aşşağıdaki Butona Basınız!" //Başvuru Mesajı Açıklama Kısmında Yazmasını İstediğiniz Şey
  },

  sorular: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12",] //Sorulacak Sorular
};

module.exports = config;
