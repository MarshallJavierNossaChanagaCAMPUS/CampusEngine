// script llenado dinamico
// script accordion

export default {
    navBar: {
        img: `<img id="logo" src="/images/logoWhite.png" width="150px">`,
        data1: "Inicio",
        data2: "Servicios",
        data3: "Soporte",
        links: {
            link1: `./index.html`,
            link2: `./servicios/index.html`,
            link3: `./soporte/index.html`
        }
    },
    firstSection: {
        title: "Bienvenid@ Camper",
        description: "Campus Programmers Land ",
        subtitle: "Acerca de la pagina",
        subdescription: "Esta es una pagina informativa acerca de nuestros servicios ofrecidos a nuestros queridos campers"
    },
    socialSection: {
        image: `<img src="images/Space astronaut cartoon.png">`,
        title: "¡Contactanos!",
        social: {
            media1: "+57 311 800 7569",
            media2: "@CampusLatam",
            media3: "@CampusLand",
            media4: "@campusdevelopers"
        },
        socialLinks: {
            link1: "https://www.facebook.com/Campuslands?mibextid=LQQJ4d",
            link2: "https://www.facebook.com/Campuslands?mibextid=LQQJ4d",
            link3: "https://www.facebook.com/Campuslands?mibextid=LQQJ4d",
            link4: "https://www.facebook.com/Campuslands?mibextid=LQQJ4d"
        }  
    },
    showNavIndex(){
        document.querySelector("#navBar").insertAdjacentHTML("beforeend", `
        <nav>    
            <section class="container1">
                ${this.navBar.img}
                <a class="alink" href="${this.navBar.links.link1}"> ${this.navBar.data1} </a>
                <a class="alink" href="${this.navBar.links.link2}"> ${this.navBar.data2} </a>
                <a class="alink" href="${this.navBar.links.link3}"> ${this.navBar.data3} </a>
            </section>
        </nav>
        `)
    },
    showFirstSectionIndex(){
        document.querySelector("#firstSection").insertAdjacentHTML("beforeend", `
        <div class="first-message">
            <h1>${this.firstSection.title}</h1>
            <p> ${this.firstSection.description} </p>
            <h3>${this.firstSection.subtitle}</h3>
            <p> ${this.firstSection.subdescription} </p>
        </div>
        `)
    },
    showSecondSectionIndex(){
        document.querySelector("#secondSection").insertAdjacentHTML("beforeend", `
        <div>
            ${this.socialSection.image}
        </div>
        <div class="contact-info-container">
            <p>${this.socialSection.title}</p>
            <div class="social"> <img src="images/whatsapp.svg"> <a href="${this.socialSection.socialLinks.link1}" target="blank">${this.socialSection.social.media1}</a> </div>
            <div class="social"> <img src="images/twitter.svg"> <a href="${this.socialSection.socialLinks.link2}" target="blank"> ${this.socialSection.social.media2}</a> </div>
            <div class="social"> <img src="images/facebookF.svg"> <a href="${this.socialSection.socialLinks.link3}" target="blank"> ${this.socialSection.social.media3}</a> </div>
            <div class="social"> <img src="images/instagram.svg"> <a href="${this.socialSection.socialLinks.link4}" target="blank"> ${this.socialSection.social.media4}</a> </div>
        </div>
        `)
    }
}

document.querySelector("#contenedor-tarjetas").addEventListener("click", (e) => {
    console.log(hola);
})