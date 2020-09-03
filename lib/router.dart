import 'package:books_proposal_generator/screens/book_search/book_search.dart';
import 'package:flutter/material.dart';

import 'package:books_proposal_generator/screens/file_selection/file_selection.dart';

class Router {
  static Route<dynamic> generateRoute(RouteSettings settings) {
    switch (settings.name) {
      case '/':
        return MaterialPageRoute(builder: (_) => FileSelection());
      case '/search':
        final String query = settings.arguments as String;
        return MaterialPageRoute(builder: (_) => BookSearch(query: query));
      default:
        return MaterialPageRoute(
            builder: (_) => Scaffold(
                  body: Center(child: Text('404 잘못된 주소입니다. ${settings.name}')),
                ));
    }
  }
}
