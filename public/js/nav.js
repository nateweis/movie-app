$(() => {
  const $user = $('.userBtn');
  const $x = $('span');

  // modal show on log btn
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

  // modal hide on X click
  $x.on('click',() => {
    $('.modal').hide()
  })

  // dropdowns on clicking divs
  $('.search').on('click',() => {
    $('.drop-1').toggleClass('hidden')
    $('.drop-2').addClass('hidden')
  })

  $('#catigory').on('click',() => {
    $('.year').addClass('hidden')
    $('.rated').addClass('hidden')
    $('.catigory').toggleClass('hidden')
  })
  $('#year').on('click',() => {
    $('.catigory').addClass('hidden')
    $('.rated').addClass('hidden')
    $('.year').toggleClass('hidden')
  })
  $('#rated').on('click',() => {
    $('.catigory').addClass('hidden')
    $('.year').addClass('hidden')
    $('.rated').toggleClass('hidden')
  })












})
