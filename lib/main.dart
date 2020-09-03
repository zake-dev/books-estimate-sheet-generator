import 'package:flutter/material.dart';

import 'package:google_fonts/google_fonts.dart';

import 'package:books_proposal_generator/router.dart' as Route;
import 'package:books_proposal_generator/constants.dart' as Constant;

void main() async {
  runApp(App());
}

class App extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: Constant.appTitle,
      theme: ThemeData(
        primarySwatch: Colors.indigo,
        visualDensity: VisualDensity.adaptivePlatformDensity,
        textTheme: GoogleFonts.nanumGothicTextTheme(),
      ),
      onGenerateRoute: Route.Router.generateRoute,
      initialRoute: Constant.homeRoute,
    );
  }
}
