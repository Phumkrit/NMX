import React from "react";
import art from "../IMG/arf.png";

const people = [
  {
    name: "Roti daddy",
    role: "ลิง",
    imageUrl:
      "https://scontent.fbkk6-2.fna.fbcdn.net/v/t1.6435-9/161736426_1114505428995403_1180403870190956022_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHoBHPQsjFeWhXFgGWi1B3JtTpKlA2qdTq1OkqUDap1Or4ecns1R_zVqr9S1vHYb4U9YHl1ReuggH1HJq9FbboD&_nc_ohc=RJxmlDr_QAUAX_oH676&tn=G9h72CtuxvkIOrN-&_nc_ht=scontent.fbkk6-2.fna&oh=00_AfBZK0gh5MKmIbopAyjHiT7f49r771X0eUbM58hQBfvI-w&oe=63DCC5A0",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Peerapol Sesakusai",
    role: "Artist",
    imageUrl:
      "https://scontent.fbkk6-2.fna.fbcdn.net/v/t39.30808-6/285042753_5384953481564555_4164464841105158791_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHHn-0s5v6w2lOqMKFUwQIdOr1LYDMsIio6vUtgMywiKlFGTVbA44ejLFUEiIzqMp5pdMoKEQjEON-oY49P89b8&_nc_ohc=snrjwZ7Ggs8AX_4NncA&_nc_ht=scontent.fbkk6-2.fna&oh=00_AfCUPpKmhU0ruuwkCNbjmikgF63fXNtYbHy20k4HZ0Htpw&oe=63BA493E",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "AfterTheRain",
    role: "Homosapien",
    imageUrl: "",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Golden daisy",
    role: "Homosapien",
    imageUrl:
      "https://scontent.fbkk6-2.fna.fbcdn.net/v/t39.30808-1/298116847_2502550526554723_7002077453449848099_n.jpg?stp=dst-jpg_p480x480&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeFIrfE3ptmKI5EK5LIsIYGavpsRFoMJLle-mxEWgwkuV9vhBxM6lV16Bmh6RUWUYMJ_rKn9KzPvhCB-MhhLmwsW&_nc_ohc=0i4AaM1ylDUAX8qBqjT&_nc_ht=scontent.fbkk6-2.fna&oh=00_AfA1HNMP5aKvTjpP1rqxH6vL8y-EEyfbhxeVC2H_RuYDLA&oe=63B9767A",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "BIG APE",
    role: "Homosapien",
    imageUrl: "https://imgur.com/B3yFe5o",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Michiko",
    role: "Homosapien",
    imageUrl:
      "https://scontent.fbkk5-6.fna.fbcdn.net/v/t39.30808-6/308653413_2032526420291831_2682082802538515525_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEXcxSKbEGANOAfboXAo2q5QhjzY4anCS1CGPNjhqcJLVVXFBecBezFWSyPjrgVONYe56jOr8ge6WOUa1XqB7Fg&_nc_ohc=0U_OCPMBaLoAX87gN2S&tn=L1Ii5ZTjlsPE4GMq&_nc_ht=scontent.fbkk5-6.fna&oh=00_AfBVdLUcfnz8HXlawM9PH0YTwUUqZ6c0BBZer0mrOLeR_g&oe=63BA13B0",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "แม่เพง",
    role: "Homosapien",
    imageUrl:
      "https://scontent.fbkk5-8.fna.fbcdn.net/v/t39.30808-6/308784373_5668166176556000_100984263545708038_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEGVuff3bGf1dmcN7uRuoV6iK8CP4Vv-suIrwI_hW_6y-Su1yo2qe65BGMUUf_qKcu3R14qpsmIodshVhSibn-t&_nc_ohc=g391ZnczMpcAX8hMjlB&_nc_ht=scontent.fbkk5-8.fna&oh=00_AfBQ1hiO0c82XgZJlbX9BP8ztj1l9BtDuAMFitbV8T662A&oe=63BA85FE",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Ngimreadwangim",
    role: "CameraWomen",
    imageUrl:
      "https://scontent.fbkk5-5.fna.fbcdn.net/v/t39.30808-6/324021265_3482718765348298_1664831118342076394_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHJktIRcSP-uH5GwlqjVlLfU6uRSW7uIdZTq5FJbu4h1iyPWicLX1F7fU1Wx6CvQAUNgnO23y6OQQ_VjXkKBuXK&_nc_ohc=bgRCMrb66QAAX8YdFc0&tn=L1Ii5ZTjlsPE4GMq&_nc_ht=scontent.fbkk5-5.fna&oh=00_AfCy0uLzwfEPJgx29t982cLxD33NkHvYrve808Q4CYvlmQ&oe=63BA7EEC",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "TIW HAWK EYE ตาเหี่ยว",
    role: "Loading...",
    imageUrl:
      "https://img.freepik.com/premium-vector/system-software-update-upgrade-concept-loading-process-screen-vector-illustration_175838-2182.jpg?w=2000",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "OPAL THUNWARyyyyyyyyyyyyy ชาติเปรต!!!!!!",
    role: "น้องพี่เพง",
    imageUrl:
      "https://scontent.fbkk5-5.fna.fbcdn.net/v/t39.30808-6/319860643_524174069750214_7705463526858415329_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeH03qlcrOeqNmwQdJoXs5S99-3jr8dNKKv37eOvx00oq9O7tq9pgLLU-L2yfw9FmFzFg15I1yrdRmeXJLWkW8Yz&_nc_ohc=pCu6xePYdlgAX9XrWE3&_nc_ht=scontent.fbkk5-5.fna&oh=00_AfDLv-R1-bKolFIH3httY3hoa98fSqhjECtVGG49-Zgqjg&oe=63B9CA34",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "เท่าช้าง",
    role: "ไก่ต้อก",
    imageUrl:
      "https://scontent.fbkk5-3.fna.fbcdn.net/v/t1.6435-9/148168914_3765913666787596_4520323698626023038_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEn_K2aHcNY1-DjrLLYVuO-BGCAU8--kAsEYIBTz76QC91A2fmxdIbnSGkozKXhjGsyFKbqbI2K6AwGN_yzQWw0&_nc_ohc=eGhAgwmHe-IAX_qgMbx&_nc_ht=scontent.fbkk5-3.fna&oh=00_AfCJqT9Ki5qzXWifu1MliLoKNr9Rva4FsToXg7l-GcVLow&oe=63DCE2B4",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "ริวจินโนคู้เร้",
    role: "",
    imageUrl:
      "https://scontent.fbkk5-6.fna.fbcdn.net/v/t31.18172-8/1495347_1117659654920063_253916454197088576_o.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHfTKXTLisDjxKiocI6wsHFr4v73ulCWpmvi_ve6UJamQof4-_uqyAbZRJnFLsEXHHa8E8qYsvCW22lNy2JUWzf&_nc_ohc=efzyv671sSQAX_Yac3_&_nc_ht=scontent.fbkk5-6.fna&oh=00_AfBRe3NXkW18Ku9M8AIlMT2zjYn1pj4Hhjg8T8__1D7GMA&oe=63DD07C3",
    twitterUrl: "#",
    linkedinUrl: "#",
  },

  // More people...
];

const Home = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="spance-y-5 sm:space-y-4 md:max-w-3xl xl:max-w-none text-center">
            <h2 className="text-3xl font-bold tracking-tighr sm:text-4xl">
              Those are our people
            </h2>
            <p>Weirdest society</p>
          </div>
          <ul
            role="list"
            className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="space-y-4">
                  <div className="aspect-w-3 aspect-h-2">
                    <img
                      className="rounded-lg object-cover drop-shadow-2xl"
                      src={person.imageUrl}
                      alt=""
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="space-y-1 text-lg font-medium leading-6">
                      <h3>{person.name}</h3>
                      <p className="text-indigo-600">{person.role}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
