import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="container">
      
      
      <section>
          <h2>Why are they Endangered?</h2>
          <p>The primary threat to Emperor Penguins is <strong>Climate Change</strong>. They rely on "fast ice"—sea ice attached to the land—to breed and raise their chicks. As global temperatures rise, this ice breaks up too early, leading to high mortality rates among chicks who haven't grown their waterproof feathers yet.</p>
      
      
      
          <ul>
              <li><strong>Habitat Loss:</strong> Disappearing breeding grounds.</li>
              <li><strong>Food Scarcity:</strong> Overfishing and changing currents reduce the availability of krill and silverfish.</li>
              <li><strong>Ocean Acidification:</strong> Impacts the entire food chain they depend on.</li>
          </ul>
      </section>
      <section>
          <h2>How You Can Help</h2>
          <p>While the problem is global, individual actions contribute to the solution:</p>
          <ol>
              <li><strong>Reduce Carbon Footprint:</strong> Switch to renewable energy and reduce waste.</li>
              <li><strong>Sustainable Seafood:</strong> Only buy MSC-certified seafood to ensure penguin food sources aren't depleted.</li>
              <li><strong>Support Conservation:</strong> Donate to organizations like the WWF or Antarctic and Southern Ocean Coalition.</li>
          </ol>
      </section>
      <section className="quiz-box">
          <h2>Test Your Knowledge</h2>
              <form method="POST">
                  <p>1. Where do Emperor Penguins primary breed?</p>
                  <input type="radio" name="q1" value="grass" id="a1"/> <label htmlFor="a1" >Grassy Plains</label><br />
                  <input type="radio" name="q1" value="ice_shelf" id="a2" /> <label htmlFor="a2">Stable Sea Ice (Fast Ice)</label><br />
                  <p>2. Aside from climate change, what is a major threat?</p>
                  <input type="radio" name="q2" value="overfishing" id="b1" /> <label htmlFor="b1">Overfishing of Krill</label><br />
                  <input type="radio" name="q2" value="volcanoes" id="b2" /> <label htmlFor="b2">Volcanic Eruptions</label><br /><br />
      
                  <button type="submit" name="submit_quiz" className="btn">Submit Results</button>
              </form>
      </section>
      </div>
      
      <footer>
      <p>&copy; 2024 Penguin Conservation Project</p>
      </footer>
    </main>
  );
}
