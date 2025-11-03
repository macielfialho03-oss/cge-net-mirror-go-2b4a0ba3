import React, { useState, useRef, useEffect } from "react";
import ServiceCard from "./ServiceCard";
import EditableServiceCard from "./EditableServiceCard";
import {
  FileText,
  Search,
  FileBarChart,
  Lock,
  Users,
  BookOpen,
  Plus,
  Image,
  Upload,
} from "lucide-react";
import { useAdmin } from "@/contexts/AdminContext";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

// 🧩 Ícones mapeados do banco
const getIconByName = (name?: string) => {
  switch (name) {
    case "FileText":
      return <FileText size={48} />;
    case "Search":
      return <Search size={48} />;
    case "FileBarChart":
      return <FileBarChart size={48} />;
    case "Lock":
      return <Lock size={48} />;
    case "Users":
      return <Users size={48} />;
    case "BookOpen":
      return <BookOpen size={48} />;
    default:
      return <FileText size={48} />;
  }
};

const ServicesSection = () => {
  const { isAdmin } = useAdmin();
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [previewImage, setPreviewImage] = useState<string>("");

  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const form = useForm({
    defaultValues: {
      title: "",
      description: "",
      link: "",
      linkText: "",
    },
  });

  // 🔹 Buscar serviços do backend
  useEffect(() => {
    fetch("http://localhost:3001/api/servicos")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((s: any) => ({
          id: s.Id,
          title: s.Nome,
          description: s.Descricao,
          link: s.Link,
          linkText: s.LinkText || "Acessar",
          iconType: s.IconType || "FileText",
          icon: getIconByName(s.IconType),
          imageUrl: s.ImageUrl || "",
        }));
        setServices(formatted);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao buscar serviços:", err);
        setLoading(false);
      });
  }, []);

  const handleServiceUpdate = (id: number, data: any) => {
    setServices(
      services.map((service) =>
        service.id === id ? { ...service, ...data } : service
      )
    );
  };

  const handleServiceDelete = (id: number) => {
    setServices(services.filter((service) => service.id !== id));
    toast.success("Serviço removido com sucesso!");
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setPreviewImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  // ➕ Adicionar novo serviço
  const handleAddService = (data: any) => {
    const newId = Math.max(...services.map((s) => s.id), 0) + 1;
    const newService = {
      id: newId,
      title: data.title,
      description: data.description,
      icon: <Image size={48} />,
      iconType: "Image",
      link: data.link || "/novo-servico",
      linkText: data.linkText || "Acessar Serviço",
      imageUrl: previewImage || "",
    };

    setServices([...services, newService]);
    setIsAddDialogOpen(false);
    setPreviewImage("");
    form.reset();
    toast.success("Novo serviço adicionado!");

    fetch("http://localhost:3001/api/servicos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Nome: data.title,
        Descricao: data.description,
        IconType: "Image",
        Link: data.link,
        LinkText: data.linkText,
        ImageUrl: previewImage,
      }),
    })
      .then(() => console.log("Serviço salvo no banco"))
      .catch((err) => console.error("Erro ao salvar serviço:", err));
  };

  if (loading)
    return (
      <section className="py-12 bg-gray-50 text-center text-gray-500">
        Carregando serviços...
      </section>
    );

  return (
    <section className="py-12 bg-gray-50">
      <div className="gov-container">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gov-blue-dark">
            Nossos Serviços
          </h2>
          {isAdmin && (
            <Button
              onClick={() => setIsAddDialogOpen(true)}
              variant="outline"
              className="border-gov-blue text-gov-blue hover:bg-gov-blue hover:text-white"
            >
              <Plus className="mr-1 h-4 w-4" /> Adicionar Serviço
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) =>
            isAdmin ? (
              <EditableServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                iconType={service.iconType}
                link={service.link}
                linkText={service.linkText}
                imageUrl={service.imageUrl}
                onUpdate={handleServiceUpdate}
                onDelete={handleServiceDelete}
              />
            ) : (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
                linkText={service.linkText}
                imageUrl={service.imageUrl}
              />
            )
          )}
        </div>
      </div>

      {/* Modal de adicionar serviço */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Adicionar Novo Serviço</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleAddService)}
              className="space-y-4"
            >
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Título</FormLabel>
                    <FormControl>
                      <Input placeholder="Título do serviço" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descrição</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Descrição do serviço"
                        className="min-h-[80px]"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormItem>
                <FormLabel>Imagem</FormLabel>
                <FormControl>
                  <div className="flex flex-col items-center space-y-2">
                    {previewImage && (
                      <div className="w-full h-40 rounded-md overflow-hidden">
                        <img
                          src={previewImage}
                          alt="Preview"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => imageInputRef.current?.click()}
                      className="w-full flex items-center justify-center gap-2"
                    >
                      <Upload className="h-4 w-4" />
                      {previewImage ? "Alterar imagem" : "Carregar imagem"}
                    </Button>
                    <input
                      type="file"
                      ref={imageInputRef}
                      className="hidden"
                      accept="image/*"
                      onChange={handleImageUpload}
                    />
                  </div>
                </FormControl>
                <FormDescription>
                  Opcional. Se não fornecida, um ícone padrão será usado.
                </FormDescription>
              </FormItem>

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="link"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Link</FormLabel>
                      <FormControl>
                        <Input placeholder="/rota ou URL externa" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="linkText"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Texto do Botão</FormLabel>
                      <FormControl>
                        <Input placeholder="Acessar Serviço" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <DialogFooter>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setIsAddDialogOpen(false);
                    setPreviewImage("");
                    form.reset();
                  }}
                >
                  Cancelar
                </Button>
                <Button type="submit">Adicionar Serviço</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ServicesSection;
