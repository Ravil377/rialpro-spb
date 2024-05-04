$(document).ready(function(){
	
	$(() => {
		if (is_touch_device()) {
			$('.header___menu .navbar-nav li a.sub_link').addClass('touch_link')
			
			$('.header___menu .navbar-nav li a.sub_link').click(function(e) {
				const $dropdown = $(this).next()
				
				if (!$dropdown.is(':visible')) {
					e.preventDefault()
					
					$('.header___menu .navbar-nav .sub_menu').hide()
					$dropdown.show()
				}
			})
		}
	})
	
	
	const is_touch_device = () => !!('ontouchstart' in window)
	
	$('.sub_link').click(function(e){
		e.preventDefault;
		if ($(this).parent().hasClass('active')) $(this).parent().removeClass('active');
		else $(this).parent().addClass('active');
		return false;
	});
    
	var $menu=$(".navbar");
    /*$(window).scroll(function(){
        if($(this).scrollTop()>225&&$menu.hasClass("default")){
            $('.toTop').css('opacity','1');
            $menu.removeClass("default").addClass("fixed");
			}else if($(this).scrollTop()<=225&&$menu.hasClass("fixed")){
            $('.toTop').css('opacity','0');
            $menu.removeClass("fixed").addClass("default");
		}
	});*/
	
    $('a[href^="#"], a[href^="."]').click(function(){
        var scroll_el=$(this).attr('href');
        if($(scroll_el).length!=0){
            $('html, body').animate({
                scrollTop:$(scroll_el).offset().top
			},1000);
		}
        return false;
	});
    
    if($('.product_calcsumm').length){
        $( document ).on( "keyup click", '.product_calcsumm-input input', function(e){
            let a=parseInt($('.product_calcsumm-input input[name="size1"]').val());
            let b=parseInt($('.product_calcsumm-input input[name="size2"]').val());
            if(!a){
                a=0;
			}
            if(!b){
                b=0;
			}
            a=a/1000;
            b=b/1000;
            let c=a*b;
            let price=Math.floor(parseInt($('input[name="shk-price"]').val())*c);
            if(price!==0){
                $('.product_calcsumm-summ-value').text(price);
                $('.product_calcsumm-summ').show();
				}else{
                $('.product_calcsumm-summ').hide();
			}
            //console.log(Math.floor(price));
            return false;
		});        
	}

	
    $('.userGroup').click(function(){
        $('.userGroup').removeClass('active');
        $(this).addClass('active');
        if($(this).attr('rel')==0){
            $('.urForm').hide();
            $('.fizForm').show();
			}else{
            $('.fizForm').hide();
            $('.urForm').show();
		}
	});
	
    $('.overlay').click(function(){
        $('.modal').fadeOut();
        $('.overlay').fadeOut();
        $('#success').fadeOut();
        $('#shk_prodHelper').remove();
	});
	
    $('.close').click(function(){
        $('.modal').fadeOut();
        $('.overlay').fadeOut();
	});
	
    /**/
	
    $('.close_madal').click(function(){
        $('.opacity_madal').hide();
	});
	
    $('.opacity_madal').click(function(e){
        if($(e.target).closest(".madal_page").length) return;
        $(this).hide();
        e.stopPropagation();
	});    
	
    $('.ent').click(function(){
        $('.opacity_madal.auth').show();
	});
	
    $('.opacity_madal.auth .error').each(function(i,el){
        if($.trim($(el).text())!=''){
            $('.opacity_madal.auth').show();
		}
	});
	
    $('.reg').click(function(){
        $('.opacity_madal').hide();        
        $('.opacity_madal.registr').show();
	});
	
    $('.text-error').each(function(i,el){
        if($.trim($(el).text())!=''){
            $('.opacity_madal.registr').show();
		}
	});
	
    $('.alert-success').each(function(i,el){
        if($.trim($(el).text())!=''){
            $('.opacity_madal.registr').show();
		}
	});    
	
    $('.map').click(function(){
        $('.opacity_madal.maps').show();
	});
	
    $('.call').click(function(){
        $('.opacity_madal.callback').show();
	});
	
	$('.samples').click(function(){
        $('.opacity_madal.samples-form').show();
	});
	
    $('.ask').click(function(){
        $('.opacity_madal.quess').show();
	});
    
    $('.order-proj').click(function(){
        $('.opacity_madal.pro').show();
	});
	
    $('.order,.foritog button').click(function(){
        $('.opacity_madal.orders').show();
	});
	
    // Антиспам
    $('.ajax_form').append('<input type="text" name="org" value="" class="_org" style="visability:hidden; height: 0; width: 0; padding: 0; border:none;"/>')
    // Антиспам х  

	if ($(window).width() <= 768) {
		$('.main__top .navbar-toggle').click(function(){
			$('#topMenu').hide();
			$('#mainMenu').toggle();
			$('.sub_menu').toggle();
		});
	
		$('.header___menu .navbar-toggle').click(function(){
			$('#topMenu').toggle();
			$('#mainMenu').hide();
			$('.sub_menu').hide();
			$('#topMenu').width($(window).width());
			$('#topMenu').height('auto');
		});
	
	}
	
	if( $('.owl-carousel').length ){
		$('.owl-carousel').owlCarousel({
		    loop:true,
		    margin:10,
		    nav:true,
		    autoplay:true,
		    autoplayTimeout:8000,
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:2
		        },
		        1000:{
		            items:2
		        }
		    }
		});
	}

});  
/*

	////////////////////////
	///////// Настройки
	////////////////////////
	
	// количество снежинок, которое будет на экране одновременно.
	var snowmax=30
	
	// Цвета для снежинок. Для каждой конкретной снежинки цвет выбирается случайно из этого массива.
	var snowcolor=new Array("#b9dff5","#7fc7ff","#7fb1ff","#7fc7ff","#b9dff5")
	
	// Шрифт для снежинок
	var snowtype=new Array("Times")
	
	// Символ (*) и есть снежинка, в место нее можно вставить любой другой символ.
	var snowletter="&#10052;"
	
	// Скорость движения снежинок (от 0.3 до 2)
	var sinkspeed=0.4
	
	// Максимальный размер для снежинок
	var snowmaxsize=40
	
	// Минимальный размер для снежинок
	var snowminsize=10
	
	// Зона для снежинок
	// 1 для всей страницы, 2 в левой части страницы
	// 3 в центральной части, 4 в правой части страницы
	var snowingzone=1
	
	////////////////////////
	///////// Конец настроек
	////////////////////////
	
	var snow=new Array()
	var marginbottom
	var marginright
	var timer
	var i_snow=0
	var x_mv=new Array();
	var crds=new Array();
	var lftrght=new Array();
	var browserinfos=navigator.userAgent
	var ie5=document.all&&document.getElementById&&!browserinfos.match(/Opera/)
	var ns6=document.getElementById&&!document.all
	var opera=browserinfos.match(/Opera/)
	var browserok=ie5||ns6||opera
	
	function randommaker(range) {
    rand=Math.floor(range*Math.random())
    return rand
	}
	
	function initsnow() {
    if (ie5 || opera) {
	marginbottom = document.documentElement.clientHeight+50
	marginright = document.body.clientWidth-15
    }
    else if (ns6) {
	marginbottom = document.documentElement.clientHeight+50
	marginright = window.innerWidth-15
    }
    var snowsizerange=snowmaxsize-snowminsize
    for (i=0;i<=snowmax;i++) {
	crds[i] = 0;
	lftrght[i] = Math.random()*15;
	x_mv[i] = 0.03 + Math.random()/10;
	snow[i]=document.getElementById("s"+i)
	snow[i].style.fontFamily=snowtype[randommaker(snowtype.length)]
	snow[i].size=randommaker(snowsizerange)+snowminsize
	snow[i].style.fontSize=snow[i].size+'px';
	snow[i].style.color=snowcolor[randommaker(snowcolor.length)]
	snow[i].style.zIndex=1000
	snow[i].sink=sinkspeed*snow[i].size/5
	if (snowingzone==1) {snow[i].posx=randommaker(marginright-snow[i].size)}
	if (snowingzone==2) {snow[i].posx=randommaker(marginright/2-snow[i].size)}
	if (snowingzone==3) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/4}
	if (snowingzone==4) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/2}
	snow[i].posy=randommaker(2*marginbottom-marginbottom-2*snow[i].size)
	snow[i].style.left=snow[i].posx+'px';
	snow[i].style.top=snow[i].posy+'px';
    }
    movesnow()
	}
	
	function movesnow() {
    for (i=0;i<=snowmax;i++) {
	crds[i] += x_mv[i];
	snow[i].posy+=snow[i].sink
	snow[i].style.left=snow[i].posx+lftrght[i]*Math.sin(crds[i])+'px';
	snow[i].style.top=snow[i].posy+'px';
	
	if (snow[i].posy>=marginbottom-2*snow[i].size || parseInt(snow[i].style.left)>(marginright-3*lftrght[i])){
	if (snowingzone==1) {snow[i].posx=randommaker(marginright-snow[i].size)}
	if (snowingzone==2) {snow[i].posx=randommaker(marginright/2-snow[i].size)}
	if (snowingzone==3) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/4}
	if (snowingzone==4) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/2}
	snow[i].posy=0
	}
    }
    var timer=setTimeout("movesnow()",50)
	}
	
	for (i=0;i<=snowmax;i++) {
    document.body.insertAdjacentHTML('beforeend', "<span id='s"+i+"' style='user-select:none;position:fixed;top:-"+snowmaxsize+"'>"+snowletter+"</span>")
	}
	
	if (browserok) {
        window.onload=initsnow    
    }


*/