const filterButton = document.getElementById("filter-button");
const filterScreen = document.getElementById("screen");
const filterClose = document.getElementById("filter-close-button");
const filterReset = document.getElementById("filter-reset-button");
const blockWrapper = document.getElementById("block-wrapper");
const gift = document.getElementById("gift");
const memories = document.getElementById("memories");
const merchandise = document.getElementById("merchandise");
const newest = document.getElementById("newest");
const oldest = document.getElementById("oldest");

// Filter Screen Toggle
const screenToggle = () => {
  filterScreen.classList.toggle("show");
};

filterButton.addEventListener("click", screenToggle);
filterClose.addEventListener("click", screenToggle);
// Filter Screen Toggle End

// Card Object
const cardObject = [
  {
    image:
      "https://cdn.foreignpolicy.design/wp-content/uploads/FOREIGNPOLICY_SIPF-06.jpg?strip=all&lossy=1&quality=90&ssl=1",
    tgl: new Date("2024-12-04"),
    title: "Title Obj 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendiexplicabo omnis rem facilis quam, corrupti ea aliquid neque laudantium tenetur voluptate veniam!",
    tags: "MERCHANDISE",
  },

  {
    image:
      "https://cdn.foreignpolicy.design/wp-content/uploads/FOREIGNPOLICY_SIPF-06.jpg?strip=all&lossy=1&quality=90&ssl=1",
    tgl: new Date("2024-12-03"),
    title: "Title Obj 2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendiexplicabo omnis rem facilis quam, corrupti ea aliquid neque laudantium tenetur voluptate veniam!",
    tags: "GIFT",
  },

  {
    image:
      "https://cdn.foreignpolicy.design/wp-content/uploads/FOREIGNPOLICY_SIPF-06.jpg?strip=all&lossy=1&quality=90&ssl=1",
    tgl: new Date("2024-12-02"),
    title: "Title Obj 3",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendiexplicabo omnis rem facilis quam, corrupti ea aliquid neque laudantium tenetur voluptate veniam!",
    tags: "MEMORIES",
  },
  {
    image:
      "https://cdn.foreignpolicy.design/wp-content/uploads/FOREIGNPOLICY_SIPF-06.jpg?strip=all&lossy=1&quality=90&ssl=1",
    tgl: new Date("2024-12-01"),
    title: "Title Obj 4",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendiexplicabo omnis rem facilis quam, corrupti ea aliquid neque laudantium tenetur voluptate veniam!",
    tags: "MERCHANDISE",
  },
];

const setBlockCard = (arr = cardObject) => {
  blockWrapper.innerHTML += arr
    .map(
      ({ image, tgl, title, desc, tags }) =>
        `
            <div class="block-card">
        <a href="#">
          <div class="block-card-img">
            <img
              src="${image}"
              alt=""
            />
          </div>
          <div class="block-card-date">
            ${tgl.toLocaleDateString()}
          </div>
          <div class="block-card-title">${title}</div>
          <div class="block-card-desc">
            ${desc}
          </div>
          <div class="block-card-tags">
            <p class="tags">${tags}</p>
          </div>
        </a>
      </div> 
        `
    )
    .join("");
};

// const filterBlock = (str) => {
//   blockWrapper.innerHTML = "";
//   setBlockCard(cardObject.filter((card) => card.tags === str));
// };

gift.addEventListener("click", () => {
  blockWrapper.innerHTML = "";
  setBlockCard(cardObject.filter((card) => card.tags === "GIFT"));
  screenToggle();
});
merchandise.addEventListener("click", () => {
  blockWrapper.innerHTML = "";
  setBlockCard(cardObject.filter((card) => card.tags === "MERCHANDISE"));
  screenToggle();
});
memories.addEventListener("click", () => {
  blockWrapper.innerHTML = "";
  setBlockCard(cardObject.filter((card) => card.tags === "MEMORIES"));
  screenToggle();
});

filterReset.addEventListener("click", () => {
  blockWrapper.innerHTML = "";
  setBlockCard();
  screenToggle();
});
