import 'package:flutter/material.dart';

import 'package:books_proposal_generator/models/book.dart';

import 'book_search_card_contents.dart';

class BookSearchCardWrapper extends StatelessWidget {
  final Book book;

  BookSearchCardWrapper({this.book}) : super();

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 280,
      child: Card(
        elevation: 4.0,
        child: InkWell(
          child: BookSearchCardContents(book: book),
          onTap: () {},
        ),
      ),
    );
  }
}
