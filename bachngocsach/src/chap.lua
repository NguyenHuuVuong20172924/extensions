local url = ...
local doc = http:request(url):html()
if doc ~= nil then
    return doc:select("div#noidung"):html()
end
return nil