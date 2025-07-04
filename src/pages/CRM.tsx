
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Phone, Mail } from "lucide-react";

const CRM = () => {
  const clientes = [
    { id: 1, nome: "João Silva", email: "joao@email.com", telefone: "(11) 99999-9999", status: "Ativo" },
    { id: 2, nome: "Maria Santos", email: "maria@email.com", telefone: "(11) 88888-8888", status: "Inativo" },
    { id: 3, nome: "Pedro Oliveira", email: "pedro@email.com", telefone: "(11) 77777-7777", status: "Ativo" },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">CRM</h2>
            <p className="text-muted-foreground">
              Gerencie seus clientes e relacionamentos
            </p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Novo Cliente
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Buscar Clientes</CardTitle>
            <CardDescription>
              Encontre clientes por nome, email ou telefone
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input type="text" placeholder="Buscar clientes..." />
              <Button type="submit" size="sm">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Lista de Clientes</CardTitle>
            <CardDescription>
              {clientes.length} clientes cadastrados
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {clientes.map((cliente) => (
                <div
                  key={cliente.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="space-y-1">
                    <h4 className="font-medium">{cliente.nome}</h4>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Mail className="mr-1 h-3 w-3" />
                        {cliente.email}
                      </div>
                      <div className="flex items-center">
                        <Phone className="mr-1 h-3 w-3" />
                        {cliente.telefone}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant={cliente.status === "Ativo" ? "default" : "secondary"}>
                      {cliente.status}
                    </Badge>
                    <Button variant="outline" size="sm">
                      Editar
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default CRM;
