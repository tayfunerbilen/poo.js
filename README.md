poo.js hakkında
======

Belirlenen sayıya rasgele değerler üreterek ulaşılmasını sağlar.

jQuery kullanarak eklenti haline getirilmiştir.

İsmini doğaçlama almıştır :)

kullanım örnekleri
======
basit kullanım;
```html
<div data-number="1050" id="test"></div>
<script>
$('#test').poo();
</script>
```
parametreli kullanım;
```html
<div id="test"></div>
<script>
$('#test').poo({
  number: 1050
});
</script>
```

çoklu kullanım;
```html
<ul class="test">
  <li data-number="1000"></li>
  <li data-number="100"></li>
  <li data-number="957"></li>
</ul>
<script>
$('.test li').poo();
</script>
```

hızı ayarlamak;
```javascript
$('#test').poo({
  speed: 10
});
```

artan değerin öncesine ve sonrasına birşeyler eklemek;
```javascript
$('#test').poo({
  speed: 10,
  before: '%',
  after: 'c'
});
```

her artışta bir callback fonksiyon çalıştırmak;
hızı ayarlamak;
```javascript
$('#test').poo({
  number: 70,
  speed: 10,
  before: '%',
  callback: function(percent){
    $('.percent-div').height( percent + '%');
  }
});
```

demo
=====
http://www.erbilen.net/lab/poo/
