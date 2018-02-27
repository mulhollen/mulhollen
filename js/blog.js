// array contains blogposts

const blog = [
    {
        title: "title holder",
        date: "jan 1 18",
        imgURL: "",
        imgAlt: "",
        content: "blog post text",
        category: "category title"
    },
    {
        title: "let's go.",
        date: "jan 3 18",
        imgURL: "blogImg/didicry.PNG",
        imgAlt: "Did I Cry Today",
        content: "Want to join my NSS journey? Follow along on Instagram at <a href='https://www.instagram.com/didicrytoday/' target='_blank'>@didicrytoday</a>.<br><br>I don't really have a lot to say except terminal is the worst and maybe I'm just being dramatic, but I don't think it's getting better.<br><br>It's fine. I'm fine. It's fine... I'm fine.",
        category: "general"
    },
    {
        title: "week two.",
        date: "jan 8 18",
        imgURL: "blogImg/didicry.PNG",
        imgAlt: "Did I Cry Today",
        content: "This week I learned I have trouble writing problem statements... that are really mid-solution statements, or as later defined 'challenge statements.' After that I took a really long nap. With the handful of years that have passed, my brain is at the fitness equivallent of someone that says, 'let me fitness whole pizza into my mouth.'",
        category: "general"
    }
]

// display that array in cards

// make the html

function card() {
    var bloghtml ="";
    for (var i = 1; i < blog.length; i++) {
        bloghtml += `<h3>${blog[i].title}</h3>`;
        bloghtml += `<small class="date">${blog[i].date}</small>`;
        bloghtml += `<img src='${blog[i].imgURL}' alt='${blog[i].imgAlt}'>`;
        bloghtml += `<p>${blog[i].content}</p>`;
    }
    return bloghtml;
}


document.getElementById("blog").innerHTML = card();
