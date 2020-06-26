function execute(url) {
    var doc = Http.get(url).html();

    var el = doc.select(".list-chapter").last().select("ul h4 a")
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.text(),
            url: e.attr("href"),
            host: "https://webtruyen.com"
        })
    }

    return Response.success(data);
}