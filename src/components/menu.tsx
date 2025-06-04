import { link } from "fs";
import { Button } from "./ui/button";
import { Github } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

export const Menu = () => {
  return (
    <div>
      <div className="flex items-center justify-center mb-2">
        <Button variant={"link"}>
          <a href="https://github.com/anajuliasouza03?tab=overview&from=2024-06-01&to=2024-06-09">
            <Github />
          </a>
        </Button>
        <div>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};
