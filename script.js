// Data anggota kelas TI2B
const anggotaTI2B = [
  {
    nama: "Zulkifli",
    foto: "https://i.ibb.co/xs008VN/pp.jpg",
    ig: "https://www.instagram.com/zulkiflii.i/",
    github: "https://github.com/Zulkifli1409",
    linkedin: "https://www.linkedin.com/in/zul-kifli-2345b624a/",
    portfolio: "-",
    project: "-",
  },
  {
    nama: "Zulkifli",
    foto: "https://i.ibb.co/xs008VN/pp.jpg",
    ig: "https://www.instagram.com/zulkiflii.i/",
    github: "https://github.com/Zulkifli1409",
    linkedin: "https://www.linkedin.com/in/zul-kifli-2345b624a/",
    portfolio: "-",
    project: "-",
  },
  {
    nama: "Zulkifli",
    foto: "https://i.ibb.co/xs008VN/pp.jpg",
    ig: "https://www.instagram.com/zulkiflii.i/",
    github: "https://github.com/Zulkifli1409",
    linkedin: "https://www.linkedin.com/in/zul-kifli-2345b624a/",
    portfolio: "-",
    project: "-",
  },
  {
    nama: "Zulkifli",
    foto: "https://i.ibb.co/xs008VN/pp.jpg",
    ig: "https://www.instagram.com/zulkiflii.i/",
    github: "https://github.com/Zulkifli1409",
    linkedin: "https://www.linkedin.com/in/zul-kifli-2345b624a/",
    portfolio: "-",
    project: "-",
  },
  {
    nama: "Zulkifli",
    foto: "https://i.ibb.co/xs008VN/pp.jpg",
    ig: "https://www.instagram.com/zulkiflii.i/",
    github: "https://github.com/Zulkifli1409",
    linkedin: "https://www.linkedin.com/in/zul-kifli-2345b624a/",
    portfolio: "-",
    project: "-",
  },
  {
    nama: "Zulkifli",
    foto: "https://i.ibb.co/xs008VN/pp.jpg",
    ig: "https://www.instagram.com/zulkiflii.i/",
    github: "https://github.com/Zulkifli1409",
    linkedin: "https://www.linkedin.com/in/zul-kifli-2345b624a/",
    portfolio: "-",
    project: "-",
  },
];

const cardContainer = document.getElementById("card-container");

anggotaTI2B.forEach((anggota) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <img src="${anggota.foto}" alt="${anggota.nama}">
        <h2>${anggota.nama}</h2>
        <div class="social-buttons">
            <a href="${anggota.ig}" target="_blank">Instagram</a>
            <a href="${anggota.github}" target="_blank">GitHub</a>
            <a href="${anggota.linkedin}" target="_blank">LinkedIn</a>
        </div>
        <div class="button-container">
          <a class="portfolio" href="${anggota.portfolio}" target="_blank">Portfolio</a>
          <a class="project" href="${anggota.project}" target="_blank">Project</a>
        </div>

    `;
    cardContainer.appendChild(card);
});