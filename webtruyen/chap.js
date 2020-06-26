function execute(url) {
    var doc = Http.get(url).html();
    doc.select("#divcontent script,a,.text-webtruyen").remove();
    return Response.success(doc.select("#divcontent").html());
}