$(document).ready(function() {



  $("#submit-button").click(function() {

    var cat = new Array();

    cat[0] = document.forms["quiz"]["login"].value;
    cat[1] = document.forms["quiz"]["q1"].value;
    cat[2] = document.forms["quiz"]["q2"].value;
    cat[3] = document.forms["quiz"]["q3"].value;
    cat[4] = document.forms["quiz"]["q4"].value;
    cat[5] = document.forms["quiz"]["q5"].value;
    cat[6] = document.forms["quiz"]["q6"].value;
    cat[7] = document.forms["quiz"]["q7"].value;
    cat[8] = document.forms["quiz"]["q8"].value;
    cat[9] = document.forms["quiz"]["q9"].value;
    cat[10] = document.forms["quiz"]["q10"].value;
    cat[11] = document.forms["quiz"]["q11"].value;
    cat[12] = document.forms["quiz"]["q12"].value;
    cat[13] = document.forms["quiz"]["q13"].value;
    cat[14] = document.forms["quiz"]["q14"].value;
    cat[15] = document.forms["quiz"]["q15"].value;

    var totalAnswers = 0;
    for (var i in cat) {
      if (cat[i] === "" || cat[i] === undefined) {
        $("#cat" + i + "-error").css("display", "block");
        window.scrollTo(0, 0);
      } else if (cat[i] !== "" || cat[i] !== undefined) {
        $("#cat" + i + "-error").css("display", "none");
        totalAnswers += 1;
      };
    ;}

    if (totalAnswers === 16) {
      var totalCorrect = 0;
      if (cat[1] === "c") {
        totalCorrect+=1;
      } else {
        $("label[for=q1" + cat[1] + "]").addClass("wrong");
      }
      if (cat[2] === "a") {
        totalCorrect+=1;
      } else {
        $("label[for=q2" + cat[2] + "]").addClass("wrong");
      }
      if (cat[3] === "b") {
        totalCorrect+=1;
      } else {
        $("label[for=q3" + cat[3] + "]").addClass("wrong");
      }
      if (cat[4] === "b") {
        totalCorrect+=1;
      } else {
        $("label[for=q4" + cat[4] + "]").addClass("wrong");
      }
      if (cat[5] === "d") {
        totalCorrect+=1;
      } else {
        $("label[for=q5" + cat[5] + "]").addClass("wrong");
      }
      if (cat[6] === "c") {
        totalCorrect+=1;
      } else {
        $("label[for=q6" + cat[6] + "]").addClass("wrong");
      }
      if (cat[7] === "b") {
        totalCorrect+=1;
      } else {
        $("label[for=q7" + cat[7] + "]").addClass("wrong");
      }
      if (cat[8] === "d") {
        totalCorrect+=1;
      } else {
        $("label[for=q8" + cat[8] + "]").addClass("wrong");
      }
      if (cat[9] === "d") {
        totalCorrect+=1;
      } else {
        $("label[for=q9" + cat[9] + "]").addClass("wrong");
      }
      if (cat[10] === "c") {
        totalCorrect+=1;
      } else {
        $("label[for=q10" + cat[10] + "]").addClass("wrong");
      }
      if (cat[11] === "a") {
        totalCorrect+=1;
      } else {
        $("label[for=q11" + cat[11] + "]").addClass("wrong");
      }
      if (cat[12] === "b") {
        totalCorrect+=1;
      } else {
        $("label[for=q12" + cat[12] + "]").addClass("wrong");
      }
      if (cat[13] === "a") {
        totalCorrect+=1;
      } else {
        $("label[for=q13" + cat[13] + "]").addClass("wrong");
      }
      if (cat[14] === "b") {
        totalCorrect+=1;
      } else {
        $("label[for=q14" + cat[14] + "]").addClass("wrong");
      }
      if (cat[15] === "b") {
        totalCorrect+=1;
      } else {
        $("label[for=q15" + cat[15] + "]").addClass("wrong");
      }

      $("label[for='q1c']").addClass("correct");
      $("label[for='q2a']").addClass("correct");
      $("label[for='q3b']").addClass("correct");
      $("label[for='q4b']").addClass("correct");
      $("label[for='q5d']").addClass("correct");
      $("label[for='q6c']").addClass("correct");
      $("label[for='q7b']").addClass("correct");
      $("label[for='q8d']").addClass("correct");
      $("label[for='q9d']").addClass("correct");
      $("label[for='q10c']").addClass("correct");
      $("label[for='q11a']").addClass("correct");
      $("label[for='q12b']").addClass("correct");
      $("label[for='q13a']").addClass("correct");
      $("label[for='q14b']").addClass("correct");
      $("label[for='q15b']").addClass("correct");

      console.log(cat);
      console.log(totalAnswers);
      console.log("You have" + " " + totalCorrect + " " + "answers correct");
      $(".results").css("display", "block");
      $("#score").text(" " + totalCorrect + " ");
      $("#submit-button").css("display", "none");
      /* document.forms[0].submit();  */

    }; /* end if (totalAnswers === 15) */
  }); /* end submit.click */

  $("#review").click(function() {
    $(".results").css("display", "none");
  });
}); /* end document.ready */
