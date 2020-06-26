function execute(url) {
    var doc = Http.get(url).html().select(".detail");

    var author = doc.select(".detail-info").html().match(/tac-gia.*?>(.*?)</);
    if (author) author = author[1];
    return Response.success({
        name: doc.select("h1").first().text(),
        cover: doc.select(".detail-thumbnail img").first().attr("src"),
        author: author,
        description: doc.select(".summary article").html(),
        detail: doc.select(".detail-info").html(),
        host: "https://webtruyen.com",
        ongoing: doc.select(".detail-info").html().indexOf("Đang cập nhật") >= 0
    });
}