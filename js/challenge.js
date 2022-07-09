document.addEventListener("DOMContentLoaded", () => {
    // SETS TIMER
    const counter = document.querySelector('#counter');
    let timer = setInterval(() => {
        return counter.innerText++
    }, 1000);

    // -/+ BUTTONS
    document.getElementById("minus").addEventListener("click", () => counter.innerText--);
    document.getElementById("plus").addEventListener("click", () => counter.innerText++);

    // LIKE BUTTON
    const likedNums = [];
    const ul = document.querySelector("ul");
    let numOfLikes = 1;

    document.getElementById("heart").addEventListener("click", e => {
        let alreadyLiked = likedNums.indexOf(counter.innerText); //returns the index of the liked number
        console.log(alreadyLiked)

        if (alreadyLiked === -1) {
            const like = document.createElement("li");
            like.innerText = `The number ${counter.innerText} has 1 like!`;
            ul.appendChild(like);
            likedNums.push(counter.innerText);
            console.log(likedNums)
        } else {
            numOfLikes++;
            document.querySelectorAll("li")[alreadyLiked].innerText = `The number ${counter.innerText} has ${numOfLikes} likes!`;
        }
    })

    // PAUSE BUTTON
    const pauseBtn = document.getElementById('pause');
    let paused = false;

    pauseBtn.addEventListener('click', e => {
        if (!paused) {
            clearInterval(timer);
            e.target.innerText = "resume";
            document.getElementById("minus").disabled = true;
            document.getElementById("plus").disabled = true;
            document.getElementById("heart").disabled = true;
            document.getElementById("submit").disabled = true;
            paused = true;
        } else {
            timer = setInterval(() => {
                return counter.innerText++
            }, 1000);
            document.getElementById("minus").disabled = false;
            document.getElementById("plus").disabled = false;
            document.getElementById("heart").disabled = false;
            document.getElementById("submit").disabled = false;
            e.target.innerText = "pause";
            paused = false;
        }
    })

    // COMMENT FORM
    const form = document.getElementById("comment-form");
    const submit = document.getElementById("submit");

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let comment = document.createElement("p");
        comment.innerText = document.getElementById("comment-input").value;
        document.querySelector("#list").appendChild(comment);
        form.reset();
    })
})
