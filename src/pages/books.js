import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { BookCard, CardGrid } from "../components/base";

const books = [
  // {
  //   title: '',
  //   author: '',
  //   thumbnail: '',
  //   description: '',
  // },
  {
    title: "Parable of the Sower",
    author: "Octavia Butler",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/412iw+DnlvL._SX325_BO1,204,203,200_.jpg",
    description:
      "A novel about a young womans terrifying escape from a dark and dystopian Los Angeles.  Through her journey, she captivates and inspires others to join her community and the group supports and protects one another from the cabal of thieves, murderers, arsonists, and rapists on the road.",
  },
  {
    title: "Reamde",
    author: "Neal Stephenson",
    thumbnail:
      "https://m.media-amazon.com/images/P/0062191497.01._SCLZZZZZZZ_SX500_.jpg",
    description:
      "An exciting novel following a young techy couple kidnapped by Russian gangsters and transported to China where the story twists violently. British Columbia, Islamic jihadists, the Russian mob, MI6, and a popular MMORPG video game come together in this excellent thriller.",
  },
  {
    title: "Dark Matter",
    author: "Blake Crouch",
    thumbnail:
      "https://m.media-amazon.com/images/P/1101904240.01._SCLZZZZZZZ_SX500_.jpg",
    description:
      "Lightnig sci-fi thriller tracking the tale of a quantum physicst who faces an alternate version of himself in a true metaverse of possibilities. A thoughful exploration of quantum theory, Schrödinger's cat, and quantum superposition.",
  },
  {
    title: "Hyperion",
    author: "Dan Simmons",
    thumbnail:
      "https://m.media-amazon.com/images/P/0553283685.01._SCLZZZZZZZ_SX500_.jpg",
    description:
      "Fantastic science fiction novel following a motley crew on a desperate pilgrimage to face the Shrike, a curious and murderous creature sent back in time by powerful super intelligence to destroy mankind. Dan Simmons paints a brilliant portrait of a far flung future where humans, using farcaster technology, can access universal wormholes in space and time to access worlds across the galaxy.",
  },
  {
    title: "The Fall of Hyperion",
    author: "Dan Simmons",
    thumbnail:
      "https://m.media-amazon.com/images/P/B004G60FWM.01._SCLZZZZZZZ_SX500_.jpg",
    description:
      "The second installment of the hyperion series, following pilgrims as they face the Shrike.  Meanwhile, an intergalactic war is raging across the universe, spanning thousands of lightyears.",
    quotes: [
      "The surreal, out-of-time landscape—a minimalist stage designer's version of the Valley of the Time Tombs, molded in plastic and set in a gel of viscous air—seemed to vibrate to the violence of Kassad's rush.",
    ],
  },
  {
    title: "Genius Makers",
    author: "Cade Metz",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/41dNzqcvR4L._SX329_BO1,204,203,200_.jpg",
    description:
      "Colorful look at the people who brought deep learning into the mainstream at companies like Google and Facebook.",
  },
  {
    title: "Leviathan Wakes",
    author: "James S.A. Corey",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/51gX+me3emL._SX317_BO1,204,203,200_.jpg",
    description:
      "Fantastic space fantasy set in the outer Solar System, where Belters, those who grew up in the colonies of the Asteroid belt, carry out the blue collar labor that sustains humans with essential natural resources.",
    quotes: [
      "Liquor doesn’t make you feel better. Just makes you not so worried about feeling bad.",
    ],
  },
  {
    title: "Scale",
    author: "Geoffrey West",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/51aqYDPBk6L._SX324_BO1,204,203,200_.jpg",
    description:
      "Mathematical look at universal scaling laws of life, growth, and death, in organisms, cities, and companies.  Filled with fun facts and figures.",
    quotes: [
      "While exponential growth is a remarkable manifestation of our extraordinary accomplishments as a species, built into it are the potential seeds of our demise and the portent of big troubles just around the next corner.",
    ],
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/91Fq9Amx0pL.jpg",
    description:
      "I've taken the plunge into the world of the sand planet Arrakis, and there is no looking back. Herberts first novel in the Dune series walks us through an epic journey of mother and son, of betrayal and sacrifice, of life on the unforgiving desert planet of Dune.  Water is scarce and gigantic sand worms are plenty.",
    quotes: [
      "If you need something to worship, then worship life — all life, every last crawling bit of it! We're all in this beauty together!",
      "Seek freedom and become captive of your desires. Seek discipline and find your liberty.",
    ],
  },
  {
    title: "I Contain Multitudes: The Microbes Within Us",
    author: "Ed Yong",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/51EGX0zBe1L._SX329_BO1,204,203,200_.jpg",
    description:
      "Detailed look a the microbial world that exists around us and within us.  From parasitic wasps to monkey's assholes to our own intestines, microbes make up much of the natural world.  The influence of an organisms microbiome is stark - our microbes influence our behavior and health in unfathomable ways.",
  },
  {
    title: "A Place of My Own",
    author: "Michael Pollan",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/91ZssyMdwPL.jpg",
    description:
      "A fantastic account of the building of Pollans writing house, a small cabin the author used to pen several of his notable works.  From conception, to blueprint, to construction, this book follows the lifecycle of a building and offers a unique look at what it takes to build something from scratch.  ",
  },
  {
    title: "The Circle",
    author: "Dave Eggers",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/41O954TrofL._SX321_BO1,204,203,200_.jpg",
    description:
      "Great piece of realistic fiction that follows the rise of a new employee at a massive technology conglomerate with massive reach.  A tale on the perils of technological oversight and privacy infringement.",
  },
  {
    title: "Suburban Nation",
    author: "Andres Duany",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/61dnWm6sBoL._SX258_BO1,204,203,200_.jpg",
    description:
      "How modern development is destroying community and the environment.  The author argues that we need new developments to mimic the traditional neighborhoods to eliminate sprawl, reduce crime, and engender proper communities",
  },
  {
    title: "Cure: A Journey into the Science of Mind Over Body",
    author: "Jo Marchant",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/713mO2r72QL.jpg",
    description:
      "Telling tale of the power of thought on our health.  From powerful placebos, to curing IBS with cognitive behavioral therapy, this book provides an in depth look at our ability to shape how we feel with our thoughts.",
  },
  {
    title: "The Gene: An Intimate History",
    author: "Siddhartha Mukherjee",
    thumbnail: "https://m.media-amazon.com/images/I/417RAmvqvFL.jpg",
    description:
      "An excellent look at the history of genetic research and the industry of genomics.  From the production of synthetic insulin to high consequence gene therapy, this book provided an excellent account of where genetics has gone and where it is heading",
  },
  {
    title: "Island",
    author: "Aldous Huxley",
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/a/af/Island.JPG",
    description:
      "Fascinating work of utopian fiction detailing the account of a shipwrecked journalist who finds himself on the island of Pala, where Buddhism, free and open sex, and psychedelic drug use are the norm",
    quotes: [
      "Armaments, universal debt, and planned obsolescence—those are the three pillars of Western prosperity. If war, waste, and moneylenders were abolished, you'd collapse. And while you people are overconsuming the rest of the world sinks more and more deeply into chronic disaster.",
    ],
  },
  {
    title: "New York 2140",
    author: "Kim Stanley Robinson",
    thumbnail:
      "https://img1.od-cdn.com/ImageType-400/0887-1/D38/832/0F/%7BD388320F-E8BF-48A0-B0E7-A2FA62042C59%7DImg400.jpg",
    description:
      "Great futurist novel that anyone with knowledge of New York City should enjoy. Robinson paints a believable picture of the city––complete with its financiers, cops, celebrities, and hoodrats––in a future where the sea level has risen fifty feet.",
  },
  {
    title: "Parasite Rex",
    author: "Carl Zimmer",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/51nMwMxNXtL._SX328_BO1,204,203,200_.jpg",
    description:
      "I read this book while traveling through India... A phenomenal depiction of the bizarre world of parasites. Why parasites truly rule the world as we know it.",
  },
  {
    title: "Being Mortal: Medicine and What Matters in the End",
    author: "Atul Gawande",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/41thjRxxz2L._SX329_BO1,204,203,200_.jpg",
    description:
      "An important book about life and death in the modern era. Awesome insights into how we can improve health care for the dying",
  },
  {
    title: "Seveneves",
    author: "Neal Stephenson",
    thumbnail: "https://i.harperapps.com/covers/9780062190376/y648.jpg",
    description:
      "This is an excellent hard science fiction novel that opens up with the moon exploding. This explosion sets the scene for an apocolypse that necessitates the building of a space colony initially tethered to the international space station. Worth the read if you're interested in orbital mechanics, genomics, robotics, or space. ",
  },
  {
    title: "In the Beginning...was the Command Line",
    author: "Neal Stephenson",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/51GpHlxx6cL._SX320_BO1,204,203,200_.jpg",
    description:
      "Quick read that will get you thinking about switching from Mac/Windows over to Linux. This book is a bit outdated, but still a great read for those interested in computers.",
  },
  {
    title: "The Outlaw Ocean: Journeys Across the Last Untamed Frontier",
    author: "Ian Urbina",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/41ggi--prRL._SX329_BO1,204,203,200_.jpg",
    description:
      "An awesome collection of investigative journalism covering everything from rogue environmental vigilantes to fishing ships capitalizing on slave labor on the open seas",
  },
  {
    title: "How to Change Your Mind",
    author: "Michael Pollan",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/How_to_change_your_mind_pollan.jpg/220px-How_to_change_your_mind_pollan.jpg",
    description:
      "This book dives into the research and personalities behind the science of mind altering chemicals, most notibly Psilocybin and LSD. Pollan provides riveting personal anecdotes of his own psychedelic experiences",
  },
  {
    title: "Sex at Dawn",
    author: "Christopher Ryan",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/f/f2/Sex_at_Dawn%2C_first_edition.jpg",
    description:
      "A new classic which argues that humans are instinctively not monogomous creatures. Have we evolved to be sluts?",
  },
  {
    title: "Why We Sleep",
    author: "Matthew Walker",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/51HL0dOfXNL._SX329_BO1,204,203,200_.jpg",
    description:
      "A compelling case for getting those 8 + hours each night. Walker takes a look at a wide range of health problems associated with lack of sleep, sleep disorders, the new science of dreams, and more.",
  },
  {
    title: "The Industries of the Future",
    author: "Alex Ross",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/71s-MrcZOTL.jpg",
    description:
      "An excellent look at the worlds shifting economies. Focus on robotics, machine learning, code-ification of money, big data, and other industries.",
  },
  {
    title: "The Checklist Manifesto: How to Get Things Right.",
    author: "Atul Gawande",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/71CwWiCJhuL.jpg",
    description:
      "A nifty little book that discusses how something as simple as a checklist is saving lives in operating rooms around the world. Checklists can be applied to a wide range of professions and can ensure that simple mistakes are a thing of the past.",
  },
  {
    title: "Weapons of Math Destruction",
    author: "Cathy O'Neil",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/51eUw-v0X%2BL._SX329_BO1,204,203,200_.jpg",
    description:
      "A quick read the explores a number of pertinent cases where reliance on big data and machine learning is creating negative feedback loops that increase socioeconomic inequality.",
    quotes: [
      "Police make choices about where they direct their attention. Today they focus almost exclusively on the poor. […] And now data scientists are stitching this status quo of the social order into models, like PredPol, that hold ever-greater sway over our lives.",
    ],
  },
  {
    title: "Change Agent",
    author: "Daniel Suarez",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/81WvdnufYPL.jpg",
    description:
      "Killer piece of futurist fiction that plays on gene editing, blockchain, and other soon to be technological realities. Was able to smash this book in three days.",
  },
  {
    title: "Cutting Through Spiritual Materialism",
    author: "Chögyam Trungpa",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/41-GtQ-Z80L._SX331_BO1,204,203,200_.jpg",
    description:
      "A lovely collection of talks from Trungpa, illustrating that spirutality can be hijacked for selfish purposes...and it often is in the west.",
  },
  {
    title: "In the Garden of Beasts",
    author: "Erik Larson",
    thumbnail: "https://m.media-amazon.com/images/I/51toRqFyFrL.jpg",
    description:
      "The electric story of Willliam E. Dodd, the first ambassador to Hitler's Nazi Germany during the rise of the Third Reicht.",
  },
  {
    title: "The Undoing Project",
    author: "Michael Lewis",
    thumbnail:
      "https://kbimages1-a.akamaihd.net/e488376d-026e-4fe3-a62f-542ff4ab3c90/180/1000/False/the-undoing-project-a-friendship-that-changed-our-minds-signed-edition.jpg",
    description:
      "An intimate look at the lives and work of Danny Khaneman and Amos Tversky, who together published a number of seminal works on decision making and heuristics in judgement.",
  },
  {
    title: "Sapiens: A Brief History of Humankind.",
    author: "Yuval Noah Harari",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/41+lolL22gL.jpg",
    description:
      "A great overview of humanity and something to get you thinking about humanism, religion, economics, and philosophy.",
  },
  {
    title: "The Age of Surveillence Capitalism",
    author: "Shoshana Zuboff",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/71kgvTZyGRL.jpg",
    description:
      "An enticing but dense book detailing the quest of powerful technology companies to predict and control our behavior",
  },
  {
    title: "Tools for Conviviality",
    author: "Ivan Illich",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/31eekhIkmNL._SX307_BO1,204,203,200_.jpg",
    description:
      "A fascinating look at ways that we as humans can work with eachother and with the tools at our disposal to mitigate the negative externalities associated with our industrial future.",
    quotes: [
      "A desirable future depends on our deliberately choosing a life of action over a life of consumption, on our engendering a lifestyle which will enable us to be spontaneous, independent, yet related to each other, rather than maintaining a lifestyle which only allows to make and unmake, produce and consume – a style of life which is merely a way station on the road to the depletion and pollution of the environment.",
    ],
  },
  {
    title: "Bad Blood",
    author: "John Carreyrou",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/71rtQvf5UVL.jpg",
    description:
      "Awesome investigative journalism piece detailing the rise and fall of the fraudulent silicon valley blood testing startup Theranos",
  },
  {
    title: "Homo Deus: A Brief History of Tomorrow",
    author: "Yuval Noah Harari",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/81hMjlT14ML.jpg",
    description:
      "How do we stay relevent in a future dominated by computers? Exciting, but frightening at times, Harari's depiction of what may be in store for humanity is vivid and based in real philosophy, science, and technology. A must read.",
  },
  {
    title: "Proof of Heaven: A Neurosurgeons Journey Into the Afterlife",
    author: "Eben Alexander, MD",
    thumbnail:
      "https://books.google.com/books/content/images/frontcover/JkoAfKP5WvAC?fife=w400-h600",
    description:
      "A quick read depicting a neurosurgeons near death experience (NDE). Bridges science and spirituality. Author has a bit of a god complex...",
  },
  {
    title:
      "Stealing Fire: How Silicon Valley, the Navy SEALs, and Maverick Scientists Are Revolutionizing the Way We Live and Work ",
    author: "Jamie Wheal and Steven Kotler",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/81KwTxL8iwL.jpg",
    description:
      "Well written and researched book about flow states, ecstasis, and neurohacking.",
  },
];

const BooksPage = () => (
  <Layout>
    <SEO title="reading list" />
    <CardGrid columns={1}>
      {books.map((book, i) => (
        <BookCard key={i}>
          <img src={book.thumbnail} alt="thumbnail" />
          <div>
            <h1>{book.title}</h1>
            <h2>{book.author}</h2>
          </div>
          <div className="description">
            <p>{book.description}</p>
            {book.quotes?.map((quote) => (
              <blockquote>{quote}</blockquote>
            ))}
          </div>
        </BookCard>
      ))}
    </CardGrid>
  </Layout>
);

export default BooksPage;
