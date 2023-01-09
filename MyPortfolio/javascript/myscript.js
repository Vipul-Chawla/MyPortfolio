function changeColor(element){
    Array.from(document.getElementsByTagName('li')).forEach((ele)=>{
        ele.getElementsByTagName('a')[0].style.color = "var(--text-black-900)";
        console.log(ele)
    })
    element.style.color = "var(--skin-color)";
    console.log('vai')
}



