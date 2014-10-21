function addToList() {
    var table = document.getElementById('addressbook')
    var tablerow = document.createElement('TR')

    table.appendChild(tablerow)

    var td = document.createElement('TD')
    td.className = 'adresscell'
    tablerow.appendChild(td)
    var text = document.createTextNode('1Du5y5Qv1oWVZtfXRzR4Cktkm6VSgfiW2T')
    td.appendChild(text)

    td = document.createElement('TD')
    td.className = 'labelcell'
    tablerow.appendChild(td)
    text = document.createTextNode('My medicine')
    td.appendChild(text)

    td = document.createElement('TD')
    td.className = 'datecell'
    tablerow.appendChild(td)
    text = document.createTextNode('13 Jun 2014')
    td.appendChild(text)

    td = document.createElement('TD')
    td.className = 'qrcell'
    tablerow.appendChild(td)
    var aqr = document.createElement('A')
    td.appendChild(aqr)
    var imgqr = document.createElement('IMG')
    imgqr.setAttribute('src', 'images/qr.png')
    aqr.appendChild(imgqr)
}

// Custom checkbox and radios
function setupLabel() {

    // Checkbox
    var checkBox = ".checkbox";
    var checkBoxInput = checkBox + " input[type='checkbox']";
    var checkBoxChecked = "checked";
    var checkBoxDisabled = "disabled";

    // Radio
    var radio = ".radio";
    var radioInput = radio + " input[type='radio']";
    var radioOn = "checked";
    var radioDisabled = "disabled";

    // Checkboxes
    if ($(checkBoxInput).length) {
        $(checkBox).each(function () {
            $(this).removeClass(checkBoxChecked);
        });
        $(checkBoxInput + ":checked").each(function () {
            $(this).parent(checkBox).addClass(checkBoxChecked);
        });
        $(checkBoxInput + ":disabled").each(function () {
            $(this).parent(checkBox).addClass(checkBoxDisabled);
        });
    }

    // Radios
    if ($(radioInput).length) {
        $(radio).each(function () {
            $(this).removeClass(radioOn);
        });
        $(radioInput + ":checked").each(function () {
            $(this).parent(radio).addClass(radioOn);
        });
        $(radioInput + ":disabled").each(function () {
            $(this).parent(radio).addClass(radioDisabled);
        });
    }
}


$(document).ready(function () {
    //$("html").addClass("has-js");
    // First let's prepend icons (needed for effects)
    $(".checkbox, .radio").prepend("<span class='icon'></span><span class='icon-to-fade'></span>");

    $(".checkbox, .radio").click(function () {
        setupLabel();
    });
    setupLabel();
});


function hideshow(which) {
    if (!document.getElementById)
        return
    if (which.style.display == "none")
        which.style.display = ""
    else
        which.style.display = "none"
}


function SelectOption() {
    document.getElementById('dd').firstChild.nodeValue = this.firstChild.nodeValue
}

window.onload = function () {
    var opt = document.getElementById('dd').getElementsByTagName('A');
    for (var i = 0; i < opt.length; i++)
        opt[i].onclick = SelectOption
}


// Функция для автоматизации меню

$(document).ready(function () {
    $('ul.form li a').click(
        function (e) {
            e.preventDefault(); // prevent the default action
            e.stopPropagation(); // stop the click from bubbling
            $(this).parent().addClass('selected');
        });
});