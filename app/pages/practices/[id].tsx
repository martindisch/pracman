import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

const PracticePage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout title="Account">
      <div>{id}</div>
    </Layout>
  );
};

export default PracticePage;
