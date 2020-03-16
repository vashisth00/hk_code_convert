function vconvert() {
  var x, text;

  x = document.getElementById("numb").value;
  var word = 'package com.example.helloworld;';

var textValue=x.value;

  if (textValue = word) {
    text = "import 'package:flutter/material.dart';\n  void main() => runApp(MyApp());";
  } else {
    text = "Wrong XML Code ";
  }
  document.getElementById("demo").innerHTML = text;
}





return Scaffold(
      appBar: new AppBar(
        backgroundColor: Color(0xff2CBCBD),
        title: Image(image: AssetImage('lib/assets/logo3.png'), height: 70),
        actions: <Widget>[
          new IconButton(
              icon: Icon(Icons.home),
              onPressed: () {
                Navigator.of(context).pushNamed("/allproteins");
              }),
          new IconButton(icon: Icon(Icons.account_circle), onPressed: null),
          new IconButton(icon: Icon(Icons.shopping_cart), onPressed: null),
        ],
      ),
      drawer: new Drawer(
        child: new ListView(
          children: <Widget>[
            new UserAccountsDrawerHeader(
              decoration: BoxDecoration(),
              currentAccountPicture: GestureDetector(
                child: new CircleAvatar(
                  backgroundColor: Colors.grey,
                  child: Icon(Icons.person, color: Color(0xffffffff)),
                ),
              ),
            ),
            InkWell(
              onTap: () {
                Navigator.of(context).pushNamed("/RecentSearches");
              },
              child: ListTile(
                title: Text('My Account'),
                leading: Icon(Icons.person),
              ),
            ),
            InkWell(
              onTap: () {},
              child: ListTile(
                title: Text('Home Page'),
                leading: Icon(Icons.home),
              ),
            ),
            InkWell(
              onTap: () {
                Navigator.of(context).pushNamed("/allproteins");
              },
              child: ListTile(
                title: Text('Sports Nutrition'),
                leading: Icon(Icons.person),
              ),
            ),
            InkWell(
              onTap: () {},
              child: ListTile(
                title: Text('Vitamins & Supplements'),
                leading: Icon(Icons.person),
              ),
            ),
            InkWell(
              onTap: () {},
              child: ListTile(
                title: Text('Ayurveda & herbs'),
                leading: Icon(Icons.person),
              ),
            ),
          ],
        ),
      ),