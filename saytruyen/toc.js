function execute(url) {
    var doc = Http.get(url).html();

    var el = doc.select("#list_container").select("a");
    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
            name: e.text(),
            url: e.attr("href"),
            host: "https://saytruyen.com"
        })
    }

    return Response.success(data);
}