function execute(url) {
    var doc = Http.get(url).html();
    var el = doc.select("#read-content img");
    var imgs = [];
    for (var i = 0; i < el.size(); i++) {
        var link = el.get(i).attr("data-original");
        if (!link) {
            link = el.get(i).attr("src")
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

    var script = doc.select("#read-content").html().match(/var imgs = (.*?);/)

    if (script) {
        script = script[1];
        var newImgs = JSON.parse(script);

        for (var j = 0; j < imgs.length; j++) {
            var lastNewIndex = newImgs.length - j - 1;
            if (lastNewIndex >= 0) {
                var img = newImgs[lastNewIndex].trim();
                if (img.startsWith("://")) {
                    img = "http" + img;
                } else if (img.startsWith("/")) {
                    img = "https://saytruyen.com" + img;
                } else {
                    img = "https://saytruyen.com/" + img;
                }
                if (img) {
                    var newIndex = imgs.length - j - 1;
                    if (newIndex >= 0) {
                        imgs[newIndex] = img;
                    }
                }
            }
        }
    }
    return Response.success(imgs);
}