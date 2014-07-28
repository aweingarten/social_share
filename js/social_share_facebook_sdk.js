(function ($) {
  Drupal.behaviors.social_shareFacebookSDK = {
    attach: function (context) {

      // Include the Facebook Javascript SDK. For more information, see:
      // https://developers.facebook.com/docs/javascript/quickstart/v2.0
      window.fbAsyncInit = function() {
        FB.init({
          appId      : Drupal.settings.socialShare.appID,
          xfbml      : true,
          version    : 'v2.0'
        });
      };

      (function(d, s, id){
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) {return;}
          js = d.createElement(s); js.id = id;
          js.src = "//connect.facebook.net/en_US/sdk.js";
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk')
      );
      // End of Facebook Javascript SDK.

      // Add fb-root to the DOM.
      var fb_root = document.createElement("div");
      var a = document.createAttribute("id");
      a.value = "fb-root";
      fb_root.setAttributeNode(a);
      document.body.appendChild(fb_root);
    }
  };
})(jQuery);
