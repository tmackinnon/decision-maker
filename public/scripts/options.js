$(() => {

  /**
 * Escapes unsafe characters
 * @param {string} str - any sequence of characters
 * @returns same string
 */
const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

/**
 *
 * @param {object} option
 * @returns jquery object with html structure
 */
const createOption = (option) => {
  const $option = $(`
  <div class="option-instance">
    <div class="option-info">
      <div class="option-title-info">
        <h3>${escape(option.title)}</h3>
      </div>
      <div class="option-description-info">
        <p>${option.description ? escape(option.description) : ''}</p>
      </div>
    </div>
    <button class="delete-option" id=${escape(option.id)}>Delete</button>
  </div>
  `);

  return $option;
}

  $('.new-option').on('submit', function (event) {
    event.preventDefault();
    const data = $(this).serialize();

    $.post('/options', data)
    .then(response =>  createOption(response))
    .then(element => $('.option-container').prepend(element))
    .then( () => {
      $('#option-title-input').val('');
      $('#option-description-input').val('');
    })
  })

});
