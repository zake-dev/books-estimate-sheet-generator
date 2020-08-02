import 'package:flutter/material.dart';

// String constants
const String appTitle = "도서견적서 자동완성 어플리케이션";

// API related
const kakaoApiKey = 'KakaoAK b313d368b79c679ec7ff3a9ce5b0f60c';
const kakaoBookSearchURL = 'https://dapi.kakao.com/v3/search/book?';

// Routes
const String homeRoute = '/';
const String searchRoute = '/search';

// TextThemes
const titleTextStyle = TextStyle(
  fontSize: 20,
  fontWeight: FontWeight.bold,
);
const headingTextStyle = TextStyle(
  fontSize: 16,
  fontWeight: FontWeight.bold,
);
const subHeadingTextSTyle = TextStyle(
  fontSize: 14,
  fontWeight: FontWeight.normal,
  fontStyle: FontStyle.italic,
);
const contentsTextStyle = TextStyle(
  fontSize: 14,
  fontWeight: FontWeight.normal,
);

// Colors
const primaryColor = Color(0xFF3F51B5);
