var GWatch=function(e){var t={};function i(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/build/",i(i.s=2)}([function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}();t.Utilities=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.logging=!1}return n(e,null,[{key:"log",value:function(){this.logging&&console.log("GWatch: ",[].slice.call(arguments).join(","))}},{key:"notifyError",value:function(e){alert(e)}}]),e}()},function(e,t){e.exports=$},function(e,t,i){"use strict";var n=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),o=i(3),r=l(i(1)),s=i(6),a=i(0),c=i(7);l(i(8));function l(e){return e&&e.__esModule?e:{default:e}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.config={videoCall:t.videoCall||!1,devmode:t.devmode||!1,videoElement:t.videoId?(0,r.default)("#"+t.videoId):(0,r.default)("#my-video"),videoSelector:t.videoSelector?(0,r.default)("#"+t.videoSelector):(0,r.default)("#video-selector"),videoSrcElement:t.videoSrcElement?(0,r.default)("#"+t.videoSrcElement):(0,r.default)("#my-video-src"),socket_server:t.socket_server||"ws://"+window.location.hostname+":12345",onSocketConnected:t.onSocketConnected||function(){console.log("socket connected")},onSocketError:t.onSocketError||function(){console.error("socket connection failed")}},this.video=null,this.showVideoContainer(),this.initializeUIEvents(),a.Utilities.logging=this.config.devmode,a.Utilities.session_identifier=this.generateConnectionId(),a.Utilities.onSocketConnected=this.config.onSocketConnected,a.Utilities.onSocketError=this.config.onSocketError,a.Utilities.mSocket=new s.Socket(this.config.socket_server),a.Utilities.websocket=a.Utilities.mSocket.websocket,this.config.videoCall&&(this.webRTC=new c.WebRTC)}return n(e,[{key:"initializeUIEvents",value:function(){a.Utilities.log("Initializing UI events"),this.config.videoSelector.change(this.onSrcSelected.bind(this))}},{key:"onSrcSelected",value:function(e){var t=e.target.files[0],i=window.URL.createObjectURL(t);a.Utilities.log("New source file selected"),this.changePlayerSource(i)}},{key:"changePlayerSource",value:function(e){a.Utilities.log("Changing player's source"),this.config.videoSrcElement.attr("src",e),void 0===a.Utilities.player?(a.Utilities.video=new o.VideoPlayer,a.Utilities.player=a.Utilities.video.player):(a.Utilities.player.src({type:"video/mp4",src:e}),a.Utilities.player.load())}},{key:"showVideoContainer",value:function(){this.config.videoElement.parent().fadeIn()}},{key:"generateConnectionId",value:function(){var e=new Date;return btoa(unescape(encodeURIComponent(e.getTime()+Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15)))).slice(0,-2)}}]),e}();e.exports=u},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.VideoPlayer=void 0;var n=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),o=a(i(4)),r=i(0),s=a(i(5));function a(e){return e&&e.__esModule?e:{default:e}}t.VideoPlayer=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);this.lastSeekValue=0,this.videoSeeking=0,this.notifyPeers=!0,this.player=(0,o.default)("my-video",{},this.onPlayerReady.bind(this)),this.addNewButton({id:"addSubsBtn",icon:"icon-speech",title:"Add subtitle"},this.onAddSubBtnClicked.bind(this))}return n(e,[{key:"addNewButton",value:function(e,t){this.player;var i,n,o=document.createElement("div"),r=document.createElement("a");return o.id=e.id,o.className="vjs-custom-icon vjs-control",r.innerHTML="<i title='"+e.title+"' class='icon "+e.icon+" line-height' aria-hidden='true'></i>",o.appendChild(r),i=document.getElementsByClassName("vjs-control-bar")[0],n=document.getElementsByClassName("vjs-fullscreen-control")[0],i.insertBefore(o,n),void 0!==t&&(o.onclick=t),o}},{key:"onAddSubBtnClicked",value:function(){var e=$("<input/>").attr("type","file").attr("accept",".vtt,.srt");e.change(this.onSubChanged.bind(this)),e.trigger("click")}},{key:"onSubChanged",value:function(e){var t,i=e.target.files[0],n=i.name.slice(-3);"srt"==n?this.setSrtSubtitle(i):"vtt"==n?(t=window.URL.createObjectURL(i),this.setSubtitle(t)):r.Utilities.notifyError("Only .srt and .vtt files are supported as subtitles")}},{key:"setSubtitle",value:function(e){for(var t=this.player.remoteTextTracks(),i=t.length;i--;)this.player.removeRemoteTextTrack(t[i]);this.player.addRemoteTextTrack({src:e,kind:"captions",label:"captions on"}),this.player.remoteTextTracks()[0].mode="showing"}},{key:"setSrtSubtitle",value:function(e){var t=this;new s.default(e).getURL().then(function(e){t.setSubtitle(e)}).catch(function(e){r.Utilities.notifyError("Selected .srt file seems to be invalid"),console.error(e)})}},{key:"onPlayerReady",value:function(){r.Utilities.log("Your player is ready!"),this.player.on("seeking",function(e){this.videoSeeking=!0,r.Utilities.log("Video seeking: "+this.player.currentTime())}.bind(this)),this.player.on("pause",function(e){var t={name:r.Utilities.session_identifier,key:"pause",value:!0};this.notifyPeers&&(r.Utilities.log("Video paused","Sending socket message"),r.Utilities.logging&&console.log(t),r.Utilities.websocket.send(JSON.stringify(t))),this.notifyPeers=!0}.bind(this)),this.player.on("play",function(){if(!this.videoSeeking){var e={name:r.Utilities.session_identifier,key:"play",value:!0};this.notifyPeers&&(r.Utilities.log("Video played","Sending socket message"),r.Utilities.logging&&console.log(e),r.Utilities.websocket.send(JSON.stringify(e))),this.notifyPeers=!0}}.bind(this)),this.player.on("seeked",function(e){this.videoSeeking=!1;var t=this.player.currentTime();if(t!=this.lastSeekValue){r.Utilities.log("Video seeked");var i={name:r.Utilities.session_identifier,key:"seek_value",value:{time:t,play:!this.player.paused()}};this.lastSeekValue=t,this.notifyPeers&&(r.Utilities.log("Sending seeked singal message"),r.Utilities.logging&&console.log(i),r.Utilities.websocket.send(JSON.stringify(i))),this.notifyPeers=!0}}.bind(this))}}]),e}()},function(e,t){e.exports=videojs},function(e,t,i){"use strict";i.r(t);class n{constructor(e){this.resource=e}blobToBuffer(){return new Promise((e,t)=>{const i=new FileReader;i.addEventListener("loadend",t=>{const i=t.target.result;e(new Uint8Array(i))}),i.addEventListener("error",()=>t("Error while reading the Blob object")),i.readAsArrayBuffer(this.resource)})}static blobToString(e,t,i){const n=new FileReader;n.addEventListener("loadend",e=>{const i=e.target.result;t(i)}),n.addEventListener("error",()=>i()),n.readAsText(e)}static toVTT(e){return e.replace(/\{\\([ibu])\}/g,"</$1>").replace(/\{\\([ibu])1\}/g,"<$1>").replace(/\{([ibu])\}/g,"<$1>").replace(/\{\/([ibu])\}/g,"</$1>").replace(/(\d\d:\d\d:\d\d),(\d\d\d)/g,"$1.$2").concat("\r\n\r\n")}static toTypedArray(e){const t=[];return e.split("").forEach(e=>{t.push(parseInt(e.charCodeAt(),16))}),Uint8Array.from(t)}getURL(){return new Promise((e,t)=>this.resource instanceof Blob?FileReader?TextDecoder?n.blobToString(this.resource,t=>{const i="WEBVTT FILE\r\n\r\n".concat(n.toVTT(t)),o=new Blob([i],{type:"text/vtt"});return this.objectURL=URL.createObjectURL(o),e(this.objectURL)},()=>{this.blobToBuffer().then(t=>{const i=new TextDecoder("utf-8").decode(t),o="WEBVTT FILE\r\n\r\n".concat(n.toVTT(i)),r=new Blob([o],{type:"text/vtt"});return this.objectURL=URL.createObjectURL(r),e(this.objectURL)})}):t("No TextDecoder constructor found"):t("No FileReader constructor found"):t("Expecting resource to be a Blob but something else found."))}release(){URL.createObjectURL(this.objectURL)}}window.WebVTTConverter=n,t.default=n},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Socket=void 0;!function(e){e&&e.__esModule}(i(1));var n=i(0);var o=t.Socket=function(e){this.wsUri=e,this.websocket=new WebSocket(this.wsUri),this.websocket.onopen=n.Utilities.onSocketConnected.bind(this),this.websocket.onmessage=this.onMessage,this.websocket.onerror=n.Utilities.onSocketError.bind(this),this.websocket.onclose=n.Utilities.onSocketError.bind(this)};o.prototype.onMessage=function(e){if(n.Utilities.video){var t=JSON.parse(e.data);n.Utilities.video.notifyPeers=!1,n.Utilities.log("Socket message received:",n.Utilities.video.notifyPeers),n.Utilities.logging&&console.log(t),"seek_value"==t.key?(n.Utilities.player.currentTime(t.value.time),t.value.play&&n.Utilities.player.play()):"pause"!=t.key||n.Utilities.player.paused()?"play"==t.key&&n.Utilities.player.paused()?n.Utilities.player.play():n.Utilities.video.notifyPeers=!0:n.Utilities.player.pause()}},o.prototype.onError=n.Utilities.onSocketError},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WebRTC=void 0;var n=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),o=i(0);t.WebRTC=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),console.log("good so far"),this.peerConnectionConfig={iceServers:[{urls:"stun:stun.stunprotocol.org:3478"},{urls:"stun:stun.l.google.com:19302"}]},this.uuid=this.createUUID(),this.localVideo=document.getElementById("localVideo"),this.remoteVideo=document.getElementById("remoteVideo"),this.serverConnection=o.Utilities.websocket,this.serverConnection.onmessage=this.gotMessageFromServer.bind(this),this.constraints={video:!0,audio:!0},navigator.mediaDevices.getUserMedia?navigator.mediaDevices.getUserMedia(this.constraints).then(this.getUserMediaSuccess.bind(this)).catch(this.errorHandler):alert("Your browser does not support getUserMedia API")}return n(e,[{key:"getUserMediaSuccess",value:function(e){this.localStream=e,this.localVideo.srcObject=e}},{key:"startVideoCall",value:function(e){this.peerConnection=new RTCPeerConnection(this.peerConnectionConfig),this.peerConnection.onicecandidate=this.gotIceCandidate.bind(this),this.peerConnection.ontrack=this.gotRemoteStream.bind(this),this.peerConnection.addStream(this.localStream),e&&this.peerConnection.createOffer().then(this.createdDescription.bind(this)).catch(this.errorHandler)}},{key:"gotMessageFromServer",value:function(e){o.Utilities.mSocket.onMessage(e);var t=JSON.parse(e.data);this.peerConnection||this.startVideoCall(!1),t.sdp?this.peerConnection.setRemoteDescription(new RTCSessionDescription(t.sdp)).then(function(){"offer"==t.sdp.type&&this.peerConnection.createAnswer().then(this.createdDescription.bind(this)).catch(this.errorHandler)}.bind(this)).catch(this.errorHandler):t.ice&&(console.log(e),console.log("Adding : ",t.ice.candidate),this.peerConnection.addIceCandidate(new RTCIceCandidate(t.ice)).catch(this.errorHandler))}},{key:"gotIceCandidate",value:function(e){null!=e.candidate&&this.serverConnection.send(JSON.stringify({ice:e.candidate,uuid:this.uuid}))}},{key:"createdDescription",value:function(e){console.log("got description"),this.peerConnection.setLocalDescription(e).then(function(){this.serverConnection.send(JSON.stringify({sdp:this.peerConnection.localDescription,uuid:this.uuid}))}.bind(this)).catch(this.errorHandler)}},{key:"gotRemoteStream",value:function(e){console.log("got remote stream"),this.remoteVideo.srcObject=e.streams[0]}},{key:"errorHandler",value:function(e){console.error(e)}},{key:"createUUID",value:function(){function e(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}},{key:"pauseVideoCall",value:function(){this.pauseVideo(),this.pauseAudio()}},{key:"pauseVideo",value:function(){this.localStream.getVideoTracks()[0].enabled=!1}},{key:"pauseAudio",value:function(){this.localStream.getAudioTracks()[0].enabled=!1}},{key:"resumeVideoCall",value:function(){this.resumeVideo(),this.resumeAudio()}},{key:"resumeVideo",value:function(){this.localStream.getVideoTracks()[0].enabled=!0}},{key:"resumeAudio",value:function(){this.localStream.getAudioTracks()[0].enabled=!0}}]),e}()},function(e,t){}]);