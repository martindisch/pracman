import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

const Practice = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout title="Account">
      <div>{id}</div>
    </Layout>
  );
};

export default Practice;
