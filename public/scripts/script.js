function SelectOption() {
    document.getElementById('dd').firstChild.nodeValue=this.firstChild.nodeValue
}

$('#workspace').load(function () {
    var opt = document.getElementById('dd').getElementsByTagName('A')
    for (var i=0; i<opt.length; i++)
        opt[i].onclick=SelectOption
});