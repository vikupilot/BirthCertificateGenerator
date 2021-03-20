
function GenerateCertificate(){
   // alert("hi")
let namefield=document.getElementById("Name").value;
let fnamefield=document.getElementById("FatherName").value;
let mnamefield=document.getElementById("MotherName").value;
let datefield=document.getElementById("Date").value;
let timefield=document.getElementById("Time").value;
let sexfield=document.getElementById("Sex").value;
let weightfield=document.getElementById("Weight").value;
let heightfield=document.getElementById("Height").value;
let addressfield=document.getElementById("Address").value;


document.getElementById("tName").innerHTML=namefield;
document.getElementById("tFatherName").innerHTML=fnamefield;
document.getElementById("tMotherName").innerHTML=mnamefield;
document.getElementById("tDate").innerHTML=datefield;
document.getElementById("tTime").innerHTML=timefield;
document.getElementById("tSex").innerHTML=sexfield;
document.getElementById("tWeight").innerHTML=weightfield;
document.getElementById("tHeight").innerHTML=heightfield;
document.getElementById("tAddress").innerHTML=addressfield;


document.getElementById("INPUTFELID").style["display"] = "none";
document.getElementById("OutputFiled").style["display"] = "block";

}
function PrintCertificate(){
   var divContents = document.getElementById("OutputFiled").innerHTML;  
     var printWindow = window.open('', '', 'height=600,width=600');  
    printWindow.document.write('<html><head><title>Live Birth Certificate</title>');  
    printWindow.document.write('</head><body >');  
    printWindow.document.write(divContents);  
    printWindow.document.write('</body></html>');  
    printWindow.document.close();  
    printWindow.print();  

}  