// To select each cell of chessboard
$(".square").each(function() 
{
    $(this).on("contextmenu", function(event){
        event.preventDefault();
        var tmp1=this;
        var contextElement = document.getElementById("context-menu");
        contextElement.style.top = event.pageY + 10;
        contextElement.style.left = event.pageX - 10;
        contextElement.classList.add("active");

        // By clicking pieces will be placed in respected cell
        $(".item").on("click", function()
        {
            if(this.innerText == " Reload")
            {
                location.reload();
            }
            else if(tmp1.innerText=="")
            {
                tmp1.innerText=this.innerText;
            }
            else{
                console.log("not empty");
            }
            
        })

      });
})
 
$(".button").on("click",function()
    {
        var test=0;
        if(($("[cell=11]").html() != " Rook") || ($("[cell=18]").html() != " Rook") || ($("[cell=41]").html() != " Rook") || ($("[cell=48]").html() != " Rook"))
        {
            alert("Check all position of Rook");
            test=1;
        }  

        if(($("[cell=12]").html() != " Knight") || ($("[cell=17]").html() != " Knight") || ($("[cell=42]").html() != " Knight") || ($("[cell=47]").html() != " Knight"))
        {
            alert("Check all position of Knight");
            test=1;
        }
        
        if(($("[cell=13]").html() != " Bishop") || ($("[cell=16]").html() != " Bishop") || ($("[cell=43]").html() != " Bishop") || ($("[cell=46]").html() != " Bishop"))
        {
            alert("Check all position of Bishop");
            test=1;
        }

        if(($("[cell=14]").html() != " Queen") || ($("[cell=44]").html() != " Queen") )
        {
            alert("Check all position of Queen");
            test=1;
        }

        if(($("[cell=15]").html() != " King") || ($("[cell=45]").html() != " King") )
        {
            alert("Check all position of King");
            test=1;
        }

        if(test==0)
        {
            alert("Good to go");
        }

        if(($("[cell=21]").html() != " Pawn") || ($("[cell=22]").html() != " Pawn") || ($("[cell=23]").html() != " Pawn") || ($("[cell=24]").html() != " Pawn") ($("[cell=25]").html() != " Pawn") || ($("[cell=26]").html() != " Pawn") || ($("[cell=27]").html() != " Pawn") || ($("[cell=28]").html() != " Pawn") ($("[cell=31]").html() != " Pawn") || ($("[cell=32]").html() != " Pawn") || ($("[cell=33]").html() != " Pawn") || ($("[cell=34]").html() != " Pawn") ($("[cell=35]").html() != " Pawn") || ($("[cell=36]").html() != " Pawn") || ($("[cell=37]").html() != " Pawn") || ($("[cell=38]").html() != " Pawn"))
        {
            alert("Check all position of Pawn");
            test=1;
        }

        if(test==0)
        {
            alert("Good to go");
        }
        
    }
)