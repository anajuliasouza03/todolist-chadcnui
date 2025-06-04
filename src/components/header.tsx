"use client";

import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";

type tarefaInputProp = {
  foiAddTarefa: (nome: string) => void;
};

export const Header = ({ foiAddTarefa }: tarefaInputProp) => {
  const [tarefaDigitado, setTarefaDigitada] = useState("");

  const handleAddClick = () => {
    if (tarefaDigitado.trim() !== "") {
      foiAddTarefa(tarefaDigitado.trim());
      setTarefaDigitada("");
    }
  };

  return (
    <div className="flex flex-row gap-4">
      <Input
        placeholder="Digite sua tarefa aqui"
        value={tarefaDigitado}
        onChange={(e) => setTarefaDigitada(e.target.value)}
        className="w-100"
      />
      <Button onClick={handleAddClick}>
        <Plus />
      </Button>
    </div>
  );
};
