/**
 * Created by denisbojko on 01.05.14.
 */


//		<script src="http://code.jquery.com/jquery-2.0.0.min.js"></script> для включения jQuery


function addToList()
{
    var table=document.getElementById('addressbook')
    var tablerow=document.createElement('TR')

    table.appendChild(tablerow)

    var td=document.createElement('TD')
    td.className='adresscell'
    tablerow.appendChild(td)
    var text=document.createTextNode('1Du5y5Qv1oWVZtfXRzR4Cktkm6VSgfiW2T')
    td.appendChild(text)

    td=document.createElement('TD')
    td.className='labelcell'
    tablerow.appendChild(td)
    text=document.createTextNode('My medicine')
    td.appendChild(text)

    td=document.createElement('TD')
    td.className='datecell'
    tablerow.appendChild(td)
    text=document.createTextNode('13 Jun 2014')
    td.appendChild(text)

    td=document.createElement('TD')
    td.className='qrcell'
    tablerow.appendChild(td)
    var aqr=document.createElement('A')
    td.appendChild(aqr)
    var imgqr=document.createElement('IMG')
    imgqr.setAttribute('src', 'images/qr.png')
    aqr.appendChild(imgqr)
}