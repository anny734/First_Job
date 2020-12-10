
if(typeof Storage !== "undefined")
{
     document.write("Your Browser supports local and session storage ");
    

}
else{
    document.write("Yor brower does not support shit");
}
function setkey()
{
    var x = document.getElementById('ram').value;
    var y = document.getElementById('sham').value;
    localStorage.setItem(x,y);
    sessionStorage.setItem(x,y);
    // <table id="localtable">
    //         <tr>
    //             <th>Key</th>
    //             <th>Value</th>
    //             <th></th>
    //         </tr>
            
    // </table>


    // for (var i=0;i<localStorage.length;i++)
    // {
    //     var key1=localStorage.key(i);
    //     var val=localStorage.getItem(key1);
    // }

    
}
function createTable(){

var table = document.createElement('table');
   
    for (var i=1;i<localStorage.length;i++){
        var tr = document.createElement('tr');   
        //tr[i]=document.createElement('tr');
        var key1=localStorage.key(i);
        var val=localStorage.getItem(key1);
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');

        td1.appendChild(document.createTextNode(key1));
        td2.appendChild(document.createTextNode(val));
        // tr[i].appendChild(td1);
        // tr[i].appendChild(td2);
        tr.appendChild(td1);
        tr.appendChild(td2);

        table.appendChild(tr);
    }
    document.body.appendChild(table);
}
createTable();