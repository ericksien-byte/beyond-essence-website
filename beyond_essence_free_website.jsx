import React from "react";

// Beyond Essence — Single-file React component (TailwindCSS required in host)
// Usage: paste into a React app (Create React App / Vite) and ensure Tailwind is enabled.

export default function BeyondEssenceSite() {
  return (
    <div className="min-h-screen bg-[#FCFBF6] text-[#0f3b4a] antialiased">
      <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-full bg-[#e6f0ec] flex items-center justify-center ring-2 ring-[#bcdad0]">
            {/* Logo placeholder */}
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2v6" stroke="#0f3b4a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5 11c3-2 6-2 9 0 3 2 5 1 7-1" stroke="#0f3b4a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-semibold">Beyond Essence</h1>
            <div className="text-xs text-[#3b6160]">Natural Herbal Remedies</div>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#products" className="hover:underline">Products</a>
          <a href="#how" className="hover:underline">How it works</a>
          <a href="#resellers" className="hover:underline">Resellers</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        {/* Hero */}
        <section className="grid md:grid-cols-2 gap-8 items-center mt-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">Say Goodbye to Ulcer Discomfort — Naturally</h2>
            <p className="mt-4 text-[#31595a]">Beyond Essence Ulcer Treatment is a gentle, plant-based formula combining black seed oil, mint, and natural antioxidants to help soothe your stomach and support digestion. Simple to use, made in South Africa.</p>

            <div className="mt-6 flex gap-3">
              <a href="#order" className="inline-block bg-[#1f5f67] text-white px-5 py-3 rounded-md font-semibold shadow">Order Now</a>
              <a href="#how" className="inline-block border border-[#1f5f67] text-[#1f5f67] px-5 py-3 rounded-md">How it works</a>
            </div>

            <ul className="mt-6 text-sm text-[#274d4f] space-y-2">
              <li>• 100% natural ingredients</li>
              <li>• No synthetic additives</li>
              <li>• Keep refrigerated; warm gently on stove before use</li>
            </ul>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-72 h-72 bg-white rounded-2xl shadow-md flex items-center justify-center border border-[#e2e8e4]">
              {/* Product mockup placeholder */}
              <div className="w-44 h-44 bg-gradient-to-b from-[#b3dde0] to-[#6fb0ad] rounded-lg flex flex-col items-center justify-center text-white font-bold">2L<br/>Ulcer</div>
            </div>
            <div className="mt-4 text-sm text-[#3a6866]">R200 — Call/WhatsApp: +27 82 734 8979</div>
          </div>
        </section>

        {/* Products */}
        <section id="products" className="mt-16">
          <h3 className="text-2xl font-semibold">Our Products</h3>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <article className="bg-white rounded-xl p-6 border border-[#e9f0ef] shadow-sm">
              <h4 className="font-semibold text-lg">Beyond Essence — Ulcer Treatment (2L)</h4>
              <p className="mt-2 text-sm text-[#3b6160]">A gentle herbal blend of Nigella sativa (black seed oil), mint leaf extract, and natural antioxidants. Use: warm a glass gently on the stove; take morning on empty stomach and evening before bed.</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-xl font-bold">R200</div>
                <a href="#order" className="text-sm bg-[#1f5f67] text-white px-4 py-2 rounded">Order</a>
              </div>
            </article>

            <article className="bg-white rounded-xl p-6 border border-[#e9f0ef] shadow-sm">
              <h4 className="font-semibold text-lg">Beyond Essence — SlimGlow</h4>
              <p className="mt-2 text-sm text-[#3b6160]">Herbal formula to support healthy metabolism and reduce belly fat. Natural tea mix — mix with warm water.</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-xl font-bold">R120</div>
                <a href="#order" className="text-sm bg-[#1f5f67] text-white px-4 py-2 rounded">Order</a>
              </div>
            </article>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="mt-16 bg-white p-6 rounded-xl border border-[#e9f0ef]">
          <h3 className="text-2xl font-semibold">How Beyond Essence Works</h3>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <div className="p-4">
              <strong className="block">Soothe</strong>
              <p className="text-sm text-[#3b6160] mt-2">Black seed oil and mint help calm irritation and support the mucosal lining.</p>
            </div>
            <div className="p-4">
              <strong className="block">Protect</strong>
              <p className="text-sm text-[#3b6160] mt-2">Natural antioxidants reduce oxidative stress in the digestive system.</p>
            </div>
            <div className="p-4">
              <strong className="block">Support</strong>
              <p className="text-sm text-[#3b6160] mt-2">Daily use helps support digestion and reduce recurring discomfort.</p>
            </div>
          </div>
        </section>

        {/* Reseller section */}
        <section id="resellers" className="mt-12 grid md:grid-cols-2 gap-6 items-start">
          <div className="bg-white p-6 rounded-xl border border-[#e9f0ef]">
            <h4 className="text-xl font-semibold">Join our Reseller Program</h4>
            <p className="mt-2 text-sm text-[#3b6160]">Earn 20% commission on each 2L bottle sold. Bulk and top-performer bonuses available.</p>
            <ul className="mt-3 text-sm text-[#3b6160] list-disc ml-5">
              <li>Reseller price: R160 per 2L</li>
              <li>Commission: R40 per bottle</li>
              <li>Marketing materials & support provided</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#e9f0ef]">
            <h4 className="text-xl font-semibold">Become a Reseller</h4>
            <form className="mt-3 space-y-3" onSubmit={(e)=>{e.preventDefault(); alert('Thanks — we\'ll contact you!')}}>
              <input required className="w-full border px-3 py-2 rounded" placeholder="Full name" />
              <input required className="w-full border px-3 py-2 rounded" placeholder="WhatsApp number" />
              <input className="w-full border px-3 py-2 rounded" placeholder="Town / City" />
              <button className="w-full bg-[#1f5f67] text-white py-2 rounded font-semibold">Join Now</button>
            </form>
          </div>
        </section>

        {/* Contact / Footer */}
        <section id="contact" className="mt-12 mb-20 grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-[#e9f0ef]">
            <h4 className="text-xl font-semibold">Contact & Order</h4>
            <p className="mt-2 text-sm text-[#3b6160]">Order via WhatsApp or call — fast local delivery and nationwide courier options.</p>
            <ul className="mt-4 text-sm">
              <li><strong>WhatsApp / Call:</strong> +27 82 734 8979</li>
              <li><strong>Address:</strong> <em>Available on request</em></li>
              <li><strong>Storage:</strong> Keep refrigerated. Use within 3–6 months after opening.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#e9f0ef]">
            <h4 className="text-xl font-semibold">Quick Order</h4>
            <form onSubmit={(e)=>{e.preventDefault(); alert('Order received — we will contact you!')}} className="space-y-3">
              <input required className="w-full border px-3 py-2 rounded" placeholder="Full name" />
              <input required className="w-full border px-3 py-2 rounded" placeholder="WhatsApp number" />
              <select className="w-full border px-3 py-2 rounded">
                <option>Beyond Essence Ulcer Treatment — 2L (R200)</option>
                <option>Beyond Essence SlimGlow — 250g (R120)</option>
              </select>
              <button className="w-full bg-[#1f5f67] text-white py-2 rounded font-semibold">Place Order</button>
            </form>
          </div>
        </section>

      </main>

      <footer className="mt-6 border-t py-6">
        <div className="max-w-6xl mx-auto px-6 text-sm text-[#3b6160] flex flex-col md:flex-row justify-between">
          <div>© {new Date().getFullYear()} Beyond Essence — A division of Beyond Impact Solutions</div>
          <div>Made with care • Natural products • Keep refrigerated</div>
        </div>
      </footer>
    </div>
  );
}
