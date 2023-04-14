/* export default {
    myCards: [
        {
            title: "Hunters",
            image: `<img src="../images/hunters.png" alt="" srcset="">`,
            textButton: "Ver datos"
        },
        {
            title: "Cafeteria hunters",
            image: `<img src="../images/Interior-cafeteria-pasteleria-Ofelia-Bakery_1731437050_168755568_1200x675.jpg" alt="" srcset="">`,
            textButton: "Ver datos"
        },
        {
            title: "8vo piso",
            image: `<img src="../images/cafeteria 8vo.jpg" alt="" srcset="">`,
            textButton: "Ver datos"
        },
        {
            title: "Baños",
            image: `<img src="../images/aseo.png" alt="" srcset="">`,
            textButton: "Ver datos"
        }
    ],
    showCards(){
        let plantilla = "";
        this.myCards.forEach((val, id)=>{
            plantilla += `
            <div class="tarjetas">
                <p>${val.title}</p>
                ${val.image}
                <button class="button">${val.textButton}</button>        
            </div>
            `
        })
        document.querySelector("#contenedor-tarjetas").insertAdjacentHTML("beforeend", plantilla)
    }
} */