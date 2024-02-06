//1 ek div banao uspar mouse chale to picture pop hojaaye aur phir dafa ho jaya
//2 humara mouse jab chal raha hai, to kai baar chal rha hai jiske wajah se kkai baar card create ho jaya ga and wo hum nahi chaate
//3 mouse jitni baar chal raha hai chale bas execution of function kam baar ho
// 4 trotting - kisi particulur code ke no of execution ko kam kardena


// 1
// document.querySelector("#center")
// .addEventListener("mousemove", function(dets){
//     //1 console.log(dets.clientX, dets.clientY);
//     console.log("card banao");
// })


// 1 har bar ek div banao
// 1(i) div ko absolute banao ek width and height do overflow hidden karo and div ke andar image ko neecha pusjh kardo image ko animated way mein upar laao
 
        const throttleFunction = (func, delay) => {
 
            let prev = 0;
            return (...args) => {
                let now = new Date().getTime(); 
                if (now - prev > delay) {
                    prev = now;
                    return func(...args);
                }
            }
        }
        document.querySelector("#center")
        .addEventListener(
            "mousemove",
            throttleFunction((dets) => {
                // console.log("chala")
              //  Your less repeatation code
              var div = document.createElement("div");
              div.classList.add("imagediv");
              div.style.left = dets.clientX+ 'px';
              div.style.top = dets.clientY+ 'px';

              var img = document.createElement("img");
              img.setAttribute("src", "https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
              div.appendChild(img);

              document.body.appendChild(div);

              gsap.to(img, {
                y: "0",
                ease: Power1,
                duration: .6
              });  

              gsap.to(img, {
                y: "100%",
                delay: .6,
                ease: Power2,
                duration: .2
              });  


              setTimeout(function(){
                div.remove();
              }, 2000)
            }, 400));
