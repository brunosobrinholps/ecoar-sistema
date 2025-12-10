import './App.css';
import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import FinancialDashboard from './components/FinancialDashboard';
import DeviceDetailView from './components/DeviceDetailView';
import ControlCenter from './components/ControlCenter';
import ConsumptionTab from './components/ConsumptionTab';
import Login from './components/Login';
import { useApiDataContext } from './context/ApiDataContext';
import { useParams } from "react-router-dom";

export default function AppContent() {
  const { clientId } = useParams();

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('isAuthenticated') === 'true';
  });

  const [activeSidebarTab, setActiveSidebarTab] = useState('dashboard');

  const [selectedApiDeviceId, setSelectedApiDeviceId] = useState(() => {
    return clientId ? parseInt(clientId) : 33;
  });

  const [selectedDeviceId, setSelectedDeviceId] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { handleDeviceChange } = useApiDataContext();

  const handleLogin = (credentials) => {
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('userEmail', credentials.email);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
    setIsAuthenticated(false);
  };

  useEffect(() => {
    if (clientId) {
      setSelectedApiDeviceId(parseInt(clientId));
    }
  }, [clientId]);

  useEffect(() => {
    handleDeviceChange(selectedApiDeviceId);
  }, [selectedApiDeviceId, handleDeviceChange]);

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  const shouldShowDetailView = selectedDeviceId !== null;

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className={`fixed lg:static inset-y-0 left-0 z-40 transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <Sidebar
          activeTab={activeSidebarTab}
          setActiveTab={setActiveSidebarTab}
          onLogout={handleLogout}
          onClose={() => setSidebarOpen(false)}
        />
      </div>

      <div className="flex-1 w-full">
        <Header
          selectedDeviceId={selectedApiDeviceId}
          onDeviceChange={setSelectedApiDeviceId}
          onLogout={handleLogout}
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          sidebarOpen={sidebarOpen}
        />

        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <div className="p-4 sm:p-6 lg:p-8">
          {activeSidebarTab === 'dashboard' && (
            <>
              {shouldShowDetailView ? (
                <DeviceDetailView
                  deviceId={selectedDeviceId}
                  onBack={() => setSelectedDeviceId(null)}
                />
              ) : (
                <FinancialDashboard
                  onSelectDevice={setSelectedDeviceId}
                />
              )}
            </>
          )}

          {activeSidebarTab === 'consumption' && <ConsumptionTab />}
          {activeSidebarTab === 'control' && <ControlCenter />}
        </div>
      </div>
    </div>
  );
}
