$(() => {
  console.log('hi');
  $('.new-option').on('submit', function (event) {
    event.preventDefault();
    console.log('submit');

    const data = $(this).serialize();
    console.log(data);





  })
});
