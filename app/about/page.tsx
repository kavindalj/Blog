export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] p-6">
      <h1 className="text-2xl text-gray-800 font-bold mb-4">About This Blog</h1>
      <p className="text-gray-600 text-lg leading-relaxed max-w-2xl text-center">
        Welcome to my blog! I&rsquo;m an undergraduate at the <a href="https://www.sab.ac.lk/computing/">Faculty of Computing (FoC)</a>, <a href="https://www.sab.ac.lk/"> Sabaragamuwa University of Sri Lanka (SUSL)</a>, where I pursue studies in computing, software engineering, and data science.
        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl text-center">
          This blog is where I share my journey in coding, machine learning, self-hosting, IoT, and cybersecurity. I explore topics like Linux customization, automation, home lab setups, and efficient development workflows.
        </p>
      </p>
      <p className="text-gray-600 text-lg leading-relaxed max-w-2xl text-center">
        I enjoy building with tools like ESP32, Raspberry Pi, React, and container-based systems, while managing technical projects with a focus on clean code and practical learning.
      </p>
      <p className="text-gray-600 text-lg leading-relaxed max-w-2xl text-center">
        If you’re passionate about coding, ML, self-hosting, tech tinkering or building efficient workflows, let&rsquo;s connect! Feel free to reach out, share ideas, or discuss projects.
      </p>
    </div >
  );
}
