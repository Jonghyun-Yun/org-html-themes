$( document ).ready(function() {
    $('#text-table-of-contents ul').first().addClass('nav');
    // ScrollSpy also requires that we use
    // a Bootstrap nav component.
    $('body').scrollspy({target: '#text-table-of-contents'});

    // add sticky table headers
    var offset = $('.title').height() + $('.subtitle').height();
    $('table').stickyTableHeaders({fixedOffset: offset});

    // set the height of tableOfContents
    var $postamble = $('#postamble');
    var $tableOfContents = $('#table-of-contents');
    $tableOfContents.css({paddingBottom: $postamble.outerHeight()});

    // add TOC button
    var toggleSidebar = $('<div id="toggle-sidebar"><a href="#table-of-contents"><h2>Table of Contents</h2></a></div>');
    $('#content').prepend(toggleSidebar);

    // add close button when sidebar showed in mobile screen
    var closeBtn = $('<a class="close-sidebar" href="#">Close</a>');
    var tocTitle = $('#table-of-contents').find('h2');
    tocTitle.append(closeBtn);
});
