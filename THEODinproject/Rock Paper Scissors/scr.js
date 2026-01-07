
      let soVan = 0;
      let result;
      let hScore = 0;
      let cScore = 0;
      function whoWin(choice) {
        let humanChoice = Number(choice);
        if (isNaN(humanChoice) || humanChoice < 0 || humanChoice > 2)
          return "Nhập từ 0 đến 2 thôi, đừng có luyên thuyên!";
        const tool = ["paper", "sciossor", "rock"];
        let computerRandom = Math.floor(Math.random() * tool.length);
        let valueC = tool[computerRandom];
        let valueH = tool[humanChoice];
        let winner = "";
        if (humanChoice === computerRandom) {
          winner = "no one";
        } else if (
          (humanChoice === 0 && computerRandom === 2) ||
          (humanChoice === 1 && computerRandom === 0) ||
          (humanChoice === 2 && computerRandom === 1)
        )
          winner = "human";
        else {
          winner = "bot";
        }
        return winner;
      }

      let score = document.getElementById("score");
      const btnC = document.querySelector("#btnC");
      btnC.addEventListener("click", () => {
        if (soVan === 5) {
          document.getElementById(
            "scoreBoard"
          ).innerHTML = `het roi choi cai gi nua May: ${cScore} Nguoi: ${hScore} `;
          return;
        }
        let sign = prompt("get your choice");
        if (sign === null) {
          score.innerHTML = "nhap lai lua chon cua ban";
        } else if (sign === "") {
          score.innerHTML = "nhap lai lua chon cua ban";
        } else {
          result = whoWin(sign);
          score.innerHTML = result;
          playRound(result);
        }
      });

      function playRound(Winner) {
        soVan++;
        if (Winner === "human") {
          hScore++;
        } else if (Winner === "bot") {
          cScore++;
        }
      }
 