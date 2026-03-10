const { marked } = require("marked");
const sanitizeHtml = require("sanitize-html");
const TurndownService = require("turndown");

const turndownService = new TurndownService();

// Tell Turndown to keep these tags so they don't get converted to plain text
turndownService.keep(['details', 'summary', 'img']);

function sanitizeMarkdown(rawMarkdown) {
    // 1. Parse the initial Markdown into unsafe HTML
    const parsedHtml = marked.parse(rawMarkdown);

    // 2. Strip malicious scripts/tags to create safe HTML
    const cleanHtml = sanitizeHtml(parsedHtml, {

        // Explicitly allow images, details, and summary
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['details', 'summary', 'img']),
        
        // You must allow the 'src' attribute for images to work
        allowedAttributes: {
            ...sanitizeHtml.defaults.allowedAttributes,
            'img': ['src', 'alt', 'title', 'width', 'height'],
            'a': ['href', 'name', 'target']
        },
        
        // Ensure only web-safe protocols are used
        allowedSchemes: ['http', 'https', 'mailto']
    });

    // 3. Convert the safe HTML back into final Markdown
    const safeMarkdown = turndownService.turndown(cleanHtml);

    return safeMarkdown;
}

module.exports = sanitizeMarkdown;