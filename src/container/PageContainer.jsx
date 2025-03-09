import React from 'react'
import Container from '@mui/material/Container';

function PageContainer({children}) {


//Header, Container componentinin childrenı oldu.
//PageContainer içerisindeki children aslında Header comp temsil ediyor.
  return (
    <Container maxWidth="lg">
        {children}
    </Container>
  )
}

export default PageContainer