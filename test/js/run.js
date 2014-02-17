/**
 * Script to demonstrate the KATService
 * @author <a href="mailto:alex@flanche.net">Alex Dumitru</a>
 */
jQuery(document).ready(function () {
  var $loadFile = $(document.createElement('div'));

  $loadFile.append(
    $(document.createElement('input')).attr({
      type: 'text',
      placeholder: 'Paste an URL and press load',
      value: 'demo-document-content.html',
      style: 'width:400px; height:30px; line-height:20px; margin:0;',
    }),
    $(document.createElement('button')).
      html('load').
      addClass('btn').
      on('click', function () {
        $.get($loadFile.find('input[type="text"]').val(), initDemo);
      })
  );

  $('#text').html($loadFile);
});

function initDemo (content) {
  $('#text').html(content);
  // For the demo only: load the localStorage from a file
  if (localStorage.annotationRegistry) {
    init();
    return;
  }

  jQuery.getJSON('demo-localStorage.json', function (res) {
    for (var key in res) {
      localStorage[key] = res[key];
    }
    init();
  }).fail(function () {
    console.warn(arguments);
  });
}

function init () {
  //nice and simple
  var service = new kat.main.KATService("#text");
  service.run();

  var reviewViewer = new kat.review.ReviewViewer(service);
  reviewViewer.apply();
}