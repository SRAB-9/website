// this script works with JQuery Library

$('.page_links, .main_content, .cards_container, .welcome').on('click', function() { // when we click anywhere on the page then ..
    $('.nav-toggle').removeClass('open'); // remove 'open' class
    $('.menu-down').removeClass('collapse-1'); // remove 'collapse' class
});

$('.nav-toggle').on('click', function() { // when we click on the navbar then ..
    $('.nav-toggle').toggleClass('open'); // add 'open' class
    $('.menu-down').toggleClass('collapse-1'); // add 'collapse' class
});