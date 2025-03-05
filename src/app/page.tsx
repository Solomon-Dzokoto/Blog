import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>
      <Cards/>   
    </div>
  );
}

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>How It Works</h1>
      <p>Easily set up your campaign, let AI handle the calls, and stay in control with real-time tracking and insights.</p>
    </div>
  )
}

type CardProps = {
  src: string;
  alt: string;
  title: string;
  text: string;
};

const Cards = () => {
      return (
  <div className={styles.cardsContainer}>
    
      <div className={styles.childContainer}>
        <Card src="/signup-icon.png" alt="sign up" title="Sign Up" text="Create your account in minutes and gain access to an AI-powered calling system. No technical setup required."/>

        <Card src="/create-icon.png" alt="create" title="Create Your Campaign" text="Set up a new campaign in minutes by choosing your AI agent, Defining your call script and uploading your contact list."/>

        <Card src="/ai-calls-icon.png" alt="ai makes the calls" title="AI Makes the Calls" text="Once your campaign is live, the AI agent automatically dials each contact, delivers your message naturally, and engages with customer."/>
      </div>

      <div className={styles.childContainer}>
        <Card src="/signup-icon.png" alt="sign up" title="Track Calls in Real Time" text="Stay in control by monitoring calls as they happen. Listen to live conversations, read real-time transcriptions, and see caller details instantly."/>

        <Card src="/create-icon.png" alt="create" title="Review Call Outcomes" text="After each call, access detailed reports showing call results, including answered calls, missed calls, voicemails etc"/>

        <Card src="/ai-calls-icon.png" alt="ai makes the calls" title="Optimize & Improve" text="Use call analytics to refine your outreach strategy to improve engagement based on real-time performance data."/>
      </div>
    </div>
  )
}

const Card = ({src, alt, title, text}: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <Image src={src} alt={alt} width={40} height={40} />
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  )
}
