/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
  var textField = '<xml><field name="type" type="checkboxes">'+
	  '<!-- a field of type "select" allows the user to select from a given set of options '+
	  '    e.g. via radio buttons -->'+
	  '<options>'+
	  '  <option default="true">'+
	  '    <value>simple</value>'+
    '    <label>Simple</label>'+
	  '    <documentation>definiens is does not contain the definiendum</documentation>'+
	  '  </option>'+
	  '  <option>'+
	  '    <documentation>definiendum applied to formal variables</documentation>'+
	  '    <value>pattern</value>'+
    '    <label>Pattern</label>'+
	  '  </option>'+
	  '  <option>'+
	  '    <documentation>definiens may contain definiendum</documentation>'+
	  '    <value>recursive</value>'+
    '    <label>Recursive</label>'+
	  '  </option>'+
	  '  <option>'+
	  '    <value>implicit</value>'+
    '    <label>Implicit</label>'+
	  '    <documentation>definiendum is described unambiguously</documentation>'+
	  '  </option>'+
	  '</options>'+
    '<number atleast="2" atmost="5"/>'+
	'</field></xml>';
  var fieldParser = new kat.input.form.fieldparser.CheckboxesParser();
  var html = fieldParser.parse(new kat.util.XMLDoc(textField).filter("//field")[0]);
  $("#fieldDisplay").html(html);
})

