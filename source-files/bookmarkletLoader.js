(function(){
        var head = document.getElementsByTagName('head')[0];
        var scriptElement = document.createElement('script');
        scriptElement.src = 'https://jira.hashbrown.club/bookmarklet.js';
        head.appendChild(scriptElement);
        head.removeChild(scriptElement);
})();
