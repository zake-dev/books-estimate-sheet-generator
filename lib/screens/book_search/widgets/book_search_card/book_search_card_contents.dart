import 'package:flutter/material.dart';

import 'package:books_proposal_generator/constants.dart' as Constant;
import 'package:books_proposal_generator/models/book.dart';
import './book_status_tag.dart';

class BookSearchCardContents extends StatelessWidget {
  final Book book;

  BookSearchCardContents({this.book}) : super();

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      mainAxisSize: MainAxisSize.min,
      children: [
        Expanded(
          flex: 4,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Container(
                height: 180,
                padding: const EdgeInsets.all(8.0),
                child: FadeInImage.assetNetwork(
                  placeholder: 'images/no_image.gif',
                  image: book.thumbnailUrl,
                ),
              ),
              Padding(
                padding:
                    const EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),
                child: Text(
                  book.title,
                  style: Constant.headingTextStyle,
                  textAlign: TextAlign.center,
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                ),
              ),
              Text(
                '${book.authors[0]} | ${book.publisher}',
                style: Constant.contentsTextStyle,
                maxLines: 1,
                overflow: TextOverflow.ellipsis,
              ),
              Padding(
                padding: const EdgeInsets.all(8.0),
                child:
                    Text('${book.datetime}', style: Constant.captionTextStyle),
              ),
            ],
          ),
        ),
        Expanded(
          child: Column(
            children: [
              BookStatusTag(status: book.status),
              Text(
                book.formattedPrice,
                style: Constant.contentsTextStyle
                    .copyWith(fontWeight: FontWeight.bold),
              ),
            ],
          ),
        ),
      ],
    );
  }
}
