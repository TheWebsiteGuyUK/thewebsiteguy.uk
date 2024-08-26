// src/pages/api/EmailTemplate.tsx
import { Html, Head, Body, Container, Heading, Table, Tr, Td } from '@react-email/components';

interface EmailTemplateProps {
  formData: Record<string, string>;
}

export default function EmailTemplate({ formData }: EmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Body style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0 }}>
        <Container style={{ width: '100%', maxWidth: '600px', margin: 'auto', padding: '20px' }}>
          <Heading style={{ textAlign: 'center' }}>New Contact Form Submission</Heading>
          <Table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <Tr>
              <Td style={{ border: '1px solid #ddd', padding: '8px', fontWeight: 'bold' }}>Field</Td>
              <Td style={{ border: '1px solid #ddd', padding: '8px', fontWeight: 'bold' }}>Value</Td>
            </Tr>
            {Object.entries(formData).map(([key, value]) => (
              <Tr key={key}>
                <Td style={{ border: '1px solid #ddd', padding: '8px' }}>{key.charAt(0).toUpperCase() + key.slice(1)}</Td>
                <Td style={{ border: '1px solid #ddd', padding: '8px' }}>{value}</Td>
              </Tr>
            ))}
          </Table>
        </Container>
      </Body>
    </Html>
  );
}
