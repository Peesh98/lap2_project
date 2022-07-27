// Placeholder id's have been used, will be changed to reflect the actual HTML element ID's
const createMenuBtn = document.getElementById("createMenuBtn");
const createMenu = document.getElementById("createMenu");

const greetingBox = document.getElementById("greeting");
const greetingMessage = document.createElement("h2");

/*const createHabitBtn = document
  .getElementById("createPost")
  .addEventListener("click", () => {
    createMenu.style.display = "block";
  }); */

const createHabitForm = document.getElementById("createPost");

/*createHabitForm.addEventListener("submit", (e) => {
  createHabit(e);
  window.location.reload();
}); */

const habitCollection = document.getElementById("greetingPost"); // will change depending on what id Aditi has set

function displayAllHabits() {
  const habits = getAllHabits();
  for (let i = 0; i < habits.length; i++) {
    const { name, frequency } = habits[i];
    let id = i;
    const habitContainer = document.createElement("div");
    habitContainer.classList = "habit-container";

    const habitHeader = document.createElement("div");
    habitHeader.classList = "habit-header";
    const habitBody = document.createElement("div");
    habitBody.classList = "habit-body";
    const habitFooter = document.createElement("div");
    habitFooter.classList = "habit-footer";

    const habitName = document.createElement("p");
    habitName.classList = "habit-name";
    habitName.textContent = name;
    habitHeader.appendChild(habitName);

    const startOfWeekBox = document.createElement("div");
    startOfWeekBox.classList = "start-week-box";
    startOfWeekBox.id = `startWeek + ${id}`;

    const endOfWeekBox = document.createElement("div");
    endOfWeekBox.classList = "end-week-box";
    endOfWeekBox.id = `endWeek + ${id}`;

    let numberOfWeeks = 1;

    if (frequency.weekly === true) {
      let currentDate = new Date();

      const startOfTheWeek = new Date();
      startOfTheWeek.setDate(startOfTheWeek.getDate() - currentDate + 1);
      startOfTheWeek.toLocaleDateString();
      let shortStartOfWeek = startOfTheWeek.toString().slice(0, 10);

      const endOfWeek = new Date();
      endOfWeek.setDate(endOfWeek.getDate() - currentDay + 1);
      endOfWeek.setDate(endOfWeek.getDate() + numberOfWeeks * 6);
      endOfWeek.toLocaleDateString();
      let shortEndOfWeek = endOfWeek.toString().slice(0, 10);
    }
    const mon = document.createElement("button");
    mon.classList = "habit-complete-button";
    mon.id = `mon + ${id}`;

    const tue = document.createElement("button");
    tue.classList = "habit-complete-button";
    tue.id = `tue + ${id}`;

    const wed = document.createElement("button");
    wed.classList = "habit-complete-button";
    wed.id = `wed + ${id}`;

    const thu = document.createElement("button");
    thu.classList = "habit-complete-button";
    thu.id = `thu + ${id}`;

    const fri = document.createElement("button");
    fri.classList = "habit-complete-button";
    fri.id = `fri + ${id}`;

    const sat = document.createElement("button");
    sat.classList = "habit-complete-button";
    sat.id = `sat + ${id}`;

    const sun = document.createElement("button");
    sun.classList = "habit-complete-button";
    sun.id = `sun + ${id}`;

    habitFooter.appendChild(mon);
    habitFooter.appendChild(tue);
    habitFooter.appendChild(wed);
    habitFooter.appendChild(thu);
    habitFooter.appendChild(fri);
    habitFooter.appendChild(sat);
    habitFooter.appendChild(sun);
    // }
    habitContainer.appendChild(habitHeader);
    habitContainer.appendChild(habitBody);
    habitContainer.appendChild(habitFooter);

    habitCollection.appendChild(habitContainer);
  }
}

displayAllHabits();
