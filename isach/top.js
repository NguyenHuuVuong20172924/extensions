function execute(url, page) {
    const doc = Http.get(url).html()

    const el = doc.select("#motsach_content_body .ms_list_item a")

    const data = [];
    for (var i = 0; i < el.size(); i++) {
        var e = el.get(i);
        var cover = e.attr("href").match(/story=(.*?)$/);
        data.push({
            name: e.text(),
            link: e.attr("href"),
            cover: cover ? ("/images/story/cover/" + cover[1] + ".jpg") : "",
            host: "https://isach.info"
        })
    }

    return Response.success(data)
}