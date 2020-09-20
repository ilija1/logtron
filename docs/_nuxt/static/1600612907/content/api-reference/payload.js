__NUXT_JSONP__("/content/api-reference", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD){return {data:[{page:{title:"API Reference",toc:[{id:ad,depth:S,text:"logtron Module"},{id:N,depth:C,text:N},{id:ae,depth:S,text:"logtron.config Module"},{id:O,depth:C,text:O},{id:af,depth:S,text:"logtron.formatters Module"},{id:ag,depth:C,text:_},{id:ah,depth:S,text:"logtron.handlers Module"},{id:ai,depth:C,text:$},{id:aj,depth:S,text:"logtron.util Module"},{id:T,depth:C,text:T},{id:U,depth:C,text:U},{id:V,depth:C,text:V}],body:{type:"root",children:[{type:a,tag:W,props:{id:ad},children:[{type:a,tag:l,props:{ariaHidden:m,href:"#logtron-module",tabIndex:n},children:[{type:a,tag:d,props:{className:[o,p]},children:[]}]},{type:a,tag:e,props:{},children:[{type:b,value:"logtron"}]},{type:b,value:X}]},{type:b,value:c},{type:a,tag:D,props:{id:N},children:[{type:a,tag:l,props:{ariaHidden:m,href:"#autodiscover",tabIndex:n},children:[{type:a,tag:d,props:{className:[o,p]},children:[]}]},{type:a,tag:e,props:{},children:[{type:b,value:N}]}]},{type:b,value:c},{type:a,tag:w,props:{className:[x]},children:[{type:a,tag:y,props:{},children:[{type:a,tag:e,props:{className:[z,A]},children:[{type:a,tag:d,props:{className:[E]},children:[{type:a,tag:d,props:{className:[j]},children:[{type:b,value:F}]},{type:b,value:r},{type:a,tag:d,props:{className:[s]},children:[{type:b,value:N}]},{type:b,value:t},{type:a,tag:d,props:{className:[u]},children:[{type:b,value:"\n  name=None,\n  level=logging.INFO,\n  **kwargs,\n"}]},{type:b,value:v}]},{type:b,value:ak}]}]}]},{type:b,value:c},{type:a,tag:h,props:{},children:[{type:a,tag:k,props:{},children:[{type:b,value:G}]}]},{type:b,value:c},{type:a,tag:H,props:{},children:[{type:b,value:c},{type:a,tag:q,props:{},children:[{type:b,value:"A python "},{type:a,tag:e,props:{},children:[{type:b,value:"logging.Logger"}]},{type:b,value:" instance configured for JSON logging."}]},{type:b,value:c}]},{type:b,value:c},{type:a,tag:h,props:{},children:[{type:a,tag:k,props:{},children:[{type:b,value:P}]}]},{type:b,value:Y},{type:a,tag:I,props:{},children:[{type:a,tag:J,props:{},children:[{type:a,tag:g,props:{},children:[{type:a,tag:i,props:{},children:[{type:b,value:K}]},{type:a,tag:i,props:{},children:[{type:b,value:L}]}]}]},{type:a,tag:M,props:{},children:[{type:a,tag:g,props:{},children:[{type:a,tag:f,props:{},children:[{type:a,tag:e,props:{},children:[{type:b,value:"name"}]}]},{type:a,tag:f,props:{},children:[{type:b,value:"The name of the logger. This works exactly as with "},{type:a,tag:e,props:{},children:[{type:b,value:"logging.getLogger(name)"}]},{type:b,value:al}]}]},{type:a,tag:g,props:{},children:[{type:a,tag:f,props:{},children:[{type:a,tag:e,props:{},children:[{type:b,value:"level"}]}]},{type:a,tag:f,props:{},children:[{type:b,value:"The log level as defined in the "},{type:a,tag:e,props:{},children:[{type:b,value:"logging"}]},{type:b,value:" package."}]}]}]}]},{type:b,value:c},{type:a,tag:h,props:{},children:[{type:b,value:"The accepted keyword arguments are:"}]},{type:b,value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:a,tag:I,props:{},children:[{type:a,tag:J,props:{},children:[{type:a,tag:g,props:{},children:[{type:a,tag:i,props:{},children:[{type:b,value:K}]},{type:a,tag:i,props:{},children:[{type:b,value:L}]}]}]},{type:a,tag:M,props:{},children:[{type:a,tag:g,props:{},children:[{type:a,tag:f,props:{},children:[{type:a,tag:e,props:{},children:[{type:b,value:am}]}]},{type:a,tag:f,props:{},children:[{type:b,value:an},{type:a,tag:e,props:{},children:[{type:b,value:aa}]},{type:b,value:", Logtron will flatten the JSON logs so that nested entries like "},{type:a,tag:e,props:{},children:[{type:b,value:ao}]},{type:b,value:ap},{type:a,tag:e,props:{},children:[{type:b,value:aq}]},{type:b,value:ar}]}]},{type:a,tag:g,props:{},children:[{type:a,tag:f,props:{},children:[{type:a,tag:e,props:{},children:[{type:b,value:"refresh"}]}]},{type:a,tag:f,props:{},children:[{type:b,value:"Forces re-initialization if set to "},{type:a,tag:e,props:{},children:[{type:b,value:aa}]},{type:b,value:". Logtron will only initialize the first time "},{type:a,tag:e,props:{},children:[{type:b,value:N}]},{type:b,value:" is called by default."}]}]},{type:a,tag:g,props:{},children:[{type:a,tag:f,props:{},children:[{type:a,tag:e,props:{},children:[{type:b,value:"config"}]}]},{type:a,tag:f,props:{},children:[{type:b,value:"Explicit Logtron configuration."}]}]},{type:a,tag:g,props:{},children:[{type:a,tag:f,props:{},children:[{type:a,tag:e,props:{},children:[{type:b,value:O}]}]},{type:a,tag:f,props:{},children:[{type:b,value:"Function to override the default configuration discovery process."}]}]},{type:a,tag:g,props:{},children:[{type:a,tag:f,props:{},children:[{type:a,tag:e,props:{},children:[{type:b,value:as}]}]},{type:a,tag:f,props:{},children:[{type:b,value:"Function to override the default context discovery process."}]}]}]}]},{type:b,value:c},{type:a,tag:Q,props:{},children:[]},{type:b,value:c},{type:a,tag:W,props:{id:ae},children:[{type:a,tag:l,props:{ariaHidden:m,href:"#logtronconfig-module",tabIndex:n},children:[{type:a,tag:d,props:{className:[o,p]},children:[]}]},{type:a,tag:e,props:{},children:[{type:b,value:"logtron.config"}]},{type:b,value:X}]},{type:b,value:c},{type:a,tag:D,props:{id:O},children:[{type:a,tag:l,props:{ariaHidden:m,href:"#discover_config",tabIndex:n},children:[{type:a,tag:d,props:{className:[o,p]},children:[]}]},{type:a,tag:e,props:{},children:[{type:b,value:O}]}]},{type:b,value:c},{type:a,tag:w,props:{className:[x]},children:[{type:a,tag:y,props:{},children:[{type:a,tag:e,props:{className:[z,A]},children:[{type:a,tag:d,props:{className:[E]},children:[{type:a,tag:d,props:{className:[j]},children:[{type:b,value:F}]},{type:b,value:r},{type:a,tag:d,props:{className:[s]},children:[{type:b,value:O}]},{type:b,value:t},{type:a,tag:d,props:{className:[u]},children:[{type:b,value:"existing=None"}]},{type:b,value:v}]},{type:b,value:ak}]}]}]},{type:b,value:c},{type:a,tag:h,props:{},children:[{type:a,tag:k,props:{},children:[{type:b,value:G}]}]},{type:b,value:c},{type:a,tag:H,props:{},children:[{type:b,value:c},{type:a,tag:q,props:{},children:[{type:b,value:"A merged dict-like configuration combined from the config discovery process. The order in which it is merged is:\n"},{type:a,tag:"ol",props:{},children:[{type:b,value:c},{type:a,tag:q,props:{},children:[{type:b,value:"YAML configuration file"}]},{type:b,value:c},{type:a,tag:q,props:{},children:[{type:b,value:"Environment variables"}]},{type:b,value:c},{type:a,tag:q,props:{},children:[{type:b,value:"Explicit configuration in code"}]},{type:b,value:c}]},{type:b,value:c}]},{type:b,value:c}]},{type:b,value:c},{type:a,tag:h,props:{},children:[{type:a,tag:k,props:{},children:[{type:b,value:P}]}]},{type:b,value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:a,tag:I,props:{},children:[{type:a,tag:J,props:{},children:[{type:a,tag:g,props:{},children:[{type:a,tag:i,props:{},children:[{type:b,value:K}]},{type:a,tag:i,props:{},children:[{type:b,value:L}]}]}]},{type:a,tag:M,props:{},children:[{type:a,tag:g,props:{},children:[{type:a,tag:f,props:{},children:[{type:a,tag:e,props:{},children:[{type:b,value:"existing"}]}]},{type:a,tag:f,props:{},children:[{type:b,value:"An existing dict-like config to merge into the discovered configs."}]}]}]}]},{type:b,value:c},{type:a,tag:Q,props:{},children:[]},{type:b,value:c},{type:a,tag:W,props:{id:af},children:[{type:a,tag:l,props:{ariaHidden:m,href:"#logtronformatters-module",tabIndex:n},children:[{type:a,tag:d,props:{className:[o,p]},children:[]}]},{type:a,tag:e,props:{},children:[{type:b,value:"logtron.formatters"}]},{type:b,value:X}]},{type:b,value:c},{type:a,tag:D,props:{id:ag},children:[{type:a,tag:l,props:{ariaHidden:m,href:"#jsonformatter",tabIndex:n},children:[{type:a,tag:d,props:{className:[o,p]},children:[]}]},{type:a,tag:e,props:{},children:[{type:b,value:_}]}]},{type:b,value:c},{type:a,tag:w,props:{className:[x]},children:[{type:a,tag:y,props:{},children:[{type:a,tag:e,props:{className:[z,A]},children:[{type:a,tag:d,props:{className:[j]},children:[{type:b,value:at}]},{type:b,value:au},{type:a,tag:d,props:{className:[j]},children:[{type:b,value:av}]},{type:b,value:" Formatter\n\n"},{type:a,tag:d,props:{className:[aw]},children:[{type:a,tag:d,props:{className:[j]},children:[{type:b,value:ax}]},{type:b,value:r},{type:a,tag:d,props:{className:[s]},children:[{type:b,value:_}]},{type:b,value:t},{type:a,tag:d,props:{className:[u]},children:[{type:b,value:"Formatter"}]},{type:b,value:v}]},{type:b,value:ay},{type:a,tag:d,props:{className:[E]},children:[{type:a,tag:d,props:{className:[j]},children:[{type:b,value:F}]},{type:b,value:r},{type:a,tag:d,props:{className:[s]},children:[{type:b,value:az}]},{type:b,value:t},{type:a,tag:d,props:{className:[u]},children:[{type:b,value:aA}]},{type:b,value:v}]},{type:b,value:aB}]}]}]},{type:b,value:c},{type:a,tag:h,props:{},children:[{type:a,tag:k,props:{},children:[{type:b,value:G}]}]},{type:b,value:c},{type:a,tag:H,props:{},children:[{type:b,value:c},{type:a,tag:q,props:{},children:[{type:b,value:aC},{type:a,tag:e,props:{},children:[{type:b,value:"logging.Formatter"}]},{type:b,value:" which is capable of producing JSON log output."}]},{type:b,value:c}]},{type:b,value:c},{type:a,tag:h,props:{},children:[{type:a,tag:k,props:{},children:[{type:b,value:P}]}]},{type:b,value:c},{type:a,tag:h,props:{},children:[{type:b,value:Z}]},{type:b,value:Y},{type:a,tag:I,props:{},children:[{type:a,tag:J,props:{},children:[{type:a,tag:g,props:{},children:[{type:a,tag:i,props:{},children:[{type:b,value:K}]},{type:a,tag:i,props:{},children:[{type:b,value:L}]}]}]},{type:a,tag:M,props:{},children:[{type:a,tag:g,props:{},children:[{type:a,tag:f,props:{},children:[{type:a,tag:e,props:{},children:[{type:b,value:am}]}]},{type:a,tag:f,props:{},children:[{type:b,value:an},{type:a,tag:e,props:{},children:[{type:b,value:aa}]},{type:b,value:", the formatter will flatten the JSON logs so that nested entries like "},{type:a,tag:e,props:{},children:[{type:b,value:ao}]},{type:b,value:ap},{type:a,tag:e,props:{},children:[{type:b,value:aq}]},{type:b,value:ar}]}]},{type:a,tag:g,props:{},children:[{type:a,tag:f,props:{},children:[{type:a,tag:e,props:{},children:[{type:b,value:as}]}]},{type:a,tag:f,props:{},children:[{type:b,value:"A custom function to use to discover the dict-like logging context which will be added to each log entry."}]}]}]}]},{type:b,value:c},{type:a,tag:Q,props:{},children:[]},{type:b,value:c},{type:a,tag:W,props:{id:ah},children:[{type:a,tag:l,props:{ariaHidden:m,href:"#logtronhandlers-module",tabIndex:n},children:[{type:a,tag:d,props:{className:[o,p]},children:[]}]},{type:a,tag:e,props:{},children:[{type:b,value:"logtron.handlers"}]},{type:b,value:X}]},{type:b,value:c},{type:a,tag:D,props:{id:ai},children:[{type:a,tag:l,props:{ariaHidden:m,href:"#consolehandler",tabIndex:n},children:[{type:a,tag:d,props:{className:[o,p]},children:[]}]},{type:a,tag:e,props:{},children:[{type:b,value:$}]}]},{type:b,value:c},{type:a,tag:w,props:{className:[x]},children:[{type:a,tag:y,props:{},children:[{type:a,tag:e,props:{className:[z,A]},children:[{type:a,tag:d,props:{className:[j]},children:[{type:b,value:at}]},{type:b,value:au},{type:a,tag:d,props:{className:[j]},children:[{type:b,value:av}]},{type:b,value:" StreamHandler\n\n"},{type:a,tag:d,props:{className:[aw]},children:[{type:a,tag:d,props:{className:[j]},children:[{type:b,value:ax}]},{type:b,value:r},{type:a,tag:d,props:{className:[s]},children:[{type:b,value:$}]},{type:b,value:t},{type:a,tag:d,props:{className:[u]},children:[{type:b,value:"StreamHandler"}]},{type:b,value:v}]},{type:b,value:ay},{type:a,tag:d,props:{className:[E]},children:[{type:a,tag:d,props:{className:[j]},children:[{type:b,value:F}]},{type:b,value:r},{type:a,tag:d,props:{className:[s]},children:[{type:b,value:az}]},{type:b,value:t},{type:a,tag:d,props:{className:[u]},children:[{type:b,value:aA}]},{type:b,value:v}]},{type:b,value:aB}]}]}]},{type:b,value:c},{type:a,tag:h,props:{},children:[{type:a,tag:k,props:{},children:[{type:b,value:G}]}]},{type:b,value:c},{type:a,tag:H,props:{},children:[{type:b,value:c},{type:a,tag:q,props:{},children:[{type:b,value:aC},{type:a,tag:e,props:{},children:[{type:b,value:"logging.StreamHandler"}]},{type:b,value:" which will log to the console."}]},{type:b,value:c}]},{type:b,value:c},{type:a,tag:Q,props:{},children:[]},{type:b,value:c},{type:a,tag:W,props:{id:aj},children:[{type:a,tag:l,props:{ariaHidden:m,href:"#logtronutil-module",tabIndex:n},children:[{type:a,tag:d,props:{className:[o,p]},children:[]}]},{type:a,tag:e,props:{},children:[{type:b,value:"logtron.util"}]},{type:b,value:X}]},{type:b,value:c},{type:a,tag:D,props:{id:T},children:[{type:a,tag:l,props:{ariaHidden:m,href:"#merge",tabIndex:n},children:[{type:a,tag:d,props:{className:[o,p]},children:[]}]},{type:a,tag:e,props:{},children:[{type:b,value:T}]}]},{type:b,value:c},{type:a,tag:w,props:{className:[x]},children:[{type:a,tag:y,props:{},children:[{type:a,tag:e,props:{className:[z,A]},children:[{type:a,tag:d,props:{className:[E]},children:[{type:a,tag:d,props:{className:[j]},children:[{type:b,value:F}]},{type:b,value:r},{type:a,tag:d,props:{className:[s]},children:[{type:b,value:T}]},{type:b,value:t},{type:a,tag:d,props:{className:[u]},children:[{type:b,value:"d, u"}]},{type:b,value:v}]},{type:b,value:ab}]}]}]},{type:b,value:c},{type:a,tag:h,props:{},children:[{type:a,tag:k,props:{},children:[{type:b,value:G}]}]},{type:b,value:c},{type:a,tag:H,props:{},children:[{type:b,value:c},{type:a,tag:q,props:{},children:[{type:b,value:"A deep-merged dict based on the "},{type:a,tag:e,props:{},children:[{type:b,value:R}]},{type:b,value:" parameter with "},{type:a,tag:e,props:{},children:[{type:b,value:ac}]},{type:b,value:" merged into it. This will update the "},{type:a,tag:e,props:{},children:[{type:b,value:R}]},{type:b,value:" parameter directly as well as returning it."}]},{type:b,value:c}]},{type:b,value:c},{type:a,tag:h,props:{},children:[{type:a,tag:k,props:{},children:[{type:b,value:P}]}]},{type:b,value:c},{type:a,tag:h,props:{},children:[{type:b,value:Z}]},{type:b,value:Y},{type:a,tag:I,props:{},children:[{type:a,tag:J,props:{},children:[{type:a,tag:g,props:{},children:[{type:a,tag:i,props:{},children:[{type:b,value:K}]},{type:a,tag:i,props:{},children:[{type:b,value:L}]}]}]},{type:a,tag:M,props:{},children:[{type:a,tag:g,props:{},children:[{type:a,tag:f,props:{},children:[{type:a,tag:e,props:{},children:[{type:b,value:R}]}]},{type:a,tag:f,props:{},children:[{type:b,value:"A dict-like to merge "},{type:a,tag:e,props:{},children:[{type:b,value:ac}]},{type:b,value:" into."}]}]},{type:a,tag:g,props:{},children:[{type:a,tag:f,props:{},children:[{type:a,tag:e,props:{},children:[{type:b,value:ac}]}]},{type:a,tag:f,props:{},children:[{type:b,value:"A dict-like to merge into "},{type:a,tag:e,props:{},children:[{type:b,value:R}]},{type:b,value:al}]}]}]}]},{type:b,value:c},{type:a,tag:Q,props:{},children:[]},{type:b,value:c},{type:a,tag:D,props:{id:U},children:[{type:a,tag:l,props:{ariaHidden:m,href:"#flatten_dict",tabIndex:n},children:[{type:a,tag:d,props:{className:[o,p]},children:[]}]},{type:a,tag:e,props:{},children:[{type:b,value:U}]}]},{type:b,value:c},{type:a,tag:w,props:{className:[x]},children:[{type:a,tag:y,props:{},children:[{type:a,tag:e,props:{className:[z,A]},children:[{type:a,tag:d,props:{className:[E]},children:[{type:a,tag:d,props:{className:[j]},children:[{type:b,value:F}]},{type:b,value:r},{type:a,tag:d,props:{className:[s]},children:[{type:b,value:U}]},{type:b,value:t},{type:a,tag:d,props:{className:[u]},children:[{type:b,value:"d, parent_key="},{type:a,tag:d,props:{className:[B]},children:[{type:b,value:"\"\""}]},{type:b,value:", sep="},{type:a,tag:d,props:{className:[B]},children:[{type:b,value:"\"_\""}]}]},{type:b,value:v}]},{type:b,value:ab}]}]}]},{type:b,value:c},{type:a,tag:h,props:{},children:[{type:a,tag:k,props:{},children:[{type:b,value:G}]}]},{type:b,value:c},{type:a,tag:H,props:{},children:[{type:b,value:c},{type:a,tag:q,props:{},children:[{type:b,value:c},{type:a,tag:h,props:{},children:[{type:b,value:"A flattened dict based on the "},{type:a,tag:e,props:{},children:[{type:b,value:R}]},{type:b,value:" parameter. This will pull up all nested keys to the top level in the dict and give them names based on the separator, i.e."}]},{type:b,value:c},{type:a,tag:w,props:{className:[x]},children:[{type:a,tag:y,props:{},children:[{type:a,tag:e,props:{className:[z,A]},children:[{type:b,value:"my_dict = {\n  "},{type:a,tag:d,props:{className:[B]},children:[{type:b,value:"'level1'"}]},{type:b,value:": {\n    "},{type:a,tag:d,props:{className:[B]},children:[{type:b,value:"'level2'"}]},{type:b,value:": {\n      "},{type:a,tag:d,props:{className:[B]},children:[{type:b,value:"'foo'"}]},{type:b,value:": "},{type:a,tag:d,props:{className:[B]},children:[{type:b,value:aD}]},{type:b,value:"\n    }\n  }\n}\n\n"},{type:a,tag:d,props:{className:["hljs-comment"]},children:[{type:b,value:"# becomes"}]},{type:b,value:"\n\nmy_dict["},{type:a,tag:d,props:{className:[B]},children:[{type:b,value:"'level1_level2_foo'"}]},{type:b,value:"] = "},{type:a,tag:d,props:{className:[B]},children:[{type:b,value:aD}]},{type:b,value:c}]}]}]},{type:b,value:c}]},{type:b,value:c}]},{type:b,value:c},{type:a,tag:h,props:{},children:[{type:a,tag:k,props:{},children:[{type:b,value:P}]}]},{type:b,value:c},{type:a,tag:h,props:{},children:[{type:b,value:Z}]},{type:b,value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:a,tag:I,props:{},children:[{type:a,tag:J,props:{},children:[{type:a,tag:g,props:{},children:[{type:a,tag:i,props:{},children:[{type:b,value:K}]},{type:a,tag:i,props:{},children:[{type:b,value:L}]}]}]},{type:a,tag:M,props:{},children:[{type:a,tag:g,props:{},children:[{type:a,tag:f,props:{},children:[{type:a,tag:e,props:{},children:[{type:b,value:R}]}]},{type:a,tag:f,props:{},children:[{type:b,value:"A dict-like to flatten."}]}]},{type:a,tag:g,props:{},children:[{type:a,tag:f,props:{},children:[{type:a,tag:e,props:{},children:[{type:b,value:"parent_key"}]}]},{type:a,tag:f,props:{},children:[{type:b,value:"An optional prefix for the flattened keys."}]}]},{type:a,tag:g,props:{},children:[{type:a,tag:f,props:{},children:[{type:a,tag:e,props:{},children:[{type:b,value:"sep"}]}]},{type:a,tag:f,props:{},children:[{type:b,value:"The separator to use when flattening."}]}]}]}]},{type:b,value:c},{type:a,tag:Q,props:{},children:[]},{type:b,value:c},{type:a,tag:D,props:{id:V},children:[{type:a,tag:l,props:{ariaHidden:m,href:"#parse_env",tabIndex:n},children:[{type:a,tag:d,props:{className:[o,p]},children:[]}]},{type:a,tag:e,props:{},children:[{type:b,value:V}]}]},{type:b,value:c},{type:a,tag:w,props:{className:[x]},children:[{type:a,tag:y,props:{},children:[{type:a,tag:e,props:{className:[z,A]},children:[{type:a,tag:d,props:{className:[E]},children:[{type:a,tag:d,props:{className:[j]},children:[{type:b,value:F}]},{type:b,value:r},{type:a,tag:d,props:{className:[s]},children:[{type:b,value:V}]},{type:b,value:t},{type:a,tag:d,props:{className:[u]},children:[{type:b,value:"prefix=None, env=os.environ"}]},{type:b,value:v}]},{type:b,value:ab}]}]}]},{type:b,value:c},{type:a,tag:h,props:{},children:[{type:a,tag:k,props:{},children:[{type:b,value:G}]}]},{type:b,value:c},{type:a,tag:H,props:{},children:[{type:b,value:c},{type:a,tag:q,props:{},children:[{type:b,value:"A dict representing parsed environment variables. This will split the env var names on "},{type:a,tag:e,props:{},children:[{type:b,value:"_"}]},{type:b,value:" and create a deeply nested dict using them."}]},{type:b,value:c}]},{type:b,value:c},{type:a,tag:h,props:{},children:[{type:a,tag:k,props:{},children:[{type:b,value:P}]}]},{type:b,value:c},{type:a,tag:h,props:{},children:[{type:b,value:Z}]},{type:b,value:Y},{type:a,tag:I,props:{},children:[{type:a,tag:J,props:{},children:[{type:a,tag:g,props:{},children:[{type:a,tag:i,props:{},children:[{type:b,value:K}]},{type:a,tag:i,props:{},children:[{type:b,value:L}]}]}]},{type:a,tag:M,props:{},children:[{type:a,tag:g,props:{},children:[{type:a,tag:f,props:{},children:[{type:a,tag:e,props:{},children:[{type:b,value:"prefix"}]}]},{type:a,tag:f,props:{},children:[{type:b,value:"An optional prefix to use when searching the environment variables."}]}]},{type:a,tag:g,props:{},children:[{type:a,tag:f,props:{},children:[{type:a,tag:e,props:{},children:[{type:b,value:"env"}]}]},{type:a,tag:f,props:{},children:[{type:b,value:"An optional explicit dict-like of environment variables to use."}]}]}]}]}]},dir:"\u002F",path:"\u002Fapi-reference",extension:".md",slug:"api-reference",createdAt:"2020-09-20T03:37:02.370Z",updatedAt:"2020-09-20T14:34:53.260Z"}}],fetch:[],mutations:void 0}}("element","text","\n","span","code","td","tr","p","th","hljs-keyword","strong","a","true",-1,"icon","icon-link","li"," ","hljs-title","(","hljs-params","):","div","nuxt-content-highlight","pre","hljs","python","hljs-string",3,"h3","hljs-function","def","Returns:","ul","table","thead","Parameter","Description","tbody","autodiscover","discover_config","Parameters:","hr","d",2,"merge","flatten_dict","parse_env","h2"," Module","\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n","The accepted keyword arguments for the constructor are:","JsonFormatter","ConsoleHandler","True","\n  ...\n","u","logtron-module","logtronconfig-module","logtronformatters-module","jsonformatter","logtronhandlers-module","consolehandler","logtronutil-module","\n...\n",".","flatten","If ","extra"," and ","context"," are flattened to top level JSON keys.","discover_context","from"," logging ","import","hljs-class","class","\n    ","__init__","self, **kwargs","\n      ...\n","A ","'bar'")));