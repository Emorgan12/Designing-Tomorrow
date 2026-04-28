import Image from "next/image";

export default function Home() {
  return (
    <main className="main">
      <div className="container">
        <div className="fact-file">
          <div>
            <h2>Animal Name</h2>
            <Image
              src="/images/placeholder.png"
              alt="Placeholder Image"
              width={400}
              height={300}
            />
          </div>
          
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis vulputate lorem. Maecenas vestibulum mollis diam. Pellentesque
            ut neque. Pellentesque habitant morbi tristique senectus et netus et
            </p>
        </div>
        <div className="quiz">
          <h2>Quiz</h2>
          <h3>Question 1: What is the capital of France?</h3>
          <ul>
            <li>A) Berlin</li>
            <li>B) Madrid</li>
            <li>C) Paris</li>
            <li>D) Rome</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
