function getTexte() {
  return document.getElementById("texteSaisi").value;
}

function estSansEspaces() {
  return document.getElementById("exclureEspaces").checked;
}

function compterCaracteres(texte, sansEspaces) {
  return sansEspaces ? texte.replace(/\s/g, "").length : texte.length;
}

function compterMots(texte) {
  let mots = texte.trim().split(/\s+/);
  return mots.filter(mot => mot !== "").length;
}

function compterPhrases(texte) {
  let phrases = texte.split(/[.!?]/);
  return phrases.filter(p => p.trim() !== "").length;
}

function calculerFrequenceLettres(texte) {
  let freq = {};
  let lettres = texte.toUpperCase().split("");
  lettres.forEach(ch => {
    if (ch >= "A" && ch <= "Z") {
      freq[ch] = (freq[ch] || 0) + 1;
    }
  });
  return freq;
}

function afficherFrequence(freq) {
  let listeHTML = "";
  for (let lettre in freq) {
    listeHTML += `<li>${lettre}: ${freq[lettre]}</li>`;
  }
  document.getElementById("listeLettres").innerHTML = listeHTML;
}

function analyserTexte() {
  let texte = getTexte();
  let sansEspaces = estSansEspaces();

  let nbCaracteres = compterCaracteres(texte, sansEspaces);
  let nbMots = compterMots(texte);
  let nbPhrases = compterPhrases(texte);
  let freqLettres = calculerFrequenceLettres(texte);

  document.getElementById("nbCaracteres").textContent = nbCaracteres;
  document.getElementById("nbMots").textContent = nbMots;
  document.getElementById("nbPhrases").textContent = nbPhrases;
  afficherFrequence(freqLettres);
}

// evenement: hna
document.getElementById("texteSaisi").addEventListener("input", analyserTexte);
document.getElementById("exclureEspaces").addEventListener("change", analyserTexte);