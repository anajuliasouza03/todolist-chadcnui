"use client";

import { Tarefa } from "@/types/tarefa";
import { useState } from "react";
import { TarefaEscopo } from "@/components/tarefa-escopo";
import { Separator } from "./ui/separator";
import { Header } from "./header";
import { Menu } from "./menu";

export const ListaTarefas = () => {
  const [tarefa, setTarefa] = useState<Tarefa[]>([]);

  const addTarefa = (nome: string) => {
    const novaTarefa: Tarefa = {
      id: Date.now(),
      nome,
      feita: false,
    };
    setTarefa([...tarefa, novaTarefa]);
  };

  const toggleTarefa = (id: number) => {
    setTarefa(
      tarefa.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, feita: !tarefa.feita } : tarefa
      )
    );
  };

  const deleteTarefa = (id: number) => {
    setTarefa(tarefa.filter((tarefa) => tarefa.id !== id));
  };

  return (
    <div>
      <div>
        <Menu />
      </div>
      <div>
        <Header foiAddTarefa={addTarefa} />
      </div>
      <Separator className="m-4 max-w-[90%] w-screen" />
      <div>
        {tarefa.map((tarefa) => (
          <TarefaEscopo
            key={tarefa.id}
            tarefa={tarefa}
            foiMarcado={toggleTarefa}
            foiDeletado={deleteTarefa}
          />
        ))}
      </div>
    </div>
  );
};
