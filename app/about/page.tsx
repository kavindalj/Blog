export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] p-6">
      <h1 className="text-2xl text-gray-800 font-bold mb-4">About This Blog</h1>
      <p className="text-gray-600 text-lg leading-relaxed max-w-2xl text-center">
        Welcome to my blog! Here, I share my experiences and insights on programming, web development, self-hosting, IoT, and cybersecurity. Whether it’s building web apps with React and Next.js, tinkering with development boards like the ESP32, Arduino, and Raspberry Pi, or optimizing a home lab setup, I document my journey, learnings, and projects.
      </p>
      <p className="text-gray-600 text-lg leading-relaxed max-w-2xl text-center">
        I also explore topics like Linux customization, automation, and efficient workflows—focusing on minimal, productive setups. From tackling CTF challenges to setting up self-hosted services and developing IoT solutions, this blog is a space for hands-on experimentation and improvement.
      </p>
      <p className="text-gray-600 text-lg leading-relaxed max-w-2xl text-center">
        If you’re passionate about coding, self-hosting, or building efficient workflows, let’s connect! Feel free to reach out, share ideas, or discuss projects.
      </p>
    </div>
  );
}
