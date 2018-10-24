$(document).ready(function () {
  var form = $('form');

  $.validator.addMethod('checkName', function (value, element) {
    return this.optional(element) || value == value.match(/[\w]{5,32}/);
  });
  $.validator.addMethod('checkPass', function (value, element) {
    // chứa ít nhất 1 kí tự in hoa in thuong ki tu dac biet
    return this.optional(element) || value == value.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/);
  });
  $.validator.addMethod('checkEmail', function (value, element) {
    return this.optional(element) || value == value.match(/^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/gm);
  });
  $.validator.addMethod('checkUrl', function (value, element) {
    return this.optional(element) || value == value.match(/^(?:(?:https?|HTTPS?|ftp|FTP):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-zA-Z\u00a1-\uffff0-9]-*)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]-*)*[a-zA-Z\u00a1-\uffff0-9]+)*)(?::\d{2,})?(?:[\/?#]\S*)?$/);
  });
  form.validate({
    rules: {
      txtName: {
        required: true,
        checkName: true
      },
      txtPass: {
        required: true,
        checkPass: true
      },
      txtConfirmPass: {
        required: true,
        checkPass: true
      },
      checkDate: {
        required: true,
        checkDate: true
      },
      // checkDateTo: {
      //   required: true
      // },
      txtEmail: {
        required: true,
        checkEmail: true
      },
      txtUrl: {
        required: true,
        checkUrl: true
      }
    },
    messages: {
      txtName: {
        required: 'required',
        checkName: 'lenght Name from 5 to 32 characters, not space'
      },
      txtPass: {
        required: 'moi nhap pass',
        checkPass: 'pass sai dinh dang'
      },
      txtConfirmPass: {
        required: 'moi nhap pass confirm',
        checkPass: 'confirmpass sai dinh dang'
      },
      checkDate: {
        required: 'moi chon date',
        checkDate: 'date'
      },
      // checkDateTo: {
      //   required: 'moi nhap dateTo'
      // },
      txtEmail: {
        required: 'moi nhap email',
        checkEmail: 'email sai dinh dang'
      },
      txtUrl: {
        required: 'moi nhap url',
        checkUrl: 'url sai dinh dang'
      }
    },
    highlight: function highlight(element) {
      $(element).addClass('is-invalid').removeClass('is-valid');
    },
    unhighlight: function unhighlight(element) {
      $(element).removeClass('is-invalid');
    },
    submitHandler: function confirmPass(f, $event) {
      $event.preventDefault();
      var pass = $('#txtPass');
      var confirmPass = $('#txtConfirmPass');
      checkPass(pass.val(), confirmPass.val()) ? (alert('success'), f.submit()) : (console.log('lech pass b oi'), pass.css("color", "red"));
    }
  });

  function checkPass(pass1, pass2) {
    if (pass1 === pass2) {
      return true;
    } else {
      return false;
    }
  }

  var cleaveDate = new Cleave('.myDate', {
    date: true,
    datepattern: ['Y', 'm', 'd']
  });
});
