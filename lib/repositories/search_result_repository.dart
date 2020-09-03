import 'package:books_proposal_generator/providers/book_search_api_provider.dart';
import 'package:books_proposal_generator/models/book.dart';

class BookSearchRepository {
  BookSearchApiProvider _bookSearchApiProvider = BookSearchApiProvider();

  Future<List<Book>> fetchSearchResultByTitle(String title) =>
      _bookSearchApiProvider.fetchSearchResultByTitle(title);
}
