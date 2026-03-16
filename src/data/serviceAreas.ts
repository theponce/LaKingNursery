/**
 * La King Nursery — service area city data.
 * Powers city-specific landing pages at /service-area/[slug]-tx/.
 * Each city has unique, locally-authentic content to avoid duplicate-content penalties.
 *
 * Content strings use HTML tags (<p>, <strong>, <a>) for rendering with set:html in Astro.
 */

export interface ServiceAreaCity {
  /** City display name */
  name: string;
  /** URL-safe slug (used in /service-area/[slug]-tx/) */
  slug: string;
  /** Short tagline for cards */
  tagline: string;
  /** Drive time from La King Nursery */
  driveTime: string;
  /** Distance in miles from La King Nursery */
  driveDistance: string;
  /** SEO meta title, under 60 characters */
  metaTitle: string;
  /** SEO meta description, under 155 characters */
  metaDescription: string;
  /** Page H1 heading */
  heroHeading: string;
  /** Rich HTML content blocks */
  content: {
    /** 2-3 paragraphs of unique locally-authentic introduction */
    intro: string;
    /** Soil, climate, common landscaping challenges */
    localDetails: string;
    /** Why La King is the right choice for this city */
    whyUs: string;
  };
}

export const serviceAreas: ServiceAreaCity[] = [
  {
    name: "Kingsville",
    slug: "kingsville",
    tagline: "Our hometown, rooted since 1998",
    driveTime: "0 min",
    driveDistance: "Home base",
    metaTitle: "Nursery & Landscaping in Kingsville, TX",
    metaDescription:
      "La King Nursery is Kingsville's hometown garden center. Plants, landscaping, lawn care, and irrigation for Zone 9b since 1998. Visit us on E Kennedy.",
    heroHeading: "Kingsville's Hometown Nursery Since 1998",
    content: {
      intro:
        "<p>Kingsville is where it all started. La King Nursery has been part of this community since 1998, growing alongside the families, students, and ranchers who call the Brush Country home. Our nursery on East Kennedy is just minutes from the Texas A&M University-Kingsville campus, and we have watched generations of homeowners transform their yards into spaces that handle our heat, our drought, and the occasional surprise freeze.</p>" +
        "<p>Whether you live near the Naval Air Station, along the tree-lined streets closer to downtown, or out toward the ranch land that stretches in every direction, we know the soil under your property and the conditions it faces. Kingsville landscaping is not something you can learn from a generic garden book. It takes years of watching what thrives here in the heart of King Ranch heritage country, and that is exactly the kind of knowledge we bring to every project.</p>" +
        "<p>Stop by the nursery any day of the week except Sunday and walk our rows of native plants, shade trees, flowering shrubs, and container-ready selections. We will help you find what works for your specific yard, not just what looks good on a tag.</p>",
      localDetails:
        "<p>Kingsville sits squarely in USDA Zone 9b, where summer temperatures regularly push past 100 degrees and rainfall is unpredictable at best. The dominant soil here is a heavy caliche-clay mix, notorious for poor drainage during intense summer storms and rock-hard compaction during dry spells. Successful landscaping in Kingsville means choosing plants that tolerate alkaline soil, extended heat, and periodic drought. Established native species like Texas sage, cenizo, and retama perform beautifully here without constant irrigation.</p>" +
        "<p>Wind is another factor, especially on the south and east sides of town where there is less tree cover to buffer the steady Gulf breezes. We often recommend windbreak plantings of evergreen species like Texas ebony or anacua for properties exposed to prevailing winds. Proper soil amendment with compost and expanded shale can dramatically improve the caliche-heavy ground and give your plants the drainage and root room they need to establish.</p>",
      whyUs:
        "<p>You do not have to drive anywhere. We are right here in Kingsville, and we have been for over 28 years. When you buy a plant from La King Nursery, you are getting something we know will grow in this exact soil and climate, because we have tested it in our own backyard. From <strong>landscape design</strong> and <strong>irrigation installation</strong> to <strong>tree trimming</strong> and <strong>lawn maintenance</strong>, everything we do is built around what works in Kingsville. Come see us at 1304 East Kennedy, or <a href=\"/contact/\">reach out for a free consultation</a>.</p>",
    },
  },
  {
    name: "Alice",
    slug: "alice",
    tagline: "Serving the heart of Jim Wells County",
    driveTime: "25 min",
    driveDistance: "22 miles",
    metaTitle: "Nursery & Landscaping in Alice, TX",
    metaDescription:
      "La King Nursery serves Alice, TX with plants, landscape design, lawn care, and irrigation. Just 25 minutes from our Kingsville location. Zone 9b experts.",
    heroHeading: "Quality Plants and Landscaping for Alice, TX",
    content: {
      intro:
        "<p>Alice is the beating heart of Jim Wells County, a city shaped by the oil and gas industry and the ranching traditions that define South Texas cattle country. At La King Nursery, we have been serving Alice homeowners and businesses for over two decades, making the short 25-minute drive from our Kingsville location to deliver plants, design landscapes, and maintain properties across the city.</p>" +
        "<p>From the well-established neighborhoods near downtown to the newer developments along the highway corridors, Alice properties have character and space. Many homes here sit on generous lots that give you room to create real outdoor living areas. Whether you are planting shade trees to cool a west-facing patio, installing a drip irrigation system to keep your foundation plantings healthy through August, or redesigning a front yard that has been bare ground for too long, we bring the plants and the expertise to make it happen.</p>" +
        "<p>We are also proud to work with several Alice businesses on their commercial landscaping. First impressions matter, and a well-maintained landscape tells your customers you care about details. If you are looking for a nursery near Alice that actually understands what grows in Jim Wells County, we are the team to call.</p>",
      localDetails:
        "<p>The Alice area shares the Zone 9b classification with the rest of the Coastal Bend, but the soil here leans toward a heavier dark clay compared to the caliche-dominant ground in Kingsville. This clay holds moisture longer after rain events, which can be both a blessing and a challenge. Root rot is a real concern if plants are set too deep or drainage is ignored. We recommend raised beds or amended planting holes for species that need good drainage, and we lean heavily on drought-adapted natives that can handle the feast-or-famine rainfall cycle.</p>" +
        "<p>Heat and wind exposure are the primary landscaping challenges in Alice. The open ranch country surrounding the city means there is little natural windbreak for many residential areas. Planting native mesquite, Texas ebony, or live oak as windbreak anchors, then layering in mid-story shrubs like agarito and Texas mountain laurel, creates a tiered landscape that looks natural and performs well under pressure. Bermuda and buffalo grass blends are our go-to recommendations for lawns that can handle the summer heat without draining the water bill.</p>",
      whyUs:
        "<p>Alice is only 22 miles from our door, and we have spent over 28 years learning exactly what grows in Jim Wells County soil. When you work with La King Nursery, you get a team that selects plants specifically for your conditions, not a big-box store guessing at what might survive a South Texas summer. We offer <strong>landscape design</strong>, <strong>irrigation systems</strong>, <strong>lawn care</strong>, and <strong>tree services</strong> throughout Alice and the surrounding area. <a href=\"/contact/\">Get in touch for a free estimate</a> and let us show you what is possible.</p>",
    },
  },
  {
    name: "Bishop",
    slug: "bishop",
    tagline: "Growing with our Nueces County neighbors",
    driveTime: "15 min",
    driveDistance: "13 miles",
    metaTitle: "Nursery & Landscaping in Bishop, TX",
    metaDescription:
      "La King Nursery is just 15 minutes from Bishop, TX. Plants, landscaping, lawn care, and irrigation tailored for Nueces County soil and climate.",
    heroHeading: "Your Neighborhood Nursery, Just Down the Road from Bishop",
    content: {
      intro:
        "<p>Bishop is one of those tight-knit South Texas farming towns where people know their neighbors and take pride in their property. Sitting in the agricultural heart of Nueces County, this community built on cotton and grain farming understands the land in a way that most cities never will. At La King Nursery, we feel a real kinship with Bishop, and the short 15-minute drive between our nursery and your town means we are practically next door.</p>" +
        "<p>Many Bishop homes reflect the town's agricultural roots: solid, practical properties with good-sized yards that deserve more than just a mow-and-go approach. We work with Bishop homeowners to create landscapes that are both beautiful and sensible, choosing plants that do not need constant babysitting to look good through the long, hot growing season. Whether you want shade trees to anchor your front yard, flowering shrubs to brighten up a fence line, or a full landscape overhaul, we bring the right plants and the right plan.</p>" +
        "<p>We also serve several Bishop-area ranches and rural properties with larger-scale planting, windbreak design, and tree services. If it grows in South Texas soil, we can help you make it thrive.</p>",
      localDetails:
        "<p>Bishop sits on rich Nueces County farmland, and the soil here reflects that agricultural history. You will find a dark, heavy clay loam that is extremely fertile but can become waterlogged during heavy rains and brick-hard during drought. This soil type responds well to organic amendment, and we strongly recommend working in compost and expanded shale before planting to improve drainage and soil structure. Raised beds are an excellent option for vegetables and herbs, keeping roots above the clay layer where drainage is better.</p>" +
        "<p>The flat, open terrain around Bishop means full sun exposure on almost every property, with little natural shade unless you have established trees. This is where smart plant selection matters most. We recommend heat-tolerant species like esperanza, pride of Barbados, and plumbago for color, with live oak, Mexican white oak, or anacua for long-term shade. For lawns, a well-established Bermuda grass with proper irrigation can handle the heat, but buffalo grass is an excellent low-water alternative for areas that do not get heavy foot traffic.</p>",
      whyUs:
        "<p>At just 13 miles away, La King Nursery is the closest full-service nursery and landscaping team to Bishop. We have been working with Nueces County properties for over 28 years, and we understand the specific soil and sun conditions your yard faces. From <strong>plant selection</strong> and <strong>landscape design</strong> to <strong>irrigation installation</strong> and <strong>seasonal lawn care</strong>, we are here to help you get the most out of your property. <a href=\"/contact/\">Give us a call or stop by</a> any Monday through Saturday.</p>",
    },
  },
  {
    name: "Riviera",
    slug: "riviera",
    tagline: "Serving the coastal plains of Kleberg County",
    driveTime: "25 min",
    driveDistance: "20 miles",
    metaTitle: "Nursery & Landscaping in Riviera, TX",
    metaDescription:
      "La King Nursery serves Riviera, TX with plants, landscaping, and lawn care built for coastal plains conditions. 25 min from our Kingsville nursery.",
    heroHeading: "Plants and Landscaping Built for Riviera's Coastal Plains",
    content: {
      intro:
        "<p>Riviera sits where the South Texas ranch country meets the coastal plains, a landscape shaped by steady Gulf winds, wide-open skies, and the kind of quiet that only comes from living close to the land. Bordering the King Ranch and rooted in generations of Kleberg County ranching tradition, this community understands what it means to work with the land rather than against it. At La King Nursery, that is exactly how we approach landscaping in Riviera.</p>" +
        "<p>Properties here face a unique combination of challenges that sets them apart from neighborhoods even 20 miles inland. The persistent wind corridor that funnels up from the coast can dry out plants quickly and stress young trees before they have a chance to establish. At the same time, the flat terrain and proximity to the Gulf mean humidity levels stay higher than most of the inland Brush Country, creating conditions that favor certain fungal issues if plant spacing and airflow are not considered in the design.</p>" +
        "<p>We have been making the drive to Riviera from our Kingsville nursery for over two decades, and we have a solid understanding of what works on these coastal plains. From windbreak plantings that protect your home and garden to drought-adapted native landscapes that look incredible year-round, we bring the right approach for Riviera conditions.</p>",
      localDetails:
        "<p>The soil in the Riviera area tends toward a sandy clay loam, lighter and better-draining than the heavy clays found further inland around Alice and Bishop. This is actually an advantage for many native plants, as root rot is less of a concern. However, the sandier composition also means the soil holds fewer nutrients and dries out faster, especially when those coastal winds pick up. Regular mulching is essential here, both to retain moisture and to build organic matter back into the soil over time.</p>" +
        "<p>The wind corridor is the defining landscaping challenge in Riviera. We design landscapes with windbreak layers in mind: tall, wind-resistant species like live oak and Texas ebony on the windward side, followed by mid-story natives like brasil and desert willow, then lower plantings in the sheltered zones. Salt-tolerant selections become important for properties on the eastern edges closer to Baffin Bay. For lawns, St. Augustine does well in the slightly sandier soil here, though Bermuda remains the most resilient option for full-sun areas with heavy wind exposure.</p>",
      whyUs:
        "<p>Riviera is just 20 miles from La King Nursery, and over our 28-plus years in business, we have developed a real understanding of what the coastal plains demand from a landscape. We do not sell you a plant and wish you luck. We help you choose species that are proven in your wind and soil conditions, and we offer <strong>professional installation</strong>, <strong>irrigation design</strong>, and <strong>ongoing maintenance</strong> to keep everything looking its best. <a href=\"/contact/\">Reach out for a free consultation</a> and let us help you create a landscape that works with Riviera, not against it.</p>",
    },
  },
  {
    name: "Robstown",
    slug: "robstown",
    tagline: "Quality plants for the gateway to the coast",
    driveTime: "35 min",
    driveDistance: "30 miles",
    metaTitle: "Nursery & Landscaping in Robstown, TX",
    metaDescription:
      "La King Nursery serves Robstown, TX with landscaping, plants, lawn care, and irrigation. 28+ years of South Texas expertise, just 35 min away.",
    heroHeading: "Landscaping and Garden Expertise for Robstown, TX",
    content: {
      intro:
        "<p>Robstown has always been a crossroads, the place where the Corpus Christi corridor meets the South Texas interior and where the cotton gin industry once made this town the undisputed capital of Texas cotton. That same hardworking, no-nonsense spirit shows up in the way Robstown homeowners approach their properties: practical, durable, and built to last. At La King Nursery, we respect that approach, and everything we recommend for Robstown yards is chosen to perform, not just look pretty on planting day.</p>" +
        "<p>Located in Nueces County along the Highway 44 and Highway 77 corridors, Robstown is growing as more families settle in the area drawn by the proximity to Corpus Christi and the more affordable cost of living. New construction and older established neighborhoods alike need landscaping that can handle the unique demands of this stretch of South Texas. We have been serving Robstown customers from our Kingsville nursery for years, and the 35-minute drive gives us time to plan what we are going to plant before we even pull in your driveway.</p>" +
        "<p>From commercial properties along the main corridors to quiet residential streets on the west side of town, we bring the same attention to detail and local knowledge to every Robstown project.</p>",
      localDetails:
        "<p>Robstown sits on the Nueces County blackland prairie, characterized by deep, dark clay soils that are among the most fertile in South Texas. This is the soil that made cotton king here. For landscaping, these clays expand significantly when wet and crack when dry, which can stress shallow-rooted plants and cause foundation issues if plantings are too close to your home. We always factor in proper setback distances and recommend root barriers for large trees planted near structures.</p>" +
        "<p>The area gets slightly more annual rainfall than communities further south and west, thanks to its position in the Corpus Christi moisture corridor. This is a real advantage for establishing new plantings, though it also means fungal diseases like brown patch in St. Augustine lawns are more common during humid fall months. We recommend good airflow in landscape designs and lean toward Bermuda or Zoysia for lawns in areas prone to shade and moisture accumulation. For ornamental plantings, Robstown soil supports a wide range of natives including Texas lantana, Turk's cap, flame acanthus, and Mexican honeysuckle.</p>",
      whyUs:
        "<p>La King Nursery is just 30 miles from Robstown, and we have spent over 28 years building our knowledge of what thrives across Nueces County. We are not a chain store with a rotating inventory shipped from out of state. Every plant we carry is selected for South Texas performance, and our <strong>landscape design</strong>, <strong>lawn care</strong>, <strong>irrigation</strong>, and <strong>tree service</strong> teams all understand the specific challenges Robstown properties face. <a href=\"/contact/\">Contact us for a free estimate</a> and see why so many Robstown homeowners trust La King.</p>",
    },
  },
  {
    name: "Falfurrias",
    slug: "falfurrias",
    tagline: "Bringing nursery expertise to Brooks County",
    driveTime: "45 min",
    driveDistance: "40 miles",
    metaTitle: "Nursery & Landscaping in Falfurrias, TX",
    metaDescription:
      "La King Nursery serves Falfurrias, TX with plants, landscaping, and lawn care. 28+ years of Zone 9b expertise for Brooks County conditions.",
    heroHeading: "Trusted Nursery and Landscaping for Falfurrias, TX",
    content: {
      intro:
        "<p>Falfurrias carries a deep ranching heritage that stretches back to Ed Lasater's cattle empire and the founding of Brooks County. This is ranch country at its most authentic, where the landscape is defined by mesquite, prickly pear, and the kind of wide-open spaces that make South Texas feel like its own world. At La King Nursery, we have been serving Falfurrias and the surrounding Brooks County communities for over two decades, bringing nursery-quality plants and professional landscaping services to a part of Texas that too often gets overlooked by larger providers.</p>" +
        "<p>Living in Falfurrias means understanding that your landscape has to be tough. Summer heat here is relentless, water is precious, and the nearest big-box garden center is a long drive. That is why we make the 45-minute trip from our Kingsville nursery to work with Falfurrias homeowners, businesses, and ranches. We bring the right plants already acclimated to Zone 9b conditions, along with the knowledge to install them properly so they establish quickly and thrive without constant intervention.</p>" +
        "<p>Whether you are refreshing the grounds around the county courthouse, a rancher wanting a windbreak around your homestead, or a family wanting to turn a bare yard into something your kids will remember, we are here to help.</p>",
      localDetails:
        "<p>Brooks County soil ranges from deep sands in the eastern portions to a caliche-and-clay mix closer to Falfurrias proper. The sandy areas drain fast and hold very little moisture, which means frequent deep watering during establishment and heavy mulching to retain what moisture the soil does receive. The caliche zones present the opposite challenge: poor drainage and an alkaline pH that locks out iron and other micronutrients, causing yellowing in plants that are not adapted to high-pH conditions. Knowing which soil type you are working with is the first step in any successful Falfurrias landscape, and we always assess conditions on-site before making recommendations.</p>" +
        "<p>Falfurrias receives less annual rainfall than the communities closer to the coast, making drought-adapted landscaping not just a nice idea but a necessity. We focus on native and adapted species that are proven in these conditions: cenizo, blackbrush acacia, guayacan, and prickly pear for structure, with trailing lantana, mealy blue sage, and four-nerve daisy for ground-level color. For shade, the honey mesquite is a natural choice here, though we also recommend retama and desert willow for their seasonal flower displays and minimal water needs.</p>",
      whyUs:
        "<p>We know Falfurrias is not next door, but 40 miles is not going to stop us from providing Brooks County with the same quality service we deliver to our Kingsville neighbors. La King Nursery has been in business for over 28 years, and we have the deep South Texas plant knowledge that matters when you are gardening in one of the hotter, drier parts of the region. We offer <strong>landscape design</strong>, <strong>irrigation systems</strong>, <strong>tree services</strong>, and <strong>seasonal plant deliveries</strong> throughout Falfurrias and surrounding areas. <a href=\"/contact/\">Let us know what you need</a>, and we will make the drive.</p>",
    },
  },
  {
    name: "Premont",
    slug: "premont",
    tagline: "Small-town roots, expert landscaping",
    driveTime: "30 min",
    driveDistance: "25 miles",
    metaTitle: "Nursery & Landscaping in Premont, TX",
    metaDescription:
      "La King Nursery serves Premont, TX with plants, landscaping, and lawn care. Zone 9b experts just 30 minutes away. Family-owned since 1998.",
    heroHeading: "Plants and Landscaping That Fit Premont's Character",
    content: {
      intro:
        "<p>Premont is a small town with deep roots, a Jim Wells County community shaped by the oil field booms and the hardworking families who stayed long after the rigs moved on. There is a pride of place here that you can see in the way people maintain their homes and properties, even when the summer heat makes it tempting to let things go. At La King Nursery, we appreciate that pride, and we are committed to helping Premont homeowners create landscapes that reward the effort year after year.</p>" +
        "<p>Just 25 miles from our Kingsville nursery, Premont is an easy 30-minute drive for our team. We regularly work with homeowners in town as well as the rural properties and small ranches that dot the surrounding countryside. The landscaping needs here range from simple front yard makeovers and shade tree installations to larger-scale projects like windbreak plantings, pasture-edge landscaping, and irrigation system design for properties that rely on well water.</p>" +
        "<p>If you have been putting off a landscaping project because you thought you would have to drive to Corpus or San Antonio to find a real nursery, think again. La King Nursery brings the full selection and the full expertise right to Premont.</p>",
      localDetails:
        "<p>Premont sits in a transition zone between the darker clay loams of the Jim Wells County agricultural areas and the lighter, sandier soils that become more common further south toward Brooks County. Most properties in town have a clay-dominant soil with moderate caliche deposits, which means drainage is a concern during heavy rains but water retention is decent during normal conditions. Adding three to four inches of compost when planting and maintaining a two-to-three-inch mulch layer will go a long way toward keeping soil workable and roots healthy.</p>" +
        "<p>The open terrain around Premont means full sun and steady wind exposure for most properties. Heat stress is the number one plant killer here, so we prioritize species with proven heat tolerance. Bougainvillea does surprisingly well in Premont for color on south-facing walls and fences. For foundational plantings, we lean toward cenizo, dwarf yaupon holly, and compact Texas sage varieties that stay tidy without heavy pruning. Lawn irrigation is important in Premont given the summer heat, and we design efficient drip and sprinkler systems that keep water bills manageable while maintaining healthy turf.</p>",
      whyUs:
        "<p>Premont deserves the same quality landscaping services that larger cities take for granted, and La King Nursery is here to deliver exactly that. We are just 30 minutes away, we have over 28 years of experience in South Texas growing conditions, and every plant we recommend has been selected for performance in Jim Wells County's soil and climate. Whether you need <strong>plants and trees</strong>, <strong>landscape installation</strong>, <strong>irrigation design</strong>, or <strong>ongoing lawn care</strong>, we treat every Premont project like it is in our own backyard. <a href=\"/contact/\">Contact us today</a> to get started.</p>",
    },
  },
  {
    name: "San Diego",
    slug: "san-diego",
    tagline: "Expert landscaping for Duval County",
    driveTime: "45 min",
    driveDistance: "40 miles",
    metaTitle: "Nursery & Landscaping in San Diego, TX",
    metaDescription:
      "La King Nursery brings 28+ years of South Texas expertise to San Diego, TX. Plants, landscaping, lawn care, and irrigation for Duval County.",
    heroHeading: "South Texas Landscaping Expertise for San Diego, TX",
    content: {
      intro:
        "<p>San Diego, Texas is a town that wears its history proudly. As the Duval County seat, it is home to one of the most photographed historic courthouses in the region and sits along the Texas Heritage Trail that draws visitors through some of the most storied ranch country in the state. The ranching families, oil field workers, and longtime residents who call San Diego home share a connection to the land that runs deep, and at La King Nursery, we are honored to help that connection show up in their landscapes.</p>" +
        "<p>We make the 45-minute drive from Kingsville to San Diego regularly, working with homeowners in the established neighborhoods around the courthouse square, families in the residential areas along Highway 44, and ranch properties throughout Duval County. San Diego landscaping requires a specific understanding of the local conditions. This is not coastal Corpus Christi and it is not the Rio Grande Valley. It is its own microregion, and the plants and approaches that work here are not always the same as what you would find recommended in a general South Texas gardening guide.</p>" +
        "<p>We bring plants that are already growing strong in Zone 9b conditions, and we design landscapes that account for the realities of Duval County: the heat, the drought cycles, the soil, and the water limitations that shape every planting decision.</p>",
      localDetails:
        "<p>Duval County soil is predominantly a sandy loam with significant caliche deposits, especially in the western parts of the county near San Diego proper. This caliche layer can be just inches below the surface in some areas, making it critical to assess soil depth before choosing tree species or planning deep-rooted plantings. Where caliche is shallow, we use raised beds and above-grade planting mounds to give roots room to develop. Where the soil is deeper, the sandy loam actually provides excellent drainage and supports a wide range of native species without heavy amendment.</p>" +
        "<p>Water availability is the defining factor for landscaping in San Diego. The area receives less rainfall than the coastal communities, and many properties rely on well water or municipal supplies that come with usage restrictions during peak summer. We design every San Diego landscape with water efficiency as a core principle, specifying drip irrigation over spray heads, grouping plants by water needs, and selecting species that look good on minimal supplemental watering once established. Guayacan, desert willow, blackbrush, and various prickly pear species form the backbone of our Duval County plant palettes, with splashes of seasonal color from autumn sage, skeleton-leaf goldeneye, and Gregg's mistflower.</p>",
      whyUs:
        "<p>Forty miles does not change our commitment to quality. La King Nursery has been serving San Diego and Duval County for over 28 years, and we bring the same plant knowledge, design expertise, and hands-on care to every San Diego project that we deliver to our Kingsville neighbors. We specialize in <strong>water-efficient landscape design</strong>, <strong>drought-adapted plant selection</strong>, <strong>irrigation systems</strong>, and <strong>professional tree care</strong> tailored to Duval County's unique conditions. <a href=\"/contact/\">Schedule a free consultation</a> and discover what a landscape designed for your land can look like.</p>",
    },
  },
];
