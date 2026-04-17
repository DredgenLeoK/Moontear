import styles from './MemoryFragments.module.css';

const memoryFragmentsData = [
  //Bleach
  "Ichigo, I hate the rain. It rains in this world too. When your heart is in chaos, this sky becomes clouded. When you are sad, rain falls so easily. To stop that rain, I shall lend you any strength you need. If you trust in me, I won't let a single drop of rain fall from that sky.",
  //Bioshock
  "We all make choices, but in the end, our choices make us.",
  //Vinland Saga//
  "You have no enemies. No one in the world is your enemy. There is no one you need to hurt.",
  //Fallout//
  "I survived because the fire inside me burned brighter than the fire around me.",
  "For many of us, the road is a difficult one. But, the path is always there for us to follow, no matter how many times we may fall.",
  "The fire that had kept me alive was love. Their love. God's love. I will never be able to repay the debt I owe to them, but I must try.",
  "In a world filled with misery and uncertainty, it is a great comfort to know that, in the end, there is light in the darkness.",
  //Jujutsu Kaisen//
  "I'm not trying to save the weak and powerless. Ever since I was a kid, I couldn't leave things alone if something wasn't right.",
  //Persona//
  "Remember that you will die. And that is exactly why you must live.",
  "It's alright to be weak; what's wrong is to let that weakness stop you.",
  "If you want to change the world, you have to be the one to do it.",
  "What should I believe in to live on in this ever-changing world?",
  "The masks you wear become your face, and your memories erase.",
  "What matters after endings is how you left your mark.",
  "Only time will tell the magnitude of deeds.",
  "No one should need a permit to a way of life.",
  "You’ve got a choice ahead: what would you do? Would you sit still, or would you pursue? Somebody’s gotta speak up—are you being quiet, or would you man up and face it, knowing it’ll cause a riot?",
  "The hardest thing is doing the right thing, but what happens when they each stand for their 'right' things?",
  "Time is free to all and it’s priceless, but when it only hurts, it's lifeless.",
  "Every time: goodbye to yesterday, greeted by today, smiling at tomorrow.",
  "Some of my regrets come haunting me to this day. The choice I made was wrong; how thoughtless to believe that I was alone. I learned it the hard way, but you don't have to go through what I've been through, because you're not alone in this frustration. So, come with me.",
  "Fears cut deeper than gun wounds; they can put your fate and destiny into the tomb. The hardest thing to do is changing who you are now to who you wanna be soon. The first enemy is inside us already; whoever makes it out may be ready for the battle. It's pitiless, so you'd better be ready—not only for winning, but for losing, knowing it brings experience for a bigger win later.",
  "This ain't school days, it's real life. Realize that there ain't no textbook to your life; instead, you gotta write your own manuals.",
  "Believing in me gave me possibilities. It's more like a gift that I don't deserve, so I gotta give back to you by all means.",
  "Win or defeat, it's empty—gonna feel incomplete, feeling half-awake and half-asleep. I'd rather be asleep and dream of days of peace.",
  "Life goes on, with or without you.",
  "Still, music keeps on turning me from the words that hurt my soul, removing doubts from my mind.",
  "It's a war out there every day; you can't hide from it. You gotta play by the rules, play it cool, and laugh in the face of the sad disgrace when your friends and foes look alike.",
  "I wanna know—even if it may hurt, even if it brings pain within. My mind's determined: I need to know, even if it may kill, even if it may change me. I'm ready to face the truth.",
  "Such strong will and faith can turn around the fates; I'm never going to give up.",
  "You are stronger than all the things that made you weak.",
  "The toughest prison to break out of is in your mind.",
  "I can't tell you how to see me—just a cage of bones, there's nothing inside.",
  "Can't hold on, or life won't change.",
  "It's our turn to get back, to grab the future in which we fully believe. It's not given to us; it's earned.",
  "A strong man doesn't need to read the future. He makes his own.",
  //Metal Gear//
  "Building the future and keeping the past alive are one and the same thing.",
  "Find something to believe in, and find it for yourself. When you do, pass it on to the future.",
  "Choose your own legacy. It's for you to decide. It's up to you.",
  "We are not tools of the government, or anyone else. Fighting was the only thing I was good at, but at least I always fought for what I believed in.",
  "I've taught you all I can. The rest you'll need to learn on your own. In the end, you have to choose whether you're gonna live as a soldier, or just another man with a gun. There is nothing more for me to give you. All that's left for you to take is my life.",
  "We all must atone for our own sins. We must not pass them on to the next generation. We must not leave them for the future. That is our true mission.",
  "We mustn't allow ourselves to be chained to fate, to be ruled by our genes. Humans can choose the type of life they want to live. What's important is that you choose life... and then live.",
  "There's no such thing as a 'final' reality. Most of what we think we know is information we've received through various media... but memories... they aren't meant to be stored on digital media. They need to be passed on by the person themselves. That's what I live for. We need to pass the torch, and let our children read our messy and sad history by its light.",
  "It's not whether you're right or wrong, but how much faith you're willing to have, that decides the future.",
  "Never give up. Fight until the end. Always believe you eill succeed, even when the odds are against you.",
  //Silent Hill//
  "There was a hole in here, now its gone.",
  "I was weak. That's why I needed you... needed someone to punish me for my sins... but that's all over now.",
  "We were put here on this earth, put here to feel joy, not be blue",
  //Cod zombies//
  "The loneliness is only missed when I am alone "
];

export default function MemoryFragments() {
  return (
    <div className={styles['memory-container']}>
      <header className={styles['memory-header']}>
        <h2>Memory Fragments</h2>
      </header>
      
      <div className={styles['memory-content']}>
        {memoryFragmentsData.map((fragment, index) => (
          <p key={index} className={styles['memory-item']}>
            &quot;{fragment}&quot;
          </p>
        ))}
      </div>
    </div>
  );
}