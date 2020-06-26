function execute() {
    return Response.success([
        {title: "Mới cập nhật", input: "https://www.wattpad.com/api/v3/stories?filter=new&fields=stories(id,title,cover,description,url)", script: "gen.js"}
    ]);
}