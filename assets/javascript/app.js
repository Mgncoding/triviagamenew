// Hiding questions and results
$(".questions").hide()
$('.end-game').hide()
// Click function will display the results
$("#begin").click(function(){
   $('.questions').show()
   $('.begin-game').hide()
   $('.end-game').hide()
   runTimer()
})

// Timer for function
var number = 30
var intervalId
function runTimer() {
  clearInterval(intervalId)
  intervalId = setInterval(decrement, 1000)
}
function decrement() {
  number--
  $("#timer").html("<h3>" + number + "</h3>")
  if (number === 0) {
    stopTime()
    alert("Time's Up!")
    $('.questions').hide()
    $('.end-game').show()
  }
}
function stopTime() {
  clearInterval(intervalId)
  number = 30
}
// Call in recording correct responses
$(document).ready(function () {
    $("input[type='radio']").on('change', function () {
        $('audio#pop')[0].play()
        
        var q1 = $('input[name="question1"]:checked').val()
        var q2 = $('input[name=question2]:checked','#form').val()
        var q3 = $('input[name=question3]:checked','#form').val()
        var q4 = $('input[name=question4]:checked','#form').val()
        var q5 = $('input[name=question5]:checked','#form').val()
        var q6 = $('input[name=question6]:checked','#form').val()
        var q7 = $('input[name=question7]:checked','#form').val()
        var q8 = $('input[name=question8]:checked','#form').val()
        var q9 = $('input[name=question7]:checked','#form').val()
        var q10 = $('input[name=question8]:checked','#form').val()
            
        var numberCorrect = 0
        var numberWrong = 0
        var numberMissed = 0
        
        if (q1 == "Seven") {
            numberCorrect++
            }
            else if (!q1) {
            numberMissed++
            }
            else {
            numberWrong++
            }

        if (q2 == "Kazooie") {
            numberCorrect++
            }
            else if (!q2) {
            numberMissed++
            }
            else {
            numberWrong++
            }
        
        if (q3 == "Slippy") {
            numberCorrect++
            }
            else if (!q3) {
            numberMissed++
            }
            else {
            numberWrong++
            }
        
        if (q4 == "SuperMarioWorld") {
            numberCorrect++
            }
            else if (!q4) {
            numberMissed++
            }
            else {
            numberWrong++
            }
        
        if (q5 == "Lanky") {
            numberCorrect++
            }
            else if (!q5) {
            numberMissed++
            }
            else {
            numberWrong++
            }
        
        
        if (q6 == "Deedee") {
            numberCorrect++
            }
            else if (!q6) {
            numberMissed++
            }
            else {
            numberWrong++
            }
        
        
        if (q7 == "Wii") {
            numberCorrect++
            }
            else if (!q7) {
            numberMissed++
            }
            else {
            numberWrong++
            }
        
        if (q8 == "Wario") {
            numberCorrect++
            }
            else if (!q8) {
            numberMissed++
            }
            else {
            numberWrong++
            }
        if (q9 == "Golden") {
            numberCorrect++
            }
            else if (!q9) {
            numberMissed++
            }
            else {
            numberWrong++
            }
        if (q10 == "Sports") {
            numberCorrect++
            }
            else if (!q10) {
            numberMissed++
            }
            else {
            numberWrong++
            }

        $("#correct").html("<h5>" + numberCorrect + "</h5>")
        $("#incorrect").html("<h5>" + numberWrong + "</h5>")
        $("#missed").html("<h5>" + numberMissed + "</h5>")
     })
})


$("#submit").click(function(){
    stopTime()
    $('.questions').hide()
    $('.begin-game').hide()
    $('.end-game').show()
 })

 $("#playagain").click(function(){
    $('.questions').hide()
    $('.begin-game').show()
    $('.end-game').hide()
    stopTime()
 });