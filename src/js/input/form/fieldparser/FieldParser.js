/**
 * A field parser parses an annotation:field into an html string. This trait serves only as
 * an interface that the extending classes follow
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticari@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineTrait("kat.input.form.fieldparser.FieldParser", {
  needs: {
    canParse: Function,
    parse   : Function
  }
})
