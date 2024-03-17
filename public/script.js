//const serverURL = 'https://tic-tac-toe-server.azurewebsites.net'     // production site
const serverURL = 'http://localhost:3000'      // testing site

const getLeadersExtenstion = '/api/GetLewisTacToeLeaders'

async function getLeaders() {
    const response = await fetch(serverURL + getLeadersExtenstion)
    const jsonObj = await response.json()
    const leaderboardTable = document.getElementById("leaderboardTable")
    leaderboardTable.rows[1].cells[0].innerHTML = jsonObj[0].UserName
    leaderboardTable.rows[1].cells[1].innerHTML = jsonObj[0].TotalWins
    leaderboardTable.rows[2].cells[0].innerHTML = jsonObj[1].UserName
    leaderboardTable.rows[2].cells[1].innerHTML = jsonObj[1].TotalWins
    leaderboardTable.rows[3].cells[0].innerHTML = jsonObj[2].UserName
    leaderboardTable.rows[3].cells[1].innerHTML = jsonObj[2].TotalWins
}

getLeaders()