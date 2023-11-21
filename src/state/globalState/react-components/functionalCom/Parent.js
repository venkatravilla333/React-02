import A from './A';
import B from './B';

import { Provider } from 'react-redux';
import { store } from '../../redux/store';
function Parent() {
  return (
    <Provider store={store}>
      <A />
      <B />
    </Provider>
  );
}

export default Parent;
