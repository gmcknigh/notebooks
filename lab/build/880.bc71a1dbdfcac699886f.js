"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[880],{60880:(e,t,o)=>{o.r(t);var r=o(24797),s=o(7450),l=o(78744);const n=Promise.all([o.e(3636),o.e(2702)]).then(o.bind(o,12702)),a=[o.e(5220).then(o.t.bind(o,75220,23)),o.e(3697).then(o.t.bind(o,53697,23)),o.e(1481).then(o.t.bind(o,91481,23)),o.e(939).then(o.t.bind(o,70939,23))],i=[...JSON.parse(l.PageConfig.getOption("disabledExtensions")||"[]"),"@jupyterlab/apputils-extension:workspaces","@jupyterlab/application-extension:logo","@jupyterlab/application-extension:main","@jupyterlab/application-extension:tree-resolver","@jupyterlab/apputils-extension:resolver","@jupyterlab/docmanager-extension:download","@jupyterlab/filebrowser-extension:download","@jupyterlab/help-extension:about"];async function c(e,t){try{return(await window._JUPYTERLAB[e].get(t))()}catch(o){throw console.warn(`Failed to create module: package: ${e}; module: ${t}`),o}}!async function(){await n;const e=[],t=[],f=[],h=[],p=JSON.parse(l.PageConfig.getOption("federated_extensions")),u=new Set;function*y(e){let t;t=e.hasOwnProperty("__esModule")?e.default:e;let o=Array.isArray(t)?t:[t];for(let e of o)i.includes(e.id)||i.includes(e.id.split(":")[0])||(yield e)}p.forEach((e=>{e.extension&&(u.add(e.name),t.push(c(e.name,e.extension))),e.mimeExtension&&(u.add(e.name),f.push(c(e.name,e.mimeExtension))),e.style&&h.push(c(e.name,e.style))}));const b=[];if(!u.has("@jupyterlite/iframe-extension"))try{let e=o(96766);for(let t of y(e))b.push(t)}catch(e){console.error(e)}if(!u.has("@jupyterlab/json-extension"))try{let e=o(29158);for(let t of y(e))b.push(t)}catch(e){console.error(e)}if(!u.has("@jupyterlab/vega5-extension"))try{let e=o(85257);for(let t of y(e))b.push(t)}catch(e){console.error(e)}if((await Promise.allSettled(f)).forEach((e=>{if("fulfilled"===e.status)for(let t of y(e.value))b.push(t);else console.error(e.reason)})),!u.has("@jupyterlite/application-extension"))try{let t=o(63165);for(let o of y(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/application-extension"))try{let t=o(92652);for(let o of y(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/apputils-extension"))try{let t=o(80970);for(let o of y(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/celltags-extension"))try{let t=o(84287);for(let o of y(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/codemirror-extension"))try{let t=o(35562);for(let o of y(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/completer-extension"))try{let t=o(6702);for(let o of y(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/console-extension"))try{let t=o(12119);for(let o of y(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/csvviewer-extension"))try{let t=o(81964);for(let o of y(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/docmanager-extension"))try{let t=o(39263);for(let o of y(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/filebrowser-extension"))try{let t=o(45027);for(let o of y(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/fileeditor-extension"))try{let t=o(68213);for(let o of y(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/help-extension"))try{let t=o(80019);for(let o of y(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/imageviewer-extension"))try{let t=o(72457);for(let o of y(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/inspector-extension"))try{let t=o(67973);for(let o of y(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/launcher-extension"))try{let t=o(56850);for(let o of y(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/logconsole-extension"))try{let t=o(72536);for(let o of y(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/mainmenu-extension"))try{let t=o(29852);for(let o of y(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/markdownviewer-extension"))try{let t=o(30348);for(let o of y(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/mathjax2-extension"))try{let t=o(66575);for(let o of y(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/notebook-extension"))try{let t=o(87878);for(let o of y(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/rendermime-extension"))try{let t=o(21768);for(let o of y(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/running-extension"))try{let t=o(29368);for(let o of y(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/settingeditor-extension"))try{let t=o(2850);for(let o of y(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/shortcuts-extension"))try{let t=o(57262);for(let o of y(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/statusbar-extension"))try{let t=o(95948);for(let o of y(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/theme-dark-extension"))try{let t=o(23348);for(let o of y(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/theme-light-extension"))try{let t=o(84668);for(let o of y(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/toc-extension"))try{let t=o(34303);for(let o of y(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/tooltip-extension"))try{let t=o(2127);for(let o of y(t))e.push(o)}catch(e){console.error(e)}if(!u.has("@jupyterlab/ui-components-extension"))try{let t=o(53848);for(let o of y(t))e.push(o)}catch(e){console.error(e)}(await Promise.allSettled(t)).forEach((t=>{if("fulfilled"===t.status)for(let o of y(t.value))e.push(o);else console.error(t.reason)})),(await Promise.allSettled(h)).filter((({status:e})=>"rejected"===e)).forEach((({reason:e})=>{console.error(e)}));const x=new s.JupyterLiteServer({});x.registerPluginModules(await Promise.all(a)),await x.start();const{serviceManager:d}=x,j=new r.JupyterLab({mimeExtensions:b,serviceManager:d});j.name="JupyterLite",j.registerPluginModules(e),console.log("Starting app"),await j.start(),console.log(`${j.name} started, waiting for restore`),await j.restored,console.log(`${j.name} restored`)}()}}]);
//# sourceMappingURL=880.bc71a1dbdfcac699886f.js.map