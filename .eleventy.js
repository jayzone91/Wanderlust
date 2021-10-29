module.exports = function(eleventyConfig) {

    // Watchtargets
    eleventyConfig.addWatchTarget('./src/scss/');

    // Passthrough Copies

    // Shortcodes
    eleventyConfig.addShortcode("year", () => {
        let tmp = new Date().getFullYear();
        return tmp.toString();
    });

    // Input- / Output-Directories
    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}