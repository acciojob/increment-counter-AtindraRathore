//your JS code here. If required.
let counter = document.getElementById('counter');
let value = 0;
function display(){
	 alert("UnIncremented value "+value);
	value++;
	counter.innerText = value;
}