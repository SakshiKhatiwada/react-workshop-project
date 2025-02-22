import AppRoutes from "./routes/AppRoutes";
import { Provider } from "react-redux";

import "./styles/App.css";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}

export default App;
