import 'package:flutter/material.dart';

import 'package:books_proposal_generator/widgets/styled_appbar.dart';
import 'package:books_proposal_generator/constants.dart' as Constant;
import 'package:books_proposal_generator/screens/file_selection/blocs/query_cubit.dart';

class FileSelection extends StatelessWidget {
  final _queryCubit = QueryCubit();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: StyledAppBar(),
      body: Container(
        width: MediaQuery.of(context).size.width,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Container(
              width: MediaQuery.of(context).size.width * 0.9,
              constraints: BoxConstraints(maxWidth: 400),
              child: TextField(
                decoration: InputDecoration(
                  border: OutlineInputBorder(),
                  labelText: '도서명',
                ),
                onChanged: (value) => _queryCubit.updateQuery(value),
              ),
            ),
            Container(
              margin: EdgeInsets.all(8),
              child: FloatingActionButton(
                child: Text('검색', style: Constant.headingTextStyle),
                onPressed: () => Navigator.of(context).pushReplacementNamed(
                    Constant.searchRoute,
                    arguments: _queryCubit.state),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
