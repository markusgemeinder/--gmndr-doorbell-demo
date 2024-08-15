// /app/page.js

'use client';

import { Title, Container, Button } from './components/Common/CommonStyles';

export default function Home() {
  return (
    <Container>
      <Title>Welcome to My Next.js App</Title>
      <Button onClick={() => alert('Hello!')}>Click Me</Button>
    </Container>
  );
}
