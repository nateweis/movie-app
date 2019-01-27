$(() => {

  const $add = $('input[type="button"]');

  $add.on('click',(clkd) => {
    const name = clkd.currentTarget.title;
    const $input = $('<input>');
    $input.attr('type','text');
    $input.attr('name',name);
    $input.insertAfter(clkd.currentTarget);
  })










})
