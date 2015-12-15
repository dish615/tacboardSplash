//when someone clicks the button...
    //generate a random number (0 to the size of the array)
    //pick a random quote
    //display it in "quote-holder"
        //needs to replace whatever is there before


var quotes= ["We are all in the gutter, but some of us are looking at the stars.",
             "Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind.", 
             "This too, shall pass.", 
             "Keep your eyes on the stars and your feet on the ground.",
             "The only person you should try to be better than is the person you were yesterday.",
             "Never be bullied into silence. Never allow yourself to be made a victim. Accept no one’s definition of your life; define yourself.",
             "Faith is the art of holding on to things your reason has once accepted, in spite of your changing moods.",
             "A man who flies from his fear may find that he has only taken a shortcut to meet it.",
             "Life’s too mysterious to take too serious.",
             "No one can make you feel inferior without your consent.",
             "The woman who follows the crowd will usually go no further than the crowd. The woman who walks alone is likely to find herself in places no one has been before.",
             "You can’t go around building a better world for people. Only people can build a better world for people. Otherwise it’s just a cage.",
             "There isn’t a way things should be. There’s just what happens, and what we do.",
             "It’s not about how hard you can hit; it’s about how hard you can get hit and keep moving forward.",
             "More fuck yeah, less fuck that.",
             "If you want to go fast, go alone. If you want to go far, go together.",
             "It’s OK to not be OK, as long as you don’t stay that way.",
             "I can be changed by what happens to me but I refuse to be reduced by it.",
             "Believe you can and you’re halfway there.",
             "May I never be complete. May I never be content. May I never be perfect.",
             "Nothing in life is to be feared; it is only to be understood. Now is the time to understand more so that we may fear less.",
             "Those who don’t believe in magic will never find it.",
             "There is no elevator to success — you have to take the stairs.",
             "Plant your garden and decorate your own soul, instead of waiting for someone to bring you flowers.",
             "It does not do to dwell on dreams and forget to live.",
             "Don’t sweat the petty things and don’t pet the sweaty things.",
             "Do what you feel in your heart to be right, for you’ll be criticized anyway.",
             "Do not set yourself on fire in order to keep others warm.",
             "The way I see it, every life is a pile of good things and bad things. The good things don’t always soften the bad things, but vice versa, the bad things don’t always spoil the good things and make them unimportant.",
             "It’s supposed to be hard. If it were easy, everyone would do it.",
             "Ask yourself if what you’re doing today will get you closer to where you want to be tomorrow.",
             "Life may not be the party we hoped for, but while we’re here, we should dance.",
             "Never cowardly or cruel. Never give up, never give in.",
             "Do not go where the path may lead, go instead where there is no path and leave a trail.",
             "In 20 years, you probably won’t even remember this." ];


var authors=["Oscar Wilde",
             "Dr. Seuss",
             "Anonymous",
             "Theodore Roosevelt",
             "Anonymous",
             "Harvey Fierstein",
             "C.S. Lewis",
             "Sador",
             "Mary Engelbreit",
             "Eleanor Roosevelt",
             "Albert Einstein",
             "Terry Pratchett",
             "Terry Pratchett",
             "Rocky Balboa",
             "Anonymous",
             "African proverb",
             "Anonymous",
             "Maya Angelou",
             "T. Roosevelt",
             "Chuck Palahniuk",
             "Marie Curie",
             "Roald Dahl",
             "Anonymous",
             "Jose Luis Borges",
             "Albus Dumbledore",
             "George Carlin",
             "Eleanor Roosevelt",
             "Anonymous",
             "Doctor Who",
             "Jimmy Dugan",
             "Anonymous",
             "Anonymous",
             "Doctor Who",
             "Ralph Waldo Emerson",
             "Anonymous"];

$(document).ready(function() {
    $("#generator").click(function (){
       var ind= Math.floor(Math.random()*quotes.length);
        console.log(ind);
       // console.log(quotes.length);
        var quote=quotes[ind];
        console.log(quote);
        var author=authors[ind];
        var wholeItem=quote+" ("+author+")";
        console.log(wholeItem);
        console.log($("#quote-holder").text().length==0);
     
        if ($("#quote-holder").text().length==0) {
            $("#quote-holder").text(wholeItem);
        } else {
            $("#quote-holder").empty();
            $("#quote-holder").text(wholeItem);
        }
        
        
    });
    
});











