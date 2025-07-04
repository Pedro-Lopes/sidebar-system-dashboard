
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Layout } from "@/components/Layout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Layout>
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Bem-vindo ao Sistema</h2>
            <p className="text-muted-foreground">
              Use o menu lateral para navegar pelas ferramentas disponíveis
            </p>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-6 bg-white rounded-lg border">
              <h3 className="font-semibold mb-2">Home</h3>
              <p className="text-sm text-muted-foreground">Página inicial do sistema</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg border">
              <h3 className="font-semibold mb-2">CRM</h3>
              <p className="text-sm text-muted-foreground">Gestão de clientes e relacionamentos</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg border">
              <h3 className="font-semibold mb-2">Gestão de Tarefas</h3>
              <p className="text-sm text-muted-foreground">Organize suas atividades</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg border">
              <h3 className="font-semibold mb-2">Configuração</h3>
              <p className="text-sm text-muted-foreground">Ajustes do sistema</p>
            </div>
          </div>
        </div>
      </Layout>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
