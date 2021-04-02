$(()=>{
  //window.alert('rectangle');
  let $width = $('#width'),
      $height = $('#height'),
      $btnCal = $('#calc'),
      $perimeter = $('#perimeter'),
      $area = $('#area'),
      $widthValidate = $('#width-validate'),
      $heightValidate = $('#height-validate'),
      isPassValidate = false;

  $btnCal.click(()=>{
    let w = Number($width.val()),
        h = Number($height.val());

    let p = round((w+h)*2,2),
        a = round(w*h,2);

    $perimeter.val(p);
    $area.val(a);
  })
});

function round(x,n){
  return Math.round(x*Math.pow(10,n))/Math.pow(10,n);
}

