function setScores(category, score, icon){
    let div = document.createElement("div");
    div.classList.add("score-div");
    div.id = category.toLowerCase() + "-score-div";

    let imgDiv = document.createElement("div");
    imgDiv.classList.add("img-name-div");
    let img = document.createElement("img");
    img.src = icon;
    imgDiv.appendChild(img);

    let h3 = document.createElement("h3");
    h3.innerText = category;
    imgDiv.appendChild(h3);

    div.appendChild(imgDiv);

    let span = document.createElement("span");
    let strong = document.createElement("strong");
    strong.innerText = score + " ";
    span.appendChild(strong);
    let text = document.createTextNode("/ 100");
    span.appendChild(text);


    
    div.appendChild(span);

    document.getElementById("scores-div").appendChild(div);
}


function getScores(){
    const fetchConfig = {
        "method": "GET",
    };
    fetch("./data.json", fetchConfig)
        .then((response)=>{
            response.json()
                .then((response)=>{
                    (response).forEach(element => {
                        setScores(element.category, element.score, element.icon);
                    });
                })
                .catch((error)=>{
                    console.log(error)
                })
        })
        .catch((error)=>{
            console.log(error)
        })
}

getScores();

/*<div class="score-div" id="reaction-score-div">
          <div class="img-name-div" >
            <img src="./assets/images/icon-reaction.svg" alt="">
            <h3>
              Reaction
          </div>
          </h3>
          <span>
            <strong>80 </strong>/ 100
          </span>
        </div>*/