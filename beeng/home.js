function execute() {
    return Response.success([
        {title: "Mới nhất", input: "https://beeng.net/get-data/moi-nhat", script: "top.js"},
        {title: "Hot", input: "https://beeng.net/get-data/truyen-hot", script: "top.js"},
        {title: "Xem nhiều", input: "https://beeng.net/get-data/xem-nhieu", script: "top.js"}
    ]);
}