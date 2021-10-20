const needle = require('needle');
const Immutable = require('immutable');
const url = require('url');
module.exports = class mainControllerClass {

    static async commodityPrice(req, res) {
        const API_BASE_URL = process.env.DATA_GOV_API_URL;
        const commodityUrl = '9ef84268-d588-465a-a308-a864a43d0070';
        const params = new URLSearchParams({
            [process.env.DATA_GOV_API_KEY]: process.env.DATA_GOV_API_KEY_VALUE,
            format: 'json',
            ...url.parse(req.url, true).query,
        });
        try {
            console.log(params);
            const apiRes = await needle('get', `${API_BASE_URL}/${commodityUrl}?${params}`);
            const data = apiRes.body;
            res.status(200).json(data);

        } catch (error) {
            res.status(500).json({ error });
        }
    }
    static async OrdermapExample() {
        const results = [94, 88, 121];
        const posts = {
            94: { title: 'Foo bar', content: 'Blah blah blah...' },
            88: { title: 'Bar Foo', content: 'Blah blah blah...' },
            121: { title: 'Bing bang', content: 'Blah blah blah...' },
            17: { title: 'Ning nang', content: 'Blah blah blah...' },
        };
        const orderedPosts = Immutable.OrderedMap(results.map(key => [key, posts[key]]))
        // console.log(orderedPosts.toJSON());
    }
}