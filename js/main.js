$(function(){
var pagename = '';
if ($(location).attr('pathname').match(/[^\/]+$/) != null) {
    if ($(location).attr('pathname').match(/[^\/]+$/).length > 0) {
        pagename = $(location).attr('pathname').match(/[^\/]+$/)[0].toLowerCase();
        //console.log(pagename);
    }
}
if (pagename == 'index.html' || pagename == '') {
  //v2
  var onloadCallback = function() {

    grecaptcha.render('recaptcha-cont', {
      'sitekey': '6LcBgyYpAAAAALC2J27GwPyuxkGSrHcFacADVsNF',
      'theme': 'light',
      'size': 'normal',
      'callback': verifyCallback,//通過
      'expired-callback': regetverify //驗證碼過期,官方預設2min
      //'error-callback': //失敗
    });
  
    function verifyCallback(token) {
      $(".act-submit").removeAttr('disabled');
      $(".act-submit").on("click",function(e){
        $("label").append("送表單啦")
        return false;
      })
    }
    function regetverify() {
      grecaptcha.reset();
    }
  
  }
  onloadCallback();
}
if (pagename == 'recapchat-v3.html') {

  var verifyapi = 'https://script.google.com/macros/s/AKfycbx4umcKoyI4Cl5zMcjWmuz0agyW54Oneg08hekLSEHZSsK7ud7HbnHIR0fZtmi6SWGz/exec';
  //google的輕量後端,之後可以改到後端api位置,後端可以直接參考 script code
  
  
  $("#submit").on("click",function(e){
    $("h4").html("分數驗證中...");
    grecaptcha
          .ready(() => {
            grecaptcha.execute('6Lc7oy4pAAAAAChfeBuUr1b7GUT_KTsPyQSgPETE', {
              action: 'verify2'
            }).then(token => { //驗證後產生的token
              verifyCallback(token)
            });
    });
  })

  function verifyCallback(token) {
    //*AXIOS
    axios.post(verifyapi,
      {
        token
      },{
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then((res) => { 
       console.table(res.data)
       $("h4").html("分數驗證結果");
       if (res.data.success) {
        if (res.data.score > 0.5) {
          $("#verify-score").removeClass("none");
          $("#verify-score").html("不是機器人，驗證分數為:" + res.data.score)
        }
        else {
          $("#verify-score").removeClass("none");
          $("#verify-score").html("疑似機器人，驗證分數為:" + res.data.score)
        }
      } else {
        window.alert(res.data['error-codes'][0])
      }
    })
      .catch((error) => {
        console.error(error)
      })
    //AXIOS-end*/
  }


}
//end
});