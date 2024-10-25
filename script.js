// Declaring Element
const filterButton = document.getElementById("filter-button");
const menuButton = document.getElementById("menu-button");
const filterScreen = document.getElementById("screen");
const filterClose = document.getElementById("filter-close-button");
const filterReset = document.getElementById("filter-reset-button");
const blockWrapper = document.getElementById("block-wrapper");
const thumbWrapper = document.getElementById("thumb-wrapper");
const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close");
const dimmer = document.getElementById("dimmer");
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

// Modal Toggle
const modalToggle = () => {
  modal.classList.toggle("modal-show");
};

const dimmerToggle = () => {
  dimmer.classList.toggle("dimmer-show");
};

const modalClose = () => {
  modalToggle();
  dimmerToggle();
  modal.innerHTML = "";
};

// Card Object
const cardObject = [
  {
    image:
      "https://i.pinimg.com/originals/77/b9/e7/77b9e76f52ac594d104bfa284fbd24b4.gif",
    tgl: new Date("2024-12-04"),
    title: "Title Obj 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendiexplicabo omnis rem facilis quam, corrupti ea aliquid neque laudantium tenetur voluptate veniam!",
    tags: "MERCHANDISE",
    numID: 4,
  },

  {
    image:
      "https://cdn.foreignpolicy.design/wp-content/uploads/FOREIGNPOLICY_SIPF-06.jpg?strip=all&lossy=1&quality=90&ssl=1",
    tgl: new Date("2024-12-03"),
    title: "Title Obj 2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendiexplicabo omnis rem facilis quam, corrupti ea aliquid neque laudantium tenetur voluptate veniam!",
    tags: "GIFT",
    numID: 3,
  },

  {
    image:
      "https://i.pinimg.com/originals/64/6e/2c/646e2cbd13e9f5405e2db984e26ab079.gif",
    tgl: new Date("2024-12-02"),
    title: "Title Obj 3",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendiexplicabo omnis rem facilis quam, corrupti ea aliquid neque laudantium tenetur voluptate veniam!",
    tags: "MEMORIES",
    numID: 2,
  },
  {
    image:
      "https://i.pinimg.com/originals/80/9d/50/809d5087c4098be82394b718891fa9cb.gif",
    tgl: new Date("2024-12-01"),
    title: "Title Obj 4",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendiexplicabo omnis rem facilis quam, corrupti ea aliquid neque laudantium tenetur voluptate veniam!",
    tags: "MERCHANDISE",
    numID: 1,
  },
];

// Rendering Card Object
const renderCard = (arr) => {
  arr.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("thumb"); // Add a class for styling

    // Create elements for image, title, and description
    const imageElement = document.createElement("img");
    imageElement.classList.add("thumb-img");
    imageElement.src = card.image;

    // Append elements to the card
    cardElement.appendChild(imageElement);

    // Add a click event listener
    cardElement.addEventListener("click", (arr = cardObject) => {
      dimmerToggle();
      modalToggle();
      modal.innerHTML += `
    <img
        src="${card.image}"
        alt=""
        class="modal-img"
      />
      <p class="modal-date">${card.tgl.toLocaleDateString()}</p>
      <h3 class="modal-title">${card.title}</h3>
      <p class="modal-desc">
        ${card.desc}
      </p>
      <p class="modal-tags">${card.tags}</p>
      <button
        type="button"
        class="modal-close"
        id="modal-close"
        onclick="modalClose()"
      >
        CLOSE
      </button>
  `;
    });

    // Append the card to the container
    thumbWrapper.appendChild(cardElement);
  });
};

// Assign Button
gift.addEventListener("click", () => {
  thumbWrapper.innerHTML = "";
  renderCard(cardObject.filter((card) => card.tags === "GIFT"));
  screenToggle();
});

merchandise.addEventListener("click", () => {
  thumbWrapper.innerHTML = "";
  renderCard(cardObject.filter((card) => card.tags === "MERCHANDISE"));
  screenToggle();
});

memories.addEventListener("click", () => {
  thumbWrapper.innerHTML = "";
  renderCard(cardObject.filter((card) => card.tags === "MEMORIES"));
  screenToggle();
});

filterReset.addEventListener("click", () => {
  thumbWrapper.innerHTML = "";
  renderCard(cardObject);
  screenToggle();
});
