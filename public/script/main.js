let app = {
    
    init: function () {
        this.addEvents();
    },
    addEvents: function () {
        let loadContent = function () {
            
            fetch("/img")
                .then(res => res.json())
                .then(data => {
                    let posts = document.getElementsByClassName("posts")[0];
                    posts.innerHTML = data.reduce((cadena, element) => {
                        return cadena +
                            ` 
                            <article class="post-article">
                <p class="info-post">${element.post}</p>
                <div class="upload-img">
                    <img src="../uploads/${element.path}" >
                </div>
                <button class="btn-ice"><i class="far fa-snowflake"></i></button>
            </article>
                            `
                    }, "");
        
                });
        }
        let form = document.forms.savePost;

        form.addEventListener('submit', function (event) {
            event.preventDefault();
            fetch(form.action, {
                    method: 'POST',
                    body: new FormData(form)
                }).then(res => res.json())
                .then(data => {
                    //console.log(data);
                    form.post.value="";
                    form.archivo.vale=undefined;
                    form.title.vale="";
                    loadContent();
                });
        });

        loadContent();

    }
};
window.onload = () => app.init();