//tealium universal tag - utag.145 ut4.0.202312122133, Copyright 2023 Tealium.com Inc. All Rights Reserved.
window._6si=window._6si||[];try{(function(id,loader){var u={"id":id};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}
var match=/ut\d\.(\d*)\..*/.exec(utag.cfg.v);if(utag.ut.loader===undefined||!match||parseInt(match[1])<41){u.loader=function(o,a,b,c,l,m){utag.DB(o);a=document;if(o.type=="iframe"){m=a.getElementById(o.id);if(m&&m.tagName=="IFRAME"){b=m;}else{b=a.createElement("iframe");}o.attrs=o.attrs||{};utag.ut.merge(o.attrs,{"height":"1","width":"1","style":"display:none"},0);}else if(o.type=="img"){utag.DB("Attach img: "+o.src);b=new Image();}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";}if(o.id){b.id=o.id;}for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l]);}b.setAttribute("src",o.src);if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState=="complete"||this.readyState=="loaded"){this.onreadystatechange=null;o.cb();}};}}if(o.type!="img"&&!m){l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l=="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}}};}else{u.loader=utag.ut.loader;}
if(utag.ut.typeOf===undefined){u.typeOf=function(e){return({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();};}else{u.typeOf=utag.ut.typeOf;}
u.ev={"view":1};u.scriptrequested=false;u.map_func=function(arr,obj,item){var i=arr.shift();obj[i]=obj[i]||{};if(arr.length>0){u.map_func(arr,obj[i],item);}else{obj[i]=item;}};u.isEmptyObject=function(o,a){for(a in o){if(utag.ut.hasOwn(o,a))return false;}
return true;};u.toBoolean=function(val){val=val||"";return val===true||val.toLowerCase()==="true"||val.toLowerCase()==="on";};u.map={"_6sense.company.name":"_6sense.company.name","_6sense.employee.range":"_6sense.company.employee_range","_6sense.industry":"_6sense.industry","_6sense.trendmicro.buying_stage":"_6sense.scores.trendmicro.buying_stage","_6sense.trendmicro.profile_fit":"_6sense.scores.trendmicro.profile_fit","_6sense.vision.buying_stage":"_6sense.scores.vision.buying_stage","_6sense.vision.profile_fit":"_6sense.scores.vision.profile_fit"};u.extend=[];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){utag.DB("send:145");utag.DB(b);var c,d,e,f,i;u.data={"base_url":"//j.6sc.co/6si.min.js","org_token":"f0978075a275d14104571cd0b3e9919c9748869b","enableCompanyDetails":true,"customer_token":"810eb8f4ed8abcee5cd1e233263d8d3f","enableEventTracking":true,"enableRetargeting":true,"setEndpoint":"b.6sc.co","custom":{}};utag.DB("send:145:EXTENSIONS");utag.DB(b);c=[];for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.map_func(e[f].split("."),u.data,b[d]);}}}
utag.DB("send:145:MAPPINGS");utag.DB(u.data);if(!u.data.org_token&&!u.data.customer_token){utag.DB(u.id+": Tag not fired: Required attribute not populated");return;}
if(u.data.org_token){window._6si.push(["enableCompanyDetails",u.toBoolean(u.data.enableCompanyDetails)]);window._6si.push(["setEpsilonKey",u.data.org_token]);}
if(u.data.customer_token){window._6si.push(["setToken",u.data.customer_token]);if(u.data.trackedTags){window._6si.push(["enableEventTracking",u.toBoolean(u.data.enableEventTracking),u.data.trackedTags]);}else{window._6si.push(["enableEventTracking",u.toBoolean(u.data.enableEventTracking)]);}
window._6si.push(["enableRetargeting",u.toBoolean(u.data.enableRetargeting)]);window._6si.push(["setEndpoint",u.data.setEndpoint]);if(!u.isEmptyObject(u.data.setWhitelistFields)){window._6si.push(["setWhitelistFields",u.data.setWhitelistFields]);}
if(!u.isEmptyObject(u.data.setPageAttributes)){window._6si.push(["setPageAttributes",u.data.setPageAttributes]);}
if(!u.isEmptyObject(u.data.setThirdPartyValues)){var vendors=[],vendorName;for(vendorName in u.data.setThirdPartyValues){vendors.push([vendorName,u.data.setThirdPartyValues[vendorName]]);}
window._6si.push(["setThirdPartyValues",vendors]);}
if(u.data.setCustomMetatags){var metaTags=[];for(i=0;i<u.data.setCustomMetatags.length;i++){metaTags.push({"name":u.data.setCustomMetatags[i]});}
window._6si.push(["setCustomMetatags",metaTags]);}}
if(!u.scriptrequested){u.scriptrequested=true;u.loader({"type":"script","src":u.data.base_url,"cb":null,"loc":"script","id":"utag_145","attrs":{}});}
utag.DB("send:145:COMPLETE");}};utag.o[loader].loader.LOAD(id);}("145","trendmicro.nabucms"));}catch(error){utag.DB(error);}