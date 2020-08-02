import 'package:flutter/material.dart';

import 'package:books_proposal_generator/constants.dart' as Constant;
import 'package:books_proposal_generator/models/book.dart';
import 'package:books_proposal_generator/models/book_queries.dart';
import 'package:books_proposal_generator/screens/book_search/widgets/book_search_card.dart';

class BookSearchBoard extends StatelessWidget {
  final String title;

  BookSearchBoard({this.title}) : super();

  @override
  Widget build(BuildContext context) {
    return FutureBuilder(
      future: fetchBooks(query: title),
      builder: (context, snapshot) {
        final List<Book> books = snapshot.data;

        if (snapshot.connectionState != ConnectionState.done) {
          return CircularProgressIndicator();
        }
        return Container(
          height: 500,
          width: 500,
          padding: EdgeInsets.all(10.0),
          decoration: BoxDecoration(
            border: Border.all(color: Constant.primaryColor),
            borderRadius: BorderRadius.circular(8.0),
          ),
          child: ListView.builder(
            padding: EdgeInsets.all(10.0),
            shrinkWrap: true,
            scrollDirection: Axis.horizontal,
            itemCount: books.length,
            itemBuilder: (context, index) => BookSearchCard(book: books[index]),
          ),
        );
      },
    );
  }
}
