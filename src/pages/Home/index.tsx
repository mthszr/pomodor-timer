import { Play } from "phosphor-react";
import { CountdownConatiner, FormContainer, HomeContainer, Separator } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <input id="task" />
          <label htmlFor="minutesAmount">durante</label>7
          <input type="number" id="minutesAmount" />
          <span>minutos.</span>
        </FormContainer>

        <CountdownConatiner>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownConatiner>

        <button type="submit">
          <Play size={24} />
          Começar
        </button>
      </form>
    </HomeContainer>
  )
}