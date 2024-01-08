import { RouterMain } from "./Routes/RouterMain";
import { AuthProvider } from "./provider/AuthContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <AuthProvider>
      <div className={App}>
        <RouterMain />
        <ToastContainer />
      </div>
    </AuthProvider>
  );
}

export default App;
