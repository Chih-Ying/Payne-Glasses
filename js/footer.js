// JavaScript Document
$(".footer_up_search_right").click(function(){
    $(this).css("outline",'0')
    var regex = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
    var input_value=$(".footer_up_search_left").val().trim()

    if(input_value==''){
        $('#footer_up_search_result').text('This is a required field.');
    }else if(regex.test(input_value)){
        $.ajax({
            url:"/customer/Exchange/NewAction/",
            type:'post',
            crossDomain:true,
            data:{
                "email":input_value
            },
            success:function(data,textStatus){
                var data = eval("("+data+")")
                if(data){
                    var html = "";
                    if(data.status == 1 ){
                        html +='<div class="message1 message-success success">';
                        html +='<div id="pslogin-messages-message-success">'+data.msg+'</div>';
                        html +='</div>';
                    }else{
                        html +='<div class="message1 message-error error">';
                        html +='<div id="pslogin-messages-message-error">'+data.msg+'</div>';
                        html +='</div>';
                    }
                    if(data.msg && html){
                        $(".messages1").html(html);
                        $(".messages1").removeClass("hide");
                        $('#footer_up_search_result').text('');
                        $('html, body').animate({scrollTop: 0}, 600);
                    }
                }
            },
            error:function(err,extStatus){
                $('#footer_up_search_result').text('There was a problem with the subscription: This email address is already assigned to another user.');
            }
        });
    }else{
        $('#footer_up_search_result').text('Please enter a valid email address (Ex: johndoe@domain.com).');
    }
})