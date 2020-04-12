import Layout from '../../components/Layout';
import { CredentialsForm, FormTypes } from '../../components/CredentialsForm';
import styles from './index.module.css';

const Account = () => (
  <Layout title="Account">
    <div className={styles.content}>
      <CredentialsForm kind={FormTypes.Login} />
      <CredentialsForm kind={FormTypes.Login} />
      <CredentialsForm kind={FormTypes.Signup} />
    </div>
  </Layout>
);

export default Account;
