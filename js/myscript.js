function calculate(){
    // alert("hello");
    var table=document.getElementById('myMovie');
    var count = table.getElementsByTagName('tr').length;
    if (count > 0)
      {
        var total = 0;
        for(var i = 1; i < count; i++)
          {
            total += table.rows[i].cells[3].innerHTML;
          }
      }
    var view_total = document.getElementById('total').value;
    alert("Congratulations! You made a movie purchase of " +view_total);
 }