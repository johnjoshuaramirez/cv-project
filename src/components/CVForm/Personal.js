import styles from './styles/Personal.module.css';
import { useContext } from 'react';
import { Context } from '../../Context';

export default function Personal() {
  const { personal, handlePersonalChange } = useContext(Context);
  return (
    <div className={styles.personal}>
      <h2>Personal Data</h2>
      <form className={styles.form}>
        <div className={styles.group}>
          <input
            className={styles.input}
            name="firstname"
            value={personal.firstname}
            onChange={handlePersonalChange}
            placeholder="First Name"
            type="text"
            required
          />
          <input
            className={styles.input}
            value={personal.lastname}
            onChange={handlePersonalChange}
            name="lastname"
            placeholder="Last Name"
            type="text"
            required
          />
        </div>
        <input
          className={styles.input}
          name="address"
          value={personal.address}
          onChange={handlePersonalChange}
          placeholder="Your Address"
          type="text"
          required
        />
        <input
          className={styles.input}
          name="website"
          value={personal.website}
          onChange={handlePersonalChange}
          placeholder="Your Website"
          type="text"
          required
        />
        <div className={styles.group}>
          <input
            className={styles.input}
            name="email"
            value={personal.email}
            onChange={handlePersonalChange}
            placeholder="Your email"
            type="text"
            required
          />
          <input
            className={styles.input}
            value={personal.number}
            onChange={handlePersonalChange}
            name="number"
            placeholder="Your number"
            type="text"
            required
          />
        </div>
        <textarea
          className={styles.textarea}
          value={personal.about}
          onChange={handlePersonalChange}
          name="about"
          placeholder="Tell us something about yourself!"
          required
        ></textarea>
      </form>
    </div>
  );
}
