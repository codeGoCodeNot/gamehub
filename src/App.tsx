import Auth from "./learning-state-management/state-management/auth";
import AuthProvider from "./learning-state-management/state-management/context/provider/auth-provider";
import TaskProvider from "./learning-state-management/state-management/context/provider/task-provider";
import Navbar from "./learning-state-management/state-management/navbar";

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
