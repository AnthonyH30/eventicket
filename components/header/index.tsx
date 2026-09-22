import Image from "next/image";

import logo from "../../app/public/logo.png";
import { Button } from "../ui/button";
import { CalendarCheck, Menu, PlusCircle, Ticket, User } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4">
      <picture>
        <Image src={logo.src} alt="Logo EvenTicket" width={200} height={75} />
      </picture>
      <nav className="hidden lg:flex">
        <ul className="flex items-center gap-6 font-bold text-gray-600">
          <li className="flex items-center gap-2 cursor-pointer">
            <PlusCircle />
            Criar Evento
          </li>
          <li className="flex items-center gap-2 cursor-pointer">
            <CalendarCheck /> Meus Eventos
          </li>
          <li className="flex items-center gap-2 cursor-pointer">
            <Ticket /> Meus Ingressos
          </li>
          <li>
            <Button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
              Entrar
            </Button>
          </li>
        </ul>
      </nav>
      <Sheet>
        <SheetTrigger
          render={
            <Button variant="outline" className="lg:hidden h-10 w-10">
              <Menu />
            </Button>
          }
        />
        <SheetContent className="bg-white min-h-[300px] px-8 pt-10">
          <SheetHeader className="flex flex-row items-center justify-start gap-2 px-0">
            <User /> <h2>Anthony Harisson</h2>
          </SheetHeader>
          <ul className="flex flex-col items-start justify-start h-full gap-6 font-bold text-gray-600">
            <li className="flex items-center gap-2 cursor-pointer">
              <PlusCircle />
              Criar Evento
            </li>
            <li className="flex items-center gap-2 cursor-pointer">
              <CalendarCheck /> Meus Eventos
            </li>
            <li className="flex items-center gap-2 cursor-pointer">
              <Ticket /> Meus Ingressos
            </li>
            <li>
              <Button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
                Entrar
              </Button>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
