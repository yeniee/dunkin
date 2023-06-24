
//전역변수
let ham_nav = document.querySelector(".ham_nav");
let mobile_gnb_wrap = document.querySelector(".mobile_gnb_wrap")

//mobile ver
let mobile_gnb_li = document.querySelectorAll(".mobile_gnb_li>a")
let mobile_sub_ul = document.querySelectorAll(".mobile_sub_ul")
let mobile_sub_li = document.querySelectorAll(".mobile_sub_li>a")
let mobile_gnb_third_ul = document.querySelectorAll(".mobile_gnb_third_ul")

//pc ver
let pc_gnb_ul = document.querySelector(".pc_gnb_ul")
let pc_gnb_li = document.querySelectorAll(".pc_gnb_li")
let pc_sub_ul = document.querySelectorAll(".pc_sub_ul");
let pc_sub_li = document.querySelectorAll(".pc_sub_li>a")
let pc_gnb_third_ul = document.querySelectorAll(".pc_gnb_third_ul")
let pc_gnb_third_li = document.querySelectorAll(".pc_gnb_third_li")

//slide ver
let slide_ul = document.querySelector(".slide_ul")
let slide_li = document.querySelectorAll(".slide_li")

hamnav(); //hamnav 실행
function hamnav(){
ham_nav.addEventListener('click', function(){ //ham_nav를 클릭할때마다 이벤트가 생김	
	ham_nav.classList.toggle('active'); // hamnav toggle
	mobile_gnb_wrap.classList.toggle('mobile_gnb_active') // mobile_nav toggle
	})
}

/*mobile버전 menu script*/
mobileMenuToggle()
function mobileMenuToggle(){
	for(let i=0; i<mobile_gnb_li.length; i++){
		mobile_gnb_li[i].addEventListener("click",function(){		
			mobile_sub_ul[i].classList.toggle("active")
		})
	}

	for(let i=0; i<mobile_sub_li.length; i++){
		mobile_sub_li[i].addEventListener("click",function(){
			mobile_gnb_third_ul[i].classList.toggle("active")
		})
	}	
}//end

pcMenuToggle();
function pcMenuToggle(){
	for(let i=0; i<pc_gnb_li.length; i++){
		pc_gnb_li[i].addEventListener("mouseover",function(){					
			 	pc_sub_ul[i].classList.add("active")			 
		})
	}	
	for(let i=0; i<pc_gnb_li.length; i++){
		pc_gnb_li[i].addEventListener("mouseleave",function(){				
			 	pc_sub_ul[i].classList.remove("active")		
		})
	}
}//end


function autoSlide(){

}






/*
mobile_sub_li을 클릭하면 
각각의 .mobile_gnb_third_ul 토글이 되어야 한다. (clickevent)

css에서 classList.toggle('mobile_gnb_third_li_act ive')
*/
/*auto sldie

5초마다 오른쪽에서 왼쪽으로 자동으로 슬라이드가 된다
for문을 사용하여 li의 length만큼 이동한다.


*/