function getIDString() {
    var cookieString=document.cookie;
    var cookieArray=cookieString.split(";");
    for(var i=0;i < cookieArray.length;i++){
      var targetCookie=cookieArray[i].replace(/ /g, "");
      var newtargetCookie=targetCookie.split("=");
      if(newtargetCookie[0] === "drb-d0004-spa" && newtargetCookie.length == 2) {
        if(newtargetCookie[1].match(/^[0-9a-zA-Z]{64}$/)){
          var result = {
            "u" : { "p": ["9999999999"] },
                    "c": newtargetCookie[1]
          }
          return result;
        }
       }
    }
}