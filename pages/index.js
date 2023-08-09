import React from "react";
import Image from "next/image";
import {
  divinity,
  synchronicity,
  theUndertaking,
  asTheSunSpeaks,
} from "@/public/images/albums";
import heroBanner from "@/public/images/hero-banner.png";
import soundwaves from "@/public/images/soundwaves.jpg";
import styles from "./HomePage.module.scss";
import Layout from "../components/layout";

export default function HomePage() {
  return (
    <>
      <div className={styles.heroImage}>
        <Image
          src={heroBanner}
          alt="Hero Banner"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.cta}>
        <span className={styles.image}>
          <Image
            layout="fixed"
            width="200"
            height="200"
            src={divinity}
            alt=""
          />
        </span>
        <span className={styles.image}>
          <Image
            layout="fixed"
            width="200"
            height="200"
            src={synchronicity}
            alt=""
          />
        </span>
        <div className={styles.ctaText}>
          <div className={styles.ctaMainText}>
            Your <em>Album</em> and <em>Artist</em> Name
          </div>
          <div className={`${styles.ctaSubText}`}>
            <div>
              on <em>Custom</em> Album Designs
            </div>
          </div>
          <button className="button cta">Shop Now</button>
        </div>
        <span className={styles.image}>
          <Image
            layout="fixed"
            width="200"
            height="200"
            src={theUndertaking}
            alt=""
          />
        </span>
        <span className={styles.image}>
          <Image
            layout="fixed"
            width="200"
            height="200"
            src={asTheSunSpeaks}
            alt=""
          />
        </span>
      </div>
      <div className={styles.soundwavesImage}>
        <Image src={soundwaves} alt="Sound Waves" layout="responsive" />
      </div>
    </>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
