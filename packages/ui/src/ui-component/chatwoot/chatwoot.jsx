import React from 'react';

class Chatwoot extends React.Component {
  componentDidMount () {
    window.chatwootSettings = {
      hideMessageBubble: false,
      position: 'right',
      locale: 'en',
      type: 'standard', 
    };

    
      (function(d,t) {
        var BASE_URL="https://app.chatwoot.com";
        var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
        g.src=BASE_URL+"/packs/js/sdk.js";
        
        g.defer = true;
        g.async = true;
        s.parentNode.insertBefore(g,s);
        g.onload=function(){
          window.chatwootSDK.run({
            websiteToken: 'i32g8N98vH7Zfn5GQBeq8r2M',
            baseUrl: BASE_URL
          })
        }
      })(document,"script");
    
  }

  render () {
    return null;
  }
}

export default Chatwoot