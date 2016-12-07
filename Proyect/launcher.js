  function createLauncherPanel() {
        var div = document.createElement("div");
        div.setAttribute("class", "launcher-panel");
        div.classList.add("hidden");
        div.setAttribute('style', 'height:450px;width:750px;overflow-y:hidden;margin:auto;overflow-y:scroll;');

        div.appendChild(createLauncherLink(div));

        document.getElementsByTagName("body")[0].appendChild(div);

        return div;
    }

    function createLauncherLink(container) {
        var link = document.createElement("link");
        link.setAttribute("rel", "import");
        link.setAttribute("href", "http://v4-alpha.getbootstrap.com/components/modal/");

       link.onload = function () {
            container.appendChild(link.import.querySelector('.bd-docs'));
        };
        return link;
    }
    
    createLauncherPanel();