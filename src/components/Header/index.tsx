import { Button, Container, Content } from "./styles";
import logoImg from "../../assets/logo.svg";
import * as Dialog from "@radix-ui/react-dialog";
import { NewModal } from "../NewModal";

export function Header() {
  return (
    <div>
      <Container>
        <Content>
          <img src={logoImg} alt="" />
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <Button>Nova Transação</Button>
            </Dialog.Trigger>

           <NewModal/>
          </Dialog.Root>
        </Content>
      </Container>
    </div>
  );
}
