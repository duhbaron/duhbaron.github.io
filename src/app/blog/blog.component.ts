import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface BlogPost {
  id: number;
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  image?: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  selectedPost: BlogPost | null = null;

  posts: BlogPost[] = [
    {
      id: 1,
      slug: 'signs-your-aircraft-needs-a-detail',
      category: 'Aircraft Care Tips',
      title: '5 Signs Your Aircraft Needs a Detail',
      excerpt: 'From oxidized paint to musty interiors — here are the top signs your aircraft is overdue for a professional detail.',
      content: `
        As a pilot or aircraft owner, it's easy to overlook the cosmetic condition of your aircraft when you're focused on airworthiness. But the exterior and interior condition of your aircraft matters more than you might think — not just for aesthetics, but for protection and value.

        **1. Oxidized or Chalky Paint**
        If your aircraft's paint looks dull, chalky, or has lost its shine, oxidation has set in. UV rays break down the clear coat and paint over time. A professional polish and wax treatment can restore the finish and protect against further damage.

        **2. Water Spots and Mineral Deposits**
        Hard water spots on windows, leading edges, and painted surfaces are more than cosmetic issues. Over time, mineral deposits can etch into surfaces and become very difficult to remove. Regular detailing prevents buildup.

        **3. Musty or Stale Interior Odors**
        Aviation interiors trap moisture, especially in fabric seats and carpet. A musty smell is a sign of mold or mildew growth. Our deep interior clean eliminates odors at the source rather than masking them.

        **4. Bugs and Debris on Leading Edges**
        Bug splatter on leading edges isn't just ugly — it can affect aerodynamics. Hardened insect residue is also corrosive to paint. We use aviation-safe products to safely remove debris without damaging your surfaces.

        **5. It's Been More Than 90 Days**
        Even if your aircraft looks clean, dust, pollution, and UV exposure are constantly degrading surfaces. We recommend a full detail every 90 days to maintain protection and appearance.
      `,
      date: 'March 1, 2026',
      readTime: '4 min read'
    },
    {
      id: 2,
      slug: 'how-weather-affects-aircraft-exterior',
      category: 'Aircraft Care Tips',
      title: 'How Weather Affects Your Aircraft\'s Exterior',
      excerpt: 'Sun, rain, humidity and temperature swings all take a toll on your aircraft. Here\'s what to watch for and how to protect your investment.',
      content: `
        Georgia's climate is tough on aircraft. Between the intense summer heat, high humidity, and occasional severe storms, aircraft owners in the Southeast face unique challenges when it comes to protecting their investment.

        **UV Radiation**
        The Georgia sun is relentless. UV rays are the number one cause of paint oxidation and fading. A quality wax or ceramic coating acts as a shield between your paint and the sun's rays.

        **Humidity and Moisture**
        High humidity accelerates corrosion, especially on bare metal surfaces, control cables, and hardware. Regular detailing includes inspection of vulnerable areas and application of corrosion inhibitors.

        **Acid Rain and Pollution**
        Aircraft parked near urban areas or industrial zones are exposed to acid rain and airborne pollutants that settle on surfaces. These contaminants are mildly acidic and slowly degrade paint and metal over time.

        **Temperature Swings**
        Expansion and contraction from temperature changes can cause micro-cracking in paint and sealants over time. Keeping surfaces properly sealed helps minimize this effect.

        **Our Recommendation**
        For aircraft based in Georgia, we recommend a full exterior detail every 60-90 days during summer months, and a ceramic coating application once a year for maximum protection.
      `,
      date: 'February 15, 2026',
      readTime: '5 min read'
    },
    {
      id: 3,
      slug: 'why-ceramic-coating-is-worth-it',
      category: 'Aircraft Care Tips',
      title: 'Why Ceramic Coating is Worth It for Your Aircraft',
      excerpt: 'Ceramic coatings offer years of protection in a single application. Here\'s why more aircraft owners are making the switch.',
      content: `
        Ceramic coating has become one of the most popular protection options for aircraft owners who want long-lasting shine and protection without constant maintenance. But is it worth the investment?

        **What is Ceramic Coating?**
        Ceramic coating is a liquid polymer that chemically bonds to your aircraft's paint, creating a semi-permanent layer of protection. Unlike wax, which sits on top of the paint and wears off, ceramic coating becomes part of the surface.

        **Benefits for Aircraft**
        UV protection that lasts 2-5 years, a hydrophobic surface that repels water and contaminants, easier cleaning since dirt and bugs slide off more easily, enhanced gloss and depth of color, and protection against minor scratches and chemical etching.

        **Is it Right for Your Aircraft?**
        Ceramic coating is ideal for aircraft with good paint condition. If your paint has significant oxidation or scratches, we recommend a paint correction first to ensure the best results.

        **Cost vs. Value**
        While ceramic coating costs more upfront than a standard wax, it lasts significantly longer and reduces your long-term detailing costs. Most of our clients see a return on investment within the first year.

        Contact us today to discuss whether ceramic coating is right for your aircraft.
      `,
      date: 'February 1, 2026',
      readTime: '4 min read'
    },
    {
      id: 4,
      slug: 'best-airports-private-jets-georgia',
      category: 'Aviation News',
      title: 'Best Airports for Private Jets in Georgia',
      excerpt: 'Georgia has some of the best general aviation airports in the Southeast. Here\'s a guide to the top private jet airports in the state.',
      content: `
        Georgia is home to a thriving general aviation community with dozens of airports that cater to private jet owners, charter operators, and turboprop flyers. Whether you're based in Atlanta or flying in from out of state, here are the top airports to know.

        **Gwinnett County Airport — Briscoe Field (LZU)**
        Located in Lawrenceville, LZU is one of the most active general aviation airports in the Atlanta metro area. With a 6,000-foot runway, full FBO services, and easy access to the northeast Atlanta suburbs, it's a top choice for private jet owners in the region. Aerolux Aviation is based here and serves aircraft at this field regularly.

        **Dekalb-Peachtree Airport (PDK)**
        PDK is one of the busiest general aviation airports in the Southeast, located just 12 miles from downtown Atlanta. It offers excellent FBO services, instrument approaches, and a strong community of based aircraft owners.

        **Fulton County Airport — Charlie Brown Field (FTY)**
        Located on the west side of Atlanta, FTY is a convenient option for those traveling to or from the western suburbs. It has a strong corporate aviation presence and multiple FBO options.

        **Cobb County Airport — McCollum Field (RYY)**
        Serving the Marietta and Kennesaw areas, RYY is a well-maintained general aviation airport with a friendly atmosphere and growing based aircraft community.

        **Our Service Area**
        Aerolux Aviation travels to airports throughout the Atlanta metro area and beyond. Contact us to confirm service availability at your home airport.
      `,
      date: 'March 3, 2026',
      readTime: '4 min read'
    },
    {
      id: 5,
      slug: 'how-often-should-you-detail-your-aircraft',
      category: 'Aircraft Care Tips',
      title: 'How Often Should You Detail Your Aircraft?',
      excerpt: 'Not sure how frequently your aircraft needs professional detailing? Here\'s a simple guide based on aircraft type and usage.',
      content: `
        One of the most common questions we get from aircraft owners is how often they should schedule a professional detail. The honest answer depends on several factors — but here's a general guide to help you plan.

        **Every 30-60 Days — High Use or Outdoor Storage**
        If your aircraft flies frequently, is stored outdoors, or operates in a coastal or high-humidity environment, monthly or bi-monthly detailing is recommended. Frequent flying means more bug accumulation, exhaust staining, and UV exposure.

        **Every 90 Days — Average Use**
        For most private aircraft owners flying 20-50 hours per month and hangared overnight, a quarterly detail is the sweet spot. This keeps paint protected, interiors fresh, and surfaces free of contaminant buildup.

        **Every 6 Months — Light Use or Hangared Aircraft**
        Aircraft that fly infrequently and are kept in a climate-controlled hangar can often go 6 months between full details. However, we still recommend a light exterior wash and interior wipe-down every 90 days.

        **Annual — Ceramic Coated Aircraft**
        If your aircraft has a ceramic coating applied by Aerolux Aviation, the coating handles most of the day-to-day protection. An annual detail and coating inspection is typically all that's needed.

        **Signs It's Time Regardless of Schedule**
        Water no longer beads on the surface, paint looks dull or chalky, interior has any odor, or visible bug buildup on leading edges — any of these means it's time to book.

        Contact Aerolux Aviation to set up a recurring detail schedule that works for your aircraft and budget.
      `,
      date: 'February 25, 2026',
      readTime: '5 min read'
    },
    {
      id: 6,
      slug: 'interior-vs-exterior-detailing',
      category: 'Aircraft Care Tips',
      title: 'Interior vs Exterior Detailing — What Comes First?',
      excerpt: 'When it\'s time to detail your aircraft, should you start inside or outside? The answer might surprise you.',
      content: `
        When aircraft owners book their first professional detail, one of the most common questions is whether to prioritize the interior or exterior. Here's how we think about it at Aerolux Aviation.

        **Always Start with the Exterior**
        Our process always begins with the exterior for one simple reason — exterior work generates dust, overspray, and debris that can settle into an already-cleaned interior. By completing the exterior first, we ensure the interior stays clean throughout the process.

        **The Exterior Process**
        We start with a thorough pre-wash to remove loose contaminants, followed by a hand wash using aviation-safe soap. Next comes clay bar treatment to remove embedded contaminants, followed by polish, paint correction if needed, and finally a wax or ceramic coating application.

        **Then the Interior**
        Once the exterior is complete and protected, we move inside. Interior detailing includes vacuuming all surfaces, cleaning and conditioning leather or fabric seats, wiping down all hard surfaces, cleaning avionics screens with appropriate products, and deodorizing the cabin.

        **Why Both Matter**
        A clean exterior protects your paint and metal from corrosion and UV damage. A clean interior protects your avionics, upholstery, and carpet — and makes every flight more enjoyable. Together, a full detail maintains your aircraft's value and airworthiness.

        **Our Recommendation**
        Book a full interior and exterior detail together for the best results and the most efficient use of our time at your aircraft.
      `,
      date: 'February 10, 2026',
      readTime: '4 min read'
    },
    {
      id: 7,
      slug: 'why-atlanta-aircraft-owners-choose-professional-detailing',
      category: 'Aviation News',
      title: 'Why Atlanta Aircraft Owners Choose Professional Detailing',
      excerpt: 'More Atlanta-area aircraft owners are turning to professional detailing services. Here\'s why the trend is growing.',
      content: `
        The Atlanta metro area is one of the fastest-growing general aviation markets in the Southeast. With thousands of based aircraft at airports like LZU, PDK, FTY, and RYY, demand for professional aircraft detailing has never been higher. Here's why more owners are making the switch from DIY to professional service.

        **Time is the Number One Factor**
        Atlanta-area aircraft owners are busy professionals, business owners, and executives. A proper exterior and interior detail can take 6-12 hours when done correctly. Professional detailing services like Aerolux Aviation come to your hangar and handle everything — so you can focus on flying, not cleaning.

        **The Right Products Make a Difference**
        Professional detailers use aviation-specific products that are safe for aircraft surfaces, avionics, and paint systems. Consumer-grade car wash products can strip sealants, cloud plastics, and damage sensitive surfaces. Using the wrong product can cost far more in repairs than a professional detail ever would.

        **Protecting a Significant Investment**
        The average private aircraft is worth hundreds of thousands of dollars. Regular professional detailing protects that investment by preventing corrosion, maintaining paint integrity, and preserving interior materials. Neglected aircraft lose value faster and cost more to restore.

        **We Come to You**
        One of the biggest reasons Atlanta aircraft owners choose Aerolux Aviation is convenience. We travel to your airport, work around your schedule, and leave your aircraft looking better than when we arrived. No dropping off, no waiting — just results.

        Ready to experience the Aerolux difference? Contact us today for a free quote.
      `,
      date: 'March 4, 2026',
      readTime: '5 min read'
    }
  ];

  openPost(post: BlogPost): void {
    this.selectedPost = post;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  closePost(): void {
    this.selectedPost = null;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

 scrollTo(id: string): void {
  window.location.href = '/#' + id;
}

  formatParagraph(text: string): string {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .trim();
  }
}