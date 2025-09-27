'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1 style={{ color: 'black' }}>Bem-vindo ao sistema de milhas</h1>
      <button onClick={() => router.push('/passo1')}>Iniciar</button>
    </div>
  );
}



