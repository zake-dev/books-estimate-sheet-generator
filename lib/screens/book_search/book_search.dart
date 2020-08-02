import 'package:flutter/material.dart';

import 'package:books_proposal_generator/constants.dart' as Constant;
import 'package:books_proposal_generator/widgets/styled_appbar.dart';
import 'package:books_proposal_generator/screens/book_search/widgets/book_search_board.dart';

class BookSearch extends StatelessWidget {
  final String query;

  BookSearch({this.query}) : super();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: StyledAppBar(),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Center(child: BookSearchBoard(title: query)),
          ),
          FloatingActionButton(
            child: Text('뒤로', style: Constant.headingTextStyle),
            onPressed: () => Navigator.of(context).pop(),
          )
        ],
      ),
    );
  }
}
