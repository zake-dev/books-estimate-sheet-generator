import 'package:flutter/material.dart';

import 'package:books_proposal_generator/widgets/styled_appbar.dart';

class FileSelectionPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: StyledAppBar(),
      body: Center(child: Text('도서제목이 포함된 엑셀 파일을 불러와주세요.')),
    );
  }
}
