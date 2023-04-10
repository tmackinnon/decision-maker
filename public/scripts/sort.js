$(() => {
  $('.options-table tbody').sortable({
    update: function (event, ui) {
      console.log($(this));
    }
  });
});
