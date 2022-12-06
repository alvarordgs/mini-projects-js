function showSkills() {
    const skillsIconsList = document.querySelectorAll(".js-skills-icons li");

    const skillsContentList = document.querySelectorAll(
        ".js-skills-content section"
    );

    const activeClass = "ativo";

    if (skillsIconsList.length && skillsContentList.length) {
        skillsContentList[0].classList.add(activeClass);

        function showContent(index) {
            skillsIconsList.forEach((icon) => {
                icon.classList.remove(activeClass);
            });

            skillsContentList.forEach((section) => {
                section.classList.remove(activeClass);
            });

            skillsIconsList[index].classList.add(activeClass);

            skillsContentList[index].classList.add(activeClass);
        }

        skillsIconsList.forEach((icon, index) => {
            icon.addEventListener("click", () => {
                showContent(index);
            });
        });
    }
}

showSkills();

function accordion() {
    const questionsList = document.querySelectorAll(".js-accordion dt");
    const activeClass = "ativo";

    if (questionsList.length) {
        questionsList[0].classList.add(activeClass);
        questionsList[0].nextElementSibling.classList.add(activeClass);

        function showAnswer() {
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }

        questionsList.forEach((question) => {
            question.addEventListener("click", showAnswer);
        });
    }
}

accordion();
