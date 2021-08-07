// JavaScript Document
$(function() {
 "use strict";

  function responsive_dropdown () {
    /* ---- For Mobile Menu Dropdown JS Start ---- */
      $("#menu span.opener, #menu-main span.opener").on("click", function(){
          var menuopener = $(this);
          if (menuopener.hasClass("plus")) {
             menuopener.parent().find('.mobile-sub-menu').slideDown();
             menuopener.removeClass('plus');
             menuopener.addClass('minus');
          }
          else
          {
             menuopener.parent().find('.mobile-sub-menu').slideUp();
             menuopener.removeClass('minus');
             menuopener.addClass('plus');
          }
          return false;
      });

      jQuery( ".mobilemenu" ).on("click", function() {
        jQuery( ".mobilemenu-content" ).slideToggle();
        if ($(this).hasClass("openmenu")) {
            $(this).removeClass('openmenu');
            $(this).addClass('closemenu');
          }
          else
          {
            $(this).removeClass('closemenu');
            $(this).addClass('openmenu');
          }
          return false;
      });
    /* ---- For Mobile Menu Dropdown JS End ---- */

    /* ---- For Sidebar JS Start ---- */
      $('.sidebar-box span.opener').on("click", function(){
      
        if ($(this).hasClass("plus")) {
          $(this).parent().find('.sidebar-contant').slideDown();
          $(this).removeClass('plus');
          $(this).addClass('minus');
        }
        else
        {
          $(this).parent().find('.sidebar-contant').slideUp();
          $(this).removeClass('minus');
          $(this).addClass('plus');
        }
        return false;
      });
    /* ---- For Sidebar JS End ---- */

    /* ---- For Footer JS Start ---- */
      $('.footer-static-block span.opener').on("click", function(){
      
        if ($(this).hasClass("plus")) {
          $(this).parent().find('.footer-block-contant').slideDown();
          $(this).removeClass('plus');
          $(this).addClass('minus');
        }
        else
        {
          $(this).parent().find('.footer-block-contant').slideUp();
          $(this).removeClass('minus');
          $(this).addClass('plus');
        }
        return false;
      });
    /* ---- For Footer JS End ---- */

     /* ---- For Navbar JS Start ---- */
    $('.navbar-toggle').on("click", function(){
      var menu_id = $('#menu');
      var nav_icon = $('.navbar-toggle i');
      if(menu_id.hasClass('menu-open')){
        menu_id.removeClass('menu-open');
        nav_icon.removeClass('fa-close');
        nav_icon.addClass('fa-bar');
      }else{
        menu_id.addClass('menu-open');
        nav_icon.addClass('fa-close');
        nav_icon.removeClass('fa-bar');
      }
      return false;
    });
    /* ---- For Navbar JS End ---- */

    /* ---- For Category Dropdown JS Start ---- */
    $('.btn-sidebar-menu-dropdown').on("click", function() {

      $('.cat-dropdown').slideToggle();

      if($(".sidebar-block").hasClass("open1")){
        $(".sidebar-block").addClass("close1").removeClass("open1");
      }else{
        $(".sidebar-block").addClass("open1").removeClass("close1");
      }
    });
    /* ---- For Category Dropdown JS End ---- */

    /* ---- For Content Dropdown JS Start ---- */
    $('.content-link').on("click", function() {
      $('.content-dropdown').toggle();
    });
    /* ---- For Content Dropdown JS End ---- */
  }

  /* ---- slidebar JS Start ---- */
  function slidebar_open(){
    $('.slidebar-open').on("click", function(){
      var menu_id = $('.shop-list');
      var nav_icon = $('.slidebar-open');
      if(menu_id.hasClass('menu-open')){
        menu_id.removeClass('menu-open');
        nav_icon.removeClass('fa-closed');
        nav_icon.addClass('fa-bar');
      }else{
        menu_id.addClass('menu-open');
        nav_icon.addClass('fa-closed');
        nav_icon.removeClass('fa-bar');
      }
      return false;
    });
  }
  /* ---- slidebar JS End ---- */

  function popup_dropdown () {
    /*---- Category dropdown start ---- */
      $('.cate-inner span.opener').on("click", function(){
      
        if ($(this).hasClass("plus")) {
          $(this).parent().find('.mega-sub-menu').slideDown();
          $(this).removeClass('plus');
          $(this).addClass('minus');
        }
        else
        {
          $(this).parent().find('.mega-sub-menu').slideUp();
          $(this).removeClass('minus');
          $(this).addClass('plus');
        }
        return false;
      });
    /*---- Category dropdown end ---- */
  }

  function popup_links() {
    /*---- Start Popup Links---- */
    $('.popup-with-form').magnificPopup({
      type: 'inline',
      preloader: false,
      focus: '#name',

      // When elemened is focused, some mobile browsers in some cases zoom in
      // It looks not nice, so we disable it:
      callbacks: {
        beforeOpen: function() {
          if($(window).width() < 700) {
            this.st.focus = false;
          } 
          else {
            this.st.focus = '#name';
          }
        }
      }
    });
    /*---- End Popup Links ---- */
    return false;
  }

   function popup_product() {
    /*---- Start Product Popup ---- */
    $('.popup-with-product').magnificPopup({
      type: 'inline',
      preloader: false,
      focus: '#name',

      // When elemened is focused, some mobile browsers in some cases zoom in
      // It looks not nice, so we disable it:
      callbacks: {
        beforeOpen: function() {
          if($(window).width() < 700) {
            this.st.focus = false;
          } else {
            this.st.focus = '#name';
          }
        }
      }
    });
    return false;
  }

   /*Load-More Js Start*/
  function load_more () {
    $(".latest-pro").slice(0, 8).show();
    $("#loadMore-latest").on('click', function (e) {
        e.preventDefault();
        $(".latest-pro:hidden").slice(0, 4).slideDown();
        if ($(".latest-pro:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
    });

    $(".featured-pro").slice(0, 8).show();
    $("#loadMore-featured").on('click', function (e) {
        e.preventDefault();
        $(".featured-pro:hidden").slice(0, 4).slideDown();
        if ($(".featured-pro:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
    });

    $(".most-viewed-pro").slice(0, 8).show();
    $("#loadMore-most").on('click', function (e) {
        e.preventDefault();
        $(".most-viewed-pro:hidden").slice(0, 4).slideDown();
        if ($(".most-viewed-pro:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
    });
  }

  /*Load-More Js Ends*/

  function owlcarousel_slider () {
    /* ------------ OWL Slider Start  ------------- */

      /* ----- pro_cat_slider Start  ------ */
      $('.pro-cat-slider').owlCarousel({
        items: 4,
        nav: true,
        dots: false,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
            },
            468:{
                items:2,
            },
            768:{
                items:3,
            },
            1200:{
                items:4,
            }
        }
      });
      /* ----- pro_cat_slider End  ------ */

      /* ----- sub_menu_slider Start  ------ */
      $('.sub_menu_slider').owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        loop:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            468:{
                items:1,
            },
            768:{
                items:1,
            },
            1200:{
                items:1,
            }
        }
      });
      /* -----sub_menu_slider End  ------ */

      /* ----- tab_slider Start  ------ */
      $('.tab_slider').owlCarousel({
        items: 4,
        nav: true,
        dots: false,
        loop:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
            },
            468:{
                items:2,
            },
            768:{
                items:3,
            },
            1200:{
                items:4,
            }
        }
      });
      /* ----- tab_slider End  ------ */

      /* ----- blog Start  ------ */
      $('#blog').owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        loop:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            1200:{
                items:2,
            }
        }
      });
      /* ----- blog End  ------ */

      /* ----- brand-logo Start  ------ */
      $('#brand-logo').owlCarousel({
        items: 6,
        nav: true,
        dots: false,
        loop:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            480:{
                items:2,
            },
            768:{
                items:3,
            },
            1770:{
                items:6,
            }
        }
      });
      /* ----- brand-logo End  ------ */

       /* ----- our-team Start  ------ */
      $('.our-team').owlCarousel({
        items: 5,
        nav: true,
        dots: false,
        loop:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
            },
            501:{
                items:2,
            },
            992:{
                items:4,
            },
            1770:{
                items:5,
            }
        }
      });
      /* ----- our-team End  ------ */

      /* ---- main-banner Testimonial Start ---- */
      $(".main-banner, #sidebar-product, #client").owlCarousel({
     
        //navigation : true,  Show next and prev buttons
        items: 1,
        nav: true,
        slideSpeed : 300,
        paginationSpeed : 400,
        loop:true,
        autoPlay: false,
        dots: true,
        singleItem:true,
        nav:true
      });
      /* ----- main-banner Testimonial End  ------ */
      return false;
    /* ------------ OWL Slider End  ------------- */
  }

  function scrolltop_arrow () {
   /* ---- Page Scrollup JS Start ---- */
   //When distance from top = 250px fade button in/out
    var scrollup = $('.scrollup');
    var headertag = $('header');
    var mainfix = $('.main');
    $(window).scroll(function(){
      if ($(this).scrollTop() > 0) {
          scrollup.fadeIn(300);
      } else {
          scrollup.fadeOut(300);
      }

      /* header-fixed JS Start */
      if ($(this).scrollTop() > 130){
         headertag.addClass("header-fixed");
      }
      else{ 
         headertag.removeClass("header-fixed");
      }

      /* main-fixed JS Start */
      if ($(this).scrollTop() > 0){
         mainfix.addClass("main-fixed");
      }
      else{ 
         mainfix.removeClass("main-fixed");
      }
      /* ---- Page Scrollup JS End ---- */
    });
    
    //On click scroll to top of page t = 1000ms
    scrollup.on("click", function(){
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });
  }

  function custom_tab() {
    
    /* ------------ Account Tab JS Start ------------ */
    $('.account-tab-stap').on('click', 'li', function() {
        $('.account-tab-stap li').removeClass('active');
        $(this).addClass('active');
        
        $(".account-content").fadeOut();
        var currentLiID = $(this).attr('id');
        $("#data-"+currentLiID).fadeIn();
        return false;
    });
    /* ------------ Account Tab JS End ------------ */
  }

  /* Price-range Js Start */
  function price_range () {
      $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 800,
        values: [ 75, 500 ],
        slide: function( event, ui ) {
          $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
      });
      $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) + " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  }
  /* Price-range Js End */

  /*Select Menu Js Start*/
  function option_drop() {
    $( ".option-drop" ).selectmenu();
    return false;
  }
  /*Select Menu Js Ends*/

  /*countdown-clock Js Start*/
  function countdown_clock() {
    $('.countdown-clock').downCount({
      date: '03/04/2022 11:39:00',
          offset: +10
      }, 
      function () {
        //alert('done!'); Finish Time limit
      return false;
    });
  }
  /*countdown-clock Js End*/

  /* Product Detail Page Tab JS Start */
  function description_tab () {
    $("#tabs li a").on("click", function(e){
      var title = $(e.currentTarget).attr("title");
      $("#tabs li a , .tab_content li div").removeClass("selected");
      $(".tab-"+title +", .items-"+title).addClass("selected");
      $("#items").attr("class","tab-"+title);

      return false;
    });
  }
  /* Product Detail Page Tab JS End */

  function search_open () {
    $('li.search-box').on('click', function(){
      $('.sidebar-search-wrap').addClass('open').siblings().removeClass('open');
      return false;
    });
  }

  /*Search-box-close-button*/

  $('.search-closer').on('click', function() {
      var sidebar = $('.sidebar-navigation');
      var nav_icon = $('.navbar-toggle i');
      if(sidebar.hasClass('open')){
        //sidebar.removeClass('open');
      }else{
        sidebar.addClass('open');
        nav_icon.addClass('fa-search-close');
        nav_icon.removeClass('fa-search-bars');
      }

      $('.sidebar-search-wrap').removeClass('open');
      return false;
  });



  function location_page () {
    // Animate loader off screen
    var url = (window.location.href);
    var stepid = url.substr(url.indexOf("#") + 1);

    if($("ul").hasClass("account-tab-stap") && (window.location.hash) ) {
      if($("#"+stepid).length){
        $(".account-tab-stap li").removeClass("active");
        $("#"+stepid).addClass("active");

        if($("#data-"+stepid).length){
          $(".account-content").css("display","none");
          $("#data-"+stepid).css("display","block");
        }
      }
    }
    
  }

    /* grid_list_view Tab JS Start */
    function grid_list_view() {
    $('.shorting .view').on('click', '.list-types', function() {
      if($(this).hasClass("list")){
        $(this).addClass("active");
        $(".shorting .view .list-types.grid").removeClass("active");
        $(".product-listing").removeClass("grid-type").addClass("list-type");
        $(".product-listing .img-col").removeClass("col-12").addClass("col-4");
        $(".product-listing .detail-col").removeClass("col-12").addClass("col-8");
      }
      if($(this).hasClass("grid")){
        $(this).addClass("active");
        $(".shorting .view .list-types.list").removeClass("active");
        $(".product-listing").removeClass("list-type").addClass("grid-type");
        $(".product-listing .img-col").removeClass("col-4").addClass("col-12");
        $(".product-listing .detail-col").removeClass("col-8").addClass("col-12");
      }
    });
  }
    /* grid_list_view Tab JS End */


  $(document).on("ready", function() {
    owlcarousel_slider(); 
    price_range (); 
    responsive_dropdown(); 
    description_tab (); 
    search_open (); 
    custom_tab (); 
    scrolltop_arrow (); 
    popup_dropdown (); 
    popup_product(); 
    countdown_clock(); 
    slidebar_open(); 
    option_drop(); 
    popup_links(); 
    location_page(); 
    grid_list_view();
    load_more ();
    
  });

});

  $( window ).on( "load", function() {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");
  });

  //btn click print
  function printDiv(divName) {
   var printContents = document.getElementById(divName).innerHTML;
   var originalContents = document.body.innerHTML;
   document.body.innerHTML = printContents;
   window.print();
   document.body.innerHTML = originalContents;
   return false;
  }
