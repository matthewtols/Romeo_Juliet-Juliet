// TITLE

// document.addEventListener("keydown", checkkeys)
// function checkkeys(event) {
//     console.log(event.keyCode)
//     if (event.keyCode == 82) {
//         document.getElementById("ss1").innerHTML = "Romeo"
//         document.getElementById("ss2").innerHTML = "Rest of the Montagues"
//         document.getElementById("ss3").innerHTML = "Rest of the Capulets"
//     }
//     if (event.keyCode == 69) {
//         document.getElementById("ss1").innerHTML = "Rest of the Montagues"
//         document.getElementById("ss2").innerHTML = "Rest of the Capulets"
//         document.getElementById("ss3").innerHTML = ""
//     }
// }

setInterval(searchsuggest, 10)

function searchsuggest() {
    var essay = document.getElementById("searchbar").value.toLowerCase()
    if (essay == "r") {
        document.getElementById("ss1").innerHTML = "<a>Romeo</a>"
        document.getElementById("ss2").innerHTML = "<a>Rest of the Montagues</a>"
        document.getElementById("ss3").innerHTML = "<a>Rest of the Capulets</a>"
        document.getElementById("ss4").innerHTML = ""
        document.getElementById("ss5").innerHTML = ""
    } else if (essay == "re" || essay == "l") {
        document.getElementById("ss1").innerHTML = "<a>Rest of the Capulets</a>"
        document.getElementById("ss2").innerHTML = "<a>Rest of the Montagues</a>"
        document.getElementById("ss3").innerHTML = ""
        document.getElementById("ss4").innerHTML = ""
        document.getElementById("ss5").innerHTML = ""
    } else if (essay == "rest of the c" || essay == "c" || essay == "lady c") {
        document.getElementById("ss1").innerHTML = "<a>Rest of the Capulets</a>"
        document.getElementById("ss2").innerHTML = ""
        document.getElementById("ss3").innerHTML = ""
        document.getElementById("ss4").innerHTML = ""
        document.getElementById("ss5").innerHTML = ""
    } else if (essay == "rest of the m" || essay == "lady m") {
        document.getElementById("ss1").innerHTML = "<a>Rest of the Montagues</a>"
        document.getElementById("ss2").innerHTML = ""
        document.getElementById("ss3").innerHTML = ""
        document.getElementById("ss4").innerHTML = ""
        document.getElementById("ss5").innerHTML = ""
    } else if (essay == "") {
        document.getElementById("ss1").innerHTML = ""
        document.getElementById("ss2").innerHTML = ""
        document.getElementById("ss3").innerHTML = ""
        document.getElementById("ss4").innerHTML = ""
        document.getElementById("ss5").innerHTML = ""
    } else if (essay == "p") {
        document.getElementById("ss1").innerHTML = "<a>Paris</a>"
        document.getElementById("ss2").innerHTML = "<a>Prince</a>"
        document.getElementById("ss3").innerHTML = ""
        document.getElementById("ss4").innerHTML = ""
        document.getElementById("ss5").innerHTML = ""
    } else if (essay == "ro") {
        document.getElementById("ss1").innerHTML = "<a>Romeo</a>"
        document.getElementById("ss2").innerHTML = ""
        document.getElementById("ss3").innerHTML = ""
        document.getElementById("ss4").innerHTML = ""
        document.getElementById("ss5").innerHTML = ""
    } else if (essay == "a") {
        document.getElementById("ss1").innerHTML = "<a>Act 1</a>"
        document.getElementById("ss2").innerHTML = "<a>Act 2</a>"
        document.getElementById("ss3").innerHTML = "<a>Act 3</a>"
        document.getElementById("ss4").innerHTML = "<a>Act 4</a>"
        document.getElementById("ss5").innerHTML = "<a>Act 5</a>"
    } else if (essay == "act 1") {
        document.getElementById("ss1").innerHTML = "<a>Act 1</a>"
        document.getElementById("ss2").innerHTML = ""
        document.getElementById("ss3").innerHTML = ""
        document.getElementById("ss4").innerHTML = ""
        document.getElementById("ss5").innerHTML = ""
    } else if (essay == "act 2") {
        document.getElementById("ss1").innerHTML = "<a>Act 2</a>"
        document.getElementById("ss2").innerHTML = ""
        document.getElementById("ss3").innerHTML = ""
        document.getElementById("ss4").innerHTML = ""
        document.getElementById("ss5").innerHTML = ""
    } else if (essay == "act 3") {
        document.getElementById("ss1").innerHTML = "<a>Act 3</a>"
        document.getElementById("ss2").innerHTML = ""
        document.getElementById("ss3").innerHTML = ""
        document.getElementById("ss4").innerHTML = ""
        document.getElementById("ss5").innerHTML = ""
    } else if (essay == "act 4") {
        document.getElementById("ss1").innerHTML = "<a>Act 4</a>"
        document.getElementById("ss2").innerHTML = ""
        document.getElementById("ss3").innerHTML = ""
        document.getElementById("ss4").innerHTML = ""
        document.getElementById("ss5").innerHTML = ""
    } else if (essay == "act 5") {
        document.getElementById("ss1").innerHTML = "<a>Act 5</a>"
        document.getElementById("ss2").innerHTML = ""
        document.getElementById("ss3").innerHTML = ""
        document.getElementById("ss4").innerHTML = ""
        document.getElementById("ss5").innerHTML = ""
    } else if (essay == "m") {
        document.getElementById("ss1").innerHTML = "<a>Mercutio</a>"
        document.getElementById("ss2").innerHTML = "<a>Rest of the Montagues</a>"
        document.getElementById("ss3").innerHTML = ""
        document.getElementById("ss4").innerHTML = ""
        document.getElementById("ss5").innerHTML = ""
    } else if (essay == "b") {
        document.getElementById("ss1").innerHTML = "<a>Benvolio</a>"
        document.getElementById("ss2").innerHTML = ""
        document.getElementById("ss3").innerHTML = ""
        document.getElementById("ss4").innerHTML = ""
        document.getElementById("ss5").innerHTML = ""
    } else if (essay == "f") {
        document.getElementById("ss1").innerHTML = "<a>Friar Lawrence</a>"
        document.getElementById("ss2").innerHTML = "<a>Friar John</a>"
        document.getElementById("ss3").innerHTML = ""
        document.getElementById("ss4").innerHTML = ""
        document.getElementById("ss5").innerHTML = ""
    } else if (essay == "n") {
        document.getElementById("ss1").innerHTML = "<a>Nurse</a>"
        document.getElementById("ss2").innerHTML = ""
        document.getElementById("ss3").innerHTML = ""
        document.getElementById("ss4").innerHTML = ""
        document.getElementById("ss5").innerHTML = ""
    } else if (essay == "t") {
        document.getElementById("ss1").innerHTML = "<a>Tybalt</a>"
        document.getElementById("ss2").innerHTML = ""
        document.getElementById("ss3").innerHTML = ""
        document.getElementById("ss4").innerHTML = ""
        document.getElementById("ss5").innerHTML = ""
    } else if (essay == "s" || essay == "w") {
        document.getElementById("ss1").innerHTML = "<a>Shakespeare</a>"
        document.getElementById("ss2").innerHTML = ""
        document.getElementById("ss3").innerHTML = ""
        document.getElementById("ss4").innerHTML = ""
        document.getElementById("ss5").innerHTML = ""
    } else if (essay == "mo") {
        document.getElementById("ss1").innerHTML = "<a>Rest of the Montagues</a>"
        document.getElementById("ss2").innerHTML = ""
        document.getElementById("ss3").innerHTML = ""
        document.getElementById("ss4").innerHTML = ""
        document.getElementById("ss5").innerHTML = ""
    } else if (essay == "me") {
        document.getElementById("ss1").innerHTML = "<a>Mercutio</a>"
        document.getElementById("ss2").innerHTML = ""
        document.getElementById("ss3").innerHTML = ""
        document.getElementById("ss4").innerHTML = ""
        document.getElementById("ss5").innerHTML = ""
    } else if (essay == "pa") {
        document.getElementById("ss1").innerHTML = "<a>Paris</a>"
        document.getElementById("ss2").innerHTML = ""
        document.getElementById("ss3").innerHTML = ""
        document.getElementById("ss4").innerHTML = ""
        document.getElementById("ss5").innerHTML = ""
    } else if (essay == "pr") {
        document.getElementById("ss1").innerHTML = "<a>Prince</a>"
        document.getElementById("ss2").innerHTML = ""
        document.getElementById("ss3").innerHTML = ""
        document.getElementById("ss4").innerHTML = ""
        document.getElementById("ss5").innerHTML = ""
    }
}
