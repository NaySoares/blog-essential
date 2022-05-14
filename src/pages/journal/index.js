import { Heading, Text, useColorModeValue } from '@chakra-ui/react';
import { H1Animation } from '../../animation/TextAnimation';
import { DragName } from '../../components/Drag/DragName';
import Main from '../../components/Layout/Main';
import { Informations } from '../../components/Phrases/Informations';

export default function JournalPage() {
  const colorTheme = useColorModeValue('#fff', '#000')
  return (
    <Main title='Journal'>

      <Informations position={'10%'}>
        Ainda migrando conteúdos...
      </Informations>
      
      <DragName>
        <Text
          as='p'
          fontSize='35px'
          fontWeight={300}
          css={{ 'transform': 'rotate(3deg)' }}
        >
          error
        </Text>
      </DragName>

      <H1Animation>
        404
      </H1Animation>

      <Informations position={'30%'}>
        nAda por Aqui
      </Informations>

    </Main>
  )
}
