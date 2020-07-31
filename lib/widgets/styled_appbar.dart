import 'package:flutter/material.dart';

import 'package:books_proposal_generator/constants.dart' as Constant;

class StyledAppBar extends AppBar {
  StyledAppBar()
      : super(
          title: Center(
            child: Text(Constant.appTitle, style: Constant.titleTextStyle),
          ),
        );
}
