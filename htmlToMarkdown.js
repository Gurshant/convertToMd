const fs = require('fs');
const { convert } = require('html-to-markdown');

function htmlToMarkdown(inputFile, outputFile) {
    // Read the HTML file
    const htmlContent = fs.readFileSync(inputFile, 'utf-8');

    // Convert HTML to Markdown
    const markdownContent = convert(htmlContent);

    // Write the Markdown content to the output file
    fs.writeFileSync(outputFile, markdownContent, 'utf-8');
    console.log(`HTML to Markdown conversion complete. Saved as ${outputFile}`);
}

const inputFile = 'input.html'; // Specify the input HTML file
const outputFile = 'output.md'; // Specify the output Markdown file

htmlToMarkdown(inputFile, outputFile);