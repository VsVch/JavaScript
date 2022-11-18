class FootballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }
    newAdditions(footballPlayers) {
        const player = {
            name,
            age,
            pValue

        };
        
        let {name, age, pValue} = footballPlayers;
        
        if(Array.invitedPlayers(name)) {
            if(this.invitedPlayers[pValue] < pValue) {
                this.invitedPlayers[pValue] = pValue;
            }
        }
        this.invitedPlayers.push(player);
        

    }
    signContract(selectedPlayer) {

    }
    ageLimit(name, age) {

    }
    transferWindowResult() {

    }


}
console.log('sdsdsds');
let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
