local key, next = ...
local url = "https://bachngocsach.com/reader/search?ten=" .. key
if next ~= nil then
    url = "https://bachngocsach.com/reader/search?ten=" .. key .. "&page=" .. next
end
local doc = http:request(url):html()

if doc ~= nil then
    local data = {}

    local pageNext = num:to_int(regexp:find_last(doc:select("li.pager-next > a"):attr("href"), "page=(\\d+)"), -1)
    if pageNext > 0 then
        data["next"] = pageNext
    end

    local el = doc:select("div.view-content"):select("li.search-row")

    if el ~= nil then
        local list = {}
        for i = 0, el:size() - 1 do
            local e = el:get(i)
            local item = {}
            item["name"] = e:select("div.search-truyen a"):text()
            item["link"] = e:select("div.search-truyen a"):attr("href")
            item["cover"] = e:select("div.search-anhbia img"):attr("src")
            item["description"] = e:select("div.search-tacgia a"):text()
            item["host"] = "https://bachngocsach.com"
            table.insert(list, item)
        end
        data["data"] = list
    end
    return data
end
