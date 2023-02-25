import axios from 'axios';
import * as fs from 'fs';
import * as cheerio from 'cheerio';

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
    const html = await getHtml(url);
    const articles = await getArticles(html);
    await saveData(articles);
}

main();
