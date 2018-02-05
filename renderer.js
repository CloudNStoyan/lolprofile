const outPut = document.querySelector('#your-elo');
let inPut = document.getElementById('input-summonerName');
const btn = document.querySelector('#btnSummonerName');
const eloInSpan = document.getElementById('elo-in-string');
const lpInSpan = document.getElementById('lp-in-string');
const pastRankDiv = document.getElementById('pastRankDiv');
const mainChampsDiv = document.getElementById('mainChamps');
const switcher = document.getElementById('the-switcher');
let regionOption = document.getElementById('select-region');
let selectLastNames = document.getElementById('select-last-names');
let loadingImg = document.getElementById('loadingImg');
let ingame = document.getElementById('ingame');
let url;
let aTag = document.getElementsByClassName("blueTeamATag");
let switchBtn = document.getElementById('switch-button');
switchBtn.style.display = 'none';
let myProgress = document.getElementById('myProgress');
let render;
let error = document.getElementById('error');
const wrapper = document.getElementById('championInfoWrapper');

let lastNames = [];
let arrayLastNames = [];
switchBtn.addEventListener('click',function () {
    switchBtn.setAttribute('onclick','document.getElementById("ingame").style.display = "block")');
});




function process1() {
    let elem = document.getElementById("myBar");
    let width = 1;
    let id = setInterval(frame, 10);
    function frame() {
        if (width >= 20) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}
function process2() {
    let elem = document.getElementById("myBar");
    let width = 20;
    let id = setInterval(frame, 10);
    function frame() {
        if (width >= 40) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}
function process3() {
    let elem = document.getElementById("myBar");
    let width = 40;
    let id = setInterval(frame, 10);
    function frame() {
        if (width >= 60) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}
function process4() {
    let elem = document.getElementById("myBar");
    let width = 60;
    let id = setInterval(frame, 10);
    function frame() {
        if (width >= 80) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}
function process5() {
    let elem = document.getElementById("myBar");
    let width = 80;
    let id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
            setTimeout(function () {
                myProgress.style.display = 'none';
                elem.style.width = 1 + '%';
            },1000);

        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}


btn.addEventListener('click', (event) => {
    event.preventDefault();
    if (inPut.value !== '') {
        if (selectLastNames.style.display !== 'inline') {
            selectLastNames.style.display = 'inline';
        }

        loadIt();
        let a = arrayLastNames.length - 1;
        if (arrayLastNames[a] === inPut.value) {
        } else {
            history();
        }
        addToNames();
    }
});

function addToNames() {
    arrayLastNames.push(inPut.value);
}

selectLastNames.onchange = function () {
    chooseHistory();
};

    function history() {
        let lastNamesStr = lastNames.toString();
        if (lastNamesStr.match(inPut.value)){
            selectLastNames.value = inPut.value

        } else {
            lastNames = lastNames + ' ' + inPut.value;
            let opt = document.createElement('option');
            opt.value = regionOption.options[regionOption.selectedIndex].value;
            opt.label = inPut.value;
            opt.selected = "selected";
            opt.innerHTML = inPut.value;
            selectLastNames.appendChild(opt);
        }
    }



    let recentRegion = false;

    function chooseHistory() {
    let selectedLast = selectLastNames.options[selectLastNames.selectedIndex].label;
    inPut.value = selectedLast;

    switchBtn.style.display = 'none';
    recentRegion = true;
    loadIt();
    }

    function loadIt() { // this is the process who get information from other sites
    clearIt();
    setTimeout(function () {
        myProgress.style.display = 'block';
    },1000);

    let regionValue;
    if (recentRegion === false) {
        let regionSelectedValue = regionOption.options[regionOption.selectedIndex].value;
        switch (regionSelectedValue) {
            case "EUNE":
                regionValue = 'eune';
                break;
            case "EUW":
                regionValue = 'euw';
                break;
            case "NA":
                regionValue = 'na';
                break;
        }
    }  else {
        let selectedLast = selectLastNames.options[selectLastNames.selectedIndex].value;
        regionValue = selectedLast;
        regionOption.value = selectedLast;
    }
    url = 'http://' + regionValue + '.op.gg/summoner/userName=' + inPut.value;

    recentRegion = false;

    const parser = new DOMParser();

    fetch(url)
        .then((r) => r.text())
        .then((t) => parser.parseFromString(t, 'text/html'))
        .then(d => d.getElementsByClassName('SideContent')[0].firstElementChild.firstElementChild.firstElementChild.firstElementChild.getAttribute('src'))
        .then((title) => { // this will ask for Elo and Champion.gg profile

            outPut.style.display = 'none';
            outPut.innerHTML = '<center><img class="eloImage" src="http:' + title + '"></center>';
            mainChampsDiv.style.display = 'none';
            mainChampsDiv.innerHTML = '<img id="eloImg" src="https://www.masterypoints.com/image/profile/' + inPut.value + '/' + regionValue + '">'
            process1();

        })
        .catch(function () { // if player doesn't exist
            switchBtn.style.display = 'none';
            outPut.innerHTML = 'Player <a href="#" id="aId"><b style="font-size:25px;color:yellow">' + inPut.value + '</b></a> in <b style="font-size: 25px;color:yellow">' + regionValue.toUpperCase() + '</b> not found. Are you sure you have written the right player or region?';
            selectLastNames.remove(selectLastNames.selectedIndex);
            let a = inPut.value;
            let b = document.getElementById('aId');
            b.addEventListener('click', function() {
                inPut.value = a;
            });
            selectLastNames.style.display = 'none';
            inPut.value = ' ';
            ingame.style.display = 'none';
        });

    let ingameURL = 'http://eune.op.gg/summoner/spectator/userName=' + inPut.value;
    fetch(ingameURL) // this ask for in game info
        .then((r) => r.text())
        .then((t) => parser.parseFromString(t, 'text/html'))
        .then(d => d.getElementsByClassName('SpectateSummoner')[0])
        .then((title) => {
            render = title;
            ingame.style.display = 'none';
            inGameInfo();
            process2();

        })
    .catch(function () {
      ingame.style.display = 'none';
      error.style.display = 'none';
      error.innerHTML = '<center>' + inPut.value + ' is not in an active game. </center>';
      switchBtn.style.display = 'none';
    });

    fetch(url) // this ask for Elo in text
        .then((r) => r.text())
        .then((t) => parser.parseFromString(t, 'text/html'))
        .then(d => d.getElementsByClassName('SideContent')[0].firstElementChild.firstElementChild.childNodes[3].firstElementChild.innerText)
        .then((title) => {

            let fixed = title.replace(/ /g,'');
            eloInSpan.style.display = 'none';
            eloInSpan.innerText = title;
            if (title === fixed) { // this will ensure that if its ranked all will work
                eloInSpan.style.display = 'block';
                mainChampsDiv.style.display = 'block';
                outPut.style.display = 'block';
                pastRankDiv.style.display = 'block';
                if (error.innerHTML !== ''){
                    ingame.style.display = 'none'
                } else {
                        ingame.style.display = 'block';
                }

                switchBtn.style.display = 'block';
                ifError();

            }
            process3();
        });

    fetch(url) // this ask for LP
        .then((r) => r.text())
        .then((t) => parser.parseFromString(t, 'text/html'))
        .then(d => d.getElementsByClassName('SideContent')[0].firstElementChild.firstElementChild.childNodes[3].childNodes[3].firstElementChild.innerText)
        .then((title) => {

            lpInSpan.style.display = 'none';
            lpInSpan.innerText = 'Currently with: ' + title;
            process4();
            process5();

        })
        .catch(function () {
           process4();
           process5();
        });

    fetch(url) // this ask for past ranks
        .then((r) => r.text())
        .then((t) => parser.parseFromString(t, 'text/html'))
        .then(d => d.getElementsByClassName('PastRank')[0].innerHTML)
        .then((title) => {

            pastRankDiv.style.display = 'none';
            pastRankDiv.innerHTML = title;


            outPut.style.display = 'block';
            eloInSpan.style.display = 'block';
            lpInSpan.style.display = 'block';
            pastRankDiv.style.display = 'block';
            mainChampsDiv.style.display = 'block';
            switchBtn.style.display = 'block';
            ifError();

        })
}
function clearIt() {
    switchBtn.style.display = 'none';
    outPut.innerHTML = '';
    lpInSpan.innerText = '';
    eloInSpan.innerText = '';
    pastRankDiv.innerHTML = '';
    mainChampsDiv.innerHTML = '';
    error.innerHTML = '';
    ingame.style.display = 'none';
}

function inGameInfo() {

    let blueTeamChampion1 = document.getElementById('blueTeam-champion1');
    let blueTeamChampion2 = document.getElementById('blueTeam-champion2');
    let blueTeamChampion3 = document.getElementById('blueTeam-champion3');
    let blueTeamChampion4 = document.getElementById('blueTeam-champion4');
    let blueTeamChampion5 = document.getElementById('blueTeam-champion5');

    let blueTeamName1 = document.getElementById('blueTeam-player-name1');
    let blueTeamName2 = document.getElementById('blueTeam-player-name2');
    let blueTeamName3 = document.getElementById('blueTeam-player-name3');
    let blueTeamName4 = document.getElementById('blueTeam-player-name4');
    let blueTeamName5 = document.getElementById('blueTeam-player-name5');

    let blueTeamPlayerSummonerOne1 = document.getElementById('blueTeam-player-summoners1');
    let blueTeamPlayerSummonerOne2 = document.getElementById('blueTeam-player-summoners2');
    let blueTeamPlayerSummonerOne3 = document.getElementById('blueTeam-player-summoners3');
    let blueTeamPlayerSummonerOne4 = document.getElementById('blueTeam-player-summoners4');
    let blueTeamPlayerSummonerOne5 = document.getElementById('blueTeam-player-summoners5');

    let blueTeamPlayerSummonerTwo1 = document.getElementById('blueTeam-player-summonersTwo1');
    let blueTeamPlayerSummonerTwo2 = document.getElementById('blueTeam-player-summonersTwo2');
    let blueTeamPlayerSummonerTwo3 = document.getElementById('blueTeam-player-summonersTwo3');
    let blueTeamPlayerSummonerTwo4 = document.getElementById('blueTeam-player-summonersTwo4');
    let blueTeamPlayerSummonerTwo5 = document.getElementById('blueTeam-player-summonersTwo5');

    let blueTeamPlayerElo1 = document.getElementById('blueTeam-elo1');
    let blueTeamPlayerElo2 = document.getElementById('blueTeam-elo2');
    let blueTeamPlayerElo3 = document.getElementById('blueTeam-elo3');
    let blueTeamPlayerElo4 = document.getElementById('blueTeam-elo4');
    let blueTeamPlayerElo5 = document.getElementById('blueTeam-elo5');

    let blueTeamPlayerEloSpan1 = document.getElementById('blueTeam-eloSpan1');
    let blueTeamPlayerEloSpan2 = document.getElementById('blueTeam-eloSpan2');
    let blueTeamPlayerEloSpan3 = document.getElementById('blueTeam-eloSpan3');
    let blueTeamPlayerEloSpan4 = document.getElementById('blueTeam-eloSpan4');
    let blueTeamPlayerEloSpan5 = document.getElementById('blueTeam-eloSpan5');

    let redTeamChampion1 = document.getElementById('redTeam-champion1');
    let redTeamChampion2 = document.getElementById('redTeam-champion2');
    let redTeamChampion3 = document.getElementById('redTeam-champion3');
    let redTeamChampion4 = document.getElementById('redTeam-champion4');
    let redTeamChampion5 = document.getElementById('redTeam-champion5');

    let redTeamName1 = document.getElementById('redTeam-player-name1');
    let redTeamName2 = document.getElementById('redTeam-player-name2');
    let redTeamName3 = document.getElementById('redTeam-player-name3');
    let redTeamName4 = document.getElementById('redTeam-player-name4');
    let redTeamName5 = document.getElementById('redTeam-player-name5');

    let redTeamPlayerSummonerOne1 = document.getElementById('redTeam-player-summoners1');
    let redTeamPlayerSummonerOne2 = document.getElementById('redTeam-player-summoners2');
    let redTeamPlayerSummonerOne3 = document.getElementById('redTeam-player-summoners3');
    let redTeamPlayerSummonerOne4 = document.getElementById('redTeam-player-summoners4');
    let redTeamPlayerSummonerOne5 = document.getElementById('redTeam-player-summoners5');

    let redTeamPlayerSummonerTwo1 = document.getElementById('redTeam-player-summonersTwo1');
    let redTeamPlayerSummonerTwo2 = document.getElementById('redTeam-player-summonersTwo2');
    let redTeamPlayerSummonerTwo3 = document.getElementById('redTeam-player-summonersTwo3');
    let redTeamPlayerSummonerTwo4 = document.getElementById('redTeam-player-summonersTwo4');
    let redTeamPlayerSummonerTwo5 = document.getElementById('redTeam-player-summonersTwo5');

    let redTeamPlayerElo1 = document.getElementById('redTeam-elo1');
    let redTeamPlayerElo2 = document.getElementById('redTeam-elo2');
    let redTeamPlayerElo3 = document.getElementById('redTeam-elo3');
    let redTeamPlayerElo4 = document.getElementById('redTeam-elo4');
    let redTeamPlayerElo5 = document.getElementById('redTeam-elo5');

    let redTeamPlayerEloSpan1 = document.getElementById('redTeam-eloSpan1');
    let redTeamPlayerEloSpan2 = document.getElementById('redTeam-eloSpan2');
    let redTeamPlayerEloSpan3 = document.getElementById('redTeam-eloSpan3');
    let redTeamPlayerEloSpan4 = document.getElementById('redTeam-eloSpan4');
    let redTeamPlayerEloSpan5 = document.getElementById('redTeam-eloSpan5');

    let blueFirstChamp = render.getElementsByClassName('Table Team-100')[0].lastElementChild.childNodes[1].firstElementChild.firstElementChild.getAttribute('title');
    let blueSecondChamp = render.getElementsByClassName('Table Team-100')[0].lastElementChild.childNodes[3].firstElementChild.firstElementChild.getAttribute('title');
    let blueThirdChamp = render.getElementsByClassName('Table Team-100')[0].lastElementChild.childNodes[5].firstElementChild.firstElementChild.getAttribute('title');
    let blueFourthChamp = render.getElementsByClassName('Table Team-100')[0].lastElementChild.childNodes[7].firstElementChild.firstElementChild.getAttribute('title');
    let blueFifthChamp = render.getElementsByClassName('Table Team-100')[0].lastElementChild.childNodes[9].firstElementChild.firstElementChild.getAttribute('title');
    blueFirstChamp = filter(blueFirstChamp);
    blueSecondChamp = filter(blueSecondChamp);
    blueThirdChamp = filter(blueThirdChamp);
    blueFourthChamp = filter(blueFourthChamp);
    blueFifthChamp = filter(blueFifthChamp);

    blueTeamChampion1.src = 'https://www.mobafire.com/images/champion/icon/' + blueFirstChamp + '.png';
    blueTeamChampion2.src = 'https://www.mobafire.com/images/champion/icon/' + blueSecondChamp + '.png';
    blueTeamChampion3.src = 'https://www.mobafire.com/images/champion/icon/' + blueThirdChamp + '.png';
    blueTeamChampion4.src = 'https://www.mobafire.com/images/champion/icon/' + blueFourthChamp + '.png';
    blueTeamChampion5.src = 'https://www.mobafire.com/images/champion/icon/' + blueFifthChamp + '.png';

    let blueFirstName = render.getElementsByClassName('Table Team-100')[0].lastElementChild.childNodes[1].childNodes[7].firstElementChild.innerText;
    let blueSecondName = render.getElementsByClassName('Table Team-100')[0].lastElementChild.childNodes[3].childNodes[7].firstElementChild.innerText;
    let blueThirdName = render.getElementsByClassName('Table Team-100')[0].lastElementChild.childNodes[5].childNodes[7].firstElementChild.innerText;
    let blueFourthName = render.getElementsByClassName('Table Team-100')[0].lastElementChild.childNodes[7].childNodes[7].firstElementChild.innerText;
    let blueFifthName = render.getElementsByClassName('Table Team-100')[0].lastElementChild.childNodes[9].childNodes[7].firstElementChild.innerText;

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


    let summonerOneSpell1 = render.getElementsByClassName('Table Team-100')[0].lastElementChild.childNodes[1].childNodes[3].childNodes[1].getAttribute('title');
    let summonerOneSpell2 = render.getElementsByClassName('Table Team-100')[0].lastElementChild.childNodes[3].childNodes[3].childNodes[1].getAttribute('title');
    let summonerOneSpell3 = render.getElementsByClassName('Table Team-100')[0].lastElementChild.childNodes[5].childNodes[3].childNodes[1].getAttribute('title');
    let summonerOneSpell4 = render.getElementsByClassName('Table Team-100')[0].lastElementChild.childNodes[7].childNodes[3].childNodes[1].getAttribute('title');
    let summonerOneSpell5 = render.getElementsByClassName('Table Team-100')[0].lastElementChild.childNodes[9].childNodes[3].childNodes[1].getAttribute('title');


    blueTeamPlayerSummonerOne1.src = 'https://www.mobafire.com/images/summoner-spell/' + summonerOneSpell1 + '.png';
    blueTeamPlayerSummonerOne2.src = 'https://www.mobafire.com/images/summoner-spell/' + summonerOneSpell2 + '.png';
    blueTeamPlayerSummonerOne3.src = 'https://www.mobafire.com/images/summoner-spell/' + summonerOneSpell3 + '.png';
    blueTeamPlayerSummonerOne4.src = 'https://www.mobafire.com/images/summoner-spell/' + summonerOneSpell4 + '.png';
    blueTeamPlayerSummonerOne5.src = 'https://www.mobafire.com/images/summoner-spell/' + summonerOneSpell5 + '.png';



    let summonerTwoSpell1 = render.getElementsByClassName('Table Team-100')[0].lastElementChild.childNodes[1].childNodes[3].childNodes[3].getAttribute('title');
    let summonerTwoSpell2 = render.getElementsByClassName('Table Team-100')[0].lastElementChild.childNodes[3].childNodes[3].childNodes[3].getAttribute('title');
    let summonerTwoSpell3 = render.getElementsByClassName('Table Team-100')[0].lastElementChild.childNodes[5].childNodes[3].childNodes[3].getAttribute('title');
    let summonerTwoSpell4 = render.getElementsByClassName('Table Team-100')[0].lastElementChild.childNodes[7].childNodes[3].childNodes[3].getAttribute('title');
    let summonerTwoSpell5 = render.getElementsByClassName('Table Team-100')[0].lastElementChild.childNodes[9].childNodes[3].childNodes[3].getAttribute('title');


    blueTeamPlayerSummonerTwo1.src = 'https://www.mobafire.com/images/summoner-spell/' + summonerTwoSpell1 + '.png';
    blueTeamPlayerSummonerTwo2.src = 'https://www.mobafire.com/images/summoner-spell/' + summonerTwoSpell2 + '.png';
    blueTeamPlayerSummonerTwo3.src = 'https://www.mobafire.com/images/summoner-spell/' + summonerTwoSpell3 + '.png';
    blueTeamPlayerSummonerTwo4.src = 'https://www.mobafire.com/images/summoner-spell/' + summonerTwoSpell4 + '.png';
    blueTeamPlayerSummonerTwo5.src = 'https://www.mobafire.com/images/summoner-spell/' + summonerTwoSpell5 + '.png';

    let blueTeamElo1 = render.getElementsByClassName('CurrentSeasonTier Cell')[0].firstElementChild;
    blueTeamElo1 = filter2(blueTeamElo1);
    let blueTeamElo2 = render.getElementsByClassName('CurrentSeasonTier Cell')[1].firstElementChild;
    blueTeamElo2 = filter2(blueTeamElo2);
    let blueTeamElo3 = render.getElementsByClassName('CurrentSeasonTier Cell')[2].firstElementChild;
    blueTeamElo3 = filter2(blueTeamElo3);
    let blueTeamElo4 = render.getElementsByClassName('CurrentSeasonTier Cell')[3].firstElementChild;
    blueTeamElo4 = filter2(blueTeamElo4);
    let blueTeamElo5 = render.getElementsByClassName('CurrentSeasonTier Cell')[4].firstElementChild;
    blueTeamElo5 = filter2(blueTeamElo5);

    blueTeamPlayerElo1.src = 'http:' + filter3(blueTeamElo1);
    blueTeamPlayerElo2.src = 'http:' + filter3(blueTeamElo2);
    blueTeamPlayerElo3.src = 'http:' + filter3(blueTeamElo3);
    blueTeamPlayerElo4.src = 'http:' + filter3(blueTeamElo4);
    blueTeamPlayerElo5.src = 'http:' + filter3(blueTeamElo5);

    let blueTeamEloSpan1 = render.getElementsByClassName('Table Team-100')[0].lastElementChild.childNodes[1].childNodes[11].firstElementChild.innerText.trim();
    let blueTeamEloSpan2 = render.getElementsByClassName('Table Team-100')[0].lastElementChild.childNodes[3].childNodes[11].firstElementChild.innerText.trim();
    let blueTeamEloSpan3 = render.getElementsByClassName('Table Team-100')[0].lastElementChild.childNodes[5].childNodes[11].firstElementChild.innerText.trim();
    let blueTeamEloSpan4 = render.getElementsByClassName('Table Team-100')[0].lastElementChild.childNodes[7].childNodes[11].firstElementChild.innerText.trim();
    let blueTeamEloSpan5 = render.getElementsByClassName('Table Team-100')[0].lastElementChild.childNodes[9].childNodes[11].firstElementChild.innerText.trim();

    blueTeamPlayerEloSpan1.innerText = filter4(blueTeamEloSpan1);
    blueTeamPlayerEloSpan2.innerText = filter4(blueTeamEloSpan2);
    blueTeamPlayerEloSpan3.innerText = filter4(blueTeamEloSpan3);
    blueTeamPlayerEloSpan4.innerText = filter4(blueTeamEloSpan4);
    blueTeamPlayerEloSpan5.innerText = filter4(blueTeamEloSpan5);

    let redFirstChamp = render.getElementsByClassName('Table Team-200')[0].lastElementChild.childNodes[1].firstElementChild.firstElementChild.getAttribute('title');
    let redSecondChamp = render.getElementsByClassName('Table Team-200')[0].lastElementChild.childNodes[3].firstElementChild.firstElementChild.getAttribute('title');
    let redThirdChamp = render.getElementsByClassName('Table Team-200')[0].lastElementChild.childNodes[5].firstElementChild.firstElementChild.getAttribute('title');
    let redFourthChamp = render.getElementsByClassName('Table Team-200')[0].lastElementChild.childNodes[7].firstElementChild.firstElementChild.getAttribute('title');
    let redFifthChamp = render.getElementsByClassName('Table Team-200')[0].lastElementChild.childNodes[9].firstElementChild.firstElementChild.getAttribute('title');
    redFirstChamp = filter(redFirstChamp);
    redSecondChamp = filter(redSecondChamp);
    redThirdChamp = filter(redThirdChamp);
    redFourthChamp = filter(redFourthChamp);
    redFifthChamp = filter(redFifthChamp);

    redTeamChampion1.src = 'https://www.mobafire.com/images/champion/icon/' + redFirstChamp + '.png';
    redTeamChampion2.src = 'https://www.mobafire.com/images/champion/icon/' + redSecondChamp + '.png';
    redTeamChampion3.src = 'https://www.mobafire.com/images/champion/icon/' + redThirdChamp + '.png';
    redTeamChampion4.src = 'https://www.mobafire.com/images/champion/icon/' + redFourthChamp + '.png';
    redTeamChampion5.src = 'https://www.mobafire.com/images/champion/icon/' + redFifthChamp + '.png';

    let redFirstName = render.getElementsByClassName('Table Team-200')[0].lastElementChild.childNodes[1].childNodes[7].firstElementChild.innerText;
    let redSecondName = render.getElementsByClassName('Table Team-200')[0].lastElementChild.childNodes[3].childNodes[7].firstElementChild.innerText;
    let redThirdName = render.getElementsByClassName('Table Team-200')[0].lastElementChild.childNodes[5].childNodes[7].firstElementChild.innerText;
    let redFourthName = render.getElementsByClassName('Table Team-200')[0].lastElementChild.childNodes[7].childNodes[7].firstElementChild.innerText;
    let redFifthName = render.getElementsByClassName('Table Team-200')[0].lastElementChild.childNodes[9].childNodes[7].firstElementChild.innerText;

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


    let aSummonerOneSpell1 = render.getElementsByClassName('Table Team-200')[0].lastElementChild.childNodes[1].childNodes[3].childNodes[1].getAttribute('title');
    let aSummonerOneSpell2 = render.getElementsByClassName('Table Team-200')[0].lastElementChild.childNodes[3].childNodes[3].childNodes[1].getAttribute('title');
    let aSummonerOneSpell3 = render.getElementsByClassName('Table Team-200')[0].lastElementChild.childNodes[5].childNodes[3].childNodes[1].getAttribute('title');
    let aSummonerOneSpell4 = render.getElementsByClassName('Table Team-200')[0].lastElementChild.childNodes[7].childNodes[3].childNodes[1].getAttribute('title');
    let aSummonerOneSpell5 = render.getElementsByClassName('Table Team-200')[0].lastElementChild.childNodes[9].childNodes[3].childNodes[1].getAttribute('title');


    redTeamPlayerSummonerOne1.src = 'https://www.mobafire.com/images/summoner-spell/' + aSummonerOneSpell1 + '.png';
    redTeamPlayerSummonerOne2.src = 'https://www.mobafire.com/images/summoner-spell/' + aSummonerOneSpell2 + '.png';
    redTeamPlayerSummonerOne3.src = 'https://www.mobafire.com/images/summoner-spell/' + aSummonerOneSpell3 + '.png';
    redTeamPlayerSummonerOne4.src = 'https://www.mobafire.com/images/summoner-spell/' + aSummonerOneSpell4 + '.png';
    redTeamPlayerSummonerOne5.src = 'https://www.mobafire.com/images/summoner-spell/' + aSummonerOneSpell5 + '.png';



    let aSummonerTwoSpell1 = render.getElementsByClassName('Table Team-200')[0].lastElementChild.childNodes[1].childNodes[3].childNodes[3].getAttribute('title');
    let aSummonerTwoSpell2 = render.getElementsByClassName('Table Team-200')[0].lastElementChild.childNodes[3].childNodes[3].childNodes[3].getAttribute('title');
    let aSummonerTwoSpell3 = render.getElementsByClassName('Table Team-200')[0].lastElementChild.childNodes[5].childNodes[3].childNodes[3].getAttribute('title');
    let aSummonerTwoSpell4 = render.getElementsByClassName('Table Team-200')[0].lastElementChild.childNodes[7].childNodes[3].childNodes[3].getAttribute('title');
    let aSummonerTwoSpell5 = render.getElementsByClassName('Table Team-200')[0].lastElementChild.childNodes[9].childNodes[3].childNodes[3].getAttribute('title');


    redTeamPlayerSummonerTwo1.src = 'https://www.mobafire.com/images/summoner-spell/' + aSummonerTwoSpell1 + '.png';
    redTeamPlayerSummonerTwo2.src = 'https://www.mobafire.com/images/summoner-spell/' + aSummonerTwoSpell2 + '.png';
    redTeamPlayerSummonerTwo3.src = 'https://www.mobafire.com/images/summoner-spell/' + aSummonerTwoSpell3 + '.png';
    redTeamPlayerSummonerTwo4.src = 'https://www.mobafire.com/images/summoner-spell/' + aSummonerTwoSpell4 + '.png';
    redTeamPlayerSummonerTwo5.src = 'https://www.mobafire.com/images/summoner-spell/' + aSummonerTwoSpell5 + '.png';

    let redTeamElo1 = render.getElementsByClassName('CurrentSeasonTier Cell')[5].firstElementChild;
    redTeamElo1 = filter2(redTeamElo1);
    let redTeamElo2 = render.getElementsByClassName('CurrentSeasonTier Cell')[6].firstElementChild;
    redTeamElo2 = filter2(redTeamElo2);
    let redTeamElo3 = render.getElementsByClassName('CurrentSeasonTier Cell')[7].firstElementChild;
    redTeamElo3 = filter2(redTeamElo3);
    let redTeamElo4 = render.getElementsByClassName('CurrentSeasonTier Cell')[8].firstElementChild;
    redTeamElo4 = filter2(redTeamElo4);
    let redTeamElo5 = render.getElementsByClassName('CurrentSeasonTier Cell')[9].firstElementChild;
    redTeamElo5 = filter2(redTeamElo5);

    redTeamPlayerElo1.src = 'http:' + filter3(redTeamElo1);
    redTeamPlayerElo2.src = 'http:' + filter3(redTeamElo2);
    redTeamPlayerElo3.src = 'http:' + filter3(redTeamElo3);
    redTeamPlayerElo4.src = 'http:' + filter3(redTeamElo4);
    redTeamPlayerElo5.src = 'http:' + filter3(redTeamElo5);

    let redTeamEloSpan1 = render.getElementsByClassName('Table Team-200')[0].lastElementChild.childNodes[1].childNodes[11].firstElementChild.innerText.trim();
    let redTeamEloSpan2 = render.getElementsByClassName('Table Team-200')[0].lastElementChild.childNodes[3].childNodes[11].firstElementChild.innerText.trim();
    let redTeamEloSpan3 = render.getElementsByClassName('Table Team-200')[0].lastElementChild.childNodes[5].childNodes[11].firstElementChild.innerText.trim();
    let redTeamEloSpan4 = render.getElementsByClassName('Table Team-200')[0].lastElementChild.childNodes[7].childNodes[11].firstElementChild.innerText.trim();
    let redTeamEloSpan5 = render.getElementsByClassName('Table Team-200')[0].lastElementChild.childNodes[9].childNodes[11].firstElementChild.innerText.trim();

    redTeamPlayerEloSpan1.innerText = filter4(redTeamEloSpan1);
    redTeamPlayerEloSpan2.innerText = filter4(redTeamEloSpan2);
    redTeamPlayerEloSpan3.innerText = filter4(redTeamEloSpan3);
    redTeamPlayerEloSpan4.innerText = filter4(redTeamEloSpan4);
    redTeamPlayerEloSpan5.innerText = filter4(redTeamEloSpan5);


}


function filter(string) {
        let wtf = string.toLowerCase();
        let res = wtf.replace(/ /g, "-");
        let sum = res.replace(/'/g,"");
        return sum
}
function filter2(element) {
    if (element !== null) {
        return element.getAttribute('src')
    } else {
        return 'Unranked'
    }
}
function filter3(element) {
    if (element != 'Unranked') {
        return element
    } else {
        return '//vignette.wikia.nocookie.net/leagueoflegends/images/8/89/UnrankedBadge.png/revision/latest?cb=20150418014953'
    }
}
function filter4(element) {
    if (element.match('Level')) {
        return 'Unranked'
    } else {
        return element;
    }
}
function ifError() {
    if (error.innerHTML !== '') {
        switchBtn.style.display = 'none';
        error.style.display = 'block'
    }
}
