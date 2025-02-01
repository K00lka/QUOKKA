
import React from "react";

type Button = {tekst:string,direct_to:()=>void};

const App: React.FC = () => {
  const[scene, setScene] = React.useState<keyof typeof data>("Scena_1");
  const [gałązki, setGałązki] = React.useState<boolean>(false);
  const data:Record<string,{description:string,image:string,Question?:string,Baton_1:Button,Baton_2?:Button, Baton_3?:Button}>={
    Scena_1:{
      description: "Księżyc odbijający słońce, które zniknęło już jakiś czas temu za horyzontem wzywa cię do opuszczenia swojej norki. Lekko zaspana wyzierasz ze swojej przytulnej jamy. Inne kuoki już dawno wybrały się na poszukiwanie  pożywienia. Drepczesz więc samotnie, aż wpadasz na bardzo okazały krzak Guichenotia ledifolia",
      image: "/Act_1.jpeg",
      Question: "To na prawdę okazały krzak, może waro zabrać na zapas pare gałązek?",
      Baton_1:{
        tekst: "Nie zbieram",
        direct_to: () => setScene("Scena_2")
      },
      Baton_2:{
        tekst: "Zbieram",
        direct_to: () => {setScene("Scena_2"); setGałązki(true)}
      }
    },
    
    Scena_2:{
      description: "Wracasz do norki. W środku snu budzi cię hałas.",
      image: "/public/Act_2.jpeg",
      
      Baton_1:{
        tekst: "Dalej",
        direct_to: () => setScene("Scena_3")
      }
      
    },

    Scena_3:{
      description: "Wyściubisz nos z norki, oślepia cię światło słoneczne, ale swoim wielkim nochalem wyczuwasz nadchodzące zagrożenie - psy Dingo!",
      image: "/public/Act_3.jpeg",
      Question: "Bardzo się boję! Co mam robić?",
      Baton_1:{
        tekst: "Chowam się",
        direct_to: () => setScene("Scena_4a")
      },
      Baton_2:{
        tekst: "Uciekam",
        direct_to: () => { if (gałązki===false) setScene("Scena_4b_0"); else setScene("Scena_4b_1a")}
      },
      
      
    },
    Scena_4a:{
      description: "Zostajesz w norce i liczysz, że cię nie znajdą. Jednak bardzo się mylisz. Słyszysz jak psy obwąchują twoje drzwi...",
      image: "/public/Act_4a.jpeg",
      
      Baton_1:{
        tekst: "Dalej",
        direct_to: () => setScene("Fatal")
      }
      
    },
    Fatal:{
      description: "Umierasz",
      image: "/public/Game_over.jpeg",
      
      Baton_1:{
        tekst: "Spróbuj ponownie",
        direct_to: () => setScene("Scena_1")
      }
      
    },
    Scena_4b_0:{
      description: "Korzystasz z tylnego wyjścia. Wyjście było ryzykowne, ale wygłodniałe psy Dingo cię nie zauważyły. Chowasz się za głazem przy wyjściu z norki",
      image: "/public/Act_4b_0.jpeg",
      Question: "Niedaleko jest kuokowy magazyn budowlany, możnaby spróbować się doniego zakraść. A możelepiej uciec w siną dal?",
      Baton_1:{
        tekst: "Zakradam się",
        direct_to: () => setScene("Scena_6c")
      },
      Baton_2:{
        tekst: "Zostaję tu",
        direct_to: () => setScene("Scena_6a")
      }
      
    },
    Scena_4b_1a:{
      description: "Korzystasz z tylnego wyjścia, w łapki chwytasz zebrane wczesniej gałązki. Wyjście było ryzykowne, ale wygłodniałe psy Dingo cię nie zauważyły. Chowasz się za głazem przy wyjściu z norki",
      image: "/public/Act_4b_1a.jpeg",
      
      Baton_1:{
        tekst: "Uciekam",
        direct_to: () => setScene("Scena_6b")
      },
  
      Baton_2:{
        tekst: "Zakradam się",
        direct_to: () => {if (gałązki===false)setScene("Scena_6c"); else setScene("Scena_6c_0")}
      },
      Baton_3:{
        tekst: "Zostaję tu",
        direct_to: () => { if (gałązki===false) setScene("Scena_6a"); else setScene("Scena_6a_0")}
      }
      
    },
    
    
    Scena_6a:{
      description: "Za bardzo boisz się wyjść. Zostajesz za kamieniem. Po jakimś czasie zaczynasz słyszeć coraz bliższe kroki psów Dingo...",
      image: "/public/Act_6a.jpeg",

      
      Baton_1:{
        tekst: "Dalej",
        direct_to: () => setScene("Fatal")
      }
    },
    Scena_6a_0:{
      description: "Za bardzo boisz się wyjść. Zostajesz za kamieniem. Po jakimś czasie zaczynasz słyszeć coraz bliższe kroki psów Dingo...",
      image: "/public/Act_6a_0.jpeg",

      //alternatywny obbrazek z gałązkami
      Baton_1:{
        tekst: "Dalej",
        direct_to: () => setScene("Fatal")
      }
    },
    Scena_6b:{
      description: "Uciekasz tam, gdzie cię krótkie nóżki poniosą.Psy Dingo ruszaja w pościg za tobą, bo nie jesteś maratończykiem i głośno dyszysz. Masz jeszcze w zanadrzu jedną tajną broń",
      image: "/public/Act_6b.jpeg",
      
      Baton_1:{
        tekst: "Nie",
        direct_to: () => setScene("Scena_8a")
      },
      Baton_2:{
        tekst: "Tak",
        direct_to: () => setScene("Scena_8b")
      }
    },
    Scena_6c:{
      description: "Po cichutku zakradasz się do kuokowego magazynu budowlanego, pełno w nim zaokrąglonych kamieni. I właściwie tylko kamieni.",
      image: "/public/Act_6c.jpeg",
      
      Baton_1:{
        tekst: "Dalej",
        direct_to: () => setScene("Scena_7_1a")
      }
    },
    Scena_6c_0:{
      description: "Po cichutku zakradasz się do kuokowego magazynu budowlanego, pełno w nim zaokrąglonych kamieni. I właściwie tylko kamieni.",
      image: "/public/Act_6c_0.jpeg",
      
      Baton_1:{
        tekst: "Dalej",
        direct_to: () => setScene("Scena_7_1b")
      }
    },
   
    
    Scena_7_1a:{
      description: "Robisz się głodna, a niech to trzeba było zebrać wtedy gałązki. Burczenie w twoim brzzuchy zwabia psy Dingo. To koniec.",
      image: "/public/Act_7_1a.jpeg",
      
      Baton_1:{
        tekst: "Dalej",
        direct_to: () => setScene("Fatal")
      }
    },
    Scena_7_1b:{
      description: "Robisz si głodna, dobrze że zabrałaś gałązki. Wyciągasz je i zaspokajasz głód. Najedzony umysł zaczyna pracować. Obmyślasz plan, który ocali całą wioskę.",
      image: "/public/Act_7_1b.jpeg",
      
      Baton_1:{
        tekst: "Dalej",
        direct_to: () => setScene("Scena_8_1")
      }
    },
    Scena_8_1:{
      description: "Zbierasz kamienie i wychodzisz z magazynu.Wyciągasz młode kłoczątko z torby i upychasz do niej kamienie. Psy reagują na wrzask twojego potomstwa i biegną w twoją stronę rozwścieczone. Ciskasz w psy kamieniami z wyrzutni, które zebrałaś w magazynie. Psy Dingo uciekają z podkulonymi ogonami. Wioska uratowana! Pakujesz bombelka spowrotem do torby i wracasz do snu w norce.",
      image: "/public/Act_8_1.jpeg",
      
      Baton_1:{
        tekst: "Jeszcze raz!",
        direct_to: () => setScene("Scena_1")
      }
    },
    Scena_8a:{
      description: "Poddajesz się. Żadne wysiłki nie przyniosą już ratunku. Psy Dingo doganiają cię, to koniec.",
      image: "/public/Act_8a.jpeg",
      
      Baton_1:{
        tekst: "Dalej",
        direct_to: () => setScene("Fatal")
      }
    },
    Scena_8b:{
      description: "Katapultujesz ze swojej torby małe kuokczątko. Zaczyna wydawać z siebie niebotyczny krzyk, który odwraca uwagę psów Dingo i pozwala Ci na ucieczkę. Udaje ci się uciec w wysokie trawy. Przeżywasz, ale co to za życie. Do końca swojego krótkego kuokowego istnienia jesteś samotną, wygnaną matką abortystką.",
      image: "/public/Act_8b.jpeg",
      
      Baton_1:{
        tekst: "Jeszcze raz!",
        direct_to: () => setScene("Scena_1")
      }
    },
    
  


  };
  
  return (
    <div className="flex flex-col h-screen w-screen bg-[#323232] text-[#FAC452] font-mono">
      {/* Main Content */}
      <div className="flex flex-1 flex-row items-center justify-between p-5 gap-5">
        {/* Left Section */}
        <div className="flex flex-1 h-full min-w-[300px] max-w-[800px] bg-[#6B2D59] p-5 border-2 border-[#FAC452] rounded-lg">
          <p className="p-2">
            {data[scene].description}
          </p>
        </div>

        {/* Image Section */}
        <div className="flex flex-2 min-w-[400px] max-w-[800px] aspect-[4/3] bg-[#323232] border-2 border-[#FAC452] rounded-lg items-center justify-center">
        <img src={data[scene].image} className="w-full h-full"></img>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-[#893A75] p-5 text-center">
      {data[scene].Question}
        <div className="flex justify-center gap-5 mt-3 flex-wrap">
          <button onClick={data[scene].Baton_1.direct_to} className="border-2 border-[#FAC452] text-[#FAC452] px-5 py-2 rounded-lg transition hover:bg-[#FAC452] hover:text-[#6B2D59]">
           {data[scene].Baton_1.tekst}
          </button>
          {data[scene].Baton_2&&<button  onClick={data[scene].Baton_2.direct_to} className="border-2 border-[#FAC452] text-[#FAC452] px-5 py-2 rounded-lg transition hover:bg-[#FAC452] hover:text-[#6B2D59]">
          {data[scene].Baton_2.tekst}
          </button>}
          {data[scene].Baton_3&&<button  onClick={data[scene].Baton_3.direct_to} className="border-2 border-[#FAC452] text-[#FAC452] px-5 py-2 rounded-lg transition hover:bg-[#FAC452] hover:text-[#6B2D59]">
          {data[scene].Baton_3.tekst}
          </button>}
        </div>
      </div>
    </div>
  );
};

export default App;




