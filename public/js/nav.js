$(() => {
  const $user = $('.userBtn');
  const $x = $('span');

  $user.on('click',(clkd) => {
    const target = clkd.currentTarget.id
    if(target === 'signup'){
      $('.signup').show()
      $('.login').hide()
    }
    if(target === 'login'){
      $('.signup').hide()
      $('.login').show()
    }
  })


  $x.on('click',() => {
    $('.modal').hide()
  })


  $('.search').on('click',() => {
    $('.drop-1').toggleClass('hidden')
  })













})
