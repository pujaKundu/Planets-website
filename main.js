const planetList = document.querySelectorAll(".planetList")
const title = document.getElementById('title')
const overview = document.getElementById('overview')
const rotation = document.getElementById('rotation')
const revolution = document.getElementById('revolution')
const radius = document.getElementById('radius')
const temperature = document.getElementById('temperature')

function getId(id, e) {
    e.preventDefault()
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            const response = JSON.parse(xhttp.responseText);
            const planets = response.planetsInfo;

            for (let i = 0; i < planets.length; i++) {
                if (planets[i].id == id) {
                    let overviewHTML = `
                    
                            <div class="">
                                <img src="${planets[i].image}" class="planet-img .img-fluid" alt="">
                            </div>
                        <div class="banner">
                        <div class="overview">
                            <h1>${planets[i].name}</h1>
                            <p>${planets[i].overview}</p>
                            <p>Source :<span> NASA Science</span></p>
                        </div>
                        <div class="characteristics">
                            <div class="characteristic">
                            <p>ROTATION TIME</p>
                             <h5 id="rotation">${planets[i].rotationTime}</h5>
                            </div>
                            <div class=" characteristic">
                                <p>REVOLUTION TIME</p>
                                <h5 id="revolution">${planets[i].revolutionTime}</h5>
                            </div>
                            <div class="characteristic">
                                <p>RADIUS</p>
                                <h5 id="radius">${planets[i].radius}</h5>
                            </div>
                            <div class="characteristic">
                                <p>TEMPERATURE</p>
                                <h5 id="temperature">${planets[i].temperature}</h5>
                            </div>
                        </div>
                    </div>
                        `

                    overview.innerHTML = overviewHTML
                }
            }
        }
    };
    xhttp.open("GET", "planets.json", true);
    xhttp.send();
}