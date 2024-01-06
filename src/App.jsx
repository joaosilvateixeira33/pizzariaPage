import { RouterMain } from "./Routes/RouterMain";
import { AuthProvider } from "./provider/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className={App}>
        <RouterMain />
      </div>
    </AuthProvider>
  );
}

export default App;
