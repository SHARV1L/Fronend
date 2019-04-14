
function toggleButton()
{
   var toggle= document.getElementById('edit').value;
   if(toggle=="EditButton")
   {
       change();
   }
   if(toggle=="SaveButton")
   {
       changeBack();
   }

}
function change(){
        document.getElementById('edit').innerHTML="Save <i class='fa fa-save'></i>";
        document.getElementById('blogBody').contentEditable='true';
        document.getElementById('blogTitleNew').contentEditable='true';
        document.getElementById('edit').value="SaveButton";
        
}
 
function changeBack(){
        document.getElementById('edit').innerHTML="Edit <i class='fa fa-edit'></i>";
        document.getElementById('blogBody').contentEditable='false';
        document.getElementById('blogTitleNew').contentEditable='false';
        document.getElementById('edit').value="EditButton";
        
}

var count = 0;
function likes(){
    count++;
    document.getElementById("totalLikes").innerHTML= count +" person likes this!";
    document.getElementById("like").innerHTML="<i class='fa fa-thumbs-o-up'></i> Liked!";
}


function addComment(id)
  {
    document.getElementsByClassName('eachComment')[0].style.display='none';
    var template = '<p class="eachComment">'+id.value+'</p>';
    document.getElementById('commentList').innerHTML+=template;
    document.getElementById('text1').value="";
    
  }

  function toggleCommentSection()
  {
    var show = document.getElementById('showComments');
    if(show.style.display=="none")
    {
        show.style.display='block';
    }
    else
    {
        show.style.display='none';
    }
  }
   


