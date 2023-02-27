import axios from 'axios';
import * as fs from 'fs';
import * as cheerio from 'cheerio';
import * as http from 'http';

const PORT = 3000;

async function getHtml(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

async function getArticles(html) {
    const $ = cheerio.load(html);
    return $('.css-1cp3ece')
        .map((i, el) => {
            const title = $(el).find('h2').text();
            const link = $(el).find('a').attr('href');
            const summary = $(el).find('p').text();
            return { title, link, summary };
        })
        .get();
}

async function saveData(articles) {
    // data.lenght = 3288

    if (!fs.existsSync('data')) {
        fs.mkdirSync('data');
    }

    for (let i = 0; i < 5; i++) {
        const filename = `data/article_${i}.json`;
        const article = articles[i];
        fs.writeFileSync(filename, JSON.stringify(article, null, 2));
    }
}

async function main() {
    const url = 'https://www.nytimes.com/section/business';
    console.log('new data loaded');
    const html = await getHtml(url);
    const articles = await getArticles(html);
    await saveData(articles);
}

function getData() {
    if (!fs.existsSync('data')) {
        fs.mkdirSync('data');
    }

    var articles = [];

    for (let i = 0; i < 5; i++) {
        const filename = `data/article_${i}.json`;
        var article = JSON.parse(fs.readFileSync(filename, 'utf8'));
        articles.push(article);
    }

    console.log('got new data');
    return articles;
}

setInterval(main, 20*1000);

const server = http.createServer((req, res) => {
    console.log('Server request');
    res.setHeader('Content-Type', 'text/html');
    res.write('<head><link rel="stylesheet" href="./styles.css"/></head>')
    
    var articles = getData();
    for (let index = 0; index < articles.length; index++) {
        res.write(`<p><a href="https://www.nytimes.com${articles[index].link}">${articles[index].title}</a></p>`);
    }
    res.end();
});

server.listen(PORT, 'localhost', (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`);
});
