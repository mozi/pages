var a0_0x2a5c=['jsonp','filter','exchange','full_name','#zonebourse','none','_monitorModel','max','map','lastChangeTimestamp','_symbolsList','_sortingColumn','setSortingColumn','_cols','_title','indexOf','Traded','Ticked','_currentSorting','_groupedGrid','sortGrid','_fixStaticCells','_root','title','values','sort','cols','currentValue','localeCompare','reduce','symbol','_name','substr','min','&Height=','round','body','clientWidth','&Type=Custom&Intraday=1&Cycle=DAY1&Duration=6&TopMargin=10&Render=Candle&ShowCopyright=0&ShowName=1&Company=4Traders_us&Name=','https://uk.advfn.com/p.php?pid=staticchart&width=','&t=6&vol=1&p=5&dm=2&s=L^','getElementById','contentDocument','style','height','width','scrollWidth','getAppName','getSymbol','first','match','slice','join','ready','undefined','search','get','random','prototype','readyState','send','includes','getDay','log','market\x20is\x20currently\x20closed\x20in\x20weekend.','getHours','market\x20is\x20currently\x20closed.','getMinutes','catch','error','then','screenName','sessionId','reload','https://','post','cors','POST','application/json','uk.advfn.com','com.advfn.android.mobile','2.0.5120','en-GB','N/A','Android/8.0.0/SM-G950F','account','monitor','LSE:','getTimezoneOffset','//rpc.advfn.com','//uk.advfn.com','wss://','streamer',':7000',':80','#000090','#CF0000','#008000','blue_up.png','green_dot.png','red_down.png','getSession','length','appName','trades','_bootConfiguration','feedSymbol','_currentApp','_createTradesTable','onselect','setSession','start','LLOY','split','pop','tradesApp','<iframe\x20frameborder=\x220\x22\x20scrolling=\x22no\x22\x20id=\x22tradesApp\x22\x20src=\x22?q=','&u=','\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</iframe><br/><img\x20id=\x22zonebourse\x22\x20style=\x22margin-left:-7px;\x22\x20src=\x22','\x22><br/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20id=\x22staticchart\x22\x20style=\x22margin-top:3px;\x20margin-left:-1px\x22\x20src=\x22','appendTo','#jsToolRoot','contentWindow','getUsername','_sid','attr','src','css','display','block'];(function(_0x5048a5,_0x5b7292){var _0x33d953=function(_0x28b052){while(--_0x28b052){_0x5048a5['push'](_0x5048a5['shift']());}};_0x33d953(++_0x5b7292);}(a0_0x2a5c,0xb8));var a0_0x4d68=function(_0x317a0a,_0xe26d94){_0x317a0a=_0x317a0a-0x0;var _0x15ca84=a0_0x2a5c[_0x317a0a];return _0x15ca84;};if(typeof jQuery===a0_0x4d68('0x0')||jQuery===null)location['reload'](!![]);const params=new URLSearchParams(location[a0_0x4d68('0x1')]);const symbols=params[a0_0x4d68('0x2')]('q')['split'](',');const username=params[a0_0x4d68('0x2')]('u')||''['random']();const password=params[a0_0x4d68('0x2')]('p')||username[a0_0x4d68('0x3')]();const websocket=null;IPC[a0_0x4d68('0x4')]['_handleReconnection']=reset;function send(_0x5e663e){if(!_0x5e663e||!websocket)return;if(websocket[a0_0x4d68('0x5')]===0x1)websocket[a0_0x4d68('0x6')](_0x5e663e);else setTimeout(send,0x3e8,_0x5e663e);}function reset(_0xcc27d3){if(_0xcc27d3===username&&!!localStorage[username])return send(localStorage[username]);else if(!!_0xcc27d3&&_0xcc27d3[0x0]!=='{')localStorage[username]=_0xcc27d3;else{delete localStorage[username];return send(username);}if([0x0,0x6][a0_0x4d68('0x7')](new Date()[a0_0x4d68('0x8')]()))console[a0_0x4d68('0x9')](a0_0x4d68('0xa'))||setTimeout(location['reload'],(0x3c-new Date()['getMinutes']()+0x3c*0x17)*0xea60);else if(new Date()[a0_0x4d68('0xb')]()<0x7||new Date()[a0_0x4d68('0xb')]()>0x10)console['log'](a0_0x4d68('0xc'))||setTimeout(location['reload'],(0x3c-new Date()[a0_0x4d68('0xd')]())*0xea60);else setTimeout(onload,0xbb8);};function onload(){if(!!username&&!!localStorage[username])app(username,localStorage[username],symbols);else login(username,password)[a0_0x4d68('0xe')](console[a0_0x4d68('0xf')])[a0_0x4d68('0x10')](_0x249ba9=>_0x249ba9&&!!_0x249ba9['sessionId']?app(_0x249ba9[a0_0x4d68('0x11')],_0x249ba9[a0_0x4d68('0x12')],symbols):location[a0_0x4d68('0x13')](delete localStorage[username]))[a0_0x4d68('0x10')](send);};function login(_0xcea287,_0x374744){return fetch(a0_0x4d68('0x14')+a0_0x4d68('0x15')[a0_0x4d68('0x16')]()+'/secure.advfn.com:443/mobileAPI/MobileLogin',{'method':a0_0x4d68('0x17'),'headers':{'Content-Type':a0_0x4d68('0x18'),'Origin':a0_0x4d68('0x19')},'body':JSON['stringify']({'userName':_0xcea287,'password':_0x374744,'appId':a0_0x4d68('0x1a'),'appVersion':a0_0x4d68('0x1b'),'locale':a0_0x4d68('0x1c'),'deviceToken':a0_0x4d68('0x1d'),'deviceTokenType':'GCM/legacy','deviceType':a0_0x4d68('0x1e')})})[a0_0x4d68('0x10')](_0x9fbfe8=>_0x9fbfe8['json']())['then'](_0x556207=>_0x556207[a0_0x4d68('0x1f')]);};function app(_0x3ff6f3,_0x3abe66,_0x435425){let _0x12274e={'site':'uk','locale':'en_GB','monitorId':'1','appName':a0_0x4d68('0x20'),'timezone':'GB-Eire','indices':['FTSE:UKX'],'feedSymbol':'L^'+_0x435425[0x0],'displaySymbol':a0_0x4d68('0x21')+_0x435425[0x0],'timezoneOffset':new Date()[a0_0x4d68('0x22')]()*-0x3c,'rpcUrl':a0_0x4d68('0x23'),'advfnUrl':a0_0x4d68('0x24'),'streamerUrl':a0_0x4d68('0x25')[a0_0x4d68('0x26')](),'alternativeStreamerUrl':'ws://'['streamer']()+a0_0x4d68('0x27'),'alternativeStreamerUrlFallback':'ws://'[a0_0x4d68('0x26')]()+a0_0x4d68('0x28'),'colorSchema':{'up':a0_0x4d68('0x29'),'down':a0_0x4d68('0x2a'),'unchanged':a0_0x4d68('0x2b')},'changeArrows':{'up':a0_0x4d68('0x2c'),'no_change':a0_0x4d68('0x2d'),'down':a0_0x4d68('0x2e')},'monitorSettings':{'indexBreakUp':!![],'orderSymbols':!![],'defaultDisplay':'1','symbols':_0x435425}};let _0xbcb549=Env[a0_0x4d68('0x2f')]();if(_0x435425[a0_0x4d68('0x30')]===0x1){_0x12274e[a0_0x4d68('0x31')]=a0_0x4d68('0x32');if(_0xbcb549){if(_0xbcb549[a0_0x4d68('0x33')][a0_0x4d68('0x34')]==='L^'+_0x435425[0x0])return;else if(_0xbcb549[a0_0x4d68('0x35')]!=null){_0xbcb549[a0_0x4d68('0x35')]['clearState']();_0xbcb549[a0_0x4d68('0x35')][a0_0x4d68('0x36')]();}}}else if(!!sessionStorage[a0_0x4d68('0x37')])setTimeout(()=>window[a0_0x4d68('0x37')](sessionStorage[a0_0x4d68('0x37')]),0xbb8);_0xbcb549=new Session(_0x3ff6f3,localStorage[username]=_0x3abe66,_0x12274e);Env[a0_0x4d68('0x38')](_0xbcb549);_0xbcb549[a0_0x4d68('0x39')]();return _0x3abe66;}function onselect(_0x580115=a0_0x4d68('0x3a')){_0x580115=_0x580115[a0_0x4d68('0x3b')]('/')[a0_0x4d68('0x3c')]();sessionStorage[a0_0x4d68('0x37')]=_0x580115;let _0x1ae5ac=document['getElementById'](a0_0x4d68('0x3d'));if(!_0x1ae5ac){return $(a0_0x4d68('0x3e')+_0x580115+a0_0x4d68('0x3f')+username+a0_0x4d68('0x40')+zonebourse(_0x580115)+a0_0x4d68('0x41')+staticchart(_0x580115)+'\x22>')[a0_0x4d68('0x42')](a0_0x4d68('0x43'));}_0x1ae5ac[a0_0x4d68('0x44')]['app'](Env[a0_0x4d68('0x45')](),Env[a0_0x4d68('0x2f')]()[a0_0x4d68('0x46')],[_0x580115]);$('#staticchart')[a0_0x4d68('0x47')](a0_0x4d68('0x48'),staticchart(_0x580115));if(!!localStorage[_0x580115+'zb'])return $('#zonebourse')[a0_0x4d68('0x47')]('src',zonebourse(_0x580115))[a0_0x4d68('0x49')](a0_0x4d68('0x4a'),a0_0x4d68('0x4b'));fetch(a0_0x4d68('0x14')+a0_0x4d68('0x2')[a0_0x4d68('0x16')]()+'/www1.zonebourse.com:443/mods_a/charts/TV/function/search?query='+_0x580115+'&limit=99')[a0_0x4d68('0x10')](_0x11f000=>_0x11f000[a0_0x4d68('0x4c')]())[a0_0x4d68('0x10')](_0x3f9c33=>_0x3f9c33[a0_0x4d68('0x4d')](_0x2b8a4d=>_0x2b8a4d['symbol']===_0x580115&&_0x2b8a4d[a0_0x4d68('0x4e')]['match'](/gb\.png/))[0x0])[a0_0x4d68('0x10')]((_0x195185={})=>!(localStorage[_0x580115+'zb']=_0x195185[a0_0x4d68('0x4f')])?$(a0_0x4d68('0x50'))[a0_0x4d68('0x49')]('display',a0_0x4d68('0x51')):$(a0_0x4d68('0x50'))['attr'](a0_0x4d68('0x48'),zonebourse(_0x580115))[a0_0x4d68('0x49')](a0_0x4d68('0x4a'),a0_0x4d68('0x4b')));};function resort(){let _0x49adf2=Env[a0_0x4d68('0x2f')]()[a0_0x4d68('0x35')];if(!_0x49adf2||!_0x49adf2[a0_0x4d68('0x52')])return;let _0x46dfcd=Math[a0_0x4d68('0x53')]['apply'](Math,Object['values'](_0x49adf2[a0_0x4d68('0x52')])[a0_0x4d68('0x54')](_0x595022=>_0x595022['modelLastChangeTimestamp']));if(window[a0_0x4d68('0x55')]===_0x46dfcd)return Env[a0_0x4d68('0x2f')]()['_root']['_refresh']();window[a0_0x4d68('0x55')]=_0x46dfcd;let _0x3574fd=new Date()[a0_0x4d68('0xb')]();if(_0x49adf2[a0_0x4d68('0x56')][a0_0x4d68('0x57')]<0x0)_0x49adf2[a0_0x4d68('0x56')][a0_0x4d68('0x58')](_0x49adf2[a0_0x4d68('0x59')]['map'](_0xd6494b=>_0xd6494b[a0_0x4d68('0x5a')])[a0_0x4d68('0x5b')](_0x3574fd>0x7&&_0x3574fd<0x11?a0_0x4d68('0x5c'):a0_0x4d68('0x5d')),_0x49adf2[a0_0x4d68('0x5e')]);_0x49adf2[a0_0x4d68('0x5f')][a0_0x4d68('0x60')]();_0x49adf2[a0_0x4d68('0x61')]();Env['getSession']()[a0_0x4d68('0x62')]['_refresh']();document[a0_0x4d68('0x63')]=Object[a0_0x4d68('0x64')](_0x49adf2[a0_0x4d68('0x52')])[a0_0x4d68('0x65')]((_0x5643f9,_0x11b7b2)=>(_0x11b7b2[a0_0x4d68('0x66')][_0x49adf2['_symbolsList'][a0_0x4d68('0x57')]]||{'currentValue':''})[a0_0x4d68('0x67')][a0_0x4d68('0x68')]((_0x5643f9[a0_0x4d68('0x66')][_0x49adf2[a0_0x4d68('0x56')]['_sortingColumn']]||{'currentValue':''})['currentValue']))[a0_0x4d68('0x69')]((_0xb907dc,_0x5073bc)=>_0x5073bc[a0_0x4d68('0x66')][0x4]?_0xb907dc+',\x20'+_0x5073bc[a0_0x4d68('0x6a')][a0_0x4d68('0x6b')]+':\x20'+_0x5073bc[a0_0x4d68('0x66')][0x4][a0_0x4d68('0x67')]:_0xb907dc,'')[a0_0x4d68('0x6c')](0x2);};function zonebourse(_0x3dc629){_0x3dc629=localStorage[_0x3dc629+'zb']||_0x3dc629;return'https://www.zonebourse.com/zbcache/charts/ObjectChart.aspx?Width='+Math[a0_0x4d68('0x6d')](document['body']['clientWidth']+0x11,0x320)+a0_0x4d68('0x6e')+Math[a0_0x4d68('0x6f')](Math[a0_0x4d68('0x6d')](document[a0_0x4d68('0x70')][a0_0x4d68('0x71')],0x1f4))+a0_0x4d68('0x72')+_0x3dc629;}function staticchart(_0x2b9d14){return a0_0x4d68('0x73')+Math[a0_0x4d68('0x6d')](document[a0_0x4d68('0x70')]['clientWidth']+0x11,0x320)+'&height='+Math[a0_0x4d68('0x6f')](Math[a0_0x4d68('0x6d')](document[a0_0x4d68('0x70')][a0_0x4d68('0x71')],0x1f4)*0.6)+a0_0x4d68('0x74')+_0x2b9d14;}setInterval(function(){if(!Env[a0_0x4d68('0x2f')]())return;let _0x49daef=document[a0_0x4d68('0x75')]('tradesApp');if(_0x49daef&&_0x49daef[a0_0x4d68('0x76')][a0_0x4d68('0x70')]){_0x49daef[a0_0x4d68('0x77')][a0_0x4d68('0x78')]=$(document['getElementById'](a0_0x4d68('0x3d'))['contentDocument']['body'])['css'](a0_0x4d68('0x78'));_0x49daef[a0_0x4d68('0x77')][a0_0x4d68('0x79')]=_0x49daef[a0_0x4d68('0x76')][a0_0x4d68('0x70')][a0_0x4d68('0x7a')]+'px';}if(Env[a0_0x4d68('0x7b')]()=='monitor')resort();else if(Env[a0_0x4d68('0x7c')]()&&!!Env[a0_0x4d68('0x7c')]()[a0_0x4d68('0x7c')]())document[a0_0x4d68('0x63')]=[Env[a0_0x4d68('0x7c')]()['getSymbol']()]['concat']($('tr')[a0_0x4d68('0x7d')]()['text']()['split'](/\n/)[a0_0x4d68('0x4d')](_0x3b430f=>_0x3b430f[a0_0x4d68('0x7e')](/^\d+[,\.]/))[a0_0x4d68('0x7f')](0x0,0x4)[a0_0x4d68('0x54')](_0xba6a63=>_0xba6a63['trim']()))[a0_0x4d68('0x80')]('\x20');},0x3e8);$(document)[a0_0x4d68('0x81')](onload);