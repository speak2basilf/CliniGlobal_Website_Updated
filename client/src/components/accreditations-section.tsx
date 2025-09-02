import { CheckCircle } from "lucide-react";

const accreditations = [
  {
    title: "IAO Accreditation",
    description: "International standards in healthcare education",
    logo: "/attached_assets/IAO.PNG",
    alt: "IAO Accreditation Logo",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    hoverColor: "hover:bg-blue-100"
  },
  {
    title: "ISO 9001:2015",
    description: "Quality management system certification",
    logo: "/attached_assets/ISO.PNG",
    alt: "ISO 9001:2015 Logo",
    bgColor: "bg-gray-50",
    borderColor: "border-gray-200",
    hoverColor: "hover:bg-gray-100"
  },
  {
    title: "LSSSDC Certified",
    description: "Life Sciences Sector approved programs",
    logo: "/attached_assets/LSSSDC.PNG",
    alt: "LSSSDC Certification Logo",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    hoverColor: "hover:bg-green-100"
  },
  {
    title: "Skill India Accreditations",
    description: "Government of India skill development initiative",
    logo: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    alt: "Skill India Logo",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    hoverColor: "hover:bg-purple-100"
  },
  {
    title: "NSDC Certified",
    description: "National Skill Development Corporation recognition",
    logo: "/attached_assets/NSDC.PNG",
    alt: "NSDC Certification Logo",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    hoverColor: "hover:bg-orange-100"
  },
  {
    title: "Asian International University",
    description: "Academic partnership and validation",
    logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    alt: "Asian International University Logo",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200",
    hoverColor: "hover:bg-indigo-100"
  }
];

export default function AccreditationsSection() {
  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900" data-testid="text-accreditations-title">
            Accreditations & <span className="text-blue-600">Endorsements</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed" data-testid="text-accreditations-description">
            Our commitment to excellence is validated by prestigious accreditations and industry-recognized endorsements, ensuring world-class education standards and career-ready training programs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-12">
          {accreditations.map((accreditation, index) => (
            <div 
              key={index}
              className={`${accreditation.bgColor} ${accreditation.borderColor} ${accreditation.hoverColor} border-2 p-6 rounded-xl text-center transition-all duration-300 hover:scale-105 hover:shadow-lg transform cursor-pointer group relative overflow-hidden`}
              data-testid={`accreditation-card-${index}`}
            >
              <div className="mb-4 flex justify-center">
                <img 
                  src={accreditation.logo}
                  alt={accreditation.alt}
                  className="w-16 h-16 object-contain rounded-lg group-hover:scale-110 transition-transform duration-300 shadow-sm"
                  data-testid={`accreditation-logo-${index}`}
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300" data-testid={`accreditation-title-${index}`}>
                {accreditation.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed" data-testid={`accreditation-description-${index}`}>
                {accreditation.description}
              </p>
              
              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/10 group-hover:to-blue-600/5 rounded-xl transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Globally Recognized Standards Badge */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-3 bg-white px-6 py-3 rounded-full border border-gray-200 shadow-sm">
            <CheckCircle className="w-5 h-5 text-blue-600" />
            <span className="text-gray-700 font-medium">Globally Recognized Standards</span>
            <CheckCircle className="w-5 h-5 text-green-600" />
          </div>
        </div>

      </div>
    </section>
  );
}