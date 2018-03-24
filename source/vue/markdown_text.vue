<template lang="html">
    <div class="">
        <div v-for="h1 in contents" class="division">
            <h1>
                {{ h1.content }}
            </h1>
            <div v-for="h2 in h1.children" class="block1">
                <template v-if="h2.type === 'header'">
                    <h2>
                        {{ h2.content }}
                    </h2>
                    <div class="block2">
                        <template v-for="content in h2.children">
                            <template v-if="content.type === 'code'">
<pre>
<code class="prettyprint">{{ content.content }}
</code>
</pre>
                            </template>
                            <template v-else-if="content.type === 'bold'">
                                <span class="bold">{{ content.content }}</span>
                            </template>
                            <template v-else-if="content.type === 'inline'">
                                <span class="in_code">{{ content.content }}</span>
                            </template>
                            <template v-else-if="content.type === 'link'">
                                <a :href="content.url">
                                    {{ content.content }}
                                </a>
                            </template>
                            <template v-else-if="content.type === 'text'">
                                {{ content.content }}
                            </template>
                            <template v-else-if="content.type === 'newline'">
                                <br>
                            </template>
                        </template>
                    </div>
                </template>
                <template v-else-if="h2.type === 'children'">
                    <div class="block2">
                        <template v-for="(content, index) in h2.children">
                            <template v-if="content.type === 'code'">
<pre>
<code class="prettyprint">{{ content.content }}
</code>
</pre>
                            </template>
                            <template v-else-if="content.type === 'bold'">
                                <span class="bold">{{ content.content }}</span>
                            </template>
                            <template v-else-if="content.type === 'inline'">
                                <span class="in_code">{{ content.content }}</span>
                            </template>
                            <template v-else-if="content.type === 'link'">
                                <a :href="content.url">
                                    {{ content.content }}
                                </a>
                            </template>
                            <template v-else-if="content.type === 'text'">
                                {{ content.content }}
                            </template>
                            <template v-else-if="content.type === 'newline'">
                                <br>
                            </template>
                        </template>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        text: Object,
        value: Array
    },
    data: function () {
        return {
            blockRule: {
                h1: /^(#\s+([^\n]+\n)((?:.+\n*)*?))(?:#\s|\n|$)/,
                h2: /^(#{2}\s+([^\n]+\n)((?:.+\n*)*?))(?:#{1,2}\s|\n|$)/,
                list: /^(-\s+[^\n]+)(?:\s|\n|$)/
            },
            lineRule: {
                newline: /^\n/,
                code: /^```((?:(?:(?!```).)*\n)*)```(?:\n|$)/,
                inline: /^`((?:(?!`)[^\n])*)`(?:\s|\n|$)?/,
                link: /^\[(.+)\]\s*\((https?:\/\/.*)\)(?:\s|\n|$)/,
                bold: /^\*{2}\s([^\n]+)\s\*{2}(?:\s|\n|$)/,
                text: /^[^\n`]+(?:[^`]|\n|$)/
            },
            contents: [],
            root: {},
            rectContent: []
        }
    },
    created () {
        this.contents = this.initText(this.text.text);
    },
    mounted () {
        setTimeout(function () {
            const content = this.getRectContent();
            this.outputContnt(content);
        }.bind(this),200);
    },
    methods: {
        initText: function (text) {
            let g = /^\n/;
            let cap;
            if (cap = g.exec(text)) {
                text = text.substring(cap.length);
                text = text
                  .replace(/\r\n|\r/g, '\n')
                  .replace(/\t/g, '    ')
                  .replace(/\u00a0/g, ' ')
                  .replace(/\u2424/g, '\n')
                  .replace(/^ +$/gm, '');
            }
            return this.getHeading1(text);
        },
        getHeading1 (text) {
            let cap, result = [];
            let i = 0;
            // h1タグを区切りにブロック分け
            while (text && i < 100) {
                // newline
                if (cap = this.lineRule.newline.exec(text)) {
                    if (cap[0].length > 1) {
                        result.push({
                            type: 'newline',
                            content: ''
                        });
                    }
                    text = text.substring(cap[0].length);

                }
                if (cap = this.blockRule.h1.exec(text)) {
                    let children = this.getHeading2(cap[3]);
                    result.push({
                        content: cap[2],
                        children
                    });
                    text = text.substring(cap[1].length);
                }
                i++
            }

            return result;
        },
        getHeading2 (text) {
            let cap, result = [];
            let i = 0;
            while (text && i < 100) {
                // newline
                if (cap = this.lineRule.newline.exec(text)) {
                    if (cap[0].length > 1) {
                        result.push({
                            type: 'newline',
                            content: ''
                        });
                    }
                    text = text.substring(cap[0].length);
                }
                // h2タグを区切りにブロック分け
                if (cap = this.blockRule.h2.exec(text)) {
                    let children = this.compileChildren(cap[3]);
                    result.push({
                        type: 'header',
                        content: cap[2],
                        children
                    });
                    text = text.substring(cap[1].length);
                } else {
                    let children = this.compileChildren(text);
                    result.push({
                        type: 'children',
                        children
                    });
                    break;
                }
                i++
            }

            return result;
        },
        compileChildren (text) {
            let cap, result = [];
            let i = 0;
            while (text && i < 100) {
                // newline
                if (cap = this.lineRule.newline.exec(text)) {
                    result.push({
                        type: 'newline'
                    });
                    text = text.substring(cap[0].length);
                }
                // list
                if (cap = this.blockRule.list.exec(text)) {
                    result.push({
                        type: 'list',
                        content: cap[1]
                    });
                    text = text.substring(cap[0].length);

                    continue;
                }
                // code
                if (cap = this.lineRule.code.exec(text)) {
                    result.push({
                        type: 'code',
                        content: cap[1]
                    });
                    text = text.substring(cap[0].length);

                    continue;
                }
                // inline code
                if (cap = this.lineRule.inline.exec(text)) {
                    result.push({
                        type: 'inline',
                        content: cap[1]
                    });
                    text = text.substring(cap[0].length);
                    continue;
                }
                // url
                if (cap = this.lineRule.link.exec(text)) {
                    result.push({
                        type: 'link',
                        url: cap[2],
                        content: cap[1]
                    });
                    text = text.substring(cap[0].length);
                    continue;
                }
                // bold
                if (cap = this.lineRule.bold.exec(text)) {
                    result.push({
                        type: 'bold',
                        content: cap[1]
                    });
                    text = text.substring(cap[0].length);
                    continue;
                }
                // text
                if (cap = this.lineRule.text.exec(text)) {
                    result.push({
                        type: 'text',
                        content: cap[0]
                    });
                    text = text.substring(cap[0].length);
                    continue;
                }
                i++
            }
            return result
        },
        getRectContent () {
            let result = [];
            this.root = document.getElementById('root');
            const h1s = this.root.getElementsByTagName('h1');
            for (const h1 of h1s) {
                let h1Content = '';
                for(const node of h1.childNodes) {
                    if (node.nodeType === 3) {
                        h1Content = node.nodeValue;
                    }
                };
                const h1ParentElement = h1.parentElement;
                const {top, bottom} = h1ParentElement.getBoundingClientRect();
                const h1Rect = {top, bottom};
                let children = [];
                const h2s = h1ParentElement.getElementsByTagName('h2');
                for (const h2 of h2s) {
                    let h2Content = '';
                    for(const node of h2.childNodes) {
                        if (node.nodeType === 3) {
                            h2Content = node.nodeValue;
                        }
                    };
                    const h2ParentElement = h2.parentElement;
                    const {top, bottom} = h2ParentElement.getBoundingClientRect();
                    const h2Rect = {top, bottom};
                    children.push({
                        rect: h2Rect,
                        content: h2Content
                    });
                }
                result.push({
                    rect: h1Rect,
                    content: h1Content,
                    children
                });
            }
            return result;
        },
        outputContnt(content) {
            this.$emit('input', content);
        }
    }
}
</script>
