// Component is unused but could be applied to integrate a chatbot that works with Iframe

// This solution works on all platforms by utilizing webview

import React, { Component } from 'react';

import { WebView } from 'react-native-webview';

export default class Chatbot extends Component {
  render() {
    return (
      <WebView
        source={{
          html: `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Integration Example</title>
  <!-- <link rel="stylesheet" href="./css/style.css"> -->
  <script src="https://78ee-185-23-140-93.ngrok.io/assets/modules/channel-web/inject.js"></script>
</head>
<style>
  .chatbot-button {
    position: fixed;
    bottom: 5%;
    right: 5%;
    background-color: #CD193D;
    border-radius: 50%;
    border: none;
    width: 60px;
    height: 60px;
    cursor: pointer;
    touch-action: manipulation;
    vertical-align: middle;
    white-space: nowrap;
    word-wrap: break-word;
    box-sizing: border-box;
    display: inline-block;
    box-shadow: 0px 5px 15px 5px #b2b2b2;
  }


  .chatbot-button img {
    height: 37.5px;
    width: 37.5x;
  }

  .chatbot-button img:hover {
    opacity: 90%;
  }

  .chatbot-button:hover {
    opacity: 60%;
    text-decoration: none;
    transition-duration: 0.1s;
  }

  .hidden {
    visibility: hidden;
  }
</style>

<body>

  <div id="chatbot-widget">
  </div>
  <div id="bp-show">
  </div>


  <script src="./js/app.js"></script>
  <script>
    // function getRndInteger(min, max) {
    //   return Math.floor(Math.random() * (max - min + 1) ) + min;
    // }

    const chatbotButton = document.getElementById("bp-show");
    const chatbotWidget = document.getElementById("chatbot-widget")


    function addCode() {
    
      chatbotButton.innerHTML += "<button class='chatbot-button'><img src='https://svgshare.com/i/iXQ.svg'></button>";
    }

    // if (getRndInteger(1,2) === 2) {
    //   addCode()
    // }

    let config = {
      host: "https://78ee-185-23-140-93.ngrok.io",
      botId: "avdr-agent",
      hideWidget: false,
      extraStylesheet: '/assets/modules/channel-web/avdr.css',
      showConversationsButton: false,
      botName: 'Advocaat Sem (chatbot)',
      locale: 'nl',
      useSessionStorage: false,
      enableReset: true,
      enablePersistHistory: true,
      enableResetSessionShortcut: true,
      showPoweredBy: false,
      disableNotificationSound: true,
      disableArrowNavigation: true,
      exposeStore: false
    }

    if (window.botpressWebChat == undefined) {
      console.log("chatbot currently unavailable")
    } else {
      window.botpressWebChat.init(config)
      addCode()
      console.log("chatbot is available")
    }

    const cancelButton = document.getElementById("cancel-button")

    document
      .getElementById("bp-widget")
    chatbotButton.addEventListener("click", () => {
      window.botpressWebChat.sendEvent({ type: "show" })
      const iframe = document.getElementById("bp-widget")
    })

    // window.addEventListener('message', function(message) {
    //   if (event.data && event.data.payload && event.data.payload.type === "session_reset") {
    //       window.webchat_store.clearMessages();
    //   }
    // })

    // window.addEventListener("message", function (event) {
    //   if (event.data.name === "webchatReady") {
    //     window.botpressWebChat.sendEvent({
    //       type: "proactive-trigger",
    //       channel: "web",
    //       payload: { text: "fake message" },
    //     })
    //   } 
    // })

    cancelButton.addEventListener("click", () => {
      notification.classList.add("hidden")
    })

    window.addEventListener("message", function (event) {
      if (event.data.name && event.data.name == "webchatReady") {
        window.botpressWebChat.sendEvent({
          type: "proactive-trigger",
          channel: "web",
          payload: { text: "fake message" }
        })
      }
      else if (event.data.payload && event.data.payload.type == "session_reset") {
        // window.webchat_store.clearMessages()
        window.botpressWebChat.sendEvent({
          type: "proactive-trigger",
          channel: "web",
          payload: { text: "fake message" }
        })
      }
    })
  </script>
</body>

</html>`,
        }}
      />
    );
  }
}
