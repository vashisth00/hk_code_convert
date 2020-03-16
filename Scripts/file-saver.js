function vconvert() {
  var x, text;

  x = document.getElementById("numb").value;
  var word = 'package com.example.helloworld;';

   var str = document.getElementById("demo").innerHTML;
    var res = str.replace(/blue|house|car/gi, function (x) {
      return x.toUpperCase();
    });
    document.getElementById("demo").innerHTML = res;

var textValue=x.value;

  if (textValue = word) {
    text = "import 'package:flutter/material.dart';\n  void main() => runApp(MyApp());";
  } else {
    text = "Wrong XML Code ";
  }
  document.getElementById("demo").innerHTML = text;
}