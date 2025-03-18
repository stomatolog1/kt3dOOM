let id1 = document.getElementById("1").innerHTML
let id2 = document.getElementById("6").innerHTML

let level1 = document.getElementById("first")
let level2 = document.getElementById("second")
let lop1 = document.getElementById("1").querySelector(".red-Kvodratic")
console.log(lop1)


function lvl1(level){
    level.addEventListener("click",  function(){
        if (this.querySelector(".mines").innerText === "+"){
            this.nextElementSibling.innerHTML += id1 
            this.querySelector(".mines").innerText = "-"

            this.nextElementSibling.querySelector("#otchet").addEventListener("click",  function(){
                if (this.querySelector(".mines").innerText === "+"){
                    this.childNodes[11].innerHTML += id2
                    this.querySelector(".mines").innerText = "-"
                } 
                else{
                    this.childNodes[11].innerHTML = ""
                    this.querySelector(".mines").innerText = "+"
                }
            })
            this.nextElementSibling.querySelector("#zaruba").addEventListener("click",  function(){
                if (this.querySelector(".mines").innerText === "+"){
                    this.childNodes[11].innerHTML += id2
                    this.querySelector(".mines").innerText = "-"
                } 
                else{
                    this.childNodes[11].innerHTML = ""
                    this.querySelector(".mines").innerText = "+"
                }
            })
        } 
        else{
            this.nextElementSibling.innerHTML = "" 
            this.querySelector(".mines").innerText = "+"
        }
    })
}
lvl1(level1);
lvl1(level2);

document.getElementById("1").innerHTML = ""
document.getElementById("6").innerHTML = ""