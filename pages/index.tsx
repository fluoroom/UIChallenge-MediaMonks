import { VoidFunctionComponent } from "react";
import Head from "next/head";
import useBackground from "hooks/use-background";
import { Colors } from "context/background-context";
import UnderlinedText from "components/underline/underlined-text";
import Step from "../components/step"
import LetsAll from "components/lets-all";
import styles from "styles/Home.module.scss";

const Home: VoidFunctionComponent = () => {
  const { setColors } = useBackground();
  const changeBackground = (color) => setColors({backgroundColor:color});
  const changeFont = (color) => setColors({fontColor:color});
  return (
  <div className={styles.container}>
    <Head>
      <title>Media.Monks</title>
      <meta name="description" content="Let's all build this brand together" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Step title={<>Are you ready for your first challenge at Media.<UnderlinedText>Monks</UnderlinedText>?</>}
    fontColor="#DFBBFE" backgroundColor="#2C2D38"/>
    <Step graph={<LetsAll/>}
    fontColor="#DFBBFE" backgroundColor="#2C2D38"/>
    <Step title={<>Simplicity is the way to go when considering <UnderlinedText>user</UnderlinedText> experience.</>}
    text="If the websites are confusing, visitors will give up and find what they need elsewhere. Keeping navigation simple, intuitive and consistent is key."
    fontColor="#7D26C9" backgroundColor="#FFCB16"/>
    <Step title="Visual hierarchy is the arrangement of elements in order of importance."
    text="One of the most important functions of visual hierarchy is to establish a focal point. This shows visitors where the most important information is."
    fontColor="#E1FF9A" backgroundColor="#4F24EE"/>
    <Step title="Typography has an important role to play on the website."
    text="It commands attention and works as the visual interpretation of the brands voice."
    fontColor="#FF245B" backgroundColor="#3C0C60"/>
    <Step title={<>More people are using their mobile devices to browse the <UnderlinedText>web</UnderlinedText>.</>}
    text="It is important to consider building your website with a responsive layout that can adjust to different screens."
    fontColor="#4F24EE" backgroundColor="#00DC7C"/>
    <Step title="Keep users engaged and coming back for more."
    text="Sites that complement the user journey with functional and captivating interaction can elevate the experience to a whole new level."
    fontColor="#00DC7C" backgroundColor="#002838"/>

  </div>
)
};

export default Home