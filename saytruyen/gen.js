function execute(url, page) {
    if (page) {
        url = "https://saytruyen.com/" + page;
    }
    const doc = Http.get(url).html();

    var next = doc.select(".pagination li:has(a.active) + li").select("a").attr("href");

    const el = doc.select(".items .list-manga");

    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select("h3#tables a").first().text(),
            link: e.select("h3#tables a").first().attr("href"),
            cover: e.select("img.img-thumb").first().attr("src"),
            description: e.select(".last-chap").text(),
            host: "https://saytruyen.com"
        });
    }

    return Response.success(data, next)
}