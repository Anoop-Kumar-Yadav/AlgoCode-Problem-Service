const { marked } = require("marked");
const sanitizeHtml = require("sanitize-html");
const TurndownService = require("turndown");

const turndownService = new TurndownService();

// Tell Turndown to explicitly keep these HTML tags in the final output
turndownService.keep(['details', 'summary']);

function sanitizeMarkdown(rawMarkdown) {
    // 1. Parse the initial Markdown into unsafe HTML
    const parsedHtml = marked.parse(rawMarkdown);

    // 2. Strip malicious scripts/tags to create safe HTML
    const cleanHtml = sanitizeHtml(parsedHtml, {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['details', 'summary'])
    });

    // 3. Convert the safe HTML back into final Markdown
    const safeMarkdown = turndownService.turndown(cleanHtml);

    return safeMarkdown;
}

module.exports = sanitizeMarkdown;