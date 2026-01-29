const fs = require('fs');
const path = require('path');

// 读取HTML文件
const htmlFile = 'deepseek_html_20260129_31002b.html';
const htmlContent = fs.readFileSync(htmlFile, 'utf8');

// 简单的压缩处理 - 移除多余的空白字符
let minifiedHtml = htmlContent
    // 移除注释
    .replace(/<!--[\s\S]*?-->/g, '')
    // 移除多余的空白字符
    .replace(/\s+/g, ' ')
    // 移除标签之间的多余空白
    .replace(/> </g, '><')
    .trim();

// 创建dist目录
if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist');
}

// 写入压缩后的HTML文件
fs.writeFileSync(path.join('dist', 'index.html'), minifiedHtml);

console.log('构建完成！');
console.log('- 原始文件大小:', htmlContent.length, '字符');
console.log('- 压缩后大小:', minifiedHtml.length, '字符');
console.log('- 压缩率:', ((1 - minifiedHtml.length / htmlContent.length) * 100).toFixed(2), '%');
console.log('- 输出文件: dist/index.html');