//<!--
//Google Analytics Gtag Code [Start]
//
function getPageIdAF(){
  var pid = VLTrace_custom_getparam;
  if(pid != undefined){
    pid = VLTrace_custom_getparam.replace(/p=/,'');
    return pid;
} else {
  return '';
}
}

var ga_pageId_AF = getPageIdAF();


function getPagekind() {
    let url = window.location.href;
    var urlArray = url.split('/');
    var str = urlArray[urlArray.length -1];
    return str.substr(0,2);
}
var ga_kindId_AF = getPagekind();


function getCookie(){
    if(document.cookie != '' && ga_pageId_AF.match(/^AD001/)){
        return '';
    } else if(document.cookie != ''){
        var ar_hv, i_hv=0, sid_hv='';
        ar_hv=document.cookie ? document.cookie.split('; ') : [];
        for (; i_hv < ar_hv.length; i_hv++) {if (ar_hv[i_hv].split('=')[0] === 'drb-X-Client-Trace-Id') {sid_hv = ar_hv[i_hv].split('=')[1];break;}}
        return sid_hv;
    }
}
var ga_clientId_AF = getCookie();

window.dataLayer = [];

var script = document.createElement('script');
script.id = 'af-script1';
script.innerText = 'window.dataLayer = window.dataLayer || [];dataLayer.push({\'page_id_AF\':ga_pageId_AF,\'service_AF\':\'direct_AF\',\'page_kind_AF\':ga_kindId_AF,\'order_id_AF\':ga_clientId_AF})';
document.body.appendChild(script);
//Google Analytics Gtag Code [End]
//->

//<!-- Google Tag Manager -->
var script = document.createElement('script');
script.id = 'af-script2';
script.innerText = '(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({\'gtm.start\':new Date().getTime(),event:\'gtm.js\'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!=\'dataLayer\'?\'&l=\'+l:\'\';j.async=true;j.src=\'https://www.googletagmanager.com/gtm.js?id=\'+i+dl;j.id=\'AF_GTM\';f.parentNode.insertBefore(j,f);})(window,document,\'script\',\'dataLayer\',\'GTM-TS6ZLLX\')';
document.body.appendChild(script);
//<!-- End Google Tag Manager -->
