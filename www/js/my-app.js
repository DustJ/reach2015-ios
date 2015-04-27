// Initialize your app
var myApp = new Framework7({
    swipePanel: 'left'

});

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true,
    animateNavBackIcon: true,
    domCache: true
});


var myPhotoBrowserPage = myApp.photoBrowser({
    photos : [
        'img/venues/grandamerica-firstfloor.jpg',
        'img/venues/grandamerica-thirdfloor.jpg',
    ],
    type: 'page',
    backLinkText: 'Back'
});
$$('.pb-page').on('click', function () {
    myPhotoBrowserPage.open();
});


// Countdown Date(2015, 06, 28) = July 28th 2015 (zero based month)
var timespan = countdown(null, new Date(2015, 06, 28), countdown.DAYS);
var clock = document.getElementById("countdown-holder");

if (timespan.value < 0) {
    $$('.page[data-page="index"]').css('background-image', 'url("img/home-bg-begin.jpg")');
} else {

    // Countdown.js rounds, so at noon, the count dropped a full day.
    // This was fine until the day before the event where it would say 0 days left (less then 1 full day remained).
    // After a little usability testing everyone thought it should say 1 day left until the morning of the event.
    daysAdjuster = timespan.days+1; 
    
    //update #countdown-holder
    clock.innerHTML = daysAdjuster.toString();
    
    // Testing
    console.log(timespan);
    //console.log(dayAdjuster)
};