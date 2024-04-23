module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css/style.css");
    eleventyConfig.addPassthroughCopy("./src/script.js"); 
    eleventyConfig.addPassthroughCopy("./src/images");
    eleventyConfig.addPassthroughCopy("./src/admin/");

    eleventyConfig.setDataDeepMerge(false);

    // Watch Target
    eleventyConfig.addWatchTarget("./src/css/");

    // Markdown Filter
    const md = require("markdown-it")({
        html: false,
        breaks: true,
        linkify: true,
    });

    eleventyConfig.addNunjucksFilter("markdownify", (markdownString) => md.render(markdownString));

    return {
        dir: {
            input: "src",
            layouts: "_layouts",
            output: "public",
        },
    };
};
