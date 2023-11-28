const dinamicData = [
    {
        img: "http://127.0.0.1:5500/assets/img/i1.png",
        linkText: "Buy A Home",
        describtion: "over 1 million+ homes for sale available on the website, we can match you with a house you"
    },
    {
        img: "http://127.0.0.1:5500/assets/img/i2.png",
        linkText: "Rent A Home",
        describtion: "over 1 million+ homes for sale available on the website, we can match you with a house you"
    },
    {
        img: "http://127.0.0.1:5500/assets/img/i3.png",
        linkText: "Rent A Home",
        describtion: "over 1 million+ homes for sale available on the website, we can match you with a house you"
    }
]

const dinamic = document.querySelector(".dinamic-template");
for (let data of dinamicData) {
    const column = document.createElement("div");
    column.className = 'col-md-4 relative-box';
    column.setAttribute("data-aos", "zoom-in-up");
    column.setAttribute("data-aos-easing", "linear");
    column.setAttribute("data-aos-duration", (dinamic.indexOf(data) + 1) * 1000);

    column.innerHTML=`
        <div class="buy">
            <div class="imgbox">
                <img src="${dinamicData.img}" alt="">
            </div>
            <div class="ahref-home">
                <a href="">${dinamicData.linkText}</a>
            </div>
            <h6>${dinamicData.describtion}</h6>
            <div class="arrow d-flex justify-content-center">
                <div class="ahref-find">
                    <a href="">Find A Home</a>
                </div>
                <div class="iconbox">
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
            </div>
        </div>  
    `
    dinamic.appendChild(column);

}
