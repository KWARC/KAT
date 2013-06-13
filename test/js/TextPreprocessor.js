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
            "content": "Annotation 1 content"
        },
        {
            "idBase": "kat-60",
            "idExtent": "kat-60",
            "content": "Annotation 2 content"
        }
    ]
    
    display = new kat.Display(annotations);
    display.run();
})
