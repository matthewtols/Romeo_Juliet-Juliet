// TITLE


var searchsuggester = setInterval(searchsuggest, 10)

function searchsuggest() {
    var essay = document.getElementById("searchbar").value.toLowerCase()
    if (essay == "r") {
        document.getElementById("ss1").innerHTML = "<a href='https://matthewtols.github.io/Romeo_Juliet-Romeo/'>Romeo</a>"
        document.getElementById("ss2").innerHTML = "<a href='https://matthewtols.github.io/Romeo_Juliet-Montagues/'>Rest of the Montagues</a>"
        document.getElementById("ss3").innerHTML = "<a href='https://matthewtols.github.io/Romeo_Juliet-Capulets/'>Rest of the Capulets</a>"
        document.getElementById("ss4").innerHTML = ""
        document.getElementById("ss5").innerHTML = ""
        clearInterval(searchsuggester)
    } else if (essay == "re" || essay == "l") {
        document.getElementById("ss1").innerHTML = "<a href='https://matthewtols.github.io/Romeo_Juliet-Capulets/'>Rest of the Capulets</a>"
        document.getElementById("ss2").innerHTML = "<a href='https://matthewtols.github.io/Romeo_Juliet-Montagues/'>Rest of the Montagues</a>"
        document.getElementById("ss3").innerHTML = ""
        document.getElementById("ss4").innerHTML = ""
        document.getElementById("ss5").innerHTML = ""
        clearInterval(searchsuggester)
    } else if (essay == "rest of the c" || essay == "c" || essay == "lady c") {
        document.getElementById("ss1").innerHTML = "<a href='https://matthewtols.github.io/Romeo_Juliet-Capulets/'>Rest of the Capulets</a>"
        document.getElementById("ss2").innerHTML = ""
        document.getElementById("ss3").innerHTML = ""
        document.getElementById("ss4").innerHTML = ""
        document.getElementById("ss5").innerHTML = ""
        clearInterval(searchsuggester)
    } else if (essay == "rest of the m" || essay == "lady m") {
        document.getElementById("ss1").innerHTML = "<a href='https://matthewtols.github.io/Romeo_Juliet-Montagues/'>Rest of the Montagues</a>"
        document.getElementById("ss2").innerHTML = ""
        document.getElementById("ss3").innerHTML = ""
        document.getElementById("ss4").innerHTML = ""
        document.getElementById("ss5").innerHTML = ""
        clearInterval(searchsuggester)
    } else if (essay == "") {
        document.getElementById("ss1").innerHTML = ""
        document.getElementById("ss2").innerHTML = ""
        document.getElementById("ss3").innerHTML = ""
        document.getElementById("ss4").innerHTML = ""
        document.getElementById("ss5").innerHTML = ""
    } else if (essay == "p") {
        document.getElementById("ss1").innerHTML = "<a href='https://matthewtols.github.io/Romeo_Juliet-Paris/'>Paris</a>"
        document.getElementById("ss2").innerHTML = "<a href='https://matthewtols.github.io/Romeo_Juliet-Prince/'>Prince</a>"
        document.getElementById("ss3").innerHTML = ""
        document.getElementById("ss4").innerHTML = ""
        document.getElementById("ss5").innerHTML = ""
        clearInterval(searchsuggester)
    } else if (essay == "ro") {
        document.getElementById("ss1").innerHTML = "<a href='https://matthewtols.github.io/Romeo_Juliet-Romeo/'>Romeo</a>"
        document.getElementById("ss2").innerHTML = ""
        document.getElementById("ss3").innerHTML = ""
        document.getElementById("ss4").innerHTML = ""
        document.getElementById("ss5").innerHTML = ""
        clearInterval(searchsuggester)
    } else if (essay == "a") {
        document.getElementById("ss1").innerHTML = "<a href='https://matthewtols.github.io/Romeo_Juliet-Act_1/'>Act 1</a>"
        document.getElementById("ss2").innerHTML = "<a href='https://matthewtols.github.io/Romeo_Juliet-Act_2/'>Act 2</a>"
        document.getElementById("ss3").innerHTML = "<a href='https://matthewtols.github.io/Romeo_Juliet-Act_3/'>Act 3</a>"
        document.getElementById("ss4").innerHTML = "<a href='https://matthewtols.github.io/Romeo_Juliet-Act_4/'>Act 4</a>"
        document.getElementById("ss5").innerHTML = "<a href='https://matthewtols.github.io/Romeo_Juliet-Act_5/'>Act 5</a>"
        clearInterval(searchsuggester)
    } else if (essay == "act 1") {
        document.getElementById("ss1").innerHTML = "<a href='https://matthewtols.github.io/Romeo_Juliet-Act_1/'>Act 1</a>"
        document.getElementById("ss2").innerHTML = ""
        document.getElementById("ss3").innerHTML = ""
        document.getElementById("ss4").innerHTML = ""
        document.getElementById("ss5").innerHTML = ""
        clearInterval(searchsuggester)
    } else if (essay == "act 2") {
        document.getElementById("ss1").innerHTML = "<a href='https://matthewtols.github.io/Romeo_Juliet-Act_2/'>Act 2</a>"
        document.getElementById("ss2").innerHTML = ""
        document.getElementById("ss3").innerHTML = ""
        document.getElementById("ss4").innerHTML = ""
        document.getElementById("ss5").innerHTML = ""
        clearInterval(searchsuggester)
    } else if (essay == "act 3") {
        document.getElementById("ss1").innerHTML = "<a href='https://matthewtols.github.io/Romeo_Juliet-Act_3/'>Act 3</a>"
        document.getElementById("ss2").innerHTML = ""
        document.getElementById("ss3").innerHTML = ""
        document.getElementById("ss4").innerHTML = ""
        document.getElementById("ss5").innerHTML = ""
        clearInterval(searchsuggester)
    } else if (essay == "act 4") {
        document.getElementById("ss1").innerHTML = "<a href='https://matthewtols.github.io/Romeo_Juliet-Act_4/'>Act 4</a>"
        document.getElementById("ss2").innerHTML = ""
        document.getElementById("ss3").innerHTML = ""
        document.getElementById("ss4").innerHTML = ""
        document.getElementById("ss5").innerHTML = ""
        clearInterval(searchsuggester)
    } else if (essay == "act 5") {
        document.getElementById("ss1").innerHTML = "<a href='https://matthewtols.github.io/Romeo_Juliet-Act_5/'>Act 5</a>"
        document.getElementById("ss2").innerHTML = ""
        document.getElementById("ss3").innerHTML = ""
        document.getElementById("ss4").innerHTML = ""
        document.getElementById("ss5").innerHTML = ""
        clearInterval(searchsuggester)
    } else if (essay == "m") {
        document.getElementById("ss1").innerHTML = "<a href='https://matthewtols.github.io/Romeo_Juliet-Mercutio/'>Mercutio</a>"
        document.getElementById("ss2").innerHTML = "<a href='https://matthewtols.github.io/Romeo_Juliet-Montagues/'>Rest of the Montagues</a>"
        document.getElementById("ss3").innerHTML = ""
        document.getElementById("ss4").innerHTML = ""
        document.getElementById("ss5").innerHTML = ""
        clearInterval(searchsuggester)
    } else if (essay == "b") {
        document.getElementById("ss1").innerHTML = "<a href='https://matthewtols.github.io/Romeo_Juliet-Benvolio/'>Benvolio</a>"
        document.getElementById("ss2").innerHTML = ""
        document.getElementById("ss3").innerHTML = ""
        document.getElementById("ss4").innerHTML = ""
        document.getElementById("ss5").innerHTML = ""
        clearInterval(searchsuggester)
    } else if (essay == "f") {
        document.getElementById("ss1").innerHTML = "<a href='https://matthewtols.github.io/Romeo_Juliet-Friar_Lawrence/'>Friar Lawrence</a>"
        document.getElementById("ss2").innerHTML = "<a href='https://matthewtols.github.io/Romeo_Juliet-Friar_Lawrence/'>Friar John</a>"
        document.getElementById("ss3").innerHTML = ""
        document.getElementById("ss4").innerHTML = ""
        document.getElementById("ss5").innerHTML = ""
        clearInterval(searchsuggester)
    } else if (essay == "n") {
        document.getElementById("ss1").innerHTML = "<a href='https://matthewtols.github.io/Romeo_Juliet-Nurse/'>Nurse</a>"
        document.getElementById("ss2").innerHTML = ""
        document.getElementById("ss3").innerHTML = ""
        document.getElementById("ss4").innerHTML = ""
        document.getElementById("ss5").innerHTML = ""
        clearInterval(searchsuggester)
    } else if (essay == "t") {
        document.getElementById("ss1").innerHTML = "<a href='https://matthewtols.github.io/Romeo_Juliet-Tybalt/'>Tybalt</a>"
        document.getElementById("ss2").innerHTML = ""
        document.getElementById("ss3").innerHTML = ""
        document.getElementById("ss4").innerHTML = ""
        document.getElementById("ss5").innerHTML = ""
        clearInterval(searchsuggester)
    } else if (essay == "s" || essay == "w") {
        document.getElementById("ss1").innerHTML = "<a href='https://www.folger.edu/shakespeares-life'>Shakespeare</a>"
        document.getElementById("ss2").innerHTML = ""
        document.getElementById("ss3").innerHTML = ""
        document.getElementById("ss4").innerHTML = ""
        document.getElementById("ss5").innerHTML = ""
        clearInterval(searchsuggester)
    } else if (essay == "mo") {
        document.getElementById("ss1").innerHTML = "<a href='https://matthewtols.github.io/Romeo_Juliet-Montagues/'>Rest of the Montagues</a>"
        document.getElementById("ss2").innerHTML = ""
        document.getElementById("ss3").innerHTML = ""
        document.getElementById("ss4").innerHTML = ""
        document.getElementById("ss5").innerHTML = ""
        clearInterval(searchsuggester)
    } else if (essay == "me") {
        document.getElementById("ss1").innerHTML = "<a href='https://matthewtols.github.io/Romeo_Juliet-Mercutio/'>Mercutio</a>"
        document.getElementById("ss2").innerHTML = ""
        document.getElementById("ss3").innerHTML = ""
        document.getElementById("ss4").innerHTML = ""
        document.getElementById("ss5").innerHTML = ""
        clearInterval(searchsuggester)
    } else if (essay == "pa") {
        document.getElementById("ss1").innerHTML = "<a href='https://matthewtols.github.io/Romeo_Juliet-Paris/'>Paris</a>"
        document.getElementById("ss2").innerHTML = ""
        document.getElementById("ss3").innerHTML = ""
        document.getElementById("ss4").innerHTML = ""
        document.getElementById("ss5").innerHTML = ""
        clearInterval(searchsuggester)
    } else if (essay == "pr") {
        document.getElementById("ss1").innerHTML = "<a href='https://matthewtols.github.io/Romeo_Juliet-Prince'>Prince</a>"
        document.getElementById("ss2").innerHTML = ""
        document.getElementById("ss3").innerHTML = ""
        document.getElementById("ss4").innerHTML = ""
        document.getElementById("ss5").innerHTML = ""
        clearInterval(searchsuggester)
    }
}
