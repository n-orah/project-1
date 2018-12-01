$(document).ready(function(){
var player = 'x';
var count = 0;



function win() {
    var one = $('#box-1').text();
    var two = $('#box-2').text();
    var three = $('#box-3').text();
    var four = $('#box-4').text();
    var five = $('#box-5').text();
    var six = $('#box-6').text();
    var seven = $('#box-7').text();
    var eight = $('#box-8').text();
    var nine = $('#box-9').text();
count++;


    

    if(one === player && two === player && three === player ||
       four === player && five === player && six === player ||
       seven === player && eight === player && nine === player){
        swal(player + " " + "is the winner!");
    }

       
    else if(one === player && four === player && seven === player ||
        two === player && five === player && eight === player ||
        three === player && six === player && nine === player){
            swal(player + " " + "is the winner!");}

    else if(one === player && five === player && nine === player ||
         three === player && five === player && seven === player){
swal(player + " " + "is the winner!");}




        
        else if (count === 9) {
             alert ('Tie');
                    }
}




$('.box').on('click', function(){
    $(this).text(player);
    win()
    if (player=== "x"){

        player = "o"
    } else {
        player = "x";
    }
});

});
