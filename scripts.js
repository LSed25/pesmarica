const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");
const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");
const paper5 = document.querySelector("#p5");
const paper6 = document.querySelector("#p6");
const paper7 = document.querySelector("#p7");
const paper8 = document.querySelector("#p8");
const paper9 = document.querySelector("#p9");
const paper10 = document.querySelector("#p10");
const paper11 = document.querySelector("#p11");
const paper12 = document.querySelector("#p12");
const paper13 = document.querySelector("#p13");
const paper14 = document.querySelector("#p14");
const paper15 = document.querySelector("#p15");
const paper16 = document.querySelector("#p16");
const paper17 = document.querySelector("#p17");
const paper18 = document.querySelector("#p18");
const paper19 = document.querySelector("#p19");
const paper20 = document.querySelector("#p20");
const paper21 = document.querySelector("#p21");
const paper22 = document.querySelector("#p22");
const paper23 = document.querySelector("#p23");
const paper24 = document.querySelector("#p24");
const paper25 = document.querySelector("#p25");
const paper26 = document.querySelector("#p26");
const paper27 = document.querySelector("#p27");
const paper28 = document.querySelector("#p28");
const pages = [];
pages.push(paper1, paper2, paper3, paper4, paper5, paper6, paper7, paper8, paper9, paper10, paper11, paper12, paper13, paper14, paper15, paper16, paper17, paper18, paper19, paper20, paper21, paper22, paper23, paper24, paper25, paper26, paper27, paper28);


let countDown = 0;
let countDown2 = 28;

prevBtn.addEventListener("click", goPreviousPage);
nextBtn.addEventListener("click", goNextPage);


let currentLocation = 1;
let numOfPapers = 28;
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
                for(let i = 0; i < 28; i++) {
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
                for(let i = 0; i < 28; i++) {
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
                for(let i = 0; i < 28; i++) {
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
                for(let i = 0; i < 28; i++) {
                    if(i != 3 && i != 4) {
                        if(i > 4) {
                            pages[i].style.zIndex = countDown2-1;
                            countDown2--;
                        }else{
                            pages[i].style.zIndex = i
                        }
                    }else{
                        pages[3].style.zIndex = 29;
                        pages[4].style.zIndex = 30;
                    }
                }
                break;
            case 5:
                paper5.classList.add("flipped");
                for(let i = 0; i < 28; i++) {
                    if(i != 4 && i != 5) {
                        if(i > 5) {
                            pages[i].style.zIndex = countDown2-1;
                            countDown2--;
                        }else{
                            pages[i].style.zIndex = i
                        }
                    }else{
                        pages[4].style.zIndex = 29;
                        pages[5].style.zIndex = 30;
                    }
                }
                break;
            case 6:
                paper6.classList.add("flipped");
                for(let i = 0; i < 28; i++) {
                    if(i != 5 && i != 6) {
                        if(i > 6) {
                            pages[i].style.zIndex = countDown2-1;
                            countDown2--;
                        }else{
                            pages[i].style.zIndex = i
                        }
                    }else{
                        pages[5].style.zIndex = 29;
                        pages[6].style.zIndex = 30;
                    }
                }
                break;
            case 7:
                paper7.classList.add("flipped");
                for(let i = 0; i < 28; i++) {
                    if(i != 6 && i != 7) {
                        if(i > 7) {
                            pages[i].style.zIndex = countDown2-1;
                            countDown2--;
                        }else{
                            pages[i].style.zIndex = i
                        }
                    }else{
                        pages[6].style.zIndex = 29;
                        pages[7].style.zIndex = 30;
                    }
                }
                break;
            case 8:
                paper8.classList.add("flipped");
                for(let i = 0; i < 28; i++) {
                    if(i != 7 && i != 8) {
                        if(i > 8) {
                            pages[i].style.zIndex = countDown2-1;
                            countDown2--;
                        }else{
                            pages[i].style.zIndex = i
                        }
                    }else{
                        pages[7].style.zIndex = 29;
                        pages[8].style.zIndex = 30;
                    }
                }
                break;
            case 9:
                paper9.classList.add("flipped");
                for(let i = 0; i < 28; i++) {
                    if(i != 8 && i != 9) {
                        if(i > 9) {
                            pages[i].style.zIndex = countDown2-1;
                            countDown2--;
                        }else{
                            pages[i].style.zIndex = i
                        }
                    }else{
                        pages[8].style.zIndex = 29;
                        pages[9].style.zIndex = 30;
                    }
                }
                break;
            case 10:
                paper10.classList.add("flipped");
                for(let i = 0; i < 28; i++) {
                    if(i != 9 && i != 10) {
                        if(i > 10) {
                            pages[i].style.zIndex = countDown2-1;
                            countDown2--;
                        }else{
                            pages[i].style.zIndex = i
                        }
                    }else{
                        pages[9].style.zIndex = 29;
                        pages[10].style.zIndex = 30;
                    }
                }
                break;
            case 11:
                paper11.classList.add("flipped");
                for(let i = 0; i < 28; i++) {
                    if(i != 10 && i != 11) {
                        if(i > 11) {
                            pages[i].style.zIndex = countDown2-1;
                            countDown2--;
                        }else{
                            pages[i].style.zIndex = i
                        }
                    }else{
                        pages[10].style.zIndex = 29;
                        pages[11].style.zIndex = 30;
                    }
                }
                break;
            case 12:
                paper12.classList.add("flipped");
                for(let i = 0; i < 28; i++) {
                    if(i != 11 && i != 12) {
                        if(i > 12) {
                            pages[i].style.zIndex = countDown2-1;
                            countDown2--;
                        }else{
                            pages[i].style.zIndex = i
                        }
                    }else{
                        pages[11].style.zIndex = 29;
                        pages[12].style.zIndex = 30;
                    }
                }
                break;
            case 13:
                paper13.classList.add("flipped");
                for(let i = 0; i < 28; i++) {
                    if(i != 12 && i != 13) {
                        if(i > 13) {
                            pages[i].style.zIndex = countDown2-1;
                            countDown2--;
                        }else{
                            pages[i].style.zIndex = i
                        }
                    }else{
                        pages[12].style.zIndex = 29;
                        pages[13].style.zIndex = 30;
                    }
                }
                break;
            case 14:
                paper14.classList.add("flipped");
                for(let i = 0; i < 28; i++) {
                    if(i != 13 && i != 14) {
                        if(i > 14) {
                            pages[i].style.zIndex = countDown2-1;
                            countDown2--;
                        }else{
                            pages[i].style.zIndex = i
                        }
                    }else{
                        pages[13].style.zIndex = 29;
                        pages[14].style.zIndex = 30;
                    }
                }
                break;
            case 15:
                paper15.classList.add("flipped");
                for(let i = 0; i < 28; i++) {
                    if(i != 14 && i != 15) {
                        if(i > 15) {
                            pages[i].style.zIndex = countDown2-1;
                            countDown2--;
                        }else{
                            pages[i].style.zIndex = i
                        }
                    }else{
                        pages[14].style.zIndex = 29;
                        pages[15].style.zIndex = 30;
                    }
                }
                break;
            case 16:
                paper16.classList.add("flipped");
                for(let i = 0; i < 28; i++) {
                    if(i != 15 && i != 16) {
                        if(i > 16) {
                            pages[i].style.zIndex = countDown2-1;
                            countDown2--;
                        }else{
                            pages[i].style.zIndex = i
                        }
                    }else{
                        pages[15].style.zIndex = 29;
                        pages[16].style.zIndex = 30;
                    }
                }
                break;
            case 17:
                paper17.classList.add("flipped");
                for(let i = 0; i < 28; i++) {
                    if(i != 16 && i != 17) {
                        if(i > 17) {
                            pages[i].style.zIndex = countDown2-1;
                            countDown2--;
                        }else{
                            pages[i].style.zIndex = i
                        }
                    }else{
                        pages[16].style.zIndex = 29;
                        pages[17].style.zIndex = 30;
                    }
                }
                break;
            case 18:
                paper18.classList.add("flipped");
                for(let i = 0; i < 28; i++) {
                    if(i != 17 && i != 18) {
                        if(i > 18) {
                            pages[i].style.zIndex = countDown2-1;
                            countDown2--;
                        }else{
                            pages[i].style.zIndex = i
                        }
                    }else{
                        pages[17].style.zIndex = 29;
                        pages[18].style.zIndex = 30;
                    }
                }
                break;
            case 19:
                paper19.classList.add("flipped");
                for(let i = 0; i < 28; i++) {
                    if(i != 18 && i != 19) {
                        if(i > 19) {
                            pages[i].style.zIndex = countDown2-1;
                            countDown2--;
                        }else{
                            pages[i].style.zIndex = i
                        }
                    }else{
                        pages[18].style.zIndex = 29;
                        pages[19].style.zIndex = 30;
                    }
                }
                break;
            case 20:
                paper20.classList.add("flipped");
                for(let i = 0; i < 28; i++) {
                    if(i != 19 && i != 20) {
                        if(i > 20) {
                            pages[i].style.zIndex = countDown2-1;
                            countDown2--;
                        }else{
                            pages[i].style.zIndex = i
                        }
                    }else{
                        pages[19].style.zIndex = 29;
                        pages[20].style.zIndex = 30;
                    }
                }
                break;
            case 21:
                paper21.classList.add("flipped");
                for(let i = 0; i < 28; i++) {
                    if(i != 20 && i != 21) {
                        if(i > 21) {
                            pages[i].style.zIndex = countDown2-1;
                            countDown2--;
                        }else{
                            pages[i].style.zIndex = i
                        }
                    }else{
                        pages[20].style.zIndex = 29;
                        pages[21].style.zIndex = 30;
                    }
                }
                break;
            case 22:
                paper22.classList.add("flipped");
                for(let i = 0; i < 28; i++) {
                    if(i != 21 && i != 22) {
                        if(i > 22) {
                            pages[i].style.zIndex = countDown2-1;
                            countDown2--;
                        }else{
                            pages[i].style.zIndex = i
                        }
                    }else{
                        pages[21].style.zIndex = 29;
                        pages[22].style.zIndex = 30;
                    }
                }
                break;
            case 23:
                paper23.classList.add("flipped");
                for(let i = 0; i < 28; i++) {
                    if(i != 22 && i != 23) {
                        if(i > 23) {
                            pages[i].style.zIndex = countDown2-1;
                            countDown2--;
                        }else{
                            pages[i].style.zIndex = i
                        }
                    }else{
                        pages[22].style.zIndex = 29;
                        pages[23].style.zIndex = 30;
                    }
                }
                break;
            case 24:
                paper24.classList.add("flipped");
                for(let i = 0; i < 28; i++) {
                    if(i != 23 && i != 24) {
                        if(i > 24) {
                            pages[i].style.zIndex = countDown2-1;
                            countDown2--;
                        }else{
                            pages[i].style.zIndex = i
                        }
                    }else{
                        pages[23].style.zIndex = 29;
                        pages[24].style.zIndex = 30;
                    }
                }
                break;
            case 25:
                paper25.classList.add("flipped");
                for(let i = 0; i < 28; i++) {
                    if(i != 24 && i != 25) {
                        if(i > 25) {
                            pages[i].style.zIndex = countDown2-1;
                            countDown2--;
                        }else{
                            pages[i].style.zIndex = i
                        }
                    }else{
                        pages[24].style.zIndex = 29;
                        pages[25].style.zIndex = 30;
                    }
                }
                break;
            case 26:
                paper26.classList.add("flipped");
                for(let i = 0; i < 28; i++) {
                    if(i != 25 && i != 26) {
                        if(i > 26) {
                            pages[i].style.zIndex = countDown2-1;
                            countDown2--;
                        }else{
                            pages[i].style.zIndex = i
                        }
                    }else{
                        pages[25].style.zIndex = 29;
                        pages[26].style.zIndex = 30;
                    }
                }
                break;
            case 27:
                paper27.classList.add("flipped");
                for(let i = 0; i < 28; i++) {
                    if(i != 26 && i != 27) {
                        if(i > 27) {
                            pages[i].style.zIndex = countDown2-1;
                            countDown2--;
                        }else{
                            pages[i].style.zIndex = i
                        }
                    }else{
                        pages[26].style.zIndex = 29;
                        pages[27].style.zIndex = 30;
                    }
                }
                break;
            case 28:
                paper28.classList.add("flipped");
                paper28.style.zIndex = 31;
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
                for(let i = 0; i < 28; i++) {
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
                for(let i = 0; i < 28; i++) {
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
                paper4.classList.remove("flipped");
                for(let i = 0; i < 28; i++) {
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
            case 6:
                paper5.classList.remove("flipped");
                for(let i = 0; i < 28; i++) {
                    if(i != 3 && i != 4) {
                        if(i > 4) {
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
            case 7:
                paper6.classList.remove("flipped");
                for(let i = 0; i < 28; i++) {
                    if(i != 4 && i != 5) {
                        if(i > 5) {
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
            case 8:
                paper7.classList.remove("flipped");
                for(let i = 0; i < 28; i++) {
                    if(i != 5 && i != 6) {
                        if(i > 6) {
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
            case 9:
                paper8.classList.remove("flipped");
                for(let i = 0; i < 28; i++) {
                    if(i != 6 && i != 7) {
                        if(i > 7) {
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
            case 10:
                paper9.classList.remove("flipped");
                for(let i = 0; i < 28; i++) {
                    if(i != 7 && i != 8) {
                        if(i > 8) {
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
            case 11:
                paper10.classList.remove("flipped");
                for(let i = 0; i < 28; i++) {
                    if(i != 8 && i != 9) {
                        if(i > 9) {
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
            case 12:
                paper11.classList.remove("flipped");
                for(let i = 0; i < 28; i++) {
                    if(i != 9 && i != 10) {
                        if(i > 10) {
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
            case 13:
                paper12.classList.remove("flipped");
                for(let i = 0; i < 28; i++) {
                    if(i != 10 && i != 11) {
                        if(i > 11) {
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
            case 14:
                paper13.classList.remove("flipped");
                for(let i = 0; i < 28; i++) {
                    if(i != 11 && i != 12) {
                        if(i > 12) {
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
            case 15:
                paper14.classList.remove("flipped");
                for(let i = 0; i < 28; i++) {
                    if(i != 12 && i != 13) {
                        if(i > 13) {
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
            case 16:
                paper15.classList.remove("flipped");
                for(let i = 0; i < 28; i++) {
                    if(i != 13 && i != 14) {
                        if(i > 14) {
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
            case 17:
                paper16.classList.remove("flipped");
                for(let i = 0; i < 28; i++) {
                    if(i != 14 && i != 15) {
                        if(i > 15) {
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
            case 18:
                paper17.classList.remove("flipped");
                for(let i = 0; i < 28; i++) {
                    if(i != 15 && i != 16) {
                        if(i > 16) {
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
            case 19:
                paper18.classList.remove("flipped");
                for(let i = 0; i < 28; i++) {
                    if(i != 16 && i != 17) {
                        if(i > 17) {
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
            case 20:
                paper19.classList.remove("flipped");
                for(let i = 0; i < 28; i++) {
                    if(i != 17 && i != 18) {
                        if(i > 18) {
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
            case 21:
                paper20.classList.remove("flipped");
                for(let i = 0; i < 28; i++) {
                    if(i != 18 && i != 19) {
                        if(i > 19) {
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
            case 22:
                paper21.classList.remove("flipped");
                for(let i = 0; i < 28; i++) {
                    if(i != 19 && i != 20) {
                        if(i > 20) {
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
            case 23:
                paper22.classList.remove("flipped");
                for(let i = 0; i < 28; i++) {
                    if(i != 20 && i != 21) {
                        if(i > 21) {
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
            case 24:
                paper23.classList.remove("flipped");
                for(let i = 0; i < 28; i++) {
                    if(i != 21 && i != 22) {
                        if(i > 22) {
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
            case 25:
                paper24.classList.remove("flipped");
                for(let i = 0; i < 28; i++) {
                    if(i != 22 && i != 23) {
                        if(i > 23) {
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
            case 26:
                paper25.classList.remove("flipped");
                for(let i = 0; i < 28; i++) {
                    if(i != 23 && i != 24) {
                        if(i > 24) {
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
            case 27:
                paper26.classList.remove("flipped");
                for(let i = 0; i < 28; i++) {
                    if(i != 24 && i != 25) {
                        if(i > 25) {
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
            case 28:
                paper27.classList.remove("flipped");
                
                for(let i = 0; i < 28; i++) {
                    if(i != 25 && i != 26) {
                        if(i > 26) {
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
            case 29:
                openBook();
                paper28.classList.remove("flipped");
                
                for(let i = 0; i < 28; i++) {
                    if(i != 26 && i != 27) {
                        if(i > 27) {
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
    }

}