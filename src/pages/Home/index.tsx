import { Play } from 'phosphor-react'
import {
  CountdownConatiner,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput id="task" placeholder="Dê um nome para o seu projeto" />
          <label htmlFor="minutesAmount">durante</label>7
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
          />
          <span>minutos.</span>
        </FormContainer>

        <CountdownConatiner>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownConatiner>

        <StartCountdownButton disabled type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
