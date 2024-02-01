let chargeAmount = document.querySelector('.charge-amount');
let percentage = document.querySelector('h3');

navigator.getBattery().then(function(charge) {
  chargeAmount.style.width = `${charge.level * 100}%`
  percentage.innerHTML = `${Math.ceil(charge.level * 100)}%`;
  
});
