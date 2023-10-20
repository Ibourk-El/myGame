let main = document.querySelectorAll( "main" )

main.forEach( (e,index) =>
{
    e.addEventListener( "click", () =>
    {
        location.href = "./indexFile/index.html"
        localStorage.setItem("index",index)
    })
})