//alert('ciao')
//setTimeout(() => {  console.log(sessionTimer.interval); }, 2000);
//console.log('ciaooooooooooo')
//console.log(clearInterval(sessionTimer.interval))

var s = document.createElement('script');
s.src = chrome.extension.getURL('background.js');
(document.head||document.documentElement).appendChild(s);
s.onload = function() {
    s.parentNode.removeChild(s);
};