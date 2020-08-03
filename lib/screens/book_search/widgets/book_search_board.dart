import 'package:flutter/material.dart';

import 'package:books_proposal_generator/constants.dart' as Constant;
import 'package:books_proposal_generator/models/book.dart';
import 'package:books_proposal_generator/models/book_queries.dart';

import './book_search_card_wrapper.dart';

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
          height: 410,
          constraints: BoxConstraints(maxWidth: 1000),
          padding: EdgeInsets.all(10.0),
          decoration: BoxDecoration(
            color: Constant.greyBackgroundColor,
            borderRadius: BorderRadius.circular(8.0),
          ),
          child: _getBookList(books),
        );
      },
    );
  }

  Widget _getBookList(List<Book> books) {
    if (books.isEmpty) {
      return Container(
        alignment: Alignment.center,
        child: Text(
          '일치하는 검색결과가 없습니다.',
          style: Constant.headingTextStyle.copyWith(color: Color(0xFFCCCCCC)),
        ),
      );
    }
    return ListView.builder(
      padding: EdgeInsets.all(20.0),
      shrinkWrap: true,
      scrollDirection: Axis.horizontal,
      itemCount: books.length,
      itemBuilder: (context, index) =>
          BookSearchCardWrapper(book: books[index]),
    );
  }
}
