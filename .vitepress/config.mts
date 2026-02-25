import markdownItAnchor from "markdown-it-anchor";
import { defineConfig } from "vitepress";
// import markdownItFoo from 'markdown-it-foo'
import MarkdownIt from "markdown-it";
import nav from "./nav.mts";
import sidebar from "./sidebar.mts";
export default defineConfig({
    // github的文件夹名称(打包要展示的那个文件夹)
    base: "/fywy_dev/",
    lang: "zh-CN",
    title: "风月无涯_Blog",
    description: "A VitePress Site",
    srcDir: "docs",
    markdown: {
        anchor: {
            permalink: markdownItAnchor.permalink.headerLink(),
        },
        toc: { level: [1, 2] },
        config: (md) => {
            md.use(MarkdownIt);
        },
    },
    themeConfig: {
        logo: "/favicon.ico",

        // 搜索
        search: {
            provider: "local",
        },
        // 导航栏
        nav,

        // 侧边栏
        sidebar: { ...sidebar } as any,

        // 跳转链接
        socialLinks: [{ icon: "github", link: "https://github.com/TTQ123" }],

        footer: {
            message: "本网站为个人创作",
            copyright: "Copyright © 2019-present TTQ",
        },
    },
});
