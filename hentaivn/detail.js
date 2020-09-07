function execute(url) {
    const doc = Http.get(url).html()

    var info = doc.select(".page-info")
    return Response.success({
        name: info.select("h1").first().text(),
        cover: doc.select(".page-ava img").first().attr("src"),
        author: doc.select("a[href~=tacgia]").first().text(),
        description: info.html(),
        host: "https://hentaivn.net",
        ongoing: info.html().indexOf("Đã hoàn thành") === -1
    });
}