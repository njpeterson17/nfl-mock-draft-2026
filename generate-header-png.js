const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    
    // Set viewport to match header dimensions
    await page.setViewport({
        width: 1200,
        height: 300,
        deviceScaleFactor: 2 // High DPI for crisp image
    });
    
    // Load the HTML file
    const htmlPath = path.join(__dirname, 'header-animation.html');
    await page.goto('file://' + htmlPath, {
        waitUntil: 'networkidle0'
    });
    
    // Wait a bit for animations to settle
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Take screenshot
    await page.screenshot({
        path: 'header-image.png',
        fullPage: false,
        type: 'png'
    });
    
    console.log('✅ Header image generated: header-image.png (2400x600px @2x)');
    
    await browser.close();
})();
