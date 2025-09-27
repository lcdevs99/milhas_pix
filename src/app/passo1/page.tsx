import Header from '../components/header';
import CardPasso1 from '../components/passo1/cardpasso1';

export default function Passo1() {
  return (
    <>
      <Header />
      <div style={{ display: 'flex', padding: '32px', gap: '24px' }}>
        <CardPasso1 />
      </div>
    </>
  );
}

