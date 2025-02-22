



const sitemap = [
    {
        label: 'Home',
        href: '#home'
    },
    {
        label: 'About',
        href: '#about'
    },
    {
        label: 'Work',
        href: '#work'
    },
    
    {
        label: 'Contact me',
        href: '#contact'
    }
];

const socials = [
    {
        label: 'GitHub',
        href: 'https://github.com/Abd0Khalifa'
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/abdulrahman-khalifa-a5774b241/'
    },
   
];


const Footer = () => {
  return (
    <footer className="section">
        <div className="container">

            <div className="lg:grid lg:grid-cols-2">
                <div className="mb-10">
                      <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
                        Let&apos;s work together today!
                    </h2>

                    <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] lg:max-w-[80ch] reveal-up">
                    Gmail: abdoali345757@gmail.com
                    </p>
                    <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] lg:max-w-[80ch] reveal-up">
                    WhatsApp: 01033053482
                    </p>


                </div>
                <div className="grid grid-cols-2 gap-4 lg:pl-20">

                    <div>
                          <p className="mb-2 reveal-up">
                            Sitemap
                        </p>
                        <ul>
                            {sitemap.map(({label , href}, key)=>(

                                <li key={key}>
                                    <a 
                                    href={href}
                                        className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                                    >
                                        {label}
                                    </a>
                                </li>
                                    )
                            )}
                        </ul>
                    </div>

                    <div className="">
                          <p className="mb-2 reveal-up">
                            Socials
                        </p>
                        <ul>
                            {socials.map(({ label, href }, key) => (
                                <li key={key}>
                                    <a
                                        href={href}
                                        target="_blank"
                                        className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                                        >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>

            <div className="flex items-center justify-between pt-10 mb-8">
                <a 
                  href="/" 
                  className="logo reveal-up"
                  >
                   <img 
                    src="/images/logo.svg" 
                    alt="Logo"
                    width={60}
                    height={60} 
                    /> 
                  </a>

                  <p className="text-zinc-500 text-sm reveal-up">
                      &copy; 2024 <span className="text-zinc-200 reveal-up">codewithAbdulrahman</span>
                  </p>
            </div>

        </div>
    </footer>
  )
}

export default Footer