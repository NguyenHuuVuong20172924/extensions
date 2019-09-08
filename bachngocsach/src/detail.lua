local url = ...

local doc = http:request(url):html()

if doc ~= nil then
    local book = {}
    book["name"] =  doc:select("h1#truyen-title"):text()
    book["cover"] = core:merge_url("http://bachngocsach.com", doc:select("div#anhbia img"):attr("src"))
    book["author"] = doc:select("div#tacgia a"):text()
    book["description"] = doc:select("div#gioithieu"):html()
    book["detail"] = doc:select("div#tacgia"):html() .. "<br>" .. doc:select("div#theloai"):html()
    return book
end
return nil