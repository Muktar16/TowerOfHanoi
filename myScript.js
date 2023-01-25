
const createDisks = () => {
    let nums = [];
    let firstBox= document.getElementById("firstBox")
    while(nums.length<7)
    {
        let t = Math.floor(Math.random()*7)+1;
        if(nums.indexOf(t) == -1)
        {
            nums.push(t);
            let disk = document.createElement("div");
            disk.append(t);
            disk.classList = "boxDiv"
            firstBox.append(disk)
        }
    }
}

const clear_boxes = () => {

    let boxes = document.getElementsByClassName("diskContainer");
    for(let i=0;i<3;i++)
    {
        let child = boxes[i].lastElementChild; 
        while (child) {
            boxes[i].removeChild(child);
            child = boxes[i].lastElementChild;
        }

    }
}


const start = () => {
    clear_boxes();
    createDisks();
}


const showMessage = (message, description) => {
    let modal = document.getElementById("messageBoxContainer");
    let div = modal.children[0]
    div.classList = "messageContainer"

    let span = document.getElementsByClassName("close")[0];

    let para = document.createElement("p")
    let x = document.createElement("strong")
    x.append(message)

    para.append(x)
    para.append(description)
    div.append(para)


    modal.style.display = "block";

    span.onclick = function() {
    modal.style.display = "none";
    document.location.reload()
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.location.reload()
        }
    }
}


function loseBox(){
    let modal = document.getElementById("myModal");
    let div = modal.children[0]
    div.classList = "modal-content"

    // let image = document.createElement("img")
    // image.classList = "image"
    // image.src = "image/wrong.png"
    // div.append(image)

    let btn = document.getElementById("myBtn");

    let span = document.getElementsByClassName("close")[0];

    let para = document.createElement("p")
    let x = document.createElement("strong")
    x.append("Sorry!")

    para.append(x)
    para.append("You have lost the game.")
    div.append(para)


    modal.style.display = "block";

    console.log(modal)

    span.onclick = function() {
        modal.style.display = "none";
        document.location.reload()
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.location.reload()
        }
    }
}

const evaluateGame = () => {
    let flag = false
    let count = 0

    let boxes = document.getElementsByClassName("diskContainer");
    for(let i=0;i<3;i++)
    {
        let len = boxes[i].childElementCount
        if(len == 0) count++
        if(len == 7 && isSorted(boxes[i])){
            flag = true
            showMessage("Congrats!!!!  ", "You have win!!!")
            break
        }
    }

    if(count == 3){
        document.location.reload()
    }
    else if(flag == false){
        showMessage("Sorry!!!  ", "You have lost the game")
    }
}

const moveDisk = (currentBox , nextBox) => {
    let mainContainer = document.getElementById("mainContainer")
    let presentBox =  mainContainer.children[currentBox].children[0];
    let destinationBox = mainContainer.children[nextBox].children[0]
    if(presentBox.children[0]) destinationBox.prepend(presentBox.children[0])  
}

const isSorted = (currentBox) => {
    for(let i = 0; i < currentBox.childElementCount - 1; i++)
        if(currentBox.children[i].innerHTML > currentBox.children[i+1].innerHTML) 
        return false;
    return true
}