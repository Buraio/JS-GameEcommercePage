class Themes {
  switchThemes() {
    const htmlRoot = document.querySelector("html");
    const themeSwitchInput = document.querySelector("#themeSwitch");

    
    themeSwitchInput.addEventListener("click", () => {
      console.log(themeSwitchInput.checked);

      if (!themeSwitchInput.checked) {
        htmlRoot.setAttribute("data-theme", "light");
      } else {
        htmlRoot.setAttribute("data-theme", "dark");
      }
    });
  }
}

export { Themes };
