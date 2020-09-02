(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{648:function(t,n,e){"use strict";e.r(n),n.default='# 弹出框 <strong>Popover</strong>\n\n## {{ $t("common.usage.preview") }}\n\n<example></example>\n\n## {{ $t("common.usage.usage") }}\n\n{{ $t("common.usage.usage-tips") }}\n\n```\n&lt;!-- 默认样式 --&gt;\n\n&lt;q-popover\n    title=&quot;...&quot;\n    text=&quot;...&quot;\n    confirmText=&quot;确认&quot;\n    cancelText=&quot;取消&quot;\n&gt;\n    &lt;q-button&gt;...&lt;/q-button&gt;\n&lt;/q-popover&gt;\n\n&lt;!-- 自定义弹出内容 --&gt;\n\n&lt;q-popover&gt;\n    &lt;q-button&gt;...&lt;/q-button&gt;\n    &lt;div slot=&quot;content&quot;&gt;\n        &lt;q-text&gt;...&lt;/q-text&gt;\n    &lt;/div&gt;\n&lt;/q-popover&gt;\n```\n\n## {{ $t("common.usage.property") }}\n\n<property-block>\n    <property-item\n        name="mode"\n        definition="激活模式"\n        defaults="hover"\n        :values="[\'none\', \'click\', \'hover\']"\n    >\n        <q-popover text="悬浮弹出模式">\n            <q-button>鼠标悬浮此处</q-button>\n        </q-popover>\n    </property-item>\n    <property-item\n        name="open"\n        definition="是否打开（v-model）"\n        defaults="false"\n        values="Boolean"\n    >\n    </property-item>\n    <property-item\n        name="position"\n        definition="弹窗位置"\n        defaults="top"\n        :values="[\'top-left\', \'top\', \'top-right\', \'bottom-left\', \'bottom\', \'bottom-right\', \'left-top\', \'left\', \'left-bottom\', \'right-top\', \'right\', \'right-bottom\']"\n    >\n        <q-popover text="左侧位置弹出" position="left">\n            <q-button>鼠标悬浮此处</q-button>\n        </q-popover>\n    </property-item>\n    <property-item\n        name="width"\n        definition="使用内置样式呈现的弹出框的宽度"\n        defaults="100px"\n        values="String"\n    >\n    </property-item>\n    <property-item\n        name="title"\n        definition="设置弹出框内置样式的标题"\n        values="String"\n    >\n        <q-popover title="弹出框标题">\n            <q-button>鼠标悬浮此处</q-button>\n        </q-popover>\n    </property-item>\n    <property-item\n        name="text"\n        definition="设置弹出框内置样式的文本内容"\n        values="String"\n    >\n        <q-popover text="弹出框文本内容">\n            <q-button>鼠标悬浮此处</q-button>\n        </q-popover>\n    </property-item>\n    <property-item\n        name="confirmText"\n        definition="设置弹出框内置样式的确认按钮文字"\n        values="String"\n    >\n        <q-popover title="Popover" confirmText="确认">\n            <q-button>鼠标悬浮此处</q-button>\n        </q-popover>\n    </property-item>\n    <property-item\n        name="cancelText"\n        definition="设置弹出框内置样式的取消按钮文字"\n        values="String"\n    >\n        <q-popover title="Popover" cancelText="取消">\n            <q-button>鼠标悬浮此处</q-button>\n        </q-popover>\n    </property-item>\n</property-block>\n\n## {{ $t("common.usage.events") }}\n\n<event-block>\n    <event-item\n        name="confirm"\n        definition="确认按钮被点击"\n    ></event-item>\n    <event-item\n        name="cancel"\n        definition="取消按钮被点击"\n    ></event-item>\n</event-block>'}}]);