function vconvert() {
  var x, text;

  x = document.getElementById("numb").value;
  var word = 'package com.example.helloworld;';
    var word2 = 'package com.example.helloworld;';

var textValue=x.value;

  if (textValue = word) {
    text = "import 'package:flutter/material.dart';\n  void main() => runApp(MyApp());";
  } else {
    text = "Wrong XML Code ";
  }
  document.getElementById("demo").innerHTML = text;
}