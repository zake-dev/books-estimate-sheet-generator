import 'package:flutter/material.dart';

import 'package:books_proposal_generator/screens/file_selection_page/file_selection_page.dart';

class Router {
  static Route<dynamic> generateRoute(RouteSettings settings) {
    switch (settings.name) {
      case '/':
        return MaterialPageRoute(builder: (_) => FileSelectionPage());
      default:
        return MaterialPageRoute(
            builder: (_) => Scaffold(
                  body: Center(child: Text('404 잘못된 주소입니다. ${settings.name}')),
                ));
    }
  }
}
