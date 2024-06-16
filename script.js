function firstChar(text) {
  // your code here
	if(text==="")
	{
		return "";
	}
	let ans="";
	for(let val of text)
		{
			if(val!==" ")
			{
				ans=val;
				break;
			}
		}
	return ans;
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
