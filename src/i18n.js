import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Jeddah": "Jeddah",
      "Medina": "Medina",
      "Makkah al Mukarramah":"Makkah al Mukarramah",
      "Istanbul": "Istanbul",
      "ankara": "ankara",
      
      "Eskipazar": "Eskipazar/karabük",
      "eskipazar":"eskipazar",
      "amman": "amman",
      "Çankırı": "Çankırı",
      "Maximum": "Maximum",
      "Minimum": "Minimum",
      "clear sky": "clear sky",
      "few clouds": "few clouds",
      "scattered clouds": "scattered clouds",
      "broken clouds": "broken clouds",
      "shower rain": "shower rain",
      "thunderstorm": "thunderstorm",
      "snow": "snow",
      "mist": "mist",
      "thunderstorm with light rain": "thunderstorm with light rain",
      "thunderstorm with rain": "thunderstorm with rain",
      "thunderstorm with heavy rain": "thunderstorm with heavy rain",
      "light thunderstorm": "light thunderstorm",
      "heavy thunderstorm": "heavy thunderstorm",
      "ragged thunderstorm": "ragged thunderstorm",
      "thunderstorm with heavy drizzle": "thunderstorm with heavy drizzle",
      "light intensity drizzle": "light intensity drizzle",
      "drizzle": "drizzle",
      "heavy intensity drizzle": "heavy intensity drizzle",
      "light intensity drizzle rain": "light intensity drizzle rain",
      "drizzle rain": "drizzle rain",
      "heavy intensity drizzle rain": "heavy intensity drizzle rain",
      "shower rain and drizzle": "shower rain and drizzle",
      "heavy shower rain and drizzle": "heavy shower rain and drizzle",
      "shower drizzle": "shower drizzle",
      "light rain": "light rain",
      "moderate rain": "moderate rain",
      "heavy intensity rain": "heavy intensity rain",
      "very heavy rain": "very heavy rain",
      "extreme rain": "extreme rain",
      "freezing rain": "freezing rain",
      "light intensity shower rain": "light intensity shower rain",
      "shower rain": "shower rain",
      "heavy intensity shower rain": "heavy intensity shower rain",
      "ragged shower rain": "ragged shower rain",
      "light snow": "light snow",
      "snow": "snow",
      "heavy snow": "heavy snow",
      "sleet": "sleet",
      "light shower sleet": "light shower sleet",
      "shower sleet": "shower sleet",
      "light rain and snow": "light rain and snow",
      "rain and snow": "rain and snow",
      "light shower snow": "light shower snow",
      "shower snow": "shower snow",
      "heavy shower snow": "heavy shower snow",
      "Mist": "Mist",
      "smoke": "smoke",
      "haze": "haze",
      "sand/dust whirls": "sand/dust whirls",
      "fog": "fog",
      "sand": "sand",
      "dust": "dust",
      "volcanic ash": "volcanic ash",
      "squalls": "squalls",
      "tornado": "tornado",
      "clear sky": "clear sky",
      "few clouds: 11-25%": "few clouds: 11-25%",
      "scattered clouds: 25-50%": "scattered clouds: 25-50%",
      "broken clouds: 51-84%": "broken clouds: 51-84%",
      "overcast clouds: 85-100%": "overcast clouds: 85-100%",
      "overcast clouds" : "overcast clouds",
      "clouds":"clouds",
      "makkah":"makkah",
      "Çankaya":"ankara",
      "Baytūnyā":"beitunia",
      "Amman Governorate":"Amman"
      

      
    }
  },
  ar: {
    translation: {
      "Amman":"عمان",
      "Baytūnyā":"بيتونيا",
      "Çankaya":"أنقرة",
      "Jeddah": "جدة",
      "Makkah":"مكة",
      "Medina": "المدينة",
      "Makkah al Mukarramah": " مكة المكرمة",
      "Istanbul": "إسطنبول",
      "ankara": "أنقرة",
      "beitunia": "بيتونيا",
      "Eskipazar": "كارابوك/اسكي بازار",
      "amman": "عمان",
      "Çankırı": "تشانكري",
      "Maximum": "الدرجة الكبرى",
      "Minimum": "الدرجة الصغرى",
      "clear sky": "سماء صافية",
      "few clouds": "غيوم قليلة",
      "scattered clouds": "غيوم متناثرة",
      "broken clouds": "غيوم متقطعة",
      "shower rain": "زخات مطر",
      "thunderstorm": "عاصفة رعدية",
      "snow": "ثلج",
      "mist": "ضباب",
      "thunderstorm with light rain": "عاصفة رعدية مع مطر خفيف",
      "thunderstorm with rain": "عاصفة رعدية مع مطر",
      "thunderstorm with heavy rain": "عاصفة رعدية مع مطر غزير",
      "light thunderstorm": "عاصفة رعدية خفيفة",
      "heavy thunderstorm": "عاصفة رعدية شديدة",
      "ragged thunderstorm": "عاصفة رعدية متقطعة",
      "thunderstorm with heavy drizzle": "عاصفة رعدية مع رذاذ كثيف",
      "light intensity drizzle": "رذاذ خفيف",
      "drizzle": "رذاذ",
      "heavy intensity drizzle": "رذاذ كثيف",
      "light intensity drizzle rain": "رذاذ مطر خفيف",
      "drizzle rain": "رذاذ مطر",
      "heavy intensity drizzle rain": "رذاذ مطر كثيف",
      "shower rain and drizzle": "زخات مطر ورذاذ",
      "heavy shower rain and drizzle": "زخات مطر كثيفة ورذاذ",
      "shower drizzle": "زخات رذاذ",
      "light rain": "مطر خفيف",
      "moderate rain": "مطر معتدل",
      "heavy intensity rain": "مطر كثيف",
      "very heavy rain": "مطر غزير جدًا",
      "extreme rain": "مطر شديد",
      "freezing rain": "مطر متجمد",
      "light intensity shower rain": "زخات مطر خفيفة",
      "shower rain": "زخات مطر",
      "heavy intensity shower rain": "زخات مطر كثيفة",
      "ragged shower rain": "زخات مطر متقطعة",
      "light snow": "ثلوج خفيفة",
      "snow": "ثلج",
      "heavy snow": "ثلوج كثيفة",
      "sleet": "مطر ثلجي",
      "light shower sleet": "زخات مطر ثلجي خفيفة",
      "shower sleet": "زخات مطر ثلجي",
      "light rain and snow": "مطر خفيف وثلج",
      "rain and snow": "مطر وثلج",
      "light shower snow": "زخات ثلج خفيفة",
      "shower snow": "زخات ثلج",
      "heavy shower snow": "زخات ثلج كثيفة",
      "Mist": "ضباب",
      "smoke": "دخان",
      "haze": "ضباب خفيف",
      "sand/dust whirls": "دوامات رمل/غبار",
      "fog": "ضباب",
      "sand": "رمل",
      "dust": "غبار",
      "volcanic ash": "رماد بركاني",
      "squalls": "عواصف",
      "tornado": "إعصار",
      "clear sky": "سماء صافية",
      "few clouds: 11-25%": "غيوم قليلة: 11-25%",
      "scattered clouds: 25-50%": "غيوم متناثرة: 25-50%",
      "broken clouds: 51-84%": "غيوم متقطعة: 51-84%",
      "overcast clouds: 85-100%": "غيوم ملبدة: 85-100%",
      "overcast clouds":"غيوم كثيفه",
      "clouds":"غائم",
      "eskipazar":"اسكي بازار"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;