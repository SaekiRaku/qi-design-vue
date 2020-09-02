(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{643:function(n,t,e){"use strict";e.r(t),t.default='# Mask\n\n## {{ $t("common.usage.preview") }}\n\n<example></example>\n\n## {{ $t("common.usage.usage") }}\n\n```html\n&lt;q-mask name=&quot;fullscreen-mask&quot;&gt;\n    &lt;p&gt;Click to close&lt;/p&gt;\n&lt;/q-mask&gt;\n&lt;!-- Fullscreen Mask --&gt;\n\n&lt;q-mask name=&quot;wrap-mask&quot;&gt;\n    &lt;p&gt;Click to close&lt;/p&gt;\n    &lt;div style=&quot;width: 77px; height: 77px&quot; slot=&quot;wrap&quot;&gt;\n        &lt;p&gt;Anything&lt;/p&gt;\n    &lt;/div&gt;\n&lt;/q-mask&gt;\n&lt;!-- Wrap the mask of the div, Use scope-slot to indicate the wrapped element --&gt;\n```\n\nUse JS to open and close the mask\n\n```\nthis.$qidesign.open("fullscreen-mask")\nthis.$qidesign.close("fullscreen-mask")\nthis.$qidesign.open("wrap-mask")\nthis.$qidesign.close("wrap-mask")\n```\n\nUse `v-model` to control the mask\n\n```html\n&lt;q-mask v-model=&quot;isOpen&quot;&gt;&lt;/q-mask&gt;\n```\n\n{{ $t("common.usage.usage-tips") }}\n\n## {{ $t("common.usage.property") }}\n\n<property-block>\n    <property-item\n        name="name"\n        definition="Unique mask name"\n        values="String"\n    >\n    </property-item>\n    <property-item\n        name="open"\n        definition="Whether the mask is open (v-model)"\n        defaults="false"\n        values="Boolean"\n    >\n    </property-item>\n    <property-item\n        name="noclose"\n        definition="Whether to disabled that close by click"\n        defaults="false"\n        values="Boolean"\n    >\n    </property-item>\n</property-block>'}}]);