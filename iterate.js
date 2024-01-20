var json = [{
    "Name" : "sathya", 
    "Info"   : "hi,this my first stuff using iteratin of loops using JSON",
    "task" : "Day-03 Task",
    "mail": "sathyamd0507@gmail.com"

}];

//for loop

for(var i = 0; i < json.length; i++) {
var obj = json[i];
console.log(obj.Name);
console.log(obj.Info);
console.log(obj.task);
console.log(obj.mail);
}

//for Each loop

json.forEach(function(obj) 
{ 
console.log(obj.Name);
 }
 );

//for In loop

for (var key in json) 
{
if (json.hasOwnProperty(key)) 
{
console.log(json[key].Name);
console.log(json[key].Info);
console.log(json[key].task);
console.log(json[key].mail);
}
}

//for Of loop

let words = "";
for (let x of json[key].Name) 
{
 words += x; 
}
console.log(words);