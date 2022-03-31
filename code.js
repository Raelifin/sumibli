localStorage.setItem('dictVers', "?");

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

function toSpans(latn) {
  let result = '<span>'+latn.charAt(0)+'</span><span>';
  if (latn.length > 2 && isVowel(latn.charAt(1)) && isVowel(latn.charAt(2))) {
    result += latn.charAt(1)+latn.charAt(2)+'</span><span>';
    if (latn.length > 3) {
      result += latn.charAt(3)+'</span>'
    } else {
      result += '</span>'
    }
  } else {
    result += latn.charAt(1)+'</span><span>';
    if (latn.length > 2) {
      result += latn.charAt(2)+'</span>'
    } else {
      result += '</span>'
    }
  }
  return result;
}

function buildTransResult(x) {
  if (typeof x === 'string') {
    let result = document.createElement("p");
    result.innerHTML = x;
    return result;
  }
  result = document.createElement("div");
  let latn = x[0];
  let mai = x[0].split(' ');
  let spans = '';
  for (let i = 0; i < mai.length; i++) {
    spans += toSpans(mai[i]);
  }
  let left = '';
  if (x[2].length > 0) {
    left = `<div class="left defn"><div>${x[2].join('</div><div>')}</div></div>`;
  }
  result.innerHTML = `
  <div class="definition">
    ${left}
    <div class="mai">
      <div class="sumibli"><u>${x[1]}</u><del>${spans}</del></div>
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
