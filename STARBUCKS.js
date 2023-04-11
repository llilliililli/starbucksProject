

// 아래로 스크롤 시, 일정 구간에서 badge 사리지게 하기
const badgeEl = document.querySelector('header .badges')
//TO-TOP BUTTON
const toTopEl = document.querySelector('#to-top')

// 스크롤 될 때마다, 함수가 빠르게 실행 -> 과부하 발생
// window.addEventListener('scroll',function(){
//     console.log('scroll')
// })

// lodash.js를 적용하여, 스크롤 될 때마다, 함수를 0.3(300)초 간격으로 실행 -> 과부화 방지 
window.addEventListener('scroll',_.throttle(function(){
    console.log(window.scrollY)
    if(window.scrollY > 500){
        // 배지 숨기기
        // gsap 애니메이션 기능 사용
        // gsap.to(요소, 지속시간, 옵션)
        gsap.to(badgeEl,.6,{
            opacity:0,
            display : 'none'
        }) // gsap 애니메이션 이용하여, 사라지기
        // badgeEl.style.display = 'none' // style 이용하여, 사라지기

        //TO-TOP 버튼 보이기
          //TO-TOP 버튼 숨기기
          gsap.to(toTopEl,.2,{
            x: 0
        })


    }else{
        // 배지 보이기
        gsap.to(badgeEl,.6,{
            opacity:1,
            display : 'block'
        }) // gsap 애니메이션 이용하여, 보이기
        // badgeEl.style.display = 'block' // style 이용하여, 보이기

        //TO-TOP 버튼 숨기기
        gsap.to(toTopEl,.2,{
            x: 100
        })
    }
},300))
// _.throttle(함수,시간)

// TO-TOP BUTTON CLICK 시, 동작
toTopEl.addEventListener('click',function(){
    gsap.to(window,.7,{
        scrollTo: 0
    })
})

// Section 이미지들 하나씩 순차적으로 보이게 하기
const fadeEls = document.querySelectorAll('.visual .fade-in')
fadeEls.forEach(function(fadeEl,index){
    gsap.to(fadeEl,1,{
        delay: ( index+1 ) *.7, /* 이미지가 순차적으로 딜레이 되도록 설정 0 -> 0.7 -> 1.4 */
        opacity:1
    })
}) 


// SWIPER
//new Swiper(선택자,옵션)
new Swiper('.notice-line .swiper',{
     direction:'vertical',
     autoplay:true,
     loop:true
});


new Swiper('.promotion .swiper',{
    slidesPerView:3, //  한 번에 보여줄 슬라이드 개수
    spaceBetween:10, // 슬라이드 사이 여백
    centeredSlides:true, // 1번 슬라이드가 가운데 보이기 
    loop:true,
    autoplay:{
        delay:3000
    },
    pagination:{
        el:'.promotion .swiper-pagination', // 페이지 번호요소 선택자
        clickable: true // 사용자가 페이지 번호요소 제어 가능
    },
    navigation:{
        prevEl:'.promotion .swiper-prev',
        nextEl:'.promotion .swiper-next'
    }
})

// AWARDS SWIPER
new Swiper('.awards .swiper',{
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
    }
})



// Promotion Toggle
const promotionEl = document.querySelector('.promotion')
const promotionToggleBtn = document.querySelector('.toggle-promotion')

let isHidePromotion = false;

promotionToggleBtn.addEventListener('click',function(){
    isHidePromotion = !isHidePromotion
    if(isHidePromotion){
        //숨김 처리
        promotionEl.classList.add('hide')
    }else{
        //보임 처리
        promotionEl.classList.remove('hide')
    }
})




// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

// floating Icon
function floatingObject(selector,delay,size){
    // gsap.to(요소, 지속시간, 옵션)
    gsap.to(selector,random(1.5,2.5),{
        y: size,
        repeat: -1, // -1 : 무한반복
        yoyo: true, // 한 번 동작한 애니메이션 역재생
        ease: Power1.easeInOut, // gsap easing 사용
        delay: random(0,delay)
    })
}



// floating Icon 동작
floatingObject('.floating1',1,15)
floatingObject('.floating2',5,15)
floatingObject('.floating3',1.5,20)

// ScrollMagic.js
const spyEls = document.querySelectorAll('section.scroll-spy')

spyEls.forEach(function (spyEl){
    new ScrollMagic
        .Scene({
            triggerElement : spyEl, //보여줌의 여부를 감시할 요소를 지정
            triggerHook : .8 // 뷰포트의 어떤 지점에서 감시되었는지 판단하는 기준 
        }) 
        .setClassToggle(spyEl,'show')
        .addTo(new ScrollMagic.Controller())
})
