function execute() {
    return Response.success([
        { title: "Mới cập nhật", input: "https://saytruyen.com/danh-sach-truyen.html", script: "gen.js" },
        { title: "Manga", input: "https://saytruyen.com/danh-sach-truyen-the-loai-manga.html", script: "gen.js" },
        { title: "Manhwa", input: "https://saytruyen.com/danh-sach-truyen-the-loai-manhwa.html", script: "gen.js" },
        { title: "Manhua", input: "https://saytruyen.com/danh-sach-truyen-the-loai-manhua.html", script: "gen.js" },
        { title: "Hoàn thành", input: "https://saytruyen.com/truyen-da-hoan-thanh.html", script: "gen.js" }
    ]);
}