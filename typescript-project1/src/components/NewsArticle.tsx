import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CalendarDays, Clock, User } from "lucide-react";
import newsHero from "@/assets/news-hero.jpg";

const NewsArticle = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Hero Image */}
      <div className="relative w-full h-96 rounded-lg overflow-hidden mb-8">
        <img 
          src={newsHero} 
          alt="Breaking News" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <Badge className="mb-2 bg-news-accent text-white">Breaking News</Badge>
        </div>
      </div>

      {/* Article Header */}
      <header className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="secondary">Technology</Badge>
          <Badge variant="secondary" className="font-tamil">தொழில்நுட்பம்</Badge>
        </div>
        
        <h1 className="text-4xl font-bold mb-4 leading-tight">
          Revolutionary AI Technology Transforms News Industry
        </h1>
        
        <h2 className="text-3xl font-tamil text-news-secondary mb-6 leading-relaxed">
          புரட்சிகர செயற்கை நுண்ணறிவு தொழில்நுட்பம் செய்தித் துறையை மாற்றுகிறது
        </h2>

        <div className="flex flex-wrap items-center gap-6 text-sm text-news-text-light">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>By Sarah Johnson & <span className="font-tamil">கார்த்திக் குமார்</span></span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarDays className="w-4 h-4" />
            <span>December 22, 2024</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>5 min read</span>
          </div>
        </div>
      </header>

      <Separator className="mb-8" />

      {/* Article Content */}
      <div className="prose prose-lg max-w-none">
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* English Content */}
          <Card className="p-6 bg-gradient-card">
            <h3 className="text-xl font-semibold mb-4 text-news-primary">English</h3>
            <p className="mb-4 leading-relaxed">
              The landscape of journalism is undergoing a dramatic transformation as artificial intelligence technologies become increasingly sophisticated. News organizations worldwide are embracing AI-powered tools to enhance their reporting capabilities and streamline content creation processes.
            </p>
            <p className="mb-4 leading-relaxed">
              "This technology allows us to process information faster than ever before," says Dr. Emily Chen, director of digital innovation at Global News Network. "We can now analyze massive datasets and identify trending stories within minutes."
            </p>
            <p className="mb-4 leading-relaxed">
              The integration of AI in newsrooms has enabled journalists to focus more on investigative work and in-depth analysis, while automated systems handle routine tasks such as data processing and initial story drafts.
            </p>
          </Card>

          {/* Tamil Content */}
          <Card className="p-6 bg-gradient-card">
            <h3 className="text-xl font-semibold mb-4 text-news-primary font-tamil">தமிழ்</h3>
            <p className="mb-4 leading-relaxed font-tamil">
              செயற்கை நுண்ணறிவு தொழில்நுட்பங்கள் மேலும் மேலும் அதிநவீனமாக மாறி வரும் நிலையில், பத்திரிகைத் துறையின் நிலப்பரப்பு வியக்கத்தக்க மாற்றத்திற்கு உள்ளாகி வருகிறது. உலகெங்கிலும் உள்ள செய்தி நிறுவனங்கள் தங்கள் அறிக்கையிடல் திறன்களை மேம்படுத்தவும், உள்ளடக்க உருவாக்க செயல்முறைகளை நெறிப்படுத்தவும் AI-இயங்கும் கருவிகளைத் தழுவி வருகின்றன.
            </p>
            <p className="mb-4 leading-relaxed font-tamil">
              "இந்த தொழில்நுட்பம் முன்பு இல்லாத வகையில் வேகமாக தகவல்களைச் செயலாக்க அனுமதிக்கிறது," என்கிறார் குளோபல் நியூஸ் நெட்வொர்க்கின் டிஜிட்டல் புதுமைத் துறையின் இயக்குநர் டாக்டர் எமிலி சென். "நாங்கள் இப்போது பாரிய தரவுத் தொகுப்புகளை பகுப்பாய்வு செய்து, நிமிடங்களில் trending கதைகளை அடையாளம் காண முடியும்."
            </p>
            <p className="mb-4 leading-relaxed font-tamil">
              செய்தி அறைகளில் AI இன் ஒருங்கிணைப்பு, தரவு செயலாக்கம் மற்றும் ஆரம்ப கதை வரைவுகள் போன்ற வழக்கமான பணிகளை தானியங்கி அமைப்புகள் கையாளும் போது, பத்திரிகையாளர்கள் விசாரணை வேலை மற்றும் ஆழமான பகுப்பாய்வில் அதிக கவனம் செலுத்த உதவுகிறது.
            </p>
          </Card>
        </div>

        {/* Shared Quote Section */}
        <Card className="p-8 mb-8 border-l-4 border-news-accent bg-news-bg-subtle">
          <blockquote className="text-xl italic text-news-secondary mb-4">
            "The future of journalism lies in the seamless collaboration between human creativity and artificial intelligence."
          </blockquote>
          <blockquote className="text-xl italic text-news-secondary mb-4 font-tamil">
            "பத்திரிகையின் எதிர்காலம் மனித படைப்பாற்றலுக்கும் செயற்கை நுண்ணறிவுக்கும் இடையிலான தடையற்ற ஒத்துழைப்பில் உள்ளது."
          </blockquote>
          <cite className="text-news-text-light">— Maria Rodriguez, Senior Technology Correspondent</cite>
        </Card>

        {/* Impact Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">Industry Impact / தொழில்துறை தாக்கம்</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-2 text-news-primary">Key Benefits</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Faster news processing and verification</li>
                <li>• Enhanced accuracy in fact-checking</li>
                <li>• Real-time sentiment analysis</li>
                <li>• Automated translation capabilities</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2 text-news-primary font-tamil">முக்கிய நன்மைகள்</h4>
              <ul className="space-y-2 text-gray-700 font-tamil">
                <li>• வேகமான செய்தி செயலாக்கம் மற்றும் சரிபார்ப்பு</li>
                <li>• உண்மை சரிபார்ப்பில் மேம்பட்ட துல்லியம்</li>
                <li>• நிகழ்நேர மனநிலை பகுப்பாய்வு</li>
                <li>• தானியங்கி மொழிபெயர்ப்பு திறன்கள்</li>
              </ul>
            </div>
          </div>
        </div>

        <Separator className="mb-6" />

        <p className="text-news-text-light text-sm">
          This article represents ongoing coverage of technological developments in journalism. 
          <span className="font-tamil ml-2">
            இந்த கட்டுரை பத்திரிகைத் துறையில் தொழில்நுட்ப வளர்ச்சிகளின் தொடர்ச்சியான கவரேஜைக் குறிக்கிறது.
          </span>
        </p>
      </div>
    </article>
  );
};

export default NewsArticle;