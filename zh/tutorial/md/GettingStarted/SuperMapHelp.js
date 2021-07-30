//ie与ff通用
function WelcomeChangeIcon(alink,bChange){
    var ele = alink.firstChild
	var imgsrc
    if (bChange == true) {
		switch(alink.name){
			case 'OGDC_Introduction':
				imgsrc = "picture/产品介绍_s.bmp"
				break;
			case 'GettingStarted':
				imgsrc = "picture/快速入门_s.bmp"
				break;
			case 'Programming_Reference':
				imgsrc = "picture/接口参考_s.bmp"
				break;
			case 'Contactsupport':
				imgsrc = "picture/技术支持_s.bmp"
				break;
			case 'Developer_guide':
				imgsrc = "picture/开发指南_s.bmp"
				break;
			case 'SampleCode':
				imgsrc = "picture/范例程序_s.bmp"
				break;
			case 'FAQ':
				imgsrc = "picture/常见问题解答_s.bmp"
				break;
			default:
				break;			
		}
        //ie
        if (alink.firstChild == "[object]") 
            ele.src = imgsrc;
        //ff			
        else 
            ele.nextSibling.setAttribute("src", imgsrc);
    }
    else {
		switch(alink.name){
			case 'OGDC_Introduction':
				imgsrc = "picture/产品介绍.bmp"
				break;
			case 'GettingStarted':
				imgsrc = "picture/快速入门.bmp"
				break;
			case 'Programming_Reference':
				imgsrc = "picture/接口参考.bmp"
				break;
			case 'Contactsupport':
				imgsrc = "picture/技术支持.bmp"
				break;
			case 'Developer_guide':
				imgsrc = "picture/开发指南.bmp"
				break;
			case 'SampleCode':
				imgsrc = "picture/范例程序.bmp"
				break;
			case 'FAQ':
				imgsrc = "picture/常见问题解答.bmp"
				break;
			default:
				break;			
		}
		
        if (alink.firstChild == "[object]") 
            ele.src = imgsrc;
        else 
            alink.firstChild.nextSibling.setAttribute("src", imgsrc);
    }
}

function CopyCodeChangeIcon(linkSpan){
    var ele = linkSpan.firstChild	
    if (linkSpan.className == "highlight-copycode") {
        linkSpan.className = "highlight-copycode_h";
        var imgsrc = "img/copycode_h.gif"
        //ie
        if (linkSpan.firstChild == "[object]") 
            ele.src = imgsrc;
        //ff			
        else 
            ele.nextSibling.setAttribute("src", imgsrc);
    }
    else {
        linkSpan.className = "highlight-copycode";
        var imgsrc = "img/copycode.gif"
        if (linkSpan.firstChild == "[object]") 
            ele.src = imgsrc;
        else 
            linkSpan.firstChild.nextSibling.setAttribute("src", imgsrc);
    }
}

function copyit(key){
    var titleDiv, codeText, clip, trans, copyObject, clipID;
    titleDiv = document.getElementById(key);
    
    // IE or FireFox/Netscape?
    if (titleDiv.innerText != undefined) 
        codeText = titleDiv.innerText;
    else 
        codeText = titleDiv.textContent;
    
    if (window.clipboardData) 
        window.clipboardData.setData("Text", codeText);
    else 
        if (window.netscape) {
            // Give unrestricted access to browser APIs using XPConnect
            try {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
            } 
            catch (e) {
                alert("Universal Connect was refused, cannot copy to " +
                "clipboard.  Go to about:config and set " +
                "signed.applets.codebase_principal_support to true to " +
                "enable clipboard support.");
                return;
            }
            
            // Creates an instance of nsIClipboard
            clip = Components.classes["@mozilla.org/widget/clipboard;1"].createInstance(Components.interfaces.nsIClipboard);
            
            // Creates an instance of nsITransferable
            if (clip) 
                trans = Components.classes["@mozilla.org/widget/transferable;1"].createInstance(Components.interfaces.nsITransferable);
            
            if (!trans) {
                alert("Copy to Clipboard is not supported by this browser");
                return;
            }
            
            // Register the data flavor
            trans.addDataFlavor("text/unicode");
            
            // Create object to hold the data
            copyObject = new Object();
            
            // Creates an instance of nsISupportsString
            copyObject = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);
            
            // Assign the data to be copied
            copyObject.data = codeText;
            
            // Add data objects to transferable
            trans.setTransferData("text/unicode", copyObject, codeText.length * 2);
            
            clipID = Components.interfaces.nsIClipboard;
            
            if (!clipID) {
                alert("Copy to Clipboard is not supported by this browser");
                return;
            }
            
            // Transfer the data to the clipboard
            clip.setData(trans, null, clipID.kGlobalClipboard);
        }
        else 
            alert("Copy to Clipboard is not supported by this browser");
}
