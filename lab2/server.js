import axios from "axios";
import fs from "fs";
import * as cheerio from 'cheerio';

async function getHtml(url) {
    try {
        const response = await axios.get(url);
        const html = response.data;
        // console.log(html);
        return html;
    } catch (error) {
        console.error(error);
    }
}

async function getArticles(html) {
    const $ = cheerio.load(html);
    const articles = $(".css-1cp3ece").map((i, el) => {
        const title = $(el).find("h2").text();
        const link = $(el).find("a").attr("href");
        const summary = $(el).find("p").text();
        return { title, link, summary };
    }).get();

    return articles;
}

async function main() {
    const url = "https://www.nytimes.com/section/business";
    const html = await getHtml(url);
    const articles = await getArticles(html);
    console.log(articles);
}

main();
