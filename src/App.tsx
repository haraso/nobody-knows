
import { AppService } from "./providers/AppService";
import AppLayout from "./ui/layouts/AppLayout";
import Header from "./ui/components/Header";
import FilterBar from "./ui/components/FilterBar";
import AppContent from "./ui/components/AppContent";

function App() {
  return (
    <AppService>
      <AppLayout
        headerArea={
          <Header />
        }
        filterArea={
          <FilterBar />
        }
        contentArea={
          <AppContent />
        }
      />
    </AppService>
  );
}

export default App;


