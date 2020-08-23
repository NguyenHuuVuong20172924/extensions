function execute(url, page) {
    const htm = Http.get(url).string()
    const json = JSON.parse(htm)


    const data = [];
    json.result.forEach(e => data.push({
        name: e.name,
        link: "https://beeng.net/truyen-tranh-online/" + e.slug + "-" + e.id,
        cover: e.image,
        description: e.chapters_latest.name,
        host: "https://beeng.net"
    }))

    return Response.success(data)
}