local url = ...
local doc = http:get(url):html()
if doc ~= nil then
    return response:success(doc:select(".reading"):html())
end
return nil