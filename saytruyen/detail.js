function execute(url) {
    const doc = Http.get(url).html();

    return Response.success({
        name: doc.select("h1.hl-name-book").first().text(),
        cover: doc.select(".book-thum img").first().attr("src"),
        author: doc.select("a[href~=truyen-tac-gia]").first().text(),
        description: doc.select(".box-show-des").html(),
        detail: doc.select(".book-list-field .l-book-list-field").html(),
        host: "https://saytruyen.com",
        ongoing: doc.select(".status-chapter").text().indexOf("Đang ra") >= 0
    });
}