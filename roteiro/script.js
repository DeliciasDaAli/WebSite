//----------------------------- EFEITO PARALLAX -----------------------------
jQuery(function () {
  jQuery('#home, #hometwo').click(function () {
    jQuery('html').animate({ scrollTop: 0 }, 1000)
  })
  jQuery('#pag1, #pag11').click(function () {
    jQuery('html').animate(
      { scrollTop: jQuery('#produtos').offset().top - 60 },
      1000
    )
  })
  jQuery('#pag2, #pag22').click(function () {
    jQuery('html').animate(
      { scrollTop: jQuery('#contato').offset().top - 20 },
      1000
    )
  })
  jQuery('#pag3, #pag33').click(function () {
    jQuery('html').animate(
      { scrollTop: jQuery('#contato').offset().top - 20 },
      1000
    )
  })
  jQuery('#sal').click(function () {
    jQuery('html').animate(
      { scrollTop: jQuery('#salgado').offset().top - 70 },
      1000
    )
  })
  jQuery('#doc').click(function () {
    jQuery('html').animate(
      { scrollTop: jQuery('#doce').offset().top - 70 },
      1000
    )
  })
  jQuery('#beb').click(function () {
    jQuery('html').animate(
      { scrollTop: jQuery('#bebidas').offset().top - 70 },
      1000
    )
  })
  jQuery('#botao').click(function () {
    jQuery('html').animate(
      { scrollTop: jQuery('#contato').offset().top - 50 },
      1000
    )
  })
})

//--------menu---------//
$(function () {
  $('.menu i').click(function () {
    $('.submenu').animate(
      {
        height: 'toggle',
        opacity: 'toggle'
      },
      500
    )
  })
})
$(function () {
  $('.submenu a, .menu h1').click(function () {
    $('.submenu').animate(
      {
        height: 'hide',
        opacity: 'hide'
      },
      500
    )
  })
})
