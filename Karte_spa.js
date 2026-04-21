const krt1 = document.createElement('script');
krt1.innerHTML = '!function(n){if(!window[n]){var o=window[n]=function(){var n=[].slice.call(arguments);return o.x?o.x.apply(0,n):o.q.push(n)};o.q=[],o.i=Date.now(),o.allow=function(){o.o="allow"},o.deny=function(){o.o="deny"}}}("krt")';
document.head.appendChild(krt1);

const krt2 = document.createElement('script');
krt2.async = true;
krt2.src = 'https://cdn-edge.karte.io/7ff85aabff1e67c5c266e1fab8b4e479/edge.js';
document.head.appendChild(krt2);