local url = ...
local doc = http:get(url):html()
local list = {}
local pages = doc:select(".pagination li")
local page = 1
if pages:size() > 1 then
    page = num:to_int(regexp:find(pages:get(pages:size() - 2):select("a"):attr("href"), "/(\\d+)"), 1)
end
for i = 1, page do
    table.insert(list, url .. "/" .. i)
end
return response:success(list)