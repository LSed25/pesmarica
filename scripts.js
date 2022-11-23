const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");
const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");
const pages = [];

pages.push(paper1, paper2, paper3, paper4);


let countDown = 0;
let countDown2 = 28;

prevBtn.addEventListener("click", goPreviousPage);
nextBtn.addEventListener("click", goNextPage);


let currentLocation = 1;
let numOfPapers = 4;
let maxLocation = numOfPapers + 1;


function openBook() {
    book.style.transform = "translateX(50%)";
}

function closeBook(isAtBeginning) {
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)";
    }else{
        book.style.transform = "translateX(100%)";
    }
}

function goNextPage() {
    if(currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                for(let i = 0; i < 4; i++) {
                    if(i != 0 && i != 1) {
                        if(i > 1) {
                            pages[i].style.zIndex = countDown2-1;
                            countDown2--;
                        }else{
                            pages[i].style.zIndex = i
                        }
                    }else{
                        pages[0].style.zIndex = 29;
                        pages[1].style.zIndex = 30;
                    }
                }
                break;
            case 2:
                paper2.classList.add("flipped");
                for(let i = 0; i < 4; i++) {
                    if(i != 1 && i != 2) {
                        if(i > 2) {
                            pages[i].style.zIndex = countDown2-1;
                            countDown2--;
                        }else{
                            pages[i].style.zIndex = i
                        }
                    }else{
                        pages[1].style.zIndex = 29;
                        pages[2].style.zIndex = 30;
                    }
                }
                break;
            case 3:
                paper3.classList.add("flipped");
                for(let i = 0; i < 4; i++) {
                    if(i != 2 && i != 3) {
                        if(i > 3) {
                            pages[i].style.zIndex = countDown2-1;
                            countDown2--;
                        }else{
                            pages[i].style.zIndex = i
                        }
                    }else{
                        pages[2].style.zIndex = 29;
                        pages[3].style.zIndex = 30;
                    }
                }
                break;
            case 4:
                paper4.classList.add("flipped");
                paper4.style.zIndex = 31;
                countDown2 = 28;
                closeBook(false);
                break;
            default:
                throw new Error("unknown state");
        }
        currentLocation++;
    }
}

function goPreviousPage() {
    if(currentLocation > 1) {
        switch(currentLocation) {
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 31;
                countDown = 0;
                break;
            case 3:
                paper2.classList.remove("flipped");
                for(let i = 0; i < 4; i++) {
                    if(i != 0 && i != 1) {
                        if(i > 1) {
                            pages[i].style.zIndex = countDown;
                            countDown--;
                        }else{
                            pages[i].style.zIndex = i;
                        }
                    }else{
                        pages[i].style.zIndex = 30;
                    }
                }
                break;
            case 4:
                paper3.classList.remove("flipped");
                for(let i = 0; i < 4; i++) {
                    if(i != 1 && i != 2) {
                        if(i > 2) {
                            pages[i].style.zIndex = countDown;
                            countDown--;
                        }else{
                            pages[i].style.zIndex = i;
                        }
                    }else{
                        pages[i].style.zIndex = 30;
                    }
                }
                break;
            case 5:
                openBook();
                paper4.classList.remove("flipped");
                for(let i = 0; i < 4; i++) {
                    if(i != 2 && i != 3) {
                        if(i > 3) {
                            pages[i].style.zIndex = countDown;
                            countDown--;
                        }else{
                            pages[i].style.zIndex = i;
                        }
                    }else{
                        pages[i].style.zIndex = 30;
                    }
                }
                break;
            default:
                throw new Error("unknown state");
        }
        currentLocation--;
    }
}
//modal

function openModal(imgs) {
    let modal = document.getElementById("myModal");
    let modalImg = document.getElementById("img01");
    let player = document.getElementById('player');
    player.style.display = "none";
    //let captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.style.display = "block";
    //captionText.style.display = "block";
    modalImg.src = imgs.src;
    //captionText.innerHTML = imgs.alt;

    let span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
        modalImg.style.display = "none";
        //captionText.style.display = "none";
    }
}

//video
function playVideo(vid) {
    let modal = document.getElementById("myModal");
    let player = document.getElementById('player');
    console.log(vid.name);
    //var video = document.getElementById('player');

        //document.getElementById('trailer').onclick = function () {
    modal.style.display = "block";
    player.style.display = "block";
    player.setAttribute('src', vid.name);
    player.play();
    //}
    
    let span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
        player.pause();
        player.style.display = "none";
        player.setAttribute('src', null);
        player = null;
    }

}