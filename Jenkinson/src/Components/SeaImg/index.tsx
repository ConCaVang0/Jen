import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS if not already imported
import styles from './SeaImg.module.css';
import { FaHeart, FaMagnifyingGlass } from 'react-icons/fa6';
import 'animate.css';
import FilterComponent from '../FilterComponent'; // Import the FilterComponent
import { SharksData } from '../../Data/SharkImg';
import { TurtleData } from '../../Data/TurtleImg';
import { DolphinsData } from '../../Data/DolphinImg';
import { BestData } from '../../Data/Bestsmg';
import OceanVideoPlayer from '../Video';

type SeaImgType = {
  id: number;
  imageUrl: string;
  title: string;
  source: string;
};

const SingleSeaImg = ({ SharksData }: { SharksData: SeaImgType }) => {
  return (
    <div className="col">
      <div className="p-4">
        <div className={`position-relative ${styles.item}`}>
          <div className={`${styles.thumb_oceanImg}`}>
            <img className="" src={SharksData.imageUrl} alt="" />
            <div className={`${styles.edit_SeaImg}`}>
              <div className={`${styles.source_SeaImg}  animate__animated  animate__backInLeft`}>
                <p>{SharksData.title}</p>
                <p className="mt-2 ">Source: {SharksData.source}</p>
              </div>
              <span className={`${styles.icon_Sealife} `}>
                <FaHeart />
              </span>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

const SeaImg = () => {
  const [currentCategory, setCurrentCategory] = useState('Shark');

  const handleFilterClick = (category: string) => {
    setCurrentCategory(category);
  };

  const getSeaImgData = () => {
    switch (currentCategory) {
      case 'Shark':
        return SharksData;
      case 'Dolphin':
        return DolphinsData;
      case 'Turtle':
        return TurtleData;
      case 'Best':
        return BestData;
      default:
        return SharksData;
    }
  };

  return (
    <section className={styles.box_OceanImg}>
      <div className={styles.banner_sealife}>
        <img src="https://cdn.pixabay.com/photo/2017/08/04/19/54/light-bulb-2581192_1280.jpg" alt="" />
        <p className={styles.slogan}>
          𝓟𝓻𝓸𝓽𝓮𝓬𝓽 𝓽𝓱𝓮 𝓸𝓬𝓮𝓪𝓷, 𝓹𝓻𝓸𝓽𝓮𝓬𝓽 𝓶𝓪𝓻𝓲𝓷𝓮 𝓵𝓲𝓯𝓮
        </p>
        <div className={styles.search_oceanImg}>
          <form action="#">
            <input type="text" placeholder="Search Ocean images..." className={styles.search_box} />
            <span className={styles.SearchImg}>
              <FaMagnifyingGlass />
            </span>
          </form>
        </div>
      </div>
      <div className={styles.box_OceanImg}>
      
        <div className={`row row-cols-1 row-cols-md-2 row-cols-lg-4 ${styles.videoContainer}`}>
          <div className="col">
            <OceanVideoPlayer url='public/video/SharkVideo.mp4' />
          </div>
          <div className="col">
            <OceanVideoPlayer url='public/video/dolphin.mp4' />
          </div>
          <div className="col">
            <OceanVideoPlayer url='public/video/whale2.mp4' />
          </div>
          <div className="col">
            <OceanVideoPlayer url='public/video/seal.mp4' />
          </div>
        </div>
      </div>

      <FilterComponent currentCategory={currentCategory} handleFilterClick={handleFilterClick} />
      

      <div className="row g2 row-cols-1 row-cols-md-3 row-cols-lg-3">
        {getSeaImgData().map((item: SeaImgType) => (
          <SingleSeaImg key={item.id} SharksData={item} />
        ))}
      </div>
    </section>
  );
};

export default SeaImg;