//=require jquery-3.3.1.min.js
$(function(){
    var flag = true;
    $('.reg').on('click', function(e){
        e.preventDefault();
        
        if(flag){
            flag = false;
            $('.container').show('slow');
            $('.containerReg').hide();
        }
    });
});
