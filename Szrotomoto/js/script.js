samochody = [ 
    // Bartoszowy JSON ktory nie wiem czy dziala
    {
        "nazwa": "Mercedes-Benz GLE Coupe 350 D 4-Matic",
        "rocznik": "2016",
        "przebieg": "67 000km",
        "silnik": "2987 cm<sup>3</sup> - Diesel - 258KM",
        "cena": "249 000zł",
        "img": "img/Mercedes-Benz GLE 350D.jpg"
    },
    {
        "nazwa": "Volkswagen Golf VII",
        "rocznik": "2018",
        "przebieg": "171 000km",
        "silnik": "1598 cm<sup>3</sup> - Diesel - 115KM",
        "cena": "46 999zł",
        "img": "img/Volkswagen Golf VII.jpg"
    },
    {
        "nazwa": "Audi RS7 Quattro ",
        "rocznik": "2021",
        "przebieg": "33 000km",
        "silnik": "3 996 cm<sup>3</sup> - Benzyna - 600KM",
        "cena": "749 900zł",
        "img": "img/Audi RS7.jpg"
    },
    {
        "nazwa": "Porsche 911",
        "rocznik": "2011",
        "przebieg": "63 964km",
        "silnik": "3 614 cm<sup>3</sup> - Benzyna - 345KM",
        "cena": "379 900zł",
        "img": "img/Porsche 911.jpg"
    },
    {
        "nazwa": "BMW X7 XDrive40d",
        "rocznik": "2022",
        "przebieg": "35 000km",
        "silnik": "2 993 cm<sup>3</sup> - Diesel - 340KM",
        "cena": "554 193zł",
        "img": "img/BMW X7 XDrive40d.jpg"
    },
    {
        "nazwa": "Mercedes-Benz 350 4-Matic",
        "rocznik": "2015",
        "przebieg": "260 000km",
        "silnik": "2 987 cm<sup>3</sup> - Diesel - 258KM",
        "cena": "159 900zł",
        "img": "img/Mercedes-Benz Klasa S 350.jpg"
    }
]


function Wybor(){
    let select = document.getElementById("cars");
    let value = select.value;

    switch (value){
        case "all":
            var divs = document.getElementsByClassName("cars");
            for (var i = 0; i < divs.length; i++) divs[i].style.display = "block";
            break

        case "volkswagen":
            var divs = document.getElementsByClassName("cars");
            for (var i = 0; i < divs.length; i++){
                if (divs[i].classList.contains("volkswagen")) divs[i].style.display = "block";
                else divs[i].style.display = "none";
            }
            break

        case "mercedes":
            var divs = document.getElementsByClassName("cars");
            for (var i = 0; i < divs.length; i++){
                if (divs[i].classList.contains("mercedes")) divs[i].style.display = "block";
                else divs[i].style.display = "none";
            }
            break

        case "audi":
            var divs = document.getElementsByClassName("cars");
            for (var i = 0; i < divs.length; i++){
                if (divs[i].classList.contains("audi")) divs[i].style.display = "block";
                else divs[i].style.display = "none";
            }
            break

        case "porsche":
            var divs = document.getElementsByClassName("cars");
            for (var i = 0; i < divs.length; i++){
                if (divs[i].classList.contains("porsche")) divs[i].style.display = "block";
                else divs[i].style.display = "none";
            }
            break

        case "bmw":
            var divs = document.getElementsByClassName("cars");
            for (let i = 0; i < divs.length; i++){
                if (divs[i].classList.contains("bmw")) divs[i].style.display = "block";
                else divs[i].style.display = "none";
            }
            break
        }
}

function WczytajDane(index){
    sessionStorage.setItem("nazwa", samochody[index].nazwa);
    sessionStorage.setItem("rocznik", samochody[index].rocznik);
    sessionStorage.setItem("przebieg", samochody[index].przebieg);
    sessionStorage.setItem("silnik", samochody[index].silnik);
    sessionStorage.setItem("cena", samochody[index].cena);
    sessionStorage.setItem("img", samochody[index].img);
    location.href = "zakup.html";
}

function OdczytajDane(){
    let nazwa = sessionStorage.getItem("nazwa");
    let rocznik = sessionStorage.getItem("rocznik");
    let przebieg = sessionStorage.getItem("przebieg");
    let silnik = sessionStorage.getItem("silnik");
    let cena = sessionStorage.getItem("cena");
    let img = sessionStorage.getItem("img");
    
    document.getElementById("nazwa").innerHTML = "".concat(nazwa);
    document.getElementById("rocznik").innerHTML = "Rocznik: ".concat(rocznik);
    document.getElementById("przebieg").innerHTML = "Przebieg: ".concat(przebieg);
    document.getElementById("silnik").innerHTML = "".concat(silnik);
    document.getElementById("cena").innerHTML = "".concat(cena);
    document.getElementById("img").src = img;
}


let cenaGlobalna = 0;
// ! Dziala ta funkcja z podliczaniem ceny
function PodliczanieCeny(index) {
    let cena = parseInt(sessionStorage.getItem("cena"));
    if (document.getElementById("style1").checked == true){
        cena += parseInt(20516);
    } 
    if (document.getElementById("style2").checked == true){
        cena += parseInt(44140);
    }
    if (document.getElementById("wyposazenie1").checked == true){
        cena += parseInt(24645);
    }
    if (document.getElementById("wyposazenie2").checked == true){
        cena += parseInt(48627);
    }
    if (document.getElementById("akcesoria1").checked == true){
        cena += parseInt(6217);
    }
    if (document.getElementById("akcesoria2").checked == true){
        cena += parseInt(18363);
    }
    if (document.getElementById("akcesoria3").checked == true){
        cena += parseInt(30509);
    }
    if (document.getElementById("akcesoria4").checked == true){
        cena += parseInt(37928);
    }
    if (document.getElementById("akcesoria5").checked == true){
        cena += parseInt(10937);
    }
    cenaGlobalna = cena;
    // localStorage.setItem("cena", cenaGlobalna);
}

// TODO Skrypt na zachowywanie danych po odswiezeniu






