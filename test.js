function ingameInfo() {

    var blueTeamChampion1 = document.getElementById('blueTeam-champion1');
    var blueTeamChampion2 = document.getElementById('blueTeam-champion2');
    var blueTeamChampion3 = document.getElementById('blueTeam-champion3');
    var blueTeamChampion4 = document.getElementById('blueTeam-champion4');
    var blueTeamChampion5 = document.getElementById('blueTeam-champion5');

    var blueTeamName1 = document.getElementById('blueTeam-player-name1');
    var blueTeamName2 = document.getElementById('blueTeam-player-name2');
    var blueTeamName3 = document.getElementById('blueTeam-player-name3');
    var blueTeamName4 = document.getElementById('blueTeam-player-name4');
    var blueTeamName5 = document.getElementById('blueTeam-player-name5');

    var blueTeamPlayerSummonerOne1 = document.getElementById('blueTeam-player-summoners1');
    var blueTeamPlayerSummonerOne2 = document.getElementById('blueTeam-player-summoners2');
    var blueTeamPlayerSummonerOne3 = document.getElementById('blueTeam-player-summoners3');
    var blueTeamPlayerSummonerOne4 = document.getElementById('blueTeam-player-summoners4');
    var blueTeamPlayerSummonerOne5 = document.getElementById('blueTeam-player-summoners5');

    var blueTeamPlayerSummonerTwo1 = document.getElementById('blueTeam-player-summonersTwo1');
    var blueTeamPlayerSummonerTwo2 = document.getElementById('blueTeam-player-summonersTwo2');
    var blueTeamPlayerSummonerTwo3 = document.getElementById('blueTeam-player-summonersTwo3');
    var blueTeamPlayerSummonerTwo4 = document.getElementById('blueTeam-player-summonersTwo4');
    var blueTeamPlayerSummonerTwo5 = document.getElementById('blueTeam-player-summonersTwo5');

    var blueTeamPlayerElo1 = document.getElementById('blueTeam-elo1');
    var blueTeamPlayerElo2 = document.getElementById('blueTeam-elo2');
    var blueTeamPlayerElo3 = document.getElementById('blueTeam-elo3');
    var blueTeamPlayerElo4 = document.getElementById('blueTeam-elo4');
    var blueTeamPlayerElo5 = document.getElementById('blueTeam-elo5');

    var blueTeamPlayerEloSpan1 = document.getElementById('blueTeam-eloSpan1');
    var blueTeamPlayerEloSpan2 = document.getElementById('blueTeam-eloSpan2');
    var blueTeamPlayerEloSpan3 = document.getElementById('blueTeam-eloSpan3');
    var blueTeamPlayerEloSpan4 = document.getElementById('blueTeam-eloSpan4');
    var blueTeamPlayerEloSpan5 = document.getElementById('blueTeam-eloSpan5');

    var redTeamChampion1 = document.getElementById('redTeam-champion1');
    var redTeamChampion2 = document.getElementById('redTeam-champion2');
    var redTeamChampion3 = document.getElementById('redTeam-champion3');
    var redTeamChampion4 = document.getElementById('redTeam-champion4');
    var redTeamChampion5 = document.getElementById('redTeam-champion5');

    var redTeamName1 = document.getElementById('redTeam-player-name1');
    var redTeamName2 = document.getElementById('redTeam-player-name2');
    var redTeamName3 = document.getElementById('redTeam-player-name3');
    var redTeamName4 = document.getElementById('redTeam-player-name4');
    var redTeamName5 = document.getElementById('redTeam-player-name5');

    var redTeamPlayerSummonerOne1 = document.getElementById('redTeam-player-summoners1');
    var redTeamPlayerSummonerOne2 = document.getElementById('redTeam-player-summoners2');
    var redTeamPlayerSummonerOne3 = document.getElementById('redTeam-player-summoners3');
    var redTeamPlayerSummonerOne4 = document.getElementById('redTeam-player-summoners4');
    var redTeamPlayerSummonerOne5 = document.getElementById('redTeam-player-summoners5');

    var redTeamPlayerSummonerTwo1 = document.getElementById('redTeam-player-summonersTwo1');
    var redTeamPlayerSummonerTwo2 = document.getElementById('redTeam-player-summonersTwo2');
    var redTeamPlayerSummonerTwo3 = document.getElementById('redTeam-player-summonersTwo3');
    var redTeamPlayerSummonerTwo4 = document.getElementById('redTeam-player-summonersTwo4');
    var redTeamPlayerSummonerTwo5 = document.getElementById('redTeam-player-summonersTwo5');

    var redTeamPlayerElo1 = document.getElementById('redTeam-elo1');
    var redTeamPlayerElo2 = document.getElementById('redTeam-elo2');
    var redTeamPlayerElo3 = document.getElementById('redTeam-elo3');
    var redTeamPlayerElo4 = document.getElementById('redTeam-elo4');
    var redTeamPlayerElo5 = document.getElementById('redTeam-elo5');

    var redTeamPlayerEloSpan1 = document.getElementById('redTeam-eloSpan1');
    var redTeamPlayerEloSpan2 = document.getElementById('redTeam-eloSpan2');
    var redTeamPlayerEloSpan3 = document.getElementById('redTeam-eloSpan3');
    var redTeamPlayerEloSpan4 = document.getElementById('redTeam-eloSpan4');
    var redTeamPlayerEloSpan5 = document.getElementById('redTeam-eloSpan5');

    var blueFirstChamp = render.getElementsByClassName('Table Team-100')[0].lastElementChild.childNodes[1].firstElementChild.firstElementChild.getAttribute('title').replace(" ", "");
    var blueSecondChamp = render.getElementsByClassName('Table Team-100')[0].lastElementChild.childNodes[3].firstElementChild.firstElementChild.getAttribute('title').replace(" ", "");
    var blueThirdChamp = render.getElementsByClassName('Table Team-100')[0].lastElementChild.childNodes[5].firstElementChild.firstElementChild.getAttribute('title').replace(" ", "");
    var blueFourthChamp = render.getElementsByClassName('Table Team-100')[0].lastElementChild.childNodes[7].firstElementChild.firstElementChild.getAttribute('title').replace(" ", "");
    var blueFifthChamp = render.getElementsByClassName('Table Team-100')[0].lastElementChild.childNodes[9].firstElementChild.firstElementChild.getAttribute('title').replace(" ", "");

    console.log(blueSecondChamp);

    blueTeamChampion1.src = 'http://ddragon.leagueoflegends.com/cdn/7.24.2/img/champion/' + blueFirstChamp + '.png';
    blueTeamChampion2.src = 'http://ddragon.leagueoflegends.com/cdn/7.24.2/img/champion/' + blueSecondChamp + '.png';
    blueTeamChampion3.src = 'http://ddragon.leagueoflegends.com/cdn/7.24.2/img/champion/' + blueThirdChamp + '.png';
    blueTeamChampion4.src = 'http://ddragon.leagueoflegends.com/cdn/7.24.2/img/champion/' + blueFourthChamp + '.png';
    blueTeamChampion5.src = 'http://ddragon.leagueoflegends.com/cdn/7.24.2/img/champion/' + blueFifthChamp + '.png';

    var blueFirstName = render.getElementsByClassName('Table Team-100')[0].lastElementChild.childNodes[1].childNodes[7].firstElementChild.innerText;
    var blueSecondName = render.getElementsByClassName('Table Team-100')[0].lastElementChild.childNodes[3].childNodes[7].firstElementChild.innerText;
    var blueThirdName = render.getElementsByClassName('Table Team-100')[0].lastElementChild.childNodes[5].childNodes[7].firstElementChild.innerText;
    var blueFourthName = render.getElementsByClassName('Table Team-100')[0].lastElementChild.childNodes[7].childNodes[7].firstElementChild.innerText;
    var blueFifthName = render.getElementsByClassName('Table Team-100')[0].lastElementChild.childNodes[9].childNodes[7].firstElementChild.innerText;

    blueTeamName1.innerText = blueFirstName;
    blueTeamName1.setAttribute('onclick','document.getElementById("input-summonerName").value = this.innerText');
    blueTeamName2.innerText = blueSecondName;
    blueTeamName2.setAttribute('onclick','document.getElementById("input-summonerName").value = this.innerText');
    blueTeamName3.innerText = blueThirdName;
    blueTeamName3.setAttribute('onclick','document.getElementById("input-summonerName").value = this.innerText');
    blueTeamName4.innerText = blueFourthName;
    blueTeamName4.setAttribute('onclick','document.getElementById("input-summonerName").value = this.innerText');
    blueTeamName5.innerText = blueFifthName;
    blueTeamName5.setAttribute('onclick','document.getElementById("input-summonerName").value = this.innerText');


    var summonerOneSpell1 = render.getElementsByClassName('Table Team-100')[0].lastElementChild.childNodes[1].childNodes[3].childNodes[1].getAttribute('title');
    var summonerOneSpell2 = render.getElementsByClassName('Table Team-100')[0].lastElementChild.childNodes[3].childNodes[3].childNodes[1].getAttribute('title');
    var summonerOneSpell3 = render.getElementsByClassName('Table Team-100')[0].lastElementChild.childNodes[5].childNodes[3].childNodes[1].getAttribute('title');
    var summonerOneSpell4 = render.getElementsByClassName('Table Team-100')[0].lastElementChild.childNodes[7].childNodes[3].childNodes[1].getAttribute('title');
    var summonerOneSpell5 = render.getElementsByClassName('Table Team-100')[0].lastElementChild.childNodes[9].childNodes[3].childNodes[1].getAttribute('title');


    blueTeamPlayerSummonerOne1.src = 'https://www.mobafire.com/images/summoner-spell/' + summonerOneSpell1 + '.png';
    blueTeamPlayerSummonerOne2.src = 'https://www.mobafire.com/images/summoner-spell/' + summonerOneSpell2 + '.png';
    blueTeamPlayerSummonerOne3.src = 'https://www.mobafire.com/images/summoner-spell/' + summonerOneSpell3 + '.png';
    blueTeamPlayerSummonerOne4.src = 'https://www.mobafire.com/images/summoner-spell/' + summonerOneSpell4 + '.png';
    blueTeamPlayerSummonerOne5.src = 'https://www.mobafire.com/images/summoner-spell/' + summonerOneSpell5 + '.png';



    var summonerTwoSpell1 = render.getElementsByClassName('Table Team-100')[0].lastElementChild.childNodes[1].childNodes[3].childNodes[3].getAttribute('title');
    var summonerTwoSpell2 = render.getElementsByClassName('Table Team-100')[0].lastElementChild.childNodes[3].childNodes[3].childNodes[3].getAttribute('title');
    var summonerTwoSpell3 = render.getElementsByClassName('Table Team-100')[0].lastElementChild.childNodes[5].childNodes[3].childNodes[3].getAttribute('title');
    var summonerTwoSpell4 = render.getElementsByClassName('Table Team-100')[0].lastElementChild.childNodes[7].childNodes[3].childNodes[3].getAttribute('title');
    var summonerTwoSpell5 = render.getElementsByClassName('Table Team-100')[0].lastElementChild.childNodes[9].childNodes[3].childNodes[3].getAttribute('title');


    blueTeamPlayerSummonerTwo1.src = 'https://www.mobafire.com/images/summoner-spell/' + summonerTwoSpell1 + '.png';
    blueTeamPlayerSummonerTwo2.src = 'https://www.mobafire.com/images/summoner-spell/' + summonerTwoSpell2 + '.png';
    blueTeamPlayerSummonerTwo3.src = 'https://www.mobafire.com/images/summoner-spell/' + summonerTwoSpell3 + '.png';
    blueTeamPlayerSummonerTwo4.src = 'https://www.mobafire.com/images/summoner-spell/' + summonerTwoSpell4 + '.png';
    blueTeamPlayerSummonerTwo5.src = 'https://www.mobafire.com/images/summoner-spell/' + summonerTwoSpell5 + '.png';

    var blueTeamElo1 = render.getElementsByClassName('Table Team-100')[0].lastElementChild.childNodes[1].childNodes[9].firstElementChild.getAttribute('src');
    var blueTeamElo2 = render.getElementsByClassName('Table Team-100')[0].lastElementChild.childNodes[3].childNodes[9].firstElementChild.getAttribute('src');
    var blueTeamElo3 = render.getElementsByClassName('Table Team-100')[0].lastElementChild.childNodes[5].childNodes[9].firstElementChild.getAttribute('src');
    var blueTeamElo4 = render.getElementsByClassName('Table Team-100')[0].lastElementChild.childNodes[7].childNodes[9].firstElementChild.getAttribute('src');
    var blueTeamElo5 = render.getElementsByClassName('Table Team-100')[0].lastElementChild.childNodes[9].childNodes[9].firstElementChild.getAttribute('src');

    blueTeamPlayerElo1.src = 'http:' + blueTeamElo1;
    blueTeamPlayerElo2.src = 'http:' + blueTeamElo2;
    blueTeamPlayerElo3.src = 'http:' + blueTeamElo3;
    blueTeamPlayerElo4.src = 'http:' + blueTeamElo4;
    blueTeamPlayerElo5.src = 'http:' + blueTeamElo5;

    var blueTeamEloSpan1 = render.getElementsByClassName('Table Team-100')[0].lastElementChild.childNodes[1].childNodes[11].firstElementChild.innerText.trim();
    var blueTeamEloSpan2 = render.getElementsByClassName('Table Team-100')[0].lastElementChild.childNodes[3].childNodes[11].firstElementChild.innerText.trim();
    var blueTeamEloSpan3 = render.getElementsByClassName('Table Team-100')[0].lastElementChild.childNodes[5].childNodes[11].firstElementChild.innerText.trim();
    var blueTeamEloSpan4 = render.getElementsByClassName('Table Team-100')[0].lastElementChild.childNodes[7].childNodes[11].firstElementChild.innerText.trim();
    var blueTeamEloSpan5 = render.getElementsByClassName('Table Team-100')[0].lastElementChild.childNodes[9].childNodes[11].firstElementChild.innerText.trim();

    blueTeamPlayerEloSpan1.innerText = blueTeamEloSpan1;
    blueTeamPlayerEloSpan2.innerText = blueTeamEloSpan2;
    blueTeamPlayerEloSpan3.innerText = blueTeamEloSpan3;
    blueTeamPlayerEloSpan4.innerText = blueTeamEloSpan4;
    blueTeamPlayerEloSpan5.innerText = blueTeamEloSpan5;

    var redFirstChamp = render.getElementsByClassName('Table Team-200')[0].lastElementChild.childNodes[1].firstElementChild.firstElementChild.getAttribute('title').replace(" ", "");
    var redSecondChamp = render.getElementsByClassName('Table Team-200')[0].lastElementChild.childNodes[3].firstElementChild.firstElementChild.getAttribute('title').replace(" ", "");
    var redThirdChamp = render.getElementsByClassName('Table Team-200')[0].lastElementChild.childNodes[5].firstElementChild.firstElementChild.getAttribute('title').replace(" ", "");
    var redFourthChamp = render.getElementsByClassName('Table Team-200')[0].lastElementChild.childNodes[7].firstElementChild.firstElementChild.getAttribute('title').replace(" ", "");
    var redFifthChamp = render.getElementsByClassName('Table Team-200')[0].lastElementChild.childNodes[9].firstElementChild.firstElementChild.getAttribute('title').replace(" ", "");

    console.log(redSecondChamp);

    redTeamChampion1.src = 'http://ddragon.leagueoflegends.com/cdn/7.24.2/img/champion/' + redFirstChamp + '.png';
    redTeamChampion2.src = 'http://ddragon.leagueoflegends.com/cdn/7.24.2/img/champion/' + redSecondChamp + '.png';
    redTeamChampion3.src = 'http://ddragon.leagueoflegends.com/cdn/7.24.2/img/champion/' + redThirdChamp + '.png';
    redTeamChampion4.src = 'http://ddragon.leagueoflegends.com/cdn/7.24.2/img/champion/' + redFourthChamp + '.png';
    redTeamChampion5.src = 'http://ddragon.leagueoflegends.com/cdn/7.24.2/img/champion/' + redFifthChamp + '.png';

    var redFirstName = render.getElementsByClassName('Table Team-200')[0].lastElementChild.childNodes[1].childNodes[7].firstElementChild.innerText;
    var redSecondName = render.getElementsByClassName('Table Team-200')[0].lastElementChild.childNodes[3].childNodes[7].firstElementChild.innerText;
    var redThirdName = render.getElementsByClassName('Table Team-200')[0].lastElementChild.childNodes[5].childNodes[7].firstElementChild.innerText;
    var redFourthName = render.getElementsByClassName('Table Team-200')[0].lastElementChild.childNodes[7].childNodes[7].firstElementChild.innerText;
    var redFifthName = render.getElementsByClassName('Table Team-200')[0].lastElementChild.childNodes[9].childNodes[7].firstElementChild.innerText;

    redTeamName1.innerText = redFirstName;
    redTeamName1.setAttribute('onclick','document.getElementById("input-summonerName").value = this.innerText');
    redTeamName2.innerText = redSecondName;
    redTeamName2.setAttribute('onclick','document.getElementById("input-summonerName").value = this.innerText');
    redTeamName3.innerText = redThirdName;
    redTeamName3.setAttribute('onclick','document.getElementById("input-summonerName").value = this.innerText');
    redTeamName4.innerText = redFourthName;
    redTeamName4.setAttribute('onclick','document.getElementById("input-summonerName").value = this.innerText');
    redTeamName5.innerText = redFifthName;
    redTeamName5.setAttribute('onclick','document.getElementById("input-summonerName").value = this.innerText');


    var aSummonerOneSpell1 = render.getElementsByClassName('Table Team-200')[0].lastElementChild.childNodes[1].childNodes[3].childNodes[1].getAttribute('title');
    var aSummonerOneSpell2 = render.getElementsByClassName('Table Team-200')[0].lastElementChild.childNodes[3].childNodes[3].childNodes[1].getAttribute('title');
    var aSummonerOneSpell3 = render.getElementsByClassName('Table Team-200')[0].lastElementChild.childNodes[5].childNodes[3].childNodes[1].getAttribute('title');
    var aSummonerOneSpell4 = render.getElementsByClassName('Table Team-200')[0].lastElementChild.childNodes[7].childNodes[3].childNodes[1].getAttribute('title');
    var aSummonerOneSpell5 = render.getElementsByClassName('Table Team-200')[0].lastElementChild.childNodes[9].childNodes[3].childNodes[1].getAttribute('title');


    redTeamPlayerSummonerOne1.src = 'https://www.mobafire.com/images/summoner-spell/' + aSummonerOneSpell1 + '.png';
    redTeamPlayerSummonerOne2.src = 'https://www.mobafire.com/images/summoner-spell/' + aSummonerOneSpell2 + '.png';
    redTeamPlayerSummonerOne3.src = 'https://www.mobafire.com/images/summoner-spell/' + aSummonerOneSpell3 + '.png';
    redTeamPlayerSummonerOne4.src = 'https://www.mobafire.com/images/summoner-spell/' + aSummonerOneSpell4 + '.png';
    redTeamPlayerSummonerOne5.src = 'https://www.mobafire.com/images/summoner-spell/' + aSummonerOneSpell5 + '.png';



    var aSummonerTwoSpell1 = render.getElementsByClassName('Table Team-200')[0].lastElementChild.childNodes[1].childNodes[3].childNodes[3].getAttribute('title');
    var aSummonerTwoSpell2 = render.getElementsByClassName('Table Team-200')[0].lastElementChild.childNodes[3].childNodes[3].childNodes[3].getAttribute('title');
    var aSummonerTwoSpell3 = render.getElementsByClassName('Table Team-200')[0].lastElementChild.childNodes[5].childNodes[3].childNodes[3].getAttribute('title');
    var aSummonerTwoSpell4 = render.getElementsByClassName('Table Team-200')[0].lastElementChild.childNodes[7].childNodes[3].childNodes[3].getAttribute('title');
    var aSummonerTwoSpell5 = render.getElementsByClassName('Table Team-200')[0].lastElementChild.childNodes[9].childNodes[3].childNodes[3].getAttribute('title');


    redTeamPlayerSummonerTwo1.src = 'https://www.mobafire.com/images/summoner-spell/' + aSummonerTwoSpell1 + '.png';
    redTeamPlayerSummonerTwo2.src = 'https://www.mobafire.com/images/summoner-spell/' + aSummonerTwoSpell2 + '.png';
    redTeamPlayerSummonerTwo3.src = 'https://www.mobafire.com/images/summoner-spell/' + aSummonerTwoSpell3 + '.png';
    redTeamPlayerSummonerTwo4.src = 'https://www.mobafire.com/images/summoner-spell/' + aSummonerTwoSpell4 + '.png';
    redTeamPlayerSummonerTwo5.src = 'https://www.mobafire.com/images/summoner-spell/' + aSummonerTwoSpell5 + '.png';

    var redTeamElo1 = render.getElementsByClassName('Table Team-200')[0].lastElementChild.childNodes[1].childNodes[9].firstElementChild.getAttribute('src');
    var redTeamElo2 = render.getElementsByClassName('Table Team-200')[0].lastElementChild.childNodes[3].childNodes[9].firstElementChild.getAttribute('src');
    var redTeamElo3 = render.getElementsByClassName('Table Team-200')[0].lastElementChild.childNodes[5].childNodes[9].firstElementChild.getAttribute('src');
    var redTeamElo4 = render.getElementsByClassName('Table Team-200')[0].lastElementChild.childNodes[7].childNodes[9].firstElementChild.getAttribute('src');
    var redTeamElo5 = render.getElementsByClassName('Table Team-200')[0].lastElementChild.childNodes[9].childNodes[9].firstElementChild.getAttribute('src');

    redTeamPlayerElo1.src = 'http:' + redTeamElo1;
    redTeamPlayerElo2.src = 'http:' + redTeamElo2;
    redTeamPlayerElo3.src = 'http:' + redTeamElo3;
    redTeamPlayerElo4.src = 'http:' + redTeamElo4;
    redTeamPlayerElo5.src = 'http:' + redTeamElo5;

    var redTeamEloSpan1 = render.getElementsByClassName('Table Team-200')[0].lastElementChild.childNodes[1].childNodes[11].firstElementChild.innerText.trim();
    var redTeamEloSpan2 = render.getElementsByClassName('Table Team-200')[0].lastElementChild.childNodes[3].childNodes[11].firstElementChild.innerText.trim();
    var redTeamEloSpan3 = render.getElementsByClassName('Table Team-200')[0].lastElementChild.childNodes[5].childNodes[11].firstElementChild.innerText.trim();
    var redTeamEloSpan4 = render.getElementsByClassName('Table Team-200')[0].lastElementChild.childNodes[7].childNodes[11].firstElementChild.innerText.trim();
    var redTeamEloSpan5 = render.getElementsByClassName('Table Team-200')[0].lastElementChild.childNodes[9].childNodes[11].firstElementChild.innerText.trim();

    redTeamPlayerEloSpan1.innerText = redTeamEloSpan1;
    redTeamPlayerEloSpan2.innerText = redTeamEloSpan2;
    redTeamPlayerEloSpan3.innerText = redTeamEloSpan3;
    redTeamPlayerEloSpan4.innerText = redTeamEloSpan4;
    redTeamPlayerEloSpan5.innerText = redTeamEloSpan5;


}
