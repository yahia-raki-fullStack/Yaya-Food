/* eslint-disable react/no-unescaped-entities */
import Header from "../../components/Header";

function About() {
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
        <div className="max-w-lg px-8 py-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <p className="text-gray-700 mb-4">
            This food website is my second project. I was limited in what I
            could do because I only used a free API. I wanted to create another
            page for the instructions, but I couldn't due to the limitations.
          </p>
          <p className="text-gray-700 mb-4">
            Now, I'm starting my backend learning journey, and I hope you'll see
            my third project with both front-end and back-end capabilities.
          </p>
          <p className="text-gray-700">Thank you for visiting!</p>
        </div>
      </div>
    </div>
  );
}

export default About;
