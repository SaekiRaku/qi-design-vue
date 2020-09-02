(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{425:function(t,e,o){"use strict";o.r(e);var r={data:function(){return{color:"poe",theme:"light",colorList:["poe","starrynight","enjolras","sunflower"]}},methods:{handleThemeChange:function(t){this.theme=t?"dark":"light"},handleColorChange:function(t){this.color=t}}},n=(o(623),o(0)),l=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("document",[o("q-title",{attrs:{level:1,colorful:""}},[t._v("主题 "),o("strong",[t._v("Theme")])]),t._v(" "),o("q-text",[t._v("\n        Theme 组件可用于切换其所包裹的组件的样式（例如下方的预览），具体可调整的样式有：切换白昼模式与暗夜模式的 "),o("strong",[t._v("theme")]),t._v(" 属性，和修改组件主色的 "),o("strong",[t._v("color")]),t._v(" 属性。出于对暗夜模式适配的最佳实践考虑，建议将 "),o("strong",[t._v("Theme")]),t._v(" 组件和 "),o("strong",[t._v("Panel")]),t._v(" 组件的嵌套作为整个应用的根容器。\n    ")]),t._v(" "),o("q-text",[t._v("\n        但实际上，几乎所有组件都有 "),o("strong",[t._v("theme")]),t._v(" 和 "),o("strong",[t._v("color")]),t._v(" 这两个通用属性，也就是说，即便不通过 "),o("strong",[t._v("Theme")]),t._v(" 组件，也可以单独为某个组件修改主题样式。此外，任何通过 slot 接收内容的组件（作为容器），例如 "),o("strong",[t._v("Panel")]),t._v(" 组件，都会将当前组件的样式向子集应用，或者说所有组件都会向最近的父级（容器）组件"),o("strong",[t._v("继承主题样式")]),t._v("。\n    ")]),t._v(" "),o("q-text",[t._v("\n        顺便一提，内置的组件可选颜色来源于我喜欢的作家和艺术作品，例如：作家爱伦坡笔下的总是重复着 “Nevermore” 一句话的黑色乌鸦，《悲惨世界》中身着红衣的革命青年领袖安灼拉，文森特·梵高的星月夜和向日葵等等。并且最终使用了我最为喜爱的 爱伦坡 作为本组件库的默认颜色。如果您对设计方面很感兴趣，请参阅 "),o("a",{attrs:{href:"#"}},[t._v("设计师文档")])]),t._v(" "),o("q-title",{attrs:{level:2}},[t._v("预览")]),t._v(" "),o("q-theme",{attrs:{theme:t.theme,color:t.color}},[o("window",{staticClass:"window"},[o("q-text",[t._v("请使用下方的主题控制器"),o("strong",[t._v("单独控制")]),t._v("此窗口的主题和颜色")]),t._v(" "),o("q-panel",{staticClass:"controller",attrs:{secondary:""}},[o("q-footnote",[t._v("暗夜模式")]),t._v(" "),o("q-switch",{on:{change:t.handleThemeChange}}),t._v(" "),o("q-divider",{attrs:{type:"vertical"}}),t._v(" "),o("q-footnote",[t._v("控件颜色")]),t._v(" "),t._l(t.colorList,(function(e,r){return o("q-hover",{key:r,staticClass:"color",attrs:{actived:{border:"default"},active:t.color==e},on:{click:function(o){return t.handleColorChange(e)}}},[o("q-color-block",{attrs:{size:"16",round:"",color:e}})],1)}))],2)],1)],1),t._v(" "),o("q-title",{attrs:{level:2}},[t._v("属性")]),t._v(" "),o("property-block",{staticClass:"property-block",attrs:{general:!1}},[o("property-item",{attrs:{name:"theme",definition:"主题模式，优先从父级继承。",defaults:"light",values:["light","dark"]}}),t._v(" "),o("property-item",{attrs:{name:"color",definition:"控件颜色，优先从父级继承。",defaults:"poe",values:["poe","starrynight","enjolras","sunflower"]}})],1)],1)}),[],!1,null,"5cdef90c",null);e.default=l.exports},487:function(t,e,o){},623:function(t,e,o){"use strict";var r=o(487);o.n(r).a}}]);