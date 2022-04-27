// localStorage.setItem('dictVers', "?");

function searchTrans(str) {
  str = str.toLowerCase();
  let hits = JSON.parse(localStorage.getItem('s_'+str) || '[]')
    .map(xs => xs.map(i => JSON.parse(localStorage.getItem('d'+i) || '[]')));
  while (hits.length < 1 && str.length > 0) {
    str = str.slice(0, -1);
    hits = JSON.parse(localStorage.getItem('s_'+str) || '[]')
      .map(xs => xs.map(i => JSON.parse(localStorage.getItem('d'+i) || '[]')));
    if (hits.length > 0) {
      hits.unshift([`Showing results for "<span class="monospace">${str}</span>"...`]);
    }
  }
  return hits;
}

// function nextDef(snapId) {
//   let snap = document.getElementById(snapId);
//   let x0 = snap.getBoundingClientRect().left;
//   for (let i = 0; i < snap.children.length; i++) {
//     let x = snap.children[i].getBoundingClientRect().left - x0 - snap.scrollLeft;
//     if (x > 0) {
//       snap.scrollLeft += x;
//       return;
//     }
//   }
//   snap.scrollLeft = 0;
// }

function isVowel(c) {
  return c == 'i' || c == 'a' || c == 'u';
}

function buildTransResult(x) {
  if (typeof x === 'string') {
    let result = document.createElement("p");
    result.innerHTML = x;
    return result;
  }
  result = document.createElement("div");
  let latn = x[0];
  let left = '';
  if (x[2].length > 0) {
    left = `<div class="left defn"><div>${x[2].join('</div><div>')}</div></div>`;
  }
  result.innerHTML = `
  <div class="definition">
    ${left}
    <div class="mai">
      <div class="sumibli">${x[1]}</div>
      <div class="latn">${latn}</div>
    </div>
    <div class="right defn"><div>${x[3].join('</div><div>')}</div></div>
    <div class="notes"><a href="dict.html#${latn}">Notes →</a></div>
  </div>`;
  return result;
}

function trans(val) {
  removeAllAfter(document.getElementById("translate"));
  let tBox = document.getElementById("translation");
  if (val) {
    tBox.classList.add("active");
    let hits = searchTrans(val);
    if (hits.length < 1) {
      let msg = document.createElement("p");
      msg.innerHTML = `No results found for "<span class="monospace">${val}</span>".`;
      tBox.appendChild(msg);
    } else {
      for (const i in hits) {
        for (const j in hits[i]) {
          tBox.appendChild(buildTransResult(hits[i][j]));
        }
      }
    }
  } else {
    tBox.classList.remove("active");
  }
}

function removeAllAfter(el) {
  el = el.nextSibling;
  while (el) {
    let next = el.nextSibling;
    el.remove();
    el = next;
  }
}

function setScore() {
  let n = gameName ? gameName : '?';
  let won0 = parseFloat(localStorage.getItem(n+"_won_0") || '0');
  let won1 = parseFloat(localStorage.getItem(n+"_won_1") || '0');
  let won2 = parseFloat(localStorage.getItem(n+"_won_2") || '0');
  document.getElementById('points').innerHTML = (''+(won0*1+won1*2+won2*3)).padStart(3,'0');
  let prog0 = Math.round(parseFloat(localStorage.getItem(n+"_progress_0") || '0')*6);
  let prog1 = Math.round(parseFloat(localStorage.getItem(n+"_progress_1") || '0')*6);
  let prog2 = Math.round(parseFloat(localStorage.getItem(n+"_progress_2") || '0')*6);
  for (const i in [0,1,2,3,4,5]) {
    if (prog2 > i) {
      document.getElementById('progress-'+i).className = "progress level2";
    } else if (prog1 > i) {
      document.getElementById('progress-'+i).className = "progress level1";
    } else if (prog0 > i) {
      document.getElementById('progress-'+i).className = "progress level0";
    } else {
      document.getElementById('progress-'+i).className = "progress";
    }
  }
  if (prog0 > 5) { localStorage.setItem(n+"_crown_0", '1'); }
  if (prog1 > 5) { localStorage.setItem(n+"_crown_1", '1'); }
  if (prog2 > 5) { localStorage.setItem(n+"_crown_2", '1'); }
  if (parseFloat(localStorage.getItem(n+"_crown_0") || '0') > 0.1) {
    document.getElementById('crown-0').className = "crown obtained";
  }
  if (parseFloat(localStorage.getItem(n+"_crown_1") || '0') > 0.1) {
    document.getElementById('crown-1').className = "crown obtained";
  }
  if (parseFloat(localStorage.getItem(n+"_crown_2") || '0') > 0.1) {
    document.getElementById('crown-2').className = "crown obtained";
  }
}

function getLevel() {
  let n = gameName ? gameName : '?';
  if (parseFloat(localStorage.getItem(n+"_crown_1") || '0') > 0.1) {
    return 2;
  }
  if (parseFloat(localStorage.getItem(n+"_crown_0") || '0') > 0.1) {
    return 1;
  }
  return 0;
}

function newGame(oldCorrectAns) {
  let level = Math.min(getLevel(), game.length - 1);
  let myGames = game[level];
  let myGame = myGames[Math.floor(Math.random() * myGames.length)].slice();
  let opts = myGame.splice(Math.floor(Math.random() * myGame.length), 1);
  document.getElementById('prompt').innerHTML = opts[0].prompt;
  correctAns = opts[0].ans;
  if (correctAns == oldCorrectAns) {
    newGame(oldCorrectAns);
    return;
  }
  opts = opts.concat(myGame.splice(Math.floor(Math.random() * myGame.length), 1));
  opts = opts.concat(myGame.splice(Math.floor(Math.random() * myGame.length), 1));
  opts = opts.concat(myGame.splice(Math.floor(Math.random() * myGame.length), 1));
  opts = shuffle(opts.map(x => x.ans));
  for (i in [0,1,2,3]) {
    document.getElementById('opt'+i).style.opacity = 0;
  }
  for (i in opts) {
    let el = document.getElementById('opt'+i);
    el.style.opacity = 1;
    el.disabled = false;
    el.classList.remove("correct");
    el.classList.remove("incorrect");
    el.innerHTML = opts[i];
    let j = i;
    el.onclick = function() { checkAnswer(correctAns, j, level); }
  }
  document.getElementById('nextGame').disabled = true;
}

function checkAnswer(correctAns, clicked, level) {
  onLocal("played_"+level, x => x + 1);
  onLocal("progress_"+level, x => x * 0.83);
  let nextGame = document.getElementById('nextGame');
  nextGame.disabled = false;
  nextGame.onclick = function() { newGame(correctAns); }
  for (i in [0,1,2,3]) {
    let el = document.getElementById('opt'+i);
    el.disabled = true;
    if (el.innerHTML == correctAns) {
      el.classList.add("correct");
      if (i == clicked) {
        onLocal("won_"+level, x => x + 1);
        onLocal("progress_"+level, x => x + 0.17);
      }
    } else if (i == clicked) {
      el.classList.add("incorrect");
    }
  }
  setScore();
}

function onLocal(key, f) {
  let n = gameName ? gameName : '?';
  let x = n+"_"+key;
  localStorage.setItem(x, ''+(f(parseFloat(localStorage.getItem(x) || '0'))));
}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}
