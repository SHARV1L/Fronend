/*function modalDelete()
{
var modal = document.getElementById(myModalDelete);
modal.style.display = 'block';

}*/


function modalDelete(){
    var modal = document.getElementById(myModalDelete);
    modal.style.display='block';
     if( id === yes)
     {
         modal.removeAttribute(myModalDelete);
     }
     else
     {
         modal.style.display='none';
     }
}