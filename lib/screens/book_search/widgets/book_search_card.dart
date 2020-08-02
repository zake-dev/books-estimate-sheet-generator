import 'package:flutter/material.dart';

import 'package:books_proposal_generator/constants.dart' as Constant;
import 'package:books_proposal_generator/models/book.dart';

class BookSearchCard extends StatelessWidget {
  final Book book;

  BookSearchCard({this.book}) : super();

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 200,
      constraints: BoxConstraints(minWidth: 50, maxWidth: 150),
      child: Card(
        semanticContainer: true,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: Image.network(book.thumbnailUrl),
            ),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: Text(book.title, style: Constant.headingTextStyle),
            ),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child:
                  Text('${book.price}원', style: Constant.subHeadingTextSTyle),
            ),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: Text(
                '${book.contents.length > 25 ? book.contents.substring(0, 26) + '...' : book.contents}',
                style: Constant.contentsTextStyle,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
