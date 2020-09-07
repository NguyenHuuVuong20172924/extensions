function execute(url, page) {
    if (!page) page = '1';
    const doc = Http.get(url).params({"page": page}).html()

    var next = doc.select(".pagination").select("li:has(b) + li a").text()

    const el = doc.select(".block-item li.item")

    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select(".box-description a").first().text(),
            link: e.select(".box-description a").first().attr("href"),
            cover: e.select(".box-cover img").first().attr("src"),
            description: e.select(".box-description p").first().text().replace( e.select(".box-description a").first().text() + " - ", ""),
            host: "https://hentaivn.net"
        })
    }

    return Response.success(data, next)
}