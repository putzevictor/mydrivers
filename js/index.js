function translate(lng, tagAttr){
    var translate = new Translate();
    translate.init(tagAttr, lng);
    translate.process();
}
$(document).ready(function(){
  $("#enTranslator").click(function(){
    translate('en', 'lng-tag');
  });
  $("#esTranslator").click(function(){
    translate('es', 'lng-tag');
  });
});