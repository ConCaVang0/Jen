import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS if not already imported
import styles from './SharkHome.module.css';  // Import stylesheet if needed
import {  FaRegHeart } from 'react-icons/fa6';


const SharkHome = () => {
  return (
    <div className={`${styles.customContainer} container`}>
      <div className={styles.box}>
        <h1>Coral Reef and mangroves in Indonesia</h1>
        <div className="d-flex justify-content-between">
          <p>Credit: Alex Mustard / Ocean Image Bank</p>
          <div >
          Favourite <FaRegHeart className={styles.icon_Sealife} />
          </div>
        </div>  

        <img src="public/image/shark1.jpg" className={`img-thumbnail ${styles.fes}`} alt="..." />

        <p className={styles.text}>
          <div className={styles.content}>
            <h4>🌊 The Fascinating World of Sharks! 🦈</h4>
            <p>
              Did you know that sharks have been ruling the oceans for over 400 million years?
              These incredible creatures come in all shapes and sizes, each adapted to their unique marine
              environments. From the mighty Great White to the graceful Hammerhead, sharks play a vital role in
              maintaining the health of our oceans.
            </p>
          </div>
          <div className={styles.content}>
            <h4>🌊 Their Conservation Matters! 🦈 </h4>
            <p>
              Sharks are facing numerous challenges, including overfishing and habitat loss. We must work together to
              protect these apex predators and maintain the delicate balance of marine ecosystems. Support
              conservation efforts and spread awareness about the importance of preserving our oceans! Let's celebrate
              these magnificent creatures and inspire others to join the cause of ocean conservation. Remember, a
              healthy ocean means a healthy planet for all of us! 🌎🦈
            </p>
          </div>
        </p>

        <div className={styles.tab_review}>
          <div >
            <h2 className="text-center">Write a comment</h2>
            <div >
              <div className="col-sm-12">
                <label className="control-label" htmlFor="input-name">Your Name</label>
                <input type="text" name="name" value="" id="input-name" className="form-control" />
              </div>
            </div>
            <div >
              <div className="col-sm-12">
                <label className="control-label" htmlFor="input-review">Your comment</label>
                <textarea name="text"  id="input-review" className="form-control"></textarea>
                <div className="help-block">
                  <span className="text-danger">Note:</span>
                  We hope you will write comments according to your perspective so that we can improve
                  more and more, thank you!!!
                </div>
              </div>
            </div>
            <div >
              <div className="buttons clearfix">
                <div className="pull-right">
                  <button type="button" id="button-review" data-loading-text="Loading..." className="btn btn-dark mt-3">Continue</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SharkHome;