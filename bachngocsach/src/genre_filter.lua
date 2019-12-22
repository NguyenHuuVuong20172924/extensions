local group = {
    {
        ["key"] = "",
        ["name"] = "Tất cả"
    },
    {
        ["key"] = "truyen-hay",
        ["name"] = "Truyện hay"
    },
    {
        ["key"] = "hoan-thanh",
        ["name"] = "Hoàn thành"
    }
}
local filter = {}
table.insert(filter, {
    ["data"] = group,
    ["type"] = "single",
    ["name"] = ""
})
return filter