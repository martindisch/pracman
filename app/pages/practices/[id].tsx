import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Practice from '../../components/Practice';

const PracticePage = () => {
  const router = useRouter();
  const { id: queryId } = router.query;
  const id = Array.isArray(queryId) ? queryId[0] : queryId;

  return (
    <Layout title="Practice">
      <Practice id={id} />
    </Layout>
  );
};

export default PracticePage;
