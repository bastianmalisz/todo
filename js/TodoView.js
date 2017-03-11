document.addEventListener("DOMContentLoaded",function(event) {
    
    var todos = [
        new Todo('wynieść śmieci'),
        new Todo('nakarmić psa'),
        new Todo('pouczyc programowac')
    ];

    TodoRenderer.renderList(todos);
});

