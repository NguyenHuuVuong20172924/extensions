local url = ...
local doc = http:get(url):html()
doc:select("._hover"):remove()
return response:success(doc:select("article.convert"):html())