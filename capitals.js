function punctuation() {
    var string = document.querySelector("body").innerHTML;
    var search = string.replace(". a", ". A").replace(". b", ". B").replace(". c", ". C").replace(". d", ". D").replace(". e", ". E").replace(". f", ". F").replace(". g", ". G").replace(". h", ". H").replace(". i", ". I").replace(". j", ". J").replace(". k", ". K").replace(". l", ". L").replace(". m", ". M").replace(". n", ". N").replace(". o", ". O").replace(". p", ". P").replace(". q", ". Q").replace(". r", ". R").replace(". s", ". S").replace(". t", ". T").replace(". v", ". V").replace(". w", ". W").replace(". x", ". X").replace(". y", ". Y").replace(". z", ". Z").replace(">a", ">A").replace(">b", ">B").replace(">c", ">C").replace(">d", ">D").replace(">e", ">E").replace(">f", ">F").replace(">g", ">G").replace(">h", ">H").replace(">i", ">I").replace(">j", ">J").replace(">k", ">K").replace(">l", ">L").replace(">m", ">M").replace(">n", ">N").replace(">o", ">O").replace(">p", ">P").replace(">q", ">Q").replace(">r", ">R").replace(">s", ">S").replace(">t", ">T").replace(">u", ">U").replace(">v", ">V").replace(">w", ">W").replace(">x", ">X").replace(">y", ">Y").replace(">z", ">Z").replace("hte", "the");
    document.querySelector("body").innerHTML = search;
    interval = setTimeout(punctuation, 10)
}
setInterval(toClear, 500)
function toClear() {
    clearTimeout(interval)
}