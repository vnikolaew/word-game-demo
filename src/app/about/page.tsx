import Image from "next/image";
import Link from "next/link";

const pageData = {
  pageTitle: "من نحن",
  pageContent: {
    description: "صمم هذا الاختبار مجموعة من الباحثين من عدة جامعات، من ضمنها:",
    affiliations: [
      {
        name: "جامعة الملك سعود",
        logo: "ksu_logo.png",
        url: "https://www.ksu.edu.sa/en",
      },
    ],
    contact: {
      welcomeMessage:
        "نرحب بأسئلتكم واستفساراتكم يمكنكم التواصل معنا عبر البريد الإلكتروني التالي:",
      email: "alzahrani.alaaa@gmail.com",
    },
  },
  metadata: {
    language: "ar",
    direction: "rtl",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white" dir={pageData.metadata.direction}>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {pageData.pageTitle}
          </h1>

          <p className="mt-2 text-xl text-gray-500 leading-8">
            {pageData.pageContent.description}
          </p>

          <div className="mt-2">
            <div className="grid grid-cols-1 gap-8">
              {pageData.pageContent.affiliations.map((affiliation, index) => (
                <div key={index} className="flex flex-col items-center">
                  <Link
                    href={affiliation.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="relative w-40 h-40">
                      <Image
                        src={`/images/${affiliation.logo}`}
                        alt={affiliation.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors">
                      {affiliation.name}
                    </h3>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-2 p-8 bg-gray-50 rounded-lg">
            <p className="text-lg text-gray-600 mb-4">
              {pageData.pageContent.contact.welcomeMessage}
            </p>
            <a
              href={`mailto:${pageData.pageContent.contact.email}`}
              className="text-lg text-blue-600 hover:text-blue-800 transition-colors"
            >
              {pageData.pageContent.contact.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
