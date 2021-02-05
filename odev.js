/** 

1. mycarDetails fonksiyonunu "GA12345 Toyota" ciktisini verecek sekilde duzenleyin.

**/

var car = {
  registrationNumber: "GA12345",
  brand: "Toyota",

  displayDetails: function () {
    console.log(this.registrationNumber + " " + this.brand);
  }
}

/** Bu soru call,apply,bind ve arrow fonksiyonları kullanılarak ayrı ayrı çözülebilmekte ben arrow yöntemini kullanarak çözmek istedim. **/

var myCarDetails = () => car.displayDetails();
myCarDetails();





/** 

2.name parametresi alan bir isValidName fonksiyonu yazin. Fonksiyon asagidaki kosullarin hepsi saglaniyorsa true, saglanmiyorsa false donmelidir:

name string olmali
name bos olmamali
bosluk icerebilir, ancak bosluk haridcindeki isimler en az 2 karakterden olusmali.

**/

function isValidName(name) {
  name = name.trim(); // gelen stirngin başındaki ve sonundaki boşlukları siliyoruz
  if (typeof name === 'string' || name instanceof String) // 1.koşul - name string olmalı
    {
      if (name !== "") // 2.koşul - name boş olmamalı
      { 
        //3. koşul - boşluk dışındaki isimler en az iki harfli olmalı
        if(name.split(/\s+/).every((index) => index.length >= 2)) 
          return true;
      }  	
      return false; 
    }
else
  return false
}


/**


3. summary fonkisyonunu ciktisi "Brave New World was written by Aldous Huxley. It is a dystopian novel written in 1932." olacak sekilde cagirin.

**/

const book = {
  title: 'Brave New World',
  author: 'Aldous Huxley',
}

function summary(genre, year) {
  console.log(
    `${this.title} was written by ${this.author}. It is a ${genre} novel written in ${year}.`,
  )
}

/**
Bu soru call,apply ve bind fonksiyonlarını kullanarak ayrı ayrı çözülebilmekte ben call yöntemini kullanarak çözmek istedim. 
**/

summary.call(book,'dystopian','1932');

