$(document).ready(function () {
  var numerator = 4;
  var denominator = 2;
  var numright = 0;
  var outof = 0;
  var operation = 'subtraction';
  var sign = '-';
  var range = 10;
  var wrongList = []
  let currentUser
  let additionNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  let subtractionNumbers = [0, 1, 2]
  let multiplicationNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  let divisionNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const host = "http://localhost:5000"

  function incorrect(num, den, sign) {
    console.log('incorrect (' + num + sign + den + '=' + $('#answerInput').val() + ')')
    wrongList.push([num + sign + den + '=' + $('#answerInput').val() + '\n'])
  }

  function getDenominator() {
    if (operation == 'addition') {
      console.log(additionNumbers[Math.round(Math.random() * additionNumbers.length - 1)])
      return additionNumbers[parseInt(Math.random() * additionNumbers.length)]
    } else if (operation == 'subtraction') {
      console.log(Math.random() * subtractionNumbers.length - 1)
      return subtractionNumbers[parseInt(Math.random() * subtractionNumbers.length)]
    } else if (operation == 'multiplication') {
      console.log(Math.random() * multiplicationNumbers.length - 1)
      return multiplicationNumbers[parseInt(Math.random() * multiplicationNumbers.length)]
    } else if (operation == 'division') {
      console.log(Math.random() * divisionNumbers.length - 1)
      return divisionNumbers[parseInt(Math.random() * divisionNumbers.length)]
    }
  }

  function getProblem() {
    numerator = Math.round(Math.random() * range);
    denominator = getDenominator()

    if (operation == 'subtraction' || operation == 'division') {
      if (numerator < denominator) {
        denominator = [numerator, numerator = denominator][0];
      };
    };
    $('#numerator').html('<p>&nbsp&nbsp&nbsp' + numerator + '</p>');
    $('#denominator').html('<p><u>' + sign + denominator + '</u></p>');
    $('#answerInput').focus();



  }

  $('#newUser').submit(function (e) {
    $.ajax({
      url: `${host}/flashcards/user`,
      type: 'post',
      data: $('#newUser').serialize(),
      success: function (data) {
        console.log(data)
        currentUser = data
        console.log(data)
        if (currentUser != 'username already exists') {
          $('#playerWelcome').html('Welcome ' + currentUser + '!!')
            .show()
          $('.close').trigger('click')
          additionNumbers = data.addition_numbers;
          subtractionNumbers = data.subtraction_numbers;
          multiplicationNumbers = data.multiplication_numbers;
          divisionNumbers = data.division_numbers;
        }
      }
    });
    e.preventDefault()
  })

  $('#getUser').submit(function (e) {
    $.ajax({
      url: `${host}/flashcards/getuser`,
      type: 'post',
      data: $('#getUser').serialize(),
      success: function (data) {
        currentUser = data.username
        console.log(data)
        $('#playerWelcome').html('Welcome ' + data.username + '!!')
          .show()
        additionNumbers = data.addition_numbers;
        subtractionNumbers = data.subtraction_numbers;
        multiplicationNumbers = data.multiplication_numbers;
        divisionNumbers = data.division_numbers;
        $('#addition_numbers').val(data.addition_numbers);
        $('#subtraction_numbers').val(data.subtraction_numbers);
        $('#multiplication_numbers').val(data.multiplication_numbers);
        $('#division_numbers').val(data.division_numbers);
        if (data.addition_lock == 'true') {
          $('#addition_lock').prop('checked', true)
          $('#addition').attr('disabled', true)
        } else {
          $('#addition_lock').prop('checked', false)
          $('#addition').attr('disabled', false)
            .trigger('click')
        }
        if (data.subtraction_lock == 'true') {
          $('#subtraction_lock').prop('checked', true)
          $('#subtraction').attr('disabled', true)
        } else {
          $('#subtraction_lock').prop('checked', false)
          $('#subtraction').attr('disabled', false)
            .trigger('click')
        }
        if (data.multiplication_lock == 'true') {
          $('#multiplication_lock').prop('checked', true)
          $('#multiplication').attr('disabled', true)
        } else {
          $('#multiplication_lock').prop('checked', false)
          $('#multiplication').attr('disabled', false)
            .trigger('click')
        }
        if (data.division_lock == 'true') {
          $('#division_lock').prop('checked', true)
          $('#division').attr('disabled', true)
        } else {
          $('#division_lock').prop('checked', false)
          $('#division').attr('disabled', false)
            .trigger('click')
        }
      }
    });
    e.preventDefault()
  })

  $('#userSettings').submit(function (e) {
    $.ajax({
      url: `${host}/flashcards/settings`,
      type: 'post',
      data: $('#userSettings').serialize(),
      success: function (data) {
        console.log(data)
        if (data.username) {
          $('#settingUpdateSuccess').html('Update Successful!')
          $('#settingUpdateSuccess').show()
          setTimeout(function () {
            $('#settings').modal('hide')
            $('#settingUpdateSuccess').hide()
          }, 2000)
        } else {
          $('#settingUpdateSuccess').html('Update Failed!')
          $('#settingUpdateSuccess').show()
          setTimeout(function () {
            $('#settings').modal('hide')
            $('#settingUpdateSuccess').hide()
          }, 2000)
        }
        additionNumbers = data.addition_numbers;
        subtractionNumbers = data.subtraction_numbers;
        multiplicationNumbers = data.multiplication_numbers;
        divisionNumbers = data.division_numbers;
        if (data.addition_lock == 'true') {
          $('#addition').attr('disabled', true)
        } else {
          $('#addition').attr('disabled', false)
            .trigger('click')
        }
        if (data.subtraction_lock == 'true') {
          $('#subtraction').attr('disabled', true)
        } else {
          $('#subtraction').attr('disabled', false)
            .trigger('click')
        }
        if (data.multiplication_lock == 'true') {
          $('#multiplication').attr('disabled', true)

        } else {
          $('#multiplication').attr('disabled', false)
            .trigger('click')
        }
        if (data.division_lock == 'true') {
          $('#division').attr('disabled', true)

        } else {
          $('#division').attr('disabled', false)
            .trigger('click')
        }
      }
    });
    e.preventDefault()
  })


  $('#addition').on('click', function () {
    operation = 'addition';
    sign = '+ ';
    range = 10;
    getProblem()
  });
  $('#subtraction').on('click', function () {
    operation = 'subtraction';
    sign = '- ';
    range = 20;
    getProblem();
  }
  );
  $('#multiplication').on('click', function () {
    operation = 'multiplication';
    sign = 'x ';
    range = 10;
    getProblem();
  });

  $('#division').on('click', function () {
    operation = 'division';
    sign = '÷ ';
    range = 10;
    getProblem()
  });

  $('#getincorrect').on('click', function () {
    alert(wrongList)
  })

  $('#answerInput').change(function () {
    if (operation == 'addition') {
      if ($('#answerInput').val() == +numerator + +denominator) {
        $('#answerInput').val('');
        getProblem()
        numright++;
      } else {
        incorrect(numerator, denominator, sign)
        $('#answerInput').val('');
      };
    } else if (operation == 'subtraction') {
      if ($('#answerInput').val() == numerator - denominator) {
        $('#answerInput').val('');
        getProblem()
        numright++;
      } else {
        incorrect(numerator, denominator, sign)
        $('#answerInput').val('');
      }
    } else if (operation == 'multiplication') {
      if (+$('#answerInput').val() == numerator * denominator) {
        $('#answerInput').val('');
        getProblem();
        numright++;
      } else {
        incorrect(numerator, denominator, sign)
        $('#answerInput').val('');
      }
    } else {
      if ($('#answerInput').val() == numerator / denominator) {
        $('#answerInput').val('');
        getProblem();
        numright++;
      } else {
        incorrect(numerator, denominator, sign)
        $('#answerInput').val('');
      };
    };
    outof++;
    $('#numright').html('<p>Number Right: ' + numright);
    $('#outof').html('<p>Out of: ' + outof);
    $('#percent').html('<p>Percent: ' + Math.round(numright / outof * 100) + '%');
  });
});