// add solution here
function theBeatlesPlay(musicians, instruments) {
  var finalArray = []
  var i;
  for (i=0; i<musicians.length; i++) {
    finalArray[i]=musicians[i]+" plays "+instruments[i];
  }
  return finalArray;

}
