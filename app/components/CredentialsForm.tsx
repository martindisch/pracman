import { Card } from '@rmwc/card';
import { Typography } from '@rmwc/typography';
import { TextField } from '@rmwc/textfield';
import { Button } from '@rmwc/button';
import { FormEvent, useState } from 'react';
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
  const [formState, setFormState] = useState({
    username: '',
    password: '',
    repeatPassword: '',
  });

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    const target = event.currentTarget;
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return (
    <Card className={styles.card}>
      <Typography use="headline6" tag="h2">
        {props.kind === FormTypes.Login ? 'Login' : 'Sign up'}
      </Typography>
      <TextField
        className={styles.item}
        outlined
        label="Username"
        name="username"
        value={formState.username}
        onChange={handleChange}
      />
      <TextField
        className={styles.item}
        outlined
        label="Password"
        name="password"
        type="password"
        value={formState.password}
        onChange={handleChange}
      />
      {props.kind === FormTypes.Signup ? (
        <TextField
          className={styles.item}
          outlined
          label="Repeat password"
          name="repeatPassword"
          type="password"
          value={formState.repeatPassword}
          onChange={handleChange}
          invalid={formState.password !== formState.repeatPassword}
        />
      ) : null}
      <Button
        className={classNames(styles.item, styles.button)}
        label={props.kind === FormTypes.Login ? 'Login' : 'Sign up'}
        raised
        disabled={
          formState.username.length === 0 ||
          formState.password.length === 0 ||
          (props.kind === FormTypes.Signup &&
            formState.password !== formState.repeatPassword)
        }
      />
    </Card>
  );
};

export { CredentialsForm, FormTypes };
