const movies = [
  {
    name: "Beauty Circus",
    img: "https://image.cineplexbd.com/movies/166384632736639.webp",
    info: 'Beauty Circus is a government-granted film and produced by Impress Telefilm. The production of "Beauty Circus" has been well under way for almost five years now. The star-studded cast of the film includes Jaya Ahsan, Ferdous, ABM Sumon, Gazi Rakayet, and Humayun Sadh',
    price: "250",
    id: 1,
  },
  {
    name: "Hawa",
    img: "https://image.cineplexbd.com/movies/165820878570654.webp",
    info: "Hawa is a Bangladeshi mystery-drama film written and directed by Mejbaur Rahman Sumon. The film is produced by A Facecard Productions and Sun Music & Motion Pictures Limited. The film stars Chanchal Chowdhury, Nazifa Tushi, Sariful Razz.",
    price: "250",
    id: 2,
  },
  {
    name: "Shin Ultraman",
    img: "https://image.cineplexbd.com/movies/166375896673324.webp",
    info: "Shin Ultraman is a 2022 Japanese superhero kaiju film directed by Shinji Higuchi and written, co-produced, and co-edited by Hideaki Anno. A reimagining of Ultraman, the film is a co-production between Toho Studios and Cine Baza.",
    price: "250",
    id: 3,
  },
  {
    name: "Avatar",
    img: "https://image.cineplexbd.com/movies/166375781129348.webp",
    info: " Jake, who is paraplegic, replaces his twin on the Navi inhabited Pandora for a corporate mission. After the natives accept him as one of their own, he must decide where his loyalties lie.",
    price: "250",
    id: 4,
  },
  {
    name: "Operation Sundarban",
    img: "https://image.cineplexbd.com/movies/166377073453348.webp",
    info: "Operation Sundarbans or Operation Sundarban is a Bangladeshi wildlife action thriller movie. The film is co-written and directed by Dipankar Sengupta Dipon. The film is produced by RAB Welfare Cooperative Society Ltd. Nazim-ud-Doula and Dipon have written the screenplay",
    price: "250",
    id: 5,
  },
  {
    name: "Black Adam",
    img: "https://image.cineplexbd.com/movies/165502423917984.webp",
    info: "In ancient Kahndaq, Teth Adam was bestowed the almighty powers of the gods. After using these powers for vengeance, he was imprisoned, becoming Black Adam. Nearly 5,000 years have passed, and Black Adam has gone from man to myth to legend.",
    price: "250",
    id: 6,
  },
  {
    name: "Red",
    img: "https://image.cineplexbd.com/movies/166375889158371.webp",
    info: " wo lookalikes get embroiled in a murder investigation and become the prime suspects. However, as new facts come to light, the case gets complicated.",
    price: "250",
    id: 7,
  },
];

movies.forEach((movie) => {
  const div = document.createElement("div");
  div.classList.add("card", "m-5", "rounded-lg", "bg-slate-600");
  div.innerHTML = `
  <div class="image">
            <img
              class="w-full"
              src=${movie.img}
              alt=""
            />
          </div>
          <div class="content p-5">
            <h1 class="font-bold text-white text-2xl">${movie.name}</h1>
            <p class="opacity-75 text-white ">
              ${movie.info}
            </p>
          <p class="mt-2 text-white" ><span class="font-bold">price:</span>${movie.price} tk</p>
          <button class="bg-zinc-300 px-5 py-2 mt-2 text-black rounded-lg hover:hover:bg-indigo-500">Book Now</button>
          </div>
  `;
  document.getElementById("cards").appendChild(div);
});
