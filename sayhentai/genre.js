function execute() {
    const doc = Http.get("https://sayhentai.net").html();
    const el = doc.select("#list_theloai a");
    const data = [];
    for (var i = 4; i < el.size(); i++) {
        var e = el.get(i);
        data.push({
           title: e.text(),
           input: "https://sayhentai.net"+e.attr('href'),
           script: 'cat.js'
        });
    }
    return Response.success(data);
}