(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[2099,688],{52099:(e,t,s)=>{"use strict";s.r(t),s.d(t,{editorSyntaxStatus:()=>b,default:()=>v});var o,n=s(24797),r=s(96522),i=s(6736),c=s(19614),a=s(7236),d=s(69301),l=s(1841),m=s(71984),u=s(26260),g=s.n(u);!function(e){e.changeKeyMap="codemirror:change-keymap",e.changeTheme="codemirror:change-theme",e.changeMode="codemirror:change-mode",e.find="codemirror:find",e.goToLine="codemirror:go-to-line"}(o||(o={}));const h={id:"@jupyterlab/codemirror-extension:codemirror",provides:i.ICodeMirror,activate:function(e){return new k}},p={id:"@jupyterlab/codemirror-extension:services",provides:r.IEditorServices,activate:function(e){return g().prototype.save=()=>{e.commands.execute("docmanager:save")},i.editorServices}},y={id:"@jupyterlab/codemirror-extension:commands",requires:[c.IEditorTracker,d.ISettingRegistry,m.ITranslator,i.ICodeMirror],optional:[a.IMainMenu],activate:function(e,t,n,r,c,a){var d;const l=r.load("jupyterlab"),{commands:m,restored:u}=e;let{theme:g,keyMap:h,scrollPastEnd:p,styleActiveLine:y,styleSelectedText:b,selectionPointer:v,lineWiseCopyCut:k}=i.CodeMirrorEditor.defaultConfig;async function x(e){var t,o,n,r,i;if(h=e.get("keyMap").composite||h,"vim"===h&&await c.ensureVimKeymap(),g=e.get("theme").composite||g,"jupyter"!==g&&"default"!==g){const e="solarized light"===g||"solarized dark"===g?"solarized":g;await s(98908)(`./${e}.css`)}p=null!==(t=e.get("scrollPastEnd").composite)&&void 0!==t?t:p,y=null!==(o=e.get("styleActiveLine").composite)&&void 0!==o?o:y,b=null!==(n=e.get("styleSelectedText").composite)&&void 0!==n?n:b,v=null!==(r=e.get("selectionPointer").composite)&&void 0!==r?r:v,k=null!==(i=e.get("lineWiseCopyCut").composite)&&void 0!==i?i:k}function M(){const e={keyMap:h,theme:g,scrollPastEnd:p,styleActiveLine:y,styleSelectedText:b,selectionPointer:v,lineWiseCopyCut:k};t.forEach((t=>{t.content.editor instanceof i.CodeMirrorEditor&&t.content.editor.setOptions(e)}))}function C(){return null!==t.currentWidget&&t.currentWidget===e.shell.currentWidget}if(Promise.all([n.load(f),u]).then((async([e])=>{await x(e),M(),e.changed.connect((async()=>{await x(e),M()}))})).catch((e=>{console.error(e.message),M()})),t.widgetAdded.connect(((e,t)=>{const s={keyMap:h,theme:g,scrollPastEnd:p,styleActiveLine:y,styleSelectedText:b,selectionPointer:v,lineWiseCopyCut:k};t.content.editor instanceof i.CodeMirrorEditor&&t.content.editor.setOptions(s)})),m.addCommand(o.changeTheme,{label:e=>{var t;return"default"===e.theme?l.__("codemirror"):l.__(null!==(t=e.theme)&&void 0!==t?t:g)},execute:e=>{var t;const s=g=null!==(t=e.theme)&&void 0!==t?t:g;return n.set(f,"theme",s).catch((e=>{console.error(`Failed to set ${f}:theme - ${e.message}`)}))},isToggled:e=>e.theme===g}),m.addCommand(o.changeKeyMap,{label:e=>{var t;const s=null!==(t=e.keyMap)&&void 0!==t?t:h;return"sublime"===s?l.__("Sublime Text"):l.__(s)},execute:e=>{var t;const s=h=null!==(t=e.keyMap)&&void 0!==t?t:h;return n.set(f,"keyMap",s).catch((e=>{console.error(`Failed to set ${f}:keyMap - ${e.message}`)}))},isToggled:e=>e.keyMap===h}),m.addCommand(o.find,{label:l.__("Find…"),execute:()=>{const e=t.currentWidget;e&&e.content.editor.execCommand("find")},isEnabled:C}),m.addCommand(o.goToLine,{label:l.__("Go to Line…"),execute:()=>{const e=t.currentWidget;e&&e.content.editor.execCommand("jumpToLine")},isEnabled:C}),m.addCommand(o.changeMode,{label:e=>e.name,execute:e=>{const s=e.name,o=t.currentWidget;if(s&&o){const e=i.Mode.findByName(s);e&&(o.content.model.mimeType=e.mime)}},isEnabled:C,isToggled:e=>{const s=t.currentWidget;if(!s)return!1;const o=s.content.model.mimeType,n=i.Mode.findByMIME(o),r=n&&n.name;return e.name===r}}),a){const e=null===(d=a.viewMenu.items.find((e=>{var t;return"submenu"===e.type&&"jp-mainmenu-view-codemirror-theme"===(null===(t=e.submenu)||void 0===t?void 0:t.id)})))||void 0===d?void 0:d.submenu;e&&i.Mode.getModeInfo().sort(((e,t)=>{const s=e.name||"",o=t.name||"";return s.localeCompare(o)})).forEach((t=>{0!==t.mode.indexOf("brainf")&&e.addItem({command:o.changeMode,args:Object.assign({},t)})})),a.editMenu.goToLiners.add({tracker:t,goToLine:e=>{e.content.editor.execCommand("jumpToLine")}})}},autoStart:!0},b={id:"@jupyterlab/codemirror-extension:editor-syntax-status",autoStart:!0,requires:[c.IEditorTracker,n.ILabShell,m.ITranslator],optional:[l.IStatusBar],activate:(e,t,s,o,n)=>{if(!n)return;const r=new i.EditorSyntaxStatus({commands:e.commands,translator:o});s.currentChanged.connect((()=>{const e=s.currentWidget;e&&t.has(e)&&r.model&&(r.model.editor=e.content.editor)})),n.registerStatusItem("@jupyterlab/codemirror-extension:editor-syntax-status",{item:r,align:"left",rank:0,isActive:()=>!!s.currentWidget&&!!t.currentWidget&&s.currentWidget===t.currentWidget})}},v=[y,p,b,h],f=y.id;class k{get CodeMirror(){return g()}async ensureVimKeymap(){"Vim"in g()||await Promise.all([s.e(3326),s.e(8133),s.e(832)]).then(s.t.bind(s,50832,23))}}},98908:(e,t,s)=>{var o={"./3024-day.css":[70790,790],"./3024-night.css":[45518,5518],"./abbott.css":[99550,9550],"./abcdef.css":[30620,620],"./ambiance-mobile.css":[1151,1151],"./ambiance.css":[37760,7760],"./ayu-dark.css":[27850,7850],"./ayu-mirage.css":[25476,5476],"./base16-dark.css":[39426,9426],"./base16-light.css":[46008,6008],"./bespin.css":[26551,6551],"./blackboard.css":[36917,6917],"./cobalt.css":[22585,2585],"./colorforth.css":[41474,1474],"./darcula.css":[6004,6004],"./dracula.css":[29537,9537],"./duotone-dark.css":[10037,37],"./duotone-light.css":[40739,739],"./eclipse.css":[69968,9968],"./elegant.css":[19240,9240],"./erlang-dark.css":[36454,6454],"./gruvbox-dark.css":[57539,7539],"./hopscotch.css":[95788,5788],"./icecoder.css":[85405,5405],"./idea.css":[70237,237],"./isotope.css":[80654,654],"./lesser-dark.css":[20243,243],"./liquibyte.css":[15994,5994],"./lucario.css":[48742,8742],"./material-darker.css":[86957,6957],"./material-ocean.css":[25724,5724],"./material-palenight.css":[98835,8835],"./material.css":[9344,9344],"./mbo.css":[49312,9312],"./mdn-like.css":[36068,6068],"./midnight.css":[36147,6147],"./monokai.css":[18351,8351],"./moxer.css":[45200,5200],"./neat.css":[56433,6433],"./neo.css":[82430,2430],"./night.css":[9932,9932],"./nord.css":[23661,3661],"./oceanic-next.css":[86368,6368],"./panda-syntax.css":[70977,977],"./paraiso-dark.css":[24253,4253],"./paraiso-light.css":[87362,7362],"./pastel-on-dark.css":[73039,3039],"./railscasts.css":[62277,2277],"./rubyblue.css":[46459,6459],"./seti.css":[28880,8880],"./shadowfox.css":[72088,2088],"./solarized.css":[59034,9034],"./ssms.css":[15125,5125],"./the-matrix.css":[32692,2692],"./tomorrow-night-bright.css":[49606,9606],"./tomorrow-night-eighties.css":[6509,6509],"./ttcn.css":[91571,1571],"./twilight.css":[13476,3476],"./vibrant-ink.css":[2336,2336],"./xq-dark.css":[10596,596],"./xq-light.css":[25303,5303],"./yeti.css":[71786,1786],"./yonce.css":[98936,8936],"./zenburn.css":[16551,7215]};function n(e){if(!s.o(o,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],n=t[0];return s.e(t[1]).then((()=>s(n)))}n.keys=()=>Object.keys(o),n.id=98908,e.exports=n}}]);
//# sourceMappingURL=2099.5fd752e4ef8ad3dcf412.js.map