export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  slug: string;
}

export const services: Service[] = [
  {
    id: 'plant-nursery',
    title: 'Plant Nursery',
    description:
      'Browse our wide selection of trees, shrubs, flowers, succulents, and native South Texas plants. Our knowledgeable staff helps you pick the right plants for your soil, sun, and style.',
    icon: 'Flower2',
    slug: 'plant-nursery',
  },
  {
    id: 'landscape-design',
    title: 'Landscape Design & Installation',
    description:
      'From concept to completion, our design team creates custom landscapes that thrive in the South Texas climate. We handle everything from plant selection to full installation.',
    icon: 'PencilRuler',
    slug: 'landscape-design',
  },
  {
    id: 'lawn-care',
    title: 'Lawn Care & Maintenance',
    description:
      'Keep your property looking its best year-round with our professional lawn care programs. We offer mowing, fertilization, weed control, and seasonal clean-ups.',
    icon: 'Scissors',
    slug: 'lawn-care',
  },
  {
    id: 'irrigation',
    title: 'Irrigation Systems',
    description:
      'Save water and keep your landscape healthy with professionally designed and installed irrigation systems. We service, repair, and upgrade sprinkler and drip systems.',
    icon: 'Droplets',
    slug: 'irrigation',
  },
  {
    id: 'hardscaping',
    title: 'Hardscaping & Pavers',
    description:
      'Add structure and beauty to your outdoor space with patios, walkways, retaining walls, and decorative stonework built to last in our South Texas conditions.',
    icon: 'Fence',
    slug: 'hardscaping',
  },
  {
    id: 'tree-services',
    title: 'Tree Services',
    description:
      'Protect your investment with expert tree trimming, removal, stump grinding, and health assessments. Our certified arborists keep your trees safe and thriving.',
    icon: 'TreeDeciduous',
    slug: 'tree-services',
  },
];
