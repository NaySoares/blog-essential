import { Heading, Text, useColorModeValue } from '@chakra-ui/react';
import { DragName } from '../components/Drag/DragName';
import { Informations } from '../components/Phrases/Informations';
import { H1Animation, TextAnimation } from '../animation/TextAnimation';
import Main from '../components/Layout/Main';

export default function Home() {
  return (
    <Main title='Essential'>
      <DragName>
        <TextAnimation
        > 
          Elienai Soares
        </TextAnimation>
      </DragName>

      <H1Animation>
        Thinking more...
      </H1Animation>

      <Informations>
        Web Developer, writing little things in my free time, for hobby, for learning, for me. Feel free to ask me anything.
      </Informations>
    </Main>
  )
}
