var subj1 = prompt("Enter 1ST Subject Name ");
var subj2 = prompt("Enter 2ND Subject Name ");
var subj3 = prompt("Enter 3RD Subject Name ");

var total = 100;
var sumOfTotal = (total + total+ total);
var obtMark1 = +prompt("Enter Your Number Of " + subj1);
var obtMark2 = +prompt("Enter Your Number Of " + subj2);
var obtMark3 = +prompt("Enter Your Number Of " + subj3);
var finalObtMark = (obtMark1+obtMark2+obtMark3);

var per1 = obtMark1 / total * 100
var per2 = obtMark2 / total * 100
var per3 = obtMark3 / total * 100
var finalPer = (per1+per2+per3)/300*100;

document.write("<center>"+"<table border = '5px'>" + "<tr>"+ "<th>"+ "Subjects" +"</th>" +
"<th>"+ "Total Marks" +"</th>"+ 
"<th>"+ "Obtained Marks" +"</th>"+  
"<th>"+ "Percentage" +"</th>"+ "</tr>" +
"<tr>" + "<td>" + subj1 +"</td>" + "<td>" + total +"</td>" + "<td>" + obtMark1 + "</td>" + "<td>" + per1  + "%"+ "</td>" + "</tr>" +
"<tr>"+"<td>" + subj2 +"</td>" +"<td>" + total +"</td>" + "<td>" + obtMark2 + "</td>" + "<td>" + per2 + "%" + "</td>" + "</tr>"  + 
"<tr>" +"<td>" + subj3 +"</td>" +"<td>" + total +"</td>" + "<td>" + obtMark3 + "</td>" +"<td>" + per3 + "%" + "</td>" + "</tr>" +
"<tr>"+"<td>"+ " " +"</td>"+"<td>"+"<b>"+ sumOfTotal + "</b>"+"</td>" + "<td>"+"<b>"+ finalObtMark +"</b>"+"</td>"+"<td>"+ "<b>"+ finalPer + "%" +"</b>" + "</td>"+"</tr>"+
"</table>"+"</center>");