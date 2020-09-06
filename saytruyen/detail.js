function execute(url) {
    const doc = Http.get(url).html();

    return Response.success({
        name: doc.select("h1.comics-title").first().text(),
        cover: doc.select(".detail-top .detail-top-right img").first().attr("src"),
        author: doc.select(".created-by a").first().text(),
        description: doc.select(".description").html(),
        detail: doc.select(".created-by").html(),
        host: "https://saytruyen.com",
        ongoing: doc.select(".update-date").text().indexOf("Đã Hoàn Thành") === -1
    });
}