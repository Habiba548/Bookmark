
var siteName = document.getElementById('BookmarkName')
var siteUrl = document.getElementById('WebsiteUrl')

var bookContainer = [];

if (localStorage.getItem('book')!=null) {
 
    bookContainer=JSON.parse(localStorage.getItem('book'))
    display()
}


/*  ******ADD******  */

function addBOOK() {

    var book = {

        name: siteName.value,
        url: siteUrl.value,
    }

    // console.log(book);

    bookContainer.push(book)

    localStorage.setItem('book', JSON.stringify(bookContainer))

    display()
    clearForm()

  
    // console.log(bookContainer);

}


/*  ******CLEAR******  */
function clearForm() {

    siteName.value = null
    siteUrl.value = null

}

/*  ******DISPLAY******  */


function display() {



    var cartona = '';
    for (let i = 0; i < bookContainer.length; i++) {

        cartona += `                <tr >
                    <td class="px-5 text-capitalize " >
                ${bookContainer[i].name}
                    </td>

                    <td class="px-5 text-capitalize" >
                 ${bookContainer[i].url}	
                    </td>

                    <td class="px-5 text-capitalize" >
                    	<button class="btn btnVisit ">
                            <i class="fa-solid fa-eye"></i>   visit
                        </button>

                    </td>

                    <td class="px-5 text-capitalize" >
                        <button class="btn btnDelete " onclick="Delete(${i})">
                            <i class="fa-solid fa-trash"></i> 	Delete
                        </button>
                    </td>
                </tr>`;

        // console.log(cartona);


    }
     document.getElementById('bookData').innerHTML=cartona;
}



/*  ******DELETE******  */

function Delete(X) {
    
bookContainer.splice(X,1)

console.log(bookContainer);

display()
localStorage.setItem('book', JSON.stringify(bookContainer))
}






/*  ******VALIDATION******  */

/*
function ValidateUrl() {
    
    var regex=/ ^[a-z]{3,}\.com $/
    var WebsiteUrl= siteUrl.value
    
    if (regex.test(WebsiteUrl)) {
        
    console.log('match');
    }
    
    else{
        console.log('no');
        
    }
    
    }

*/
