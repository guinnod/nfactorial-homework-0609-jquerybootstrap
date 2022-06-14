$(document).ready(function(){
    $("#send").click(function(){
      const nameP = $("#nameI").val();
      const charP = $("#characterI").val();
      const advP = $("#adverbI").val();
      const adjP = $("#adjectiveI").val();
      let sentence = `One day, my friend <span style="color: green;"> ${nameP}</span> was visiting New York and ran into <span style="color: green;"> ${charP}</span>. 
      ${nameP} ran <span style="color: green;"> ${advP}</span> to meet <span style="color: green;"> ${charP}</span>. But <span style="color: green;"> ${charP}</span> turned out to be very <span style="color: green;"> ${adjP}</span>
      and <span style="color: green;"> ${nameP}</span> did not enjoy the meeting.`;
      let tagg = `<p class="tagClass">${sentence}</p>`;
      // $('.namePP').append(nameP);
      // $('.charPP').append(charP);
      // $('.advPP').append(advP);
      // $('.adjPP').append(adjP);
      $( ".inner" ).append(tagg);
      console.log('done!');
    });
  });