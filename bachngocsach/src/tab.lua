local url, next = ...

local doc
if next == nil then
    doc = http:request(url):html()
else
    doc = http:request(url .. "?page=" .. next):html()
end

if doc ~= nil then

    local data = {}

    local el = doc:select("ul.content-grid > li > div")

    local list = {}
    for i = 0, el:size() - 1 do
        local e = el:get(i)
        local item = {}
        item["name"] = e:select("div.recent-truyen a"):text()
        item["link"] = e:select("div.recent-truyen a"):attr("href")
        item["cover"] = e:select("div.recent-anhbia img"):attr("src")
        item["description"] = e:select("div.recent-chuong a"):text()
        item["host"] = "https://bachngocsach.com"
        table.insert(list, item)
    end

    local pageNext = num:to_int(regexp:find_last(doc:select("li.pager-next > a"):attr("href"), "page=(\\d+)"), -1)
    if pageNext > 0 then
        data["next"] = pageNext
    end
    data["data"] = list

    return data
end