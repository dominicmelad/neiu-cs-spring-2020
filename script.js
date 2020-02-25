function showCh() {
document.querySelector(".cheatsheet").innerHTML = `
<h3>Useful commands</h3>
<hr/>
    <p>To check the status of the repository.</p>
    <ul>
        <li>
        <span>git status </span>
        <span >// Use after any other command to see what changes</span>
        </li>
    </ul>
    <p>To add files to staging area</p>
    <ul>
        <li>
            <span>git add <i>file1 file2 ...</i></span>
            <span>// you can add as many files as you want (including extension)</span>
        </li>
        <li hidden>
            <span>git add .</span>
            <span>// Careful! It will add everything: untracked and modified.</span>
        </li>
    </ul>
    <p>To save(commit) your changes on the local repository</p>
    <ul>
        <li>
        <span>git commit -m "<i>a message</i>"</span>
        <span>// short &amp; descriptive</span>
        </li>
    </ul>
<hr/>
    <p>Pushing the changes to an online repository</p>
    <ul>
        <li>
            <span>git push origin master</span>
            <span>// this pushes all commits to the master branch</span>
        </li>
    </ul>
<hr/>
    <p>Bring changes from GitHub to an existing local repository</p>
    <ul>
        <li>
            <span>git stash</span>
            <span> // Saves your working space temporarily</span>
        </li>
        <li>
            <span>git pull origin master</span>
            <span>// brings all changes that were commited since I cloned or last pull</span>
        </li>
        <li>
            <span>git stash pop</span>
            <span>// Retrieve the teporarily saved changes</span>
        </li>
    </ul>
<hr/>
    <p>Clone a repository into your local machine</p>
    <ul>
        <li>
            <span>git clone repo_url</span>
        </li>
    </ul>
`;
}




/*
TODO:

(1)- Add two webpages that you like into the array of dictionaries
     replace the url on LINK_TEMPLATE
     replace the title TITLE_TEMPLATE with a title that describes the webpage you selected.
(2)- Uncomment the last line on this file. the one that starts with
     document.querySelector()....


Once you are done,
1. save the file
2. let your partner know you are ready to commit and push
3. Follow instructions on the slides on the presentation

*/

// TODO(1)
let favPages = [
    {
        webTitle: 'TITLE_TEMPLATE',
        webLink: 'LINK_TEMPLATE'
    },
    {
        webTitle: 'TITLE_TEMPLATE',
        webLink: 'LINK_TEMPLATE'
    },
    {
        webTitle: 'CSS NEIU',
        webLink: 'https://neiu.acm.org'
    }
];

        
function render(pages) {
    let htmlContent = '';
    pages.forEach((page, index) => {
        let card = `
            <div align="center">
                <a href='`+page.webLink+`'>
              `+page.webTitle+`
              </a>
                <br>
                <iframe src="`+page.webLink+`"></iframe>
            </div>
        `;
        htmlContent+=card    
        console.log(card);
    });
    return htmlContent; 
}

// TODO(2)
//document.querySelector("#content").innerHTML = render(favPages);



