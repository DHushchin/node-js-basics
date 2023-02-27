import axios from 'axios';
import * as fs from 'fs';
import * as cheerio from 'cheerio';
import * as http from 'http';

const PORT = 3000;
const url = 'https://www.nytimes.com/section/business';

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
    const html = await getHtml(url);
    const articles = await getArticles(html);
    await saveData(articles);
    console.log('Saved data');
}

async function getData() {
    if (!fs.existsSync('data')) {
        fs.mkdirSync('data');
    }

    let articles = [];

    for (let i = 0; i < 6; i++) {
        const filename = `data/article_${i}.json`;
        const article = await JSON.parse(fs.readFileSync(filename, 'utf8'));
        articles.push(article);
    }

    return articles;
}

async function getStyles(req, res) {
    await res.setHeader('Content-Type', 'text/html');
    await res.write(
        '<head><link rel="stylesheet" href="./styles.css"/></head>',
    );

    const articles = await getData();

    for (let index = 0; index < articles.length; index++) {
        await res.write(
            `<p><a href="https://www.nytimes.com${articles[index].link}">${articles[index].title}</a></p>`,
        );
    }

    await res.end();
}

setInterval(main, 5 * 1000);

const server = http.createServer(async (req, res) => {
    await getStyles(req, res);
    console.log('Updated data');
});

server.listen(PORT, 'localhost', (error) => {
    error ? console.log(error) : console.log(`Listening port ${PORT}`);
});
