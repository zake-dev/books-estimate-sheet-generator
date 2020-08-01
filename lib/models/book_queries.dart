import 'dart:convert';

import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:http/http.dart' as http;

import 'package:books_proposal_generator/models/book.dart';

final restApiKey = DotEnv().env['KAKAO_API_KEY'];
final apiUrl = DotEnv().env['KAKAO_API_BOOK_SEARCH_URL'];

Future<List<Book>> fetchBooks({String query}) async {
  final String target = 'title';
  final int page = 1;
  final int size = 5;

  final fullApiUrl =
      '${apiUrl}target=$target&page=$page&size=$size&query=$query';

  final response =
      await http.get(fullApiUrl, headers: {'Authorization': restApiKey});

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
