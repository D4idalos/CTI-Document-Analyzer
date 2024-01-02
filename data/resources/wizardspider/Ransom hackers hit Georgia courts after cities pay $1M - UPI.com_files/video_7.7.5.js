define("video",["module","jquery","page","utils","hls","bem","tag","jquery-utils","live-messages"],function(e,N,R,A,t,B,O){"use strict";var j={name:e.id,class:"."+e.id};A.broadcast(j.name,"loaded");"Hls"in window&&"isSupported"in window.Hls||(window.Hls=t),A.createModuleNoJQ(j.name,function(r){const d=this,l=(this.el=r,this.module=j,new B(r,j.name)),i=document.getElementsByClassName(j.name).length,c=r.getElementsByClassName(j.name+"__player")[0],u=window.akamai.amp;let m={stream:r.dataset.stream,id:r.dataset.id,site:r.dataset.site,originalUrl:r.dataset.link,url:r.dataset.link,title:r.dataset.title,originalTitle:r.dataset.title,thumbnail:r.dataset.thumbnail,description:r.dataset.description,autoplay:"true"===r.dataset.autoplay,section:r.dataset.section,subsection:r.dataset.subsection,topic:r.dataset.topic,subtopic:r.dataset.subtopic,categories:r.dataset.categories,captions:r.dataset.captions,isLiveNow:r.dataset.isLiveNow,isUgc:r.dataset.isUgc,isCct:r.dataset.isCct,trackingTags:r.dataset.trackingTags,duration:r.dataset.duration,prerollDisabled:"true"===r.dataset.disablePreroll},s=null,p=1,g=null,v=!0,t="true"===r.dataset.mute,a=null!==r.closest(".related-videos");u.DisplayState.NORMAL;function n(e,a){var i=!1;let s=0,n=!0;function t(){d.broadcast("timerRestarting"),clearTimeout(l),n=!0,l=null,i=!1,s=0,o=(new Date).getTime(),l=setTimeout(()=>{d.broadcast("timerFiring"),e(),t()},a)}d.broadcast("timerInit");var o=(new Date).getTime(),l=setTimeout(()=>{d.broadcast("timerFiring"),e(),t()},a);return{cancel:function(){d.broadcast("timerCancelling"),n=!1,clearTimeout(l)},pause:function(){var e,t;n&&(d.broadcast("timerPausing"),n=!1,clearTimeout(l),s=(e=o,t?t-e:(new Date).getTime()-e),i=s>=a)&&d.broadcast("timerComplete")},resume:function(){n||-1!==(l=i?-1:setTimeout(()=>{d.broadcast("timerFiring"),e(),t()},a-s))&&(n=!0,d.broadcast("timerResuming"))}}}this.init=function(){d.broadcast("init"),c.id="video-"+A.uuid(),f.updateVars(),o.setup(r.dataset.id,10),D.setup(),U(h),k(),C(),e(),require(["comscore"]),d.broadcast("ready")};const o={auto:0<parseInt(r.dataset.relatedAutoplayDelay),visible:!1,videos:[],unviewed:[],setup:(e,t,a)=>{fetch(`/ajax/content/relatedvideos/${e}/${t}/`+m.site).then(e=>e.json()).then(e=>{d.broadcast("receivedRelatedVideos",{relatedVideos:e}),o.videos=e,o.unviewed=e,o.update(),"function"==typeof a&&a(e)}),["top","right","bottom","left"].forEach(e=>{l.selectElements("animation_side_"+e).each(e=>{e.style.animationDuration=parseInt(r.dataset.relatedAutoplayDelay)+"s"})}),!1===o.auto&&l.selectElements("endslate-countdown").setModifier("visible","false"),l.selectElements("endslate-close-button").each(e=>{e.addEventListener("click",e=>{o.hide()})}),l.selectElements("endslate-link").each((e,t,a)=>{e.addEventListener("click",e=>{e.preventDefault(),o.play(a)}),e.style.cursor="pointer"}),N(document).keyup(function(e){r.contains(document.activeElement)&&("Escape"===e.key&&null===o.countdown.interval?o.hide():o.countdown.stop())})},update:()=>{let a=l.selectElements("endslate-item").currentEl;o.unviewed.forEach((e,t)=>{void 0!==a[t]&&((t=a[t]).getElementsByClassName(j.name+"__endslate-title")[0].textContent=e.title,t.getElementsByClassName(j.name+"__endslate-link")[0].href=e.desktopUrl,t.getElementsByClassName(j.name+"__endslate-thumbnail")[0].src=A.dataCleanup.images.getSmallestImage(e.primaryImageUrl,e.primaryImageSizes).url,t.getElementsByClassName(j.name+"__endslate-thumbnail")[0].srcset=A.dataCleanup.images.getSrcSet(e.primaryImageUrl,e.primaryImageSizes))})},countdown:{interval:null,iteration:r.dataset.relatedAutoplayDelay,start:e=>{d.broadcast("countdownStart"),o.countdown.iteration=r.dataset.relatedAutoplayDelay,o.countdown.updateCounter(),l.selectElements("endslate-countdown").setModifier("visible","true"),o.countdown.restartProgressAnimation(),o.countdown.interval=window.setInterval(()=>{1<o.countdown.iteration?o.countdown.iterate():(o.countdown.stop(),e())},1e3)},stop:()=>{d.broadcast("countdownStop"),l.selectElements("endslate-countdown").setModifier("visible","false"),["top","right","bottom","left"].forEach(e=>{l.selectElements("animation_side_"+e).each(e=>{e.style.visibility="hidden"})}),null!==o.countdown.interval&&(window.clearInterval(o.countdown.interval),o.countdown.interval=null)},iterate:()=>{l.selectElements("endslate-counter").currentEl[0];o.countdown.iteration--,o.countdown.updateCounter()},updateCounter:()=>{l.selectElements("endslate-counter").currentEl[0].textContent=o.countdown.iteration},restartProgressAnimation:()=>{["top","right","bottom","left"].forEach(t=>{l.selectElements("animation_side_"+t).each(e=>{e.style.visibility="visible",e.classList.remove(j.name+"__animation_side_"+t),e.offsetWidth,e.classList.add(j.name+"__animation_side_"+t)})})}},show:()=>{g.displayState===u.DisplayState.FULL_SCREEN?o.play(0):(o.visible=!0,o.auto&&o.countdown.start(()=>{o.play(0),o.countdown.iteration=r.dataset.relatedAutoplayDelay}),l.selectElements("endslate").setModifier("visible","true"),l.selectElements("endslate").currentEl[0].ariaHidden="false",l.selectElements("endslate").currentEl[0].style.visibility="visible",l.selectElements("player").currentEl[0].ariaHidden="true",window.setTimeout(()=>{l.selectElements("player").currentEl[0].style.visibility="hidden"},500),!r.contains(document.activeElement)&&document.activeElement!==document.body||l.selectElements("endslate-item").currentEl[0].getElementsByClassName(j.name+"__endslate-link")[0].focus())},hide:()=>{l.selectElements("endslate").currentEl[0].ariaHidden="true",l.selectElements("endslate").setModifier("visible","false"),l.selectElements("player").currentEl[0].ariaHidden="false",l.selectElements("player").currentEl[0].style.visibility="visible",window.setTimeout(()=>{l.selectElements("endslate").currentEl[0].style.visibility="hidden"},500),o.countdown.stop(),o.visible=!1},toggle:()=>{o.visible?o.hide():o.show()},play:e=>{if(4<o.videos.length){m=b(o.unviewed[e]),o.hide(),y(m);const t=o.unviewed[e];5<o.unviewed.length?(o.unviewed=o.unviewed.filter(e=>e.id!==t.id),d.broadcast("updatedUnviewedList",{videos:o.videos,unviewed:o.unviewed})):(o.unviewed=o.videos,d.broadcast("replenishedUnviewedList",{videos:o.videos,unviewed:o.unviewed})),window.setTimeout(()=>{o.update()},500)}}},e=()=>{A.listen("live-messages","elvsNewContent",(e,t,a)=>{var i,s,n,o;"true"===r.dataset.isWatchPlayer&&document.body.contains(r)&&(s={originalUrl:m.originalUrl,originalTitle:m.originalTitle,stream:m.stream,id:a.id,site:a.siteId,title:a.title,thumbnail:(i=l.selectElements("player-container").currentEl[0].getBoundingClientRect(),s=i.width*window.devicePixelRatio,i=i.height*window.devicePixelRatio,n=a.primaryImageUrl,o=a.primaryImageSizes,(0,A.dataCleanup.images.getBestImageBySize)(n,o,s,i).url),description:a.shortDescription,autoplay:a.autoplay,section:a.section,subsection:a.subsection,topic:a.topic,subtopic:a.subtopic,categories:a.categories.join(","),captions:m.captions,isLiveNow:(n="live_stream"===a.subsection,o="live_breaking"===a.subsection,"true"===r.dataset.isWatchPlayer&&"false"===R.model.isElvsDisabled?"24/7 Stream":n||o?"Live":"On Demand"),isUgc:a.isUgc&&"true"===a.isUgc.toString().toLowerCase()?"true":"false",isCct:"507"===a.siteId?"true":"false",trackingTags:Array.isArray(a.trackingTags)?a.trackingTags.join(","):a.trackingTags,duration:a.length,prerollDisabled:!0===a.disablePreroll},"true"===r.dataset.isWatchPlayer&&(s.moduleName="Live Stream Player Module"),m=s,v&&(f.trackEvent("mediaplay"),E.trackEvent("mediaplay")),d.broadcast("formattedNewVideoDataFromElvs",s))})},b=e=>{const n=e=>e.replace("http://","https://").replace("https://","https://");var t,a,i,s={originalUrl:m.originalUrl,originalTitle:m.originalTitle,stream:function(){let t="",a=!1,i=!1,s=R.model.platform;return"mobile"!==s&&"amp"!==s||(s="mobile-web"),e.renditions.forEach(e=>{if(e.platform&&e.platform.toLowerCase()===s)return n(e.url);e.platform&&"legacy"===e.platform.toLowerCase()?(a=!0,t=n(e.url)):a||(e.format&&"hls"===e.format.toLowerCase()?(i=!0,t=n(e.url)):i||e.url&&e.url.toLowerCase().endsWith(".m3u8")&&(t=n(e.url)))}),t}(),id:e.id,site:e.siteId,title:e.title,thumbnail:(t=l.selectElements("player-container").currentEl[0].getBoundingClientRect(),s=t.width*window.devicePixelRatio,t=t.height*window.devicePixelRatio,a=e.primaryImageUrl,i=e.primaryImageSizes,(0,A.dataCleanup.images.getBestImageBySize)(a,i,s,t).url),description:e.shortDescription,autoplay:!0,section:e.section,subsection:e.subsection,topic:e.topic,subtopic:e.subtopic,categories:e.categories.join(","),captions:e.captions.vtt,isLiveNow:(a="live_stream"===e.subsection,i="live_breaking"===e.subsection,"true"===r.dataset.isWatchPlayer&&"false"===R.model.isElvsDisabled?"24/7 Stream":a||i?"Live":"On Demand"),isUgc:e.isUgc&&"true"===e.isUgc.toString().toLowerCase()?"true":"false",isCct:"507"===e.siteId?"true":"false",trackingTags:Array.isArray(e.trackingTags)?e.trackingTags.join(","):e.trackingTags,duration:e.length,prerollDisabled:!0===e.disablePreroll};return"true"===r.dataset.isWatchPlayer&&(s.moduleName="Live Stream Player Module"),d.broadcast("formattedNewVideoData",s),s},y=e=>{d.broadcast("playingNewVideo",e),Object.entries(e).forEach(e=>{var[e,t]=e;r.dataset[e]=t}),h=_(),"true"===r.dataset.isWatchPlayer&&"false"===R.model.isElvsDisabled||(I.state=0),I.timer&&I.timer.cancel(),I.timer=null,p++,U(h)},w=()=>{let e=!0;var t,a;return!m.prerollDisabled&&(e=!(null===s&&(t=parseInt(m.duration),a=parseInt(r.dataset.disablePrerollAtDuration),"true"===m.isUgc.toLowerCase()&&(s=!0,e=!1),0<t)&&t<=a)&&e)},_=()=>{var e,t,a={paths:{player:"/assets/js-libs/akamai/amp/core/",plugins:"/assets/js-libs/akamai/amp/"},hls:{resources:[],enableWorker:!0,liveBackBufferLength:15,backBufferLength:15,liveMaxBackBufferLength:15,maxBufferSize:0,maxBufferLength:10},debug:!1,autoplay:m.autoplay,muted:(e="true"===r.dataset.mute,a=window.tegna.isRefresh,t=document.hidden,e||a&&t),captioning:{crossorigin:"anonymous"},media:{src:m.stream,type:"application/x-mpegURL",poster:m.thumbnail,title:m.title,track:(e=[],null!==m.captions&&""!==m.captions?e.push({kind:"captions",type:"text/vtt",title:"English",name:"English",src:m.captions,srclang:"en"}):u.Utils.getIOSversion()&&e.push({kind:"captions",type:"text/cea-608",srclang:"eng"}),e),guid:m.id},settings:{defaults:{captions:{fontColor:"white",fontOpacity:"100%",edgeType:"rightShadow",edgeColor:"black",edgeOpacity:"50%",backgroundColor:"black",backgroundOpacity:"50%",windowColor:"black",windowOpacity:"50%"}}},plugins:{react:{mode:"none"},amazonbidder:{resources:[{src:"//c.amazon-adsystem.com/aax2/apstag.js",type:"text/javascript"},{src:"${paths.plugins}amazonbidder/Amazonbidder.js",debug:"${paths.plugins}amazonbidder/Amazonbidder.js",type:"text/javascript"}],pubID:parseInt(r.dataset.a9Pubid),adServer:"DFP",slots:[{slotID:"videoSlot_"+i,mediaType:"video"}]},ima:{resources:[{src:"//imasdk.googleapis.com/js/sdkloader/ima3.js",debug:"//imasdk.googleapis.com/js/sdkloader/ima3_debug.js",type:"text/javascript",async:!0},{src:"${paths.plugins}ima/Ima.min.js",debug:"${paths.plugins}ima/Ima.js",type:"text/javascript",async:!0}],adTagUrl:{params:{env:"vp",gdfp_req:"1",impl:"s",output:"xml_vast3",sz:"920x508",unviewed_position_start:"1",cmsid:"12768",url:window.location.href.split("#")[0],description_url:window.location.href.split("#")[0],vid:r.dataset.id,iu:A.joinIfSet("/",[R.model.dfpid,R.model.gptid,"pre_roll",m.section,m.subsection,m.topic]),cust_params:{topic_section:m.subtopic,cue:"pre",cgm:"0",frmt:"22",plID:"6918249996585",contentid:m.id,ttID:m.id,right_rail_video:null!==r.closest(".related-videos")?"true":"false"}}}}}};return"Live"===m.isLiveNow||"24/7 Stream"===m.isLiveNow?a.media.temporalType="live":a.media.temporalType="vod",null!==r.closest(".live-video-banner__template-inner")&&(a.playsinline=!0,a.autoplayPolicy="muted",delete a.plugins.ima,delete a.plugins.prebid,delete a.plugins.amazonbidder),w()||(delete a.plugins.ima,delete a.plugins.prebid,delete a.plugins.amazonbidder),a};const E={vars:{},updateVars:()=>{E.vars={asset_id:m.id,content_categories:m.categories,content_title:m.title,video_name:m.title,content_type:"video",item_number:p,market:window.tegna.initialTracking.market,section:m.section||null,subsection:m.subsection||null,topic:m.topic||null,subtopic:m.subtopic||null,video_included:"true",video_related_play:("true"!==r.dataset.isWatchPlayer||"false"!==R.model.isElvsDisabled)&&1<p?"true":"false",platform:"mobile"===R.model.platform?"mobile_web":R.model.platform,site_type:"mobile"===R.model.platform?"mobile_web":R.model.platform,canonical_url:R.model.canonicalUrl,page_type:window.tegna.initialTracking.page_type,cct_story:m.isCct,video_length:m.duration?A.formatSeconds(m.duration):null,video_length_secs:m.duration||null,call_letters:window.tegna.initialTracking.call_letters,tracking_tags:m.trackingTags,is_live:"true"===r.dataset.isWatchPlayer&&"false"===R.model.isElvsDisabled?"24/7 Stream":m.isLiveNow},r.closest("[data-analytics-name]")&&(E.vars.module_name=r.closest("[data-analytics-name]").dataset.analyticsName)},trackEvent:(e,t,a)=>{var i;g.displayState!==u.DisplayState.PICTURE_IN_PICTURE&&document.body.contains(r)&&(E.updateVars(),(i=JSON.parse(JSON.stringify(E.vars))).event_name_ga4=e,i.event_category_ga4=t||"video",i.event_label_ga4=a||E.vars.content_title,O.fire("ga4",i))},trackView:()=>{var e,t;document.body.contains(r)&&(E.updateVars(),e={type:"view"},(t=JSON.parse(JSON.stringify(f.varsGa4))).event_name_ga4="page_view",O.fire("ga4",t,"tealium",e))}},f={vars:{},updateVars:()=>{f.vars={asset_id:m.id,content_categories:m.categories,content_title:m.title,video_name:m.title,content_type:"video",page_url:window.location.href,item_number:p,market:window.tegna.initialTracking.market,section:m.section||null,subsection:m.subsection||null,topic:m.topic||null,subtopic:m.subtopic||null,video_included:"true",video_related_play:("true"!==r.dataset.isWatchPlayer||"false"!==R.model.isElvsDisabled)&&1<p?"true":"false",platform:window.tegna.initialTracking.platform,site_type:window.tegna.initialTracking.site_type,canonical_url:window.tegna.initialTracking.canonical_url,page_type:window.tegna.initialTracking.page_type,cct_story:m.isCct,video_length:m.duration?A.formatSeconds(m.duration):null,call_letters:window.tegna.initialTracking.call_letters,tracking_tags:m.trackingTags,video_type:"true"===r.dataset.isWatchPlayer&&"false"===R.model.isElvsDisabled?"24/7 Stream":m.isLiveNow},r.closest("[data-analytics-name]")&&(f.vars.module_name=r.closest("[data-analytics-name]").dataset.analyticsName)},trackEvent:(e,t,a)=>{var i;g.displayState!==u.DisplayState.PICTURE_IN_PICTURE&&document.body.contains(r)&&(f.updateVars(),(i=JSON.parse(JSON.stringify(f.vars))).event=e,i.category=t||"video",i.label=a||f.vars.content_title,A.broadcast(j.name,e,{_trackEvent:i,videoData:m}))},trackView:()=>{var e;document.body.contains(r)&&(e=JSON.parse(JSON.stringify(f.vars)),A.broadcast(j.name,"videoView",{_trackView:e}))}};let h=_();const k=()=>{A.listen((e,t,a)=>{if(document.body.contains(r)&&e===j.name&&!Object.is(a.module,d))switch(t){case"docking":d.broadcast("received docking from another player"),g&&"pause"in g&&D.isDocked&&g.pause(),D.undock();break;case"play":case"adPlay":g&&"pause"in g&&g.pause(),D.undock()}})},C=()=>{A.listen("modal","showing",function(e,t,a){g&&"pause"in g&&document.body.contains(r)&&g.pause()}),A.listen("longform","playClicked",function(e,t,a){a.$video[0]===r&&document.body.contains(r)&&g.play()}),A.listen("longform","closeClicked",function(e,t,a){a.$video[0]===r&&document.body.contains(r)&&g.pause()})},I={timer:null,state:0,increment:6e4},D={isDocked:!1,hasBeenViewed:!1,dockerEl:r.getElementsByClassName(j.name+"__docker")[0],dockerContainerEl:r.getElementsByClassName(j.name+"__docker-container")[0],dockCloseButton:r.getElementsByClassName(j.name+"__docker-close")[0],dock:()=>{D.isDocked||(d.broadcast("docking",{module:d}),r.closest(".grid__content").style.zIndex="2",r.classList.add(j.name+"_docked_true"),r.classList.remove(j.name+"_docked_false"),D.dockerEl.classList.add(j.name+"__docker_state_docked"),D.dockCloseButton.classList.add(j.name+"__docker-close_visible_true"),D.isDocked=!0)},undock:()=>{D.isDocked&&(d.broadcast("undocking",{module:d}),r.closest(".grid__content").style.zIndex=null,r.classList.add(j.name+"_docked_false"),r.classList.remove(j.name+"_docked_true"),D.dockerEl.classList.remove(j.name+"__docker_state_docked"),D.dockCloseButton.classList.remove(j.name+"__docker-close_visible_true"),D.isDocked=!1)},setup:()=>{"desktop"===R.model.platform&&"true"===r.dataset.float?(A.observeIntersections(r,(e,t)=>{e.isIntersecting?(D.hasBeenViewed=!0,D.undock()):D.hasBeenViewed&&D.dock()}),D.dockCloseButton.addEventListener("click",e=>{D.undock(),g&&g.pause()})):A.observeIntersections(r,(e,t)=>{e.isIntersecting?D.hasBeenViewed=!0:g&&g.pause()})}},T={CLICKED:function(e){d.broadcast("adClicked")},COMPANION:function(e){d.broadcast("adCompanionProcessed")},CONTAINER_CREATED:function(e){d.broadcast("adContainerCreated")},DURATION_CHANGE:function(e){d.broadcast("adDurationChanged")},ENDED:function(e){f.trackEvent("ad-complete"),E.trackEvent("ad_complete")},ERROR:function(e){d.broadcast("adError")},LOADED:function(e){d.broadcast("adLoaded")},MANAGER_LOADED:function(e){d.broadcast("adManagerLoaded")},PAUSE:function(e){v=!1,d.broadcast("adPause")},PLAY:function(e){v=!0,d.broadcast("adPlay",{videoData:m,module:d})},RESUME:function(e){v=!0,d.broadcast("adResume")},STARTED:function(e){v=!0,f.trackEvent("ad-start"),E.trackEvent("ad_start")},TIME_REMAINING:function(e){},TIME_UPDATE:function(e){},SKIPPED:function(e){f.trackEvent("ad-skip"),E.trackEvent("ad_skip")}},S={PLAY:function(e){d.broadcast("play",{videoData:m,module:d}),null!==I.timer&&g.displayState!==u.DisplayState.PICTURE_IN_PICTURE&&I.timer.resume(),v=!0},PAUSE:function(e){g.playState===u.PlayState.PLAYING&&(f.trackEvent("mediapause"),v=!1),null!==I.timer&&I.timer.pause()},RESUME:function(){v=!0},ENDED:function(e){"true"===r.dataset.isWatchPlayer&&"false"===R.model.isElvsDisabled||f.trackEvent("milestoneReached-100%"),null!==I.timer&&I.timer.pause(),o.show()},DISPLAY_STATE_CHANGE:function(e){d.broadcast("displayStateChange",{old:e.data.previous,new:e.data.value}),e.data.previous===u.DisplayState.FULL_SCREEN?f.trackEvent("leave full screen"):e.data.value===u.DisplayState.FULL_SCREEN&&f.trackEvent("enter full screen"),e.data.previous===u.DisplayState.PICTURE_IN_PICTURE?g.playState===u.PlayState.PLAYING&&null!==I.timer&&I.timer.resume():e.data.value===u.DisplayState.PICTURE_IN_PICTURE&&null!==I.timer&&I.timer.pause()},MUTE_CHANGE:function(e){t=!1!==e.data||(f.trackEvent("unmute"),E.trackEvent("unmute"),!1)},STARTED:function(e){v=!0,f.trackEvent("mediaplay"),E.trackEvent("mediaplay"),null===I.timer?I.timer=new n(()=>{document.body.contains(r)&&(I.state++,f.trackEvent("Duration","video",I.state),E.trackEvent("duration","video",I.state),d.broadcast("duration",{minutes:I.state}),!a||a&&!t)&&"refreshTimer"in R&&"reset"in R.refreshTimer&&R.refreshTimer.reset()},I.increment):I.timer.resume()},AUTOPLAY_BLOCKED:function(e){d.broadcast("autoplayBlocked")}},L=(e,t)=>{let a=e;var e=e=>encodeURIComponent(encodeURIComponent(e).replace(/'/g,"%27").replace(/\(/g,"%28").replace(/\)/g,"%29")),i="news"===m.section&&"live_stream"===m.subsection,s="news"===m.section&&"dvr"===m.subsection,n="true"===r.dataset.isWatchPlayer&&"false"===R.model.isElvsDisabled;return null===t&&(t=""),(i||s||n)&&(a.includes("?")?a+="&":a+="?",a+=A.assembleQueryString({"ads.ua":e(navigator.userAgent),"ads.player_height":Math.round(r.getBoundingClientRect().height),"ads.player_width":Math.round(r.getBoundingClientRect().width),"ads.us_privacy":A.getCookie("usprivacy"),"ads.site_id":r.dataset.publicaId,"ads.content_id":m.id,"ads.site_page":e(R.model.environmentBaseUrl),"ads.site_name":e(R.model.callLetters),"ads.page_url":e(R.model.environmentBaseUrl),"ads.src_page_url":e(window.location.href),"ads.title":e(m.title),"ads.channel":R.model.callLetters,"ads.genre":m.section,"ads.rating":"NR","ads.p_uid":t,"ads.gpp":window.tegna.getCookie("OTGPPConsent")},!1,!0,!0)),a},P={embed:()=>{var e={width:640,height:360,style:"border:1px solid #e6e6e6",src:`${R.model.environmentBaseUrl}embeds/video/responsive/${r.dataset.site}-${m.id}/iframe`,allowfullscreen:!0,webkitallowfullscreen:!0,mozallowfullscreen:!0},e=`<iframe ${A.assembleHtmlAttributes(e)}></iframe>`;d.broadcast("sharingEmbed",{details:e}),window.navigator.clipboard.writeText(e).then(e=>{d.broadcast("sharedEmbed");var t=document.createElement("tegna-alert"),a=document.createTextNode("Embed code copied to clipboard");t.appendChild(a),document.body.appendChild(t)})},email:()=>{"true"===r.dataset.isWatchPlayer&&"false"===R.model.isElvsDisabled?window.location.href="mailto:?body=Watch%20Live%0D%0A%0D%0A"+encodeURIComponent(R.model.environmentBaseUrl+"watch"):window.location.href=`mailto:?body=${encodeURIComponent(m.originalTitle)}%0D%0A%0D%0A`+encodeURIComponent(m.originalUrl)},facebook:()=>{"true"===r.dataset.isWatchPlayer&&"false"===R.model.isElvsDisabled?window.open(`https://www.facebook.com/dialog/share?app_id=${r.dataset.facebookAppId}&display=popup&href=${encodeURIComponent(R.model.environmentBaseUrl+"watch")}&redirect_uri=`+encodeURIComponent(R.model.environmentBaseUrl+"watch"),"_blank"):window.open(`https://www.facebook.com/dialog/share?app_id=${r.dataset.facebookAppId}&display=popup&href=${encodeURIComponent(m.originalUrl)}&redirect_uri=`+encodeURIComponent(m.originalUrl),"_blank")}},U=s=>{const n=()=>{if(1<p)d.broadcast("playingNewVideo",{el:r,videoData:m}),g.setAutoplay(!0),g.setMedia(s.media);else{d.broadcast("creatingPlayer",{playerEl:c,settings:s}),"Hls"in window&&"isSupported"in window.Hls?d.broadcast("hlsReady"):d.broadcast("hlsNotReady"),u.AMP.create(c,s,e=>{d.broadcast("createdPlayer",{playerEl:c,player:e.player}),(g=e.player).addEventListener("started",e=>{g.react.mode="auto"}),g.addEventListener("share",function(e){P[e.detail.provider.id]()}),Object.entries(T).forEach(e=>{var[e,t]=e;g.ads.addEventListener(u.AdEvents[e],t)}),Object.entries(S).forEach(e=>{var[e,t]=e;g.addEventListener(u.Events[e],t)})});const t=new MutationObserver(function(e){e.forEach(function(e){e.removedNodes.forEach(function(e){e&&e.dataset&&"video"===e.dataset.module&&(d.broadcast("removed"),g&&"destroy"in g&&g.destroy(),t.disconnect())})})});t.observe(r.parentElement,{subtree:!1,childList:!0})}};var e,t="news"===m.section&&"live_stream"===m.subsection,a="news"===m.section&&"dvr"===m.subsection,i="true"===r.dataset.isWatchPlayer&&"false"===R.model.isElvsDisabled;if(t||a||i){let t=!1;{var o=e=>{t||(t=!0,s.media.src=L(s.media.src,e),n())};const l="video__publicaSsaiScript";let a=!1,i=Date.now();document.getElementById(l)?(e=document.getElementById(l).dataset.uid)?(a=!0,d.broadcast("readingPublica"),o(e)):document.getElementById(l).addEventListener("received",e=>{a=!0,d.broadcast("readingPublica"),o(document.getElementById(l).dataset.uid)}):(window.publicaConfig={publicaUserSyncCallback:e=>{document.getElementById(l).dataset.uid=e;var t=new Event("received");document.getElementById(l).dispatchEvent(t),a=!0,d.broadcast("publicaReceived",{userId:e,time:Date.now()-i}),o(e)},enableUserSync:!0},(e=document.createElement("script")).id=l,e.src="//sync.publica-ctv.com/ssai-sync.js",e.async=!0,d.broadcast("addingPublicaSSAI"),document.body.appendChild(e)),window.setTimeout(()=>{a||(d.broadcast("publicaTimedOut"),o(null))},5e3)}}else n()}})});
//# sourceMappingURL=video_7.7.5.js.map