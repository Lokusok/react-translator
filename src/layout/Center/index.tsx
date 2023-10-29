import css from './style.module.css';

interface CenterProps {
  children: React.ReactNode;
}

const Center: React.FC<CenterProps> = ({ children }) => {
  return <div className={css.center}>{children}</div>;
};

export default Center;
