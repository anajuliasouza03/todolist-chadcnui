"use client";

import { Trash } from "lucide-react";
import { Button } from "./ui/button";
import { Tarefa } from "@/types/tarefa";
import { Checkbox } from "./ui/checkbox";

type tarefaItemProps = {
  tarefa: Tarefa;
  foiMarcado: (id: number) => void;
  foiDeletado: (id: number) => void;
};

export const TarefaEscopo = ({
  tarefa,
  foiMarcado,
  foiDeletado,
}: tarefaItemProps) => {
  return (
    <div className="flex flex-row rounded-md border border-slate-400 items-center my-2">
      {/*checkbox [ ] */}
      <Checkbox
        checked={tarefa.feita}
        onCheckedChange={() => foiMarcado(tarefa.id)}
        className="ml-2"
      />
      {/*texto da tarefa*/}
      <p className={` ml-2 flex-1 ${tarefa.feita ? "line-through" : ""}`}>
        {tarefa.nome}
      </p>
      {/* botao */}
      <Button
        variant={"ghost"}
        onClick={() => foiDeletado(tarefa.id)}
        className="text-red-500"
      >
        <Trash />
      </Button>
    </div>
  );
};
