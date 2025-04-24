import React from "react";
import { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

import Alert from "./DialogsModalCom";

interface DataItem {
  title: string;
  list: string[];
}

interface SocialIcon {
  href: string;
  label: string;
  icon: React.ComponentType;
  color: string;
}

// Datos del footer
const data: DataItem[] = [
  { title: "Laptops", list: ["HP", "Lenovo", "Samsung", "DELL"] },
  { title: "Celulares", list: ["iPhone", "Samsung", "Xiomi", "Infinix"] },
  { title: "Televisores", list: ["LG", "Samsung", "Rivera", "Icesa"] }
];

const socialIcons: SocialIcon[] = [
  { href: "https://www.facebook.com/compustoretena", label: "Facebook", icon: FaFacebook, color: "hover:text-blue-500" },
  { href: "https://x.com/JutDarwinQuito", label: "Twitter", icon: FaTwitter, color: "hover:text-blue-500" },
  { href: "https://www.instagram.com/darwin.quito/", label: "Instagram", icon: FaInstagram, color: "hover:text-pink-500" },
  { href: "https://www.tiktok.com/@compustoretena", label: "TikTok", icon: FaTiktok, color: "hover:text-black dark:hover:text-white" },
  { href: "https://wa.me/593963791150/", label: "Whatsapp", icon: FaWhatsapp, color: "hover:text-green-600" },
];

// Componente del Footer
const Footer: React.FC = () => {

  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const handleAction = () => {
    setIsAlertOpen(true);
  }

  return (
    <footer className="relative isolate overflow-hidden bg-gray-900 py-8 text-white">
      <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden blur-3xl pointer-events-none">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="absolute inset-0 w-full h-full bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-4 gap-y-16 lg:grid-cols-2 lg:gap-y-24">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-3xl">Suscríbete.</h2>
            <p className="mt-4 text-lg leading-2 text-gray-300">
              Mantente al tanto de nuestras últimas ofertas y novedades en tecnología.
            </p>
            <div className="mt-6 flex flex-col max-w-md gap-y-4">
              <div className="flex items-center gap-x-4">
                <label htmlFor="email-address" className="sr-only">Dirección de correo electrónico</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  placeholder="Ingresa tu email"
                  autoComplete="email"
                  className="flex-1 border border-gray-300 rounded-md bg-gray-50 py-2 px-4 placeholder-gray-500 focus:ring-[#ff914d]"
                />
                <button
                  type="submit"
                  onClick={handleAction}
                  className="bg-[#ff914d] text-white py-2 px-6 rounded-md hover:bg-[#ffac59] transition"
                >
                  Suscribirme
                </button>
                <Alert
                  message="La acción se ha completado correctamente."
                  isOpen={isAlertOpen}
                  onClose={() => setIsAlertOpen(false)}
                />
              </div>
              <div className="flex justify-center gap-x-6 mt-6">
                {socialIcons.map(({ href, label, icon: Icon, color }) => (
                  <a key={label} target="_blank" rel="noopener noreferrer" href={href} aria-label={label} className={`text-2xl ${color}`}>
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-around gap-8">
            {data.map(({ title, list }) => (
              <div key={title} className="min-w-[150px]">
                <h5 className="font-semibold mb-4 text-[#ff914d]">{title}</h5>
                <ul className="space-y-2">
                  {list.map((item) => (
                    <li key={item} className="text-gray-300">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-black dark:border-white pt-4 flex flex-col items-center md:flex-row justify-between text-sm">
        <div className="ml-10">
          &copy; 2020 CompuStore, Ing. Darwin Quito. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
