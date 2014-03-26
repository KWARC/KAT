
var container = '#text';
var defaultContent = 'demo-cortex-content.html';

jQuery(document).ready(function () {
  var $loadFile = $(document.createElement('div'));

  $loadFile.append(
    $(document.createElement('input')).attr({
      type: 'text',
      placeholder: 'Paste an URL and press load',
      value: defaultContent,
      style: 'width:400px; height:30px; line-height:20px; margin:0;',
    }),
    $(document.createElement('button')).
      html('load').
      addClass('btn').
      on('click', function () {
        $.get($loadFile.find('input[type="text"]').val(), initDemo);
      })
  );

  $(container).html($loadFile);
});

function initDemo (content) {
  $(container).html(content);
  init();
}

function init () {
  //nice and simple

  var myJOBAD = new JOBAD(container); 
  myJOBAD.modules.load("KAT", function(){
    myJOBAD.Setup(); 
  }); 


  //var reviewViewer = new kat.review.ReviewViewer(service);
  //reviewViewer.apply();
}
