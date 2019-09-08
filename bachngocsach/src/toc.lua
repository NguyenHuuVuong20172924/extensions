local url = ...

local list = {}
local doc = http:request(url):html()
if doc ~= nul then
    local el = doc:select("div.view-content ul div.mucluc-chuong a")
    for i = 0, el:size() - 1 do
        local e = el:get(i)
        table.insert(list, core:new_chapter(e:text(), e:attr("href"), "http://bachngocsach.com"))
    end
end
return list