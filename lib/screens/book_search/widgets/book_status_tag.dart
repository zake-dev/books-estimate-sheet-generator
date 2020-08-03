import 'package:flutter/material.dart';

import 'package:books_proposal_generator/constants.dart' as Constant;

class BookStatusTag extends StatelessWidget {
  final String status;

  BookStatusTag({this.status}) : super();

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 75,
      height: 23,
      constraints: BoxConstraints.tightForFinite(),
      decoration: BoxDecoration(
        color: _getBackgroundColor(status),
        borderRadius: BorderRadius.circular(6.0),
      ),
      margin: EdgeInsets.all(8.0),
      alignment: Alignment.center,
      child: Text(
        status != '' ? status : '알수없음',
        style: Constant.contentsTextStyle.copyWith(color: Colors.white),
      ),
    );
  }

  Color _getBackgroundColor(String status) {
    switch (status) {
      case '정상판매':
        return Constant.statusGreenColor;
      case '품절':
        return Constant.statusYellowColor;
      case '절판':
        return Constant.statusRedColor;
      default:
        return Constant.statusGreyColor;
    }
  }
}
