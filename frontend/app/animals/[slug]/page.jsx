import QuizClient from "./quiz-client";

const ANIMAL_DATA = {
  penguin: {
    name: "Emperor Penguin",
    img: "/images/placeholder.jpg",
    description: "Emperor penguins are a type of penguin that lives in Antarctica, which is one of the coldest places on Earth. Because of climate change, our planet continues to get warmer, which is causing the ice they live on to melt, meaning they are slowly losing their home. Without ice, penguins cannot raise their children or find enough food to eat for themselves or their families. Because of this, scientists say that if we don't stop climate change from continuing, most emperor penguins will likely be dead by the year 2100. We can help to save this species by doing things as simple as using less energy at home and supporting charities which help fight large organisations who are contributing heavily to climate change. If we can all learn about why keeping our planet cool is important, then we can save this species.",
    quiz: {
      question: "Why are emperor penguins in danger of extinction?",
      options: [
        { text: "People are hunting them", letter: "A" },
        { text: "The ice is melting because of climate change", letter: "B" },
        { text: "They are being farmed", letter: "C" },
        { text: "There is a deadly disease", letter: "D" },
      ],
      answer: "B",
    },
  },
  tiger: {
    name: "Bengal Tiger",
    img: "/images/placeholder.jpg",
    description: "Bengal tigers are large and strong cats that live in places like India. Now there are less than 2,500 of them left in the world because humans have been continuing to cut down the forests where they live, and some people across the world continue to hunt them for profit. Luckily, there is now a project in India called Project Tiger which is helping the number of tigers of all species grow. This is an example of humans coming together to do good for these animals who will otherwise be extinct in our lifetimes. We can continue to help tigers by protecting forests, stopping humans hunting them and support wildlife reserves who protect these animals.",
    quiz: {
      question: "How can we protect Bengal tigers?",
      options: [
        { text: "Move their home", letter: "A" },
        { text: "Build treehouses for them", letter: "B" },
        { text: "Protect their forests", letter: "C" },
        { text: "Move them all to an enclosure", letter: "D" },
      ],
      answer: "C",
    },
  },
  elephant: {
    name: "Savannah Elephant",
    img: "/images/placeholder.jpg",
    description: "Savannah elephants are a species in Africa that are the biggest animals that live on land. They are currently in danger of extinction because in 2021 they were officially listed as endangered. The biggest reason they are endangered is because people are illegally hunting them for their tusks, which are made of ivory which can be sold for a large amount of money, and that people keep building farms and houses on where these elephants used to live. We can help keep these elephants alive by supporting charities who are pushing for a ban on selling ivory worldwide, by helping rangers who protest them from hunters and by making sure elephants have enough land to live on.",
    quiz: {
      question: "What are savannah elephants and other elephant species hunted for?",
      options: [
        { text: "Their tusks", letter: "A" },
        { text: "Their ears", letter: "B" },
        { text: "Their eyes", letter: "C" },
        { text: "Their skin", letter: "D" },
      ],
      answer: "A",
    },
  },
};

export default async function AnimalPage({ params }) {
  const { slug } = await params;
  const animal = ANIMAL_DATA[slug];

  if (!animal) {
    return (
      <main className="main">
        <div className="container">
          <h1>Animal not found</h1>
          <p>The animal you're looking for doesn't exist.</p>
        </div>
      </main>
    );
  }

  return <QuizClient animal={animal} />;
}

