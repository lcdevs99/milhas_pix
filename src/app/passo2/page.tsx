import Header from '../components/header';
import CardPasso2 from '../components/passo2/cardpasso2';

export default function Passo2() {
  return (
    <>
      <Header />
      <div style={{ display: 'flex', padding: '32px', gap: '24px' }}>
        <CardPasso2 />
      </div>
    </>
  );
}

