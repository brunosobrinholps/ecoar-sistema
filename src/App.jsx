// src/App.jsx
import AppRoutes from "./routes";
import { ClientProvider } from "./context/ClientContext";
import { ApiDataProvider } from "./context/ApiDataContext";

function App() {
  return (
    <ClientProvider>
      <ApiDataProvider>
        <AppRoutes />
      </ApiDataProvider>
    </ClientProvider>
  );
}

export default App;
