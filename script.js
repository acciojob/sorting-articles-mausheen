//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada',
			   'Pierce the Veil', 'Norma Jean', 'The Bled',
			   'Say Anything', 'The Midway State',
			   'We Came as Romans', 'Counterparts',
			   'Oh, Sleeper', 'A Skylit Drive',
			   'Anywhere But Here','An Old Dog'];


function removeEle(ele){
	return ele.replace(/^(a |an | The)/i,'').trim();
}

const srtBonds=bands.sort((a,b)=>removeEle(a).localeCompare(removeEle(b)));

const bandList=document.getElementById("band");

srtBonds.forEach(ele=>{
	const li=document.createElement("li");
	li.textContent=ele;
	bandList.appendChild(li);
})



