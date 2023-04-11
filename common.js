// console.log('js')

// search icon, input 컨트롤 하기
const searchEl = document.querySelector('.search')
const searchInputEl = searchEl.querySelector('input')

searchEl.addEventListener('click',function(){
    //Logic..
    searchInputEl.focus()
})

searchInputEl.addEventListener('focus',function(){
    searchEl.classList.add('focused')
    searchInputEl.setAttribute('placeholder','통합검색')
})

searchInputEl.addEventListener('blur',function(){
    searchEl.classList.remove('focused')
    searchInputEl.setAttribute('placeholder','')
}) 

// thisYear
const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear() // 올해 연도 구하기 (2023)