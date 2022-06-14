$(document).ready(function(){
    $("#send").click(function(){
      const charP = $("#characterI").val();
      const advP = $("#adverbI").val();
      const adjP = $("#adjectiveI").val();
      let ans = (charP*advP)*(Math.log2(adjP));
      let anss = ans>5000?'not good':'ok';
      let sentence = `File is ${ans} which is ${anss}`;
      // $('.namePP').append(nameP);
      // $('.charPP').append(charP);
      // $('.advPP').append(advP);
      // $('.adjPP').append(adjP);
      $( ".inner" ).append(sentence);
      console.log('done!');
    });
  });