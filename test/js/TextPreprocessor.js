/*
 * Test suite for TestPreprocessor.js
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university,de">Vlad Merticariu</a>
 */

$(document).ready(function(){
    textPreprocessor = new kat.TextPreprocessor("#text");
    textPreprocessor.run();

    annotations = [
        {
            "idBase": "kat-140",
            "idExtent": "kat-155",
            "content": "<b>Title:</b> Annotation 1 <br/> <b>Content:</b> This is the annotation content."
        },
        {
            "idBase": "kat-60",
            "idExtent": "kat-60",
            "content": "<b>Title:</b> Annotation 2 <br/> <b>Content:</b> This is the annotation content.<br/>"
        }
    ]

    display = new kat.Display(annotations);
    display.run();
})
