local url = ...
local doc = http:get(url):html()
local list = {}
local pages = doc:select(".pagination li")
local page = 1
if pages:size() > 0 then
    if pages:size() > 1 then
        page = num:to_int(regexp:find(pages:get(pages:size() - 2):select("a"):attr("href"), "/(\\d+)"), 1)
    end
    for i = 1, page do
        table.insert(list, url .. "/" .. i)
    end
elseif pages:size() == 0 then
    local bookId = doc:select("#views"):attr("data-id")
    table.insert(list, bookId)
end

return response:success(list)