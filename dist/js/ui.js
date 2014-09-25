(function (window, document) {

    var layout   = document.getElementById('layout'),
        menu     = document.getElementById('menu'),
        menuLink = document.getElementById('menuLink'),
        language = document.getElementById('language');

    var menuLinks = menu.getElementsByTagName('a'),
        lanBtn = language.getElementsByTagName('span')[0],
        lanList = language.getElementsByTagName('div')[0];//alert(lanBtn);


    function opClass(element, className, operation) {
        var classes = element.className.split(/\s+/),
            length = classes.length,
            i = 0;

        for(; i < length; i++) {
          if (classes[i] === className) {
            classes.splice(i, 1);
            break;
          }
        }

        if ( operation === 'toggle' ) {
            // The className is not found
            if (length === classes.length) {
                classes.push(className);
            }
        }

        element.className = classes.join(' ');
    }

    menuLink.onclick = function (e) {
        var active = 'active';
        var e = e || window.event; //事件

        e.preventDefault();
        opClass(layout, active, 'toggle');
        opClass(menu, active, 'toggle');
        opClass(menuLink, active, 'toggle');

        menu.onclick = function (e) {
            var e = e || window.event; //事件
            var target =  e.targe || e.srcElement; //事件源，不管在哪个事件中，只要你操作的那个元素就是事件源
            if( e.target.nodeName.toLocaleLowerCase()=="a" ) {
                //e.target.style.background = "red"
                opClass(layout, active, 'remove');
                opClass(menu, active, 'remove');
                opClass(menuLink, active, 'remove');
            }
        }

        main.onclick = function (e) {
            var e = e || window.event; //事件
            //e.preventDefault();
            opClass(layout, active, 'remove');
            opClass(menu, active, 'remove');
            opClass(menuLink, active, 'remove');
        }

    };

    lanBtn.onclick = function () {
        if (!lanList.style.display|lanList.style.display==='none') lanList.style.display = 'block';
        else lanList.style.display = 'none';
    }
    language.onmouseenter = function () {lanList.style.display = 'block';}
    language.onmouseleave = function () {lanList.style.display = 'none';}

}(this, this.document));
