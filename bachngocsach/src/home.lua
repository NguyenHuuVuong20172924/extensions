local data = {}

local dich = {}
dich["title"] = "Truyện Dịch"
dich["script"] = "tab.lua"
dich["input"] = "https://bachngocsach.com/reader/recent-bns"
table.insert(data, dich)

local convert = {}
convert["title"] = "Truyện Convert"
convert["script"] = "tab.lua"
convert["input"] = "https://bachngocsach.com/reader/recent-cv"
table.insert(data, convert)

local suu = {}
convert["title"] = "Sưu tầm"
convert["script"] = "tab.lua"
convert["input"] = "https://bachngocsach.com/reader/recent-st"
table.insert(data, convert)

return data
