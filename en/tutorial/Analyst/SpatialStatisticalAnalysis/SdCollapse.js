//Generic Display code
//Updated 11/9/00 - updated outline3()

var L_COLLAPSE_TEXT="全部隐藏";
var L_EXPAND_TEXT="全部显示";

function productname()
{
	document.write('SuperMap iDesktop .NET');
}

function productname1()
{
	document.write('SuperMap iDesktop');
}

function copyright()
{
	document.write('Copyright&copy; 2007-2019 SuperMap Software Co., Ltd. All Rights Reserved.');
}

function UpdateDate()
{
	document.write("The last time updating this page was "   +(new   Date(document.lastModified)).getFullYear()   +"."+   ((new   Date(document.lastModified)).getMonth()+1)   +"."+(new   Date(document.lastModified)).getDate()     +   "");
}

function ExpandAll()
{
	// Expand all 
	var iSpan
	var iSpanSource
	var oSpan
	var sCaption
	var sAction
	var sImage
	
	// Determine the action, and the picture to replace
	sCaption=document.all("ExpandAll").innerHTML;
	if (sCaption==L_EXPAND_TEXT)
		{
		sAction="expanded";
		sImage="img/open.gif"
		//document.all("picHeader").src="collapsetri.gif";
		document.all("ExpandAll").innerHTML=L_COLLAPSE_TEXT;
		}
	else
		{
		sAction="collapsed";
		sImage="img/close.gif"
		//document.all("picHeader").src="expandtri.gif";
		document.all("ExpandAll").innerHTML=L_EXPAND_TEXT;
		}

	// Execute the action for all expand SPANs	
	for (iSpan=0; iSpan < document.all.tags("DIV").length; iSpan++)
		{	
			oSpan=document.all.tags("DIV").item(iSpan);
			iSpanSource=oSpan.sourceIndex;
			if (oSpan.id=="ExpCol")
			{
				document.all.tags("DIV").item(iSpan).className=sAction;
				if(document.all(iSpanSource-1).tagName=="IMG" && document.all(iSpanSource-2).tagName!="IMG")
				{
					document.all(iSpanSource-1).src=sImage;
				}
				else if(document.all(iSpanSource-2).tagName=="IMG")
				{
					document.all(iSpanSource-2).src=sImage
				}
				 
			}
			
			// Handle the Q tag added late for Loc
			if (document.all(iSpanSource-1).tagName=="Q")
			{
				document.all(iSpanSource-2).src=sImage;
			}
			
			
		}


	// Change the text and the picture of the main caller
	document.all("ExpandAll").className="DropDown";

	// Now we do the inline defs
	var cLinks = document.all.tags("A");
	var iNumLinks = cLinks.length;

  	for (var i=0;i<iNumLinks;i++)
  	{
		cLink=document.all.tags("A").item(i);
		
		switch (sAction)
		{
			case 'expanded':
				if (cLink.className=="glossary" && cLink.getAttribute("State")!="On")
				{
					cLinks[i].click();
				}
				else if (cLink.className=="HidePopUp")
				{
					cLinks[i].click();
				}
				
				break;
			case 'collapsed':
				if (cLink.className=="glossary" && cLink.getAttribute("State")=="On")
				{
					cLinks[i].click();
				}
				else if (cLink.className=="HidePopUp")
				{
					cLinks[i].click();
				}
				break;
		}
  	}


	
	
}
	
function toggle(evt,targetid){
var evt = window.event || evt;
var srcElement=evt.target||evt.srcElement;
var img=srcElement.tagName==="A"?srcElement.childNodes[0]:srcElement;
     if (document.getElementById){
         target=document.getElementById(targetid);
             if (target.style.display=="block"){
                 target.style.display="none";
	img.src="img/close.gif"
             } else {
                 target.style.display="block";
	img.src="img/open.gif"
             }
     }
}

function Outline2(evt)
{
	var evt = window.event || evt;
	
	evt.returnValue = 0;	
	if(evt == null)
	{
		alert("evt");
	}
	//Expand or collapse if a list item is clicked.
	var open = evt.srcElement || evt.target;
	var targetDIv;
	var elementChild;
	//Verify that the tag which was clicked was either the 
	//trigger tag or nested within a trigger tag.
	var el = checkParent(open,"A");
	if(null != el)
	{	
		var incr=0;
		var elmPos = 0;
		var parentSpan;
		var fBreak

		//Get the position of the element which was clicked
		var parentNode = open.parentNode;
		var nextSibling;
		var isFound = false;
		while(parentNode != null)
		{
			nextSibling = parentNode.nextSibling
			while(nextSibling != null)
			{
				if(nextSibling.nodeType == 1 && nextSibling.tagName == "DIV" && (nextSibling.className == "expanded" || nextSibling.className == "collapsed"))
				{
					targetDIv = nextSibling;
					isFound = true;
					break;
				}
				nextSibling = nextSibling.nextSibling
			}
			if(isFound)
			{
				break;
			}
			parentNode = parent.parentNode;
		}
		
		if(open.childNodes != null && open.childNodes.length > 0)
		{
			 elementChild = open.childNodes[0];
		}
	}
	else
	{
		//Alert("Return!");
		return;
	}
	
	if(targetDIv.className=="collapsed")
	{
		targetDIv.className="expanded"
		if(elementChild != null)
		{
			elementChild.src="img/open.gif";
		}
		if(open.tagName=="IMG"){open.src="img/open.gif";}
		if(open.tagName=="B")
		{
			if(open.parentElement.all.tags("IMG").length != 0)
			{open.parentElement.all.tags("IMG").item(0).src="img/open.gif";}
		}
	}
	else if(targetDIv.className=="expanded")
	{
		targetDIv.className="collapsed"
		if(elementChild != null)
		{
			elementChild.src="img/close.gif";
		}
		if(open.tagName=="IMG"){open.src="img/close.gif";}
		if(open.tagName=="B")
			{
			if(open.parentElement.all.tags("IMG").length != 0)
				{open.parentElement.all.tags("IMG").item(0).src="img/close.gif";}
			}
	}
	else
	{
		return;
	}
	
	evt.cancelBubble = true;
	return;
}

function Outline3()
{

	window.event.returnValue=0	

	//Expand or collapse if a list item is clicked.
	var open = event.srcElement;

	//Verify that the tag which was clicked was either the 
	//trigger tag or nested within a trigger tag.
	var el = checkParent(open,"A");
	if(null != el)
	{	
		var incr=0;
		var elmPos = 0;
		var parentSpan;
		var fBreak

		//Get the position of the element which was clicked
		elemPos = window.event.srcElement.sourceIndex;

		//Search for a SPAN tag
		for (parentSpan = window.event.srcElement.parentElement;
			parentSpan!=null;
			parentSpan = parentSpan.parentElement) 
		{
			//test if already at a span tag 
		    if (parentSpan.tagName=="DIV") 
			{
				//alert("Parent Element is a SPAN");
				//incr=1;
				//break;
			}
			
			//Test if the tag clicked was in a body tag or in any of the possible kinds of lists
			//we perform this test because nested lists require special handling
			if (parentSpan.tagName=="BODY" || parentSpan.tagName=="UL" || parentSpan.tagName=="OL"|| parentSpan.tagName=="P") 
			{
				//Determine where the span to be expanded is.  
				for (incr=1; (elemPos+incr) < document.all.length; incr++)
				{	
					//verify we are at an expandable Div tag
					if(document.all(elemPos+incr).tagName=="DIV" && 
					(document.all(elemPos+incr).className=="expanded" ||
					 document.all(elemPos+incr).className=="collapsed"))
					{
						fBreak=1;
						break;
					}
					//If the next tag following the list item (li) is another 
					//list item(li) return in order to prevent accidentally opening
					//the next span in the list
					else if(document.all(elemPos+incr).tagName=="LI")
					{
						return;
					}
				}
			}
			//determine if we need to break out of the while loop (kind of a kludge since theres no goto in javascript)
			if(fBreak==1)
			{
				break;
			}
		}

	}
	else
	{
		Alert("Return!");
		return;
	}

	//Now that we've identified the span, expand or collapse it
	//Now that we've identified the span, expand or collapse it
	if(document.all(elemPos+incr).className=="collapsed")
	{
		
		document.all(elemPos+incr).className="expanded"
		document.all(elemPos+1).src="img/open.gif";
		if(open.tagName=="IMG"){open.src="img/open.gif";}
		if(open.tagName=="B")
			{
			if(open.parentElement.all.tags("IMG").length != 0)
				{open.parentElement.all.tags("IMG").item(0).src="img/open.gif";}
			}
	}
	else if(document.all(elemPos+incr).className=="expanded")
	{
		document.all(elemPos+incr).className="collapsed"
		document.all(elemPos+1).src="img/close.gif";
		if(open.tagName=="IMG"){open.src="img/close.gif";}
		if(open.tagName=="B")
			{
			if(open.parentElement.all.tags("IMG").length != 0)
				{open.parentElement.all.tags("IMG").item(0).src="img/close.gif";}
			}
	}
	else
	{
		return;
	}
	event.cancelBubble = true;
//	open.scrollIntoView(true);
}

function checkParent(src,dest)
{
	//Search for a specific parent of the current element.
	while(src !=null)
	{
		if(src.tagName == dest)
		{
			return src;
		}
		src = src.parentElement;
	}
	return null;
}

//This function displays content from different source HTML files
function showPopup(filename, theSpan){


	//Get the position of the element which was clicked
	elemPos = window.event.srcElement.sourceIndex;
	theIFRAME.location.replace(filename);
	tempSpan = theSpan
	window.setTimeout("showPopup2(tempSpan,elemPos)", 800)
	

}

function showPopup2(theSpan, elemPos){
//var elemPos=0;
//Get the position of the element which was clicked
//elemPos = window.event.srcElement.sourceIndex;

	defSpan = document.all(theSpan);
	if (defSpan && document.readyState == "complete" && theIFRAME.document.readyState == "complete"){
        	if (defSpan.style.display == "none"){
			theIFRAME.document.all.tags("H1").item(0).outerHTML="";
			
			if(theIFRAME.document.all.tags("P").item("ExpandAllLine") != null) {theIFRAME.document.all.tags("P").item("ExpandAllLine").outerHTML="";}			
			///defSpan.innerHTML = theIFRAME.document.all.glosdef.innerHTML;
			defSpan.innerHTML = theIFRAME.document.body.innerHTML;
			defSpan.style.display = "";
			defSpan.parentElement.style.display = "";

			document.all(elemPos+1).src="img/open.gif";
			document.all(elemPos).src="img/open.gif";
		}
    		else{
			defSpan.style.display = "none";
			defSpan.parentElement.style.display = "none";
			document.all(elemPos+1).src="img/close.gif";
			//if(oSource.tagName=="IMG"){open.src="img/close.gif";}
    		}
	}
}

//Swapping images
function MM_swapImgRestore() { //v2.0
  if (document.MM_swapImgData != null)
    for (var i=0; i<(document.MM_swapImgData.length-1); i+=2)
      document.MM_swapImgData[i].src = document.MM_swapImgData[i+1];
}

function MM_swapImage() { //v2.0
  var i,j=0,objStr,obj,swapArray=new Array,oldArray=document.MM_swapImgData;
  for (i=0; i < (MM_swapImage.arguments.length-2); i+=3) {
    objStr = MM_swapImage.arguments[(navigator.appName == 'Netscape')?i:i+1];
    if ((objStr.indexOf('document.layers[')==0 && document.layers==null) ||
        (objStr.indexOf('document.all[')   ==0 && document.all   ==null))
      objStr = 'document'+objStr.substring(objStr.lastIndexOf('.'),objStr.length);
    obj = eval(objStr);
    if (obj != null) {
      swapArray[j++] = obj;
      swapArray[j++] = (oldArray==null || oldArray[j-1]!=obj)?obj.src:oldArray[j];
      obj.src = MM_swapImage.arguments[i+2];
  } }
  document.MM_swapImgData = swapArray; //used for restore
}


function openWindow(url, example) {
  var popupWin;
  if (typeof(popupWin) != "object") 
	popupWin = window.open(url, example, "width=452,height=572,top=0,left=0,alwaysRaised=yes,toolbar=0,directories=0,menubar=0,status=1,resizable=yes,location=0,scrollbars=1,copyhistory=0");
  else {
    if (!popupWin.closed) 
      popupWin.location.href = url;
    else 
	  popupWin = window.open(url, example, "width=452,height=572,top=0,left=0,alwaysRaised=yes,toolbar=0,directories=0,menubar=0,status=1,resizable=yes,location=0,scrollbars=1,copyhistory=0");
 }	  
   
   popupWin.focus();
}
//ie与ff通用
function WelcomeChangeIcon(alink,bChange){
    var ele = alink.firstChild;
	var imgsrc;
    if (bChange == true) {
		switch(alink.name){
			case 'UI':
				imgsrc = "img/UI_s.bmp"
				break;
			case 'GetStart':
				imgsrc = "img/GetStart_s.bmp"
				break;
			case 'ConfigSet':
				imgsrc = "img/ConfigSet_s.bmp"
				break;
			case 'DataStru':
				imgsrc = "img/DataStru_s.bmp"
				break;		
			case 'UIGuide':
				imgsrc = "img/UIGuide_s.bmp"
				break;		
			case 'DevelopGuide':
				imgsrc = "img/DGuid_s.bmp"
				break;
			case 'GettingStarted':
				imgsrc = "img/GettingStarted_s.bmp"
				break;
			case 'Contactsupport':
				imgsrc = "img/Contactsupport_s.bmp"
				break;
			case 'SLib':
				imgsrc = "img/SLib_s.bmp"
				break;
			case 'TecFile':
				imgsrc = "img/Tech_s.bmp"
				break;
			case 'FAQ':
				imgsrc = "img/FAQ_s.bmp"
				break;
			case 'Introduce':
				imgsrc="img/Introduce_s.bmp";
				break;
			default:
				break;			
		}
      //ie
        /*if (alink.firstChild == "[object]") */
            ele.src = imgsrc;
        //ff			
        //else 
		//ele.nextSibling.src=imgsrc;-->
            //ele.nextSibling.setAttribute("src", imgsrc);
    }
    else {
		switch(alink.name){
			case 'UI':
				imgsrc = "img/UI.bmp"
				break;
			case 'GetStart':
				imgsrc = "img/GetStart.bmp"
				break;
			case 'ConfigSet':
				imgsrc = "img/ConfigSet.bmp"
				break;
			case 'DataStru':
				imgsrc = "img/DataStru.bmp"
				break;		
			case 'UIGuide':
				imgsrc = "img/UIGuide.bmp"
				break;		
			case 'DevelopGuide':
				imgsrc = "img/DGuid.bmp"
				break;
			case 'GettingStarted':
				imgsrc = "img/GettingStarted.bmp"
				break;
			case 'Contactsupport':
				imgsrc = "img/Contactsupport.bmp"
				break;
			case 'SLib':
				imgsrc = "img/SLib.bmp"
				break;
			case 'TecFile':
				imgsrc = "img/Tech.bmp"
				break;
			case 'FAQ':
				imgsrc = "img/FAQ.bmp"
				break;
			case 'Introduce':
				imgsrc="img/Introduce.bmp";
				break;
			default:
				break;			
		}
		
      //ie
        /*if (alink.firstChild == "[object]") */
            ele.src = imgsrc;
        //ff			
        //else 
		//ele.nextSibling.src=imgsrc;-->
            //ele.nextSibling.setAttribute("src", imgsrc);
    }
}