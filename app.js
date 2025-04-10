// Buton
const generateBtn = document.getElementById('generate');
const copyBtn = document.getElementById('copy');

// Sonucun yazdıralacağı yer
const resultEl = document.getElementById('result');

// Ayar Elemenleri
const lengthEl = document.getElementById('length');
const lowercaseEl = document.getElementById('lowercase');
const uppercaseEl = document.getElementById('uppercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');


const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+{}[]|:;<>,.?/~`-=";






generateBtn.addEventListener("click" , () => {
  let characterPool = "";
  if(lowercaseEl.checked) characterPool += lowercaseChars;
  if(uppercaseEl.checked) characterPool += uppercaseChars;
  if(numbersEl.checked) characterPool += numberChars;
  if(symbolsEl.checked) characterPool += symbolChars;
  
  let length = parseInt(lengthEl.value);

  if(characterPool === "") {
    resultEl.innerHTML = `<span style="color: red; font-weight: bold;">En az bir seçenek seçmelisiniz!</span>`;
    return;
  }

  if(isNaN(length) || length < 4 || length > 32) {
    resultEl.innerHTML = `<span style="color: red; font-weight: bold;">Lütfen şifre uzunluğunu 4 ile 32 arasında girin!</span>`;
    return;
  };
  let password = "";
  
  for(let i = 0; i < length; i++){
    let randomIndex = Math.floor(Math.random() * characterPool.length);
    password += characterPool[randomIndex];
  };
  resultEl.textContent = password;

});

copyBtn.addEventListener("click" , () => {

  let copiedPassword = resultEl.textContent;

  if (!copiedPassword || copiedPassword.includes("Lütfen")) {
    alert("Kopyalanacak bir şifre yok.");
    return;
  }
  navigator.clipboard.writeText(copiedPassword)  
  .then(() => {
    copyBtn.innerText = `Kopyalandı!`;
    setTimeout(() => {
      copyBtn.innerText = "Kopyala";
    }, 1500);
  })
  .catch(() => {
    alert("Kopyalama başarısız oldu.");
  });
})
