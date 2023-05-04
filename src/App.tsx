
import './App.css';
import { Provider } from 'react-redux';
import store from './Utils/Store';
import { MainPage } from './Pages/MainPage/MainPage';
import { initializeIcons } from '@fluentui/react';

initializeIcons();
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MainPage />
      </div>
    </Provider>

  );
}

export default App;
