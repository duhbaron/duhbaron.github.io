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
        - UV protection that lasts 2-5 years
        - Hydrophobic surface repels water and contaminants
        - Easier cleaning — dirt and bugs slide off more easily
        - Enhanced gloss and depth of color
        - Protection against minor scratches and chemical etching

        **Is it Right for Your Aircraft?**
        Ceramic coating is ideal for aircraft with good paint condition. If your paint has significant oxidation or scratches, we recommend a paint correction first to ensure the best results.

        **Cost vs. Value**
        While ceramic coating costs more upfront than a standard wax, it lasts significantly longer and reduces your long-term detailing costs. Most of our clients see a return on investment within the first year.

        Contact us today to discuss whether ceramic coating is right for your aircraft.
      `,
      date: 'February 1, 2026',
      readTime: '4 min read'
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