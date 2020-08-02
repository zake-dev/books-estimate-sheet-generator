import 'package:bloc/bloc.dart';

class QueryCubit extends Cubit<String> {
  QueryCubit() : super('');

  void updateQuery(String query) => emit(query);
}
