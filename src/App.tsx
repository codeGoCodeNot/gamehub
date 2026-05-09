import Auth from "./learning-state-management/state-management/components/auth";
import Navbar from "./learning-state-management/state-management/components/navbar";
import AuthProvider from "./learning-state-management/state-management/context/provider/auth-provider";
import TaskProvider from "./learning-state-management/state-management/context/provider/task-provider";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <TaskProvider>
          <Navbar />
          {/* <HomePage /> */}
        </TaskProvider>
        <Auth />
      </AuthProvider>
    </div>
  );
};

export default App;
