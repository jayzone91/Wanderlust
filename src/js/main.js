function toggleDarkMode() {
    if(document.getElementById("body").classList.contains("light")){
        document.getElementById("body").classList.remove("light")
        document.getElementById("body").classList.add("dark")

        document.getElementById("toggle").classList.remove("fa-moon")
        document.getElementById("toggle").classList.add("fa-sun")
    }
    else{
        document.getElementById("body").classList.add("light")
        document.getElementById("body").classList.remove("dark")
         document.getElementById("toggle").classList.add("fa-moon")
        document.getElementById("toggle").classList.remove("fa-sun")
    }
}