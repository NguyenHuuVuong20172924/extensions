function execute(url) {
    var data = [];
    var doc = Http.get(url).html();
    var totalPage = doc.select(".pagination a.last").attr("href").match(/\/(\d+)\//);
    if (totalPage) totalPage = totalPage[1];
    else totalPage = 1;

    for (var i = 1; i <= totalPage; i++) {
        data.push(url + "/" + i);
    }

    return Response.success(data)
}