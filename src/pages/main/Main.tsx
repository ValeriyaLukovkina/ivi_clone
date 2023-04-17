import CategoriesSlider from '../../components/categoriesSlider/CategoriesSlider';
import Slider from '../../components/mainSlider/MainSlider';
import styles from './Main.module.scss';

const Main = () => {
  return (
    <div className={styles.container}>
      <h2>MainPage</h2>
      <Slider />
      <div className={styles.wrapper}>
        {/* <CategoriesSlider title={'Рекомендую посмотреть >'} size={'medium'} /> */}
      </div>
    </div>
  );
};

export default Main;
