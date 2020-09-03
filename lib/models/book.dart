import 'package:intl/intl.dart';

class Book {
  final List<dynamic> authors;
  final String datetime;
  final String isbn;
  final int price;
  final int quantity;
  final String publisher;
  final String status;
  final String title;
  final String thumbnailUrl;

  Book(
      {this.authors,
      this.datetime,
      this.isbn,
      this.price,
      this.publisher,
      this.status,
      this.title,
      this.thumbnailUrl})
      : quantity = 1;

  factory Book.fromJson(dynamic json) {
    return Book(
      authors: json['authors'] as List<dynamic>,
      datetime: (json['datetime'] as String).substring(0, 10),
      isbn: _parseIsbn(json['isbn'] as String),
      price: json['price'] as int,
      publisher: json['publisher'] as String,
      status: json['status'] as String,
      title: json['title'] as String,
      thumbnailUrl: json['thumbnail'] as String,
    );
  }

  String get formattedPrice {
    final formatter = new NumberFormat('#,###');
    return '${formatter.format(price)}원';
  }

  static String _parseIsbn(String isbnString) {
    final List<String> isbns = isbnString.split(' ');
    if (isbns.length > 1) {
      return isbns[1];
    }
    return isbns[0];
  }

  @override
  String toString() {
    return '${this.isbn}/${this.title}/${this.authors.join(', ')}/${this.status}';
  }
}
