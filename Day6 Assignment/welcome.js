var name=prompt("Enter the name");
document.write("Welcome "+name);
const cur_time=document.getElementById('time');
function clock(){
let date=new Date();
let time=date.toLocaleTimeString();
  cur_time.innerText=time;
}
setInterval(clock,1000);