import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from '@mui/icons-material/Email';

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] p-6">
      <h1 className="text-2xl text-gray-800 font-bold mb-4">Contact Me</h1>
      <p className="text-gray-600 text-lg leading-relaxed max-w-2xl text-center">
        Feel free to reach out to me for any collaborations, inquiries, or just to connect!
      </p>
      <div className="mt-6 flex space-x-4">
        <a href="mailto:klakshanj@gmail.com" className="text-gray-600 hover:text-red-600">
          <EmailIcon fontSize="large" />
        </a>
        <a href="https://github.com/kavindalj" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
          <GitHubIcon fontSize="large" />
        </a>
        <a href="https://www.linkedin.com/in/kavindalj" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
          <LinkedInIcon fontSize="large" />
        </a>
        <a href="https://web.facebook.com/kavindalj" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
          <FacebookIcon fontSize="large" />
        </a>
      </div>
    </div>
  );
}
