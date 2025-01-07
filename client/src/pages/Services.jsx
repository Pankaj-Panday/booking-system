import React from "react";
import Container from "../components/common/Container";
import { Link } from "react-router";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Haircut & Styling",
      description:
        "Our haircut and styling services are designed to keep you looking your best, whether you want a classic cut or a trendy new look. Our skilled stylists are here to provide personalized recommendations that suit your face shape, hair type, and personal style. Using professional tools and techniques, we ensure a flawless finish that you’ll love. From basic trims to intricate styles for special occasions, we cater to all your hairstyling needs in a welcoming and relaxing environment.",
      img: "https://placehold.co/600x400",
    },
    {
      id: 2,
      title: "Facials & Skincare",
      description:
        "Pamper your skin with our range of facials and skincare treatments tailored to your skin type and concerns. Whether you’re looking to hydrate dry skin, reduce acne, or achieve a radiant glow, our experienced professionals use premium products to deliver outstanding results. We specialize in cleansing, exfoliating, and rejuvenating your skin while ensuring a relaxing experience. Let us help you achieve a healthy, youthful complexion and boost your confidence with our expert care.",
      img: "https://placehold.co/600x400",
    },
    {
      id: 3,
      title: "Manicure & Pedicure",
      description:
        "Indulge in our manicure and pedicure services that not only enhance the beauty of your hands and feet but also ensure their health and hygiene. From nail shaping and cuticle care to exfoliation and massage, our comprehensive treatments leave you feeling refreshed and relaxed. Choose from a variety of nail polishes, designs, and finishes to match your personal style or a special occasion. Our gentle yet effective techniques guarantee a soothing experience every time.",
      img: "https://placehold.co/600x400",
    },
    {
      id: 4,
      title: "Hair Coloring",
      description:
        "Transform your look with our professional hair coloring services. Whether you want bold highlights, a subtle balayage, or a complete color change, our stylists use high-quality, ammonia-free products to ensure vibrant and long-lasting results. We also offer expert color correction for clients who wish to fix uneven or undesirable tones. With a focus on hair health and your satisfaction, we create a custom coloring plan that enhances your natural beauty and complements your style.",
      img: "https://placehold.co/600x400",
    },
    {
      id: 5,
      title: "Makeup Services",
      description:
        "Elevate your beauty with our professional makeup services tailored to any occasion. Whether it’s a wedding, a party, or a corporate event, our makeup artists work closely with you to create the perfect look. Using premium, skin-friendly products and advanced techniques, we highlight your best features and ensure a flawless finish. From natural, everyday makeup to bold, glamorous styles, we cater to all preferences. Trust us to make you feel confident and camera-ready for your special moments.",
      img: "https://placehold.co/600x400",
    },
    {
      id: 6,
      title: "Waxing & Hair Removal",
      description:
        "Enjoy silky smooth skin with our gentle and effective waxing services. We offer a range of options for full body or specific areas like arms, legs, underarms, and the face. Our trained professionals use high-quality, skin-friendly wax to ensure minimal discomfort and long-lasting results. For those with sensitive skin, we provide specialized techniques to reduce irritation. Say goodbye to unwanted hair and hello to a confident, polished look with our reliable and hygienic hair removal solutions.",
      img: "https://placehold.co/600x400",
    },
    {
      id: 7,
      title: "Bridal Packages",
      description:
        "Make your wedding day even more special with our carefully curated bridal packages. From pre-wedding skincare and hair treatments to on-the-day makeup and hairstyling, we cover all your beauty needs to ensure you look radiant and picture-perfect. Our experienced team works closely with you to understand your vision and deliver a look that complements your outfit and personal style. Trust us to handle every detail, so you can relax and enjoy your big day with confidence.",
      img: "https://placehold.co/600x400",
    },
    {
      id: 8,
      title: "Massage Therapy",
      description:
        "Relax your mind and rejuvenate your body with our therapeutic massage services. Our skilled masseurs use a combination of techniques to relieve stress, improve circulation, and reduce muscle tension. Whether you need a deep tissue massage for chronic pain or a soothing aromatherapy session to unwind, we cater to your specific needs. Experience a serene environment and let us help you achieve a sense of balance and well-being. Each session is designed to leave you feeling refreshed and recharged.",
      img: "https://placehold.co/600x400",
    },
    {
      id: 9,
      title: "Hair Spa",
      description:
        "Treat your hair to the nourishment it deserves with our luxurious hair spa treatments. Perfect for repairing damage, restoring moisture, and improving scalp health, our hair spa services use premium products and techniques to give you soft, shiny, and manageable hair. Our experts assess your hair type and recommend the best treatment to meet your needs, whether it’s for dryness, frizz, or dandruff. Sit back, relax, and enjoy a calming experience that revitalizes your hair from root to tip.",
      img: "https://placehold.co/600x400",
    },
    {
      id: 10,
      title: "Body Polishing",
      description:
        "Achieve glowing, radiant skin with our professional body polishing treatments. Designed to exfoliate dead skin cells, improve texture, and boost circulation, this service leaves your skin feeling smooth and rejuvenated. We use high-quality scrubs and moisturizers that are gentle yet effective for all skin types. Whether you’re preparing for a special occasion or simply pampering yourself, our body polishing sessions provide a luxurious experience that enhances your overall appearance and confidence.",
      img: "https://placehold.co/600x400",
    },
  ];

  return (
    <main>
      <section className="bg-secondary-50 p-6 sm:p-12 lg:p-16">
        <Container>
          <header className="my-4">
            <h1 className="text-center font-body text-3xl font-bold uppercase text-primary-500 md:text-6xl">
              Our Services
            </h1>
          </header>
        </Container>
      </section>
      <section className="py-6 sm:py-12 lg:py-16">
        <Container>
          <div className="space-y-12">
            {services.map((service) => (
              <article
                key={service.id}
                className="flex flex-col gap-4 sm:max-lg:items-start lg:flex-row lg:gap-8"
              >
                <figure className="h-[250px] sm:h-[300px]">
                  <img
                    src={service.img}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </figure>
                <div className="flex flex-col justify-between lg:ml-auto lg:w-3/5">
                  <h2 className="font-body text-2xl font-medium tracking-tight text-primary-500">
                    {service.title}
                  </h2>
                  <p className="font-sans text-xl font-semibold text-primary-400 max-lg:my-4 lg:mb-8 lg:mt-2">
                    {service.description}
                  </p>
                  <Link to="/booking" className="primary-btn w-40">
                    Book Now
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
