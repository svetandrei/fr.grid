(function(){
  $('#select__item').select2({
    minimumResultsForSearch: Infinity,
    width: '175px',
  });
  $('.select2-selection__arrow b').append('<svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '<path d="M1 0.656853L6.65686 6.31371L12.3137 0.656851" />\n' +
    '</svg>');

  var myElement = document.getElementById('simple-bar');
  new SimpleBar(myElement, { autoHide: false });

  var selector = document.getElementById("phone");

  var mPhone = new Inputmask("+7(999) 999-99-99");
  mPhone.mask(selector);

  const validation = new JustValidate('#form');

  validation
    .addField('#name', [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Поле должно содержать минимум 3 символа',
      },
      {
        rule: 'maxLength',
        value: 30,
        errorMessage: 'Поле должно содержать максимум 30 символов',
      },
      {
        rule: 'required',
        errorMessage: 'Вы не ввели имя',
      },
    ])
    .addField('#phone', [
      {
        rule: 'required',
        errorMessage: 'Вы не ввели телефон',
      },
      {
        validator: () => {
          const phone = selector.inputmask.unmaskedvalue();
          return Number(phone) && phone.length === 10
        },
        errorMessage: 'Телефон должен содержать 10 цифр',
      },
    ])
    .addField('#email', [
      {
        rule: 'required',
        errorMessage: 'Вы не ввели e-mail',
      },
      {
        rule: 'email',
        errorMessage: 'Email не действителен!',
      },
    ]);

})();
