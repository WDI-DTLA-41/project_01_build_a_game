var clickCount = 0;
var handleColorClick = function(evt){
  var currentColor = evt.target.value.getAttribute('id');
  userSequence.push(currentColor);
  if(currentColor !== consoleSequence[clickCount]){
    alert("wah wah");
    streak = 0;
    $streak = 0;
    clickCount=0;
    simonSequence = [];
    generateSimonSequence();
  } else if (consoleSequence === userSequence){
    streak ++;
    $streak = streak;
    clickCount = 0;
    if(record < streak){
      record = streak;
      $record = record;
    }
    generateSimonSequence();
    };

  }
}
