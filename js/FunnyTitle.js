<!--浏览器搞笑标题-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/medias/logo.png");
         document.title = '(；′⌒`)  You lose me! ';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/medias/logo.png");
         document.title = '(σ´∀｀)σ You get me? ' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });2