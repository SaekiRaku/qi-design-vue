(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{653:function(t,n,e){"use strict";e.r(n),n.default='# Switch\n\n## {{ $t("common.usage.preview") }}\n\n<example></example>\n\n## {{ $t("common.usage.usage") }}\n\n```\n&lt;q-switch&gt;&lt;/q-switch&gt;\n&lt;!-- Disabled --&gt;\n\n&lt;q-switch :value=&quot;true&quot;&gt;&lt;/q-switch&gt;\n&lt;!-- Enabled --&gt;\n\n&lt;q-switch disable&gt;&lt;/q-switch&gt;\n&lt;!-- Turn off and disabled --&gt;\n\n&lt;q-switch disable :value=&quot;true&quot;&gt;&lt;/q-switch&gt;\n&lt;!-- Turn on and disabled --&gt;\n```\n\n{{ $t("common.usage.usage-tips") }}\n\n\n## {{ $t("common.usage.property") }}\n\n<property-block>\n    <property-item\n        name="size"\n        definition="Size of switch"\n        defaults="medium"\n        :values="[\'small\', \'medium\', \'large\']"\n    >\n        <q-switch size="small"></q-switch>\n        <q-switch size="medium"></q-switch>\n        <q-switch size="large"></q-switch>\n    </property-item>\n    <property-item\n        name="value"\n        definition="Active state of switch"\n        defaults="false"\n        values="Boolean"\n    >\n        <q-switch value></q-switch>\n    </property-item>\n    <property-item\n        name="disable"\n        definition="Disabled"\n        defaults="false"\n        values="Boolean"\n    >\n        <q-switch disable></q-switch>\n    </property-item>\n</property-block>\n'}}]);