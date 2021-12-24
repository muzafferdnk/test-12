const config = {
  TOKEN: "", //Glitchde Kullanacak iseniz .env Dosyasına Tokeni Yazın!

  prefix: "!",
  guild: "919636953664724993", //Sunucu ID Yazın
  channel: "923286168475414579", //Başvuru Yap Mesajının Atılacağı Kanal ID Yazın

  log: {
    staff: "919661955130740766", //Başvuru Onaylayıp-Reddedecek Yetkili Rol ID Yazın!
    channel: "919962437560713287" //Başvuruların Loglanacağı Kanal ID Yazın
  },

  sonuc: {
    staffRole: ["919636953664724998", "919660230701371472"], //Sunucunuzdaki Başlangıç Yetkili Rolü veya Rolleri, Birden Fazla Rol Eklemek İçin ["rol id 1", "rol id2"] Başvuru Onaylanınca Buraya Yazılan Rol veya Roller Kullanıcıya Verilecek
    sRole: "919636953664724998", //Verilecek En Düşük Yetkili Rol ID Yazın
    successMessage: "🏥 EMS Başarılı Şekilde Alındınız  ✅  Lütfen Bekleme Odasına Geciniz! ", //Başvuru Onaylanınca Kullanıcıya Atılacak Mesajı Yazın
    deleteMessage: "❌ Üzgünüm EMS Başvurun Reddedildi! ❌", //Başvuru Reddedilince Kullanıcıya Atılacak Mesajı Yazın
    timeout: 8 //Başvurusu Reddedilen Birisi Nekadar Süre Sonra Başvuru Yapa Bilsin? 1000=1 Saniye (Milisaniye Türünden Yazın)
  },

  embed: {
    title: "Başvuru Sistemi ", //Başvuru Mesajı Başlık Kısmında Yazmasını İstediğiniz Şey
    color: "BLUE", //Embed Rengi, Örnek: BLUE,RED,YELLOW,GREEN Olarak veya Direkt #ff00ff Gibi Renk Kodu Yazın
    description: "**EMS Başvurusu Yapabilmek İçin Lütfen Aşağıdaki Butona Basınız** **Dikkat** Butona bastınız andan itibaren sorular sorulmaya başlar **Merhaba** **Alım Varmı** Gibi şeyler yazmayın! Sadece İlk 2 soruyu gecebilmek için **.** Yazınız" //Başvuru Mesajı Açıklama Kısmında Yazmasını İstediğiniz Şey
  },

  sorular: ["**Yazdığınız herşey Sorulara Cevap Olarak Görülcektir**", "**Hazırsanız Başlıyalım**", "Evlisiniz ve bir çocuğunuz var. Çocuğunuzun bulunduğu okulda bi grup terörist baskın yapıyor ve sizin çocuğunuzun bulunduğu sınıfı rehin alıyorlar. Polis müdahale ediyor ve bu teröristler yakalanıyor fakat 1 tanesi ağır yaralı hastane acilinde sizin önünüze getiriliyor,nasıl yaklaşırsınız.", " Akşam mesai bitimi şehirde dolaşırken yerde bir yaralı görüyorsunuz. Bu kişi bıçaklanmış yada vurulmuş olabilir durumuna göre nasıl yaklaşırsınız.", "Şehir içinde ambulans ile bi çağrıya giderken ortalama hız sınırınız kaç olmalıdı./Şehir dışında otobanda yada köy yollarında kaç olmalıdır.", "Aldığınız bir çağrıya gittiğiniz de bir çatışma silah sesleri kavga vs varsa nabarsınız?", "Hastane içinde veya dışında sizden birisi bi dostunuz yada tanıdığınız kişi sizden defibrilatör veya ilaç kutusu istediği zaman nasıl cevap verirsiniz?", "İşe başladığınız günden itibaren 2 hafta içinde çıkmak işi bırakmak isterseniz 100.000$ tazminatı ödemeyi kabul ediyor musunuz?", "Oyun İçi Adınız", "Yaşınız", "EMS Kaç Saat Aktif Kalabilirsiniz",] //Sorulacak Sorular
};

module.exports = config;
