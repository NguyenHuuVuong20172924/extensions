function execute(url, page) {
    if (page) {
        url = "https://saytruyen.com/" + page;
    }
    const doc = Http.get(url).html();

    var next = doc.select(".box-page-view a.active + a").attr("href");

    const el = doc.select("#history li");

    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.select(".box-book-info a").first().text(),
            link: e.select(".box-book-info a").first().attr("href"),
            cover: e.select("img").first().attr("src"),
            description: e.select(".last-chap").text(),
            host: "https://saytruyen.com"
        });
    }

    return Response.success(data, next)
}