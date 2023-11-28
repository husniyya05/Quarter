const replyButton = document.querySelector(".reply-btn");
const comment = document.querySelector(".adam-comment");
const button = document.querySelector(".button-adam");
const dataTable = document.querySelector(".table-data");


replyButton.addEventListener("click", (e) => {
    if (comment.style.display === "none") {
        comment.style.display = "block";
    }
    else {
        comment.style.display = "none";
    }
})

button.addEventListener("click", (e) => {
    e.preventDefault();
    const input = document.querySelector(".input").value;
    if (input) {
        const newtable = document.createElement("div");

        const date = new Date().toLocaleString();

        newtable.innerHTML = `

        <div class="adam">
            <div class="adam-first d-flex">
                <div class="imgbox">
                    <img class="w-100" src="assets/img/1 (3).jpg" alt="">
                </div>
                <div class="textbox">
                    <h6>Adam Smit</h6>
                    <h5>${date}</h5>
                    <p> ${input}</p>
                </div>
            </div>
            <div class="adam-comment">
                <div class="imgbox">
                    <img src="assets/img/1 (3).jpg" alt="">
                </div>
                <div class="textbox">
                    <h6>Adam Smit</h6>
                    <h5>20th May 2020</h5>
                    <form class="d-flex">
                            <input class="input" type="text" placeholder="Enter comment">
                        <div class="button-adam">
                            <button type="submit">Send</button>
                        </div>

                    </form>

                </div>
                <table class="table-data">
                    <thead>
                        <tr>
                            <th>Comment</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>

            </div>

         </div>
    `
        dataTable.appendChild(newtable);
    }
})








// function  toggleReply(){
//     if(comment.style.display === "none"){
//         comment.style.display = "block";
//     }
//     else{
//         comment.style.display = "none";
//     }
// }

// replyButton.addEventListener("click" , toggleReply);

