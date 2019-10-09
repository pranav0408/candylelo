var nav = () =>{
    var nav = document.querySelector('.nav')
    if( window.scrollY > 500 ){
        nav.style['transform'] = "translate(-50%,-40%)"
        nav.style['height'] = "auto"
        nav.style['padding'] = "5px"
        nav.style['box-shadow'] = "0px 0px 5px 5px rgba(0,0,0,0.1)"
    }
    else{
        nav.style['padding'] = "20px"
        nav.style['transform'] = "translate(-50%,0%)"
        nav.style['box-shadow'] = "none"
    }
}