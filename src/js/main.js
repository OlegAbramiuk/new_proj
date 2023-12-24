//=require jquery-3.3.1.min.js
$(function(){
    var flag = true;
    $('.reg').on('click', function(e){
        
        if(flag){
            flag = false;
            $('.container').show('slow');
            $('.containerReg').hide();
        } else {
            flag = true;
            $('.containerReg').show('slow');
            $('.container').hide();
        }
    });
});
