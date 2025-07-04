
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Plus, Calendar, Clock } from "lucide-react";

const TaskManagement = () => {
  const tarefas = [
    { 
      id: 1, 
      titulo: "Revisar contrato do cliente ABC", 
      prioridade: "Alta", 
      prazo: "2024-07-08", 
      concluida: false 
    },
    { 
      id: 2, 
      titulo: "Enviar proposta comercial", 
      prioridade: "Média", 
      prazo: "2024-07-10", 
      concluida: false 
    },
    { 
      id: 3, 
      titulo: "Reunião de equipe", 
      prioridade: "Baixa", 
      prazo: "2024-07-12", 
      concluida: true 
    },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Gestão de Tarefas</h2>
            <p className="text-muted-foreground">
              Organize e acompanhe suas atividades
            </p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Nova Tarefa
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Pendentes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">
                {tarefas.filter(t => !t.concluida).length}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Concluídas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {tarefas.filter(t => t.concluida).length}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{tarefas.length}</div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Lista de Tarefas</CardTitle>
            <CardDescription>
              Acompanhe o progresso das suas atividades
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {tarefas.map((tarefa) => (
                <div
                  key={tarefa.id}
                  className={`flex items-center space-x-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors ${
                    tarefa.concluida ? 'opacity-60' : ''
                  }`}
                >
                  <Checkbox 
                    checked={tarefa.concluida}
                    className="mt-1"
                  />
                  <div className="flex-1 space-y-1">
                    <h4 className={`font-medium ${tarefa.concluida ? 'line-through' : ''}`}>
                      {tarefa.titulo}
                    </h4>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="mr-1 h-3 w-3" />
                        {new Date(tarefa.prazo).toLocaleDateString('pt-BR')}
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-1 h-3 w-3" />
                        Prazo
                      </div>
                    </div>
                  </div>
                  <Badge 
                    variant={
                      tarefa.prioridade === "Alta" ? "destructive" :
                      tarefa.prioridade === "Média" ? "default" : "secondary"
                    }
                  >
                    {tarefa.prioridade}
                  </Badge>
                  <Button variant="outline" size="sm">
                    Editar
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default TaskManagement;
