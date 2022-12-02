var slider;
var output;
var CommentData = [
    {
        subject: "Design",
        category: "Portfolio",
        rating: "1",
        body: "I really dont like the colors. Change the colors.",
        date: "11/27/22"
    }
]


document.onreadystatechange = function() {
    if (document.readyState === 'complete'){
        slider = document.getElementById("rating")
        output = document.getElementById("ratingvalue")

        slider.oninput = function(){
            output.innerHTML = `Severity Rating: ${slider.value}`
        }
    }
}

function confirmNewComment(comment){
    if (comment.subject.length === 0 || comment.subject.length > 36) {
        alert("Feedback Subject must be at least 1 letter and no more than 36 letters. Form not submitted.")
        return false
    }
    if (comment.category.length === 0 || comment.category.length > 36) {
        alert("Feedback Category must be at least 1 letter and no more than 36 letters. Form not submitted.")
        return false
    }
    if (comment.subject.length === 0 || comment.subject.length > 36){
        alert("Feedback Subject must be at least 1 letter and no more than 36 letters. Form not submitted.")
        return false
    }
    if (comment.date.length === 0) {
        alert("Encounter Date of issue must be chosen")
        return false 
    }
    if (comment.body.length === 0 || comment.body.length > 200){
        alert("Feedback details must be at least 1 letter and no more than 200 letters. Form not submitted.")
        return false
    }
    return true
}


function setCommentList(){
    let target = document.getElementById("CommentList")

    let new_subject = document.getElementById("subject").value
    let new_category = document.getElementById("category").value
    let new_rating = document.getElementById("rating").value
    let new_date = document.getElementById("date").value
    let new_body = document.getElementById("body").value
    let new_comment = {
        subject: new_subject,
        category: new_category,
        rating: new_rating,
        body: new_body,
        date: new_date
    }
    confirmed = confirmNewComment(new_comment)
    if (!confirmed) {
        return
    }

    CommentData.unshift(new_comment)

    innerhtml = ""
    CommentData.forEach((element) => {
        innerhtml = innerhtml + `
        <div class="feedback-card" tabindex="0">
                <div class="aboutme-line">
                    Feedback Subject: ${element?.subject}
                </div>
                <div class="aboutme-line">
                    Feedback Category: ${element?.category}
                </div>
                <div class="aboutme-line">
                    Severity Rating: ${element?.rating}
                </div>
                <div class="aboutme-line">
                    Feedback: ${element?.body}
                </div>
                <div class="aboutme-line">
                    Encounter Date: ${element?.date}
                </div>
            </div>`
    })

    target.innerHTML = innerhtml;
}
