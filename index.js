const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser.urlencoded( {extended: true} ));
app.set('view engine', 'ejs');
// "/" anasayfayı temsil eder.
app.get('/' , function(req, res){
    res.sendFile(__dirname + "/index.html");
});
app.get("/iletisim" , function(req, res)   {
    res.sendFile( __dirname + "/iletisim.html");
});
app.get("/giris" , function(req, res){
    res.sendFile(__dirname + "/giris.html");
});
app.get("/profil" , function(req, res){
    res.send("Şuanda get yöntemini kullanıyorsun.");
});
app.post("/profil" , function(req, res){
    // kullanıcı adı "hamza" şifre 1234 ise hoşgeldin yazalım, aksi durumda bilgiler hatalı..
    if(req.body.kullaniciadi == "hamza" && req.body.sifre == "1234"){
      res.send("Hoşgeldin : " + req.body.kullaniciadi);
    }else{
      res.send("Bilgiler hatalı.");
    }
});
app.get("/book", function(req , res){
     // gelen isteklere göre, o sayfanın içeriğini değiştireceğiz.
     // ejs = embedded javascript
     var gonderilecekler = {
       baslik : 'Fahrenheit 451' ,
       yorum : 'Ray Bradbury sadece bilimkurgunun değil fantastik edebiyatın ve korkunun da yirminci yüzyıldaki ustalarından biri. ' ,
 yorum2 : 'Bilimkurgunun “iyi edebiyat” da olabileceğini kanıtlayan belki de ilk yazar. ',
 yorum3:'Yayımlandığı anda klasikleşen, distopya edebiyatının dört temel kitabından biri olan Fahrenheit 451 ise bir yirminci yüzyıl başyapıtı.',
       yazar : 'Ray Bradbury ',
       fiyat :'15.00tl',
        ceviri :'Dost Körpe',
        img: 'https://img.kitapyurdu.com/v1/getImage/fn:11238216/wh:true/wi:256/pc:208'
     };
     res.render('book' , gonderilecekler  )
});
// urun sayfasi için bir tane istek oluşturun. urun sayfasina bağlanmak isteyen kişi için
// urun.ejs dosyasını render edin ve urun sayfasında da ürünün başlığı ve yorumsayisi olsun.
app.get("/urun" , function (req , res){
  var gonderilecekler = {
    urunTip : 'Acer Aspire R7',
  fiyat : '1000$' ,
  }
res.render('urun' , gonderilecekler );
});

// kitap sayfasi için bir tane istek oluşturun. kitap sayfasına bağlanmak isteyn kişi için
// kitap.ejs dosyasını rnder edin ve kitap sayfasında kitap ismi, kitap yazarı, kitap açıklaması ve fiyatı olsun

app.get("/book" , function (req , res){
  var gonderilecekler = {
    urunTip : 'Acer Aspire R7',
  fiyat : '1000$' ,
  }
res.render('urun' , gonderilecekler );
});

app.get("*" , function(req, res){
    res.send("Hataaa ! Yanlış sayfadasınız, lütfen tarayıcınız ayarlarıyla oynayınız.");
});
app.listen(8000);
