function execute(url) {
    var doc = Http.get(url).html();
    var el = doc.select(".pictures img");
    var imgs = [];
    for (var i = 0; i < el.size(); i++) {
        var link = el.get(i).attr("src");
        if (!link) {
            link = el.get(i).attr("data-original")
        }
        if (!link.startsWith("http")) {
            if (link.startsWith("/")) {
                link = "https://saytruyen.com" + link;
            } else {
                link = "https://saytruyen.com/" + link;
            }
        }
        imgs.push(link.trim())
    }
    return Response.success(imgs);
}