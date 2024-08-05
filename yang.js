const bg = document.querySelector('.home');
document.addEventListener('scroll',(e)=>{
    const value = window.scrollY;
    
    if(value!==0){
        bg.style.backgroundPosition = `calc(60% + ${value}*0.5px) calc(-800px + ${value}*2px)`;
    }else{
        bg.style.backgroundPosition = '';
    
    }
}
)
const ul=document.getElementsByTagName('ul')[0]
ul.addEventListener('click',(e)=>{
    if(e.target.parentNode.tagName==='LI'){
        let index = Array.from(ul.children).indexOf(e.target.parentNode)
        if(index===0){
            window.location.href="https://user.qzone.qq.com/3448894277";
            
        }else if(index===1){
            alert('y18166411722')
        }else if(index===2){
            alert('没有')
        }else if(index===3){
            window.location.href=''
        }else if(index===4){
            alert('yangyin18')
        }
        
        // let index=Array.from(ul.children).indexOf(e.target.parentNode)
        // alert(index)
    }
})

    