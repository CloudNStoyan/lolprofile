function loadIt() { // this is the process who contain other processes
    loadingImg.style.display = 'block';
    outPut.innerHTML = '';
    lpInSpan.innerText = '';
    eloInSpan.innerText = '';
    pastRankDiv.innerHTML = '';
    mainChampsDiv.innerHTML = '';


    if (recentRegion === false) {
        var regionSelectedValue = regionOption.options[regionOption.selectedIndex].value;
        var regionValue;
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
        var regionValue;
        var selectedLast = selectLastNames.options[selectLastNames.selectedIndex].value;
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
            .then((title) => {

                console.log(title);
                outPut.style.display = 'none';
                outPut.innerHTML = '<center><img class="eloImage" src="http:' + title + '"></center>';
                mainChampsDiv.style.display = 'none';
                mainChampsDiv.innerHTML = '<img id="eloImg" src="https://www.masterypoints.com/image/profile/' + inPut.value + '/' + regionValue + '">'

            })
            .catch(function () {
                loadingImg.style.display = 'none';
                outPut.innerHTML = 'Player <a href="#" id="aId"><b style="font-size:25px;color:yellow">' + inPut.value + '</b></a> not found. Are you sure you have written the right player or region?';
                selectLastNames.remove(selectLastNames.selectedIndex);
                var a = inPut.value;
                var b = document.getElementById('aId');
                b.addEventListener('click', function() {
                    inPut.value = a;
                });
                selectLastNames.style.display = 'none';
                inPut.value = ' '
            });


        fetch(url)
            .then((r) => r.text())
            .then((t) => parser.parseFromString(t, 'text/html'))
            .then(d => d.getElementsByClassName('SideContent')[0].firstElementChild.firstElementChild.childNodes[3].firstElementChild.innerText)
            .then((title) => {

                var fixed = title.replace(/ /g,'');
                console.log(title);
                eloInSpan.style.display = 'none';
                eloInSpan.innerText = title;
                if (title === fixed) { // this will ensure that if its ranked all will work
                    eloInSpan.style.display = 'block';
                    mainChampsDiv.style.display = 'block';
                    outPut.style.display = 'block';
                    pastRankDiv.style.display = 'block';
                    loadingImg.style.display = 'none';
                }
            });

        fetch(url)
            .then((r) => r.text())
            .then((t) => parser.parseFromString(t, 'text/html'))
            .then(d => d.getElementsByClassName('SideContent')[0].firstElementChild.firstElementChild.childNodes[3].childNodes[3].firstElementChild.innerText)
            .then((title) => {

                console.log(title);
                lpInSpan.style.display = 'none';
                lpInSpan.innerText = 'Currently with: ' + title;

            });

        fetch(url)
            .then((r) => r.text())
            .then((t) => parser.parseFromString(t, 'text/html'))
            .then(d => d.getElementsByClassName('PastRank')[0].innerHTML)
            .then((title) => {

                console.log(title);
                pastRankDiv.style.display = 'none';
                pastRankDiv.innerHTML = title;


                loadingImg.style.display = 'none';
                outPut.style.display = 'block';
                eloInSpan.style.display = 'block';
                lpInSpan.style.display = 'block';
                pastRankDiv.style.display = 'block';
                mainChampsDiv.style.display = 'block';
            })

}
