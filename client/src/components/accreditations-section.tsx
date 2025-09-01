import { CheckCircle } from "lucide-react";

const accreditations = [
  {
    title: "IAO Accreditation",
    description: "International standards in healthcare education",
    icon: "🏛️",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    hoverColor: "hover:bg-blue-100"
  },
  {
    title: "ISO 9001:2015",
    description: "Quality management system certification",
    icon: "⚙️",
    bgColor: "bg-gray-50",
    borderColor: "border-gray-200",
    hoverColor: "hover:bg-gray-100"
  },
  {
    title: "LSSSDC Certified",
    description: "Life Sciences Sector approved programs",
    icon: "🧬",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    hoverColor: "hover:bg-green-100"
  },
  {
    title: "Council for Clinical Research & Education (CCRE)",
    description: "Endorsed by regulatory authorities",
    icon: "🎓",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    hoverColor: "hover:bg-purple-100"
  },
  {
    title: "Asian International University, Manipur",
    description: "Validated by healthcare leaders",
    icon: "🏫",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    hoverColor: "hover:bg-orange-100"
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

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {accreditations.map((accreditation, index) => (
            <div 
              key={index}
              className={`${accreditation.bgColor} ${accreditation.borderColor} ${accreditation.hoverColor} border-2 p-6 rounded-xl text-center transition-all duration-300 hover:scale-105 hover:shadow-lg transform cursor-pointer group relative overflow-hidden`}
              data-testid={`accreditation-card-${index}`}
            >
              <div className="text-4xl mb-4 group-hover:animate-bounce transition-transform duration-300">
                {accreditation.icon}
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

        {/* Floating Query Button - Positioned in bottom right */}
        <div className="fixed bottom-6 right-6 z-40">
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-3 rounded-lg text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-200 flex items-center space-x-2 animate-pulse hover:animate-none">
            <span>💬</span>
            <span>Drop us a Query</span>
          </button>
        </div>
      </div>
    </section>
  );
}