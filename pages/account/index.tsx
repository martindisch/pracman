import Layout from '../../components/Layout';
import CredentialsForm from '../../components/CredentialsForm';
import styles from './index.module.css';

const Account = () => (
  <Layout title="Account">
    <div className={styles.content}>
      <CredentialsForm />
      <CredentialsForm />
      <CredentialsForm />
    </div>
  </Layout>
);

export default Account;
