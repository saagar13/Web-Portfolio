function getReview() {
    let newReview = document.getElementById(`newReview`).value;
    let reviewerName = document.getElementById(`reviewerName`).value;
    let notAccess = `Siddharth`;
    if(newReview != null && newReview != "" && reviewerName != notAccess[0]) {
         if (reviewerName != null && reviewerName != "" && reviewerName != notAccess[0]) {

        // create a new reviewer name element an review
    
    console.log(newReview, reviewerName);

        // create a new review element 
        let element = document.createElement(`div`);
        element.setAttribute("class", "review");
        element.innerHTML = "<span>&#8220;</span> " + newReview + " <span>&#8221;</span>" + `<br>` + `<h4>` + reviewerName +`</h4>`;
        document.getElementById("reviewBox").appendChild(element);
         }
    }else {
        alert("Seems like your Review section is empty!");
    }

}
