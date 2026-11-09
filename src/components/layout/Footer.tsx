export function Footer() {
  return (
    <footer className="border-t border-white/5 pt-20 lg:pt-32 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Top: Brand + Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-arvana-blue to-arvana-purple flex items-center justify-center">
                <span className="text-base font-bold text-white leading-none">A</span>
              </div>
              <span className="text-[18px] font-bold tracking-tight text-white">ARVANA</span>
            </div>
            <p className="text-arvana-grey text-sm leading-relaxed max-w-xs">
              Intelligence That Moves Business Forward.
            </p>
          </div>

          <div className="lg:col-span-4 lg:col-start-5">
            <h3 className="text-white font-bold text-sm tracking-wide uppercase mb-6">Contact Us</h3>
            <div className="space-y-4">
              <a
                href="https://arvana.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-arvana-white text-sm hover:text-arvana-blue transition-colors"
              >
                <svg className="w-5 h-5 text-arvana-grey" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <span>Visit arvana.in</span>
              </a>
              <a
                href="mailto:arvanahq@gmail.com"
                className="flex items-center gap-3 text-arvana-white text-sm hover:text-arvana-blue transition-colors"
              >
                <svg className="w-5 h-5 text-arvana-grey" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22-2L11 8a2 2 0 014 0l5.11 3.47a2 2 0 002.22-2L13 8a2 2 0 00-4-4L5 8a2 2 0 01-2 2z" />
                </svg>
                <span>arvanahq@gmail.com</span>
              </a>
              <a
                href="tel:+917708431829"
                className="flex items-center gap-3 text-arvana-white text-sm hover:text-arvana-blue transition-colors"
              >
                <svg className="w-5 h-5 text-arvana-grey" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                <span>+91 7708431829</span>
              </a>
              <a
                href="https://wa.me/917708431829"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-arvana-white text-sm hover:text-arvana-blue transition-colors"
              >
                <svg className="w-5 h-5 text-arvana-grey" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a10 10 0 11-10 10 10 10 0 0110-10zm0-2a12 12 0 10-12 12 12 12 0 0012-12zM11 10l2 2m0 0 2 2m-2-2l-2-2m14 8h-2l-3-3m0 0-3 3m3 3h-2" />
                </svg>
                <span>WhatsApp →</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <h3 className="text-white font-medium text-sm tracking-wide uppercase mb-6">Explore</h3>
            <div className="space-y-3">
              <a href="#solutions" className="text-arvana-grey text-[14px] hover:text-white transition-colors block">
                Our Services
              </a>
              <a href="#industries" className="text-arvana-grey text-[14px] hover:text-white transition-colors block">
                Industry Solutions
              </a>
              <a href="#why" className="text-arvana-grey text-[14px] hover:text-white transition-colors">
                Why ARVANA
              </a>
              <a href="#how-it-works" className="text-arvana-grey text-[14px] hover:text-white transition-colors">
                How It Works
              </a>
              <a href="#faq" className="text-arvana-grey text-[14px] hover:text-white transition-colors">
                FAQ
              </a>
            </div>
          </div>
        </div>

        {/* Bottom: Socials + Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/5">
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-arvana-grey hover:text-arvana-blue hover:bg-white/10 transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 6C22 4.5 20.5 3 19 3H5C3.5 3 2 4.5 2 6v12C2 19.5 3.5 21 5 21h14C20.5 21 22 19.5 22 18V6zM7 10h4v4H7v-4zM5 21V7h10v14H5z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-arvana-grey hover:text-arvana-blue hover:bg-white/10 transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2.5v-10H13v2.5h-2.5V12h2.5v-2.5c0-2.8 1.6-4.8 4-4.8s4 2 4 4.8v3.5H14v2.5h2.5v10H13zM12 7c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-arvana-grey hover:text-arvana-rose hover:bg-white/10 transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.071 3.253.148 4.771 1.691 4.919 4.919.06 1.265.071 1.646.071 4.85 0 3.204-.012 3.584-.071 4.85-.148 3.253-1.691 4.771-4.919 4.919-1.265.06-1.646.071-4.85.071-3.204 0-3.584-.012-4.85-.071-3.253-.148-4.771-1.691-4.919-4.919-.06-1.265-.071-1.646-.071-4.85 0-3.204.012-3.584.071-4.85.148-3.253 1.691-4.771 4.919-4.919 1.265-.06 1.646-.071 4.85-.071zm1 12.157c-2.559.13-5.357-.858-6.289-3.082-1.651-3.957-.343-8.24 3.508-9.892.839-.359 2.17-.359 3.01 0 1.388.595 3.634 1.436 4.477 2.747 1.287 1.997 1.856 4.534 1.611 7.127-.299 3.134-3.075 5.365-6.307 6.102m-1.462-8.024c-.09-.393-.164-.835-.224-1.33-.198-1.638-.645-4.216-.645-4.216s1.645.04 3.649 1.372c.468.312.93.839 1.258 1.496.49.985 1.102 2.578 1.102 2.578s-2.848-.975-4.628-1.647c-1.21-.457-2.244-.63-2.951-.231-.735.414-.963 1.214-.647 2.047.332.874 1.243 1.146 2.374.774.484-.158 1.158-.783 1.296-1.072zM23.969 12.147c-.143-1.23-.448-2.644-.967-3.81-.682-1.533-1.972-2.577-3.722-2.91-.313-.06-.65-.095-.968-.095h-.011c-2.532 0-3.295 1.628-3.493 3.202-.035.28-.056.559-.056.838q0 .414.035.823c.035.227.161.664.413 1.054.319.489 1.084 1.416 2.487 2.288 1.023.634 1.756 1.276 2.027 1.503.143.121.211.172.332.242.245.142.462.247.642.344.474.255 1.01.406 1.693.406 1.086 0 2.118-.33 2.93-.998.685-.563 1.032-1.308 1.119-2.064.056-.487.084-.971.084-1.456.001-.737-.017-1.035-.095-1.493z"/></svg>
            </a>
          </div>

          <p className="text-arvana-grey/50 text-xs">
            © {new Date().getFullYear()} ARVANA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
