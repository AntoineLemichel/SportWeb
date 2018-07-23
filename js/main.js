$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});
// Function jQuery to remove menu (mobile) after click on a link
$(document).ready(function () {
    $(".navbar-nav li a").click(function (event) {
        $(".navbar-collapse").collapse('hide');
    });
});
// Function jQuery to remove menu (mobile) after click everywhere
$(document).ready(function () {
    $("html").on("touchstart click", function (event) {
        $(".navbar-collapse").collapse('hide');
    });
});
$(document).ready(function () {
    var btnBoxing = $(".btn-boxing");

    $(btnBoxing).click(function () {
        btnBoxing.each(function () {
            $(".card-boxing").toggleClass("bordered");
        });
    });
    var btnFitness = $(".btn-fitness");

    $(btnFitness).click(function () {
        btnFitness.each(function () {
            $(".card-fitness").toggleClass("bordered");
        });
    });
    var btnJogging = $(".btn-jogging");

    $(btnJogging).click(function () {
        btnJogging.each(function () {
            $(".card-jogging").toggleClass("bordered")
        });
    });
});

function displayValsBoxing() {
    var boxingHours = $(".selectBoxing").val();
    var amountBoxing = $(".amountBoxing").val();
    var priceBoxing = $(".tableBoxing").find('td:eq(0)').html();
    var priceBoxingInt = parseInt(priceBoxing);
    $(".pricingBoxing").html((boxingHours * priceBoxingInt) * amountBoxing);
}

function displayValsFitness() {
    var fitnessHours = $(".selectFitness").val();
    var amountFitness = $(".amountFitness").val();
    var priceFitness = $(".tableFitness").find('td:eq(0)').html();
    var priceFitnessInt = parseInt(priceFitness);
    $(".pricingFitness").html((fitnessHours * priceFitnessInt) * amountFitness);
}

function displayValsJogging() {
    var joggingHours = $(".selectJogging").val();
    var amountJogging = $(".amountJogging").val();
    var priceJogging = $(".tableJogging").find('td:eq(0)').html();
    var priceJoggingInt = parseInt(priceJogging);
    $(".pricingJogging").html((joggingHours * priceJoggingInt) * amountJogging);
}
$(".pricingBoxing").change(displayValsBoxing);
$(".pricingFitness").change(displayValsFitness);
$(".pricingJogging").change(displayValsJogging);
displayValsBoxing();
displayValsFitness();
displayValsJogging();


function addCart(){
    var itemCount = 0;
    $('.add-Item').click(function(){
        itemCount++;
        $('.add-cart').html(itemCount);
    });
}
addCart();
$("form").submit(function() { return false; });