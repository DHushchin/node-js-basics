import axios from "axios";

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


setInterval(async () => {
  const url = "https://www.nytimes.com/section/business";
    const html = await getHtml(url);
    console.log(html);
}
, 5 * 1000);