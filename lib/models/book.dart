class Book {
  final List<dynamic> authors;
  final String contents;
  final int price;
  final String publisher;
  final String status;
  final String title;
  final String thumbnailUrl;

  Book(
      {this.authors,
      this.contents,
      this.price,
      this.publisher,
      this.status,
      this.title,
      this.thumbnailUrl});

  factory Book.fromJson(dynamic json) {
    return Book(
      authors: json['authors'] as List<dynamic>,
      contents: json['contents'] as String,
      price: json['price'] as int,
      publisher: json['publisher'] as String,
      status: json['status'] as String,
      title: json['title'] as String,
      thumbnailUrl: json['thumbnail'] as String,
    );
  }

  String toString() {
    return '${this.title}/${this.authors.join(', ')} 저/${this.status}';
  }
}
