"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[1132,6796],{56796:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var r,a=n(24797),o=n(3595),l=n(19614),c=n(43671),s=n(12827),i=n(87113),d=n(69301),u=n(21810),b=n(71984),f=n(98993);!function(e){e.runCells="toc:run-cells"}(r||(r={}));const g={id:"@jupyterlab/toc:plugin",autoStart:!0,provides:u.ITableOfContentsRegistry,requires:[o.IDocumentManager,l.IEditorTracker,a.ILabShell,a.ILayoutRestorer,c.IMarkdownViewerTracker,s.INotebookTracker,i.IRenderMimeRegistry,b.ITranslator],optional:[d.ISettingRegistry],activate:async function(e,t,n,a,o,l,c,s,i,d){const b=i.load("jupyterlab"),g=new u.TableOfContents({docmanager:t,rendermime:s,translator:i}),C=new u.TableOfContentsRegistry;let T;if(g.title.icon=f.tocIcon,g.title.caption=b.__("Table of Contents"),g.id="table-of-contents",g.node.setAttribute("role","region"),g.node.setAttribute("aria-label",b.__("Table of Contents section")),a.add(g,"left",{rank:400}),e.commands.addCommand(r.runCells,{execute:e=>(0,u.runNestedCodeCells)(g.headings,g.activeEntry),label:b.__("Run Cell(s)")}),e.contextMenu.addItem({selector:".jp-tocItem",command:r.runCells}),o.add(g,"@jupyterlab/toc:plugin"),d)try{T=await d.load("@jupyterlab/toc-extension:plugin")}catch(e){console.error(`Failed to load settings for the Table of Contents extension.\n\n${e}`)}const p=(0,u.createNotebookGenerator)(c,g,s.sanitizer,i,T);C.add(p);const k=(0,u.createMarkdownGenerator)(n,g,s.sanitizer,i,T);C.add(k);const m=(0,u.createRenderedMarkdownGenerator)(l,g,s.sanitizer,i,T);C.add(m);const y=(0,u.createLatexGenerator)(n);C.add(y);const I=(0,u.createPythonGenerator)(n);return C.add(I),a.currentChanged.connect((function(){let t=e.shell.currentWidget;if(!t)return;let n=C.find(t);n?g.current={widget:t,generator:n}:g.current&&g.current.widget.isDisposed&&(g.current=null)})),C}}}}]);
//# sourceMappingURL=1132.53e4bbb6b68d4549332e.js.map