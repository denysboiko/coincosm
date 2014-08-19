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
        $(checkBox).each(function(){
            $(this).removeClass(checkBoxChecked);
        });
        $(checkBoxInput + ":checked").each(function(){
            $(this).parent(checkBox).addClass(checkBoxChecked);
        });
        $(checkBoxInput + ":disabled").each(function(){
            $(this).parent(checkBox).addClass(checkBoxDisabled);
        });
    };

    // Radios
    if ($(radioInput).length) {
        $(radio).each(function(){
            $(this).removeClass(radioOn);
        });
        $(radioInput + ":checked").each(function(){
            $(this).parent(radio).addClass(radioOn);
        });
        $(radioInput + ":disabled").each(function(){
            $(this).parent(radio).addClass(radioDisabled);
        });
    };
};

$(document).ready(function(){
    //$("html").addClass("has-js");

    // First let's prepend icons (needed for effects)
    $(".checkbox, .radio").prepend("<span class='icon'></span><span class='icon-to-fade'></span>");

    $(".checkbox, .radio").click(function(){
        setupLabel();
    });
    setupLabel();
});


/*function hideshow(which)
{
	if (!document.getElementById)
		return
	if (which.style.display=="none")
		which.style.display=""
	else
		which.style.display="none"
}

	
function SelectOption() {
	document.getElementById('dd').firstChild.nodeValue=this.firstChild.nodeValue
}

window.onload = function () {
	var opt = document.getElementById('dd').getElementsByTagName('A')
	for (var i=0; i<opt.length; i++)
	opt[i].onclick=SelectOption
}	


/* Функция для автоматизации меню

$(document).ready(function()
{
	$('ul.form li a').click(
		function(e) {
			e.preventDefault(); // prevent the default action
			e.stopPropagation; // stop the click from bubbling
			 ');
			$(this).parent().addClass('selected');
					});
		});

*/

//show password
/*$(document).ready(function(){
    $("#pw").focus(function(){
        this.type = "text";
    }).blur(function(){
            this.type = "password";
        })
});

//Placeholder fixed for Internet Explorer
$(function() {
    var input = document.createElement("input");
    if(('placeholder' in input)==false) {
        $('[placeholder]').focus(function() {
            var i = $(this);
            if(i.val() == i.attr('placeholder')) {
                i.val('').removeClass('placeholder');
                if(i.hasClass('password')) {
                    i.removeClass('password');
                    this.type='password';
                }
            }
        }).blur(function() {
                var i = $(this);
                if(i.val() == '' || i.val() == i.attr('placeholder')) {
                    if(this.type=='password') {
                        i.addClass('password');
                        this.type='text';
                    }
                    i.addClass('placeholder').val(i.attr('placeholder'));
                }
            }).blur().parents('form').submit(function() {
                $(this).find('[placeholder]').each(function() {
                    var i = $(this);
                    if(i.val() == i.attr('placeholder'))
                        i.val('');
                })
            });
    }
});*/




/*<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>*/


    $(document).ready(function DropDown(el) {
        this.dd = el;
        this.initEvents();
    });

DropDown.prototype = {
    initEvents : function() {
        var obj = this;
        obj.dd.on('click', function(event){
            $(this).toggleClass('active');
            event.stopPropagation();
        });
    }
}

$(function() {
    var dd = new DropDown($('#dd'));
    $(document).click(function() {
        // all dropdowns
        $('#dd').removeClass('active');
    });
});