window.onload = function(){
    
    
    var btns = document.querySelectorAll('input[type=button]'),
        inp1 = document.querySelector('input[name=inp1]'),
        inp2 = document.querySelector('input[name=inp2]'),
        res = document.querySelector('span');
        
   
    for(var i = 0 ; i < btns.length ; i++){
        
        btns[i].onclick = function(){
            if(this.hasAttribute('data-plus')){
                    var calc = parseInt(inp1.value) + parseInt(inp2.value);
                    res.innerHTML = calc;
            }
            
            if(this.hasAttribute('data-subtract')){
                    var calc = parseInt(inp1.value) - parseInt(inp2.value);
                    res.innerHTML = calc;
            }
            
            if(this.hasAttribute('data-division')){
                    var calc = parseInt(inp1.value) / parseInt(inp2.value);
                    res.innerHTML = calc;
            }
            
            if(this.hasAttribute('data-multiply')){
                    var calc = parseInt(inp1.value) * parseInt(inp2.value);
                    res.innerHTML = calc;
            }
        }
    }
}