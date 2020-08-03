import 'dart:convert';

import 'package:http/http.dart' as http;

import 'package:books_proposal_generator/constants.dart' as Constant;
import 'package:books_proposal_generator/models/book.dart';

Future<List<Book>> fetchBooks({String query}) async {
  final String target = 'title';
  final int page = 1;
  final int size = 10;

  final fullApiUrl =
      '${Constant.kakaoBookSearchURL}target=$target&page=$page&size=$size&query=$query';

  final response = await http
      .get(fullApiUrl, headers: {'Authorization': Constant.kakaoApiKey});

  if (response.statusCode == 200) {
    List<Book> books = new List<Book>();
    for (final bookData in json.decode(response.body)['documents']) {
      books.add(Book.fromJson(bookData));
    }
    return books;
  } else {
    throw Exception('도서 검색 중 알 수 없는 오류가 발생했습니다.');
  }
}
