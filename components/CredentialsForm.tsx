import { Card } from '@rmwc/card';
import { Typography } from '@rmwc/typography';
import { TextField } from '@rmwc/textfield';
import { Button } from '@rmwc/button';
import classNames from 'classnames';
import styles from './CredentialsForm.module.css';

enum FormTypes {
  Signup,
  Login,
}

interface Props {
  kind: FormTypes;
}

/**
 * A card showing either login or signup form fields.
 *
 * Since this is always used in a particular UI composition (in a flexbox
 * together with other cards), it defines its own outer spacing, even though
 * that technically harms reusability.
 */
const CredentialsForm = (props: Props) => {
  return (
    <Card className={styles.card}>
      <Typography use="headline6" tag="h2">
        {props.kind === FormTypes.Login ? 'Login' : 'Sign up'}
      </Typography>
      <TextField className={styles.item} outlined label="Username" />
      <TextField
        className={styles.item}
        outlined
        label="Password"
        type="password"
      />
      {props.kind === FormTypes.Signup ? (
        <TextField
          className={styles.item}
          outlined
          label="Repeat password"
          type="password"
        />
      ) : null}
      <Button
        className={classNames(styles.item, styles.button)}
        label={props.kind === FormTypes.Login ? 'Login' : 'Sign up'}
        raised
      />
    </Card>
  );
};

export { CredentialsForm, FormTypes };
